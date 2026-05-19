export const SITE_NAME = 'ORLANDO PHOTO BOOTH EVENTS';
export const SITE_URL = import.meta.env.VITE_PUBLIC_SITE_URL || 'https://photo-booth-website-eight.vercel.app';
export const BUSINESS_PHONE = import.meta.env.VITE_PUBLIC_BUSINESS_PHONE || '(407) 555-2668';
export const BUSINESS_EMAIL = import.meta.env.VITE_PUBLIC_BUSINESS_EMAIL || 'hello@orlandophotoboothevents.com';
export const BUSINESS_AREA = 'Serving Orlando and Central Florida';

export const serviceAreas = [
  'Orlando',
  'Kissimmee',
  'Winter Park',
  'Lake Buena Vista',
  'Celebration',
  'Windermere',
  'Winter Garden',
  'Altamonte Springs',
  'Maitland',
  'Sanford',
];

export function absoluteUrl(path = '/') {
  return `${SITE_URL.replace(/\/$/, '')}${path.startsWith('/') ? path : `/${path}`}`;
}
