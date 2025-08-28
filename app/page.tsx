import { Suspense, lazy } from 'react';
import Features from '@/components/Features';
import Hero from '@/components/Hero';
import getAppLocale from '@/utils/getAppLocale';

const Services = lazy(() => import('@/components/Services'));
const Pricing = lazy(() => import('@/components/Pricing'));
const FAQs = lazy(() => import('@/components/FAQs'));
const Contact = lazy(() => import('@/components/Contact'));

export default async function Home() {
  const locale = await getAppLocale();

  return (
    <>
      <Hero locale={locale} />
      <Features />
      <Suspense
        fallback={<div className='w-full h-32 bg-gray-50 animate-pulse' />}
      >
        <Services />
      </Suspense>
      <Suspense
        fallback={<div className='w-full h-32 bg-gray-50 animate-pulse' />}
      >
        <Pricing />
      </Suspense>
      <Suspense
        fallback={<div className='w-full h-32 bg-gray-50 animate-pulse' />}
      >
        <FAQs locale={locale} />
      </Suspense>
      <Suspense
        fallback={<div className='w-full h-32 bg-gray-50 animate-pulse' />}
      >
        <Contact />
      </Suspense>
    </>
  );
}
