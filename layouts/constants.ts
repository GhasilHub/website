export const CONTACT_INFO = {
  phone: '+96896747611',
  email: 'ghasilhuberp@gmail.com',
  whatsapp: '+96897212207',
} as const;

export const EXTERNAL_LINKS = {
  admin: process.env.NEXT_PUBLIC_BACK_OFFICE_URL || '#',
} as const;

export const NAVIGATION_SECTIONS = {
  features: '#features',
  pricing: '#pricing',
  faqs: '#faqs',
} as const;
