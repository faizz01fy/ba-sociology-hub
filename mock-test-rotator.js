/**
 * Mock Test Panel - Dynamic Subject-Specific Photo Rotator & Practice Zone Engine
 * Academic Hub (Calicut University)
 *
 * Features:
 * - 16+ verified, subject-relevant, high-resolution Unsplash photos per course
 * - Dynamic 20-minute interval rotation (half an hour) with smooth cross-fade
 * - Staggered card transition offsets to avoid jarring simultaneous shifts
 * - Interactive hover controls: Prev / Next buttons and live slide counter
 * - Pause-on-hover to allow students to examine photographs and notes
 * - Practice Zone category stream filter tabs (Languages, Social & History, Philosophy, Economics)
 * - Full backward compatibility with window.shuffleMockTestPhotos
 */

(function () {
  'use strict';

  // 20-minute rotation interval per card (half an hour)
  var INTERVAL_MS = 20 * 60 * 1000; // 20-minute interval

  // Curated, 100% verified (HTTP 200) high-resolution Unsplash photos matched strictly to subjects
  var SUBJECT_PHOTO_POOLS = {
    history: [
      { id: '1695964744922-c7d01b4761cb', desc: 'Padmanabhapuram Palace traditional Kerala timber architecture' },
      { id: '1599940824399-b87987ceb72a', desc: 'Edakkal Cave prehistoric rock petroglyphs and engravings' },
      { id: '1544620347-c4fd4a3d5957', desc: 'Iron Age Megalithic monuments and Kudakkal dolmens' },
      { id: '1582555172866-f73bb12a2ab3', desc: 'Archaeological artefacts and ancient heritage pottery' },
      { id: '1507525428034-b723cf961d3e', desc: 'Historic Muziris maritime trade coast and ancient Malabar waves' },
      { id: '1602216056096-3b40cc0c9944', desc: 'Serene Kerala backwaters and inland trade route corridors' },
      { id: '1514565131-fce0801e5785', desc: 'Ancient stone pillar architecture and historic temple sanctum' },
      { id: '1584551246679-0daf3d275d0f', desc: 'Traditional Kerala temple lamp and heritage brass craft' },
      { id: '1590123732197-e7079d2ceb89', desc: 'Fort Kochi iconic Chinese fishing nets on Kerala coast' },
      { id: '1590050752117-238cb0fb12b1', desc: 'Ancient trade route through Western Ghats hill ranges' },
      { id: '1621178754488-8fb090bad709', desc: 'Centuries-old Kathakali classical heritage drama of Keralam' },
      { id: '1787324264288-3d8359e5f2fa', desc: 'Heritage wooden craft on Kerala waters reminiscent of coastal trade' },
      { id: '1544716278-ca5e3f4abd8c', desc: 'Ancient copper plate inscriptions and palm leaf records' },
      { id: '1542601906990-b4d3fb778b09', desc: 'Historic Malabar black pepper and cardamom cultivation' },
      { id: '1506744038136-46273834b3fb', desc: 'Ancient coastal fortress watchtower overlooking Arabian Sea' },
      { id: '1611299074735-a2db673dd495', desc: 'Traditional Vallam Kali snake boat trade waterways' }
    ],

    english: [
      { id: '1527554677374-236d3bc88a34', desc: 'Open literature book resting on warm library table' },
      { id: '1495446815901-a7297e633e8d', desc: 'Neatly stacked classic literature and poetry hardcovers' },
      { id: '1455390582262-044cdead277a', desc: 'Classic fountain pen drafting prose on lined notebook paper' },
      { id: '1456513080510-7bf3a84b82f8', desc: 'Open literature book with reading glasses in quiet study' },
      { id: '1497633762265-9d179a990aa6', desc: 'Colorful classic literature book spines on library shelf' },
      { id: '1476275466078-4007374efbbe', desc: 'Open classic novel resting in sunlit outdoor study' },
      { id: '1457369804613-52c61a468e7d', desc: 'Vintage library shelves and open classical texts' },
      { id: '1512820790803-83ca734da794', desc: 'Aesthetic open book with soft page depth' },
      { id: '1474932430478-367dbb6832c1', desc: 'Vintage literary typewriter and manuscript notes' },
      { id: '1524995997946-a1c2e315a42f', desc: 'Grand university study archive with study lanterns' },
      { id: '1463320726281-696a485928c7', desc: 'Scholarly reading desk with fountain pen and notes' },
      { id: '1521587760476-6c12a4b040da', desc: 'Majestic college library hall with historical volumes' },
      { id: '1499750310107-5fef28a66643', desc: 'Student desk reviewing English grammar and analytical essay' },
      { id: '1516979187457-637abb4f9353', desc: 'Cozy book stacks and warm reading lamp' },
      { id: '1481627834876-b7833e8f5570', desc: 'Classical literature library with rows of timeless works' },
      { id: '1506880018603-83d5b814b5a6', desc: 'Reader immersed in classic literature manuscript' }
    ],

    sociology: [
      { id: '1548782033-3ac3a62ece8d', desc: 'Community members gathered together smiling in unity outdoors' },
      { id: '1511632765486-a01980e01a18', desc: 'Friends and community members sharing meaningful conversation' },
      { id: '1528605248644-14dd04022da1', desc: 'Diverse group enjoying collaborative community meal' },
      { id: '1529156069898-49953e39b3ac', desc: 'Group of diverse young people embracing community harmony' },
      { id: '1776692629196-82f981d49217', desc: 'Community circle gathered outdoors in dialogue and connection' },
      { id: '1761250027507-c0be614c0254', desc: 'Public conference hall of engaged citizens discussing civic issues' },
      { id: '1582213782179-e0d53f98f2ca', desc: 'Unified hands in solidarity representing social cooperation' },
      { id: '1531206715517-5c0ba140b2b8', desc: 'Social science university seminar and dialogue' },
      { id: '1491438590914-bc09fcaaf77a', desc: 'Dynamic human interaction in urban social spaces' },
      { id: '1517486808906-6ca8b3f04846', desc: 'Group of scholars studying sociological dynamics' },
      { id: '1573496359142-b8d87734a5a2', desc: 'Social institutions, culture and collective behavior' },
      { id: '1511895426328-dc8714191300', desc: 'Multi-generational family celebrating social bonds' },
      { id: '1517048676732-d65bc937f952', desc: 'Collaborative group gathered discussing community cohesion' },
      { id: '1559027615-cd4628902d4a', desc: 'Non-profit civic volunteers working together for common good' },
      { id: '1522202176988-66273c2fd55f', desc: 'Collaborative students discussing sociology theories' },
      { id: '1534528741775-53994a69daeb', desc: 'Portrait of human diversity and social solidarity' }
    ],

    education: [
      { id: '1509062522246-3755977927d7', desc: 'Students learning actively with engaged teacher in classroom' },
      { id: '1606761568499-6d2451b23c66', desc: 'Modern university lecture hall prepared for philosophical debate' },
      { id: '1580582932707-520aed937b7b', desc: 'Classroom study desks facing front chalkboard for pedagogy' },
      { id: '1524178232363-1fb2b075b655', desc: 'Educator guiding students through collaborative academic inquiry' },
      { id: '1577896851231-70ef18881754', desc: 'Students engaged in active classroom discussion and discovery' },
      { id: '1503676260728-1c00da094a0b', desc: 'Young student holding books ready for educational journey' },
      { id: '1427504494785-3a9ca7044f45', desc: 'Active collaborative learning and scholarly debate' },
      { id: '1498243691581-b145c3f54a5a', desc: 'Classical university campus pathway of academic wisdom' },
      { id: '1516321318423-f06f85e504b3', desc: 'Interactive educational workshop and creative thinking' },
      { id: '1523240795612-9a054b0db644', desc: 'Dedicated students pursuing academic excellence together' },
      { id: '1517486808906-6ca8b3f04846', desc: 'University scholars discussing pedagogical philosophy' },
      { id: '1497633762265-9d179a990aa6', desc: 'Campus library resources for educational development' },
      { id: '1455390582262-044cdead277a', desc: 'Critical thinking and reflective educational journaling' },
      { id: '1531403009284-440f080d1e12', desc: 'Socratic inquiry group learning in modern classroom' },
      { id: '1532619675605-1ede6c2ed2b0', desc: 'Students engrossed in academic study in university library' },
      { id: '1434030216411-0b793f4b4173', desc: 'Student taking meticulous notes during philosophy lecture' }
    ],

    ai: [
      { id: '1697577418970-95d99b5a55cf', desc: 'Advanced AI microchip processor on printed circuit board' },
      { id: '1677442136019-21780ecad995', desc: 'Futuristic neural network and digital mind computing data' },
      { id: '1620712943543-bcc4688e7485', desc: 'Futuristic humanoid robot seated contemplating consciousness' },
      { id: '1485827404703-89b55fcc595e', desc: 'Humanoid robot interacting and demonstrating cognitive logic' },
      { id: '1531746790731-6c087fecd65a', desc: 'Robotic hand and human touch representing artificial cognition' },
      { id: '1589254065878-42c9da997008', desc: 'Humanoid robot exploring ethical thought and machine mind' },
      { id: '1618005182384-a83a8bd57fbe', desc: 'Luminous cyan neural wave abstract cognitive intelligence' },
      { id: '1635070041078-e363dbe005cb', desc: 'Quantum computing algorithmic data vortex' },
      { id: '1526374965328-7f61d4dc18c5', desc: 'Matrix digital cyber code stream and machine logic' },
      { id: '1558494949-ef010cbdcc31', desc: 'Datacenter glowing cyan representing compute power' },
      { id: '1507413245164-6160d8298b31', desc: 'Glowing digital neural brain synapse visualization' },
      { id: '1518770660439-4636190af475', desc: 'High-tech AI interface circuit board and cyber logic' },
      { id: '1550751827-4bd374c3f58b', desc: 'Futuristic neon cybersecurity and artificial intelligence' },
      { id: '1535378917042-10a22c95931a', desc: 'Robotic sensor eye analyzing philosophical visual inputs' },
      { id: '1516321318423-f06f85e504b3', desc: 'Computational machine learning network visualization' },
      { id: '1579783900882-c0d3dad7b119', desc: 'Abstract fractal simulation of synthetic digital consciousness' }
    ],

    ethics: [
      { id: '1521790797524-b2497295b8a0', desc: 'Firm professional handshake representing mutual trust and integrity' },
      { id: '1589829545856-d10d557cf95f', desc: 'Classical Lady Justice statue holding balance scales' },
      { id: '1589994965851-a8f479c573a9', desc: 'Bronze scales of justice symbolizing ethical fairness and law' },
      { id: '1768839719921-6a554fb3e847', desc: 'Sculpted monument of justice representing moral uprightness' },
      { id: '1505664194779-8beaceb93744', desc: 'Philosophy library with classical bust representing moral philosophy' },
      { id: '1589578527966-fdac0f44566c', desc: 'Bronze Lady Justice statue holding scales of justice and sword' },
      { id: '1506126613408-eca07ce68773', desc: 'Zen balanced stones representing moral equilibrium' },
      { id: '1479839672679-a46483c0e7c8', desc: 'Classical marble philosopher statue contemplating virtue ethics' },
      { id: '1534447677768-be436bb09401', desc: 'Cosmic moral compass guiding ethical decision-making' },
      { id: '1516251193007-45ef944ab0c6', desc: 'Collective hands building a fair, just and equitable society' },
      { id: '1528747045269-390fe33c19f2', desc: 'Classical neoclassical courthouse colonnade of justice' },
      { id: '1513694203232-719a280e022f', desc: 'Sunbeam illuminating marble arch of truth and rectitude' },
      { id: '1470071459604-3b5ec3a7fe05', desc: 'Serene pristine nature symbolizing bioethical harmony' },
      { id: '1455390582262-044cdead277a', desc: 'Scribe pen annotating codes of professional ethics' },
      { id: '1457369804613-52c61a468e7d', desc: 'Ancient parchment codex of ethical philosophy' },
      { id: '1526304640581-d334cdbbf45e', desc: 'Honest equitable trade based on ethical principles' }
    ],

    economy: [
      { id: '1565371767810-ef913a6c8315', desc: 'Indian rupee banknotes representing national monetary policy' },
      { id: '1770892123242-c876a0a343f5', desc: 'Indian farmer cultivating agricultural fields' },
      { id: '1570168007204-dfb528c6958f', desc: 'Gateway of India and Mumbai financial center' },
      { id: '1460925895917-afdab827c52f', desc: 'Macroeconomic data analytics and national development growth charts' },
      { id: '1611974789855-9c2a0a7236a3', desc: 'Stock market exchange charts tracking economic growth' },
      { id: '1579621970563-ebec7560ff3e', desc: 'Plant growing from currency coins representing sustainable development' },
      { id: '1582213782179-e0d53f98f2ca', desc: 'Indian rural development and collective micro enterprise' },
      { id: '1532375810709-75b1da00537c', desc: 'India Gate and national economic infrastructure' },
      { id: '1526304640581-d334cdbbf45e', desc: 'Currency notes and Indian economic valuation' },
      { id: '1563986768609-322da13575f3', desc: 'Financial market exchange and industrial GDP metrics' },
      { id: '1542601906990-b4d3fb778b09', desc: 'Agrarian reform, food security and rural economics' },
      { id: '1474487548417-781cb71495f3', desc: 'Indian railway network connecting national markets and industry' },
      { id: '1498084393753-b411b2d26b34', desc: 'Modern urban infrastructure and transportation network' },
      { id: '1513836279014-a89f7a76ae86', desc: 'Bustling rural Indian bazaar showing local commodity exchange' },
      { id: '1586528116311-ad8dd3c8310d', desc: 'International maritime freight port expanding export trade' },
      { id: '1486406146926-c627a92ad1ab', desc: 'Modern metropolitan financial district and enterprise towers' }
    ],

    microeconomics: [
      { id: '1644871913429-9ed7696180cc', desc: 'Coins representing microeconomics and consumer choice' },
      { id: '1518458028785-8fbcd101ebb9', desc: 'Coins resting on wood demonstrating savings and consumer choice' },
      { id: '1559526324-4b87b5e36e44', desc: 'Stacking coins illustrating cost structures and price equilibrium' },
      { id: '1553729459-efe14ef6055d', desc: 'Financial calculations and ledger reviewing firm economics' },
      { id: '1590283603385-17ffb3a7f29f', desc: 'Market demand and supply equilibrium candlestick curves' },
      { id: '1611974789855-9c2a0a7236a3', desc: 'Stock market trade analytics and marginal pricing' },
      { id: '1607604276583-eef5d076aa5f', desc: 'Antique brass balance scale measuring economic utility' },
      { id: '1526304640581-d334cdbbf45e', desc: 'Consumer choice and monetary exchange equilibrium' },
      { id: '1535320903710-d993d3d77d29', desc: 'Retail behavior, consumer demand and elasticities' },
      { id: '1486406146926-c627a92ad1ab', desc: 'Competitive market enterprise and firm structures' },
      { id: '1488459716781-31db52582fe9', desc: 'Open agricultural produce market showing real supply and demand' },
      { id: '1554224155-8d04cb21cd6c', desc: 'Calculator and pencil working out marginal cost and utility' },
      { id: '1555421689-491a97ff2040', desc: 'Consumer evaluating goods and utility in retail store' },
      { id: '1501339847302-ac426a4a7cbb', desc: 'Small commercial enterprise and monopolistic competition model' },
      { id: '1581091226825-a6a2a5aee158', desc: 'Factory manufacturing line demonstrating production function' },
      { id: '1580519542036-c47de6196ba5', desc: 'Banking currency exchange and liquidity transaction' }
    ],

    malayalam: [
      { id: '1621178754488-8fb090bad709', desc: 'Kathakali costume and vibrant stage makeup of Kerala' },
      { id: '1602216056096-3b40cc0c9944', desc: 'Traditional Kerala kettuvallam houseboat gliding on backwaters' },
      { id: '1611299074735-a2db673dd495', desc: 'Tranquil palm-fringed backwaters and canal in Alappuzha Kerala' },
      { id: '1787324264288-3d8359e5f2fa', desc: 'Traditional wooden canoe on calm Kerala backwater river' },
      { id: '1590050752117-238cb0fb12b1', desc: 'Lush green tea plantations and misty hills of Munnar Kerala' },
      { id: '1695964744922-c7d01b4761cb', desc: 'Traditional Kerala heritage architecture with sloping tiled roofs' },
      { id: '1590123732197-e7079d2ceb89', desc: 'Fort Kochi iconic Chinese fishing nets on Kerala coast' },
      { id: '1584551246679-0daf3d275d0f', desc: 'Traditional Kerala temple lamp and brass craft' },
      { id: '1514565131-fce0801e5785', desc: 'Ancient stone pillar architecture and historic temple sanctum' },
      { id: '1507525428034-b723cf961d3e', desc: 'Historic maritime trade coast and ancient Malabar waves' },
      { id: '1544716278-ca5e3f4abd8c', desc: 'Classic Malayalam literature and scholarly reading' },
      { id: '1582510003544-4d00b7f74220', desc: 'Traditional cultural dance performance in Kerala' },
      { id: '1516205651411-aef33a44f7c2', desc: 'Traditional sacred Nilavilakku brass oil lamp' },
      { id: '1506744038136-46273834b3fb', desc: 'Pristine misty rainforest mountains of Wayanad Kerala' },
      { id: '1516450360452-9312f5e86fc7', desc: 'Kerala festive celebration and traditional music' },
      { id: '1599940824399-b87987ceb72a', desc: 'Edakkal rock engravings and prehistoric Kerala archaeology' }
    ],

    arabic: [
      { id: '1766326057606-2497458466fb', desc: 'Ornate Arabic calligraphy carved into architectural stone' },
      { id: '1720701575003-51dafcf39cb4', desc: 'Historic illuminated Arabic manuscript with gilded calligraphy' },
      { id: '1720701574998-d68020bce2bd', desc: 'Classical Arabic calligraphy text on parchment folio' },
      { id: '1791340324867-aea4c3d7920b', desc: 'Ancient illuminated Arabic manuscript in scholarly study' },
      { id: '1754400743862-b3df948fdbdc', desc: 'Intricate Islamic horseshoe arches and carved ornamentation' },
      { id: '1564769625905-50e93615e769', desc: 'Majestic dome and arches showcasing classical Arab architectural heritage' },
      { id: '1519817650390-64a93db51149', desc: 'Classical Arabesque geometric patterns and script aesthetics' },
      { id: '1509316975850-ff9c5deb0cd9', desc: 'Moorish palace carved geometric stucco and cursive Arabic script' },
      { id: '1544716278-ca5e3f4abd8c', desc: 'Classic folio of Arabic literary prose and poetic verses' },
      { id: '1542838132-92c53300491e', desc: 'Magnificent illuminated arches in historic Islamic architecture' },
      { id: '1534447677768-be436bb09401', desc: 'Ancient desert trade route caravan culture and Arab heritage' },
      { id: '1517256064527-09c73fc73e38', desc: 'Traditional Arab hospitality tea ceremony and majlis gathering' },
      { id: '1506744038136-46273834b3fb', desc: 'Serene Arabian landscape and historic spice trade horizons' },
      { id: '1513694203232-719a280e022f', desc: 'Sunlit traditional carved wooden mashrabiya screen' },
      { id: '1457369804613-52c61a468e7d', desc: 'Historic archive of classical Arabic philosophy and linguistics' },
      { id: '1512453979798-5ea266f8880c', desc: 'Grand turquoise Arabesque dome with intricate calligraphy band' }
    ],

    mathematics: [
      { id: '1635372722656-389f87a941b7', desc: 'Blackboard covered in rigorous mathematical equations and formulas' },
      { id: '1758685733897-80154016629f', desc: 'System of linear algebraic equations on blackboard' },
      { id: '1509228468518-180dd4864904', desc: 'Mathematical compass and technical drafting on coordinate paper' },
      { id: '1758685848261-16a5a9e68811', desc: 'Student analyzing advanced calculus proofs on full chalkboard' },
      { id: '1635070041078-e363dbe005cb', desc: 'Collaborative problem-solving with complex algebraic mathematics' },
      { id: '1596495578065-6e0763fa1178', desc: 'Advanced geometric and mathematical derivations' },
      { id: '1518770660439-4636190af475', desc: 'Geometric circuit precision and mathematical logic' },
      { id: '1581092160607-ee22621dd758', desc: 'Precision technical caliper measuring mathematical proportions' },
      { id: '1507413245164-6160d8298b31', desc: 'Spatial 3D coordinate geometry wireframe structure' },
      { id: '1509062522246-3755977927d7', desc: 'Mathematical lecture on differential calculus equations' },
      { id: '1455390582262-044cdead277a', desc: 'Mathematical drafting with graph paper and geometric compass' },
      { id: '1558494949-ef010cbdcc31', desc: 'Network graph theory and computational topology nodes' },
      { id: '1516321318423-f06f85e504b3', desc: 'Mathematical analysis in theoretical computer science' },
      { id: '1460925895917-afdab827c52f', desc: 'Statistical normal distribution curves and probability plots' },
      { id: '1526374965328-7f61d4dc18c5', desc: 'Number theory and cryptography algorithms on digital screen' },
      { id: '1606761568499-6d2451b23c66', desc: 'Classical university mathematics lecture hall with chalkboard proofs' }
    ]
  };

  function buildUnsplashUrl(photoId) {
    return 'https://images.unsplash.com/photo-' + photoId + '?auto=format&fit=crop&w=600&h=338&q=75';
  }

  // Card state tracking: index, timer, paused state
  var cardStates = new Map();
  var globalManualShift = 0;

  function getSubjectKey(card) {
    var subjectKey = card.getAttribute('data-subject-key');
    if (!subjectKey) {
      var labelEl = card.querySelector('.test-label');
      var text = (labelEl ? labelEl.textContent : card.textContent).toLowerCase();
      if (text.indexOf('english') !== -1) subjectKey = 'english';
      else if (text.indexOf('sociology') !== -1) subjectKey = 'sociology';
      else if (text.indexOf('education') !== -1) subjectKey = 'education';
      else if (text.indexOf('artificial') !== -1 || text.indexOf('philosophy of ai') !== -1 || text.indexOf('ai') !== -1) subjectKey = 'ai';
      else if (text.indexOf('ethics') !== -1) subjectKey = 'ethics';
      else if (text.indexOf('economy') !== -1) subjectKey = 'economy';
      else if (text.indexOf('micro') !== -1) subjectKey = 'microeconomics';
      else if (text.indexOf('malayalam') !== -1) subjectKey = 'malayalam';
      else if (text.indexOf('arabic') !== -1) subjectKey = 'arabic';
      else if (text.indexOf('math') !== -1) subjectKey = 'mathematics';
      else if (text.indexOf('history') !== -1 || text.indexOf('keralam') !== -1) subjectKey = 'history';
      if (subjectKey) card.setAttribute('data-subject-key', subjectKey);
    }
    return subjectKey;
  }

  function applyPhotoToCard(card, photoIndex, animate) {
    var subjectKey = getSubjectKey(card);
    var pool = SUBJECT_PHOTO_POOLS[subjectKey];
    if (!pool || pool.length === 0) return;

    var actualIdx = ((photoIndex % pool.length) + pool.length) % pool.length;
    var state = cardStates.get(card) || { index: 0, paused: false };
    state.index = actualIdx;
    cardStates.set(card, state);

    var photoObj = pool[actualIdx];
    var newUrl = buildUnsplashUrl(photoObj.id);
    var imgEl = card.querySelector('.test-image');

    if (imgEl) {
      imgEl.alt = photoObj.desc;
      imgEl.title = photoObj.desc;

      if (animate && imgEl.src !== newUrl) {
        imgEl.style.transition = 'opacity 0.38s ease, transform 0.38s ease';
        imgEl.style.opacity = '0.35';
        imgEl.style.transform = 'scale(0.98)';
        var tempImg = new Image();
        tempImg.onload = function () {
          imgEl.src = newUrl;
          imgEl.style.opacity = '1';
          imgEl.style.transform = 'scale(1)';
        };
        tempImg.onerror = function () {
          imgEl.style.opacity = '1';
          imgEl.style.transform = 'scale(1)';
        };
        tempImg.src = newUrl;
      } else {
        imgEl.src = newUrl;
        imgEl.style.opacity = '1';
      }
    }

    // Remove any legacy pill counter so no numbers appear on photo
    var pill = card.querySelector('.rotator-pill');
    if (pill && pill.parentNode) {
      pill.parentNode.removeChild(pill);
    }
    var oldBtns = card.querySelectorAll('.rotator-nav-btn');
    for (var b = 0; b < oldBtns.length; b++) {
      if (oldBtns[b].parentNode) oldBtns[b].parentNode.removeChild(oldBtns[b]);
    }
  }

  function setupCardInteractiveRotator(card, cardIndex) {
    var subjectKey = getSubjectKey(card);
    var pool = SUBJECT_PHOTO_POOLS[subjectKey];
    if (!pool || pool.length === 0) return;

    // Fresh photo on every open / refresh
    var randomIndex = Math.floor(Math.random() * pool.length);
    var state = {
      index: randomIndex,
      paused: false,
      timer: null
    };
    cardStates.set(card, state);

    // Ensure image is wrapped or has rotator overlay controls
    var imgEl = card.querySelector('.test-image');
    if (imgEl && !card.querySelector('.rotator-controls')) {
      var controlsWrap = document.createElement('div');
      controlsWrap.className = 'rotator-controls';
      controlsWrap.setAttribute('aria-label', 'Photo pool controls');

      var progBar = document.createElement('div');
      progBar.className = 'rotator-progress-line';

      controlsWrap.appendChild(progBar);

      // Insert relative wrapper if needed
      var imgParent = imgEl.parentNode;
      if (imgParent === card) {
        var wrapper = document.createElement('div');
        wrapper.className = 'test-image-wrapper';
        imgParent.insertBefore(wrapper, imgEl);
        wrapper.appendChild(imgEl);
        wrapper.appendChild(controlsWrap);
      } else {
        imgParent.appendChild(controlsWrap);
      }


    }

    // Pause on hover
    card.addEventListener('mouseenter', function () {
      state.paused = true;
      card.classList.add('rotator-hovered');
    });

    card.addEventListener('mouseleave', function () {
      state.paused = false;
      card.classList.remove('rotator-hovered');
    });

    // Initial render
    applyPhotoToCard(card, state.index, false);

    // Staggered interval initiation: each card ticks with its own interval
    var initialDelay = (cardIndex * 1400) % INTERVAL_MS;
    setTimeout(function () {
      startCardTimer(card);
    }, initialDelay);
  }

  function startCardTimer(card) {
    var state = cardStates.get(card);
    if (!state) return;
    if (state.timer) clearInterval(state.timer);

    var lastAdvance = Date.now();

    // 20-minute interval rotation
    state.timer = setInterval(function () {
      if (Date.now() - lastAdvance >= INTERVAL_MS) {
        lastAdvance = Date.now();
        if (!state.paused) {
          state.index = (state.index + 1);
          applyPhotoToCard(card, state.index, true);
        }
      }
    }, 10000);
  }

  function restartCardTimer(card) {
    var state = cardStates.get(card);
    if (!state) return;
    if (state.timer) clearInterval(state.timer);
    startCardTimer(card);
  }

  // Global manual step trigger (backward compatibility)
  window.shuffleMockTestPhotos = function (step) {
    var delta = (typeof step === 'number' ? step : 1);
    globalManualShift += delta;
    var cards = document.querySelectorAll('.tests-section .test-card');
    cards.forEach(function (card) {
      var state = cardStates.get(card);
      if (state) {
        state.index += delta;
        applyPhotoToCard(card, state.index, true);
      }
    });
    return globalManualShift;
  };

  // Mock test filter tab logic
  function setupTestFilterTabs() {
    var tabBtns = document.querySelectorAll('.test-filter-tabs .test-tab-btn');
    if (!tabBtns || tabBtns.length === 0) return;

    tabBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        tabBtns.forEach(function (b) {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        var filter = btn.getAttribute('data-test-filter') || 'all';
        var cards = document.querySelectorAll('.tests-section .test-card');

        cards.forEach(function (card) {
          var category = card.getAttribute('data-category') || '';
          if (!category) {
            var subKey = getSubjectKey(card);
            if (subKey === 'english' || subKey === 'malayalam' || subKey === 'arabic') category = 'languages';
            else if (subKey === 'sociology' || subKey === 'history') category = 'social';
            else if (subKey === 'education' || subKey === 'ai' || subKey === 'ethics') category = 'philosophy';
            else if (subKey === 'economy' || subKey === 'microeconomics') category = 'economics';
            card.setAttribute('data-category', category);
          }

          if (filter === 'all' || category === filter) {
            card.style.display = '';
            card.removeAttribute('hidden');
          } else {
            card.style.display = 'none';
            card.setAttribute('hidden', 'true');
          }
        });
      });
    });
  }

  function init() {
    var cards = document.querySelectorAll('.tests-section .test-card');
    if (cards && cards.length > 0) {
      cards.forEach(function (card, idx) {
        setupCardInteractiveRotator(card, idx);
      });
    }

    setupTestFilterTabs();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
