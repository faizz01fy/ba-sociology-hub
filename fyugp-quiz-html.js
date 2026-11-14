const quizAppHtml = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="#102c31">
<title>Idiomatic Expressions | VAP Session 4</title>
<style>
:root{font-family:"DM Sans",system-ui,sans-serif;color:#153236;background:#f1f5f2;line-height:1.55;--ink:#153236;--green:#086454;--line:#d5e1da}
*{box-sizing:border-box}body{margin:0}button,select{font:inherit;color:inherit}button{cursor:pointer}button:disabled{cursor:default}button:focus-visible,select:focus-visible{outline:3px solid #2670b6;outline-offset:3px}
.wrap{width:min(100% - 32px,760px);margin:auto}.hero{background:radial-gradient(ellipse at 95% 5%,#285d55,transparent 62%),#102c31;color:#fff;padding:35px 0 61px}.course{color:#b2e7d5;font-size:.78rem;letter-spacing:.13em;font-weight:800;text-transform:uppercase}.hero h1{font-family:"Instrument Serif",Georgia,serif;font-weight:400;font-size:clamp(2.6rem,7vw,4.3rem);letter-spacing:-.045em;line-height:1.02;margin:12px 0}.hero p{color:#d5e7e2;margin:0;max-width:48ch}
main{margin-top:-29px!important;padding-bottom:30px}.tabs{display:flex;gap:5px;padding:5px;background:#fff;border:1px solid var(--line);border-radius:14px;margin-bottom:15px;box-shadow:0 4px 16px #102c3110}.tabs button{flex:1;padding:10px 4px;border:0;border-radius:9px;background:transparent;font-weight:700;font-size:clamp(.79rem,2.4vw,.94rem)}.tabs button[aria-pressed=true]{background:#dcf2e8;color:#075646}
.card{padding:clamp(18px,4.5vw,36px);background:#fff;border:1px solid var(--line);border-radius:20px;box-shadow:0 12px 34px #102c310a}.status,.actions{display:flex;justify-content:space-between;gap:12px;align-items:center;flex-wrap:wrap}.status{color:#455d59;font-size:.86rem;font-weight:700}progress{display:block;width:100%;height:8px;margin:10px 0 25px;appearance:none;border:0;background:#eaf0eb;border-radius:20px;overflow:hidden}progress::-webkit-progress-bar{background:#eaf0eb}progress::-webkit-progress-value{background:#258973;border-radius:20px}progress::-moz-progress-bar{background:#258973}
h2{margin:4px 0 12px;font-size:clamp(1.35rem,4vw,1.85rem);line-height:1.23;letter-spacing:-.025em}h2:focus{outline:none}.prompt{margin:0 0 16px;color:#455d59}.choices{display:grid;gap:8px}.choice{display:flex;text-align:left;align-items:center;gap:12px;min-height:52px;padding:9px 12px;border:1px solid var(--line);border-radius:11px;background:#fafcfb}.choice:not(:disabled):hover{background:#edf7f1;border-color:#73a996}.letter{display:grid;place-items:center;min-width:29px;height:29px;border-radius:8px;background:#e9efeb;font-size:.82rem;font-weight:800}.choice.good,.message.good{background:#e6f6ed;border-color:#72ad90}.choice.bad,.message.bad{background:#fdf0e9;border-color:#dfa692}.mark{margin-left:auto;font-weight:800}.feedback:not(:empty){margin-top:16px}.message{border:1px solid var(--line);border-radius:11px;padding:12px 14px}.message p{margin:4px 0 0}.actions{margin-top:18px}.primary,.secondary{min-height:44px;padding:9px 15px;border-radius:9px;font-weight:750}.primary{background:var(--green);color:white;border:1px solid var(--green)}.primary:disabled{background:#e2e9e5;color:#596b65;border-color:#e2e9e5}.secondary{background:white;border:1px solid var(--line)}.secondary:disabled{opacity:.55}.match{display:grid;grid-template-columns:1fr 1.3fr;align-items:center;gap:8px 16px;padding:12px 0;border-bottom:1px solid var(--line)}select{width:100%;min-width:0;min-height:44px;border:1px solid #aabdb2;border-radius:8px;background:#fafcfb;padding:6px}.match-feedback{grid-column:1/-1;color:#31554b;font-size:.833em}.review{padding-left:22px}.review li{margin-bottom:12px}.footer{margin:16px 2px 0;font-size:.79rem;color:#4c635e}@media(max-width:520px){.match{grid-template-columns:1fr}.hero{padding-top:27px}}
.tense-examples{margin:9px 0 0;padding:9px 0 0;list-style:none;border-top:1px solid #15323630}.tense-examples li+li{margin-top:4px}.tense-examples strong{display:inline-block;min-width:4.3em}
.nav-breadcrumbs{display:flex;align-items:center;gap:6px;font-size:.82rem;font-weight:600;margin-bottom:14px;color:#d5e7e2;flex-wrap:wrap}
.nav-breadcrumbs a{color:#b2e7d5;text-decoration:none}
.nav-breadcrumbs a:hover{text-decoration:underline}
.nav-breadcrumbs span{opacity:.7}
</style>
</head>
<body>
<header class="hero"><div class="wrap">
<div class="nav-breadcrumbs"><a href="/">Academic Hub</a> <span>→</span> <a href="/calicut-university-fyugp">FYUGP</a> <span>→</span> <span>IMA DS Semester 1</span> <span>→</span> <span>English</span> <span>→</span> <span style="color:#fff">VAP Quiz</span></div>
<div class="course">Listening &amp; Speaking · Session 4</div><h1>Idiomatic Expressions</h1><p>Learn what common expressions mean and practise using them in context.</p></div></header>
<main class="wrap">
<nav class="tabs" aria-label="Quiz sections">
<button type="button" data-mode="practice" aria-pressed="true">Idiom practice</button>
<button type="button" data-mode="match" aria-pressed="false">Matching</button>
<button type="button" data-mode="context" aria-pressed="false">Fill in the blank</button>
</nav>
<section class="card" id="card" aria-label="Quiz"></section>
<p class="footer">Adapted from VAP Session 4 · Ability Enhancement Course · Calicut University FYUGP</p>
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
const matchingGroups = [[55,1,9,6,10],[19,16,28,21,34],[44,40,50,45,38]];
const shuffle = items => {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};
const practice = idioms.map(([idiom, meaning, example], index) => {
  const other = idioms.filter((_, i) => i !== index && !([45,52].includes(index) && [45,52].includes(i)));
  return {
    idiomId: index,
    title: idiom,
    prompt: "What does this expression mean?",
    correct: meaning,
    options: shuffle([meaning, ...shuffle(other).slice(0,3).map(item => item[1])]),
    why: example
  };
});
const context = [
  {
    title: "It would be better to apply to several companies instead of just one. Don’t ____.",
    options: ["spill the beans","let the cat out of the bag","bite off more than you can chew","put all your eggs in one basket"],
    correct: "put all your eggs in one basket",
    idiomId: 40,
    why: "Applying to only one company puts all your chances on a single option. Applying to several spreads the risk."
  },
  {
    title: "She’s disappointed she didn’t get her dream job. The sooner she ____ and accepts it, the sooner she can move on.",
    options: ["bites off more than she can chew","bites the bullet","barks up the wrong tree","breaks new ground"],
    correct: "bites the bullet",
    idiomId: 17,
    why: "Accepting the rejection is difficult. To bite the bullet is to face an unpleasant situation you have been putting off or would rather avoid."
  }
];
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
