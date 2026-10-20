declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function gtag_report_conversion(url?: string) {
  if (typeof url !== 'undefined' && typeof window !== 'undefined') {
    window.location.href = url;
  }
  return false;
}

function ensureGtag() {
  if (typeof window === 'undefined') return undefined;

  window.dataLayer = window.dataLayer || [];

  if (typeof window.gtag !== 'function') {
    window.gtag = function (...args: unknown[]) {
      window.dataLayer?.push(args);
    };
  }

  return window.gtag;
}

export function trackGoogleAdsEvent(
  eventName: string,
  params?: Record<string, string | number | boolean | undefined>,
) {
  const gtag = ensureGtag();
  if (!gtag) return;

  gtag('event', eventName, params ?? {});
}

export function trackContactConversion(_type: 'whatsapp' | 'phone', onConversionSent?: () => void) {
  onConversionSent?.();
}

export function trackContactClick(type: 'whatsapp' | 'phone') {
  trackContactConversion(type);
}
