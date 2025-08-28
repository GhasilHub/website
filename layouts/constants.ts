export const CONTACT_INFO = {
  phoneDisplay: '+968 9674 7611',
  phone: '+96896747611',
  email: 'ghasilhuberp@gmail.com',
  whatsappDisplay: '+968 9721 2207',
  whatsapp: '+96897212207',
} as const;

export const EXTERNAL_LINKS = {
  admin: process.env.NEXT_PUBLIC_ADMIN_URL || '#',
} as const;

export const NAVIGATION_SECTIONS = {
  features: '#features',
  pricing: '#pricing',
  faqs: '#faqs',
} as const;
