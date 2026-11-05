/**
 * Academic Hub - 3-Card Rotating Video Decks Engine
 * 100% On-Platform: Links directly to voice-explanation.html with embedded video & audio
 * 100% AdSense Safe (Pure static thumbnails on index.html, zero autoplay overhead)
 */
(function() {
  'use strict';

  function initVideoDecks() {
    var data = window.ACADEMIC_HUB_VIDEO_DECKS;
    if (!data) return;

    var streams = {
      1: { list: (data.sociology_history || []).slice(), idx: -1, elId: 'video-card-stream-1' },
      2: { list: (data.economics_micro || []).slice(), idx: -1, elId: 'video-card-stream-2' },
      3: { list: (data.ethics_philosophy || []).slice(), idx: -1, elId: 'video-card-stream-3' }
    };

    function getRandomIndex(list, currentIdx) {
      if (!list || list.length === 0) return -1;
      if (list.length === 1) return 0;
      var newIdx = Math.floor(Math.random() * list.length);
      var tries = 0;
      while (newIdx === currentIdx && tries < 10) {
        newIdx = Math.floor(Math.random() * list.length);
        tries++;
      }
      return newIdx;
    }

    function renderCard(streamNum, animate) {
      var s = streams[streamNum];
      if (!s || !s.list || !s.list.length) return;

      var cardEl = document.getElementById(s.elId);
      if (!cardEl) return;

      if (s.idx < 0 || s.idx >= s.list.length) {
        s.idx = getRandomIndex(s.list, -1);
      }

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
          thumbImg.onerror = function() {
            s.list.splice(s.idx, 1);
            if (s.list.length > 0) {
              s.idx = getRandomIndex(s.list, -1);
              renderCard(streamNum, false);
            }
          };

          thumbImg.onload = function() {
            if (thumbImg.naturalWidth === 120 && thumbImg.naturalHeight === 90) {
              s.list.splice(s.idx, 1);
              if (s.list.length > 0) {
                s.idx = getRandomIndex(s.list, -1);
                renderCard(streamNum, false);
              }
            }
          };

          thumbImg.src = item.thumb;
          thumbImg.alt = item.titleEn || 'Lecture Video';
        }

        if (modTag) modTag.textContent = item.module || '';
        if (titleMal) titleMal.textContent = item.titleMal || '';
        if (titleEn) titleEn.textContent = item.titleEn || '';
        if (watchLink) {
          watchLink.href = item.url;
        }
        if (thumbContainer) {
          thumbContainer.onclick = function() {
            window.location.href = item.url;
          };
        }
      }

      if (animate) {
        cardEl.style.transition = 'opacity 0.2s ease';
        cardEl.style.opacity = '0.35';
        setTimeout(function() {
          applyData();
          cardEl.style.opacity = '1';
        }, 200);
      } else {
        applyData();
      }
    }

    function shuffleStream(num, animate) {
      var s = streams[num];
      if (!s || !s.list || !s.list.length) return;
      s.idx = getRandomIndex(s.list, s.idx);
      renderCard(num, animate);
    }

    function shuffleAll(animate) {
      shuffleStream(1, animate);
      shuffleStream(2, animate);
      shuffleStream(3, animate);
    }

    shuffleAll(false);

    var btn1 = document.getElementById('btn-shuffle-stream-1');
    if (btn1) {
      btn1.addEventListener('click', function(e) {
        e.preventDefault();
        shuffleStream(1, true);
      });
    }

    var btn2 = document.getElementById('btn-shuffle-stream-2');
    if (btn2) {
      btn2.addEventListener('click', function(e) {
        e.preventDefault();
        shuffleStream(2, true);
      });
    }

    var btn3 = document.getElementById('btn-shuffle-stream-3');
    if (btn3) {
      btn3.addEventListener('click', function(e) {
        e.preventDefault();
        shuffleStream(3, true);
      });
    }

    var btnAll = document.getElementById('btn-shuffle-all-streams');
    if (btnAll) {
      btnAll.addEventListener('click', function(e) {
        e.preventDefault();
        shuffleAll(true);
      });
    }

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
