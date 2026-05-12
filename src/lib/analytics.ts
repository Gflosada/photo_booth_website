type EventPayload = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

function track(eventName: string, payload: EventPayload = {}) {
  window.dataLayer?.push({ event: eventName, ...payload });
  window.gtag?.('event', eventName, payload);
  window.fbq?.('trackCustom', eventName, payload);
  window.clarity?.('event', eventName);
}

export const trackBookNowClick = (payload?: EventPayload) => track('book_now_click', payload);
export const trackQuoteClick = (payload?: EventPayload) => track('quote_click', payload);
export const trackPackageSelect = (packageId: string) => track('package_select', { packageId });
export const trackGalleryView = (category: string) => track('gallery_view', { category });
export const trackFormStart = (formName: string) => track('form_start', { formName });
export const trackFormSubmit = (formName: string) => track('form_submit', { formName });
export const trackCheckoutStart = (packageId?: string) => track('checkout_start', { packageId });
export const trackPhoneClick = () => track('phone_click');
export const trackEmailClick = () => track('email_click');
export const trackContactSubmit = () => track('contact_submit');
