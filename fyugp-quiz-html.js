const quizAppHtml = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="#102c31">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<title>Idioms Learning | English Ability Enhancement</title>
<style>
:root {
  --font-sans: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  --font-display: 'Outfit', 'Plus Jakarta Sans', system-ui, sans-serif;
  --bg-hero: linear-gradient(135deg, #064e3b 0%, #065f46 45%, #047857 100%);
  --surface: #ffffff;
  --surface-alt: #f8fafc;
  --ink-primary: #0f172a;
  --ink-secondary: #334155;
  --ink-muted: #64748b;
  --emerald-main: #059669;
  --emerald-dark: #065f46;
  --emerald-light: #ecfdf5;
  --emerald-border: #a7f3d0;
  --border-subtle: #e2e8f0;
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
* { box-sizing: border-box; margin: 0; padding: 0; }
body {
  font-family: var(--font-sans);
  color: var(--ink-primary);
  background-color: #f1f5f9;
  line-height: 1.6;
  min-height: 100vh;
}
button, select { font: inherit; color: inherit; }
button { cursor: pointer; }
button:disabled { cursor: not-allowed; }
button:focus-visible, select:focus-visible { outline: 3px solid #3b82f6; outline-offset: 2px; }

.hero {
  background: var(--bg-hero);
  color: #ffffff;
  padding: clamp(32px, 6vw, 56px) 16px clamp(52px, 8vw, 76px);
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(6, 78, 59, 0.25);
}
.hero::before {
  content: "";
  position: absolute;
  top: -40%;
  right: -10%;
  width: 520px;
  height: 520px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(52, 211, 153, 0.25) 0%, transparent 70%);
  pointer-events: none;
}
.hero::after {
  content: "";
  position: absolute;
  bottom: -30%;
  left: -10%;
  width: 440px;
  height: 440px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(20, 184, 166, 0.2) 0%, transparent 70%);
  pointer-events: none;
}
.wrap {
  width: min(100% - 32px, 860px);
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.nav-breadcrumbs {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 18px;
  color: #a7f3d0;
  flex-wrap: wrap;
}
.nav-breadcrumbs a {
  color: #d1fae5;
  text-decoration: none;
  transition: color 0.15s ease;
}
.nav-breadcrumbs a:hover {
  color: #ffffff;
  text-decoration: underline;
}
.nav-breadcrumbs span { opacity: 0.75; }

.course-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: #ecfdf5;
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  font-weight: 800;
  text-transform: uppercase;
  padding: 4px 12px;
  border-radius: 20px;
  margin-bottom: 12px;
}
.hero h1 {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(2.3rem, 6vw, 3.6rem);
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin-bottom: 10px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.18);
}
.hero p {
  color: #d1fae5;
  font-size: clamp(0.96rem, 2vw, 1.12rem);
  max-width: 64ch;
  line-height: 1.5;
}

main {
  margin-top: -38px !important;
  padding-bottom: 50px;
}

.tabs {
  display: flex;
  gap: 6px;
  padding: 6px;
  background: #ffffff;
  border: 1px solid var(--border-subtle);
  border-radius: 16px;
  margin-bottom: 20px;
  box-shadow: var(--shadow-lg);
}
.tabs button {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 10px;
  border: 0;
  border-radius: 12px;
  background: transparent;
  color: var(--ink-secondary);
  font-weight: 700;
  font-size: clamp(0.85rem, 2.2vw, 0.98rem);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.tabs button:hover:not([aria-pressed="true"]) {
  background: #f1f5f9;
  color: var(--ink-primary);
}
.tabs button[aria-pressed="true"] {
  background: linear-gradient(135deg, #059669 0%, #047857 100%);
  color: #ffffff;
  box-shadow: 0 4px 12px rgba(5, 150, 105, 0.35);
}
.tabs button .tab-count {
  font-size: 0.76rem;
  padding: 2px 8px;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.08);
}
.tabs button[aria-pressed="true"] .tab-count {
  background: rgba(255, 255, 255, 0.25);
  color: #ffffff;
}

.card {
  padding: clamp(22px, 5vw, 40px);
  background: #ffffff;
  border: 1px solid var(--border-subtle);
  border-radius: 24px;
  box-shadow: var(--shadow-xl);
  transition: transform 0.2s ease;
}

.status {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--emerald-dark);
}
.status-pill {
  background: var(--emerald-light);
  color: var(--emerald-dark);
  border: 1px solid var(--emerald-border);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.82rem;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.status-pill::before {
  content: "";
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #10b981;
}

progress {
  display: block;
  width: 100%;
  height: 9px;
  margin: 12px 0 24px;
  appearance: none;
  border: 0;
  background: #e2e8f0;
  border-radius: 20px;
  overflow: hidden;
}
progress::-webkit-progress-bar { background: #e2e8f0; }
progress::-webkit-progress-value {
  background: linear-gradient(90deg, #10b981 0%, #059669 100%);
  border-radius: 20px;
}
progress::-moz-progress-bar { background: #059669; }

h2 {
  font-family: var(--font-display);
  margin: 6px 0 14px;
  font-size: clamp(1.4rem, 4vw, 1.95rem);
  font-weight: 700;
  line-height: 1.3;
  color: #0f172a;
  letter-spacing: -0.02em;
}
h2:focus { outline: none; }
.prompt {
  margin: 0 0 20px;
  color: var(--ink-secondary);
  font-size: 1.02rem;
  font-weight: 500;
}

.choices {
  display: grid;
  gap: 10px;
}
.choice {
  display: flex;
  text-align: left;
  align-items: center;
  gap: 14px;
  min-height: 56px;
  padding: 12px 18px;
  border: 1.5px solid #cbd5e1;
  border-radius: 14px;
  background: #ffffff;
  color: var(--ink-primary);
  font-size: 1.02rem;
  font-weight: 600;
  box-shadow: var(--shadow-sm);
  transition: all 0.18s ease;
}
.choice:not(:disabled):hover {
  background: #f8fafc;
  border-color: #059669;
  transform: translateY(-1.5px);
  box-shadow: 0 4px 12px rgba(5, 150, 105, 0.12);
}
.letter {
  display: grid;
  place-items: center;
  min-width: 32px;
  height: 32px;
  border-radius: 10px;
  background: #f1f5f9;
  color: #475569;
  font-size: 0.88rem;
  font-weight: 800;
  transition: all 0.18s ease;
}
.choice:not(:disabled):hover .letter {
  background: #d1fae5;
  color: #065f46;
}
.choice.good {
  background: #ecfdf5 !important;
  border-color: #10b981 !important;
  color: #065f46 !important;
  box-shadow: 0 4px 14px rgba(16, 185, 129, 0.2) !important;
}
.choice.good .letter {
  background: #059669 !important;
  color: #ffffff !important;
}
.choice.bad {
  background: #fef2f2 !important;
  border-color: #ef4444 !important;
  color: #991b1b !important;
  box-shadow: 0 4px 14px rgba(239, 68, 68, 0.18) !important;
}
.choice.bad .letter {
  background: #dc2626 !important;
  color: #ffffff !important;
}
.mark {
  margin-left: auto;
  font-weight: 800;
  font-size: 1.25rem;
}

.feedback:not(:empty) { margin-top: 22px; }
.message {
  border-radius: 16px;
  padding: 18px 20px;
  border: 1.5px solid transparent;
  animation: fadeIn 0.25s ease;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
}
.message.good {
  background: linear-gradient(135deg, #ecfdf5 0%, #f0fdf4 100%);
  border-color: #a7f3d0;
  color: #065f46;
}
.message.bad {
  background: linear-gradient(135deg, #fef2f2 0%, #fff1f2 100%);
  border-color: #fecaca;
  color: #991b1b;
}
.message strong {
  display: block;
  font-size: 1.1rem;
  font-weight: 800;
  margin-bottom: 6px;
}
.message p {
  font-size: 0.98rem;
  line-height: 1.55;
  margin: 4px 0;
}

.tense-examples {
  margin: 14px 0 0;
  padding: 14px 0 0;
  list-style: none;
  border-top: 1.5px dashed rgba(6, 95, 70, 0.2);
}
.message.bad .tense-examples {
  border-top-color: rgba(153, 27, 27, 0.2);
}
.tense-examples li {
  font-size: 0.94rem;
  line-height: 1.5;
  margin-top: 6px;
}
.tense-examples strong {
  display: inline-block;
  min-width: 4.6em;
  color: #047857;
  font-weight: 800;
}
.message.bad .tense-examples strong { color: #b91c1c; }

.match {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  align-items: center;
  gap: 12px 18px;
  padding: 14px 0;
  border-bottom: 1px solid var(--border-subtle);
}
.match label {
  font-size: 1.05rem;
  font-weight: 700;
  color: #1e293b;
}
select {
  width: 100%;
  min-width: 0;
  min-height: 48px;
  border: 1.5px solid #cbd5e1;
  border-radius: 12px;
  background: #ffffff;
  padding: 8px 12px;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--ink-primary);
  box-shadow: var(--shadow-sm);
  transition: border-color 0.15s ease;
}
select:focus { border-color: #059669; }
.match-feedback {
  grid-column: 1 / -1;
  padding: 12px 16px;
  border-radius: 12px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  font-size: 0.92rem;
  color: #334155;
}

.actions {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: center;
  margin-top: 26px;
  flex-wrap: wrap;
}
.primary, .secondary {
  min-height: 48px;
  padding: 10px 22px;
  border-radius: 12px;
  font-weight: 700;
  font-size: 0.98rem;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.18s ease;
}
.primary {
  background: linear-gradient(135deg, #059669 0%, #047857 100%);
  color: #ffffff;
  border: 0;
  box-shadow: 0 4px 14px rgba(5, 150, 105, 0.35);
}
.primary:not(:disabled):hover {
  background: linear-gradient(135deg, #047857 0%, #064e3b 100%);
  transform: translateY(-1.5px);
  box-shadow: 0 6px 18px rgba(5, 150, 105, 0.45);
}
.primary:disabled {
  background: #e2e8f0;
  color: #94a3b8;
  box-shadow: none;
}
.secondary {
  background: #ffffff;
  border: 1.5px solid #cbd5e1;
  color: var(--ink-secondary);
}
.secondary:not(:disabled):hover {
  background: #f8fafc;
  border-color: #94a3b8;
  color: var(--ink-primary);
}
.secondary:disabled { opacity: 0.45; }

.review {
  padding-left: 24px;
  margin: 18px 0;
}
.review li {
  margin-bottom: 16px;
  font-size: 0.98rem;
  line-height: 1.55;
}
.review li strong {
  color: #047857;
  font-size: 1.05rem;
}

.footer {
  text-align: center;
  margin-top: 28px;
  font-size: 0.85rem;
  color: #64748b;
  font-weight: 500;
}

@media (max-width: 600px) {
  .match { grid-template-columns: 1fr; gap: 8px; }
  .tabs { flex-direction: column; gap: 4px; }
  .tabs button { padding: 10px; }
  .actions { flex-direction: column-reverse; }
  .actions button { width: 100%; justify-content: center; }
}
</style>
</head>
<body>
<header class="hero"><div class="wrap">
<div class="nav-breadcrumbs"><a href="/">Academic Hub</a> <span>→</span> <a href="/calicut-university-fyugp">FYUGP</a> <span>→</span> <span>IMA DS Semester 1</span> <span>→</span> <span>English</span> <span>→</span> <span id="hero-crumb" style="color:#fff">Idioms Learning</span></div>
<div class="course" id="hero-course">Listening &amp; Speaking · English AEC</div><h1 id="hero-title">Idioms Learning</h1><p id="hero-desc">Learn what common idiomatic expressions mean and practise using them in context.</p></div></header>
<main class="wrap">
<nav class="tabs" aria-label="Learning modes">
<button type="button" data-mode="practice" aria-pressed="true">🎯 Idiom Practice <span class="tab-count" id="count-practice">59 Qs</span></button>
<button type="button" data-mode="context" aria-pressed="false">✍️ Fill in the Blank <span class="tab-count" id="count-context">59 Qs</span></button>
<button type="button" data-mode="match" aria-pressed="false">🧩 Matching Sets <span class="tab-count" id="count-match">12 Sets</span></button>
</nav>
<section class="card" id="card" aria-label="Quiz"></section>
<p class="footer" id="footer-text">Idioms Learning Module · English Ability Enhancement Course · Calicut University FYUGP</p>
</main>
<script>
const idioms = \`
Scrape the barrel|Resort to the least desirable options|After the strongest applicants declined, the team was scraping the barrel.
Burn your boats or bridges|Make it impossible or difficult to go back|Deleting the only backup burned their bridges with the old system.
Break new ground|Do something innovative or unprecedented|The team broke new ground with a design nobody had tried before.
Sell like hot cakes|Sell very quickly|The concert tickets sold like hot cakes and were gone in minutes.
Run around in circles|Make a lot of effort without making progress|We kept discussing the same issue without reaching a decision and ended up running around in circles.
Have an ace up your sleeve|Have a useful secret advantage in reserve|She had an ace up her sleeve: a backup plan nobody else knew about.
A black sheep|A member seen as a disgrace or an outsider by a group|His relatives treated him as the black sheep after he repeatedly stole from the family business.
Down for the count|Be defeated or unable to continue|The runner was down for the count after injuring her ankle and had to leave the race.
Draw the line|Set a limit on what is acceptable|I can help with homework, but I draw the line at doing it for you.
Up a creek without a paddle|Be in trouble with no easy way out|When my phone died and I realised I had no map, I was up a creek without a paddle.
Keep an ear to the ground|Stay alert for news or developments|Keep an ear to the ground for any news about exam dates.
Eat like a horse|Eat a large amount|After training, Ravi ate like a horse and finished three helpings.
A snowball effect|A process that grows as each change triggers another|Late fees increased the debt, leading to even more late fees in a snowball effect.
A chip off the old block|Someone who resembles a parent in character or habits|Maya loves fixing radios just like her father. She is a chip off the old block.
Fair and square|Honestly and according to the rules|Asha won fair and square by following the same rules as everyone else.
A blessing in disguise|Something that seems bad at first but turns out well|Missing the bus was a blessing in disguise because I met an old friend while waiting for the next one.
A dime a dozen|Very common and easy to find|Basic phone cases are a dime a dozen at this market.
Bite the bullet|Face a difficult or unpleasant situation with determination|He bit the bullet and made the difficult call he had been putting off.
Call it a day|Stop working for now|We finished the last task and decided to call it a day.
Cut somebody some slack|Be less critical or demanding of someone|It's her first day, so cut her some slack if she needs extra time.
Cut corners|Skip important steps to save time, effort or money|They cut corners by skipping the safety checks to finish early.
Go back to the drawing board|Start planning again after an idea fails|The prototype failed every test, so we went back to the drawing board.
Hang in there|Keep going through a difficult situation|The course is hard at first, but hang in there and keep practising.
It's not rocket science|Something is fairly easy to understand or do|To join the call, just tap the link. It's not rocket science.
Let someone off the hook|Release someone from an obligation, blame or punishment|The teacher let him off the hook and excused him from the extra assignment.
Miss the boat|Lose an opportunity by acting too late|I missed the boat when I applied after the deadline.
No pain, no gain|Progress often requires hard work or discomfort|Learning to play well took months of daily practice. No pain, no gain.
Pull yourself together|Regain control of your emotions and composure|After the shock, she took a breath and pulled herself together before speaking.
The last straw|The final problem that makes a situation intolerable|The third cancelled lesson was the last straw, so I changed tutors.
The best of both worlds|Enjoy the advantages of two different situations|Working from home two days a week gives me quiet focus and time with colleagues. It's the best of both worlds.
Add insult to injury|Make an already unpleasant situation worse|They lost my bag and, to add insult to injury, charged me to file a claim.
A penny for your thoughts|A friendly way to ask what someone is thinking|You've gone quiet. A penny for your thoughts?
A storm in a teacup|A lot of fuss about a minor issue|The long argument over the colour of one poster was a storm in a teacup.
Bark up the wrong tree|Follow a mistaken lead or blame the wrong person|If you think I took your book, you're barking up the wrong tree. I was away all day.
Bite off more than you can chew|Take on more than you can handle|By joining five clubs during exam week, I bit off more than I could chew.
Break the ice|Help people relax and start talking|A quick game broke the ice at the first meeting.
Compare apples and oranges|Compare things that are too different for a fair comparison|Judging a city bus and a bicycle by the same standards is like comparing apples and oranges.
Cost an arm and a leg|Be very expensive|Replacing the whole roof will cost an arm and a leg.
At the drop of a hat|Immediately and without hesitation|She will come and help at the drop of a hat.
Count your chickens before they hatch|Assume a good outcome before it is certain|Spending the prize money before the winner is announced is counting your chickens before they hatch.
Don't put all your eggs in one basket|Avoid risking everything on a single option|Apply to several colleges. Don't put all your eggs in one basket.
Every cloud has a silver lining|Even a difficult situation can have a positive side|The rain cancelled the match, but it gave us time to rest. Every cloud has a silver lining.
Get a taste of your own medicine|Experience the same unpleasant treatment you gave others|After teasing others all week, he got a taste of his own medicine when they teased him back.
Give someone the cold shoulder|Deliberately ignore or snub someone|She gave him the cold shoulder by refusing to greet him or speak to him.
Go on a wild goose chase|Go on a fruitless search|The address was fake, so looking for the shop sent us on a wild goose chase.
Let the cat out of the bag|Reveal a secret, often accidentally|I let the cat out of the bag when I mentioned the surprise party to the guest of honour.
Live and learn|Learn something from experience, often from a mistake|I used the wrong paint and had to start again. Live and learn.
Look before you leap|Think about the consequences before acting|Read the terms before you sign. Look before you leap.
On thin ice|In a risky position where another mistake could lead to trouble|After two warnings, he was on thin ice and could lose his job if he was late again.
Once in a blue moon|Very rarely|We live far apart and only meet once in a blue moon.
Play devil's advocate|Argue an opposing view to test an idea|I'll play devil's advocate and point out what could go wrong with the plan.
Put something on ice|Temporarily put something on hold|We put the renovation on ice until we could afford it.
Spill the beans|Reveal secret information|Someone spilled the beans about the surprise gift before her birthday.
Take a rain check|Decline an invitation now and suggest doing it another time|I can't make dinner tonight. Can I take a rain check for next week?
Take it with a grain of salt|Treat a claim with some doubt|I took the rumour with a grain of salt until there was proof.
Beat around the bush|Avoid talking directly about the main issue|Stop beating around the bush and tell me why you missed the meeting.
Hard to swallow|Difficult to believe or accept|His excuse was hard to swallow because the details kept changing.
Dig around|Search for information|The reporters dug around in old records to see what had happened.
A bright spark|A clever or lively person|She's a bright spark who solves tricky problems quickly.
\`.trim().split("\\n").map(line => line.split("|"));
const tenseExamples = [
  ["The team scraped the barrel to fill the last slot.", "The team scrapes the barrel when its top candidates turn down the job.", "The team will have to scrape the barrel if nobody else applies."],
  ["He burned his bridges when he insulted his former boss.", "She burns her bridges whenever she quits without notice.", "You'll burn your bridges if you send that angry email."],
  ["The researchers broke new ground with their discovery.", "This lab breaks new ground in battery design.", "The team hopes its next invention will break new ground."],
  ["The tickets sold like hot cakes yesterday.", "These snacks sell like hot cakes at the school fair.", "The new phone will sell like hot cakes when it launches."],
  ["We ran around in circles for hours without finding a solution.", "We run around in circles whenever we argue about the same problem.", "We'll run around in circles if we keep ignoring the cause."],
  ["She had an ace up her sleeve during the debate.", "She has an ace up her sleeve for today's match.", "He'll have an ace up his sleeve if the first plan fails."],
  ["His relatives treated him as the black sheep of the family.", "Her family sees her as the black sheep because she rejects their traditions.", "If he breaks another promise, his relatives will see him as the black sheep."],
  ["The boxer was down for the count after that punch.", "The boxer is down for the count.", "One more hard hit and the boxer will be down for the count."],
  ["I drew the line at lending him more money.", "I draw the line at sharing my password.", "I'll draw the line if they ask me to work every weekend."],
  ["We were up a creek without a paddle when the car broke down.", "I'm up a creek without a paddle now that I've lost my wallet.", "We'll be up a creek without a paddle if our only ride cancels."],
  ["I kept an ear to the ground for news about the results.", "She keeps an ear to the ground for job openings.", "I'll keep an ear to the ground for news about the timetable."],
  ["He ate like a horse after the match.", "He eats like a horse after training.", "He'll eat like a horse after tomorrow's long run."],
  ["One missed payment caused a snowball effect.", "Every new delay makes the snowball effect worse.", "A further delay will create a snowball effect."],
  ["Everyone said Maya was a chip off the old block when she repaired her first radio.", "Maya is a chip off the old block, always fixing things like her father.", "If Maya keeps fixing things like her father, everyone will call her a chip off the old block."],
  ["Asha won the match fair and square.", "Asha always plays fair and square.", "If Asha wins tomorrow, she'll win fair and square."],
  ["Missing that flight was a blessing in disguise.", "Working from home is a blessing in disguise because I get more time with my family.", "This delay will be a blessing in disguise if it gives us time to fix the error."],
  ["Cheap umbrellas were a dime a dozen at the old market.", "Basic phone cases are a dime a dozen here.", "Once production expands, these chargers will be a dime a dozen."],
  ["She bit the bullet and told her teacher about the mistake.", "He usually bites the bullet and admits when he's wrong.", "I'll bite the bullet and make the difficult call tomorrow."],
  ["We called it a day after finishing the report.", "We usually call it a day at six.", "We'll call it a day once we pack the last box."],
  ["The coach cut me some slack when I was new.", "My coach cuts me some slack when I'm recovering from an injury.", "I'll cut you some slack while you learn the rules."],
  ["The builders cut corners by skipping an inspection.", "This contractor cuts corners to finish jobs quickly.", "If we rush the repairs, someone will be tempted to cut corners."],
  ["We went back to the drawing board when the first design failed.", "The team goes back to the drawing board whenever a design fails its tests.", "We'll go back to the drawing board if the next test fails."],
  ["She hung in there even when the training got tough.", "He hangs in there when progress is slow.", "I'll hang in there until the exams are over."],
  ["Setting up the printer wasn't rocket science.", "Changing this setting isn't rocket science.", "Once you've seen the demo, setting it up won't be rocket science."],
  ["The teacher let me off the hook for forgetting the worksheet.", "My coach rarely lets anyone off the hook for missing practice.", "They'll let us off the hook if we explain what happened."],
  ["I missed the boat by applying after the deadline.", "He often misses the boat because he waits too long.", "You'll miss the boat if you don't apply today."],
  ["My coach said, “No pain, no gain,” after a tough session.", "I remind myself, “No pain, no gain,” on hard training days.", "When practice gets tough tomorrow, I'll remind myself, “No pain, no gain.”"],
  ["She pulled herself together before the interview.", "He pulls himself together by taking a few deep breaths.", "I'll pull myself together before I go on stage."],
  ["The third cancelled lesson was the last straw.", "This latest excuse is the last straw.", "One more missed deadline will be the last straw."],
  ["Living near town and working from home gave her the best of both worlds.", "Living near the park gives me the best of both worlds: fresh air and quick access to town.", "Moving to that neighbourhood will give us the best of both worlds."],
  ["They cancelled my booking and, to add insult to injury, kept the deposit.", "The printer wastes paper and, to add insult to injury, jams every morning.", "If they charge a late fee for their own mistake, that will add insult to injury."],
  ["When I went quiet, she said, “A penny for your thoughts?”", "You look deep in thought. A penny for your thoughts?", "If he goes quiet tomorrow, I'll ask, “A penny for your thoughts?”"],
  ["The argument over the poster colour was a storm in a teacup.", "This fuss over the seating plan is a storm in a teacup.", "Once everyone sees how small the issue is, they'll call it a storm in a teacup."],
  ["The detectives barked up the wrong tree when they blamed the driver.", "You're barking up the wrong tree if you think I took your pen.", "You'll be barking up the wrong tree if you keep looking for the key in my bag."],
  ["I bit off more than I could chew when I joined five clubs.", "She often bites off more than she can chew by accepting every task.", "You'll bite off more than you can chew if you take on another project."],
  ["A quick game broke the ice at yesterday's meeting.", "Our teacher breaks the ice with a simple game.", "I'll tell a funny story to break the ice tomorrow."],
  ["We compared apples and oranges when we judged bikes and buses by the same standards.", "Comparing this small café with a hotel buffet is like comparing apples and oranges.", "We'll be comparing apples and oranges if we judge both services on price alone."],
  ["The repairs cost an arm and a leg last year.", "That designer bag costs an arm and a leg.", "Replacing the roof will cost an arm and a leg."],
  ["She left at the drop of a hat when we called.", "He helps his friends at the drop of a hat.", "She'll come at the drop of a hat if you need her."],
  ["I counted my chickens before they hatched when I spent the prize money before the result.", "He counts his chickens before they hatch whenever he spends money he hasn't earned yet.", "You'll be counting your chickens before they hatch if you book a trip before getting leave."],
  ["I spread my savings across several accounts because I didn't want to put all my eggs in one basket.", "She avoids putting all her eggs in one basket by applying to several colleges.", "I'll apply for several jobs so I won't put all my eggs in one basket."],
  ["The match was cancelled, but it gave us a rest. I thought, “Every cloud has a silver lining.”", "When a plan falls through, I remind myself that every cloud has a silver lining.", "If tomorrow's picnic gets rained out, I'll remember that every cloud has a silver lining and enjoy a quiet day at home."],
  ["He got a taste of his own medicine when his friends teased him back.", "He gets a taste of his own medicine whenever his friends beat him at his own game.", "She'll get a taste of her own medicine when her classmates stop sharing their notes with her."],
  ["She gave me the cold shoulder at yesterday's meeting.", "He gives me the cold shoulder whenever I say hello.", "They'll give him the cold shoulder if he keeps ignoring their messages."],
  ["We went on a wild goose chase looking for a shop that had closed years ago.", "This outdated map keeps sending tourists on a wild goose chase.", "We'll go on a wild goose chase if we follow that fake address."],
  ["She let the cat out of the bag about yesterday's surprise party.", "He often lets the cat out of the bag when he gets excited.", "Someone will let the cat out of the bag if we tell the whole class."],
  ["I used the wrong paint yesterday. Live and learn!", "Whenever I make a mistake, I tell myself, “Live and learn.”", "If my first attempt fails tomorrow, I'll say, “Live and learn,” and try again."],
  ["I rushed into the deal and later wished I'd looked before I leapt.", "She looks before she leaps by reading every agreement carefully.", "I'll look before I leap and check the contract before signing tomorrow."],
  ["He was on thin ice after his second warning.", "You're on thin ice after missing two deadlines.", "You'll be on thin ice if you arrive late again."],
  ["When we lived far apart, we met once in a blue moon.", "We meet once in a blue moon these days.", "Once she moves abroad, we'll probably see her once in a blue moon."],
  ["Maya played devil's advocate during yesterday's discussion.", "He often plays devil's advocate to test our ideas.", "I'll play devil's advocate at tomorrow's meeting."],
  ["We put the renovation on ice last month.", "The committee puts new projects on ice when funds run low.", "We'll put the launch on ice until the issue is fixed."],
  ["He spilled the beans about the surprise gift yesterday.", "She sometimes spills the beans when she gets excited.", "I'm afraid he'll spill the beans before the party."],
  ["I took a rain check on dinner last Friday.", "Ravi often takes a rain check when work runs late.", "I'll take a rain check on Saturday's game if my knee still hurts."],
  ["I took his claim with a grain of salt yesterday.", "She takes online rumours with a grain of salt.", "I'll take that prediction with a grain of salt until I see the evidence."],
  ["He beat around the bush before admitting what happened.", "She beats around the bush when the topic makes her uncomfortable.", "He'll beat around the bush if you ask him who broke the vase."],
  ["His excuse was hard to swallow.", "His explanation is hard to swallow.", "That story will be hard to swallow without evidence."],
  ["The reporters dug around in old records last week.", "She digs around in the archives whenever she needs more facts.", "I'll dig around in my old emails for the receipt."],
  ["She was a bright spark in our class last year.", "He's a bright spark who solves puzzles quickly.", "She'll be the bright spark on tomorrow's quiz team."]
];
const queryQuiz = new URLSearchParams(window.location.search).get("quiz");
const is25Mode = queryQuiz === "25" || queryQuiz === "internal-25";

if (is25Mode) {
  document.title = "25 Idioms Test for Internal Exam Prep | English Ability Enhancement";
  const heroCrumb = document.querySelector("#hero-crumb");
  const heroCourse = document.querySelector("#hero-course");
  const heroTitle = document.querySelector("#hero-title");
  const heroDesc = document.querySelector("#hero-desc");
  const footerText = document.querySelector("#footer-text");
  const countPractice = document.querySelector("#count-practice");
  const countContext = document.querySelector("#count-context");
  const countMatch = document.querySelector("#count-match");

  if (heroCrumb) heroCrumb.textContent = "25 Idioms Test for Internal Exam Prep";
  if (heroCourse) heroCourse.innerHTML = "⚡ INTERNAL EXAM PREP · 25 HIGH-YIELD IDIOMS";
  if (heroTitle) heroTitle.textContent = "25 Idioms Test for Internal Exam Prep";
  if (heroDesc) heroDesc.textContent = "Targeted practice covering the first 25 syllabus idioms with MCQs, context sentence fill-in-the-blank, and 5 interactive matching sets.";
  if (footerText) footerText.textContent = "25 Idioms Test for Internal Exam Prep · Calicut University FYUGP";
  if (countPractice) countPractice.textContent = "25 Qs";
  if (countContext) countContext.textContent = "25 Qs";
  if (countMatch) countMatch.textContent = "5 Sets";
}

const activeIdioms = is25Mode ? idioms.slice(0, 25) : idioms;
const activeBlanks = is25Mode ? rawBlanks.slice(0, 25) : rawBlanks;

// 5 matching sets of 5 idioms (0-24) for 25 mode, 12 matching sets covering syllabus for full mode
const fullMatchingGroups = [
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29],
  [30, 31, 32, 33, 34],
  [35, 36, 37, 38, 39],
  [40, 41, 42, 43, 44],
  [45, 46, 47, 48, 49],
  [50, 51, 52, 53, 54],
  [55, 56, 57, 58, 0]
];
const matchingGroups = is25Mode ? fullMatchingGroups.slice(0, 5) : fullMatchingGroups;

const shuffle = items => {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};
const practice = activeIdioms.map(([idiom, meaning, example], index) => {
  const other = activeIdioms.filter((_, i) => i !== index && !([45,52].includes(index) && [45,52].includes(i)));
  return {
    idiomId: index,
    title: idiom,
    prompt: "What does this expression mean?",
    correct: meaning,
    options: shuffle([meaning, ...shuffle(other).slice(0,3).map(item => item[1])]),
    why: example
  };
});
const rawBlanks = [
  {
    "sentence": "After three top candidates turned down the job offer, the committee was ______ to find a replacement.",
    "idiom": "Scrape the barrel",
    "why": "“Scrape the barrel” means resorting to the least desirable choices when better options are exhausted."
  },
  {
    "sentence": "By shouting insults at his former supervisor upon resigning, David chose to ______.",
    "idiom": "Burn your boats or bridges",
    "why": "“Burn your boats or bridges” means making it impossible or very difficult to return to an earlier situation."
  },
  {
    "sentence": "Their groundbreaking research in gene therapy is set to ______ in medical science.",
    "idiom": "Break new ground",
    "why": "“Break new ground” means doing something truly innovative, original, or unprecedented."
  },
  {
    "sentence": "On launch day, the author's new thriller novel began to ______ across all bookstores.",
    "idiom": "Sell like hot cakes",
    "why": "“Sell like hot cakes” means selling out extremely quickly and in high demand."
  },
  {
    "sentence": "Without an agreed agenda, the committee members argued for two hours and ended up ______.",
    "idiom": "Run around in circles",
    "why": "“Run around in circles” means exerting lots of energy and effort without achieving real progress."
  },
  {
    "sentence": "The defense attorney smiled calmly because she still had ______ to reveal in court.",
    "idiom": "Have an ace up your sleeve",
    "why": "“Have an ace up your sleeve” means having a secret, powerful advantage or backup plan in reserve."
  },
  {
    "sentence": "Because he pursued contemporary theatre rather than family medicine, his relatives viewed him as ______.",
    "idiom": "A black sheep",
    "why": "“A black sheep” refers to a member considered odd, disgraced, or an outsider by the family or group."
  },
  {
    "sentence": "After sustaining a severe fracture in the final lap, the marathon runner was ______.",
    "idiom": "Down for the count",
    "why": "“Down for the count” means being completely defeated, exhausted, or incapacitated from continuing."
  },
  {
    "sentence": "I am happy to review your essay draft, but I ______ at doing your homework assignments for you.",
    "idiom": "Draw the line",
    "why": "“Draw the line” means setting a firm moral or practical boundary on what you are willing to accept."
  },
  {
    "sentence": "When his car broke down in the remote jungle and his phone battery died, he was truly ______.",
    "idiom": "Up a creek without a paddle",
    "why": "“Up a creek without a paddle” describes being stuck in a critical predicament with no easy escape."
  },
  {
    "sentence": "Our senior campus representative advised us to ______ for upcoming internship circulars.",
    "idiom": "Keep an ear to the ground",
    "why": "“Keep an ear to the ground” means staying alert, watchful, and informed about emerging developments."
  },
  {
    "sentence": "After running fifteen kilometres along the beach path, the athletes sat down and ______.",
    "idiom": "Eat like a horse",
    "why": "“Eat like a horse” means eating exceptionally large quantities of food with immense appetite."
  },
  {
    "sentence": "A tiny mistake in the balance sheet triggered late penalties and an audit in ______.",
    "idiom": "A snowball effect",
    "why": "“A snowball effect” refers to an escalating sequence where one small event accumulates momentum."
  },
  {
    "sentence": "Vikram demonstrates the same brilliant carpentry craftsmanship as his father; he is ______.",
    "idiom": "A chip off the old block",
    "why": "“A chip off the old block” characterizes someone who closely mirrors a parent's qualities or talents."
  },
  {
    "sentence": "She earned first prize in the national debate championship ______ by honoring all rules.",
    "idiom": "Fair and square",
    "why": "“Fair and square” means achieved honestly, transparently, and strictly according to official regulations."
  },
  {
    "sentence": "Missing the 8 AM express train turned out to be ______ when it derailed later that morning.",
    "idiom": "A blessing in disguise",
    "why": "“A blessing in disguise” is an event that seems unfortunate at first but later yields great fortune."
  },
  {
    "sentence": "Generic plastic phone accessories and cheap keychains are ______ in this weekend flea market.",
    "idiom": "A dime a dozen",
    "why": "“A dime a dozen” denotes items or ideas that are commonplace, abundant, and easily acquired."
  },
  {
    "sentence": "Rather than delaying the uncomfortable dental procedure any longer, she decided to ______.",
    "idiom": "Bite the bullet",
    "why": "“Bite the bullet” means facing a painful, daunting, or unpleasant duty with resolute courage."
  },
  {
    "sentence": "We have finalized all thirty presentation slides, so let us pack up and ______.",
    "idiom": "Call it a day",
    "why": "“Call it a day” means deciding to bring a work session or activity to an end for the time being."
  },
  {
    "sentence": "It is his first shift operating the front dispatch desk, so please ______ if he takes extra time.",
    "idiom": "Cut somebody some slack",
    "why": "“Cut somebody some slack” means showing leniency, patience, and avoiding harsh criticism."
  },
  {
    "sentence": "The building contractors attempted to ______ on foundation concrete, causing structural cracks.",
    "idiom": "Cut corners",
    "why": "“Cut corners” means skipping essential stages or quality measures to save money, time, or labor."
  },
  {
    "sentence": "When the aerodynamics simulation crashed during the first test, the team had to ______.",
    "idiom": "Go back to the drawing board",
    "why": "“Go back to the drawing board” means restarting planning from scratch after an approach completely fails."
  },
  {
    "sentence": "The first semester courses can feel overwhelming at times, but ______ and keep practicing daily.",
    "idiom": "Hang in there",
    "why": "“Hang in there” is an encouraging phrase urging someone to endure hardship and maintain resilience."
  },
  {
    "sentence": "Entering your attendance registration code on the student portal is easy; ______.",
    "idiom": "It's not rocket science",
    "why": "“It's not rocket science” emphasizes that a task is relatively straightforward and uncomplicated."
  },
  {
    "sentence": "The dean forgave his honest bookkeeping oversight and chose to ______ with a simple reminder.",
    "idiom": "Let someone off the hook",
    "why": "“Let someone off the hook” means releasing someone from punishment, culpability, or an obligation."
  },
  {
    "sentence": "If you wait until after tomorrow's final deadline to submit the form, you will totally ______.",
    "idiom": "Miss the boat",
    "why": "“Miss the boat” means losing a valuable opportunity or window of advantage due to tardiness."
  },
  {
    "sentence": "Waking up at 5 AM for endurance drills is painful, but the coach always repeats: ______.",
    "idiom": "No pain, no gain",
    "why": "“No pain, no gain” reminds us that true progress, skill, or strength demands strenuous exertion."
  },
  {
    "sentence": "Wipe away your tears, take a steadying breath, and ______ before entering the interview room.",
    "idiom": "Pull yourself together",
    "why": "“Pull yourself together” means recovering emotional composure, calm control, and focus."
  },
  {
    "sentence": "The third sudden rent increase within four months was ______ that prompted the tenants to move.",
    "idiom": "The last straw",
    "why": "“The last straw” describes the ultimate minor trouble that makes an accumulating burden intolerable."
  },
  {
    "sentence": "Working three days in the office and two from home gives me team interaction and quiet focus; it is ______.",
    "idiom": "The best of both worlds",
    "why": "“The best of both worlds” refers to enjoying the distinct advantages of two contrasting situations."
  },
  {
    "sentence": "The courier misdelivered my passport and then, to ______, demanded a penalty fee for replacement.",
    "idiom": "Add insult to injury",
    "why": "“Add insult to injury” means exacerbating an already humiliating or painful predicament."
  },
  {
    "sentence": "You have been sitting by the window in deep silence for ten minutes; ______?",
    "idiom": "A penny for your thoughts",
    "why": "“A penny for your thoughts” is a warm, polite invitation asking what another person is thinking about."
  },
  {
    "sentence": "Their fierce forty-minute debate regarding what color mug to buy for the staff room was ______.",
    "idiom": "A storm in a teacup",
    "why": "“A storm in a teacup” describes disproportionate excitement, fury, or drama over an insignificant matter."
  },
  {
    "sentence": "If you suspect Priya borrowed your lecture notes, you are ______; she was away all week.",
    "idiom": "Bark up the wrong tree",
    "why": "“Bark up the wrong tree” means directing accusations, efforts, or investigations in the wrong direction."
  },
  {
    "sentence": "By taking on five research electives while preparing for competitive exams, he ______.",
    "idiom": "Bite off more than you can chew",
    "why": "“Bite off more than you can chew” means undertaking responsibilities larger than your capacity."
  },
  {
    "sentence": "A short, fun trivia contest at the start of orientation helped ______ among unfamiliar students.",
    "idiom": "Break the ice",
    "why": "“Break the ice” means easing initial awkwardness, social tension, or shyness in a new group."
  },
  {
    "sentence": "Evaluating a short lyric poem with the exact criteria used for an 800-page historical novel is ______.",
    "idiom": "Compare apples and oranges",
    "why": "“Compare apples and oranges” means comparing things so fundamentally different that comparison is invalid."
  },
  {
    "sentence": "Importing bespoke titanium aircraft components will ______ and severely strain our budget.",
    "idiom": "Cost an arm and a leg",
    "why": "“Cost an arm and a leg” is a common idiom meaning to be exceedingly expensive or financially draining."
  },
  {
    "sentence": "Whenever a junior batchmate asks for programming guidance, Ananya will assist ______.",
    "idiom": "At the drop of a hat",
    "why": "“At the drop of a hat” means taking action instantly, willingly, and without delay."
  },
  {
    "sentence": "Reserving hotel suites before hearing whether the university funded the project is ______.",
    "idiom": "Count your chickens before they hatch",
    "why": "“Count your chickens before they hatch” warns against banking on positive outcomes before they materialize."
  },
  {
    "sentence": "Instead of staking your entire scholarship prospect on a single college application, ______.",
    "idiom": "Don't put all your eggs in one basket",
    "why": "“Don't put all your eggs in one basket” advises diversifying options to avoid risking everything at once."
  },
  {
    "sentence": "The sudden road closure cancelled our trip but gave us time to finish our reports, showing that ______.",
    "idiom": "Every cloud has a silver lining",
    "why": "“Every cloud has a silver lining” conveys that even frustrating circumstances possess a beneficial aspect."
  },
  {
    "sentence": "After years of playing loud music late at night, the arrogant neighbor finally got ______.",
    "idiom": "Get a taste of your own medicine",
    "why": "“Get a taste of your own medicine” means receiving the same harsh or unfair treatment one gave to others."
  },
  {
    "sentence": "Offended by his disrespectful comments at lunch, Maya decided to ______ and refused to answer him.",
    "idiom": "Give someone the cold shoulder",
    "why": "“Give someone the cold shoulder” means intentionally ignoring, snubbing, or displaying cold aloofness."
  },
  {
    "sentence": "Searching the entire town for an unregistered antique shop with a fake address became ______.",
    "idiom": "Go on a wild goose chase",
    "why": "“Go on a wild goose chase” denotes a hopeless, chaotic, and completely futile quest."
  },
  {
    "sentence": "Rohan inadvertently ______ when he congratulated the winner before the official jury announcement.",
    "idiom": "Let the cat out of the bag",
    "why": "“Let the cat out of the bag” means inadvertently disclosing private or surprise information."
  },
  {
    "sentence": "I accidentally formatted my memory card and lost two days of lecture recordings; well, ______.",
    "idiom": "Live and learn",
    "why": "“Live and learn” expresses philosophical acceptance of gaining wisdom through unexpected mistakes."
  },
  {
    "sentence": "Review every clause of the tenancy agreement before handing over the deposit; always ______.",
    "idiom": "Look before you leap",
    "why": "“Look before you leap” stresses considering all risks and repercussions prior to taking bold actions."
  },
  {
    "sentence": "Having arrived an hour late after two previous disciplinary warnings, the clerk is skating ______.",
    "idiom": "On thin ice",
    "why": "“On thin ice” describes walking in an precarious position where the slightest error triggers catastrophe."
  },
  {
    "sentence": "Because her sister lives in California and she works in Calicut, the siblings meet only ______.",
    "idiom": "Once in a blue moon",
    "why": "“Once in a blue moon” is an idiomatic phrase meaning an event transpires extremely infrequently."
  },
  {
    "sentence": "During our product design review, I will ______ to test whether our business model has flaws.",
    "idiom": "Play devil's advocate",
    "why": "“Play devil's advocate” means arguing an opposing viewpoint purely to examine the strength of an idea."
  },
  {
    "sentence": "Because regional tax rates were uncertain, the board chose to ______ until the next fiscal quarter.",
    "idiom": "Put something on ice",
    "why": "“Put something on ice” means temporarily deferring, postponing, or freezing an initiative."
  },
  {
    "sentence": "Please do not ______ regarding the surprise retirement celebration planned for our director.",
    "idiom": "Spill the beans",
    "why": "“Spill the beans” means prematurely or indiscreetly divulging a well-kept secret."
  },
  {
    "sentence": "I cannot join you for coffee this afternoon due to urgent revisions, but can I ______ for Saturday?",
    "idiom": "Take a rain check",
    "why": "“Take a rain check” means declining an invitation gracefully while proposing to reschedule later."
  },
  {
    "sentence": "Until the board issues an authenticated press notice, accept these unverified market rumours ______.",
    "idiom": "Take it with a grain of salt",
    "why": "“Take it with a grain of salt” means regarding assertions with healthy skepticism and reservation."
  },
  {
    "sentence": "Stop ______ and state clearly whether you will attend tomorrow's seminar or not.",
    "idiom": "Beat around the bush",
    "why": "“Beat around the bush” means avoiding direct discussion of the central matter through evasion."
  },
  {
    "sentence": "His claim that he lost his term paper because an alien spacecraft scanned his drive was ______.",
    "idiom": "Hard to swallow",
    "why": "“Hard to swallow” characterizes explanations or statements that are utterly implausible or difficult to accept."
  },
  {
    "sentence": "Investigative reporters had to ______ in dusty municipal property records to uncover the corruption.",
    "idiom": "Dig around",
    "why": "“Dig around” means probing, investigating, and diligently searching for hidden facts."
  },
  {
    "sentence": "With her sharp intellect and lightning-quick logical deductions, young Meera is truly ______.",
    "idiom": "A bright spark",
    "why": "“A bright spark” designates an exceptionally witty, perceptive, or clever individual."
  }
];
const context = activeBlanks.map((item, index) => {
  const otherIdxs = activeIdioms.map((_, i) => i).filter(i => i !== index);
  const shuffledOther = shuffle(otherIdxs).slice(0, 3).map(i => activeIdioms[i][0]);
  return {
    idiomId: index,
    title: item.sentence,
    prompt: "Choose the idiom that best fills in the blank.",
    correct: item.idiom,
    options: shuffle([item.idiom, ...shuffledOther]),
    why: item.why
  };
});
const lessons = {
  practice,
  context,
  match: matchingGroups.map(ids => ({ids, order: shuffle(ids)}))
};
const makeState = () => ({index: 0, answers: {}, finished: false});
const states = Object.fromEntries(Object.keys(lessons).map(key => [key,makeState()]));
let mode = "practice";
const card = document.querySelector("#card");
const escapeText = value => String(value).replace(/[&<>"']/g, char => ({
  "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
})[char]);

function render(focus = false) {
  const state = states[mode];
  const list = lessons[mode];
  if (state.finished) {
    renderResults(state, list);
  } else {
    const question = list[state.index];
    const answer = state.answers[state.index];
    const answered = answer !== undefined;
    const number = state.index + 1;
    const label = mode === "match" ? "Set" : "Question";
    const title = mode === "match" ? "Match each idiom to its meaning" : question.title;
    const completed = Object.keys(state.answers).length;
    card.innerHTML = \`
      <div class="status"><span>\${label} \${number} of \${list.length}</span><span>\${completed} checked</span></div>
      <progress aria-label="\${label}s checked" value="\${completed}" max="\${list.length}"></progress>
      <h2 tabindex="-1">\${escapeText(title)}</h2>
      <p class="prompt">\${mode === "match" ? "Choose one meaning for each idiom, then check all five." : question.prompt || "Choose the expression that best completes the sentence."}</p>
      \${mode === "match" ? matchMarkup(question, answer) : choicesMarkup(question, answer)}
      <div class="feedback" id="feedback" role="status" tabindex="-1">\${answered ? feedbackMarkup(question, answer) : ""}</div>
      <div class="actions">
        <button class="secondary" id="previous" \${number === 1 ? "disabled" : ""}>← Previous</button>
        <button class="primary" id="advance" \${answered ? "" : "disabled"}>\${!answered && mode === "match" ? "Check matches" : number === list.length ? "See results" : "Next →"}</button>
      </div>\`;
    bindQuestion(state, question, answered, list.length);
  }
  if (focus) card.querySelector("h2").focus();
}

function choicesMarkup(question, answer) {
  return \`<div class="choices">\${question.options.map((option, i) => {
    const checked = answer !== undefined;
    const good = checked && option === question.correct;
    const bad = checked && option === answer && !good;
    return \`<button class="choice \${good ? "good" : bad ? "bad" : ""}" data-choice="\${i}" \${checked ? "disabled" : ""}>
      <span class="letter">\${"ABCD"[i]}</span><span>\${escapeText(option)}</span>
      \${good || bad ? \`<span class="mark">\${good ? "✓" : "✕"}<span hidden>\${good ? " Correct answer" : " Your incorrect answer"}</span></span>\` : ""}
    </button>\`;
  }).join("")}</div>\`;
}

function examplesMarkup(id) {
  return \`<ul class="tense-examples" aria-label="Example sentences">\${["Past", "Present", "Future"].map((label, i) =>
    \`<li><strong>\${label}</strong> \${escapeText(tenseExamples[id][i])}</li>\`).join("")}</ul>\`;
}

function matchMarkup(question, answer) {
  return question.ids.map((id, row) => {
    const checked = answer !== undefined;
    const correct = checked && answer[row] === id;
    return \`<div class="match">
      <label for="match-\${row}"><strong>\${escapeText(idioms[id][0])}</strong></label>
      <select id="match-\${row}" \${checked ? "disabled" : ""}>
        <option value="">Choose a meaning</option>
        \${question.order.map(option => \`<option value="\${option}" \${checked && answer[row] === option ? "selected" : ""}>\${escapeText(idioms[option][1])}</option>\`).join("")}
      </select>
      \${checked ? \`<div class="match-feedback"><strong>\${correct ? "✓ Correct" : "✕ Correct match"} · \${escapeText(idioms[id][1])}</strong><br>\${escapeText(idioms[id][2])}\${examplesMarkup(id)}</div>\` : ""}
    </div>\`;
  }).join("");
}

function feedbackMarkup(question, answer) {
  if (mode === "match") {
    const count = question.ids.filter((id,i) => id === answer[i]).length;
    return \`<div class="message \${count === 5 ? "good" : "bad"}"><strong>\${count} of 5 matched correctly</strong><p>Each row shows the correct meaning and an example of how the idiom is used.</p></div>\`;
  }
  const correct = answer === question.correct;
  const explanation = mode === "practice"
    ? \`“\${question.title}” means “\${question.correct.toLowerCase()}.”\`
    : \`The sentence calls for “\${question.correct}.”\`;
  return \`<div class="message \${correct ? "good" : "bad"}">
    <strong>\${correct ? "✓ Correct" : "✕ Incorrect"}</strong>
    <p>\${escapeText(explanation)}</p><p><b>\${mode === "practice" ? "In context" : "Why"}.</b> \${escapeText(question.why)}</p>
    \${examplesMarkup(question.idiomId)}
  </div>\`;
}

function bindQuestion(state, question, answered, length) {
  const advance = card.querySelector("#advance");
  const selects = [...card.querySelectorAll("select")];
  function check(answer) {
    state.answers[state.index] = answer;
    render();
    card.querySelector("#feedback").focus();
  }
  for (const button of card.querySelectorAll("[data-choice]")) {
    button.onclick = () => check(question.options[Number(button.dataset.choice)]);
  }
  for (const select of selects) {
    select.onchange = () => { advance.disabled = selects.some(field => field.value === ""); };
  }
  advance.onclick = () => {
    if (!answered) {
      check(selects.map(field => Number(field.value)));
      return;
    }
    if (state.index + 1 === length) state.finished = true;
    else state.index++;
    render(true);
  };
  card.querySelector("#previous").onclick = () => {
    state.index--;
    render(true);
  };
}

function renderResults(state, list) {
  const missed = [];
  for (const [i, question] of list.entries()) {
    const answer = state.answers[i];
    if (mode === "match") {
      question.ids.forEach((id, row) => {
        if (answer[row] !== id) missed.push(idioms[id]);
      });
    } else if (answer !== question.correct) {
      missed.push(mode === "practice" ? [question.title,question.correct,question.why] : [question.correct,question.why]);
    }
  }
  const total = mode === "match" ? list.length * 5 : list.length;
  card.innerHTML = \`<div class="status">Section complete</div><h2 tabindex="-1">\${total - missed.length} of \${total} correct</h2>
    \${missed.length ? \`<p class="prompt">Review the answers you missed.</p><ol class="review">\${missed.map(([title,meaning,example]) =>
      \`<li><strong>\${escapeText(title)}</strong><br>\${escapeText(meaning)}\${example ? \`<br>\${escapeText(example)}\` : ""}</li>\`).join("")}</ol>\` :
      "<p class='prompt'>You answered every question in this section correctly.</p>"}
    <button class="primary" id="retry">Try this section again</button>\`;
  card.querySelector("#retry").onclick = () => {
    states[mode] = makeState();
    render(true);
  };
}
for (const tab of document.querySelectorAll("[data-mode]")) {
  tab.onclick = () => {
    mode = tab.dataset.mode;
    document.querySelectorAll("[data-mode]").forEach(item => item.setAttribute("aria-pressed",String(item === tab)));
    render(true);
  };
}
render();
</script>
</body>
</html>`;

export default quizAppHtml;
