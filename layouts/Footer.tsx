import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import logo from '@/public/navbar-logo.svg';
import appStoreButton from '@/public/footer-app-store-button.svg';
import googlePlayButton from '@/public/footer-google-play-button.svg';
import { CONTACT_INFO, EXTERNAL_LINKS } from './constants';
import LocaleProps from '@/types/LocaleProps';

export default function Footer({ locale }: LocaleProps) {
  const t = useTranslations('Footer');
  const currentYear = new Date().getFullYear();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _ = locale; // Keeping for future RTL support

  return (
    <div className='flex w-full justify-center py-8 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-28 bg-white text-text-primary leading-7 border-t border-[#E5E7EB]'>
      <div className='max-w-content w-full'>
        <div className='w-full flex flex-col lg:flex-row gap-8 lg:gap-4 items-start lg:justify-between'>
          <div className='flex flex-col gap-6 items-start'>
            <Link
              href='/'
              className='hover:opacity-80 transition-opacity duration-200'
            >
              <Image
                src={logo}
                alt='GhasilHub logo'
                className='h-10 w-auto'
                loading='lazy'
                sizes='(max-width: 768px) 100px, 120px'
              />
            </Link>
            <div>
              {t('affiliate')}{' '}
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                target='_blank'
                rel='noopener noreferrer'
                className='font-medium text-secondary hover:text-primary transition-colors duration-200'
              >
                {t('contactUs')}
              </a>
            </div>
            <div className='flex flex-wrap gap-x-6 gap-y-2 items-center text-sm'>
              <Link
                href='/terms-and-conditions'
                className='hover:text-primary transition-colors duration-200'
              >
                {t('termsConditions')}
              </Link>
              <Link
                href='/privacy-policy'
                className='hover:text-primary transition-colors duration-200'
              >
                {t('privacyPolicy')}
              </Link>
              <Link
                href='/refund-policy'
                className='hover:text-primary transition-colors duration-200'
              >
                {t('refundPolicy')}
              </Link>
              <a
                href={EXTERNAL_LINKS.admin}
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-primary transition-colors duration-200'
              >
                {t('admin')}
              </a>
            </div>
            <div className='text-sm text-text-secondary'>
              {t('copyright', { year: currentYear })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
