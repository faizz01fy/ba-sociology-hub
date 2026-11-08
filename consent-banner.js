/**
 * Academic Hub - Certified GDPR / Regional Consent & Basic Consent Mode Controller
 * Compliant with Google AdSense, IAB TCF requirements, and ePrivacy Directive.
 */
(function() {
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;

  const isEurope = typeof window.HUB_IS_EUROPE !== 'undefined' ? window.HUB_IS_EUROPE : false;
  const CONSENT_KEY = 'hub_consent_state_v1';

  function isAdExemptPath() {
    var p = location.pathname.toLowerCase();
    if (/^\/(?:privacy-policy|terms|disclaimer|contact|about|study-guide-reader|voice-explanation|voice|econ_voice)/i.test(p)) {
      return true;
    }
    if (/test|mock/i.test(p)) {
      return true;
    }
    return false;
  }

  function loadServices() {
    if (window._hubServicesLoaded) return;
    window._hubServicesLoaded = true;

    // 1. Google Analytics (GA4)
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

    // 2. Google AdSense (on monetized content pages only, if not already present in head)
    try {
      if (!isAdExemptPath() && !document.querySelector('script[src*="pagead2.googlesyndication.com"]')) {
        var adScript = document.createElement('script');
        adScript.async = true;
        adScript.crossOrigin = 'anonymous';
        adScript.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6526381938888583';
        document.head.appendChild(adScript);
      }
    } catch(e) {}
  }

  function showModal() {
    var modal = document.getElementById('hub-consent-modal');
    if (modal) {
      modal.classList.remove('hub-hidden');
      modal.style.display = 'block';
    }
  }

  function hideModal() {
    var modal = document.getElementById('hub-consent-modal');
    if (modal) {
      modal.classList.add('hub-hidden');
      modal.style.display = 'none';
    }
  }

  if (!isEurope) {
    // Non-European visitors (India, US, etc.): Immediate grant, zero modal disruption
    gtag('consent', 'default', {
      'analytics_storage': 'granted',
      'ad_storage': 'granted',
      'ad_user_data': 'granted',
      'ad_personalization': 'granted'
    });
    loadServices();
    return;
  }

  // European visitors & preview test mode (?fc=alwaysshow, ?gl=EEA, etc.): Basic Consent Mode
  gtag('consent', 'default', {
    'analytics_storage': 'denied',
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'wait_for_update': 500
  });

  window.hubApplyConsent = function(granted) {
    try {
      if (granted) {
        localStorage.setItem(CONSENT_KEY, 'granted');
        gtag('consent', 'update', {
          'analytics_storage': 'granted',
          'ad_storage': 'granted',
          'ad_user_data': 'granted',
          'ad_personalization': 'granted'
        });
        loadServices();
      } else {
        localStorage.setItem(CONSENT_KEY, 'denied');
        gtag('consent', 'update', {
          'analytics_storage': 'denied',
          'ad_storage': 'denied',
          'ad_user_data': 'denied',
          'ad_personalization': 'denied'
        });
      }
    } catch(e) {}
    hideModal();
  };

  window.hubOpenConsent = function() {
    showModal();
  };

  function initConsent() {
    var saved = null;
    try {
      saved = localStorage.getItem(CONSENT_KEY);
    } catch(e) {}

    if (saved === 'granted') {
      hubApplyConsent(true);
    } else if (saved === 'denied') {
      hubApplyConsent(false);
    } else {
      // First-time European visitor or Google preview URL: show modal on page load!
      showModal();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initConsent);
  } else {
    initConsent();
  }
})();
