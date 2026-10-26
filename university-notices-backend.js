// university-notices-backend.js - Live Auto-fetcher & Caching API for Calicut University Notices (CDOE & Regular)

const CACHE_TTL_SECONDS = 3600; // Cache for 1 hour

export async function handleUniversityNotices(request, env, ctx) {
  // 1. CORS Preflight
  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Max-Age": "86400"
      }
    });
  }

  if (request.method !== "GET" && request.method !== "HEAD") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json; charset=utf-8", "Access-Control-Allow-Origin": "*" }
    });
  }

  const url = new URL(request.url);
  const categoryFilter = (url.searchParams.get("category") || "all").toLowerCase();

  // 2. Check Cloudflare Cache
  const cacheKeyUrl = new URL(url.origin + "/api/notices");
  const cacheKey = new Request(cacheKeyUrl.toString(), { method: "GET" });
  let cache = null;
  try {
    cache = caches.default;
    const cachedResponse = await cache.match(cacheKey);
    if (cachedResponse) {
      const data = await cachedResponse.json();
      return filterAndReturnNotices(data, categoryFilter, "HIT");
    }
  } catch (e) {
    // Cache match error ignored
  }

  // 3. Auto-fetch from university sources in parallel
  let freshNotices = [];
  try {
    const [cdoeNotices, pareekshaNotices] = await Promise.allSettled([
      fetchCdoeNotices(),
      fetchPareekshaNotices()
    ]);

    const cdoeList = cdoeNotices.status === "fulfilled" ? cdoeNotices.value : [];
    const pbList = pareekshaNotices.status === "fulfilled" ? pareekshaNotices.value : [];

    freshNotices = [...cdoeList, ...pbList];

    if (freshNotices.length > 0) {
      const payload = {
        last_updated: new Date().toISOString(),
        total: freshNotices.length,
        cdoe_count: freshNotices.filter(n => n.category === "cdoe").length,
        regular_count: freshNotices.filter(n => n.category === "regular").length,
        notices: freshNotices
      };

      // Cache the response
      if (cache && ctx && ctx.waitUntil) {
        const cacheStoreResponse = new Response(JSON.stringify(payload), {
          status: 200,
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Cache-Control": `public, max-age=${CACHE_TTL_SECONDS}, s-maxage=${CACHE_TTL_SECONDS}`,
            "Access-Control-Allow-Origin": "*"
          }
        });
        ctx.waitUntil(cache.put(cacheKey, cacheStoreResponse));
      }

      return filterAndReturnNotices(payload, categoryFilter, "MISS");
    }
  } catch (err) {
    console.error("Auto fetch error:", err);
  }

  // 4. Fallback to pre-bundled static asset if live fetch failed
  try {
    if (env && env.ASSETS) {
      const fallbackReq = new Request(new URL("/data/university_notices.json", request.url));
      const fallbackResp = await env.ASSETS.fetch(fallbackReq);
      if (fallbackResp.ok) {
        const fallbackData = await fallbackResp.json();
        return filterAndReturnNotices(fallbackData, categoryFilter, "FALLBACK");
      }
    }
  } catch (e) {
    console.error("Fallback asset error:", e);
  }

  return new Response(JSON.stringify({
    last_updated: new Date().toISOString(),
    total: 0,
    cdoe_count: 0,
    regular_count: 0,
    notices: []
  }), {
    status: 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*"
    }
  });
}

function filterAndReturnNotices(data, categoryFilter, cacheStatus) {
  let list = data.notices || [];
  if (categoryFilter && categoryFilter !== "all") {
    list = list.filter(n => (n.category || "").toLowerCase() === categoryFilter);
  }

  return new Response(JSON.stringify({
    last_updated: data.last_updated,
    total: list.length,
    cdoe_count: (data.notices || []).filter(n => n.category === "cdoe").length,
    regular_count: (data.notices || []).filter(n => n.category === "regular").length,
    general_count: (data.notices || []).filter(n => n.category === "general").length,
    notices: list
  }), {
    status: 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=600",
      "X-Notices-Cache": cacheStatus
    }
  });
}

async function fetchCdoeNotices() {
  const notices = [];
  const resp = await fetch("https://cdoe.uoc.ac.in/notification/", {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    },
    cf: { cacheTtl: 3600, cacheEverything: true }
  });
  if (!resp.ok) return notices;

  const html = await resp.text();
  const aRegex = /<a\s+[^>]*href=["']([^"']+\.pdf)["'][^>]*>([\s\S]*?)<\/a>/gi;
  let m;
  let id = 1;
  while ((m = aRegex.exec(html)) !== null) {
    const href = m[1].trim();
    let title = m[2].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    const isNew = /\bNEW\b/i.test(title);
    title = title.replace(/\bNEW\b/gi, "").trim();
    if (title.length < 5 || /fee structure|refund policy|general information/i.test(title)) continue;

    const dm = href.match(/\/(\d{4})\/(\d{2})\//);
    const monthMap = {'01':'Jan','02':'Feb','03':'Mar','04':'Apr','05':'May','06':'Jun','07':'Jul','08':'Aug','09':'Sep','10':'Oct','11':'Nov','12':'Dec'};
    const date = dm ? `${monthMap[dm[2]] || dm[2]} ${dm[1]}` : "Recent";

    let subType = "Notification";
    const tLower = title.toLowerCase();
    if (/timetable|time table/i.test(tLower)) subType = "Timetable";
    else if (/internal/i.test(tLower)) subType = "Internal Exam";
    else if (/admission|rank/i.test(tLower)) subType = "Admission";
    else if (/scheme/i.test(tLower)) subType = "Scheme Change";
    else if (/assignment/i.test(tLower)) subType = "Assignment";

    notices.push({
      id: `cdoe-${id++}`,
      title,
      url: href,
      category: "cdoe",
      category_label: "CDOE (Distance/Online)",
      sub_type: subType,
      date,
      is_new: isNew || href.includes("2026"),
      source: "CDOE Calicut University"
    });
  }
  return notices;
}

async function fetchPareekshaNotices() {
  const notices = [];
  const resp = await fetch("https://pareekshabhavan.uoc.ac.in/?page=notifications", {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    },
    cf: { cacheTtl: 3600, cacheEverything: true }
  });
  if (!resp.ok) return notices;

  const text = await resp.text();
  const pbRegex = /card-title[^>]*>([\s\S]*?)<\/h[1-6]>\s*<span[^>]*>([\s\S]*?)<\/span>[\s\S]*?href=["']([^"']+\.pdf)["']/gi;
  let m;
  let id = 1;
  while ((m = pbRegex.exec(text)) !== null) {
    let title = m[1].replace(/<[^>]+>/g, "").replace(/[\u200b\u200e\u200f]/g, "").trim();
    let date = m[2].replace(/<[^>]+>/g, "").trim();
    let href = m[3].trim().replace(/^http:\/\/docs\.uoc\.ac\.in/, "https://docs.uoc.ac.in");
    if (!href.startsWith("http")) href = "https://pareekshabhavan.uoc.ac.in/" + href.replace(/^\//, "");
    if (title.length < 5 || /academic calendar|syllabus|fee structure/i.test(title)) continue;

    const tLower = title.toLowerCase();
    let subType = "Exam Notice";
    if (/timetable|time table|schedule/i.test(tLower)) subType = "Timetable";
    else if (/registration/i.test(tLower)) subType = "Exam Registration";
    else if (/result|position/i.test(tLower)) subType = "Results";
    else if (/postpon|reschedule/i.test(tLower)) subType = "Postponement";
    else if (/hall ticket/i.test(tLower)) subType = "Hall Ticket";

    notices.push({
      id: `reg-${id++}`,
      title,
      url: href,
      category: "regular",
      category_label: "Regular / Exam Bhavan",
      sub_type: subType,
      date,
      is_new: date.includes("2026") || /Oct|Nov|Dec/i.test(date),
      source: "Pareeksha Bhavan (UOC)"
    });
  }
  return notices;
}
