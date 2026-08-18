declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const CONVERSION_ID = '18386439505';
const CONVERSION_LABEL = 'In46CJzykuMcENGaq79E';

export function trackGoogleAdsEvent(
  eventName: string,
  params?: Record<string, string | number | boolean | undefined>
) {
  if (typeof window === 'undefined') return;
  if (typeof window.gtag !== 'function') return;

  window.gtag('event', eventName, params ?? {});
}

export function trackContactConversion(type: 'whatsapp' | 'phone') {
  if (typeof window === 'undefined') return;
  if (typeof window.gtag !== 'function') return;

  // Fire the Google Ads conversion event with the correct send_to format
  window.gtag('event', 'conversion', {
    send_to: `AW-${CONVERSION_ID}/${CONVERSION_LABEL}`,
    value: 1.0,
    currency: 'MAD',
    contact_type: type,
  });
}

export function trackContactClick(type: 'whatsapp' | 'phone') {
  trackContactConversion(type);
}
