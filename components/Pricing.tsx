'use client';

import Image from 'next/image';
import enabledIcon from '@/public/pricing-enabled.svg';
import { useTranslations } from 'next-intl';
import { memo } from 'react';

// TypeScript interfaces
interface MainPackageProps {
  t: (key: string) => string;
}

interface AddOnProps {
  t: (key: string) => string;
}

interface CustomSectionProps {
  t: (key: string) => string;
}

// Helper function to get main package features
const getMainPackageFeatures = (t: (key: string) => string) => [
  t('features.cloudSoftware'),
  t('features.unlimitedOrders'),
  t('features.orderTracking'),
  t('features.analytics'),
  t('features.whatsappSupport'),
  t('features.customerManagement'),
  t('features.userManagement'),
];

// Memoized MainPackage component
const MainPackage = memo(function MainPackage({ t }: MainPackageProps) {
  const features = getMainPackageFeatures(t);
  
  return (
    <article className='card-elevated gap-6 sm:gap-8 lg:gap-10 !p-6 sm:!p-8 lg:!p-10 max-w-2xl mx-auto'>
      <div className='text-center'>
        <h4 className='text-primary text-sm sm:text-base font-semibold leading-6 tracking-wide uppercase mb-2'>
          {t('package.name')}
        </h4>
        <p className='text-text-muted text-sm sm:text-base leading-5 opacity-70'>
          {t('package.description')}
        </p>
      </div>
      
      <div className='text-center'>
        <div className='text-text-heading text-lg sm:text-xl font-bold mb-2'>
          {t('package.currency')}
        </div>
        <div className='flex items-baseline justify-center gap-2 mb-2'>
          <span className='text-text-heading text-4xl sm:text-5xl lg:text-6xl font-bold'>
            {t('package.price')}
          </span>
          <span className='text-text-heading text-lg sm:text-xl lg:text-2xl'>
            / {t('package.period')}
          </span>
        </div>
      </div>
      
      <ul className='flex flex-col gap-3 sm:gap-4' role='list' aria-label='Package features'>
        {features.map((feature, index) => (
          <li key={index} className='flex gap-3 sm:gap-4 leading-6 text-sm sm:text-base text-text-heading'>
            <Image
              src={enabledIcon}
              alt='Included feature'
              width={20}
              height={20}
              className='object-contain sm:w-6 sm:h-6 flex-shrink-0 mt-1'
            />
            {feature}
          </li>
        ))}
      </ul>
      
      <div className='text-center'>
        <button
          className='btn-primary text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4'
          type='button'
          onClick={() => {
            const contactElement = document.getElementById('contact');
            if (contactElement) {
              contactElement.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          aria-label={`${t('buttons.getStarted')} with ${t('package.name')}`}
        >
          {t('buttons.getStarted')}
        </button>
      </div>
    </article>
  );
});

// Memoized AddOns component
const AddOns = memo(function AddOns({ t }: AddOnProps) {
  const addons = [t('addons.multiLocation'), t('addons.addLocation')];
  
  return (
    <article className='card-elevated gap-4 sm:gap-6 lg:gap-8 !p-4 sm:!p-6 lg:!p-8'>
      <div>
        <h4 className='text-secondary text-sm sm:text-base font-semibold leading-6 tracking-wide uppercase mb-2'>
          {t('addons.title')}
        </h4>
        <p className='text-text-muted text-sm sm:text-base leading-5 opacity-70'>
          {t('addons.description')}
        </p>
      </div>
      
      <div>
        <div className='text-text-heading text-base sm:text-lg font-bold mb-2'>
          {t('addons.currency')}
        </div>
        <div className='flex items-baseline gap-1 mb-4'>
          <span className='text-text-heading text-2xl sm:text-3xl lg:text-4xl font-bold'>
            {t('addons.price')}
          </span>
          <span className='text-text-heading text-sm sm:text-base lg:text-lg'>
            / {t('addons.period')}
          </span>
        </div>
      </div>
      
      <ul className='flex flex-col gap-2 sm:gap-3' role='list' aria-label='Available add-ons'>
        {addons.map((addon, index) => (
          <li key={index} className='flex gap-2 sm:gap-3 leading-6 text-sm sm:text-base text-text-heading'>
            <Image
              src={enabledIcon}
              alt='Available add-on'
              width={16}
              height={16}
              className='object-contain sm:w-5 sm:h-5 flex-shrink-0 mt-1'
            />
            {addon}
          </li>
        ))}
      </ul>
    </article>
  );
});

// Memoized CustomSection component  
const CustomSection = memo(function CustomSection({ t }: CustomSectionProps) {
  const handleContactClick = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <article className='card-elevated gap-6 sm:gap-8 lg:gap-10 !p-4 sm:!p-6 lg:!p-8'>
      <div>
        <h4 className='text-primary text-sm sm:text-base font-semibold leading-6 tracking-wide uppercase mb-2'>
          {t('custom.title')}
        </h4>
        <p className='text-text-muted text-sm sm:text-base leading-5 opacity-70'>
          {t('custom.description')}
        </p>
      </div>
      <div className='flex-1' />
      <div>
        <button
          className='btn-outline w-full sm:w-auto'
          type='button'
          onClick={handleContactClick}
        >
          {t('buttons.contactUs')}
        </button>
      </div>
    </article>
  );
});

function Pricing() {
  const t = useTranslations('Pricing');

  return (
    <section
      className='w-full flex flex-col items-center py-20 section-anchor overflow-x-hidden'
      id='pricing'
      aria-label='GhasilHub pricing and subscription options'
    >
      <div className='max-w-content w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-0'>
        <h1 className='section-header'>{t('title')}</h1>
        <p className='section-description mb-8 sm:mb-12 lg:mb-16'>{t('description')}</p>
      </div>

      <div className='w-full max-w-content px-4 sm:px-6 md:px-8 lg:px-12 xl:px-0'>
        {/* Main Package */}
        <div className='mb-8 sm:mb-12 lg:mb-16'>
          <MainPackage t={t} />
        </div>

        {/* Add-ons and Custom Section */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-4xl mx-auto'>
          <AddOns t={t} />
          <CustomSection t={t} />
        </div>
      </div>
    </section>
  );
}

// Export memoized component for performance
export default memo(Pricing);
