declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function gtag_report_conversion(url?: string) {
  sendContactConversion(
    url && typeof window !== 'undefined'
      ? () => {
          window.location.href = url;
        }
      : undefined,
  );
  return false;
}

const contactConversionId = 'AW-18514083709/N3TqCNWB7qMdEP3-mfxE';
const contactConversionTimeout = 1000;

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

function sendContactConversion(onConversionSent?: () => void) {
  const gtag = ensureGtag();
  if (!gtag) {
    onConversionSent?.();
    return;
  }

  let timeout: number | undefined;
  let hasCompleted = false;
  const complete = () => {
    if (hasCompleted) return;
    hasCompleted = true;
    if (timeout !== undefined) window.clearTimeout(timeout);
    onConversionSent?.();
  };

  if (onConversionSent) {
    timeout = window.setTimeout(complete, contactConversionTimeout);
  }

  gtag('event', 'conversion', {
    send_to: contactConversionId,
    value: 1.0,
    currency: 'MAD',
    ...(onConversionSent
      ? { event_callback: complete, event_timeout: contactConversionTimeout }
      : {}),
  });
}

export function trackContactConversion(type: 'whatsapp' | 'phone', url: string) {
  if (typeof window === 'undefined') return;

  if (type === 'whatsapp') {
    window.open(url, '_blank', 'noopener,noreferrer');
    sendContactConversion();
    return;
  }

  sendContactConversion(() => {
    window.location.href = url;
  });
}
