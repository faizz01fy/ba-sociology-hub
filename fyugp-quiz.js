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

function renderUnlockPage(formAction, errorHtml = '') {
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>IMA DS Semester 1 | Calicut University FYUGP | Academic Hub</title>
<style>
body{background:#edf5f0;color:#153236;font:16px/1.55 system-ui,sans-serif;margin:0;padding:16px}
main{max-width:440px;margin:8vh auto;background:white;border:1px solid #cfdfd6;border-radius:18px;padding:26px;box-shadow:0 8px 24px rgba(16,44,49,0.06)}
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
<div class="nav-breadcrumbs"><a href="/">Academic Hub</a> <span>→</span> <a href="${fyugpQuizPath}">FYUGP</a> <span>→</span> <span>1. IMA DS</span></div>
<small style="color:#086454;font-weight:700;text-transform:uppercase;letter-spacing:0.08em">Protected Student Section</small>
<h1>1. IMA DS Semester 1</h1>
<p>Enter student password to access IMA DS Semester 1 English AEC learning modules &amp; internal exam prep.</p>
${errorHtml}
<form method="post" action="${formAction}">
<label for="password" style="font-weight:600;font-size:0.9rem;color:#153236">Access Password</label>
<input id="password" type="password" name="password" inputmode="numeric" autocomplete="current-password" maxlength="64" placeholder="Enter password (e.g. 1234)" required autofocus>
<button type="submit">Unlock IMA DS Section</button>
</form>
<div style="text-align:center;margin-top:16px"><a href="${fyugpQuizPath}">← Back to FYUGP Department Directory</a></div>
</main>
<script src="/traffic-tracker.js?v=20261105_act2" defer></script>
</body></html>`;
}

// 1. PUBLIC LANDING PAGE: Calicut University FYUGP Regular (No internal exam questions shown in public)
const publicPortalPage = `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Calicut University FYUGP (Regular) | Academic Hub</title>
<meta name="description" content="Calicut University FYUGP (Regular) program portal on Academic Hub. Access curriculum roadmaps, English Ability Enhancement resources, and study modules.">
<link rel="canonical" href="https://academichubfaiz.in/calicut-university-fyugp">
<style>
body{margin:0;padding:20px;background:#edf5f0;color:#153236;font:16px/1.55 system-ui,sans-serif}
main{max-width:720px;margin:4vh auto;padding:clamp(20px,5vw,36px);background:#fff;border:1px solid #cfdfd6;border-radius:20px;box-shadow:0 10px 30px rgba(16,44,49,0.06)}
h1{line-height:1.15;margin:8px 0 12px;font-size:clamp(1.6rem,4vw,2.1rem);color:#102c31}
.portal-subtitle{font-size:0.95rem;color:#455d59;margin:0 0 20px;line-height:1.5}
.nav-breadcrumbs{display:flex;align-items:center;gap:6px;font-size:.82rem;font-weight:600;margin-bottom:14px;color:#6b7280;flex-wrap:wrap}
.nav-breadcrumbs a{color:#086454;text-decoration:none}
.nav-breadcrumbs a:hover{text-decoration:underline}
.dept-tabs-nav {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
  margin: 18px 0 24px;
}
.dept-tab-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
  border-radius: 12px;
  border: 1.5px solid #d5e4dc;
  background: #ffffff;
  color: #153236;
  font-family: inherit;
  font-size: 0.92rem;
  font-weight: 750;
  text-align: left;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 6px rgba(16, 44, 49, 0.04);
}
.dept-tab-btn:hover {
  transform: translateY(-1.5px);
  box-shadow: 0 4px 12px rgba(16, 44, 49, 0.08);
}
.dept-tab-btn--active {
  background: linear-gradient(135deg, #064e3b 0%, #047857 100%);
  border-color: #059669;
  color: #ffffff;
  box-shadow: 0 4px 14px rgba(6, 78, 59, 0.25);
}
.dept-tab-btn--active:hover {
  border-color: #34d399;
}
.dept-tab-btn--locked {
  background: #f8fafc;
  border-color: #e2e8f0;
  color: #64748b;
  cursor: pointer;
}
.dept-tab-btn--locked:hover {
  background: #f1f5f9;
  border-color: #cbd5e1;
}
.dept-tab-num {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  font-size: 0.78rem;
  font-weight: 800;
  margin-right: 8px;
  flex-shrink: 0;
}
.dept-tab-btn--active .dept-tab-num {
  background: rgba(255, 255, 255, 0.25);
  color: #ffffff;
}
.dept-tab-btn--locked .dept-tab-num {
  background: #e2e8f0;
  color: #64748b;
}
.dept-tab-badge {
  font-size: 0.72rem;
  font-weight: 800;
  padding: 3px 8px;
  border-radius: 9999px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  flex-shrink: 0;
}
.dept-badge-active {
  background: rgba(255, 255, 255, 0.25);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.4);
}
.dept-badge-locked {
  background: #fee2e2;
  color: #991b1b;
  border: 1px solid #fecaca;
}
.dept-alert-toast {
  display: none;
  margin: 12px 0 20px;
  padding: 14px 16px;
  border-radius: 12px;
  background: #fffbeb;
  border: 1.5px solid #fde68a;
  color: #92400e;
  font-size: 0.92rem;
  line-height: 1.5;
  animation: fadeIn 0.25s ease;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: translateY(0); }
}
.dept-overview-card {
  margin-top: 18px;
  background: #f0fdf4;
  border: 1.5px solid #a7f3d0;
  border-radius: 16px;
  padding: 22px;
  box-shadow: 0 4px 14px rgba(6, 78, 59, 0.05);
}
.btn-enter-dept {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #064e3b 0%, #047857 100%);
  color: #ffffff;
  padding: 12px 22px;
  border-radius: 10px;
  font-weight: 750;
  font-size: 0.95rem;
  text-decoration: none;
  transition: transform .15s ease, box-shadow .15s ease;
  box-shadow: 0 4px 12px rgba(6, 78, 59, 0.25);
}
.btn-enter-dept:hover {
  transform: translateY(-1.5px);
  box-shadow: 0 6px 16px rgba(6, 78, 59, 0.35);
}
footer{margin-top:24px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;padding-top:16px;border-top:1px solid #e2e8f0;font-size:0.9rem}
</style>
</head>
<body>
<main>
<div class="nav-breadcrumbs"><a href="/">Academic Hub</a> <span>→</span> <span style="color:#086454">Calicut University FYUGP (Regular)</span></div>
<small style="color:#086454;font-weight:800;letter-spacing:0.08em;text-transform:uppercase">Official Portal · Regular Degree Programmes</small>
<h1>Calicut University FYUGP (Regular)</h1>
<p class="portal-subtitle">Official 4-year undergraduate curriculum directory for Calicut University campus departments. Select a department below:</p>

<!-- 4 Main Department Tabs -->
<div class="dept-tabs-nav" role="tablist" aria-label="Calicut University FYUGP Departments">
  <a href="${fyugpQuizPath}?dept=imads" class="dept-tab-btn dept-tab-btn--active" role="tab" aria-selected="true" id="tab-dept-imads">
    <div style="display:flex;align-items:center;">
      <span class="dept-tab-num">1</span>
      <span class="dept-tab-title">1. IMA DS</span>
    </div>
    <span class="dept-tab-badge dept-badge-active">● Active</span>
  </a>
  <button type="button" class="dept-tab-btn dept-tab-btn--locked" role="tab" aria-selected="false" id="tab-dept-polsci" onclick="handleLockedDept('2. MA Political Science')">
    <div style="display:flex;align-items:center;">
      <span class="dept-tab-num">2</span>
      <span class="dept-tab-title">2. MA Political Science</span>
    </div>
    <span class="dept-tab-badge dept-badge-locked">🔒 Locked</span>
  </button>
  <button type="button" class="dept-tab-btn dept-tab-btn--locked" role="tab" aria-selected="false" id="tab-dept-soc" onclick="handleLockedDept('3. MA Sociology')">
    <div style="display:flex;align-items:center;">
      <span class="dept-tab-num">3</span>
      <span class="dept-tab-title">3. MA Sociology</span>
    </div>
    <span class="dept-tab-badge dept-badge-locked">🔒 Locked</span>
  </button>
  <button type="button" class="dept-tab-btn dept-tab-btn--locked" role="tab" aria-selected="false" id="tab-dept-hist" onclick="handleLockedDept('4. MA History')">
    <div style="display:flex;align-items:center;">
      <span class="dept-tab-num">4</span>
      <span class="dept-tab-title">4. MA History</span>
    </div>
    <span class="dept-tab-badge dept-badge-locked">🔒 Locked</span>
  </button>
</div>

<div id="dept-alert-box" class="dept-alert-toast" role="alert"></div>

<!-- Department Overview Card: 1. IMA DS (No internal questions in public) -->
<div class="dept-overview-card">
  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;flex-wrap:wrap;gap:8px;">
    <h3 style="margin:0;color:#065f46;font-size:1.18rem;font-weight:800;">📁 1. IMA DS (Integrated M.A. Development Studies)</h3>
    <span style="background:#059669;color:#ffffff;font-size:0.75rem;padding:3px 10px;border-radius:9999px;font-weight:800;letter-spacing:0.04em;">● ACTIVE · SEMESTER 1</span>
  </div>
  <p style="color:#166534;font-size:0.92rem;margin:0 0 16px;line-height:1.5;">
    First Semester Five Year Integrated P.G. Programme (2025 Admission). Access semester syllabus, English AEC coursework, internal question banks, and learning modules inside the protected IMA DS department.
  </p>
  <a href="${fyugpQuizPath}?dept=imads" class="btn-enter-dept">
    🔒 Enter 1. IMA DS Department →
  </a>
</div>

<footer>
<a href="/">← Return to Academic Hub Home</a>
<span style="color:#64748b;font-size:0.8rem">Official Academic Hub</span>
</footer>
</main>
<script>
function handleLockedDept(name) {
  var alertBox = document.getElementById('dept-alert-box');
  if (alertBox) {
    alertBox.style.display = 'block';
    alertBox.innerHTML = '<strong>🔒 ' + name + ' is currently locked.</strong><br>The Calicut University FYUGP regular curriculum, syllabus breakdown, internal question banks, and learning modules for this department are being digitized. Please check back soon or explore <strong>1. IMA DS</strong>!';
    alertBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  } else {
    alert('🔒 ' + name + ' is currently locked.\\nCurriculum coming soon for Calicut University FYUGP regular students.');
  }
}
</script>
<script src="/traffic-tracker.js?v=20261105_act2" defer></script>
</body></html>`;

// 2. PROTECTED IMA DS PAGE: Strictly inside IMA DS (Protected / Not in Public)
const imaDsPage = `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>IMA DS Semester 1 | Calicut University FYUGP | Academic Hub</title>
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
.quiz-title{font-weight:800;font-size:1.05rem;color:#065f46;display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap}
.quiz-desc{font-size:0.88rem;color:#166534;line-height:1.45}
.badge-live{background:#059669;color:#fff;font-size:0.75rem;padding:3px 8px;border-radius:6px;font-weight:700}
@keyframes blinkPriority {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.35; transform: scale(0.97); }
}
@keyframes pulseBorder {
  0%, 100% { border-color: #059669; box-shadow: 0 0 0 0 rgba(5, 150, 105, 0.45); }
  50% { border-color: #10b981; box-shadow: 0 0 0 7px rgba(16, 185, 129, 0); }
}
.card-exam-prep {
  border: 2px solid #059669;
  background: #ecfdf5;
  animation: pulseBorder 2s infinite ease-in-out;
  position: relative;
}
.card-exam-prep .badge-blink {
  background: #dc2626;
  color: #ffffff;
  font-size: 0.75rem;
  padding: 3px 8px;
  border-radius: 6px;
  font-weight: 800;
  letter-spacing: 0.04em;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  animation: blinkPriority 1.2s infinite ease-in-out;
}
.card-secondary {
  margin-top: 14px;
  background: #ffffff;
  border: 1.5px solid #cbd5e1;
}
.card-secondary .quiz-title {
  color: #334155;
}
.card-secondary .quiz-desc {
  color: #64748b;
}
.card-secondary:hover {
  background: #f8fafc;
  border-color: #94a3b8;
}
.card-secondary .badge-secondary {
  background: #64748b;
  color: #ffffff;
  font-size: 0.72rem;
  padding: 3px 8px;
  border-radius: 6px;
  font-weight: 700;
}
.card-content-block {
  margin-top: 20px;
  background: #ffffff;
  border: 1.5px solid #d1fae5;
  border-radius: 14px;
  padding: 20px;
  box-shadow: 0 4px 14px rgba(6, 78, 59, 0.05);
}
.card-content-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  border-bottom: 2px solid #ecfdf5;
  padding-bottom: 12px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}
.card-content-header h4 {
  margin: 0;
  font-size: 1.22rem;
  color: #065f46;
  font-weight: 800;
  letter-spacing: -0.01em;
  display: flex;
  align-items: center;
  gap: 8px;
}
.card-content-header .badge-topic {
  background: #059669;
  color: #ffffff;
  font-size: 0.75rem;
  padding: 3px 10px;
  border-radius: 9999px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
.debate-group {
  margin-bottom: 16px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 14px 16px;
  transition: border-color .15s ease, background .15s ease;
}
.debate-group:last-child {
  margin-bottom: 0;
}
.debate-group:hover {
  background: #f0fdf4;
  border-color: #a7f3d0;
}
.debate-category-title {
  font-size: 0.95rem;
  font-weight: 750;
  color: #0f172a;
  margin: 0 0 8px 0;
  display: flex;
  align-items: center;
  gap: 6px;
}
.debate-phrases {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.debate-phrases li {
  font-size: 0.92rem;
  color: #334155;
  line-height: 1.45;
  position: relative;
  padding-left: 20px;
}
.debate-phrases li::before {
  content: "💬";
  position: absolute;
  left: 0;
  top: 1px;
  font-size: 0.78rem;
  opacity: 0.85;
}
.debate-phrases li strong {
  color: #065f46;
}
footer{margin-top:24px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;padding-top:16px;border-top:1px solid #e2e8f0;font-size:0.9rem}
.nav-breadcrumbs{display:flex;align-items:center;gap:6px;font-size:.82rem;font-weight:600;margin-bottom:14px;color:#6b7280;flex-wrap:wrap}
.nav-breadcrumbs a{color:#086454;text-decoration:none}
.nav-breadcrumbs a:hover{text-decoration:underline}
.dept-tabs-nav {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
  margin: 18px 0 24px;
}
.dept-tab-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
  border-radius: 12px;
  border: 1.5px solid #d5e4dc;
  background: #ffffff;
  color: #153236;
  font-family: inherit;
  font-size: 0.92rem;
  font-weight: 750;
  text-align: left;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 6px rgba(16, 44, 49, 0.04);
}
.dept-tab-btn:hover {
  transform: translateY(-1.5px);
  box-shadow: 0 4px 12px rgba(16, 44, 49, 0.08);
}
.dept-tab-btn--active {
  background: linear-gradient(135deg, #064e3b 0%, #047857 100%);
  border-color: #059669;
  color: #ffffff;
  box-shadow: 0 4px 14px rgba(6, 78, 59, 0.25);
}
.dept-tab-btn--locked {
  background: #f8fafc;
  border-color: #e2e8f0;
  color: #64748b;
  cursor: pointer;
}
.dept-tab-num {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  font-size: 0.78rem;
  font-weight: 800;
  margin-right: 8px;
  flex-shrink: 0;
}
.dept-tab-btn--active .dept-tab-num {
  background: rgba(255, 255, 255, 0.25);
  color: #ffffff;
}
.dept-tab-btn--locked .dept-tab-num {
  background: #e2e8f0;
  color: #64748b;
}
.dept-tab-badge {
  font-size: 0.72rem;
  font-weight: 800;
  padding: 3px 8px;
  border-radius: 9999px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  flex-shrink: 0;
}
.dept-badge-active {
  background: rgba(255, 255, 255, 0.25);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.4);
}
.dept-badge-locked {
  background: #fee2e2;
  color: #991b1b;
  border: 1px solid #fecaca;
}
.dept-alert-toast {
  display: none;
  margin: 12px 0 20px;
  padding: 14px 16px;
  border-radius: 12px;
  background: #fffbeb;
  border: 1.5px solid #fde68a;
  color: #92400e;
  font-size: 0.92rem;
  line-height: 1.5;
  animation: fadeIn 0.25s ease;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: translateY(0); }
}
</style></head><body><main>
<div class="nav-breadcrumbs"><a href="/">Academic Hub</a> <span>→</span> <a href="${fyugpQuizPath}">FYUGP</a> <span>→</span> <span style="color:#086454">IMA DS Semester 1</span></div>
<small style="color:#086454;font-weight:800;letter-spacing:0.08em;text-transform:uppercase">Protected Student Section · Semester 1</small>
<h1>Calicut University FYUGP — IMA DS</h1>

<!-- 4 Main Department Tabs -->
<div class="dept-tabs-nav" role="tablist" aria-label="Calicut University FYUGP Departments">
  <a href="${fyugpQuizPath}?dept=imads" class="dept-tab-btn dept-tab-btn--active" role="tab" aria-selected="true" id="tab-dept-imads">
    <div style="display:flex;align-items:center;">
      <span class="dept-tab-num">1</span>
      <span class="dept-tab-title">1. IMA DS</span>
    </div>
    <span class="dept-tab-badge dept-badge-active">● Active</span>
  </a>
  <button type="button" class="dept-tab-btn dept-tab-btn--locked" role="tab" aria-selected="false" id="tab-dept-polsci" onclick="handleLockedDept('2. MA Political Science')">
    <div style="display:flex;align-items:center;">
      <span class="dept-tab-num">2</span>
      <span class="dept-tab-title">2. MA Political Science</span>
    </div>
    <span class="dept-tab-badge dept-badge-locked">🔒 Locked</span>
  </button>
  <button type="button" class="dept-tab-btn dept-tab-btn--locked" role="tab" aria-selected="false" id="tab-dept-soc" onclick="handleLockedDept('3. MA Sociology')">
    <div style="display:flex;align-items:center;">
      <span class="dept-tab-num">3</span>
      <span class="dept-tab-title">3. MA Sociology</span>
    </div>
    <span class="dept-tab-badge dept-badge-locked">🔒 Locked</span>
  </button>
  <button type="button" class="dept-tab-btn dept-tab-btn--locked" role="tab" aria-selected="false" id="tab-dept-hist" onclick="handleLockedDept('4. MA History')">
    <div style="display:flex;align-items:center;">
      <span class="dept-tab-num">4</span>
      <span class="dept-tab-title">4. MA History</span>
    </div>
    <span class="dept-tab-badge dept-badge-locked">🔒 Locked</span>
  </button>
</div>

<div id="dept-alert-box" class="dept-alert-toast" role="alert"></div>

<!-- Protected Modules (strictly inside IMA DS) -->
<details open>
<summary><span>📁 <strong>IMA DS Semester 1</strong> (Integrated MA Development Studies)</span></summary>
<section aria-labelledby="subjects">
<h2 id="subjects">Subjects &amp; Learning Modules</h2>
<h3>📘 English — Ability Enhancement Course</h3>
<a class="quiz-card card-exam-prep" href="${fyugpQuizPath}?quiz=25">
  <div class="quiz-title">
    <span>🎯 25 idioms test for internal exam prep</span>
    <span class="badge-blink">🔴 HIGH PRIORITY · TEST NOW →</span>
  </div>
  <div class="quiz-desc">Focus preparation for internal exams using the first 25 essential idioms: interactive practice, fill-in-the-blank, and 5 matching sets.</div>
</a>

<a class="quiz-card card-secondary" href="${fyugpQuizPath}?quiz=idioms">
  <div class="quiz-title">
    <span>📚 Full Idioms Test &amp; Mastery (All 59 Idioms)</span>
    <span class="badge-secondary">FULL SYLLABUS →</span>
  </div>
  <div class="quiz-desc">Complete syllabus test covering all 59 idioms with detailed past/present/future context examples and comprehensive matching sets.</div>
</a>

<div class="card-content-block" id="debate-card">
  <div class="card-content-header">
    <h4>🎙️ DEBATE</h4>
    <span class="badge-topic">Speaking &amp; Argumentation Skills</span>
  </div>

  <div class="debate-group">
    <div class="debate-category-title">🏁 Opening and Stating the Topic</div>
    <ul class="debate-phrases">
      <li>"The motion for debate today is..."</li>
      <li>"Today's topic of debate is..."</li>
      <li>"The first point I would like to raise is..."</li>
      <li>"Our position is the following..."</li>
    </ul>
  </div>

  <div class="debate-group">
    <div class="debate-category-title">📊 Presenting Main Arguments</div>
    <ul class="debate-phrases">
      <li>"The most important argument is..."</li>
      <li>"There is clear evidence that..."</li>
      <li>"Our analysis demonstrated why..."</li>
      <li>"For instance..." / "To illustrate this point..."</li>
    </ul>
  </div>

  <div class="debate-group">
    <div class="debate-category-title">➕ Adding Points</div>
    <ul class="debate-phrases">
      <li>"Furthermore..." / "Moreover..." / "In addition..."</li>
      <li>"Not only that, but also..."</li>
    </ul>
  </div>

  <div class="debate-group">
    <div class="debate-category-title">👂 Acknowledging and Listening</div>
    <ul class="debate-phrases">
      <li>"I see your point, but I think..."</li>
      <li>"Yes, I understand, but my opinion is that..."</li>
      <li>"That's a good point, but here's another way to look at it..."</li>
      <li>"I'm afraid I can't quite agree with your point."</li>
    </ul>
  </div>

  <div class="debate-group">
    <div class="debate-category-title">🤝 Expressing Agreement</div>
    <ul class="debate-phrases">
      <li>"I agree completely."</li>
      <li>"I couldn't agree with you more."</li>
      <li>"That's just how I see it."</li>
    </ul>
  </div>

  <div class="debate-group">
    <div class="debate-category-title">🛡️ Expressing Disagreement (Polite &amp; Diplomatic)</div>
    <ul class="debate-phrases">
      <li>"I hear what you're saying, although I have a different opinion."</li>
      <li>"I understand where you're coming from, but..."</li>
      <li>"That's not a convincing argument."</li>
      <li>"I must disagree because the facts suggest otherwise."</li>
    </ul>
  </div>

  <div class="debate-group">
    <div class="debate-category-title">🎯 Concluding and Summarizing</div>
    <ul class="debate-phrases">
      <li>"To sum up, here are the main points..."</li>
      <li>"It all boils down to..."</li>
      <li>"As a final word..."</li>
    </ul>
  </div>
</div>
</section>
</details>
<footer>
<a href="${fyugpQuizPath}">← Return to FYUGP Department Directory</a>
<span style="color:#64748b;font-size:0.8rem">Authorized Student Access Active</span>
</footer>
</main>
<script>
function handleLockedDept(name) {
  var alertBox = document.getElementById('dept-alert-box');
  if (alertBox) {
    alertBox.style.display = 'block';
    alertBox.innerHTML = '<strong>🔒 ' + name + ' is currently locked.</strong><br>The Calicut University FYUGP regular curriculum, syllabus breakdown, internal question banks, and learning modules for this department are being digitized. Please check back soon or explore <strong>1. IMA DS</strong>!';
    alertBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  } else {
    alert('🔒 ' + name + ' is currently locked.\\nCurriculum coming soon for Calicut University FYUGP regular students.');
  }
}
</script>
<script src="/traffic-tracker.js?v=20261105_act2" defer></script>
</body></html>`;

export async function handleFyugpQuiz(request, env, equals) {
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

  const unlockFormAction = url.pathname + (url.search || '?dept=imads');

  // Handle password unlock submission (POST)
  if (request.method === 'POST') {
    const origin = request.headers.get('Origin');
    if (origin && !isOriginAllowed(origin)) return new Response(null, {status:403});
    if (!request.headers.get('Content-Type')?.startsWith('application/x-www-form-urlencoded')) {
      return new Response(null, {status:415});
    }
    const reader = request.body?.getReader();
    if (!reader) return new Response(null, {status:400});
    let size = 0;
    let body = '';
    const decoder = new TextDecoder();
    for (;;) {
      const {done, value} = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > 512) {
        await reader.cancel();
        return new Response(null, {status:413});
      }
      body += decoder.decode(value, {stream:true});
    }
    const password = new URLSearchParams(body + decoder.decode()).get('password');
    if (!equals(password, targetPassword)) {
      const renderedUnlock = renderUnlockPage(unlockFormAction, '<p role="alert">Incorrect password. Try entering 1234.</p>');
      return new Response(renderedUnlock, {
        status: 403,
        headers: {
          'Content-Type':'text/html; charset=utf-8',
          'Cache-Control':'private, no-store',
          'X-Robots-Tag':'noindex, nofollow'
        }
      });
    }
    const expires = now + sessionSeconds;
    const proof = await sessionProof(signingSecret, expires);
    const q = url.searchParams.get('quiz');
    const redirectTarget = (q === 'idioms' || q === '25' || q === 'internal-25') 
      ? (fyugpQuizPath + '?quiz=' + q) 
      : (fyugpQuizPath + '?dept=imads');
    return new Response(null, {
      status: 303,
      headers: {
        'Location': redirectTarget,
        'Set-Cookie': `${cookieName}=${expires}.${proof}; Max-Age=${sessionSeconds}; Path=/; Secure; HttpOnly; SameSite=Lax`
      }
    });
  }

  if (request.method !== 'GET' && request.method !== 'HEAD') {
    return new Response(null, {status:405, headers: {'Allow':'GET, HEAD, POST'}});
  }

  // Check if student is accessing IMA DS or internal quiz
  const isImaDs = url.searchParams.get('dept') === 'imads' || url.searchParams.has('quiz');

  if (isImaDs) {
    const protectedHeaders = new Headers({
      'Cache-Control':'private, no-store',
      'Vary':'Cookie',
      'X-Robots-Tag':'noindex, nofollow',
      'X-Content-Type-Options':'nosniff',
      'Content-Type':'text/html; charset=utf-8'
    });

    const session = (request.headers.get('Cookie') || '').match(/(?:^|;\s*)__Host-fyugp_quiz=(\d{1,12})\.([a-f0-9]{64})(?:;|$)/);
    if (!session || Number(session[1]) <= now || !equals(session[2], await sessionProof(signingSecret, session[1]))) {
      const renderedUnlock = renderUnlockPage(unlockFormAction);
      return new Response(request.method === 'HEAD' ? null : renderedUnlock, {headers: protectedHeaders});
    }

    if (request.method === 'HEAD') return new Response(null, {headers: protectedHeaders});

    const quizParam = url.searchParams.get('quiz');
    if (quizParam === 'idioms' || quizParam === '25' || quizParam === 'internal-25') {
      return new Response(quizAppHtml, {headers: protectedHeaders});
    }
    return new Response(imaDsPage, {headers: protectedHeaders});
  }

  // Public Landing Page: Calicut University FYUGP Regular (No internal exam questions shown in public)
  const publicHeaders = new Headers({
    'Cache-Control':'public, max-age=60, s-maxage=300',
    'X-Robots-Tag':'index, follow',
    'X-Content-Type-Options':'nosniff',
    'Content-Type':'text/html; charset=utf-8'
  });
  if (request.method === 'HEAD') return new Response(null, {headers: publicHeaders});
  return new Response(publicPortalPage, {headers: publicHeaders});
}
