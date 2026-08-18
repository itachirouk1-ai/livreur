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

  if (typeof window.gtag !== 'function') {
    onConversionSent?.();
    return;
  }

  const params: Record<string, unknown> = {
    send_to: `AW-${CONVERSION_ID}/${CONVERSION_LABEL}`,
    value: 1.0,
    currency: 'MAD',
    contact_type: type,
  };

  // Add event_callback if provided
  if (onConversionSent) {
    params.event_callback = onConversionSent;
  }

  // Fire the Google Ads conversion event with the correct send_to format
  window.gtag('event', 'conversion', params);

  // Fallback timeout if callback doesn't fire within 2 seconds
  if (onConversionSent) {
    setTimeout(onConversionSent, 2000);
  }
}

export function trackContactClick(type: 'whatsapp' | 'phone') {
  trackContactConversion(type);
}
