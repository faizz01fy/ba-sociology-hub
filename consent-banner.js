/**
 * Academic Hub - Official AdSense & Google-Certified CMP Integration
 * Basic Consent Mode for GA4 and Google's IAB TCF consent signal
 */
(function() {
  // Google AdSense CMP Requirement: Privacy policy must be 100% free of scripts requiring consent
  if (typeof location !== 'undefined' && /^\/privacy-policy(?:\.html)?$/i.test(location.pathname)) {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;

  const isEurope = typeof window.HUB_IS_EUROPE !== 'undefined' ? window.HUB_IS_EUROPE : false;

  function loadGA4() {
    if (window._hubGA4Loaded) return;
    window._hubGA4Loaded = true;
    try {
      if (!document.querySelector('script[src*="googletagmanager.com/gtag/js"]')) {
        var gaScript = document.createElement('script');
        gaScript.async = true;
        gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-5WRBVFQK55';
        document.head.appendChild(gaScript);
        gtag('js', new Date());
        gtag('config', 'G-5WRBVFQK55');
      }
    } catch(e) {}
  }

  // Non-European visitors (India, Middle East, US, etc.): Immediate grant, zero delay
  if (!isEurope) {
    gtag('consent', 'default', {
      'analytics_storage': 'granted',
      'ad_storage': 'granted',
      'ad_user_data': 'granted',
      'ad_personalization': 'granted'
    });
    loadGA4();
    return;
  }

  // Keep GA4 off in consent-required regions until it has its own consent integration.
  gtag('consent', 'default', {
    'analytics_storage': 'denied',
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'wait_for_update': 500
  });

  (window.adsbygoogle = window.adsbygoogle || []).pauseAdRequests = 1;
  let listening = false;

  function connectCMP() {
    if (!listening && typeof window.__tcfapi === 'function') {
      listening = true;
      window.__tcfapi('addEventListener', 2, function(tcData, success) {
        if (!success || tcData?.cmpStatus !== 'loaded' || tcData.gdprApplies !== true ||
            !tcData.tcString || !['useractioncomplete', 'tcloaded'].includes(tcData.eventStatus)) return;

        const purposes = tcData.purpose?.consents;
        const allowsStorage = tcData.vendor?.consents?.[755] === true && purposes?.[1] === true;
        const ads = window.adsbygoogle = window.adsbygoogle || [];
        ads.pauseAdRequests = 1;
        if (allowsStorage) {
          ads.requestNonPersonalizedAds = purposes[3] === true && purposes[4] === true ? 0 : 1;
          ads.pauseAdRequests = 0;
        }
      });
    }

    const button = document.getElementById('hub-consent-reopen');
    if (!button || typeof window.googlefc?.showRevocationMessage !== 'function') return false;
    if (button.hidden) {
      button.addEventListener('click', function() {
        (window.adsbygoogle = window.adsbygoogle || []).pauseAdRequests = 1;
        window.googlefc.showRevocationMessage();
      });
      button.hidden = false;
    }
    return listening;
  }

  if (!connectCMP()) {
    let checks = 0;
    const interval = setInterval(function() {
      if (connectCMP() || ++checks >= 150) {
        clearInterval(interval);
      }
    }, 200);
  }
})();
