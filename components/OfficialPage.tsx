import { LocaleType } from '@/types/LocaleProps';
import clsx from 'clsx';

interface OfficialPageProps {
  title: string;
  desc: string;
  children: React.ReactNode;
  locale?: LocaleType;
}

export default function OfficialPage({
  title,
  desc,
  children,
  locale = 'en',
}: OfficialPageProps) {
  const isRtl = locale === 'ar';

  return (
    <div
      className={clsx('relative w-full overflow-x-hidden', {
        'dir-rtl': isRtl,
        'dir-ltr': !isRtl,
      })}
    >
      {/* Hero Background Section */}
      <div className='relative w-full flex justify-center'>
        <div className='relative max-w-content w-full'>
          {/* Responsive decorative circle */}
          <div
            className={clsx(
              'absolute w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[406px] lg:h-[406px] bg-primary-light rounded-full bg-opacity-60',
              {
                'right-[-50px] sm:right-[-75px] lg:right-[-50px]': !isRtl,
                'left-[-50px] sm:left-[-75px] lg:left-[-50px]': isRtl,
              },
              'top-[-25px] sm:top-[-50px] lg:top-[-50px]',
            )}
          />
        </div>
      </div>

      <div className='absolute left-0 right-0 top-0 bottom-0 bg-[url(/hero-bg-blur.svg)] fill-[#f2f7ffb3] backdrop-blur-[50px]' />

      <div className='relative'>
        <div className='w-full'>
          <div className='w-full flex justify-center'>
            <div className='max-w-content w-full px-4 sm:px-8 lg:px-16'>
              {/* Responsive hero section */}
              <div
                className={clsx(
                  'relative w-full lg:w-2/3 flex flex-col gap-4 sm:gap-6 items-start',
                  'py-8 sm:py-16 lg:py-28',
                  'mt-[70px] sm:mt-nav-bar',
                  {
                    'text-right': isRtl,
                    'text-left': !isRtl,
                  },
                )}
              >
                <h1 className='text-primary text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight sm:leading-10'>
                  {title}
                </h1>
                <p className='text-text-secondary text-base sm:text-lg leading-6 sm:leading-7'>
                  {desc}
                </p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className='w-full bg-white flex justify-center'>
            <div
              className={clsx(
                'max-w-content w-full',
                'px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-40',
                'py-8 sm:py-12 lg:py-16 xl:py-20',
                'text-text-primary leading-6 sm:leading-7',
                {
                  'text-right': isRtl,
                  'text-left': !isRtl,
                },
              )}
            >
              {/* Content wrapper with max reading width */}
              <div className='max-w-4xl mx-auto'>{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
