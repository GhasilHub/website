'use client';

import { memo, useMemo } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { CONTACT_INFO } from '@/layouts/constants';
import callIcon from '@/public/call-icon.svg';
import whatsappIcon from '@/public/whatsapp-icon.svg';
import emailIcon from '@/public/email-icon.svg';

// TypeScript interfaces
interface ContactMethod {
  id: string;
  label: string;
  href: string;
  icon: string | import('next/image').StaticImageData;
  alt: string;
  ariaLabel: string;
}

interface ContactMethodProps {
  method: ContactMethod;
  t: (key: string) => string;
}

// Static icon mapping
const CONTACT_ICONS = {
  call: { icon: callIcon, alt: 'Phone call icon' },
  whatsapp: { icon: whatsappIcon, alt: 'WhatsApp messenger icon' },
  email: { icon: emailIcon, alt: 'Email icon' },
} as const;

// Utility function to format phone numbers
const formatPhoneNumber = (phoneNumber: string): string => {
  // Remove any existing spaces and format as: +968 9674 7611
  const cleaned = phoneNumber.replace(/\s/g, '');
  if (cleaned.startsWith('+968') && cleaned.length === 12) {
    return `+968 ${cleaned.slice(4, 8)} ${cleaned.slice(8)}`;
  }
  return phoneNumber; // Return original if format doesn't match
};

// Memoized ContactMethod component
const ContactMethodItem = memo<ContactMethodProps>(function ContactMethodItem({
  method,
  t,
}) {
  return (
    <li className={`w-full flex justify-start sm:justify-center ${method.id === 'email' ? 'sm:col-span-2 xl:col-span-1' : ''}`}>
      <a
        href={method.href}
        target='_blank'
        rel='noopener noreferrer'
        className='group flex gap-3 sm:gap-3 md:gap-4 lg:gap-5 items-center justify-start transition-all duration-300 w-fit'
        aria-label={method.ariaLabel}
      >
        <div className='w-12 h-12 sm:w-14 sm:h-14 lg:w-[68px] lg:h-[68px] flex-shrink-0 flex justify-center items-center bg-[#00d4aa]/50 rounded-full p-3 group-hover:bg-[#00d4aa]/70 transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-blue-200/50'>
          <Image
            src={method.icon}
            alt={method.alt}
            width={20}
            height={20}
            className='w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 group-hover:brightness-110 transition-all duration-300'
            loading='lazy'
          />
        </div>
        <div className='flex flex-col gap-0.5 sm:gap-1 lg:gap-1 text-left min-w-0 flex-1'>
          <h5 className='text-text-primary text-sm sm:text-base lg:text-lg font-medium group-hover:text-[#00d4aa] transition-colors duration-300 whitespace-nowrap'>
            {t(method.label)}
          </h5>
          <p className='text-[#00d4aa] text-sm sm:text-base lg:text-lg font-medium group-hover:brightness-110 transition-all duration-300 break-all sm:break-normal sm:whitespace-nowrap'>
            {method.id === 'call'
              ? formatPhoneNumber(CONTACT_INFO.phone)
              : method.id === 'whatsapp'
              ? formatPhoneNumber(CONTACT_INFO.whatsapp)
              : CONTACT_INFO.email}
          </p>
        </div>
      </a>
    </li>
  );
});

function Contact() {
  const t = useTranslations('Contact');

  // Memoized contact methods data
  const contactMethods = useMemo<ContactMethod[]>(() => {
    return [
      {
        id: 'call',
        label: 'call',
        href: `tel:${CONTACT_INFO.phone}`,
        icon: CONTACT_ICONS.call.icon,
        alt: CONTACT_ICONS.call.alt,
        ariaLabel: `Call us at ${CONTACT_INFO.phone}`,
      },
      {
        id: 'whatsapp',
        label: 'whatsapp',
        href: `https://wa.me/${CONTACT_INFO.whatsapp}`,
        icon: CONTACT_ICONS.whatsapp.icon,
        alt: CONTACT_ICONS.whatsapp.alt,
        ariaLabel: `Contact us on WhatsApp at ${CONTACT_INFO.whatsapp}`,
      },
      {
        id: 'email',
        label: 'email',
        href: `mailto:${CONTACT_INFO.email}`,
        icon: CONTACT_ICONS.email.icon,
        alt: CONTACT_ICONS.email.alt,
        ariaLabel: `Send us an email at ${CONTACT_INFO.email}`,
      },
    ];
  }, []);

  return (
    <section
      id='contact'
      className='w-full flex justify-center bg-white py-12 sm:py-16 lg:py-20 section-anchor'
      aria-label='Contact us section'
    >
      <div className='max-w-content w-full px-4 sm:px-6 md:px-8 lg:px-16 flex justify-center'>
        <address className='bg-[#0288D10A] rounded-2xl px-4 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-12 lg:py-16 flex flex-col items-center w-full max-w-sm sm:max-w-5xl lg:w-fit not-italic shadow-sm border border-gray-100'>
          <h2 className='text-text-primary text-base sm:text-lg lg:text-xl font-medium mb-8 sm:mb-10 lg:mb-12 text-center'>
            {t('title')}
          </h2>
          <ul
            className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 xl:gap-16 w-full items-center place-items-start sm:place-items-center'
            role='list'
            aria-label='Contact methods'
          >
            {contactMethods.map(method => (
              <ContactMethodItem
                key={method.id}
                method={method}
                t={t}
              />
            ))}
          </ul>
        </address>
      </div>
    </section>
  );
}

// Export memoized component for performance
export default memo(Contact);
