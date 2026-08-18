declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const CONVERSION_ID = '18386439505';
const CONVERSION_LABEL = 'SiiYCKaL5-McENGaq79E';

export function gtag_report_conversion(url?: string) {
  const callback = () => {
    if (typeof url !== 'undefined') {
      window.location.href = url;
    }
  };

  const gtag = ensureGtag();
  if (gtag) {
    gtag('event', 'conversion', {
      send_to: `AW-${CONVERSION_ID}/${CONVERSION_LABEL}`,
      value: 1.0,
      currency: 'MAD',
      event_callback: callback,
    });
    return false;
  }

  callback();
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
  params?: Record<string, string | number | boolean | undefined>
) {
  const gtag = ensureGtag();
  if (!gtag) return;

  gtag('event', eventName, params ?? {});
}

/**
 * Track contact conversion with callback support
 * When callback is provided, Google will call it after conversion event is recorded
 * If gtag is not available, callback fires immediately
 */
export function trackContactConversion(
  type: 'whatsapp' | 'phone',
  onConversionSent?: () => void
) {
  if (typeof window === 'undefined') {
    onConversionSent?.();
    return;
  }

  const gtag = ensureGtag();
  const params: Record<string, unknown> = {
    send_to: `AW-${CONVERSION_ID}/${CONVERSION_LABEL}`,
    value: 1.0,
    currency: 'MAD',
    contact_type: type,
  };

  if (onConversionSent) {
    params.event_callback = onConversionSent;
  }

  if (gtag) {
    gtag('event', 'conversion', params);
  } else {
    window.dataLayer?.push({
      event: 'conversion',
      ...params,
    });
  }

  if (onConversionSent) {
    setTimeout(onConversionSent, 2000);
  }
}

export function trackContactClick(type: 'whatsapp' | 'phone') {
  trackContactConversion(type);
}
