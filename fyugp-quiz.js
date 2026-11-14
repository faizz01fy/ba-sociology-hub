import quizAppHtml from './fyugp-quiz-html.js';

export const fyugpQuizPath = '/calicut-university-fyugp';
const cookieName = '__Host-fyugp_quiz';
const sessionSeconds = 28800;
const encoder = new TextEncoder();

function decodeBytes(base64) {
  return Uint8Array.from(atob(base64), character => character.charCodeAt(0));
}

async function sessionProof(secret, expires) {
  try {
    const key = await crypto.subtle.importKey(
      'raw', encoder.encode(secret), {name:'HMAC', hash:'SHA-256'}, false, ['sign']
    );
    const signature = await crypto.subtle.sign('HMAC', key, encoder.encode('fyugp-session:' + expires));
    return Array.from(new Uint8Array(signature), value => value.toString(16).padStart(2, '0')).join('');
  } catch {
    return 'valid-proof-' + expires;
  }
}

const unlockPage = `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Calicut University FYUGP | Academic Hub</title>
<style>
body{background:#edf5f0;color:#153236;font:16px/1.55 system-ui,sans-serif;margin:0;padding:16px}
main{max-width:420px;margin:8vh auto;background:white;border:1px solid #cfdfd6;border-radius:18px;padding:26px;box-shadow:0 8px 24px rgba(16,44,49,0.06)}
h1{line-height:1.18;margin:8px 0;font-size:1.45rem;color:#086454}
p{color:#455d59;font-size:0.95rem;margin:8px 0 16px}
input,button{display:block;box-sizing:border-box;width:100%;min-height:46px;margin:7px 0 14px;padding:9px 12px;border-radius:9px;font:inherit}
input{border:1.5px solid #819d91;font-size:1.1rem;letter-spacing:0.1em;text-align:center}
button{background:#086454;color:white;border:0;font-weight:700;cursor:pointer}
button:hover{background:#064e42}
a{color:#086454;text-decoration:none;font-weight:600}
a:hover{text-decoration:underline}
[role=alert]{color:#a02520;background:#fee2e2;padding:10px;border-radius:8px;font-size:0.9rem;margin-bottom:12px}
.nav-breadcrumbs{display:flex;align-items:center;gap:6px;font-size:.82rem;font-weight:600;margin-bottom:14px;color:#6b7280;flex-wrap:wrap}
.nav-breadcrumbs a{color:#086454}
</style></head><body><main>
<div class="nav-breadcrumbs"><a href="/">Academic Hub</a> <span>→</span> <span>FYUGP</span> <span>→</span> <span>IMA DS Sem 1</span></div>
<small style="color:#086454;font-weight:700;text-transform:uppercase;letter-spacing:0.08em">Protected FYUGP Section</small>
<h1>Calicut University FYUGP</h1>
<p>Enter the student password to access IMA DS Semester 1 English VAP Quiz.</p>
<!-- FEEDBACK -->
<form method="post" action="${fyugpQuizPath}">
<label for="password" style="font-weight:600;font-size:0.9rem;color:#153236">Access Password</label>
<input id="password" type="password" name="password" inputmode="numeric" autocomplete="current-password" maxlength="64" placeholder="Enter password (e.g. 1234)" required>
<button type="submit">Unlock FYUGP Section</button>
</form>
<div style="text-align:center;margin-top:16px"><a href="/">← Back to Academic Hub</a></div>
</main></body></html>`;

const semesterPage = `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Calicut University FYUGP | Academic Hub</title>
<style>
body{margin:0;padding:20px;background:#edf5f0;color:#153236;font:16px/1.55 system-ui,sans-serif}
main{max-width:680px;margin:4vh auto;padding:clamp(20px,5vw,36px);background:#fff;border:1px solid #cfdfd6;border-radius:20px;box-shadow:0 10px 30px rgba(16,44,49,0.06)}
h1{line-height:1.15;margin:8px 0 20px;font-size:clamp(1.6rem,4vw,2.1rem);color:#102c31}
h2{margin:0 0 12px;font-size:1.25rem;color:#086454}
h3{margin:0 0 10px;font-size:1.1rem;color:#153236}
a{color:#086454}
summary{cursor:pointer;font-weight:750;padding:12px 14px;background:#eef6f2;border-radius:10px;color:#086454;list-style:none;display:flex;align-items:center;justify-content:space-between}
summary::-webkit-details-marker{display:none}
summary::after{content:'▼';font-size:0.8rem;transition:transform .2s}
details[open] summary::after{transform:rotate(180deg)}
section{padding:18px;border:1px solid #d5e4dc;border-radius:14px;margin-top:12px}
.quiz-card{display:flex;flex-direction:column;gap:6px;padding:14px 16px;border-radius:12px;background:#f0fdf4;border:1.5px solid #a7f3d0;text-decoration:none;transition:all .15s ease}
.quiz-card:hover{background:#dcfce7;border-color:#4ade80;transform:translateY(-1px)}
.quiz-title{font-weight:800;font-size:1.05rem;color:#065f46;display:flex;align-items:center;justify-content:space-between}
.quiz-desc{font-size:0.88rem;color:#166534;line-height:1.45}
.badge-live{background:#059669;color:#fff;font-size:0.75rem;padding:3px 8px;border-radius:6px;font-weight:700}
footer{margin-top:24px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;padding-top:16px;border-top:1px solid #e2e8f0;font-size:0.9rem}
.nav-breadcrumbs{display:flex;align-items:center;gap:6px;font-size:.82rem;font-weight:600;margin-bottom:14px;color:#6b7280;flex-wrap:wrap}
.nav-breadcrumbs a{color:#086454;text-decoration:none}
.nav-breadcrumbs a:hover{text-decoration:underline}
</style></head><body><main>
<div class="nav-breadcrumbs"><a href="/">Academic Hub</a> <span>→</span> <a href="${fyugpQuizPath}">FYUGP</a> <span>→</span> <span style="color:#086454">IMA DS Semester 1</span></div>
<small style="color:#086454;font-weight:800;letter-spacing:0.08em;text-transform:uppercase">Verified Curriculum · Semester 1</small>
<h1>Calicut University FYUGP (Regular)</h1>
<details open>
<summary><span>📁 <strong>IMA DS Semester 1</strong> (Integrated MA Development Studies)</span></summary>
<section aria-labelledby="subjects">
<h2 id="subjects">Subjects &amp; Learning Modules</h2>
<h3>📘 English — Ability Enhancement Course (VAP)</h3>
<a class="quiz-card" href="${fyugpQuizPath}?quiz=idioms">
  <div class="quiz-title">
    <span>🎯 VAP Session 4 · Idioms Interactive Quiz</span>
    <span class="badge-live">OPEN QUIZ →</span>
  </div>
  <div class="quiz-desc">Comprehensive interactive quiz with MCQs, Matching, Context Fill-in-the-Blank, instant answer grading, and contextual examples across Past, Present, and Future tenses.</div>
</a>
</section>
</details>
<footer>
<a href="/">← Return to Academic Hub Home</a>
<span style="color:#64748b;font-size:0.8rem">Authorized Access Active</span>
</footer>
</main></body></html>`;

export async function handleFyugpQuiz(request, env, equals) {
  const headers = new Headers({
    'Cache-Control':'private, no-store',
    'Vary':'Cookie',
    'X-Robots-Tag':'noindex, nofollow',
    'X-Content-Type-Options':'nosniff',
    'Content-Type':'text/html; charset=utf-8'
  });
  const url = new URL(request.url);
  const now = Math.floor(Date.now() / 1000);
  const targetPassword = env.FYUGP_QUIZ_PASSWORD || '1234';
  const signingSecret = env.FYUGP_QUIZ_KEY || (env.ADMIN_PASSWORD ? 'fyugp:' + env.ADMIN_PASSWORD : 'fyugp-hub-secret-default-2026-v1');

  function isOriginAllowed(origin) {
    if (!origin) return true;
    try {
      const o = new URL(origin).hostname.toLowerCase();
      return o === 'academichubfaiz.in' || o === 'www.academichubfaiz.in' || o.endsWith('.academichubfaiz.in') || o.endsWith('.workers.dev');
    } catch {
      return false;
    }
  }

  const unlockFormAction = url.pathname + (url.search || '');

  if (request.method === 'POST') {
    const origin = request.headers.get('Origin');
    if (origin && !isOriginAllowed(origin)) return new Response(null, {status:403, headers});
    if (!request.headers.get('Content-Type')?.startsWith('application/x-www-form-urlencoded')) {
      return new Response(null, {status:415, headers});
    }
    const reader = request.body?.getReader();
    if (!reader) return new Response(null, {status:400, headers});
    let size = 0;
    let body = '';
    const decoder = new TextDecoder();
    for (;;) {
      const {done, value} = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > 512) {
        await reader.cancel();
        return new Response(null, {status:413, headers});
      }
      body += decoder.decode(value, {stream:true});
    }
    const password = new URLSearchParams(body + decoder.decode()).get('password');
    if (!equals(password, targetPassword)) {
      const renderedUnlock = unlockPage
        .replace('${fyugpQuizPath}', unlockFormAction)
        .replace('<!-- FEEDBACK -->', '<p role="alert">Incorrect password. Try entering 1234.</p>');
      return new Response(renderedUnlock, {status:403, headers});
    }
    const expires = now + sessionSeconds;
    const proof = await sessionProof(signingSecret, expires);
    const redirectTarget = url.searchParams.get('quiz') === 'idioms' ? (fyugpQuizPath + '?quiz=idioms') : fyugpQuizPath;
    headers.set('Location', redirectTarget);
    headers.set('Set-Cookie', `${cookieName}=${expires}.${proof}; Max-Age=${sessionSeconds}; Path=/; Secure; HttpOnly; SameSite=Lax`);
    return new Response(null, {status:303, headers});
  }
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    headers.set('Allow','GET, HEAD, POST');
    return new Response(null, {status:405, headers});
  }
  const session = (request.headers.get('Cookie') || '').match(/(?:^|;\s*)__Host-fyugp_quiz=(\d{1,12})\.([a-f0-9]{64})(?:;|$)/);
  if (!session || Number(session[1]) <= now || !equals(session[2], await sessionProof(signingSecret, session[1]))) {
    const renderedUnlock = unlockPage.replace('${fyugpQuizPath}', unlockFormAction);
    return new Response(request.method === 'HEAD' ? null : renderedUnlock, {headers});
  }
  if (request.method === 'HEAD') return new Response(null, {headers});
  if (url.searchParams.get('quiz') === 'idioms') {
    return new Response(quizAppHtml, {headers});
  }
  return new Response(semesterPage, {headers});
}
