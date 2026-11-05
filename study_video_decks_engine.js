/**
 * Academic Hub - 3-Card Rotating Video Decks Engine
 * 100% AdSense Safe (Pure static thumbnails, zero autoplay, zero iframe overhead)
 */
(function() {
  'use strict';

  function initVideoDecks() {
    var data = window.ACADEMIC_HUB_VIDEO_DECKS;
    if (!data) return;

    var streams = {
      1: { list: data.sociology_history || [], idx: -1, elId: 'video-card-stream-1' },
      2: { list: data.economics_micro || [], idx: -1, elId: 'video-card-stream-2' },
      3: { list: data.ethics_philosophy || [], idx: -1, elId: 'video-card-stream-3' }
    };

    function getRandomIndex(list, currentIdx) {
      if (!list || list.length <= 1) return 0;
      var newIdx = Math.floor(Math.random() * list.length);
      while (newIdx === currentIdx) {
        newIdx = Math.floor(Math.random() * list.length);
      }
      return newIdx;
    }

    function renderCard(streamNum, animate) {
      var s = streams[streamNum];
      if (!s || !s.list.length) return;

      var cardEl = document.getElementById(s.elId);
      if (!cardEl) return;

      var item = s.list[s.idx];
      if (!item) return;

      var thumbImg = cardEl.querySelector('.video-deck-thumb');
      var modTag = cardEl.querySelector('.video-deck-module');
      var titleMal = cardEl.querySelector('.video-deck-title-mal');
      var titleEn = cardEl.querySelector('.video-deck-title-en');
      var watchLink = cardEl.querySelector('.video-deck-watch-link');
      var thumbContainer = cardEl.querySelector('.video-deck-thumb-wrap');

      function applyData() {
        if (thumbImg) {
          thumbImg.src = item.thumb;
          thumbImg.alt = item.titleEn || 'Lecture Video';
        }
        if (modTag) modTag.textContent = item.module || '';
        if (titleMal) titleMal.textContent = item.titleMal || '';
        if (titleEn) titleEn.textContent = item.titleEn || '';
        if (watchLink) watchLink.href = item.url;
        if (thumbContainer) {
          thumbContainer.onclick = function() {
            window.open(item.url, '_blank', 'noopener,noreferrer');
          };
        }
      }

      if (animate) {
        cardEl.style.transition = 'opacity 0.22s ease';
        cardEl.style.opacity = '0.35';
        setTimeout(function() {
          applyData();
          cardEl.style.opacity = '1';
        }, 220);
      } else {
        applyData();
      }
    }

    function shuffleStream(num, animate) {
      var s = streams[num];
      if (!s || !s.list.length) return;
      s.idx = getRandomIndex(s.list, s.idx);
      renderCard(num, animate);
    }

    function shuffleAll(animate) {
      shuffleStream(1, animate);
      shuffleStream(2, animate);
      shuffleStream(3, animate);
    }

    // Initialize all 3 streams with random picks
    shuffleAll(false);

    // Bind Stream 1 button
    var btn1 = document.getElementById('btn-shuffle-stream-1');
    if (btn1) {
      btn1.addEventListener('click', function(e) {
        e.preventDefault();
        shuffleStream(1, true);
      });
    }

    // Bind Stream 2 button
    var btn2 = document.getElementById('btn-shuffle-stream-2');
    if (btn2) {
      btn2.addEventListener('click', function(e) {
        e.preventDefault();
        shuffleStream(2, true);
      });
    }

    // Bind Stream 3 button
    var btn3 = document.getElementById('btn-shuffle-stream-3');
    if (btn3) {
      btn3.addEventListener('click', function(e) {
        e.preventDefault();
        shuffleStream(3, true);
      });
    }

    // Bind Global Shuffle button
    var btnAll = document.getElementById('btn-shuffle-all-streams');
    if (btnAll) {
      btnAll.addEventListener('click', function(e) {
        e.preventDefault();
        shuffleAll(true);
      });
    }

    // Optional gentle idle auto-rotation (rotates one card every 16 seconds if user isn't hovering)
    var currentRotateStream = 1;
    var container = document.getElementById('study-lounge');
    var isHovered = false;

    if (container) {
      container.addEventListener('mouseenter', function() { isHovered = true; });
      container.addEventListener('mouseleave', function() { isHovered = false; });
    }

    setInterval(function() {
      if (!isHovered) {
        shuffleStream(currentRotateStream, true);
        currentRotateStream = (currentRotateStream % 3) + 1;
      }
    }, 16000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initVideoDecks);
  } else {
    initVideoDecks();
  }
})();
