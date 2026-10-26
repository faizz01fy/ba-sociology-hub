/**
 * Mock Test Panel - 20-Minute Dynamic Related Picture Rotator
 * Academic Hub (Calicut University)
 *
 * Preserves the original card layout & aesthetic completely.
 * Automatically updates high-yield, subject-relevant Unsplash photography
 * across all mock test cards on a 20-minute synchronized interval
 * with smooth cross-fade transitions.
 */

(function () {
  'use strict';

  // 20-minute rotation interval in milliseconds
  var INTERVAL_MS = 20 * 60 * 1000;

  // Curated pools of verified high-resolution, subject-specific Unsplash photography
  var SUBJECT_PHOTO_POOLS = {
    history: [
      { id: '1695964744922-c7d01b4761cb', desc: 'Padmanabhapuram Palace traditional Kerala timber architecture' },
      { id: '1599940824399-b87987ceb72a', desc: 'Ancient stone carving and prehistoric archaeology cave' },
      { id: '1544620347-c4fd4a3d5957', desc: 'Ancient monolithic stone monuments and prehistoric megaliths' },
      { id: '1582555172866-f73bb12a2ab3', desc: 'Archaeological artefacts and ancient heritage pottery' },
      { id: '1507525428034-b723cf961d3e', desc: 'Historic maritime trade coast and ancient harbor waves' },
      { id: '1602216056096-3b40cc0c9944', desc: 'Serene Kerala backwaters and historic trade routes' },
      { id: '1514565131-fce0801e5785', desc: 'Ancient stone pillar architecture and historic temple sanctum' },
      { id: '1584551246679-0daf3d275d0f', desc: 'Traditional Kerala temple lamp and heritage brass craft' }
    ],

    english: [
      { id: '1456513080510-7bf3a84b82f8', desc: 'Books and study materials for English' },
      { id: '1457369804613-52c61a468e7d', desc: 'Vintage library shelves and open classical texts' },
      { id: '1497633762265-9d179a990aa6', desc: 'Stacks of academic books with golden sunbeams' },
      { id: '1512820790803-83ca734da794', desc: 'Aesthetic open book with soft page depth' },
      { id: '1474932430478-367dbb6832c1', desc: 'Vintage literary typewriter and manuscript notes' },
      { id: '1495446815901-a7297e633e8d', desc: 'Majestic college library hall with historical volumes' },
      { id: '1524995997946-a1c2e315a42f', desc: 'Grand university study archive with study lanterns' },
      { id: '1463320726281-696a485928c7', desc: 'Scholarly reading desk with fountain pen and notes' }
    ],
    sociology: [
      { id: '1529156069898-49953e39b3ac', desc: 'People gathered together representing society' },
      { id: '1511632765486-a01980e01a18', desc: 'People in social harmony gathering outdoors' },
      { id: '1582213782179-e0d53f98f2ca', desc: 'Unified hands in solidarity representing social cooperation' },
      { id: '1528605248644-14dd04022da1', desc: 'Multicultural community conversation and bonding' },
      { id: '1531206715517-5c0ba140b2b8', desc: 'Social science university seminar and dialogue' },
      { id: '1491438590914-bc09fcaaf77a', desc: 'Dynamic human interaction in urban social spaces' },
      { id: '1517486808906-6ca8b3f04846', desc: 'Group of scholars studying sociological dynamics' },
      { id: '1573496359142-b8d87734a5a2', desc: 'Social institutions, culture and collective behavior' }
    ],
    education: [
      { id: '1503676260728-1c00da094a0b', desc: 'Student learning for philosophy of education' },
      { id: '1524178232363-1fb2b075b655', desc: 'Inspiring lecturer mentoring in university lecture hall' },
      { id: '1427504494785-3a9ca7044f45', desc: 'Active collaborative learning and scholarly debate' },
      { id: '1509062522246-3755977927d7', desc: 'Pedagogical philosophy and classroom enlightenment' },
      { id: '1498243691581-b145c3f54a5a', desc: 'Classical university campus pathway of academic wisdom' },
      { id: '1577896851231-70ef18881754', desc: 'Chalkboard ideas and cognitive development theories' },
      { id: '1516321318423-f06f85e504b3', desc: 'Interactive educational workshop and creative thinking' },
      { id: '1523240795612-9a054b0db644', desc: 'Dedicated students pursuing academic excellence' }
    ],
    ai: [
      { id: '1677442136019-21780ecad995', desc: 'Artificial intelligence and digital technology' },
      { id: '1618005182384-a83a8bd57fbe', desc: 'Luminous cyan neural wave abstract cognitive intelligence' },
      { id: '1620712943543-bcc4688e7485', desc: 'Futuristic AI digital consciousness and cybernetic mind' },
      { id: '1635070041078-e363dbe005cb', desc: 'Quantum computing algorithmic data vortex' },
      { id: '1531746790731-6c087fecd65a', desc: 'Humanoid robot and human handshake philosophical nexus' },
      { id: '1526374965328-7f61d4dc18c5', desc: 'Matrix digital cyber code stream and machine logic' },
      { id: '1558494949-ef010cbdcc31', desc: 'Cloud datacenter glowing neon cyan representing AI compute' }
    ],
    ethics: [
      { id: '1521790797524-b2497295b8a0', desc: 'Handshake representing ethical conduct and trust' },
      { id: '1589829545856-d10d557cf95f', desc: 'Golden scales of justice for moral philosophy' },
      { id: '1505664194779-8beaceb93744', desc: 'Neoclassical courthouse pillars representing virtue ethics' },
      { id: '1506126613408-eca07ce68773', desc: 'Zen balanced stones representing deontological harmony' },
      { id: '1479839672679-a46483c0e7c8', desc: 'Classical marble philosopher statue contemplating virtue' },
      { id: '1534447677768-be436bb09401', desc: 'Cosmic moral compass and ethical conscience' },
      { id: '1516251193007-45ef944ab0c6', desc: 'Collective hands building a fair and just society' }
    ],
    economy: [
      { id: '1460925895917-afdab827c52f', desc: 'Economic data and charts for Indian economy' },
      { id: '1582213782179-e0d53f98f2ca', desc: 'Indian rural development and collective micro enterprise' },
      { id: '1532375810709-75b1da00537c', desc: 'India Gate and national economic infrastructure' },
      { id: '1579621970563-ebec7560ff3e', desc: 'Indian investment growth and banking capital' },
      { id: '1526304640581-d334cdbbf45e', desc: 'Currency notes and Indian economic valuation' },
      { id: '1563986768609-322da13575f3', desc: 'Financial market exchange and industrial GDP metrics' },
      { id: '1542601906990-b4d3fb778b09', desc: 'Agrarian reform, food security and rural economics' }
    ],
    microeconomics: [
      { id: '1644871913429-9ed7696180cc', desc: 'Coins representing microeconomics and consumer choice' },
      { id: '1590283603385-17ffb3a7f29f', desc: 'Market demand and supply equilibrium candlestick curves' },
      { id: '1559526324-4b87b5e36e44', desc: 'Consumer utility and market shopping dynamics' },
      { id: '1611974789855-9c2a0a7236a3', desc: 'Stock market trade analytics and marginal pricing' },
      { id: '1607604276583-eef5d076aa5f', desc: 'Antique brass balance scale measuring economic utility' },
      { id: '1526304640581-d334cdbbf45e', desc: 'Consumer choice and monetary exchange equilibrium' },
      { id: '1535320903710-d993d3d77d29', desc: 'Retail behavior, consumer demand and elasticities' },
      { id: '1486406146926-c627a92ad1ab', desc: 'Competitive market enterprise and firm structures' }
    ],
    malayalam: [
      { id: '1602216056096-3b40cc0c9944', desc: 'Kerala backwaters and serene landscape of Malayalam literature' },
      { id: '1544716278-ca5e3f4abd8c', desc: 'Classic Malayalam fiction and literary study' }
    ]
  };

  function buildUnsplashUrl(photoId) {
    return 'https://images.unsplash.com/photo-' + photoId + '?auto=format&fit=crop&w=480&q=70';
  }

  var manualShift = 0;
  var lastIntervalSlot = -1;

  function getCurrentIntervalIndex() {
    var now = Date.now();
    var baseSlot = Math.floor(now / INTERVAL_MS);
    return baseSlot + manualShift;
  }

  function updateCardImages() {
    var intervalIndex = getCurrentIntervalIndex();
    var cards = document.querySelectorAll('.tests-section .test-card');
    if (!cards || cards.length === 0) return;

    cards.forEach(function (card) {
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
        else if (text.indexOf('history') !== -1 || text.indexOf('keralam') !== -1) subjectKey = 'history';
        if (subjectKey) card.setAttribute('data-subject-key', subjectKey);
      }

      var pool = SUBJECT_PHOTO_POOLS[subjectKey];
      if (!pool || pool.length === 0) return;

      var photoObj = pool[Math.abs(intervalIndex) % pool.length];
      var newUrl = buildUnsplashUrl(photoObj.id);

      var imgEl = card.querySelector('.test-image');
      if (imgEl && imgEl.src !== newUrl) {
        var bounds = imgEl.getBoundingClientRect();
        var nearViewport = bounds.bottom >= -150 && bounds.top <= window.innerHeight + 150;
        imgEl.loading = 'lazy';
        imgEl.decoding = 'async';
        imgEl.alt = photoObj.desc;

        if (nearViewport) {
          imgEl.style.transition = 'opacity 0.4s ease';
          imgEl.style.opacity = '0.35';
          imgEl.onload = function () {
            imgEl.style.opacity = '1';
            imgEl.onload = null;
            imgEl.onerror = null;
          };
          imgEl.onerror = function () {
            imgEl.style.opacity = '1';
            if (pool && pool[0] && imgEl.src !== buildUnsplashUrl(pool[0].id)) {
              imgEl.src = buildUnsplashUrl(pool[0].id);
            }
            imgEl.onload = null;
            imgEl.onerror = null;
          };
        } else {
          imgEl.style.opacity = '1';
          imgEl.onerror = function () {
            if (pool && pool[0] && imgEl.src !== buildUnsplashUrl(pool[0].id)) {
              imgEl.src = buildUnsplashUrl(pool[0].id);
            }
            imgEl.onerror = null;
          };
        }

        // Let the real, lazy image load in place instead of preloading every card.
        imgEl.src = newUrl;
      }
    });
  }

  // Expose global helper for automated testing or manual rotation
  window.shuffleMockTestPhotos = function (step) {
    manualShift += (typeof step === 'number' ? step : 1);
    updateCardImages();
    return getCurrentIntervalIndex();
  };

  function init() {
    updateCardImages();
    lastIntervalSlot = getCurrentIntervalIndex();

    // Check periodically to rotate photos when 20 minutes elapse
    setInterval(function () {
      var currentSlot = getCurrentIntervalIndex();
      if (lastIntervalSlot !== -1 && currentSlot !== lastIntervalSlot) {
        updateCardImages();
      }
      lastIntervalSlot = currentSlot;
    }, 15000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
