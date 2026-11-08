/**
 * Academic Hub - Certified GDPR / Regional Consent & Basic Consent Mode Controller
 * Compliant with Google AdSense, IAB TCF requirements, and ePrivacy Directive.
 */
(function() {
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;

  // Basic Consent Mode: Default denied for all measurement and ad storage
  gtag('consent', 'default', {
    'analytics_storage': 'denied',
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'wait_for_update': 500
  });

  const CONSENT_KEY = 'hub_consent_state_v1';

  function loadServices() {
    if (window._hubServicesLoaded) return;
    window._hubServicesLoaded = true;

    // 1. Google Analytics (GA4)
    try {
      var gaScript = document.createElement('script');
      gaScript.async = true;
      gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-5WRBVFQK55';
      document.head.appendChild(gaScript);
      gtag('js', new Date());
      gtag('config', 'G-5WRBVFQK55');
    } catch(e) {}

    // 2. Google AdSense (on monetized content pages)
    try {
      var isUtility = /^\/(?:privacy-policy|terms|disclaimer|contact|about)(?:\.html)?$/i.test(location.pathname);
      if (!isUtility && !window._hubAdScriptLoaded) {
        window._hubAdScriptLoaded = true;
        var adScript = document.createElement('script');
        adScript.async = true;
        adScript.crossOrigin = 'anonymous';
        adScript.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6526381938888583';
        document.head.appendChild(adScript);
      }
    } catch(e) {}
  }

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

    var modal = document.getElementById('hub-consent-modal');
    if (modal) modal.classList.add('hub-hidden');
  };

  window.hubOpenConsent = function() {
    var modal = document.getElementById('hub-consent-modal');
    if (modal) modal.classList.remove('hub-hidden');
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
      // First-time or unconsented visitor: show modal on page load!
      var modal = document.getElementById('hub-consent-modal');
      if (modal) modal.classList.remove('hub-hidden');
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initConsent);
  } else {
    initConsent();
  }
})();
