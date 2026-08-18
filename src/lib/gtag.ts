declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackGoogleAdsEvent(
  eventName: string,
  params?: Record<string, string | number | boolean | undefined>
) {
  if (typeof window === 'undefined') return;
  if (typeof window.gtag !== 'function') return;

  window.gtag('event', eventName, params ?? {});
}

export function trackContactClick(type: 'whatsapp' | 'phone') {
  trackGoogleAdsEvent('contact_click', {
    contact_type: type,
    page_location: window.location.pathname,
  });
}
