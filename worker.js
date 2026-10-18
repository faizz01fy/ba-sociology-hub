import {handleStudyHelper} from './study-helper-backend.js';
export {StudyHelperQuota} from './study-helper-backend.js';
const CHAT_PATH = "/api/chat";
const TRACKER_SCRIPT = "(()=>{let last=\"\";const labels={top:\"Overview\",subjects:\"Semester subjects\",tests:\"Practice tests\",\"ai-study\":\"AI Study Helper\",\"community-chat\":\"Student chat\",support:\"Support\"};function decode(value){try{return decodeURIComponent(value)}catch{return value}}function title(value){return value.replace(/[-_]+/g,\" \").split(\" \").map(function(word){return word?word.charAt(0).toUpperCase()+word.slice(1):\"\"}).join(\" \")}function currentSection(){const path=location.pathname||\"/\";const hash=decode((location.hash||\"\").slice(1));return labels[hash]||(hash?title(hash):(path===\"/\"||path===\"/index.html\"?\"Home\":title(path.split(\"/\").filter(Boolean).map(decode).join(\" / \"))))}function record(){const path=location.pathname||\"/\";const hash=decode((location.hash||\"\").slice(1));const key=path+\"#\"+hash;if(key===last)return;last=key;const label=currentSection();fetch(\"/api/traffic/section\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify({path:path,section:label}),keepalive:true}).catch(function(){});}window.addEventListener(\"hashchange\",record);window.addEventListener(\"pageshow\",record);window.addEventListener(\"popstate\",record);record();function livePresence(active){if(document.querySelector(\".hub-owner-traffic-control\"))return;let id=\"\";try{id=sessionStorage.getItem(\"hub_live_visitor\")||\"\";if(!id){id=\"v-\"+Date.now().toString(36)+\"-\"+Math.random().toString(36).slice(2)+\"-\"+Math.random().toString(36).slice(2);sessionStorage.setItem(\"hub_live_visitor\",id)}}catch{id=\"v-\"+Date.now().toString(36)+\"-\"+Math.random().toString(36).slice(2)+\"-\"+Math.random().toString(36).slice(2)}fetch(\"/api/traffic/presence\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify({visitorId:id,path:location.pathname||\"/\",section:currentSection(),active:active!==false}),keepalive:true}).catch(function(){})}livePresence(true);setInterval(function(){if(!document.hidden)livePresence(true)},25000);document.addEventListener(\"visibilitychange\",function(){if(!document.hidden)livePresence(true)});window.addEventListener(\"pagehide\",function(){livePresence(false)})})();";
const OWNER_LIVE_SCRIPT = "(()=>{const control=document.getElementById('hub-live-control'),panel=document.getElementById('hub-live-panel'),count=document.getElementById('hub-live-count'),summary=document.getElementById('hub-live-summary'),pages=document.getElementById('hub-live-pages'),close=document.getElementById('hub-live-close');if(!control||!panel||!count||!summary||!pages||!close)return;function displayPage(item){const path=String(item.path||'/');const section=String(item.section||'').trim();if(path==='/'||path==='/index.html')return section&&section!=='Home'&&section!=='Overview'?'Home · '+section:'Home page';return section||path}async function update(){try{const response=await fetch('/api/admin/live-visitors',{cache:'no-store',credentials:'same-origin'});if(response.status===401){count.textContent='—';summary.textContent='Owner sign-in required. Sign in to the owner dashboard and reload this page.';pages.replaceChildren();return}const data=await response.json();if(!response.ok)throw Error(data.error||'Could not load live visitors.');const active=Number(data.active)||0;count.textContent=String(active);summary.textContent=active+' active tab'+(active===1?'':'s')+' seen in the last 90 seconds';pages.replaceChildren();const entries=Array.isArray(data.pages)?data.pages:[];if(!active||!entries.length){const empty=document.createElement('li');empty.className='hub-live-empty';empty.textContent='No active visitors right now.';pages.append(empty);return}for(const item of entries){const row=document.createElement('li');const path=document.createElement('span');path.textContent=displayPage(item);const total=document.createElement('strong');const visitors=Number(item.count)||0;total.textContent=visitors+' tab'+(visitors===1?'':'s');row.append(path,total);pages.append(row)}}catch(error){summary.textContent=error.message||'Could not load live visitors.'}}function setOpen(open){panel.hidden=!open;control.setAttribute('aria-expanded',String(open));if(open)update()}control.addEventListener('click',()=>setOpen(panel.hidden));close.addEventListener('click',()=>setOpen(false));document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!panel.hidden){setOpen(false);control.focus()}});update();setInterval(()=>{if(!document.hidden)update()},15000);document.addEventListener('visibilitychange',()=>{if(!document.hidden)update()})})();";
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

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.pathname === "/live-owner.js" && request.method === "GET") return new Response(OWNER_LIVE_SCRIPT,{headers:{"Content-Type":"application/javascript; charset=utf-8","Cache-Control":"no-store","X-Content-Type-Options":"nosniff"}});
    if (url.pathname === "/traffic-tracker.js" && request.method === "GET") return new Response(TRACKER_SCRIPT,{headers:{"Content-Type":"application/javascript; charset=utf-8","Cache-Control":"no-store","X-Content-Type-Options":"nosniff"}});
    if (url.pathname === '/api/study-helper' || url.pathname === '/api/study-helper/status') return handleStudyHelper(request, env);
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
      const result = await room.fetch(await adminRequest(request, env, "https://internal/admin" + url.pathname));
      if (url.pathname === "/admin/traffic" && request.method === "GET") {
        return result.ok ? adminPage(true) : new Response(null,{status:303,headers:{Location:"/admin/login","Cache-Control":"no-store"}});
      }
      return result;
    }
    if (url.pathname === "/api/traffic/section") {
      if (request.method !== "POST") return json({error:"Method not allowed."},405);
      if (request.headers.get("Origin") !== url.origin) return json({error:"Forbidden"},403);
      if (Number(request.headers.get("Content-Length")) > 2048) return json({error:"Request too large."},413);
      let input; try { input = await request.json(); } catch { return json({error:"Invalid request."},400); }
      const path=typeof input.path==="string" ? input.path.slice(0,160) : "";
      const section=cleanText(input.section,80);
      if (!path.startsWith("/") || path.startsWith("//") || !section) return json({error:"Invalid section."},400);
      const ip=request.headers.get("CF-Connecting-IP") || "Unavailable";
      return room.fetch(new Request("https://internal/internal/section",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ip,path,section})}));
    }
    if (url.pathname === "/api/traffic/presence") {
      if (request.method !== "POST") return json({error:"Method not allowed."},405);
      if (request.headers.get("Origin") !== url.origin) return json({error:"Forbidden"},403);
      if (Number(request.headers.get("Content-Length")) > 2048) return json({error:"Request too large."},413);
      let body; try { body=await request.text(); } catch { return json({error:"Invalid request."},400); }
      if (body.length>2048) return json({error:"Request too large."},413);
      let input; try { input=JSON.parse(body); } catch { return json({error:"Invalid request."},400); }
      if (!input || typeof input!=="object" || Array.isArray(input)) return json({error:"Invalid presence."},400);
      const visitorId=typeof input.visitorId==="string" ? input.visitorId.slice(0,80) : "";
      const path=typeof input.path==="string" ? input.path.slice(0,160) : "";
      const section=cleanText(input.section,80);
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
      if (request.headers.get("Origin") !== url.origin) return json({error:"Forbidden"},403);
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
      if (request.method !== "POST") return json({error:"Method not allowed."},405);
      if (request.headers.get("Origin") !== url.origin) return json({error:"Forbidden"},403);
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
    // Serve ordinary static pages and PDFs directly. Visitor analytics previously
    // sent multiple Durable Objects requests on every page load and every 25 seconds.
    // Keep API/admin/chat routes above unchanged; static study content does not need them.
    return env.ASSETS.fetch(request);
  }
};