//@ts-nocheck
export const initializeGoogleAnalytics = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
  
    gtag('config', 'G-PMJ5Q8PEB5');
  };