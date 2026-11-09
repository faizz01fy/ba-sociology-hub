/**
 * Academic Hub - Official AdSense & Google-Certified CMP Integration
 * Basic Consent Mode for GA4 + Native IAB TCF v2.2 compliance via AdSense
 */
(function() {
  // Google AdSense CMP Requirement: Privacy policy must be 100% free of scripts requiring consent
  if (typeof location !== 'undefined' && /^\/privacy-policy(?:\.html)?$/i.test(location.pathname)) {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
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

  // European visitors & preview test mode: Basic Consent Mode (denied until explicit choice)
  gtag('consent', 'default', {
    'analytics_storage': 'denied',
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'wait_for_update': 500
  });

  function handleConsentUpdate(hasConsent) {
    if (hasConsent) {
      gtag('consent', 'update', {
        'analytics_storage': 'granted',
        'ad_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted'
      });
      loadGA4();
    } else {
      gtag('consent', 'update', {
        'analytics_storage': 'denied',
        'ad_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied'
      });
    }
  }

  // Connect to Google-certified CMP via standard IAB TCF v2.2 API
  function attachTCFListener() {
    if (typeof window.__tcfapi === 'function') {
      window.__tcfapi('addEventListener', 2.2, function(tcData, success) {
        if (success && tcData) {
          if (tcData.eventStatus === 'useractioncomplete' || tcData.eventStatus === 'tcloaded') {
            if (tcData.gdprApplies) {
              var hasConsent = !!(tcData.purpose && tcData.purpose.consents && tcData.purpose.consents[1]);
              handleConsentUpdate(hasConsent);
            } else {
              handleConsentUpdate(true);
            }
          }
        }
      });
      return true;
    }
    return false;
  }

  if (!attachTCFListener()) {
    var checkCount = 0;
    var tcfInterval = setInterval(function() {
      checkCount++;
      if (attachTCFListener() || checkCount > 50) {
        clearInterval(tcfInterval);
      }
    }, 200);
  }

  // Reopen Google's certified privacy settings message on demand
  window.hubOpenConsent = function() {
    if (window.googlefc && typeof window.googlefc.showRevocationMessage === 'function') {
      window.googlefc.showRevocationMessage();
    } else if (typeof window.__tcfapi === 'function') {
      window.__tcfapi('displayConsentUi', 2, function() {});
    }
  };
})();
