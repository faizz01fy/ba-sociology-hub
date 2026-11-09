function isAllowedOrigin(origin, workerOrigin) {
  if (!origin) return true;
  if (origin === workerOrigin) return true;
  const o = origin.toLowerCase();
  return o === "https://academichubfaiz.in" || 
         o === "https://www.academichubfaiz.in" || 
         o.endsWith(".academichubfaiz.in") || 
         o.endsWith(".workers.dev");
}

import {handleStudyHelper} from './study-helper-backend.js';
export {StudyHelperQuota} from './study-helper-backend.js';
import {handleUniversityNotices} from './university-notices-backend.js';
import {handleWhatsAppWebhook, handleWhatsAppList} from './whatsapp-webhook-backend.js';
const CHAT_PATH = "/api/chat";
const TRACKER_SCRIPT = "(()=>{let last=\"\";function decode(v){try{return decodeURIComponent(v)}catch(e){return v}}function title(v){return String(v||\"\").replace(/[-_]+/g,\" \").split(\" \").map(function(w){return w?w.charAt(0).toUpperCase()+w.slice(1):\"\"}).join(\" \")}function getDetailedActivity(){try{const path=location.pathname||\"/\";const search=location.search||\"\";const hash=decode((location.hash||\"\").slice(1));const params=new URLSearchParams(search);if(path.indexOf(\"voice-explanation\")!==-1){const playing=document.querySelector(\".chapter-card.playing\");const stickyBar=document.getElementById(\"sticky-audio-bar\");const stickyTitleEl=document.getElementById(\"sticky-title\");const stickyTitle=(stickyTitleEl?stickyTitleEl.textContent:\"\").trim();const hasSticky=stickyBar&&stickyBar.style.display!==\"none\"&&stickyTitle&&stickyTitle.indexOf(\"Playing lecture...\")===-1;if(playing||hasSticky){let t=\"\";if(playing){const ct=playing.querySelector(\".card-title\");if(ct)t=ct.textContent.trim()}if(!t&&hasSticky)t=stickyTitle;if(!t&&document.title&&document.title.indexOf(\"|\")!==-1){t=document.title.split(\"|\")[0].trim()}const isVid=playing&&(playing.querySelector(\"iframe\")||playing.querySelector(\"video\"));const prefix=isVid?\"\u25b6\ufe0f Watching: \":\"\ud83c\udfa7 Hearing: \";if(t)return(prefix+t).slice(0,110)}const heroSubj=document.getElementById(\"hero-subject-name\");let subj=heroSubj?heroSubj.textContent.trim():\"\";if(subj&&subj.toLowerCase().indexOf(\"loading\")!==-1)subj=\"\";if(!subj){const qSubj=params.get(\"subject\");if(qSubj)subj=title(qSubj)}if(subj){subj=subj.replace(/^[^\\w\\s\\u0D00-\\u0D7F]+/,\"\").trim();return(\"\ud83c\udfa7 Voice: \"+subj).slice(0,90)}return\"\ud83c\udfa7 Voice Explanations\"}if(path.indexOf(\"study-guide-reader\")!==-1){const badge=document.getElementById(\"activeDocBadge\");let docTitle=badge?badge.textContent.trim():\"\";if(!docTitle||docTitle===\"Study Guide\"){docTitle=params.get(\"title\")||\"\"}if(!docTitle){const f=params.get(\"file\");if(f)docTitle=title(f.split(\"/\").pop().replace(/\\.pdf$/i,\"\"))}if(!docTitle&&document.title){docTitle=document.title.replace(/[\u00b7|].*$/,\"\").trim()}let isSpeaking=false;try{isSpeaking=!!(window.speechSynthesis&&window.speechSynthesis.speaking)}catch(e){}const prefix=isSpeaking?\"\ud83d\udd0a Hearing Read-Aloud: \":\"\ud83d\udcd6 Reading: \";return(prefix+(docTitle||\"Study Guide\")).slice(0,110)}if(path.indexOf(\"test\")!==-1||path.indexOf(\"mcq\")!==-1||path.indexOf(\"quiz\")!==-1){let t=document.title?document.title.replace(/[\u00b7|].*$/,\"\").trim():\"\";if(!t||t.toLowerCase().indexOf(\"academic hub\")!==-1){const h1=document.querySelector(\"h1\");if(h1)t=h1.textContent.trim()}return(\"\ud83d\udcdd \"+(t||title(path.replace(/^\\//,\"\").replace(/\\.html$/,\"\")))).slice(0,90)}if(path.indexOf(\"reading\")!==-1||path.indexOf(\"-pdf\")!==-1||path.indexOf(\"notes\")!==-1||path.endsWith(\".pdf.html\")||path.indexOf(\"Companion\")!==-1||path.indexOf(\"Bilingual\")!==-1){let t=document.title?document.title.replace(/[\u00b7|].*$/,\"\").trim():\"\";if(!t||t.toLowerCase().indexOf(\"academic hub\")!==-1){const h1=document.querySelector(\"h1\");if(h1)t=h1.textContent.trim()}return(\"\ud83d\udcd6 \"+(t||title(path.replace(/^\\//,\"\").replace(/\\.html$/,\"\")))).slice(0,90)}if(path===\"/\"||path===\"/index.html\"){const labels={top:\"\ud83c\udfe0 Overview\",subjects:\"\ud83d\udcda Semester subjects\",tests:\"\ud83d\udcdd Practice tests\",\"ai-study\":\"\ud83e\udd16 AI Study Helper\",notices:\"\ud83d\udce2 Calicut Univ Notices\",support:\"\ud83d\udcac Support\"};if(labels[hash])return labels[hash];if(hash)return\"\ud83c\udfe0 Home \u00b7 \"+title(hash);return\"\ud83c\udfe0 Hub Home\"}if(document.title&&document.title.length>2){const clean=document.title.replace(/[\u00b7|].*$/,\"\").trim();if(clean&&clean.toLowerCase().indexOf(\"academic hub\")===-1&&clean.toLowerCase().indexOf(\"loading\")===-1){return clean.slice(0,90)}}return title(path.replace(/^\\//,\"\").replace(/\\.html$/,\"\")).slice(0,90)||\"Academic Hub Portal\"}catch(e){return\"Academic Hub Portal\"}}function record(force){try{const path=location.pathname||\"/\";const label=getDetailedActivity();const key=path+\"::\"+label;if(!force&&key===last)return;last=key;fetch(\"/api/traffic/section\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify({path:path,section:label}),keepalive:true}).catch(function(){})}catch(e){}}window.addEventListener(\"hashchange\",function(){record()});window.addEventListener(\"pageshow\",function(){setTimeout(record,250)});window.addEventListener(\"popstate\",function(){record()});window.addEventListener(\"play\",function(){setTimeout(function(){record(true)},150)},true);window.addEventListener(\"pause\",function(){setTimeout(function(){record(true)},150)},true);document.addEventListener(\"click\",function(e){if(e.target&&e.target.closest&&e.target.closest(\".btn-play-voice,.vpp-btn-pause,.vpp-skip-btn,.subj-tab-btn,#voicePlayBtn,#voiceStopBtn,.welcome-ch-btn,.drawer-subject-modules a,.drawer-subject-header\")){setTimeout(function(){record(true)},350)}},{passive:true});try{const titleEl=document.querySelector(\"title\");if(titleEl&&window.MutationObserver){new MutationObserver(function(){setTimeout(function(){record()},200)}).observe(titleEl,{subtree:true,characterData:true,childList:true})}}catch(e){}setTimeout(record,350);function livePresence(active){try{if(document.querySelector(\".hub-owner-traffic-control\"))return;let id=\"\";try{id=sessionStorage.getItem(\"hub_live_visitor\")||\"\";if(!id){id=\"v-\"+Date.now().toString(36)+\"-\"+Math.random().toString(36).slice(2)+\"-\"+Math.random().toString(36).slice(2);sessionStorage.setItem(\"hub_live_visitor\",id)}}catch(e){id=\"v-\"+Date.now().toString(36)+\"-\"+Math.random().toString(36).slice(2)+\"-\"+Math.random().toString(36).slice(2)}fetch(\"/api/traffic/presence\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify({visitorId:id,path:location.pathname||\"/\",section:getDetailedActivity(),active:active!==false}),keepalive:true}).catch(function(){})}catch(e){}}setTimeout(function(){livePresence(true)},400);setInterval(function(){if(!document.hidden)livePresence(true)},25000);document.addEventListener(\"visibilitychange\",function(){if(!document.hidden)livePresence(true)});window.addEventListener(\"pagehide\",function(){livePresence(false)})})();";
const OWNER_LIVE_SCRIPT = "(()=>{const count=document.getElementById('hub-live-count');if(!count)return;async function update(){try{const response=await fetch('/api/admin/live-visitors',{cache:'no-store',credentials:'same-origin'});if(response.ok){const data=await response.json();const active=Number(data.active)||0;count.textContent=String(active)}}catch(e){}}update();setInterval(()=>{if(!document.hidden)update()},15000);document.addEventListener('visibilitychange',()=>{if(!document.hidden)update()})})();";
const MAX_NAME = 32;
const MAX_MESSAGE = 500;
const MAX_STORED_MESSAGES = 100;
const RETENTION_MS = 7 * 24 * 60 * 60 * 1000;
const SESSION_WINDOW_MS = 30 * 1000;
const SESSION_MAX_MESSAGES = 5;
const ROOM_WINDOW_MS = 60 * 1000;
const ROOM_MAX_MESSAGES = 40;

function isPrivateBuPath(pathname) {
  let candidate = String(pathname || "/");
  for (let depth = 0; depth < 5; depth += 1) {
    candidate = candidate.replace(/\\/g, "/").replace(/\/{2,}/g, "/");
    if (/^\/bu(?:\/|$)/i.test(candidate)) return true;
    try {
      const decoded = decodeURIComponent(candidate);
      if (decoded === candidate) return false;
      candidate = decoded;
    } catch {
      return false;
    }
  }
  candidate = candidate.replace(/\\/g, "/").replace(/\/{2,}/g, "/");
  return /^\/bu(?:\/|$)/i.test(candidate);
}

function json(payload, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff"
    }
  });
}

function isLmsPdfPath(pathname) {
  let candidate = String(pathname || "/");
  for (let depth = 0; depth < 5; depth += 1) {
    candidate = candidate.replace(/\\/g, "/").replace(/\/{2,}/g, "/");
    const segments = candidate.split("/").filter(Boolean);
    const filename = segments[segments.length - 1] || "";
    // Academic Hub question banks, MCQs, study guides, and summary documents are always served
    if (/(?:mcq|question[-_]?bank|exam[-_]?cracker|study[-_]?guide|summary)/i.test(filename)) return false;
    const marked = segments.some(segment =>
      /(?:^|[_\s-])lms(?:[_\s.-]|$)/i.test(segment) ||
      /^downloaded_pdfs$/i.test(segment)
    );
    if (/\.pdf$/i.test(filename) && marked) return true;
    try {
      const decoded = decodeURIComponent(candidate);
      if (decoded === candidate) return false;
      candidate = decoded;
    } catch {
      return false;
    }
  }
  return false;
}

function unavailableLmsPdfResponse(request) {
  const body = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex, nofollow">
  <title>PDF not hosted here | Academic Hub</title>
  <style>
    body{font:16px/1.6 system-ui,sans-serif;max-width:680px;margin:12vh auto;padding:24px;color:#18342c}
    a{color:#205842}
  </style>
</head>
<body>
  <main>
    <h1>This PDF is not hosted on Academic Hub</h1>
    <p>Please access course materials from the original LMS source. For University of Calicut courses, visit <a href="https://learnspace.uoc.ac.in/">LearnSpace</a>.</p>
    <p>Questions about a document on Academic Hub? Email <a href="mailto:support@academichubfaiz.in">support@academichubfaiz.in</a>.</p>
    <p><a href="/">Return to Academic Hub</a></p>
  </main>
</body>
</html>`;
  return new Response(request.method === "HEAD" ? null : body, {
    status: 410,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Robots-Tag": "noindex, nofollow",
      "X-Content-Type-Options": "nosniff"
    }
  });
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    // Option A: Prune/Externalize third-party and raw university LMS PDFs
    const pdfPathLower = url.pathname.toLowerCase();
    if (pdfPathLower.endsWith('.pdf')) {
      if (pdfPathLower.includes('notesphere') || 
          pdfPathLower.includes('literarypracticeinmalayalam') || 
          pdfPathLower.includes('microeconomics_questions_and_answers') ||
          pdfPathLower.includes('module4_t1783445288761')) {
        
        if (pdfPathLower.includes('literarypracticeinmalayalam') || pdfPathLower.includes('module4_t1783445288761')) {
          return Response.redirect("https://academichubfaiz.in/mal-guide", 301);
        } else if (pdfPathLower.includes('microeconomics_questions_and_answers')) {
          return Response.redirect("https://academichubfaiz.in/micro-reading", 301);
        } else if (pdfPathLower.includes('notesphere-history')) {
          return Response.redirect("https://academichubfaiz.in/hist-reading", 301);
        } else if (pdfPathLower.includes('notesphere-arabic')) {
          return Response.redirect("https://academichubfaiz.in/arabic-reading", 301);
        } else {
          return Response.redirect("https://sde.uoc.ac.in/", 302);
        }
      }
    }

    const cfVisitor = request.headers.get("cf-visitor") || "";
    const isHttp = url.protocol === "http:" || 
                   request.headers.get("x-forwarded-proto") === "http" || 
                   cfVisitor.includes('"scheme":"http"');
    const isWww = url.hostname.toLowerCase() === "www.academichubfaiz.in";
    if (url.pathname.includes("${") || url.pathname.includes("$%7B") || url.pathname.includes("%24%7B")) {
      return Response.redirect("https://academichubfaiz.in/", 301);
    }
    if (isHttp || isWww) {
      url.protocol = "https:";
      if (isWww) url.hostname = "academichubfaiz.in";
      return Response.redirect(url.toString(), 301);
    }
    if (url.pathname === "/api/tts") {
      const tl = url.searchParams.get("tl") || "ml";
      const q = url.searchParams.get("q") || "";
      if (!q) return new Response("Missing q", { status: 400 });
      const gUrl = "https://translate.google.com/translate_tts?ie=UTF-8&tl=" + encodeURIComponent(tl) + "&client=tw-ob&q=" + encodeURIComponent(q);
      try {
        let resp = await fetch(gUrl, {
          headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            "Referer": "https://translate.google.com/"
          }
        });
        if (!resp.ok) {
          const gtxUrl = "https://translate.googleapis.com/translate_tts?client=gtx&ie=UTF-8&tl=" + encodeURIComponent(tl) + "&q=" + encodeURIComponent(q);
          resp = await fetch(gtxUrl, {
            headers: {
              "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
            }
          });
        }
        if (!resp.ok) {
          return new Response("TTS error: " + resp.status, { status: resp.status });
        }
        return new Response(resp.body, {
          headers: {
            "Content-Type": "audio/mpeg",
            "Cache-Control": "public, max-age=86400",
            "Access-Control-Allow-Origin": "*"
          }
        });
      } catch (err) {
        return new Response("TTS fetch failed: " + err.message, { status: 502 });
      }
    }
    if (url.pathname === "/live-owner.js" && (request.method === "GET" || request.method === "HEAD")) return new Response(OWNER_LIVE_SCRIPT,{headers:{"Content-Type":"application/javascript; charset=utf-8","Cache-Control":"no-store","X-Content-Type-Options":"nosniff"}});
    if (url.pathname === "/traffic-tracker.js" && (request.method === "GET" || request.method === "HEAD")) return new Response(TRACKER_SCRIPT,{headers:{"Content-Type":"application/javascript; charset=utf-8","Cache-Control":"no-store","X-Content-Type-Options":"nosniff"}});
    if (url.pathname === '/api/study-helper' || url.pathname === '/api/study-helper/status') return handleStudyHelper(request, env);
    if (url.pathname === '/api/notices') return handleUniversityNotices(request, env, ctx);
    if (url.pathname === '/api/whatsapp/webhook') return handleWhatsAppWebhook(request, env, ctx);
    if (url.pathname === '/api/whatsapp/updates') return handleWhatsAppList(request, env);
    const room = env.TRAFFIC_ROOM.get(env.TRAFFIC_ROOM.idFromName("academic-hub-owner-traffic"));
    if (isPrivateBuPath(url.pathname)) {
      if (request.method !== "GET" && request.method !== "HEAD") return json({error:"Method not allowed."},405);
      const buSession = await room.fetch(await adminRequest(request, env, "https://internal/admin/api/admin/session"));
      if (!buSession.ok) {
        const next = url.pathname + url.search;
        return new Response(null,{status:303,headers:{Location:"/admin/login?next="+encodeURIComponent(next),"Cache-Control":"no-store","X-Robots-Tag":"noindex, nofollow"}});
      }
      if (url.pathname === "/bu") return new Response(null,{status:308,headers:{Location:"/bu/"+url.search,"Cache-Control":"no-store"}});
      const buAsset = await env.ASSETS.fetch(request);
      const privateBuAsset = new Response(buAsset.body,buAsset);
      privateBuAsset.headers.set("Cache-Control","private, no-store");
      privateBuAsset.headers.set("Vary","Cookie");
      privateBuAsset.headers.set("X-Robots-Tag","noindex, nofollow");
      return privateBuAsset;
    }
    if (url.pathname.startsWith("/admin") || url.pathname.startsWith("/api/admin/")) {
      if (!["/admin/login", "/admin/traffic", "/api/admin/login", "/api/admin/logout", "/api/admin/traffic", "/api/admin/session", "/api/admin/results", "/api/admin/live-visitors"].includes(url.pathname)) return json({error:"Not found"},404);
      if (request.method === "POST" && request.headers.get("Origin") !== url.origin) return json({error:"Forbidden"},403);
      if (url.pathname === "/admin/login" && request.method === "GET") return adminPage(false);
      if (typeof env.ADMIN_PASSWORD !== "string" || !env.ADMIN_PASSWORD) return json({error:"The active Worker is missing its ADMIN_PASSWORD runtime secret."},503);
      if (env.ADMIN_PASSWORD.length < 16) return json({error:"The saved ADMIN_PASSWORD is shorter than 16 characters. Update the runtime secret to a longer password."},503);
      if (url.pathname === "/api/admin/results") {
        if (request.method !== "GET") return json({error:"Method not allowed."},405);
        const session = await room.fetch(await adminRequest(request, env, "https://internal/admin/api/admin/session"));
        if (!session.ok) return session;
        return fetchMockTestResults(env);
      }
      if (url.pathname === "/api/admin/live-visitors") {
        if (request.method !== "GET") return json({error:"Method not allowed."},405);
        return room.fetch(await adminRequest(request, env, "https://internal/admin/api/admin/live-visitors"));
      }
      if (url.pathname === "/admin/traffic" && request.method === "GET") {
        const result = await room.fetch(await adminRequest(request, env, "https://internal/admin" + url.pathname));
        if (!result.ok) return new Response(null,{status:303,headers:{Location:"/admin/login","Cache-Control":"no-store"}});
        const initialData = await result.json().catch(() => null);
        return adminPage(true, initialData);
      }
      return room.fetch(await adminRequest(request, env, "https://internal/admin" + url.pathname));
    }
    if (url.pathname === "/api/traffic/section") {
      if (request.method !== "POST") return json({error:"Method not allowed."},405);
      const origin = request.headers.get("Origin"); if (origin && !isAllowedOrigin(origin, url.origin)) return json({error:"Forbidden"},403);
      if (Number(request.headers.get("Content-Length")) > 2048) return json({error:"Request too large."},413);
      let input; try { input = await request.json(); } catch { return json({error:"Invalid request."},400); }
      const path=typeof input.path==="string" ? input.path.slice(0,160) : "";
      const section=cleanText(input.section,140);
      if (!path.startsWith("/") || path.startsWith("//") || !section) return json({error:"Invalid section."},400);
      const ip=request.headers.get("CF-Connecting-IP") || "Unavailable";
      const isOwner = (request.headers.get("Cookie") || "").includes("__Host-hub_admin=");
      return room.fetch(new Request("https://internal/internal/section",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ip,path,section,isOwner})}));
    }
    if (url.pathname === "/api/traffic/presence") {
      if (request.method !== "POST") return json({error:"Method not allowed."},405);
      const origin = request.headers.get("Origin"); if (origin && !isAllowedOrigin(origin, url.origin)) return json({error:"Forbidden"},403);
      if (Number(request.headers.get("Content-Length")) > 2048) return json({error:"Request too large."},413);
      let body; try { body=await request.text(); } catch { return json({error:"Invalid request."},400); }
      if (body.length>2048) return json({error:"Request too large."},413);
      let input; try { input=JSON.parse(body); } catch { return json({error:"Invalid request."},400); }
      if (!input || typeof input!=="object" || Array.isArray(input)) return json({error:"Invalid presence."},400);
      const visitorId=typeof input.visitorId==="string" ? input.visitorId.slice(0,80) : "";
      const path=typeof input.path==="string" ? input.path.slice(0,160) : "";
      const section=cleanText(input.section,140);
      if (!/^[a-zA-Z0-9-]{16,80}$/.test(visitorId) || !path.startsWith("/") || path.startsWith("//")) return json({error:"Invalid presence."},400);
      const active=input.active!==false;
      return room.fetch(new Request("https://internal/internal/presence",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({visitorId,path,section,active})}));
    }
    if (url.pathname === CHAT_PATH) {
      if (request.method !== "GET" && request.method !== "POST") return json({error:"Method not allowed."},405);
      const chat = env.CHAT_ROOM.get(env.CHAT_ROOM.idFromName("ba-sociology-semester-chat"));
      return chat.fetch(request);
    }
    if (url.pathname === "/api/chat/status") {
      if (request.method !== "GET") return json({error:"Method not allowed."},405);
      const isMod = await isAuthorizedModerator(request, env, room);
      return json({ isModerator: isMod });
    }
    if (url.pathname === "/api/chat/auth") {
      if (request.method !== "POST") return json({error:"Method not allowed."},405);
      const origin = request.headers.get("Origin"); if (origin && !isAllowedOrigin(origin, url.origin)) return json({error:"Forbidden"},403);
      if (!env.ADMIN_PASSWORD || env.ADMIN_PASSWORD.length < 16) return json({error:"Moderator access is not configured."},503);
      let input; try { input = await request.json(); } catch { return json({error:"Invalid request."},400); }
      const expected = await digest(env.ADMIN_PASSWORD);
      const actual = await digest(typeof input.password === "string" ? input.password : "");
      let mismatch = 0;
      for (let i = 0; i < expected.length; i++) mismatch |= expected.charCodeAt(i) ^ actual.charCodeAt(i);
      if (mismatch) return json({error:"Incorrect password."},401);
      const loginRes = await room.fetch(await adminRequest(new Request("https://internal/admin/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: input.password })
      }), env, "https://internal/admin/api/admin/login"));
      const setCookie = loginRes.headers.get("Set-Cookie");
      const res = json({ ok: true, isModerator: true });
      if (setCookie) res.headers.set("Set-Cookie", setCookie);
      return res;
    }
    if (url.pathname === "/api/chat/delete") {
      if (request.method !== "POST") return json({error:"Method not allowed."},405);
      const origin = request.headers.get("Origin");
      if (origin && origin !== url.origin) return json({error:"Forbidden"},403);
      let input; try { input = await request.json(); } catch { return json({error:"Invalid request."},400); }
      const isMod = await isAuthorizedModerator(request, env, room, input?.adminPassword);
      if (!isMod) return json({error:"Unauthorized. Moderator login required."},401);
      const msgId = String(input?.id || "").trim();
      if (!msgId) return json({error:"Missing message ID."},400);
      const chat = env.CHAT_ROOM.get(env.CHAT_ROOM.idFromName("ba-sociology-semester-chat"));
      return chat.fetch(new Request("https://internal/internal/chat/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: msgId })
      }));
    }
    if (url.pathname === "/api/chat/clear") {
      if (request.method !== "POST") return json({error:"Method not allowed."},405);
      const origin = request.headers.get("Origin");
      if (origin && origin !== url.origin) return json({error:"Forbidden"},403);
      let input = {}; try { input = await request.json(); } catch {}
      const isMod = await isAuthorizedModerator(request, env, room, input?.adminPassword);
      if (!isMod) return json({error:"Unauthorized. Moderator login required."},401);
      const chat = env.CHAT_ROOM.get(env.CHAT_ROOM.idFromName("ba-sociology-semester-chat"));
      return chat.fetch(new Request("https://internal/internal/chat/clear", {
        method: "POST"
      }));
    }
    if (url.pathname === "/api/test-results/submit") {
      // Test report submissions are kept ALIVE 24/7 (lightweight 1-call submissions do not drain quota)
      if (request.method !== "POST") return json({error:"Method not allowed."},405);
      const origin = request.headers.get("Origin"); if (origin && !isAllowedOrigin(origin, url.origin)) return json({error:"Forbidden"},403);
      const declaredLength = Number(request.headers.get("Content-Length") || 0);
      if (declaredLength > 16384) return json({error:"Request too large."},413);
      let body;
      try { body = await request.text(); } catch { return json({error:"Invalid request."},400); }
      if (body.length > 16384) return json({error:"Request too large."},413);
      let payload;
      try { payload = JSON.parse(body); } catch { return json({error:"Invalid JSON."},400); }
      if (!payload || typeof payload !== "object" || Array.isArray(payload)) return json({error:"Invalid result."},400);
      if (!env.RESULTS_API || typeof env.RESULTS_API.fetch !== "function") return json({error:"The mock test results service is not connected."},503);
      let upstream;
      try {
        upstream = await env.RESULTS_API.fetch(new Request("https://results.internal/submit", {
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(payload)
        }));
      } catch {
        return json({error:"The mock test results service could not be reached."},502);
      }
      const responseBody = await upstream.text();
      return new Response(responseBody, {status:upstream.status,headers:{"Content-Type":"application/json; charset=utf-8","Cache-Control":"no-store","X-Content-Type-Options":"nosniff"}});
    }
    if (url.pathname.startsWith("/api/") || url.pathname.startsWith("/internal/")) return json({error:"Not found"},404);
    const dest = request.headers.get("Sec-Fetch-Dest");
    const mode = request.headers.get("Sec-Fetch-Mode");
    const accept = request.headers.get("Accept") || "";
    const isInternalReader = dest === "empty" || 
                             request.headers.get("X-Requested-With") === "Reader" || 
                             url.searchParams.get("raw") === "1" || 
                             url.searchParams.get("reader") === "1";
    const isBrowserNavigation = dest === "document" || mode === "navigate" || accept.includes("text/html");

    if ((request.method === "GET" || request.method === "HEAD") && isLmsPdfPath(url.pathname)) {
      if (!isInternalReader) {
        return unavailableLmsPdfResponse(request);
      }
    }

    // Redirect legacy/unverified Carlin / Soft Language PDF or reader requests to the original euphemisms study guide
    const fileParam = (url.searchParams.get('file') || '').toLowerCase();
    const pathLower = url.pathname.toLowerCase();
    if (pathLower.includes('carlin') || 
        pathLower.includes('softlanguage') || 
        pathLower.includes('soft_language') ||
        fileParam.includes('carlin') || 
        fileParam.includes('softlanguage') || 
        fileParam.includes('soft_language')) {
      return Response.redirect(new URL('/euphemisms-and-soft-language-study-guide.html', request.url).toString(), 301);
    }

    // Redirect duplicate history test route to canonical test URL
    if (url.pathname === '/history-of-keralam-mcq-test' || url.pathname === '/history-of-keralam-mcq-test.html') {
      return Response.redirect(new URL('/history-mock-test', request.url).toString(), 301);
    }

    // Secure PDF Routing: Intercept any direct browser navigation/access to any .pdf file and route to reader only
    if ((request.method === "GET" || request.method === "HEAD") && url.pathname.toLowerCase().endsWith('.pdf')) {
      if (isBrowserNavigation || !isInternalReader) {
        let cleanFile = decodeURIComponent(url.pathname.replace(/^\/+/, ''));
        const readerUrl = new URL(`/study-guide-reader.html?file=${encodeURIComponent(cleanFile)}`, request.url);
        if (cleanFile.toLowerCase().includes('mcq')) readerUrl.searchParams.set('tab', 'mcq');
        if (url.searchParams.has('v')) readerUrl.searchParams.set('v', url.searchParams.get('v'));
        return Response.redirect(readerUrl.toString(), 302);
      }
    }

    let response = await env.ASSETS.fetch(request);
    if (!response.ok && !url.pathname.includes('.')) {
      try {
        const cleanHtmlUrl = new URL(url.pathname + '.html' + url.search, request.url);
        const cleanResp = await env.ASSETS.fetch(new Request(cleanHtmlUrl, request));
        if (cleanResp.ok) {
          response = cleanResp;
        }
      } catch (_) {}
    }
    if (!response.ok && url.pathname.toLowerCase().endsWith('.pdf')) {
      const candidates = [];
      const decodedPath = decodeURIComponent(url.pathname);
      if (decodedPath.includes('/Malayalam PDF/')) {
        candidates.push(decodedPath.replace('/Malayalam PDF/', '/Malayalam_PDF/'));
      }
      if (decodedPath.includes('/Malayalam_PDF/')) {
        candidates.push(decodedPath.replace('/Malayalam_PDF/', '/Malayalam PDF/'));
      }
      if (decodedPath.includes('/LMS PDF/')) {
        candidates.push(decodedPath.replace('/LMS PDF/', '/LMS_PDF/'));
      }
      if (decodedPath.includes('/LMS_PDF/')) {
        candidates.push(decodedPath.replace('/LMS_PDF/', '/LMS PDF/'));
      }
      if (decodedPath.includes('/Philosophy of AI/')) {
        candidates.push(decodedPath.replace('/Philosophy of AI/', '/philosophy of AI/'));
      }
      if (decodedPath.includes('/philosophy of AI/')) {
        candidates.push(decodedPath.replace('/philosophy of AI/', '/Philosophy of AI/'));
      }
      if (decodedPath.includes('/History of Keralam/')) {
        candidates.push(decodedPath.replace('/History of Keralam/', '/History/'));
      }
      const parts = decodedPath.split('/');
      const filename = parts[parts.length - 1];
      candidates.push('/pdfs/' + filename);
      candidates.push('/' + filename);

      for (const cPath of candidates) {
        try {
          const altUrl = new URL(encodeURI(cPath), request.url);
          const altResp = await env.ASSETS.fetch(new Request(altUrl, request));
          if (altResp.ok) {
            response = altResp;
            break;
          }
        } catch (_) {}
      }
    }
    if (response && response.ok && url.pathname.toLowerCase().endsWith('.pdf')) {
      const pdfHeaders = new Headers(response.headers);
      pdfHeaders.set("Content-Disposition", "inline");
      pdfHeaders.set("X-Content-Type-Options", "nosniff");
      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: pdfHeaders
      });
    }
    if (request.method === "GET" && response.ok && response.headers.get("Content-Type")?.includes("text/html")) {
      const hasAdminCookie = (request.headers.get("Cookie") || "").includes("__Host-hub_admin=");
      let isOwner = false;
      if (hasAdminCookie) {
        try {
          const session = await room.fetch(await adminRequest(request, env, "https://internal/admin/api/admin/session"));
          isOwner = session.ok;
        } catch {}
      }

      const task = room.fetch(new Request("https://internal/internal/visit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ip: request.headers.get("CF-Connecting-IP") || "Unavailable",
          path: url.pathname,
          country: request.cf?.country || "XX",
          region: request.cf?.region || "",
          city: request.cf?.city || "",
          isp: request.cf?.asOrganization || "",
          device: parseDevice(request.headers.get("User-Agent"), request.headers.get("sec-ch-ua-mobile")),
          ref: parseReferrer(request.headers.get("Referer"), url.hostname),
          isOwner
        })
      })).catch(() => {});
      ctx.waitUntil(task);

      const isUtilityPath = /^\/(?:privacy-policy|terms|disclaimer|contact|about|study-guide-reader|voice-explanation|voice|econ_voice)(?:\.html)?$/i.test(url.pathname);
      
      const cookieHeader = request.headers.get("Cookie") || "";
      const isConsentDenied = cookieHeader.includes("hub_consent=denied");
      const isConsentGranted = cookieHeader.includes("hub_consent=granted");

      const isEU = request.cf?.isEUCountry === "1" || request.cf?.isEUCountry === true;
      const euCountries = new Set([
        "AT","BE","BG","HR","CY","CZ","DK","EE","FI","FR","DE","GR","HU","IE",
        "IT","LV","LT","LU","MT","NL","PL","PT","RO","SK","SI","ES","SE",
        "GB","UK","CH","IS","LI","NO","GI","GG","JE","IM"
      ]);
      const visitorCountry = (request.cf?.country || "").toUpperCase();
      const glParam = (url.searchParams.get("gl") || "").toUpperCase();
      const isPreview = url.searchParams.has("fc") || 
                        url.searchParams.has("fctype") || 
                        url.searchParams.has("preview_cmp") || 
                        url.searchParams.has("fc_preview") || 
                        url.searchParams.has("preview") || 
                        url.searchParams.has("test_consent") || 
                        glParam === "EEA" || 
                        euCountries.has(glParam);

      const isEuropeanVisitor = isEU || euCountries.has(visitorCountry) || isPreview;

      response = new HTMLRewriter()
        .on("head", {
          element(el) {
            el.append(`<script>window.HUB_IS_EUROPE = ${isEuropeanVisitor ? 'true' : 'false'};</script>`, { html: true });
            
            // Basic Consent Mode controller for GA4 + IAB TCF listener
            el.append('<script src="/consent-banner.js?v=20261109_official"></script>', { html: true });


            // Standard AdSense script on all monetized content pages (loads published Google CMP message & ads)
            if (!isUtilityPath && !/test|mock/i.test(url.pathname)) {
              el.append('<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6526381938888583" crossorigin="anonymous"></script>', { html: true });
            }
          }
        })
        .on("script[src*='googletagmanager.com/gtag/js']", {
          element(el) {
            el.remove();
          }
        })
        .on("body", {
          element(el) {
            if (isEuropeanVisitor) {
              // Discreet button to reopen Google certified privacy choices if needed
              el.append('<button id="hub-consent-reopen" type="button" onclick="window.hubOpenConsent()" aria-label="Privacy and Cookie Settings" style="position:fixed;bottom:12px;left:12px;z-index:9999;background:rgba(23,59,53,0.92);color:#fff;border:1px solid rgba(255,255,255,0.4);border-radius:6px;padding:6px 12px;font:500 12px system-ui,sans-serif;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,0.25);">🛡️ Privacy &amp; Cookie Settings</button>', { html: true });
            }
          el.append('<script src="/traffic-tracker.js?v=20261105_act2" defer></script>', { html: true });
          if (isOwner) {
            el.append('<style id="hub-owner-traffic-control-style">.hub-owner-traffic-control{position:fixed!important;right:max(12px,env(safe-area-inset-right,0px))!important;top:max(12px,env(safe-area-inset-top,0px))!important;z-index:2147483647!important;display:inline-flex!important;align-items:center;justify-content:center;gap:.45rem;min-height:48px;min-width:48px;max-width:calc(100vw - 24px);padding:12px 18px;box-sizing:border-box;border:2px solid #fff;border-radius:999px;background:#173b35;color:#fff!important;box-shadow:0 6px 24px rgba(0,0,0,.32);font:700 16px/1.2 system-ui,sans-serif;text-decoration:none!important;touch-action:manipulation;-webkit-tap-highlight-color:transparent}.hub-owner-traffic-control:hover,.hub-owner-traffic-control:focus-visible{background:#225c50;outline:3px solid #f3c969;outline-offset:2px}.hub-owner-traffic-control:active{transform:translateY(1px)}@media(max-width:600px){.hub-owner-traffic-control{min-height:52px;max-width:calc(100vw - 24px);padding:14px 18px;font-size:16px}}</style>', { html: true });
            el.append('<a class="hub-owner-traffic-control" href="/admin/traffic#radar" aria-label="Open private live visitors dashboard">Live visitors <b id="hub-live-count" aria-live="polite">…</b> <span aria-hidden="true">↗</span></a>', { html: true });
            el.append('<script src="/live-owner.js" defer></script>', { html: true });
          }
        }
      }).transform(response);

      const htmlHeaders = new Headers(response.headers);
      htmlHeaders.set("Cache-Control", "private, no-cache, no-store, max-age=0, must-revalidate");
      htmlHeaders.set("Pragma", "no-cache");
      htmlHeaders.set("Expires", "0");
      htmlHeaders.set("CDN-Cache-Control", "no-store");
      htmlHeaders.set("Cloudflare-CDN-Cache-Control", "no-store");
      htmlHeaders.set("Referrer-Policy", "strict-origin-when-cross-origin");
      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: htmlHeaders
      });
    }
    return response;
  }
};

export class StudyHubChat {
  constructor(state, env) {
    this.env = env;
    this.state = state;
    this.sessionRates = new Map();
    this.sectionRates = new Map();
    this.roomRate = [];
    this.serial = Promise.resolve();
  }

  fetch(request) {
    const response = this.serial.then(() => this.handle(request));
    this.serial = response.then(() => undefined, () => undefined);
    return response;
  }

  async handle(request) {
    const now = Date.now();
    const path = new URL(request.url).pathname;
    if (path.startsWith('/admin/') || path === '/internal/visit' || path === '/internal/section' || path === '/internal/presence') return this.handleAdmin(request, path, now);
    if (path === "/internal/whatsapp/save") {
      if (request.method !== "POST") return json({}, 405);
      let input; try { input = await request.json(); } catch { return json({ error: "Invalid JSON" }, 400); }
      let updates = (await this.state.storage.get("whatsapp_announcements")) || [];
      updates = updates.filter(u => String(u.id || "").trim() !== String(input?.id || "").trim());
      updates.unshift(input);
      if (updates.length > 50) updates = updates.slice(0, 50);
      await this.state.storage.put("whatsapp_announcements", updates);
      return json({ ok: true, updates });
    }
    if (path === "/internal/whatsapp/list") {
      const updates = (await this.state.storage.get("whatsapp_announcements")) || [];
      return json({ ok: true, count: updates.length, updates });
    }
    if (path === "/internal/chat/delete") {
      if (request.method !== "POST") return json({}, 405);
      let input; try { input = await request.json(); } catch { return json({ error: "Invalid JSON" }, 400); }
      const id = String(input?.id || "").trim();
      if (!id) return json({ error: "Message ID is required." }, 400);
      let stored = (await this.state.storage.get("messages")) || [];
      const beforeCount = stored.length;
      stored = stored.filter(m => String(m.id || "").trim() !== id);
      await this.state.storage.put("messages", stored);
      return json({ ok: true, deleted: beforeCount !== stored.length, messages: stored });
    }
    if (path === "/internal/chat/clear") {
      if (request.method !== "POST") return json({}, 405);
      await this.state.storage.put("messages", []);
      return json({ ok: true, messages: [] });
    }
    const stored = (await this.state.storage.get("messages")) || [];
    const recent = stored.filter((message) =>
      Number.isFinite(message.createdAt) && message.createdAt > now - RETENTION_MS
    );

    if (request.method === "GET") {
      if (recent.length !== stored.length) {
        await this.state.storage.put("messages", recent);
      }
      return json({ messages: recent });
    }

    let input;
    try {
      input = await request.json();
    } catch {
      return json({ error: "Enter a valid message." }, 400);
    }

    const name = cleanText(input.name, MAX_NAME);
    const text = cleanText(input.text, MAX_MESSAGE);
    const sessionId = typeof input.sessionId === "string" ? input.sessionId : "";
    if (!name) return json({ error: "Enter your name." }, 400);
    if (!text) return json({ error: "Enter a message." }, 400);
    if (!/^[a-zA-Z0-9-]{16,80}$/.test(sessionId)) {
      return json({ error: "Refresh the page and try again." }, 400);
    }

    const sessionTimes = (this.sessionRates.get(sessionId) || [])
      .filter((timestamp) => timestamp > now - SESSION_WINDOW_MS);
    if (sessionTimes.length >= SESSION_MAX_MESSAGES) {
      return json({ error: "Please wait a little before sending another message." }, 429);
    }

    this.roomRate = this.roomRate.filter((timestamp) => timestamp > now - ROOM_WINDOW_MS);
    if (this.roomRate.length >= ROOM_MAX_MESSAGES) {
      return json({ error: "The chat is busy. Please try again in a minute." }, 429);
    }

    sessionTimes.push(now);
    this.sessionRates.set(sessionId, sessionTimes);
    this.roomRate.push(now);
    if (this.sessionRates.size > 500) {
      for (const [key, times] of this.sessionRates) {
        if (!times.some((timestamp) => timestamp > now - SESSION_WINDOW_MS)) {
          this.sessionRates.delete(key);
        }
      }
    }

    const message = { id: crypto.randomUUID(), name, text, createdAt: now };
    recent.push(message);
    const messages = recent.slice(-MAX_STORED_MESSAGES);
    await this.state.storage.put("messages", messages);
    return json({ message, messages });
  }
  async handleAdmin(request, path, now) {
    // Only the entry Worker supplies this header on private Durable Object calls.
    const passwordHash = request.headers.get("X-Hub-Admin-Hash") || "";
    const configured = /^[a-f0-9]{64}$/.test(passwordHash);
    const ttl = 8 * 60 * 60 * 1000;
    if (path === "/internal/visit") {
      if (request.method !== "POST") return json({},405);
      const entry = await request.json();
      const ownerIp = (await this.state.storage.get("owner_ip")) || "";
      const isOwner = Boolean(entry.isOwner || (ownerIp && entry.ip === ownerIp));
      let records = (await this.state.storage.get("traffic")) || [];
      records = records.filter(r=>r.time > now - RETENTION_MS);
      try {
        await this.countVisit(now, String(entry.ip).slice(0,64), records, isOwner);
      } catch (cvErr) {
        console.error("internal/visit countVisit warning:", cvErr);
      }
      records.push({
        time: now,
        ip: String(entry.ip).slice(0,64),
        path: String(entry.path).slice(0,200),
        country: typeof entry.country === "string" && /^(?:[A-Z]{2}|T1)$/.test(entry.country) ? entry.country : "XX",
        region: cleanText(entry.region,100),
        city: cleanText(entry.city,100),
        isp: cleanText(entry.isp,100),
        device: cleanText(entry.device,60),
        ref: cleanText(entry.ref,100),
        isOwner
      });
      await this.state.storage.put("traffic", records.slice(-5000));
      await this.state.storage.setAlarm(now + RETENTION_MS);
      return json({ok:true});
    }
    if (path === "/internal/section") {
      if (request.method !== "POST") return json({},405);
      let entry; try { entry = await request.json(); } catch { return json({error:"Invalid request."},400); }
      const ip=typeof entry.ip==="string" ? entry.ip.slice(0,64) : "Unavailable";
      const page=typeof entry.path==="string" ? entry.path.slice(0,160) : "";
      const section=cleanText(entry.section,140);
      if (!page.startsWith("/") || page.startsWith("//") || !section) return json({error:"Invalid section."},400);
      const rate=this.sectionRates.get(ip) || [];
      const recent=rate.filter(time=>time>now-60*1000);
      if (recent.length>=60) return json({error:"Section activity limit reached."},429);
      recent.push(now); this.sectionRates.set(ip,recent);
      if (this.sectionRates.size>1000) {
        for (const [key,times] of this.sectionRates) {
          if (!times.some(time=>time>now-60*1000)) this.sectionRates.delete(key);
        }
      }
      const ownerIp = (await this.state.storage.get("owner_ip")) || "";
      const isOwner = Boolean(entry.isOwner || (ownerIp && ip === ownerIp));
      let events=(await this.state.storage.get("sectionVisits")) || [];
      events=events.filter(event=>event.time>now-RETENTION_MS);
      events.push({time:now,ip,path:page,section,isOwner});
      await this.state.storage.put("sectionVisits",events.slice(-5000));
      await this.state.storage.setAlarm(now+RETENTION_MS);
      return json({ok:true});
    }
    if (path === "/internal/presence") {
      if (request.method !== "POST") return json({},405);
      let entry; try { entry = await request.json(); } catch { return json({error:"Invalid request."},400); }
      const visitorId=typeof entry.visitorId==="string" ? entry.visitorId : "";
      const page=typeof entry.path==="string" ? entry.path.slice(0,160) : "";
      const section=cleanText(entry.section,140);
      if (!/^[a-zA-Z0-9-]{16,80}$/.test(visitorId) || !page.startsWith("/") || page.startsWith("//")) return json({error:"Invalid presence."},400);
      const key=await digest(visitorId);
      const saved=(await this.state.storage.get("liveVisitors")) || {};
      const live=Object.fromEntries(Object.entries(saved).filter(([,visitor])=>Number(visitor?.lastSeen)>now-90*1000));
      if (entry.active===false) delete live[key];
      else live[key]={path:page,section,lastSeen:now};
      await this.state.storage.put("liveVisitors",live);
      return json({ok:true});
    }
    if (!configured) return json({error:"Owner access is not configured. Set the ADMIN_PASSWORD secret in Cloudflare (at least 16 characters)."},503);
    if (path === "/admin/api/admin/login") {
      if (request.method !== "POST") return json({},405);
      if (Number(request.headers.get("Content-Length")) > 4096) return json({},413);
      const rateKey = "login:" + await digest(request.headers.get("CF-Connecting-IP") || "unknown");
      const attempts = ((await this.state.storage.get(rateKey)) || []).filter(t=>t>now-15*60*1000);
      if (attempts.length>=5) return json({error:"Too many attempts. Try again in 15 minutes."},429);
      attempts.push(now);
      await this.state.storage.put(rateKey,attempts);
      await this.state.storage.setAlarm(now + RETENTION_MS);
      let input; try { input = await request.json(); } catch { return json({error:"Invalid request."},400); }
      const expected = passwordHash;
      const actual = await digest(typeof input.password === "string" && input.password.length<=1024 ? input.password : "");
      let mismatch=0; for(let i=0;i<expected.length;i++) mismatch |= expected.charCodeAt(i)^actual.charCodeAt(i);
      if(mismatch) return json({error:"Incorrect password."},401);
      const token = Array.from(crypto.getRandomValues(new Uint8Array(32)),v=>v.toString(16).padStart(2,"0")).join("");
      await this.state.storage.put("session:" + await digest(token),{expires:now+ttl,passwordHash:expected});
      const clientIP = request.headers.get("CF-Connecting-IP") || "";
      if (clientIP) {
        await this.state.storage.put("owner_ip", clientIP);
      }
      await this.state.storage.delete(rateKey);
      const response=json({ok:true});
      response.headers.set("Set-Cookie","__Host-hub_admin="+token+"; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=28800");
      return response;
    }
    const token = request.headers.get("Cookie")?.match(/(?:^|;\s*)__Host-hub_admin=([a-f0-9]{64})(?:;|$)/)?.[1];
    const key = token ? "session:" + await digest(token) : "";
    const session = key ? await this.state.storage.get(key) : null;
    if (!session || session.expires<=now || session.passwordHash !== passwordHash) return json({error:"Owner login required."},401);
    const clientIP = request.headers.get("CF-Connecting-IP") || "";
    if (clientIP) {
      const currentOwnerIp = (await this.state.storage.get("owner_ip")) || "";
      if (currentOwnerIp !== clientIP) {
        await this.state.storage.put("owner_ip", clientIP);
      }
    }
    if (path === "/admin/api/admin/logout" && request.method === "POST") {
      await this.state.storage.delete(key);
      const response=json({ok:true});
      response.headers.set("Set-Cookie","__Host-hub_admin=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0");
      return response;
    }
    if (path === "/admin/api/admin/session") return json({ok:true});
    if (path === "/admin/admin/traffic") {
      try {
        const rawTraffic = (await this.state.storage.get("traffic")) || [];
        const rawSections = (await this.state.storage.get("sectionVisits")) || [];
        const savedLive = (await this.state.storage.get("liveVisitors")) || {};
        const ownerIp = (await this.state.storage.get("owner_ip")) || "";
        const safeTraffic = Array.isArray(rawTraffic) ? rawTraffic.filter(r => r && typeof r.time === "number" && r.time > now - RETENTION_MS) : [];
        const safeSections = Array.isArray(rawSections) ? rawSections.filter(r => r && typeof r.time === "number" && r.time > now - RETENTION_MS) : [];
        const liveEntries = Object.entries(savedLive).filter(([,v]) => Number(v?.lastSeen) > now - 90*1000);
        
        const studentTraffic = safeTraffic.filter(r => !r.isOwner && (!ownerIp || r.ip !== ownerIp));
        const studentSections = safeSections.filter(r => !r.isOwner && (!ownerIp || r.ip !== ownerIp));
        
        let today = { day: indiaDay(now), views: studentTraffic.length, visitors: 0 };
        try {
          today = await this.countVisit(now, null, safeTraffic);
        } catch (cvErr) {
          console.error("countVisit warning:", cvErr);
        }
        const uniqueIPs = new Set([
          ...studentTraffic.map(r => r && r.ip).filter(Boolean),
          ...studentSections.map(r => r && r.ip).filter(Boolean)
        ]);
        const records = groupTrafficByIP(safeTraffic, safeSections, ownerIp);
        const popularPages = groupPopularPages(safeSections, ownerIp);
        
        const livePages = new Map();
        for (const [, visitor] of liveEntries) {
          const page = typeof visitor?.path === "string" ? visitor.path : "/";
          const section = typeof visitor?.section === "string" ? visitor.section : "";
          const k = JSON.stringify([page, section]);
          const g = livePages.get(k) || { path: page, section, count: 0 };
          g.count++;
          livePages.set(k, g);
        }

        const yesterday = await this.getYesterdayStats(now, safeTraffic, safeSections, ownerIp);
        return json({
          ok: true,
          records,
          popularPages,
          views: safeTraffic.length,
          uniqueIPs: uniqueIPs.size,
          today,
          yesterday,
          liveData: {
            active: liveEntries.length,
            pages: Array.from(livePages.values()).sort((a,b) => b.count - a.count)
          },
          updatedAt: now
        });
      } catch (err) {
        console.error("Critical /admin/admin/traffic error:", err);
        return json({ ok: true, records: [], popularPages: [], views: 0, uniqueIPs: 0, today: { day: indiaDay(now), views: 0, visitors: 0 }, liveData: { active: 0, pages: [] }, updatedAt: now });
      }
    }
    if (request.method !== "GET") return json({},405);
    if (path === "/admin/api/admin/live-visitors") {
      const saved=(await this.state.storage.get("liveVisitors")) || {};
      const entries=Object.entries(saved).filter(([,visitor])=>Number(visitor?.lastSeen)>now-90*1000);
      const live=Object.fromEntries(entries);
      if (entries.length!==Object.keys(saved).length) await this.state.storage.put("liveVisitors",live);
      const pages=new Map();
      for (const [,visitor] of entries) {
        const page=typeof visitor.path==="string" ? visitor.path : "/";
        const section=typeof visitor.section==="string" ? visitor.section : "";
        const key=JSON.stringify([page,section]);
        const group=pages.get(key)||{path:page,section,count:0};
        group.count++;
        pages.set(key,group);
      }
      return json({active:entries.length,pages:Array.from(pages.values()).sort((a,b)=>b.count-a.count),updatedAt:now});
    }
    if (path === "/admin/api/admin/traffic") {
      try {
        const rawTraffic = (await this.state.storage.get("traffic")) || [];
        const rawSections = (await this.state.storage.get("sectionVisits")) || [];
        const ownerIp = (await this.state.storage.get("owner_ip")) || "";
        const safeTraffic = Array.isArray(rawTraffic) ? rawTraffic.filter(r => r && typeof r.time === "number" && r.time > now - RETENTION_MS) : [];
        const safeSections = Array.isArray(rawSections) ? rawSections.filter(r => r && typeof r.time === "number" && r.time > now - RETENTION_MS) : [];
        const studentTraffic = safeTraffic.filter(r => !r.isOwner && (!ownerIp || r.ip !== ownerIp));
        const studentSections = safeSections.filter(r => !r.isOwner && (!ownerIp || r.ip !== ownerIp));
        let today = { day: indiaDay(now), views: studentTraffic.length, visitors: 0 };
        try {
          today = await this.countVisit(now, null, safeTraffic);
        } catch (cvErr) {
          console.error("countVisit warning:", cvErr);
        }
        const uniqueIPs = new Set([
          ...studentTraffic.map(r => r && r.ip).filter(Boolean),
          ...studentSections.map(r => r && r.ip).filter(Boolean)
        ]);
        const records = groupTrafficByIP(safeTraffic, safeSections, ownerIp);
        const popularPages = groupPopularPages(safeSections, ownerIp);
        const yesterday = await this.getYesterdayStats(now, safeTraffic, safeSections, ownerIp);
        return json({
          records,
          popularPages,
          views: safeTraffic.length,
          uniqueIPs: uniqueIPs.size,
          today,
          yesterday,
          updatedAt: now
        });
      } catch (err) {
        console.error("Critical /admin/api/admin/traffic error:", err);
        return json({
          error: "Telemetry buffer recovery: " + String(err.message || err),
          records: [],
          popularPages: [],
          views: 0,
          uniqueIPs: 0,
          today: { day: indiaDay(now), views: 0, visitors: 0 },
          updatedAt: now
        }, 200);
      }
    }
    return json({error:"Not found"},404);
  }


  async getYesterdayStats(now, safeTraffic, safeSections, ownerIp = "") {
    const yesterdayDay = indiaDay(now - 24 * 60 * 60 * 1000);
    let yesterdayDaily = null;
    try {
      yesterdayDaily = await this.state.storage.get("daily:" + yesterdayDay);
    } catch (e) {}
    const yesterdayTraffic = safeTraffic.filter(r => !r.isOwner && (!ownerIp || r.ip !== ownerIp) && indiaDay(r.time) === yesterdayDay);
    const yesterdaySections = safeSections.filter(r => !r.isOwner && (!ownerIp || r.ip !== ownerIp) && indiaDay(r.time) === yesterdayDay);
    const yesterdayIPs = new Set([
      ...yesterdayTraffic.map(r => r && r.ip).filter(Boolean),
      ...yesterdaySections.map(r => r && r.ip).filter(Boolean)
    ]);
    const yesterdayViews = Math.max(yesterdayDaily?.views || 0, yesterdayTraffic.length);
    const yesterdayVisitors = Math.max(yesterdayDaily?.visitors || 0, yesterdayIPs.size);
    const yesterdayRecords = groupTrafficByIP(yesterdayTraffic, yesterdaySections, ownerIp);
    const yesterdayPopular = groupPopularPages(yesterdaySections, ownerIp);

    const yesterdayHourly = Array(24).fill(0);
    for (const r of yesterdayTraffic) {
      const h = new Date(r.time + 330 * 60 * 1000).getUTCHours();
      if (h >= 0 && h < 24) yesterdayHourly[h]++;
    }
    let yPeakHour = 0, yPeakViews = 0;
    yesterdayHourly.forEach((cnt, h) => {
      if (cnt > yPeakViews) { yPeakViews = cnt; yPeakHour = h; }
    });

    const devices = {};
    const referrers = {};
    const locations = {};
    for (const r of yesterdayRecords) {
      const dev = r.device || "Mobile / Web";
      devices[dev] = (devices[dev] || 0) + (r.visits || 1);
      const src = r.ref || "Direct / Saved";
      referrers[src] = (referrers[src] || 0) + (r.visits || 1);
      const loc = [r.city, r.region].filter(Boolean).join(", ") || (r.country && r.country !== "XX" ? r.country : "Unknown");
      locations[loc] = (locations[loc] || 0) + (r.visits || 1);
    }

    return {
      day: yesterdayDay,
      views: yesterdayViews,
      visitors: yesterdayVisitors,
      records: yesterdayRecords,
      popularPages: yesterdayPopular,
      hourly: yesterdayHourly,
      peakHour: { hour: yPeakHour, views: yPeakViews },
      devices,
      referrers,
      locations
    };
  }

  async countVisit(now, ip, records, isOwner = false) {
    const day = indiaDay(now);
    let totals = await this.state.storage.get("daily:" + day);
    if (!totals || typeof totals !== "object") {
      const safeRecs = Array.isArray(records) ? records : [];
      const existing = safeRecs.filter(r => r && !r.isOwner && indiaDay(r.time) === day);
      const ips = new Set(existing.map(r => r.ip).filter(value => value && value !== "Unavailable"));
      totals = { day, views: existing.length, visitors: ips.size };
      for (const address of ips) {
        await this.state.storage.put("visitor:" + day + ":" + await digest(address), true);
      }
    }
    // Owner visits are recorded in the audit log but excluded from actual student count
    if (ip !== null && !isOwner) {
      totals.views = (totals.views || 0) + 1;
      if (ip && ip !== "Unavailable") {
        const visitorKey = "visitor:" + day + ":" + await digest(ip);
        if (!(await this.state.storage.get(visitorKey))) {
          totals.visitors = (totals.visitors || 0) + 1;
          await this.state.storage.put(visitorKey, true);
        }
      }
    }
    await this.state.storage.put("daily:" + day, totals);
    return totals;
  }

  async alarm() {
    const now=Date.now();
    const all=await this.state.storage.list();
    for(const [key,value] of all) {
      if ((key.startsWith("daily:") || key.startsWith("visitor:")) && key.split(":")[1] < indiaDay(now-RETENTION_MS)) await this.state.storage.delete(key);
      if(key==="traffic" || key==="messages" || key==="sectionVisits") await this.state.storage.put(key,value.filter(r=>(r.time || r.createdAt)>now-RETENTION_MS));
      if(key.startsWith("session:") && value.expires<=now) await this.state.storage.delete(key);
      if(key.startsWith("login:") && !value.some(t=>t>now-15*60*1000)) await this.state.storage.delete(key);
    }
    await this.state.storage.setAlarm(now+24*60*60*1000);
  }

}

function parseDevice(ua, isSecMobile) {
  if (typeof ua !== "string") ua = "";
  if (/Googlebot|Mediapartners-Google|AdsBot-Google/i.test(ua)) return "🤖 Google Bot";
  if (/Android/i.test(ua)) return "📱 Android";
  if (/iPhone/i.test(ua)) return "🍏 iPhone";
  if (/iPad/i.test(ua)) return "🍏 iPad";
  if (/Windows/i.test(ua)) return "💻 Windows PC";
  if (/Macintosh|Mac OS X/i.test(ua)) return "🖥️ Mac";
  if (/Linux/i.test(ua)) return "🐧 Linux";
  if (/CrOS/i.test(ua)) return "💻 Chromebook";
  if (isSecMobile === "?1") return "📱 Mobile";
  return "💻 Desktop / Web";
}

function parseReferrer(rawRef, host) {
  if (!rawRef || typeof rawRef !== "string") return "🔖 Direct / Saved";
  try {
    const u = new URL(rawRef);
    if (u.hostname === host || u.hostname.endsWith("academichubfaiz.in") || u.hostname.endsWith("workers.dev")) {
      return "🔖 Internal / Saved";
    }
    const h = u.hostname.toLowerCase();
    if (h.includes("youtube.com") || h.includes("youtu.be")) return "▶️ YouTube";
    if (h.includes("google.")) return "🔍 Google Search";
    if (h.includes("whatsapp") || h.includes("wa.me")) return "💬 WhatsApp";
    if (h.includes("telegram") || h.includes("t.me")) return "✈️ Telegram";
    if (h.includes("instagram")) return "📸 Instagram";
    if (h.includes("facebook") || h.includes("fb.me")) return "📘 Facebook";
    if (h.includes("bing.com")) return "🔍 Bing";
    if (h.includes("uoc.ac.in")) return "🎓 Calicut Univ Portal";
    return "🌐 " + h.replace(/^www\./, "");
  } catch {
    return "🔖 Direct / Link";
  }
}

function cleanText(value, maxLength) {
  if (typeof value !== "string") return "";
  return value.trim().replace(/\s+/g, " ").slice(0, maxLength);
}

async function digest(value) {
  return Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256",new TextEncoder().encode(value))),v=>v.toString(16).padStart(2,"0")).join("");
}
function adminPage(authorized, initialData = null) {
  const d = initialData || {};
  const today = d.today || {};
  const todayDay = today.day || 'TODAY';
  const todayVisitors = today.visitors || 0;
  const todayViews = today.views || 0;
  const todayRatio = todayVisitors ? (todayViews / todayVisitors).toFixed(2) : '0';
  const bufferViews = d.views || (Array.isArray(d.records) ? d.records.length : 0);
  const bufferIps = d.uniqueIPs || (Array.isArray(d.records) ? d.records.length : 0);
  const records = Array.isArray(d.records) ? d.records : [];
  const repeatIps = records.filter(v => v.visits > 1).length;
  const repeatPct = records.length ? ((repeatIps / records.length) * 100).toFixed(1) : '0';
  const popularPages = Array.isArray(d.popularPages) ? d.popularPages : [];
  const topContent = popularPages.length > 0 ? popularPages[0] : null;
  const topName = topContent ? (topContent.section || topContent.path || 'Top Page') : '—';
  const topViews = topContent ? (topContent.visits + ' views') : '0 views';
  const topVisitors = topContent ? ((topContent.visitors?.length || 0) + ' visitors') : '0 visitors';
  const liveActive = d.liveData?.active || 0;
  const yesterday = d.yesterday || {};
  const yesterdayViews = yesterday.views || 0;
  const yesterdayVisitors = yesterday.visitors || 0;

  const content = authorized ? `
<header class="hud-header">
  <div class="brand-title">
    <div class="brand-radar"></div>
    <div class="brand-text">
      <h1>ACADEMIC HUB // CONTROL ROOM <span>TRAFFIC TERMINAL</span></h1>
      <div class="brand-sub">OPERATIONS WATCH & VISITOR TELEMETRY · SECURE OWNER CONSOLE</div>
    </div>
  </div>

  <div class="hud-clocks">
    <div class="clock-item">
      <span class="clock-label">SYSTEM TIME (IST)</span>
      <span class="clock-time" id="ist-clock">Loading...</span>
    </div>
    <div class="clock-item">
      <span class="clock-label">COORDINATED UNIVERSAL</span>
      <span class="clock-time" id="utc-clock">Loading...</span>
    </div>
    <div class="clock-item">
      <span class="clock-label">RADAR LINK</span>
      <span class="clock-time" id="radar-link-status" style="color:var(--accent-emerald)">● NOMINAL</span>
    </div>
    <div class="clock-item">
      <span class="clock-label">TRAFFIC WATCH</span>
      <span class="clock-time" id="quota-guard-status" style="color:var(--accent-emerald)">● ACTIVE 24/7</span>
    </div>
  </div>

  <div class="hud-actions">
    <button class="btn btn-primary" id="btn-force-sync" type="button">⚡ FORCE REFRESH</button>
    <label class="refresh-rate-label" for="sync-interval">
      SYNC:
      <select id="sync-interval" class="select-inline">
        <option value="15000" selected>15s</option>
        <option value="30000">30s</option>
        <option value="60000">60s</option>
        <option value="0">PAUSE</option>
      </select>
    </label>
    <a href="/" class="btn">HUB HOME</a>
    <button class="btn btn-danger" id="logout" type="button">SIGN OUT</button>
  </div>
</header>

<section class="kpi-grid">
  <div class="kpi-card live">
    <div class="kpi-head">
      <span class="kpi-title">LIVE ACTIVE NOW</span>
      <span class="kpi-badge live">● 90s RADAR</span>
    </div>
    <div class="kpi-val"><span id="live-active-count">${liveActive}</span> <small>CONCURRENT</small></div>
    <div class="kpi-foot">
      <span>Spread across</span>
      <span class="highlight" id="live-pages-summary">${liveActive ? (d.liveData?.pages?.length + ' active study page' + (d.liveData?.pages?.length === 1 ? '' : 's')) : 'checking active tabs...'}</span>
    </div>
  </div>

  <div class="kpi-card today">
    <div class="kpi-head">
      <span class="kpi-title">TODAY'S INGRESS (IST)</span>
      <span class="kpi-badge today" id="today-badge">${todayDay}</span>
    </div>
    <div class="kpi-val"><span id="today-visitors">${todayVisitors}</span> <small>VISITORS</small></div>
    <div class="kpi-foot">
      <span class="highlight" id="today-views">${todayViews}</span> page views · <span id="today-ratio">${todayRatio}</span> views/user
    </div>
  </div>

  <div class="kpi-card buffer">
    <div class="kpi-head">
      <span class="kpi-title">7-DAY TELEMETRY BUFFER</span>
      <span class="kpi-badge total">ROLLING</span>
    </div>
    <div class="kpi-val"><span id="buffer-views">${bufferViews}</span> <small>LOGS</small></div>
    <div class="kpi-foot">
      <span class="highlight" id="buffer-ips">${bufferIps}</span> distinct IPs · <span id="buffer-repeats">${repeatPct}%</span> repeat
    </div>
  </div>

  <div class="kpi-card popular">
    <div class="kpi-head">
      <span class="kpi-title">TOP ACCESSED CONTENT</span>
      <span class="kpi-badge popular">LEADER</span>
    </div>
    <div class="kpi-val" style="font-size:18px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" id="top-content-name">${topName}</div>
    <div class="kpi-foot">
      <span class="highlight" id="top-content-views">${topViews}</span> · <span id="top-content-visitors">${topVisitors}</span>
    </div>
  </div>
</section>

<!-- ULTRA-PREMIUM NAVIGATION TABS -->
<nav class="nav-tabs" role="tablist">
  <button class="tab-btn active" id="tab-btn-geo" type="button" role="tab" aria-selected="true">
    <span class="tab-icon">👥</span>
    <span class="tab-title">VISITORS & IP AUDIT</span>
    <span class="badge-pill cyan" id="badge-total-ips">${bufferIps} IPs</span>
  </button>
  <button class="tab-btn" id="tab-btn-yesterday" type="button" role="tab" aria-selected="false">
    <span class="tab-icon">⏮️</span>
    <span class="tab-title">YESTERDAY'S RECAP</span>
    <span class="badge-pill gold" id="badge-yesterday-views">${yesterdayViews} VIEWS</span>
  </button>
  <button class="tab-btn" id="tab-btn-radar" type="button" role="tab" aria-selected="false">
    <span class="tab-icon">🛰️</span>
    <span class="tab-title">LIVE RADAR PRESENCE</span>
    <span class="badge-pill emerald" id="badge-live-tabs">${liveActive} ACTIVE</span>
  </button>
  <button class="tab-btn" id="tab-btn-content" type="button" role="tab" aria-selected="false">
    <span class="tab-icon">📊</span>
    <span class="tab-title">CONTENT LEADERBOARD</span>
    <span class="badge-pill purple" id="badge-total-pages">${popularPages.length}</span>
  </button>
</nav>

<main class="control-panel">
  <!-- TAB 1: VISITORS & IP AUDIT (DEFAULT OPEN TAB) -->
  <section class="station-card" id="panel-geo">
    <div class="station-header">
      <div>
        <h2><span class="station-dot cyan"></span> VISITOR AUDIT & INGRESS TELEMETRY</h2>
        <p class="station-desc">Deep telemetry records by visitor IP, regional geolocations, visit velocity, and chronological section breadcrumbs.</p>
      </div>
      <div>
        <button class="btn btn-primary" id="btn-export-traffic" type="button">📥 EXPORT TRAFFIC CSV</button>
      </div>
    </div>

    <!-- COUNTRY BREAKDOWN CARDS -->
    <div class="country-grid" id="country-summary-grid">
      <!-- Rendered dynamically -->
    </div>

    <div class="filter-row">
      <div class="search-wrap">
        <span class="search-icon">🔍</span>
        <input type="text" class="search-input" id="traffic-search-input" placeholder="Search IP Address, City, Country, or Page Path..." value="">
      </div>
      <div class="filter-group">
        <label for="traffic-page-size" class="filter-label">ROWS:</label>
        <select class="filter-select" id="traffic-page-size">
          <option value="25" selected>25 rows</option>
          <option value="50">50 rows</option>
          <option value="100">100 rows</option>
        </select>
      </div>
    </div>

    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th style="min-width:125px">Last Active</th>
            <th style="min-width:110px">Visitor IP</th>
            <th style="min-width:80px">Visits</th>
            <th style="min-width:120px">Country</th>
            <th style="min-width:145px">Location & ISP</th>
            <th style="min-width:130px">Device & Source</th>
            <th style="min-width:170px">Current Page &amp; Activity</th>
            <th style="min-width:160px">Section Trail</th>
          </tr>
        </thead>
        <tbody id="rows">
          <!-- Rendered dynamically -->
        </tbody>
      </table>
    </div>

    <div class="pagination-bar">
      <span id="traffic-page-info" class="page-info">Page 1 of 1</span>
      <div class="page-controls">
        <button class="btn" id="traffic-prev-page" type="button" disabled>◀ PREVIOUS</button>
        <button class="btn" id="traffic-next-page" type="button" disabled>NEXT ▶</button>
      </div>
    </div>
  </section>

  <!-- TAB 2: YESTERDAY TELEMETRY & KNOWLEDGE RECAP (NEW TAB!) -->
  <section class="station-card" id="panel-yesterday" hidden>
    <div class="station-header">
      <div>
        <h2><span class="station-dot gold"></span> YESTERDAY TELEMETRY & KNOWLEDGE RECAP</h2>
        <p class="station-desc">24-hour retrospective of yesterday's student ingress, popular study assets, traffic velocity, and platform demographics.</p>
      </div>
      <div class="header-action-group">
        <span class="date-chip" id="yesterday-date-chip">📅 YESTERDAY (IST)</span>
        <button class="btn btn-gold" id="btn-export-yesterday" type="button">📥 EXPORT YESTERDAY CSV</button>
      </div>
    </div>

    <!-- EXECUTIVE BRIEFING / KNOWLEDGE DIGEST -->
    <div class="yesterday-digest-card">
      <div class="digest-header">
        <div class="digest-badge">⚡ EXECUTIVE TELEMETRY BRIEF</div>
        <div class="digest-time" id="yesterday-range-text">24-HOUR IST WINDOW (00:00 – 23:59 IST)</div>
      </div>
      <div class="digest-summary-text" id="yesterday-brief-text">
        Synthesizing yesterday's learning telemetry...
      </div>
      <div class="digest-quick-grid">
        <div class="dq-item">
          <span class="dq-label">TOP STUDY CONTENT</span>
          <span class="dq-value highlight-cyan" id="yd-top-content">—</span>
        </div>
        <div class="dq-item">
          <span class="dq-label">PEAK STUDY RUSH</span>
          <span class="dq-value highlight-gold" id="yd-peak-hour">—</span>
        </div>
        <div class="dq-item">
          <span class="dq-label">PRIMARY DEVICE</span>
          <span class="dq-value highlight-emerald" id="yd-primary-device">—</span>
        </div>
        <div class="dq-item">
          <span class="dq-label">MAIN INGRESS SOURCE</span>
          <span class="dq-value highlight-purple" id="yd-primary-source">—</span>
        </div>
      </div>
    </div>

    <!-- 4 YESTERDAY METRIC CARDS -->
    <div class="yesterday-kpi-grid">
      <div class="ykpi-card views">
        <div class="ykpi-label">TOTAL VIEWS YESTERDAY</div>
        <div class="ykpi-val"><span id="yd-kpi-views">${yesterdayViews}</span> <small>VIEWS</small></div>
        <div class="ykpi-sub">Total page requests logged</div>
      </div>
      <div class="ykpi-card visitors">
        <div class="ykpi-label">UNIQUE STUDENT VISITORS</div>
        <div class="ykpi-val"><span id="yd-kpi-visitors">${yesterdayVisitors}</span> <small>STUDENTS</small></div>
        <div class="ykpi-sub">Distinct client IP addresses</div>
      </div>
      <div class="ykpi-card ratio">
        <div class="ykpi-label">STUDY DEPTH RATIO</div>
        <div class="ykpi-val"><span id="yd-kpi-ratio">0.0</span> <small>VIEWS/USER</small></div>
        <div class="ykpi-sub">Average materials read per student</div>
      </div>
      <div class="ykpi-card repeats">
        <div class="ykpi-label">REPEAT STUDY SESSIONS</div>
        <div class="ykpi-val"><span id="yd-kpi-repeats">0%</span> <small>LOYAL</small></div>
        <div class="ykpi-sub"><span id="yd-kpi-repeat-count">0</span> repeat learners returned</div>
      </div>
    </div>

    <!-- 24-HOUR TRAFFIC VELOCITY HOURLY INGRESS BAR CHART -->
    <div class="yesterday-chart-card">
      <div class="chart-header">
        <div>
          <h3 class="chart-title">
            <span class="chart-icon">📊</span> 24-HOUR TRAFFIC VELOCITY (IST HOURLY INGRESS)
          </h3>
          <p class="chart-desc">Visual distribution of student requests from 00:00 to 23:00 IST yesterday.</p>
        </div>
        <div class="chart-legend">
          <span class="legend-item"><span class="legend-dot normal"></span> Standard Hour</span>
          <span class="legend-item"><span class="legend-dot peak"></span> Peak Rush Hour</span>
        </div>
      </div>
      <div class="chart-bars-wrap" id="yesterday-hourly-chart">
        <!-- 24 hourly bars rendered dynamically -->
      </div>
      <div class="chart-time-labels">
        <span>00:00</span>
        <span>04:00</span>
        <span>08:00</span>
        <span>12:00</span>
        <span>16:00</span>
        <span>20:00</span>
        <span>23:00</span>
      </div>
    </div>

    <!-- DUAL SPLIT GRID: TOP CONTENT & AUDIENCE DEMOGRAPHICS -->
    <div class="yesterday-split-grid">
      <!-- Left: Top Content Studied Yesterday -->
      <div class="station-subcard">
        <div class="subcard-head">
          <h4><span class="subcard-icon">🏆</span> TOP CONTENT STUDIED YESTERDAY</h4>
          <span class="subcard-badge" id="yd-content-count">0 ITEMS</span>
        </div>
        <div class="table-wrapper mini">
          <table>
            <thead>
              <tr>
                <th style="width:48px">#</th>
                <th>Study Page / Section</th>
                <th style="width:80px">Views</th>
                <th style="width:90px">Students</th>
              </tr>
            </thead>
            <tbody id="yesterday-popular-rows">
              <!-- Rendered dynamically -->
            </tbody>
          </table>
        </div>
      </div>

      <!-- Right: Devices, Channels & Regions -->
      <div class="station-subcard">
        <div class="subcard-head">
          <h4><span class="subcard-icon">📱</span> AUDIENCE CHANNELS & PLATFORMS</h4>
          <span class="subcard-badge">DEMOGRAPHICS</span>
        </div>
        <div class="demo-section">
          <div class="demo-title">DEVICE TYPES</div>
          <div class="demo-bars" id="yesterday-device-bars">
            <!-- Progress bars rendered dynamically -->
          </div>
        </div>
        <div class="demo-section" style="margin-top:16px;">
          <div class="demo-title">TRAFFIC SOURCES / REFERRERS</div>
          <div class="demo-bars" id="yesterday-referrer-bars">
            <!-- Progress bars rendered dynamically -->
          </div>
        </div>
        <div class="demo-section" style="margin-top:16px;">
          <div class="demo-title">TOP GEOGRAPHIC LOCATIONS</div>
          <div class="demo-pills" id="yesterday-location-pills">
            <!-- Country/City pills rendered dynamically -->
          </div>
        </div>
      </div>
    </div>

    <!-- YESTERDAY VISITOR LOGS TABLE -->
    <div class="yesterday-visitors-section" style="margin-top:22px;">
      <div class="filter-row">
        <div class="search-wrap">
          <span class="search-icon">🔍</span>
          <input type="text" class="search-input" id="yd-search-input" placeholder="Search yesterday's visitors by IP, city, device, page...">
        </div>
        <span class="page-info" id="yd-visitor-count-info">0 Visitors Logged</span>
      </div>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th style="min-width:115px">Time (IST)</th>
              <th style="min-width:110px">Visitor IP</th>
              <th style="min-width:75px">Visits</th>
              <th style="min-width:110px">Country</th>
              <th style="min-width:145px">Location & ISP</th>
              <th style="min-width:130px">Device & Source</th>
              <th style="min-width:170px">Materials Studied</th>
            </tr>
          </thead>
          <tbody id="yesterday-visitor-rows">
            <!-- Rendered dynamically -->
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <!-- TAB 3: LIVE AUDIENCE RADAR -->
  <section class="station-card" id="panel-radar" hidden>
    <div class="station-header">
      <div>
        <h2><span class="station-dot emerald"></span> LIVE AUDIENCE RADAR (CONCURRENT TABS STREAM)</h2>
        <p class="station-desc">Telemetry active within the last 90 seconds. Highlights concurrent study clusters and live student sessions.</p>
      </div>
      <div>
        <span class="radar-live-badge" id="radar-summary-text">● CHECKING RADAR...</span>
      </div>
    </div>

    <div class="radar-grid" id="live-pages-grid">
      <!-- Rendered dynamically -->
    </div>
  </section>

  <!-- TAB 4: CONTENT LEADERBOARD -->
  <section class="station-card" id="panel-content" hidden>
    <div class="station-header">
      <div>
        <h2><span class="station-dot purple"></span> CONTENT POPULARITY & ACCESS LEADERBOARD</h2>
        <p class="station-desc">Ranked by section visits and unique student readers since tracking began.</p>
      </div>
    </div>

    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th style="width:70px">Rank</th>
            <th>Learning Page / Section</th>
            <th style="width:120px">Total Views</th>
            <th style="width:140px">Unique Visitors</th>
            <th style="width:130px">Views / Visitor</th>
            <th style="width:180px">Last Activity (IST)</th>
            <th style="min-width:200px">Visitor IP Deep Audit</th>
          </tr>
        </thead>
        <tbody id="popular-page-rows">
          <!-- Rendered dynamically -->
        </tbody>
      </table>
    </div>
  </section>
</main>
` : `
<div class="login-wrapper">
  <div class="login-box">
    <div class="brand-radar" style="margin: 0 auto 16px;"></div>
    <h2>ACADEMIC HUB // CONTROL ROOM</h2>
    <p class="login-sub">RESTRICTED ACCESS · ENTERPRISE OWNER AUTHENTICATION</p>
    <form id="login">
      <div class="login-field">
        <label for="password">OWNER SECURITY KEY</label>
        <input id="password" type="password" autocomplete="current-password" required maxlength="1024" placeholder="Enter owner admin password...">
      </div>
      <div id="status" class="login-status" role="status"></div>
      <button class="btn btn-primary" style="width:100%; justify-content:center; padding:12px; margin-top:8px;" type="submit">AUTHENTICATE & ENTER</button>
    </form>
    <div style="margin-top:20px; border-top:1px solid rgba(255,255,255,0.08); padding-top:16px;">
      <a href="/" class="btn" style="width:100%; justify-content:center;">RETURN TO ACADEMIC HUB</a>
    </div>
  </div>
</div>
`;

  const styles = `
:root {
  --bg-core: #060912;
  --bg-surface: #0c1424;
  --bg-surface-elevated: #142036;
  --bg-card: rgba(14, 22, 38, 0.85);
  --border-subtle: rgba(56, 189, 248, 0.24);
  --border-card: rgba(148, 163, 184, 0.16);
  --accent-cyan: #38bdf8;
  --accent-cyan-glow: rgba(56, 189, 248, 0.3);
  --accent-emerald: #10b981;
  --accent-emerald-glow: rgba(16, 185, 129, 0.3);
  --accent-purple: #c084fc;
  --accent-purple-glow: rgba(192, 132, 252, 0.3);
  --accent-gold: #f59e0b;
  --accent-gold-glow: rgba(245, 158, 11, 0.35);
  --accent-amber: #fbbf24;
  --accent-rose: #f43f5e;
  --accent-indigo: #818cf8;
  --text-pure: #ffffff;
  --text-main: #f1f5f9;
  --text-muted: #cbd5e1;
  --text-dim: #94a3b8;
  --font-mono: ui-monospace, 'SF Mono', 'Cascadia Code', 'JetBrains Mono', Consolas, Menlo, monospace;
  --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}
* { box-sizing: border-box; margin: 0; padding: 0; }
body {
  background-color: var(--bg-core);
  background-image: 
    radial-gradient(ellipse 90% 60% at 50% -20%, rgba(56, 189, 248, 0.12), transparent),
    radial-gradient(ellipse 60% 40% at 85% 15%, rgba(245, 158, 11, 0.08), transparent),
    linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 100% 100%, 100% 100%, 32px 32px, 32px 32px;
  color: var(--text-main);
  font-family: var(--font-sans);
  font-size: 14px;
  line-height: 1.5;
  min-height: 100vh;
  padding: 18px 24px 60px;
}

/* TOP COMMAND HUD */
.hud-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  padding: 16px 22px;
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: 14px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.45);
  margin-bottom: 22px;
}
.brand-title { display: flex; align-items: center; gap: 14px; }
.brand-radar {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--accent-emerald);
  box-shadow: 0 0 12px var(--accent-emerald);
  position: relative;
}
.brand-radar::after {
  content: '';
  position: absolute;
  inset: -6px;
  border-radius: 50%;
  border: 2px solid var(--accent-emerald);
  opacity: 0.7;
  animation: radar-pulse 2s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
@keyframes radar-pulse {
  0% { transform: scale(0.5); opacity: 1; }
  100% { transform: scale(2.2); opacity: 0; }
}
.brand-text h1 {
  font-size: 18px;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--text-pure);
  display: flex;
  align-items: center;
  gap: 10px;
}
.brand-text h1 span {
  color: var(--accent-cyan);
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: 11px;
  padding: 3px 8px;
  background: rgba(56, 189, 248, 0.12);
  border: 1px solid rgba(56, 189, 248, 0.35);
  border-radius: 4px;
}
.brand-sub {
  font-size: 12px;
  color: var(--text-muted);
  letter-spacing: 0.03em;
  text-transform: uppercase;
  font-family: var(--font-sans);
  margin-top: 2px;
}

.hud-clocks {
  display: flex;
  align-items: center;
  gap: 20px;
  background: rgba(0, 0, 0, 0.4);
  padding: 8px 18px;
  border-radius: 8px;
  border: 1px solid var(--border-card);
}
.clock-item { display: flex; flex-direction: column; }
.clock-label { font-size: 11px; font-weight: 700; color: var(--text-dim); letter-spacing: 0.05em; text-transform: uppercase; }
.clock-time { font-size: 15px; font-weight: 700; font-family: var(--font-mono); color: var(--accent-cyan); }

.hud-actions { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
.refresh-rate-label { font-family: var(--font-sans); font-size: 12px; font-weight: 700; color: var(--text-muted); display: inline-flex; align-items: center; gap: 6px; }
.select-inline {
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-subtle);
  color: var(--accent-cyan);
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 700;
  padding: 6px 10px;
  border-radius: 6px;
  cursor: pointer;
}
.btn {
  font-family: var(--font-sans);
  font-size: 12.5px;
  font-weight: 700;
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid var(--border-card);
  background: var(--bg-surface-elevated);
  color: var(--text-main);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  text-decoration: none;
  transition: all 0.18s ease;
}
.btn:hover { background: rgba(56, 189, 248, 0.15); border-color: var(--accent-cyan); color: var(--text-pure); }
.btn-primary {
  background: linear-gradient(135deg, #0284c7, #06b6d4);
  border-color: #38bdf8;
  color: #fff;
  box-shadow: 0 0 14px rgba(6, 182, 212, 0.35);
}
.btn-primary:hover { background: linear-gradient(135deg, #0369a1, #0891b2); color: #fff; box-shadow: 0 0 18px rgba(6, 182, 212, 0.5); }
.btn-gold {
  background: linear-gradient(135deg, #d97706, #f59e0b);
  border-color: #fbbf24;
  color: #1e1302;
  font-weight: 800;
  box-shadow: 0 0 14px rgba(245, 158, 11, 0.35);
}
.btn-gold:hover { background: linear-gradient(135deg, #b45309, #d97706); color: #fff; box-shadow: 0 0 18px rgba(245, 158, 11, 0.55); }
.btn-danger {
  background: rgba(244, 63, 94, 0.15);
  border-color: rgba(244, 63, 94, 0.4);
  color: #fda4af;
}
.btn-danger:hover { background: rgba(244, 63, 94, 0.3); color: #fff; }

/* TOP KPI METRICS GRID */
.kpi-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 16px;
  margin-bottom: 24px;
}
.kpi-card {
  background: var(--bg-card);
  backdrop-filter: blur(12px);
  border: 1px solid var(--border-card);
  border-radius: 12px;
  padding: 18px 20px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
}
.kpi-card::before { content: ''; position: absolute; top: 0; left: 0; width: 4px; height: 100%; }
.kpi-card.live::before { background: var(--accent-emerald); }
.kpi-card.today::before { background: var(--accent-cyan); }
.kpi-card.buffer::before { background: var(--accent-indigo); }
.kpi-card.popular::before { background: var(--accent-purple); }

.kpi-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
.kpi-title { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-dim); }
.kpi-badge { font-size: 11px; font-family: var(--font-mono); font-weight: 700; padding: 2px 7px; border-radius: 999px; text-transform: uppercase; }
.kpi-badge.live { background: rgba(16, 185, 129, 0.2); color: #34d399; }
.kpi-badge.today { background: rgba(56, 189, 248, 0.2); color: #38bdf8; }
.kpi-badge.total { background: rgba(129, 140, 248, 0.2); color: #a5b4fc; }
.kpi-badge.popular { background: rgba(192, 132, 252, 0.2); color: #d8b4fe; }

.kpi-val { font-size: 30px; font-weight: 800; font-family: var(--font-mono); color: var(--text-pure); line-height: 1.1; margin-bottom: 6px; }
.kpi-val small { font-size: 13px; font-weight: 600; color: var(--text-dim); margin-left: 4px; }
.kpi-foot { display: flex; align-items: center; gap: 6px; font-size: 12.5px; color: var(--text-muted); }
.kpi-foot span.highlight { color: var(--text-pure); font-weight: 700; }

/* ULTRA-PREMIUM NAVIGATION TABS */
.nav-tabs {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(13, 20, 36, 0.88);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  padding: 6px;
  margin-bottom: 24px;
  overflow-x: auto;
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.08);
}
.tab-btn {
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.03em;
  padding: 10px 18px;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 10px;
  color: var(--text-muted);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  white-space: nowrap;
  transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
}
.tab-btn:hover {
  color: var(--text-pure);
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.1);
}
.tab-icon { font-size: 15px; display: inline-flex; align-items: center; justify-content: center; }

/* TAB THEMES */
.tab-btn#tab-btn-geo.active {
  background: linear-gradient(135deg, rgba(56, 189, 248, 0.22), rgba(6, 182, 212, 0.08));
  color: #fff;
  border-color: rgba(56, 189, 248, 0.5);
  box-shadow: 0 0 20px rgba(56, 189, 248, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2);
}
.tab-btn#tab-btn-yesterday.active {
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.26), rgba(217, 119, 6, 0.1));
  color: #fff;
  border-color: rgba(245, 158, 11, 0.6);
  box-shadow: 0 0 22px rgba(245, 158, 11, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2);
}
.tab-btn#tab-btn-radar.active {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.24), rgba(5, 150, 105, 0.08));
  color: #fff;
  border-color: rgba(16, 185, 129, 0.55);
  box-shadow: 0 0 20px rgba(16, 185, 129, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.2);
}
.tab-btn#tab-btn-content.active {
  background: linear-gradient(135deg, rgba(192, 132, 252, 0.24), rgba(147, 51, 234, 0.08));
  color: #fff;
  border-color: rgba(192, 132, 252, 0.55);
  box-shadow: 0 0 20px rgba(192, 132, 252, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.tab-btn .badge-pill {
  font-size: 11px;
  font-family: var(--font-mono);
  padding: 3px 8px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  color: var(--text-dim);
  font-weight: 700;
  letter-spacing: 0.02em;
}
.tab-btn#tab-btn-geo.active .badge-pill.cyan { background: #38bdf8; color: #04101e; font-weight: 800; box-shadow: 0 0 10px rgba(56, 189, 248, 0.5); }
.tab-btn#tab-btn-yesterday .badge-pill.gold { background: rgba(245, 158, 11, 0.18); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.35); }
.tab-btn#tab-btn-yesterday.active .badge-pill.gold { background: #f59e0b; color: #1e1302; font-weight: 800; box-shadow: 0 0 12px rgba(245, 158, 11, 0.6); }
.tab-btn#tab-btn-radar .badge-pill.emerald { background: rgba(16, 185, 129, 0.18); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.35); }
.tab-btn#tab-btn-radar.active .badge-pill.emerald { background: #10b981; color: #032117; font-weight: 800; box-shadow: 0 0 12px rgba(16, 185, 129, 0.6); }
.tab-btn#tab-btn-content .badge-pill.purple { background: rgba(192, 132, 252, 0.18); color: #d8b4fe; border: 1px solid rgba(192, 132, 252, 0.35); }
.tab-btn#tab-btn-content.active .badge-pill.purple { background: #c084fc; color: #200438; font-weight: 800; box-shadow: 0 0 12px rgba(192, 132, 252, 0.6); }

/* CONTROL ROOM PANELS */
.control-panel { display: grid; gap: 24px; }
.station-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-card);
  border-radius: 14px;
  padding: 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45);
}
.station-card[hidden] { display: none !important; }
.station-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--border-card);
}
.station-header h2 { font-size: 16px; font-weight: 800; letter-spacing: 0.03em; color: var(--text-pure); display: flex; align-items: center; gap: 10px; }
.station-dot { width: 10px; height: 10px; border-radius: 50%; display: inline-block; }
.station-dot.cyan { background: var(--accent-cyan); box-shadow: 0 0 12px var(--accent-cyan); }
.station-dot.gold { background: var(--accent-gold); box-shadow: 0 0 12px var(--accent-gold); }
.station-dot.emerald { background: var(--accent-emerald); box-shadow: 0 0 12px var(--accent-emerald); }
.station-dot.purple { background: var(--accent-purple); box-shadow: 0 0 12px var(--accent-purple); }
.station-desc { font-size: 13px; color: var(--text-muted); margin-top: 4px; }

.header-action-group { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
.date-chip {
  font-family: var(--font-mono);
  font-size: 12.5px;
  font-weight: 700;
  padding: 6px 14px;
  border-radius: 8px;
  background: rgba(245, 158, 11, 0.14);
  color: #fbbf24;
  border: 1px solid rgba(245, 158, 11, 0.35);
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

/* YESTERDAY EXECUTIVE BRIEFING BANNER */
.yesterday-digest-card {
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.12), rgba(15, 23, 42, 0.85) 60%), var(--bg-card);
  border: 1px solid rgba(245, 158, 11, 0.35);
  border-radius: 12px;
  padding: 20px 24px;
  margin-bottom: 22px;
  box-shadow: 0 8px 24px rgba(245, 158, 11, 0.12);
  position: relative;
  overflow: hidden;
}
.yesterday-digest-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 5px; height: 100%;
  background: linear-gradient(180deg, #f59e0b, #fbbf24);
}
.digest-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 12px;
}
.digest-badge {
  font-size: 11.5px;
  font-family: var(--font-mono);
  font-weight: 800;
  color: #fbbf24;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
.digest-time {
  font-size: 11.5px;
  font-family: var(--font-mono);
  color: var(--text-dim);
}
.digest-summary-text {
  font-size: 14.5px;
  line-height: 1.6;
  color: var(--text-pure);
  margin-bottom: 18px;
}
.digest-summary-text strong {
  color: #fde047;
  font-weight: 700;
}
.digest-quick-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 14px;
}
.dq-item { display: flex; flex-direction: column; }
.dq-label { font-size: 10.5px; font-weight: 700; font-family: var(--font-mono); color: var(--text-dim); letter-spacing: 0.04em; }
.dq-value { font-size: 13.5px; font-weight: 700; margin-top: 2px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.highlight-cyan { color: var(--accent-cyan); }
.highlight-gold { color: #fbbf24; }
.highlight-emerald { color: #34d399; }
.highlight-purple { color: #c084fc; }

/* YESTERDAY 4-KPI GRID */
.yesterday-kpi-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 16px;
  margin-bottom: 22px;
}
.ykpi-card {
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  border-radius: 12px;
  padding: 16px 20px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.35);
}
.ykpi-card::before { content: ''; position: absolute; top: 0; left: 0; width: 4px; height: 100%; }
.ykpi-card.views::before { background: #f59e0b; }
.ykpi-card.visitors::before { background: #38bdf8; }
.ykpi-card.ratio::before { background: #10b981; }
.ykpi-card.repeats::before { background: #c084fc; }
.ykpi-label { font-size: 11.5px; font-weight: 700; font-family: var(--font-mono); color: var(--text-dim); text-transform: uppercase; }
.ykpi-val { font-size: 28px; font-weight: 800; font-family: var(--font-mono); color: var(--text-pure); line-height: 1.1; margin: 6px 0; }
.ykpi-val small { font-size: 12.5px; font-weight: 600; color: var(--text-dim); margin-left: 4px; }
.ykpi-sub { font-size: 12px; color: var(--text-muted); }

/* 24-HOUR HOURLY INGRESS BAR CHART */
.yesterday-chart-card {
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  border-radius: 12px;
  padding: 20px 22px;
  margin-bottom: 22px;
}
.chart-header { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; }
.chart-title { font-size: 14px; font-weight: 800; color: var(--text-pure); display: flex; align-items: center; gap: 8px; }
.chart-desc { font-size: 12.5px; color: var(--text-muted); margin-top: 2px; }
.chart-legend { display: flex; align-items: center; gap: 16px; font-size: 12px; color: var(--text-muted); }
.legend-item { display: flex; align-items: center; gap: 6px; }
.legend-dot { width: 9px; height: 9px; border-radius: 2px; display: inline-block; }
.legend-dot.normal { background: #38bdf8; }
.legend-dot.peak { background: #f59e0b; box-shadow: 0 0 8px #f59e0b; }

.chart-bars-wrap {
  display: flex;
  align-items: flex-end;
  gap: 6px;
  height: 130px;
  padding: 16px 8px 6px;
  background: rgba(0, 0, 0, 0.35);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  margin-top: 14px;
}
.chart-bar-col {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: flex-end;
  position: relative;
  cursor: pointer;
}
.chart-bar-fill {
  width: 100%;
  min-height: 4px;
  border-radius: 3px 3px 1px 1px;
  background: linear-gradient(180deg, #38bdf8, rgba(56, 189, 248, 0.25));
  transition: all 0.2s ease;
}
.chart-bar-col:hover .chart-bar-fill {
  background: linear-gradient(180deg, #7dd3fc, rgba(56, 189, 248, 0.6));
  filter: drop-shadow(0 0 8px #38bdf8);
}
.chart-bar-col.peak .chart-bar-fill {
  background: linear-gradient(180deg, #f59e0b, rgba(245, 158, 11, 0.35));
  box-shadow: 0 0 10px rgba(245, 158, 11, 0.45);
}
.chart-bar-col.peak:hover .chart-bar-fill {
  background: linear-gradient(180deg, #fbbf24, rgba(245, 158, 11, 0.7));
  filter: drop-shadow(0 0 10px #f59e0b);
}
.chart-bar-tooltip {
  display: none;
  position: absolute;
  bottom: calc(100% + 6px);
  left: 50%;
  transform: translateX(-50%);
  background: #0f172a;
  border: 1px solid var(--accent-cyan);
  padding: 4px 8px;
  border-radius: 5px;
  font-size: 11px;
  font-family: var(--font-mono);
  color: #fff;
  white-space: nowrap;
  pointer-events: none;
  z-index: 10;
  box-shadow: 0 4px 12px rgba(0,0,0,0.5);
}
.chart-bar-col:hover .chart-bar-tooltip { display: block; }
.chart-time-labels {
  display: flex;
  justify-content: space-between;
  margin-top: 6px;
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-dim);
  padding: 0 4px;
}

/* DUAL SPLIT GRID */
.yesterday-split-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 22px;
}
.station-subcard {
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  border-radius: 12px;
  padding: 18px 20px;
}
.subcard-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
.subcard-head h4 { font-size: 13.5px; font-weight: 800; color: var(--text-pure); display: flex; align-items: center; gap: 8px; }
.subcard-badge { font-size: 11px; font-family: var(--font-mono); font-weight: 700; color: var(--accent-gold); background: rgba(245, 158, 11, 0.15); padding: 2px 7px; border-radius: 999px; }

.table-wrapper.mini { max-height: 290px; overflow-y: auto; }
.rank-badge {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 800;
  padding: 2px 6px;
  border-radius: 4px;
  display: inline-block;
  text-align: center;
}
.rank-1 { background: rgba(245, 158, 11, 0.25); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.5); }
.rank-2 { background: rgba(148, 163, 184, 0.25); color: #e2e8f0; border: 1px solid rgba(148, 163, 184, 0.4); }
.rank-3 { background: rgba(217, 119, 6, 0.25); color: #f97316; border: 1px solid rgba(217, 119, 6, 0.4); }
.rank-norm { color: var(--text-dim); }

/* DEMOGRAPHICS BARS */
.demo-section { display: flex; flex-direction: column; gap: 6px; }
.demo-title { font-size: 11px; font-family: var(--font-mono); font-weight: 700; color: var(--text-dim); letter-spacing: 0.04em; }
.demo-bars { display: flex; flex-direction: column; gap: 8px; }
.demo-row { display: flex; flex-direction: column; gap: 3px; }
.demo-row-head { display: flex; justify-content: space-between; font-size: 12.5px; color: var(--text-main); }
.demo-track { height: 6px; background: rgba(255, 255, 255, 0.08); border-radius: 999px; overflow: hidden; }
.demo-fill { height: 100%; border-radius: 999px; background: linear-gradient(90deg, #d97706, #fbbf24); }
.demo-fill.cyan { background: linear-gradient(90deg, #0284c7, #38bdf8); }
.demo-pills { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 4px; }
.demo-pill {
  font-size: 12px;
  font-family: var(--font-mono);
  padding: 3px 9px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-pure);
  display: inline-flex;
  align-items: center;
  gap: 5px;
}

/* FILTERS & SEARCH ROW */
.filter-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 16px;
  background: rgba(0, 0, 0, 0.3);
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid var(--border-card);
}
.search-wrap {
  flex: 1;
  min-width: 250px;
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-card);
  border-radius: 6px;
  padding: 0 10px;
}
.search-wrap:focus-within {
  border-color: var(--accent-cyan);
  box-shadow: 0 0 10px rgba(56, 189, 248, 0.25);
}
.search-icon { font-size: 13px; color: var(--text-dim); }
.search-input {
  flex: 1;
  background: transparent;
  border: none;
  padding: 9px 0;
  color: var(--text-pure);
  font-family: var(--font-sans);
  font-size: 13.5px;
}
.search-input:focus { outline: none; }
.search-input::placeholder { color: var(--text-dim); }
.filter-group { display: flex; align-items: center; gap: 8px; }
.filter-label { font-size: 12px; font-weight: 700; color: var(--text-dim); }
.filter-select {
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-card);
  border-radius: 6px;
  padding: 8px 12px;
  color: var(--text-pure);
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
}

/* DATA TABLES */
.table-wrapper {
  overflow-x: auto;
  border-radius: 8px;
  border: 1px solid var(--border-card);
  background: rgba(10, 16, 28, 0.7);
}
table { width: 100%; border-collapse: collapse; font-size: 13.5px; }
th {
  background: #0c1322;
  color: #93c5fd;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 0.05em;
  padding: 12px 14px;
  text-align: left;
  border-bottom: 1px solid var(--border-subtle);
  white-space: nowrap;
}
td {
  padding: 11px 14px;
  border-bottom: 1px solid rgba(148, 163, 184, 0.1);
  color: var(--text-main);
  vertical-align: middle;
}
tr:nth-child(even) td { background: rgba(255, 255, 255, 0.015); }
tr:hover td { background: rgba(56, 189, 248, 0.07); }

/* GOOGLE BOT HIGHLIGHT */
@keyframes bot-blink-once {
  0% { background: rgba(56, 189, 248, 0.45); }
  50% { background: rgba(245, 158, 11, 0.45); }
  100% { background: rgba(56, 189, 248, 0.09); }
}
.google-bot-row {
  border-left: 3px solid #f59e0b !important;
  animation: bot-blink-once 1.2s ease-out 1 forwards;
}
.google-bot-row td { font-weight: normal !important; }
.google-bot-row .ip-badge {
  font-weight: normal !important;
  color: #f59e0b !important;
  border-color: rgba(245, 158, 11, 0.5) !important;
  background: rgba(245, 158, 11, 0.16) !important;
}

/* RIFI VISITOR HIGHLIGHT & BLINK */
@keyframes rifi-blink {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.55; transform: scale(0.97); }
}
@keyframes rifi-dot-pulse {
  0% { transform: scale(0.7); box-shadow: 0 0 0 0 rgba(236, 72, 153, 0.7); }
  70% { transform: scale(1.25); box-shadow: 0 0 0 6px rgba(236, 72, 153, 0); }
  100% { transform: scale(0.7); box-shadow: 0 0 0 0 rgba(236, 72, 153, 0); }
}
.rifi-row {
  border-left: 3px solid #ec4899 !important;
  background: rgba(236, 72, 153, 0.04) !important;
}
.rifi-badge {
  background: rgba(236, 72, 153, 0.18) !important;
  color: #f472b6 !important;
  border: 1px solid rgba(236, 72, 153, 0.5) !important;
  border-radius: 4px;
  padding: 2px 7px;
  font-size: 10.5px;
  font-weight: 800;
  letter-spacing: 0.04em;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-family: var(--font-mono);
  box-shadow: 0 0 8px rgba(236, 72, 153, 0.25);
  animation: rifi-blink 1.4s ease-in-out infinite;
}
.rifi-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #ec4899;
  display: inline-block;
  box-shadow: 0 0 6px #ec4899;
  animation: rifi-dot-pulse 1.4s infinite;
}
.ip-badge.rifi-ip {
  color: #f472b6 !important;
  border-color: rgba(236, 72, 153, 0.5) !important;
  background: rgba(236, 72, 153, 0.12) !important;
}

/* VISITOR STYLED ELEMENTS */
.time-stamp {
  font-family: var(--font-mono);
  font-size: 12.5px;
  font-weight: 600;
  color: var(--text-muted);
}
.ip-badge {
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 700;
  color: #38bdf8;
  background: rgba(56, 189, 248, 0.12);
  border: 1px solid rgba(56, 189, 248, 0.3);
  padding: 3px 8px;
  border-radius: 6px;
  display: inline-block;
}
.visits-badge {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 700;
  padding: 3px 9px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
}
.visits-badge.multi {
  background: rgba(16, 185, 129, 0.18);
  color: #34d399;
  border: 1px solid rgba(16, 185, 129, 0.35);
}
.visits-badge.single {
  background: rgba(148, 163, 184, 0.14);
  color: #cbd5e1;
  border: 1px solid rgba(148, 163, 184, 0.25);
}
.country-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.05);
  padding: 3px 9px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-pure);
}
.country-flag { font-size: 15px; }
.location-text { font-size: 13px; color: var(--text-muted); }
.path-pill {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 600;
  color: #93c5fd;
  background: rgba(14, 165, 233, 0.1);
  border: 1px solid rgba(14, 165, 233, 0.25);
  padding: 3px 8px;
  border-radius: 6px;
  word-break: break-all;
}
.activity-pill-sub {
  font-size: 11px;
  font-weight: 600;
  margin-top: 5px;
  line-height: 1.35;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  max-width: 260px;
  word-break: break-word;
  padding: 3px 7px;
  border-radius: 6px;
}
.activity-hearing { color: #38bdf8; background: rgba(56, 189, 248, 0.12); border: 1px solid rgba(56, 189, 248, 0.28); }
.activity-watching { color: #fb7185; background: rgba(251, 113, 133, 0.12); border: 1px solid rgba(251, 113, 133, 0.28); }
.activity-reading { color: #34d399; background: rgba(52, 211, 153, 0.12); border: 1px solid rgba(52, 211, 153, 0.28); }
.activity-test { color: #fde047; background: rgba(253, 224, 71, 0.12); border: 1px solid rgba(253, 224, 71, 0.28); }
.activity-general { color: #cbd5e1; background: rgba(148, 163, 184, 0.10); border: 1px solid rgba(148, 163, 184, 0.22); }

/* DETAILS & SECTIONS */
details.section-details summary, details.popular-details summary {
  cursor: pointer;
  color: var(--accent-cyan);
  font-size: 12.5px;
  font-weight: 700;
  outline: none;
  padding: 2px 4px;
  border-radius: 4px;
}
details.section-details summary:hover, details.popular-details summary:hover {
  background: rgba(56, 189, 248, 0.12);
  color: #7dd3fc;
}
.section-visit-list { margin: 6px 0 0; padding-left: 16px; font-size: 12px; color: var(--text-muted); }
.section-visit-list li { margin: 3px 0; }

/* RADAR GRID */
.radar-live-badge { font-size: 13px; font-family: var(--font-mono); font-weight: 700; color: var(--accent-emerald); }
.radar-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px; }
.radar-card {
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  border-radius: 10px;
  padding: 14px 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;
}
.radar-card.active-card {
  border-color: rgba(16, 185, 129, 0.5);
  box-shadow: 0 0 16px rgba(16, 185, 129, 0.18);
}
.radar-card-info h4 { font-size: 14px; font-weight: 700; color: var(--text-pure); margin-bottom: 4px; }
.radar-card-path { font-size: 12px; font-family: var(--font-mono); color: var(--text-dim); }
.radar-card-count { text-align: right; }
.radar-card-count .num { font-size: 24px; font-weight: 800; font-family: var(--font-mono); color: var(--accent-emerald); }
.radar-card-count .label { font-size: 10px; text-transform: uppercase; color: var(--text-dim); font-family: var(--font-mono); font-weight: 700; }

/* COUNTRY GRID */
.country-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(190px, 1fr)); gap: 12px; margin-bottom: 18px; }
.country-card {
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  border-radius: 8px;
  padding: 11px 14px;
  display: flex;
  align-items: center;
  gap: 12px;
}
.country-card .flag { font-size: 24px; }
.country-card .c-info { flex: 1; }
.country-card .c-name { font-size: 13px; font-weight: 700; color: var(--text-pure); }
.country-card .c-visitors { font-size: 11.5px; font-family: var(--font-mono); color: var(--text-muted); margin-top: 1px; }

/* PAGINATION */
.pagination-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 14px;
  font-family: var(--font-mono);
  font-size: 12.5px;
  color: var(--text-muted);
}
.page-controls { display: flex; gap: 8px; }

/* LOGIN SCREEN */
.login-wrapper { display: flex; justify-content: center; align-items: center; min-height: 80vh; }
.login-box {
  width: 100%;
  max-width: 440px;
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: 14px;
  padding: 32px 28px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.6);
  text-align: center;
}
.login-box h2 { font-size: 19px; font-weight: 800; letter-spacing: 0.04em; color: var(--text-pure); margin-bottom: 6px; }
.login-sub { font-size: 11px; font-family: var(--font-mono); color: var(--text-dim); letter-spacing: 0.05em; margin-bottom: 22px; }
.login-field { text-align: left; margin-bottom: 16px; }
.login-field label { display: block; font-size: 11px; font-weight: 700; font-family: var(--font-mono); color: var(--text-muted); margin-bottom: 6px; }
.login-field input {
  width: 100%;
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-subtle);
  border-radius: 6px;
  padding: 11px 14px;
  color: var(--text-pure);
  font-family: var(--font-mono);
  font-size: 14px;
}
.login-field input:focus { outline: none; border-color: var(--accent-cyan); box-shadow: 0 0 12px rgba(56, 189, 248, 0.3); }
.login-status { margin-top: 12px; font-size: 13px; font-family: var(--font-mono); color: var(--accent-rose); min-height: 18px; }

@media (max-width: 768px) {
  body { padding: 12px 14px 40px; font-size: 13px; }
  .hud-header { flex-direction: column; align-items: stretch; gap: 14px; padding: 14px 16px; }
  .hud-clocks { justify-content: space-between; flex-wrap: wrap; }
  .kpi-grid { grid-template-columns: 1fr 1fr; }
  .yesterday-split-grid { grid-template-columns: 1fr; }
  .nav-tabs { gap: 4px; padding: 4px; }
  .tab-btn { padding: 9px 12px; font-size: 12px; }
}
  `;

  const script = authorized ? `
    // LIVE CONTROL ROOM SCRIPT
    function setText(id, val) {
      const el = document.getElementById(id);
      if (el) el.textContent = (val !== null && val !== undefined) ? String(val) : '—';
    }

    function countryInfo(code){
      if(!code||code==='XX')return {flag:'🌐',name:'Unknown'};
      if(code==='T1')return {flag:'🧅',name:'Tor Network'};
      if(!/^[A-Z]{2}$/.test(code))return {flag:'🌐',name:'Unknown'};
      const flag=String.fromCodePoint(...Array.from(code,c=>127397+c.charCodeAt(0)));
      try{return {flag,name:(new Intl.DisplayNames(['en'],{type:'region'}).of(code)||code)+' ('+code+')'};}catch{return {flag,name:code};}
    }

    function formatIST(val){
      const d=new Date(val);
      if(Number.isNaN(d.getTime()))return String(val||"Unknown");
      return d.toLocaleString('en-IN',{timeZone:'Asia/Kolkata',dateStyle:'medium',timeStyle:'medium'});
    }

    function indiaDayStr(time) {
      return new Date(time + 330 * 60 * 1000).toISOString().slice(0, 10);
    }

    function updateClocks() {
      try {
        const now = new Date();
        const istStr = now.toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour12: false }) + ' IST';
        const utcStr = now.toLocaleTimeString('en-GB', { timeZone: 'UTC', hour12: false }) + ' UTC';
        setText('ist-clock', istStr);
        setText('utc-clock', utcStr);
        const quotaGuard = document.getElementById('quota-guard-status');
        if (quotaGuard) {
          quotaGuard.style.color = 'var(--accent-emerald)';
          quotaGuard.textContent = '● ACTIVE 24/7';
        }
      } catch (e) {
        console.warn('Clock error:', e);
      }
    }
    setInterval(updateClocks, 1000);
    updateClocks();

    // STATE
    let trafficRecords = [];
    let popularPageRecords = [];
    let liveData = { active: 0, pages: [] };
    let yesterdayData = null;
    let trafficPage = 1;

    // IMMEDIATE SSR HYDRATION
    const __INITIAL__ = ${JSON.stringify(initialData || null)};
    if (__INITIAL__) {
      if (Array.isArray(__INITIAL__.records)) trafficRecords = __INITIAL__.records;
      if (Array.isArray(__INITIAL__.popularPages)) popularPageRecords = __INITIAL__.popularPages;
      if (__INITIAL__.liveData) liveData = __INITIAL__.liveData;
      if (__INITIAL__.yesterday) yesterdayData = __INITIAL__.yesterday;
      try { renderTraffic(); } catch(e) {}
      try { renderPopularPages(); } catch(e) {}
      try { renderLiveRadar(); } catch(e) {}
      try { renderYesterday(); } catch(e) {}
    }

    function getPathFallbackActivity(path) {
      if (!path || path === '/' || path === '/index.html') return '🏠 Hub Home';
      const p = String(path).toLowerCase();
      if (p.includes('voice-explanation')) return '🎧 Voice Explanations';
      if (p.includes('study-guide-reader')) return '📖 Study Guide Reader';
      if (p.includes('ktet-500-mcq-test')) return '📝 KTET 500 MCQ Test';
      if (p.includes('sociology-without-timer') || p.includes('sociology-test') || p.includes('sociology_test')) return '📝 Sociology Practice Test';
      if (p.includes('economictest')) return '📝 Economics MCQ Test';
      if (p.includes('mal-pdf')) return '📖 Malayalam Study Notes';
      if (p.includes('arabic-reading')) return '📖 Arabic Reading Room';
      if (p.includes('hindi-reading')) return '📖 Hindi Reading Room';
      if (p.includes('hist-reading')) return '📖 History Reading Room';
      if (p.includes('econ-reading')) return '📖 Economics Reading Room';
      if (p.includes('ai-reading')) return '📖 AI & Philosophy Reading';
      if (p.includes('about')) return 'ℹ️ About Hub';
      if (p.includes('contact')) return '📬 Contact';
      let clean = String(path || '');
      if (clean.startsWith('/')) clean = clean.slice(1);
      if (clean.endsWith('.html')) clean = clean.slice(0, -5);
      return '📄 ' + clean.split(/[-_]+/).join(' ');
    }

    function formatShortIP(ip) {
      if (!ip || typeof ip !== "string") return "Unknown";
      if (ip.includes(":") && ip.length > 18) {
        const parts = ip.split(":").filter(Boolean);
        if (parts.length >= 3) {
          return parts[0] + ":" + parts[1] + ":..:" + parts[parts.length - 1];
        }
        return ip.slice(0, 10) + ".." + ip.slice(-4);
      }
      return ip;
    }

    function isRifiVisitor(ip) {
      if (!ip || typeof ip !== "string") return false;
      const clean = ip.trim().toLowerCase();
      if (clean === "2401:4900:..:13a9") return true;
      if (clean.includes("2401:4900") && clean.endsWith("13a9")) return true;
      if (formatShortIP(clean) === "2401:4900:..:13a9") return true;
      return false;
    }

    // RENDER TRAFFIC (VISITORS WITH IP & DETAILS)
    function renderTraffic() {
      try {
        const searchEl = document.getElementById('traffic-search-input');
        const search = (searchEl ? searchEl.value : "").trim().toLowerCase();
        const sizeEl = document.getElementById('traffic-page-size');
        const size = Math.max(1, Number(sizeEl ? sizeEl.value : 25) || 25);

        let filtered = trafficRecords.filter(item => {
          if (!search) return true;
          const info = countryInfo(item.country);
          const isRifi = isRifiVisitor(item.ip);
          const hay = [item.ip, (isRifi ? 'rifi' : ''), item.country, info.name, item.region, item.city, item.isp, item.device, item.ref, item.path, ...(item.sections||[]).map(s=>s.name)].filter(Boolean).join(' ').toLowerCase();
          return hay.includes(search);
        });

        // Country Summary Grid
        const countryGrid = document.getElementById('country-summary-grid');
        if (countryGrid) {
          countryGrid.replaceChildren();
          const countryMap = new Map();
          for (const item of trafficRecords) {
            const c = item.country || 'XX';
            const curr = countryMap.get(c) || { count: 0, visits: 0 };
            curr.count += 1;
            curr.visits += (item.visits || 1);
            countryMap.set(c, curr);
          }

          const topCountries = Array.from(countryMap.entries()).sort((a,b) => b[1].count - a[1].count).slice(0, 6);
          for (const [code, stat] of topCountries) {
            const info = countryInfo(code);
            const card = document.createElement('div');
            card.className = 'country-card';
            card.innerHTML = '<span class="flag">' + info.flag + '</span>' +
              '<div class="c-info">' +
                '<div class="c-name">' + info.name.split(' (')[0] + '</div>' +
                '<div class="c-visitors">' + stat.count + ' IP' + (stat.count===1?'':'s') + ' · ' + stat.visits + ' visit' + (stat.visits===1?'':'s') + '</div>' +
              '</div>';
            countryGrid.append(card);
          }
        }

        // Pagination
        const totalPages = Math.max(1, Math.ceil(filtered.length / size));
        trafficPage = Math.min(Math.max(1, trafficPage), totalPages);
        const start = (trafficPage - 1) * size;
        const pageItems = filtered.slice(start, start + size);

        const rows = document.getElementById('rows');
        if (rows) {
          rows.replaceChildren();

          if (!pageItems.length) {
            const emptyTr = document.createElement('tr');
            emptyTr.innerHTML = '<td colspan="8" style="text-align:center; padding:36px; color:var(--text-dim); font-size:14px;">' + (trafficRecords.length ? 'NO VISITOR RECORDS FOUND FOR CURRENT FILTER' : 'NO VISITOR TRAFFIC LOGGED YET') + '</td>';
            rows.append(emptyTr);
          }

          for (const v of pageItems) {
            const tr = document.createElement('tr');
            const isGoogleBot = (v.isp && /Google/i.test(v.isp)) || (v.ip && (v.ip.startsWith('66.249.') || /Google/i.test(v.ip))) || (v.device && /Google/i.test(v.device));
            const isRifi = isRifiVisitor(v.ip);
            if (isGoogleBot) {
              tr.className = 'google-bot-row';
            } else if (isRifi) {
              tr.className = 'rifi-row';
            }

            // Last Active (IST)
            const tdTime = document.createElement('td');
            const isLiveRecent = (Date.now() - v.time) < 90 * 1000;
            const liveBadgeHtml = (isRifi && isLiveRecent) ? ' <span class="rifi-badge" style="font-size:9px;padding:1px 5px;margin-left:4px;"><span class="rifi-dot"></span>ACTIVE NOW</span>' : '';
            tdTime.innerHTML = '<span class="time-stamp">' + formatIST(v.time) + '</span>' + liveBadgeHtml;
            tr.append(tdTime);

            // Visitor IP Address
            const tdIp = document.createElement('td');
            const shortIp = formatShortIP(v.ip);
            let ownerBadgeHtml = '';
            if (v.isOwner) {
              ownerBadgeHtml = '<div style="margin-top:4px;"><span style="background:rgba(245,158,11,0.18);color:#fbbf24;border:1px solid rgba(245,158,11,0.45);border-radius:4px;padding:2px 7px;font-size:10.5px;font-weight:800;letter-spacing:0.04em;display:inline-flex;align-items:center;gap:3px;font-family:var(--font-mono);">👑 OWNER VISIT</span></div>';
            } else if (isRifi) {
              ownerBadgeHtml = '<div style="margin-top:4px;"><span class="rifi-badge"><span class="rifi-dot"></span>🎯 rifi</span></div>';
            }
            tdIp.innerHTML = '<span class="ip-badge' + (isRifi ? ' rifi-ip' : '') + '" title="Full IP: ' + v.ip + '" style="font-family:var(--font-mono);font-size:11.5px;max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:inline-block;cursor:help;">' + shortIp + '</span>' + ownerBadgeHtml;
            tr.append(tdIp);

            // Total Visits
            const tdVisits = document.createElement('td');
            if (v.isOwner) {
              tdVisits.innerHTML = '<span class="visits-badge" style="background:rgba(245,158,11,0.14);color:#fbbf24;border:1px solid rgba(245,158,11,0.3);font-size:11px;font-weight:600;">' + v.visits + ' visit' + (v.visits===1?'':'s') + ' <small style="display:block;font-size:9.5px;opacity:0.85;color:var(--text-dim);">(not counted)</small></span>';
              tr.style.background = 'rgba(245, 158, 11, 0.03)';
            } else if (isRifi) {
              tdVisits.innerHTML = '<span class="visits-badge multi" style="background:rgba(236,72,153,0.15);color:#f472b6;border:1px solid rgba(236,72,153,0.35);font-size:11px;font-weight:700;">' + v.visits + ' visit' + (v.visits === 1 ? '' : 's') + '</span>';
            } else {
              tdVisits.innerHTML = '<span class="visits-badge ' + (v.visits > 1 ? 'multi' : 'single') + '">' + v.visits + ' visit' + (v.visits === 1 ? '' : 's') + '</span>';
            }
            tr.append(tdVisits);

            // Country
            const tdC = document.createElement('td');
            const info = countryInfo(v.country);
            tdC.innerHTML = '<span class="country-pill"><span class="country-flag">' + info.flag + '</span> ' + info.name + '</span>';
            tr.append(tdC);

            // State / City & ISP
            const tdLoc = document.createElement('td');
            tdLoc.className = 'location-text';
            const loc = [v.region, v.city].filter(Boolean).join(', ') || 'Unknown';
            if (v.isp) {
              const locDiv = document.createElement('div');
              locDiv.textContent = loc;
              const ispDiv = document.createElement('div');
              ispDiv.style.cssText = 'font-size:11px;color:var(--text-dim);font-family:var(--font-mono);margin-top:2px;display:flex;align-items:center;gap:4px;';
              const iconSpan = document.createElement('span');
              iconSpan.textContent = '📶';
              const nameSpan = document.createElement('span');
              nameSpan.textContent = v.isp;
              ispDiv.append(iconSpan, nameSpan);
              tdLoc.append(locDiv, ispDiv);
            } else {
              tdLoc.textContent = loc;
            }
            tr.append(tdLoc);

            // Device & Source
            const tdDev = document.createElement('td');
            tdDev.className = 'location-text';
            const devDiv = document.createElement('div');
            devDiv.style.cssText = 'font-weight:600;font-size:11.5px;display:flex;align-items:center;gap:3px;white-space:nowrap;';
            devDiv.textContent = v.device || '📱 Mobile / Web';
            const srcDiv = document.createElement('div');
            srcDiv.style.cssText = 'font-size:10.5px;color:var(--text-dim);margin-top:2px;display:flex;align-items:center;gap:3px;white-space:nowrap;';
            srcDiv.textContent = v.ref || '🔖 Direct / Saved';
            tdDev.append(devDiv, srcDiv);
            tr.append(tdDev);

            // Current Page & Activity
            const tdPage = document.createElement('td');
            const pathDiv = document.createElement('div');
            pathDiv.innerHTML = '<span class="path-pill">' + (v.path || '/') + '</span>';
            tdPage.append(pathDiv);

            let act = v.latestSection || (Array.isArray(v.sections) && v.sections.length > 0 ? v.sections[0].name : '');
            act = String(act || getPathFallbackActivity(v.path) || '');

            if (act) {
              const actDiv = document.createElement('div');
              let actClass = 'activity-general';
              if (act.includes('Hearing') || act.includes('🎧') || act.includes('🔊') || act.includes('🎙️')) {
                actClass = 'activity-hearing';
              } else if (act.includes('Watching') || act.includes('▶️')) {
                actClass = 'activity-watching';
              } else if (act.includes('Reading') || act.includes('📖') || act.includes('📄')) {
                actClass = 'activity-reading';
              } else if (act.includes('Test') || act.includes('MCQ') || act.includes('Quiz') || act.includes('📝')) {
                actClass = 'activity-test';
              }
              actDiv.className = 'activity-pill-sub ' + actClass;
              actDiv.textContent = act;
              tdPage.append(actDiv);
            }
            tr.append(tdPage);

            // Section Trail
            const tdTrail = document.createElement('td');
            const sections = Array.isArray(v.sections) ? v.sections : [];
            if (sections.length) {
              const details = document.createElement('details');
              details.className = 'section-details';
              const summary = document.createElement('summary');
              summary.textContent = '📂 Visited ' + sections.length + ' section' + (sections.length === 1 ? '' : 's');
              details.append(summary);
              const ul = document.createElement('ul');
              ul.className = 'section-visit-list';
              for (const s of sections) {
                const li = document.createElement('li');
                li.textContent = (s.name || 'Page') + ' — ' + (s.visits || 1) + ' visit' + (s.visits === 1 ? '' : 's') + ' (Last: ' + formatIST(s.lastVisit) + ')';
                ul.append(li);
              }
              details.append(ul);
              tdTrail.append(details);
            } else {
              tdTrail.innerHTML = '<span style="color:var(--text-dim); font-size:12.5px;">No section trail</span>';
            }
            tr.append(tdTrail);

            rows.append(tr);
          }
        }

        const first = filtered.length ? start + 1 : 0;
        const last = Math.min(start + pageItems.length, filtered.length);
        setText('traffic-page-info', "Showing " + first + "–" + last + " of " + filtered.length + " IPs · Page " + trafficPage + " of " + totalPages);
        const prevBtn = document.getElementById('traffic-prev-page');
        if (prevBtn) prevBtn.disabled = trafficPage <= 1;
        const nextBtn = document.getElementById('traffic-next-page');
        if (nextBtn) nextBtn.disabled = trafficPage >= totalPages;
        setText('badge-total-ips', trafficRecords.length + ' IPs');
      } catch (renderErr) {
        console.warn('renderTraffic error:', renderErr);
      }
    }

    // RENDER POPULAR PAGES
    function renderPopularPages() {
      try {
        const tbody = document.getElementById('popular-page-rows');
        if (!tbody) return;
        tbody.replaceChildren();
        const visitorsByIP = new Map(trafficRecords.map(v => [v.ip, v]));

        if (!popularPageRecords.length) {
          const emptyTr = document.createElement('tr');
          emptyTr.innerHTML = '<td colspan="7" style="text-align:center; padding:36px; color:var(--text-dim); font-size:14px;">NO CONTENT PAGE VIEWS RECORDED YET</td>';
          tbody.append(emptyTr);
        }

        if (popularPageRecords.length > 0) {
          const topP = popularPageRecords[0];
          setText('top-content-name', topP.section || topP.path || 'Top Page');
          setText('top-content-views', (topP.visits || 0) + ' views');
          const topVisCount = Array.isArray(topP.visitors) ? topP.visitors.length : (topP.visitors || 0);
          setText('top-content-visitors', topVisCount + ' visitors');
        }

        for (const [idx, p] of popularPageRecords.entries()) {
          const tr = document.createElement('tr');
          const tdRank = document.createElement('td');
          tdRank.innerHTML = '<strong style="color:var(--accent-cyan); font-family:var(--font-mono);">#' + (idx + 1) + '</strong>';
          tr.append(tdRank);

          const tdPage = document.createElement('td');
          tdPage.innerHTML = '<strong style="color:var(--text-pure); font-size:14px;">' + (p.section || 'Learning Page') + '</strong><br><span class="path-pill" style="font-size:11px; margin-top:3px; display:inline-block;">' + (p.path || '/') + '</span>';
          tr.append(tdPage);

          const tdVisits = document.createElement('td');
          tdVisits.innerHTML = '<strong style="font-family:var(--font-mono); font-size:14px;">' + (p.visits || 0) + '</strong>';
          tr.append(tdVisits);

          const visitorsCount = Array.isArray(p.visitors) ? p.visitors.length : 0;
          const tdVisitors = document.createElement('td');
          tdVisitors.innerHTML = '<span class="ip-badge" style="font-size:12px;">' + visitorsCount + ' unique</span>';
          tr.append(tdVisitors);

          const tdRatio = document.createElement('td');
          tdRatio.style.fontFamily = 'var(--font-mono)';
          tdRatio.textContent = visitorsCount ? ((p.visits || 0) / visitorsCount).toFixed(2) : '—';
          tr.append(tdRatio);

          const tdLast = document.createElement('td');
          tdLast.innerHTML = '<span class="time-stamp">' + formatIST(p.lastVisit) + '</span>';
          tr.append(tdLast);

          const tdDetails = document.createElement('td');
          const details = document.createElement('details');
          details.className = 'popular-details';
          const summary = document.createElement('summary');
          summary.textContent = '🔍 Inspect ' + visitorsCount + ' IP' + (visitorsCount === 1 ? '' : 's');
          details.append(summary);
          
          const ul = document.createElement('ul');
          ul.className = 'section-visit-list';
          for (const visitor of (p.visitors || [])) {
            const vIp = typeof visitor === "object" ? String(visitor.ip || "Unknown") : String(visitor);
            const vVisits = typeof visitor === "object" ? Number(visitor.visits || 1) : 1;
            const vTime = typeof visitor === "object" ? visitor.lastVisit : 0;
            const li = document.createElement('li');
            const geo = visitorsByIP.get(vIp);
            const flag = countryInfo(geo?.country).flag;
            const loc = [geo?.city, geo?.region].filter(Boolean).join(', ');
            const isRifiAudit = isRifiVisitor(vIp);
            if (isRifiAudit) {
              li.innerHTML = flag + ' <span class="rifi-badge" style="font-size:9.5px;padding:1px 5px;margin-right:3px;"><span class="rifi-dot"></span>🎯 rifi</span> <span style="color:#f472b6;font-family:var(--font-mono);">' + formatShortIP(vIp) + '</span> · ' + vVisits + ' visit' + (vVisits===1?'':'s') + ' · ' + formatIST(vTime) + (loc ? ' (' + loc + ')' : '');
            } else {
              li.textContent = flag + ' ' + vIp + ' — ' + vVisits + ' visit' + (vVisits===1?'':'s') + ' · ' + formatIST(vTime) + (loc ? ' (' + loc + ')' : '');
            }
            ul.append(li);
          }
          details.append(ul);
          tdDetails.append(details);
          tr.append(tdDetails);

          tbody.append(tr);
        }
        setText('badge-total-pages', String(popularPageRecords.length));
      } catch (popErr) {
        console.warn('renderPopularPages error:', popErr);
      }
    }

    // RENDER LIVE RADAR
    function renderLiveRadar() {
      try {
        const count = Number(liveData.active) || 0;
        setText('live-active-count', count);
        setText('badge-live-tabs', count + ' ACTIVE');
        setText('radar-summary-text', '● ' + count + ' ACTIVE TABS IN 90s');

        const pages = Array.isArray(liveData.pages) ? liveData.pages : [];
        setText('live-pages-summary', count ? (pages.length + ' active study page' + (pages.length === 1 ? '' : 's')) : 'no active sessions');

        const grid = document.getElementById('live-pages-grid');
        if (grid) {
          grid.replaceChildren();

          if (!pages.length) {
            grid.innerHTML = '<p style="color:var(--text-dim); font-size:14px; padding:18px;">No concurrent visitors detected on learning pages in the last 90 seconds.</p>';
          } else {
            for (const p of pages) {
              const card = document.createElement('div');
              card.className = 'radar-card active-card';
              card.innerHTML = '<div class="radar-card-info">' +
                  '<h4>' + (p.section || 'Academic Hub Portal') + '</h4>' +
                  '<div class="radar-card-path">' + (p.path || '/') + '</div>' +
                '</div>' +
                '<div class="radar-card-count">' +
                  '<div class="num">' + (p.count || 1) + '</div>' +
                  '<div class="label">ACTIVE TABS</div>' +
                '</div>';
              grid.append(card);
            }
          }
        }
      } catch (err) {
        console.warn('renderLiveRadar error:', err);
      }
    }

    // RENDER YESTERDAY'S RECAP & INTELLIGENCE (NEW!)
    function renderYesterday() {
      try {
        const now = Date.now();
        const yesterdayTime = now - 24 * 60 * 60 * 1000;
        const yDate = new Date(yesterdayTime + 330 * 60 * 1000);
        const yDayStr = yDate.toISOString().slice(0, 10);
        const yDateDisplay = yDate.toLocaleDateString('en-IN', { timeZone: 'UTC', weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' });
        setText('yesterday-date-chip', '📅 ' + yDateDisplay);

        // Filter yesterday records from trafficRecords or yesterdayData
        let yRecords = [];
        if (yesterdayData && Array.isArray(yesterdayData.records) && yesterdayData.records.length > 0) {
          yRecords = yesterdayData.records;
        } else {
          yRecords = trafficRecords.filter(r => !r.isOwner && indiaDayStr(r.time) === yDayStr);
        }

        const totalViews = yesterdayData?.views || yRecords.reduce((acc, r) => acc + (r.visits || 1), 0);
        const uniqueVisitors = yesterdayData?.visitors || yRecords.length;
        const ratio = uniqueVisitors ? (totalViews / uniqueVisitors).toFixed(2) : '0';
        const repeatCount = yRecords.filter(r => r.visits > 1).length;
        const repeatPct = yRecords.length ? Math.round((repeatCount / yRecords.length) * 100) : 0;

        // Update Tab Badge & KPI Cards
        setText('badge-yesterday-views', totalViews + ' VIEWS');
        setText('yd-kpi-views', totalViews);
        setText('yd-kpi-visitors', uniqueVisitors);
        setText('yd-kpi-ratio', ratio);
        setText('yd-kpi-repeats', repeatPct + '%');
        setText('yd-kpi-repeat-count', repeatCount);

        // Hourly Array & Peak
        let hourly = yesterdayData?.hourly;
        if (!Array.isArray(hourly) || hourly.length !== 24) {
          hourly = Array(24).fill(0);
          for (const r of yRecords) {
            const h = new Date(r.time + 330 * 60 * 1000).getUTCHours();
            if (h >= 0 && h < 24) hourly[h] += (r.visits || 1);
          }
        }
        let peakH = yesterdayData?.peakHour?.hour ?? 0;
        let peakViews = yesterdayData?.peakHour?.views ?? 0;
        if (!peakViews) {
          hourly.forEach((cnt, idx) => {
            if (cnt > peakViews) { peakViews = cnt; peakH = idx; }
          });
        }

        function formatHour(h) {
          const ampm = h >= 12 ? 'PM' : 'AM';
          const h12 = h % 12 || 12;
          const nextH = (h + 1) % 24;
          const nextAmpm = nextH >= 12 ? 'PM' : 'AM';
          const nextH12 = nextH % 12 || 12;
          return h12 + ':00 ' + ampm + ' – ' + nextH12 + ':00 ' + nextAmpm + ' IST';
        }

        const peakHourStr = peakViews > 0 ? (formatHour(peakH) + ' (' + peakViews + ' views)') : 'Low Ingress';
        setText('yd-peak-hour', peakHourStr);

        // Popular Pages for Yesterday
        let yPopular = [];
        if (yesterdayData && Array.isArray(yesterdayData.popularPages) && yesterdayData.popularPages.length > 0) {
          yPopular = yesterdayData.popularPages;
        } else {
          const map = new Map();
          for (const r of yRecords) {
            for (const s of (r.sections || [])) {
              const name = s.name || r.path || 'Study Material';
              const curr = map.get(name) || { section: name, path: r.path, visits: 0, visitors: new Set() };
              curr.visits += (s.visits || 1);
              curr.visitors.add(r.ip);
              map.set(name, curr);
            }
          }
          yPopular = Array.from(map.values()).map(item => ({
            ...item,
            visitors: Array.from(item.visitors)
          })).sort((a,b) => b.visits - a.visits);
        }

        const topYContent = yPopular.length > 0 ? (yPopular[0].section || yPopular[0].path) : '—';
        const topYViews = yPopular.length > 0 ? (yPopular[0].visits + ' views') : '';
        setText('yd-top-content', topYContent + (topYViews ? ' · ' + topYViews : ''));
        setText('yd-content-count', yPopular.length + ' ITEMS');

        // Demographics: Devices & Sources & Locations
        const devMap = yesterdayData?.devices || {};
        const refMap = yesterdayData?.referrers || {};
        const locMap = yesterdayData?.locations || {};

        if (!yesterdayData?.devices) {
          for (const r of yRecords) {
            const dev = r.device || 'Mobile / Web';
            devMap[dev] = (devMap[dev] || 0) + (r.visits || 1);
            const ref = r.ref || 'Direct / Saved';
            refMap[ref] = (refMap[ref] || 0) + (r.visits || 1);
            const loc = [r.city, r.region].filter(Boolean).join(', ') || (r.country && r.country !== 'XX' ? r.country : 'Unknown');
            locMap[loc] = (locMap[loc] || 0) + (r.visits || 1);
          }
        }

        const topDevEntries = Object.entries(devMap).sort((a,b) => b[1] - a[1]);
        const topRefEntries = Object.entries(refMap).sort((a,b) => b[1] - a[1]);
        const topLocEntries = Object.entries(locMap).sort((a,b) => b[1] - a[1]);

        const topDevice = topDevEntries.length > 0 ? topDevEntries[0][0] : 'Mobile';
        const topSource = topRefEntries.length > 0 ? topRefEntries[0][0] : 'Direct';
        setText('yd-primary-device', topDevice);
        setText('yd-primary-source', topSource);

        // Synthesize Executive Brief Text
        const briefEl = document.getElementById('yesterday-brief-text');
        if (briefEl) {
          if (totalViews === 0 && uniqueVisitors === 0) {
            briefEl.innerHTML = 'Yesterday on <strong>' + yDateDisplay + '</strong>, the hub experienced a quiet cycle with <strong>0 public ingress requests</strong> recorded in the active buffer. Radar and tracking remain operational.';
          } else {
            const devPct = totalViews ? Math.round(((topDevEntries[0]?.[1] || 0) / totalViews) * 100) : 0;
            briefEl.innerHTML = 'Yesterday on <strong>' + yDateDisplay + '</strong>, Academic Hub recorded <strong>' + totalViews + ' total page views</strong> across <strong>' + uniqueVisitors + ' unique student' + (uniqueVisitors === 1 ? '' : 's') + '</strong> with an average engagement of <strong>' + ratio + ' views/student</strong>. ' +
              'Peak study rush transpired at <strong>' + (peakViews > 0 ? formatHour(peakH) : 'spread throughout the day') + '</strong>' + (peakViews > 0 ? ' (' + peakViews + ' views)' : '') + '. ' +
              'The most accessed learning material was <strong>' + (topYContent !== '—' ? topYContent : 'the Course Hub Portal') + '</strong>' + (topYViews ? ' (' + topYViews + ')' : '') + '. ' +
              'Learners connected predominantly using <strong>' + topDevice + '</strong> (~' + devPct + '%) via <strong>' + topSource + '</strong>, with <strong>' + repeatPct + '%</strong> repeat visitors returning for revision.';
          }
        }

        // Render 24-Hour Bar Chart
        const chartWrap = document.getElementById('yesterday-hourly-chart');
        if (chartWrap) {
          chartWrap.replaceChildren();
          const maxVal = Math.max(...hourly, 1);
          for (let h = 0; h < 24; h++) {
            const v = hourly[h] || 0;
            const pct = Math.max(3, Math.round((v / maxVal) * 100));
            const col = document.createElement('div');
            col.className = 'chart-bar-col' + (h === peakH && v > 0 ? ' peak' : '');
            
            const fill = document.createElement('div');
            fill.className = 'chart-bar-fill';
            fill.style.height = pct + '%';

            const tip = document.createElement('div');
            tip.className = 'chart-bar-tooltip';
            tip.textContent = String(h).padStart(2,'0') + ':00 IST · ' + v + ' view' + (v === 1 ? '' : 's');

            col.append(tip, fill);
            chartWrap.append(col);
          }
        }

        // Render Popular Content List (Yesterday)
        const popTbody = document.getElementById('yesterday-popular-rows');
        if (popTbody) {
          popTbody.replaceChildren();
          if (!yPopular.length) {
            const tr = document.createElement('tr');
            tr.innerHTML = '<td colspan="4" style="text-align:center; padding:22px; color:var(--text-dim); font-size:13px;">No study assets accessed yesterday</td>';
            popTbody.append(tr);
          } else {
            for (const [idx, p] of yPopular.slice(0, 15).entries()) {
              const tr = document.createElement('tr');
              const rankCls = idx === 0 ? 'rank-1' : (idx === 1 ? 'rank-2' : (idx === 2 ? 'rank-3' : 'rank-norm'));
              const vCount = Array.isArray(p.visitors) ? p.visitors.length : (typeof p.visitors === 'number' ? p.visitors : 0);
              tr.innerHTML = '<td><span class="rank-badge ' + rankCls + '">#' + (idx + 1) + '</span></td>' +
                '<td><strong style="color:var(--text-pure); font-size:13px;">' + (p.section || 'Learning Material') + '</strong><br><span class="path-pill" style="font-size:10.5px; margin-top:2px; display:inline-block;">' + (p.path || '/') + '</span></td>' +
                '<td><strong style="font-family:var(--font-mono); color:#fbbf24;">' + (p.visits || 0) + '</strong></td>' +
                '<td><span class="ip-badge" style="font-size:11px;">' + vCount + '</span></td>';
              popTbody.append(tr);
            }
          }
        }

        // Render Devices Progress Bars
        const devContainer = document.getElementById('yesterday-device-bars');
        if (devContainer) {
          devContainer.replaceChildren();
          const devTotal = topDevEntries.reduce((acc, [, val]) => acc + val, 0) || 1;
          for (const [name, val] of topDevEntries.slice(0, 5)) {
            const pct = Math.round((val / devTotal) * 100);
            const row = document.createElement('div');
            row.className = 'demo-row';
            row.innerHTML = '<div class="demo-row-head"><span>' + name + '</span><strong>' + pct + '% <small style="color:var(--text-dim); font-weight:normal;">(' + val + ')</small></strong></div>' +
              '<div class="demo-track"><div class="demo-fill" style="width:' + pct + '%"></div></div>';
            devContainer.append(row);
          }
        }

        // Render Referrers Progress Bars
        const refContainer = document.getElementById('yesterday-referrer-bars');
        if (refContainer) {
          refContainer.replaceChildren();
          const refTotal = topRefEntries.reduce((acc, [, val]) => acc + val, 0) || 1;
          for (const [name, val] of topRefEntries.slice(0, 5)) {
            const pct = Math.round((val / refTotal) * 100);
            const row = document.createElement('div');
            row.className = 'demo-row';
            row.innerHTML = '<div class="demo-row-head"><span>' + name + '</span><strong>' + pct + '% <small style="color:var(--text-dim); font-weight:normal;">(' + val + ')</small></strong></div>' +
              '<div class="demo-track"><div class="demo-fill cyan" style="width:' + pct + '%"></div></div>';
            refContainer.append(row);
          }
        }

        // Render Top Locations Pills
        const locContainer = document.getElementById('yesterday-location-pills');
        if (locContainer) {
          locContainer.replaceChildren();
          for (const [name, val] of topLocEntries.slice(0, 8)) {
            const pill = document.createElement('span');
            pill.className = 'demo-pill';
            pill.innerHTML = '📍 ' + name + ' <strong style="color:var(--accent-cyan);">' + val + '</strong>';
            locContainer.append(pill);
          }
        }

        // Render Yesterday Visitors Table (with filter)
        const ydSearchEl = document.getElementById('yd-search-input');
        const ydSearch = (ydSearchEl ? ydSearchEl.value : "").trim().toLowerCase();
        let filteredYd = yRecords.filter(item => {
          if (!ydSearch) return true;
          const info = countryInfo(item.country);
          const hay = [item.ip, item.country, info.name, item.region, item.city, item.isp, item.device, item.ref, item.path, ...(item.sections||[]).map(s=>s.name)].filter(Boolean).join(' ').toLowerCase();
          return hay.includes(ydSearch);
        });

        setText('yd-visitor-count-info', filteredYd.length + ' of ' + yRecords.length + ' Visitors');

        const yRows = document.getElementById('yesterday-visitor-rows');
        if (yRows) {
          yRows.replaceChildren();
          if (!filteredYd.length) {
            const tr = document.createElement('tr');
            tr.innerHTML = '<td colspan="7" style="text-align:center; padding:32px; color:var(--text-dim); font-size:13.5px;">No yesterday visitor sessions found matching filter</td>';
            yRows.append(tr);
          } else {
            for (const v of filteredYd) {
              const tr = document.createElement('tr');
              const info = countryInfo(v.country);
              const loc = [v.region, v.city].filter(Boolean).join(', ') || 'Unknown';
              const acts = (v.sections || []).map(s => s.name).slice(0, 3).join(', ') || getPathFallbackActivity(v.path);
              
              tr.innerHTML = '<td><span class="time-stamp">' + formatIST(v.time) + '</span></td>' +
                '<td><span class="ip-badge" title="' + v.ip + '">' + formatShortIP(v.ip) + '</span></td>' +
                '<td><span class="visits-badge ' + (v.visits > 1 ? 'multi' : 'single') + '">' + v.visits + ' visit' + (v.visits===1?'':'s') + '</span></td>' +
                '<td><span class="country-pill"><span class="country-flag">' + info.flag + '</span> ' + info.name.split(' (')[0] + '</span></td>' +
                '<td><div class="location-text">' + loc + '</div>' + (v.isp ? '<div style="font-size:11px; color:var(--text-dim); font-family:var(--font-mono);">📶 ' + v.isp + '</div>' : '') + '</td>' +
                '<td><div style="font-size:12px; font-weight:600;">' + (v.device || '📱 Mobile') + '</div><div style="font-size:11px; color:var(--text-dim);">' + (v.ref || '🔖 Direct') + '</div></td>' +
                '<td><div class="path-pill">' + (v.path || '/') + '</div><div style="font-size:11px; color:#cbd5e1; margin-top:3px;">' + acts + '</div></td>';
              yRows.append(tr);
            }
          }
        }
      } catch (yErr) {
        console.warn('renderYesterday error:', yErr);
      }
    }

    // DATA FETCHING
    async function refreshLiveVisitors() {
      try {
        const res = await fetch('/api/admin/live-visitors', { cache: 'no-store', credentials: 'same-origin' });
        if (res.status === 401) { location.href = '/admin/login'; return; }
        const d = await res.json();
        if (res.ok && d) {
          liveData = d;
        } else {
          liveData = { active: 0, pages: [] };
        }
      } catch (err) {
        console.warn('Live visitors fetch error:', err);
        liveData = { active: 0, pages: [] };
      } finally {
        renderLiveRadar();
      }
    }

    async function refreshTraffic() {
      try {
        const res = await fetch('/api/admin/traffic', { cache: 'no-store', credentials: 'same-origin' });
        if (res.status === 401) { location.href = '/admin/login'; return; }
        if (!res.ok) {
          console.warn('Traffic response error status:', res.status);
          const link = document.getElementById('radar-link-status');
          if (link) { link.textContent = '● SYNC RETRY (' + res.status + ')'; link.style.color = 'var(--accent-amber)'; }
          return;
        }
        const d = await res.json();
        if (d && Array.isArray(d.records)) {
          trafficRecords = d.records;
          popularPageRecords = Array.isArray(d.popularPages) ? d.popularPages : [];
          if (d.yesterday) yesterdayData = d.yesterday;
          const link = document.getElementById('radar-link-status');
          if (link) {
            if (d.error) {
              link.textContent = '● DATA NOTICE';
              link.style.color = 'var(--accent-amber)';
            } else {
              link.textContent = '● NOMINAL';
              link.style.color = 'var(--accent-emerald)';
            }
          }
          
          if (d.today) {
            setText('today-badge', d.today.day || 'TODAY');
            setText('today-visitors', d.today.visitors || 0);
            setText('today-views', d.today.views || 0);
            setText('today-ratio', d.today.visitors ? (d.today.views / d.today.visitors).toFixed(2) : '0');
          }

          setText('buffer-views', d.views !== undefined ? d.views : trafficRecords.length);
          setText('buffer-ips', d.uniqueIPs !== undefined ? d.uniqueIPs : trafficRecords.length);
          
          const repeatIps = trafficRecords.filter(v => v.visits > 1).length;
          const repPct = trafficRecords.length ? ((repeatIps / trafficRecords.length) * 100).toFixed(1) : 0;
          setText('buffer-repeats', repPct + '%');
        }
      } catch (err) {
        console.warn('Traffic fetch error:', err);
        const link = document.getElementById('radar-link-status');
        if (link) { link.textContent = '● SYNC RETRY'; link.style.color = 'var(--accent-amber)'; }
      } finally {
        renderTraffic();
        renderPopularPages();
        renderYesterday();
      }
    }

    function exportTrafficCSV() {
      if (!trafficRecords.length) { alert('No traffic records to export.'); return; }
      const headers = ['Visitor IP', 'Total Visits', 'Country', 'Region', 'City', 'Broadband / ISP', 'Device', 'Traffic Source', 'Last Active (IST)', 'Latest Page Path'];
      const rows = trafficRecords.map(v => [
        v.ip,
        v.visits,
        '"' + (v.country || 'XX') + '"',
        '"' + (v.region || '').replace(/"/g, '""') + '"',
        '"' + (v.city || '').replace(/"/g, '""') + '"',
        '"' + (v.isp || '').replace(/"/g, '""') + '"',
        '"' + (v.device || '').replace(/"/g, '""') + '"',
        '"' + (v.ref || '').replace(/"/g, '""') + '"',
        '"' + formatIST(v.time) + '"',
        '"' + (v.path || '/').replace(/"/g, '""') + '"'
      ]);
      const csv = [headers.join(','), ...rows.map(row => row.join(','))].join(String.fromCharCode(10));
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a'); a.href = url; a.download = 'Academic_Hub_Traffic_Audit_' + new Date().toISOString().slice(0, 10) + '.csv';
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    }

    function exportYesterdayCSV() {
      const now = Date.now();
      const yDayStr = new Date(now - 24 * 60 * 60 * 1000 + 330 * 60 * 1000).toISOString().slice(0, 10);
      const yRecs = (yesterdayData && Array.isArray(yesterdayData.records) && yesterdayData.records.length > 0)
        ? yesterdayData.records
        : trafficRecords.filter(r => !r.isOwner && indiaDayStr(r.time) === yDayStr);

      if (!yRecs.length) { alert('No yesterday traffic records to export.'); return; }
      const headers = ['Visitor IP', 'Visits Yesterday', 'Country', 'Region', 'City', 'ISP', 'Device', 'Traffic Source', 'Timestamp (IST)', 'Latest Page'];
      const rows = yRecs.map(v => [
        v.ip,
        v.visits,
        '"' + (v.country || 'XX') + '"',
        '"' + (v.region || '').replace(/"/g, '""') + '"',
        '"' + (v.city || '').replace(/"/g, '""') + '"',
        '"' + (v.isp || '').replace(/"/g, '""') + '"',
        '"' + (v.device || '').replace(/"/g, '""') + '"',
        '"' + (v.ref || '').replace(/"/g, '""') + '"',
        '"' + formatIST(v.time) + '"',
        '"' + (v.path || '/').replace(/"/g, '""') + '"'
      ]);
      const csv = [headers.join(','), ...rows.map(row => row.join(','))].join(String.fromCharCode(10));
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a'); a.href = url; a.download = 'Academic_Hub_Yesterday_Audit_' + yDayStr + '.csv';
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    }

    // TABS LOGIC
    const stations = [
      { id: 'geo', tab: 'tab-btn-geo', panel: 'panel-geo' },
      { id: 'yesterday', tab: 'tab-btn-yesterday', panel: 'panel-yesterday' },
      { id: 'radar', tab: 'tab-btn-radar', panel: 'panel-radar' },
      { id: 'content', tab: 'tab-btn-content', panel: 'panel-content' }
    ];

    function activateStation(id) {
      for (const s of stations) {
        const isMatch = s.id === id;
        const btn = document.getElementById(s.tab);
        const pnl = document.getElementById(s.panel);
        if (btn) {
          btn.classList.toggle('active', isMatch);
          btn.setAttribute('aria-selected', String(isMatch));
        }
        if (pnl) pnl.hidden = !isMatch;
      }
      if (id === 'yesterday') {
        renderYesterday();
      }
    }

    for (const s of stations) {
      const btn = document.getElementById(s.tab);
      if (btn) btn.onclick = () => activateStation(s.id);
    }

    // HASH NAVIGATION CHECK
    if (location.hash === '#yesterday' || location.hash === '#recap') {
      activateStation('yesterday');
    } else if (location.hash === '#radar' || location.hash === '#live') {
      activateStation('radar');
    } else if (location.hash === '#content') {
      activateStation('content');
    } else {
      activateStation('geo');
    }

    // EVENTS & INITIAL LOAD
    const syncBtn = document.getElementById('btn-force-sync');
    if (syncBtn) syncBtn.onclick = () => {
      refreshLiveVisitors();
      refreshTraffic();
    };

    const exportBtn = document.getElementById('btn-export-traffic');
    if (exportBtn) exportBtn.onclick = exportTrafficCSV;

    const exportYdBtn = document.getElementById('btn-export-yesterday');
    if (exportYdBtn) exportYdBtn.onclick = exportYesterdayCSV;

    const searchInput = document.getElementById('traffic-search-input');
    if (searchInput) searchInput.oninput = () => { trafficPage = 1; renderTraffic(); };
    const pageSizeSelect = document.getElementById('traffic-page-size');
    if (pageSizeSelect) pageSizeSelect.onchange = () => { trafficPage = 1; renderTraffic(); };
    const prevPageBtn = document.getElementById('traffic-prev-page');
    if (prevPageBtn) prevPageBtn.onclick = () => { trafficPage = Math.max(1, trafficPage - 1); renderTraffic(); };
    const nextPageBtn = document.getElementById('traffic-next-page');
    if (nextPageBtn) nextPageBtn.onclick = () => { trafficPage++; renderTraffic(); };

    const ydSearchInput = document.getElementById('yd-search-input');
    if (ydSearchInput) ydSearchInput.oninput = renderYesterday;

    const logoutBtn = document.getElementById('logout');
    if (logoutBtn) logoutBtn.onclick = async () => {
      try {
        await fetch('/api/admin/logout', { method: 'POST' });
      } finally {
        location.href = '/admin/login';
      }
    };

    // POLLING CYCLE
    let pollIntervalId = null;
    function setPollingInterval(ms) {
      if (pollIntervalId) clearInterval(pollIntervalId);
      if (ms > 0) {
        pollIntervalId = setInterval(() => {
          if (!document.hidden) {
            refreshLiveVisitors();
            refreshTraffic();
          }
        }, ms);
      }
    }

    const syncIntervalSelect = document.getElementById('sync-interval');
    if (syncIntervalSelect) syncIntervalSelect.onchange = (e) => {
      setPollingInterval(Number(e.target.value));
    };

    // INITIAL TRIGGER
    try { refreshLiveVisitors(); } catch (e) { console.warn(e); }
    try { refreshTraffic(); } catch (e) { console.warn(e); }
    setPollingInterval(15000);
  ` : `
    const form = document.getElementById('login');
    const status = document.getElementById('status');
    if (form) {
      form.onsubmit = async (e) => {
        e.preventDefault();
        if (status) status.textContent = 'AUTHENTICATING...';
        const passwordEl = document.getElementById('password');
        const password = passwordEl ? passwordEl.value : '';
        try {
          const res = await fetch('/api/admin/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ password })
          });
          const data = await res.json();
          if (res.ok) {
            if (status) {
              status.style.color = 'var(--accent-emerald)';
              status.textContent = 'AUTHENTICATED. ENTERING CONTROL ROOM...';
            }
            const params = new URLSearchParams(location.search);
            location.href = params.get('next') || '/admin/traffic';
          } else {
            if (status) {
              status.style.color = 'var(--accent-rose)';
              status.textContent = data.error || 'ACCESS DENIED: Invalid Security Key';
            }
          }
        } catch (err) {
          if (status) {
            status.style.color = 'var(--accent-rose)';
            status.textContent = 'COMMUNICATION ERROR';
          }
        }
      };
    }
  `;

  return new Response(`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex,nofollow">
<title>Academic Hub // Control Room Watch</title>
<style>${styles}</style>
</head>
<body>
${content}
<script>${script}</script>
</body>
</html>`, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "private, no-store",
      "X-Robots-Tag": "noindex, nofollow",
      "X-Content-Type-Options": "nosniff",
      "Content-Security-Policy": "default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; connect-src 'self' https:; base-uri 'none'; frame-ancestors 'none'; form-action 'self'",
      "Referrer-Policy": "no-referrer"
    }
  });
}



async function fetchMockTestResults(env) {
  if (!env.RESULTS_API || typeof env.RESULTS_API.fetch !== "function") {
    return json({error:"The mock test results service binding RESULTS_API is missing from the Academic Hub Worker."},503);
  }
  if (typeof env.RESULTS_API_TOKEN !== "string" || !env.RESULTS_API_TOKEN) {
    return json({error:"Mock test results are not connected yet. Add the RESULTS_API_TOKEN secret to the Academic Hub Worker."},503);
  }
  let upstream;
  try {
    upstream = await env.RESULTS_API.fetch(new Request("https://results.internal/results?limit=2000", {
      headers: {Authorization:"Bearer " + env.RESULTS_API_TOKEN, Accept:"application/json", "Cache-Control":"no-store"}
    }));
  } catch {
    return json({error:"The mock test results service could not be reached."},502);
  }
  if (upstream.status === 401) return json({error:"The results service rejected the configured secret. Match RESULTS_API_TOKEN on Academic Hub with ADMIN_TOKEN on the results Worker."},503);
  if (!upstream.ok) return json({error:"The mock test results service returned HTTP " + upstream.status + "."},502);
  let payload;
  try { payload = await upstream.json(); } catch { return json({error:"The mock test results service returned invalid data."},502); }
  const results = Array.isArray(payload.results) ? payload.results : [];
  const ipCounts = new Map();
  for (const item of results) {
    const ip = typeof item.ip_address === "string" ? item.ip_address.trim().toLowerCase() : "";
    if (ip) ipCounts.set(ip, (ipCounts.get(ip) || 0) + 1);
  }
  const repeatedIPTotal = Array.from(ipCounts.values()).filter(count => count > 1).length;
  return json({repeated_ip_total:repeatedIPTotal,results:results.map((item) => {
    const ip = typeof item.ip_address === "string" ? item.ip_address.trim().toLowerCase() : "";
    return {
    id:Number.isFinite(Number(item.id)) ? Number(item.id) : "",
    name:typeof item.name === "string" ? item.name.slice(0,120) : "",
    reg:typeof item.reg === "string" ? item.reg.slice(0,80) : "",
    subject:typeof item.subject === "string" ? item.subject.slice(0,80) : "",
    score:Number.isFinite(Number(item.score)) ? Number(item.score) : null,
    total:Number.isFinite(Number(item.total)) ? Number(item.total) : null,
    percentage:Number.isFinite(Number(item.percentage)) ? Number(item.percentage) : null,
    same_ip_attempts:ip ? ipCounts.get(ip) : null,
    wrong:Number.isFinite(Number(item.wrong)) ? Number(item.wrong) : null,
    unanswered:Number.isFinite(Number(item.unanswered)) ? Number(item.unanswered) : null,
    status:typeof item.status === "string" ? item.status.slice(0,40) : "",
    auto_submitted:Boolean(Number(item.auto_submitted)),
    submitted_at:typeof item.submitted_at === "string" ? item.submitted_at.slice(0,100) : ""
    };
  })});
}

// Read secrets from the current entry Worker on every request, not from a
// retained Durable Object instance or a namespace owned by another Worker.
// Never forward a client-supplied verification header.
async function adminRequest(request, env, url) {
  const internal = new Request(url, request);
  internal.headers.delete("X-Hub-Admin-Hash");
  if (typeof env.ADMIN_PASSWORD === "string" && env.ADMIN_PASSWORD.length >= 16) {
    internal.headers.set("X-Hub-Admin-Hash", await digest(env.ADMIN_PASSWORD));
  }
  return internal;
}

async function isAuthorizedModerator(request, env, room, fallbackPassword) {
  if (typeof env.ADMIN_PASSWORD !== "string" || env.ADMIN_PASSWORD.length < 16) return false;
  const headerPass = request.headers.get("X-Admin-Password") || fallbackPassword;
  if (headerPass && typeof headerPass === "string") {
    const expected = await digest(env.ADMIN_PASSWORD);
    const actual = await digest(headerPass);
    let mismatch = 0;
    for (let i = 0; i < expected.length; i++) mismatch |= expected.charCodeAt(i) ^ actual.charCodeAt(i);
    if (!mismatch) return true;
  }
  try {
    const sessionReq = new Request("https://internal/admin/api/admin/session", {
      method: "GET",
      headers: {
        "Cookie": request.headers.get("Cookie") || ""
      }
    });
    const session = await room.fetch(await adminRequest(sessionReq, env, "https://internal/admin/api/admin/session"));
    if (session.ok) return true;
  } catch {}
  return false;
}

// A dedicated namespace owned by this Worker keeps admin storage separate from legacy chat.
export class OwnerTraffic extends StudyHubChat {}

function indiaDay(time) { return new Date(time + 330*60*1000).toISOString().slice(0,10); }

function groupPopularPages(events = [], ownerIp = "") {
  const groups = new Map();
  const safeEvents = Array.isArray(events) ? events : [];
  for (const event of safeEvents) {
    if (!event || typeof event !== "object") continue;
    // Exclude owner testing from inflating content leaderboards
    if (event.isOwner || (ownerIp && event.ip === ownerIp)) continue;
    const pagePath = typeof event.path === "string" ? event.path : "/";
    const sectionName = typeof event.section === "string" ? event.section : "Page";
    const key = JSON.stringify([pagePath, sectionName]);
    let page = groups.get(key);
    if (!page) {
      page = { path: pagePath, section: sectionName, visits: 0, lastVisit: 0, visitors: new Map() };
      groups.set(key, page);
    }
    const evtTime = typeof event.time === "number" ? event.time : 0;
    page.visits++;
    page.lastVisit = Math.max(page.lastVisit, evtTime);
    const ip = String(event.ip || "Unknown");
    const visitor = page.visitors.get(ip) || { ip, visits: 0, lastVisit: 0 };
    visitor.visits++;
    visitor.lastVisit = Math.max(visitor.lastVisit, evtTime);
    page.visitors.set(ip, visitor);
  }
  return Array.from(groups.values()).map(page => ({
    ...page,
    visitors: Array.from(page.visitors.values()).sort((a,b) => (b.visits||0) - (a.visits||0) || (b.lastVisit||0) - (a.lastVisit||0))
  })).sort((a,b) => (b.visits||0) - (a.visits||0) || (b.lastVisit||0) - (a.lastVisit||0));
}

function groupTrafficByIP(records = [], sectionEvents = [], ownerIp = "") {
  const groups = new Map();
  const safeRecords = Array.isArray(records) ? records.filter(r => r && typeof r === "object") : [];
  const safeSectionEvents = Array.isArray(sectionEvents) ? sectionEvents.filter(e => e && typeof e === "object") : [];

  for (const record of safeRecords.slice().sort((a,b) => (b.time||0) - (a.time||0))) {
    const ip = String(record.ip || "Unknown");
    let group = groups.get(ip);
    const isOwner = Boolean(record.isOwner || (ownerIp && ip === ownerIp));
    if (!group) {
      group = {
        ...record,
        ip,
        isOwner,
        time: typeof record.time === "number" ? record.time : 0,
        path: typeof record.path === "string" ? record.path : "/",
        visits: 0,
        country: typeof record.country === "string" ? record.country : "XX",
        region: typeof record.region === "string" ? record.region : "",
        city: typeof record.city === "string" ? record.city : "",
        isp: typeof record.isp === "string" ? record.isp : "",
        device: typeof record.device === "string" ? record.device : "",
        ref: typeof record.ref === "string" ? record.ref : "",
        sections: new Map(),
        latestSection: "",
        latestSectionTime: 0
      };
      groups.set(ip, group);
    }
    group.visits++;
    if (record.isOwner || (ownerIp && ip === ownerIp)) group.isOwner = true;
    if ((!group.country || group.country === "XX") && record.country && record.country !== "XX") group.country = record.country;
    if (!group.region && record.region) group.region = record.region;
    if (!group.city && record.city) group.city = record.city;
    if (!group.isp && record.isp) group.isp = record.isp;
    if (!group.device && record.device) group.device = record.device;
    if (!group.ref && record.ref) group.ref = record.ref;
  }

  for (const event of safeSectionEvents) {
    const ip = String(event.ip || "Unknown");
    const evtTime = typeof event.time === "number" ? event.time : 0;
    let group = groups.get(ip);
    const isOwner = Boolean(event.isOwner || (ownerIp && ip === ownerIp));
    if (!group) {
      group = {
        ip,
        isOwner,
        time: evtTime,
        path: typeof event.path === "string" ? event.path : "/",
        visits: 0,
        country: "XX",
        region: "",
        city: "",
        isp: "",
        device: "",
        ref: "",
        sections: new Map(),
        latestSection: "",
        latestSectionTime: 0
      };
      groups.set(ip, group);
    }
    if (event.isOwner || (ownerIp && ip === ownerIp)) group.isOwner = true;
    if (evtTime > (group.time || 0)) {
      group.time = evtTime;
      group.path = event.path || group.path;
    }
    if (evtTime >= (group.latestSectionTime || 0)) {
      group.latestSectionTime = evtTime;
      group.latestSection = String(event.section || "");
    }
    const secName = String(event.section || "Page");
    const section = group.sections.get(secName) || { name: secName, visits: 0, lastVisit: 0 };
    section.visits++;
    section.lastVisit = Math.max(section.lastVisit, evtTime);
    group.sections.set(secName, section);
  }

  return Array.from(groups.values()).map(group => {
    const sectionList = Array.from(group.sections.values()).sort((a,b) => (b.lastVisit||0) - (a.lastVisit||0));
    const latestSec = group.latestSection || (sectionList.length > 0 ? sectionList[0].name : "");
    return {
      ...group,
      latestSection: latestSec,
      sections: sectionList
    };
  }).sort((a,b) => (b.time||0) - (a.time||0));
}
