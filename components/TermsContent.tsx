'use client';

import { useTranslations, useLocale } from 'next-intl';
import clsx from 'clsx';
import { CONTACT_INFO } from '@/layouts/constants';

export default function TermsContent() {
  const t = useTranslations('TermsAndConditions');
  const locale = useLocale();
  const isRtl = locale === 'ar';

  return (
    <div className="space-y-6 sm:space-y-8 lg:space-y-10">
      {/* Header Information */}
      <div className="text-center space-y-2 mb-6 sm:mb-8 pb-6 border-b border-gray-200">
        <p className="text-sm sm:text-base text-text-secondary font-medium">
          {t('effectiveDate')}
        </p>
        <p className="text-sm sm:text-base text-text-secondary">
          {t('lastUpdated')}
        </p>
      </div>

      {/* Introduction */}
      <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
        <p className="text-text-primary text-base sm:text-lg leading-6 sm:leading-7 font-medium">
          {t('introduction')}
        </p>
      </div>

      {/* Terms Sections */}
      <div className="space-y-8 sm:space-y-10 lg:space-y-12">
        <section className={clsx(
          "border-4 border-primary",
          {
            "border-l-4 border-t-0 border-r-0 border-b-0 pl-4 sm:pl-6": !isRtl,
            "border-r-4 border-t-0 border-l-0 border-b-0 pr-4 sm:pr-6": isRtl
          }
        )}>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-text-heading mb-4 sm:mb-6">
            {t('sections.definitions.title')}
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {t.raw('sections.definitions.content').map((item: string, index: number) => (
              <p key={index} className={clsx(
                "text-text-primary text-sm sm:text-base leading-6 sm:leading-7",
                {
                  "pl-4": !isRtl,
                  "pr-4": isRtl
                }
              )}>
                • {item}
              </p>
            ))}
          </div>
        </section>

        <section className={clsx(
          "border-4 border-primary",
          {
            "border-l-4 border-t-0 border-r-0 border-b-0 pl-4 sm:pl-6": !isRtl,
            "border-r-4 border-t-0 border-l-0 border-b-0 pr-4 sm:pr-6": isRtl
          }
        )}>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-text-heading mb-4 sm:mb-6">
            {t('sections.registration.title')}
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {t.raw('sections.registration.content').map((item: string, index: number) => (
              <p key={index} className={clsx(
                "text-text-primary text-sm sm:text-base leading-6 sm:leading-7",
                {
                  "pl-4": !isRtl,
                  "pr-4": isRtl
                }
              )}>
                • {item}
              </p>
            ))}
          </div>
        </section>

        <section className={clsx(
          "border-4 border-primary",
          {
            "border-l-4 border-t-0 border-r-0 border-b-0 pl-4 sm:pl-6": !isRtl,
            "border-r-4 border-t-0 border-l-0 border-b-0 pr-4 sm:pr-6": isRtl
          }
        )}>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-text-heading mb-4 sm:mb-6">
            {t('sections.responsibilities.title')}
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {t.raw('sections.responsibilities.content').map((item: string, index: number) => (
              <p key={index} className={clsx(
                "text-text-primary text-sm sm:text-base leading-6 sm:leading-7",
                {
                  "pl-4": !isRtl,
                  "pr-4": isRtl
                }
              )}>
                • {item}
              </p>
            ))}
          </div>
        </section>

        <section className={clsx(
          "border-4 border-primary",
          {
            "border-l-4 border-t-0 border-r-0 border-b-0 pl-4 sm:pl-6": !isRtl,
            "border-r-4 border-t-0 border-l-0 border-b-0 pr-4 sm:pr-6": isRtl
          }
        )}>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-text-heading mb-4 sm:mb-6">
            {t('sections.services.title')}
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {t.raw('sections.services.content').map((item: string, index: number) => (
              <p key={index} className={clsx(
                "text-text-primary text-sm sm:text-base leading-6 sm:leading-7",
                {
                  "pl-4": !isRtl,
                  "pr-4": isRtl
                }
              )}>
                • {item}
              </p>
            ))}
          </div>
        </section>

        <section className={clsx(
          "border-4 border-primary",
          {
            "border-l-4 border-t-0 border-r-0 border-b-0 pl-4 sm:pl-6": !isRtl,
            "border-r-4 border-t-0 border-l-0 border-b-0 pr-4 sm:pr-6": isRtl
          }
        )}>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-text-heading mb-4 sm:mb-6">
            {t('sections.payment.title')}
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {t.raw('sections.payment.content').map((item: string, index: number) => (
              <p key={index} className={clsx(
                "text-text-primary text-sm sm:text-base leading-6 sm:leading-7",
                {
                  "pl-4": !isRtl,
                  "pr-4": isRtl
                }
              )}>
                • {item}
              </p>
            ))}
          </div>
        </section>

        <section className={clsx(
          "border-4 border-primary",
          {
            "border-l-4 border-t-0 border-r-0 border-b-0 pl-4 sm:pl-6": !isRtl,
            "border-r-4 border-t-0 border-l-0 border-b-0 pr-4 sm:pr-6": isRtl
          }
        )}>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-text-heading mb-4 sm:mb-6">
            {t('sections.maintenance.title')}
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {t.raw('sections.maintenance.content').map((item: string, index: number) => (
              <p key={index} className={clsx(
                "text-text-primary text-sm sm:text-base leading-6 sm:leading-7",
                {
                  "pl-4": !isRtl,
                  "pr-4": isRtl
                }
              )}>
                • {item}
              </p>
            ))}
          </div>
        </section>

        <section className={clsx(
          "border-4 border-primary",
          {
            "border-l-4 border-t-0 border-r-0 border-b-0 pl-4 sm:pl-6": !isRtl,
            "border-r-4 border-t-0 border-l-0 border-b-0 pr-4 sm:pr-6": isRtl
          }
        )}>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-text-heading mb-4 sm:mb-6">
            {t('sections.intellectual.title')}
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {t.raw('sections.intellectual.content').map((item: string, index: number) => (
              <p key={index} className={clsx(
                "text-text-primary text-sm sm:text-base leading-6 sm:leading-7",
                {
                  "pl-4": !isRtl,
                  "pr-4": isRtl
                }
              )}>
                • {item}
              </p>
            ))}
          </div>
        </section>

        <section className={clsx(
          "border-4 border-primary",
          {
            "border-l-4 border-t-0 border-r-0 border-b-0 pl-4 sm:pl-6": !isRtl,
            "border-r-4 border-t-0 border-l-0 border-b-0 pr-4 sm:pr-6": isRtl
          }
        )}>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-text-heading mb-4 sm:mb-6">
            {t('sections.liability.title')}
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {t.raw('sections.liability.content').map((item: string, index: number) => (
              <p key={index} className={clsx(
                "text-text-primary text-sm sm:text-base leading-6 sm:leading-7",
                {
                  "pl-4": !isRtl,
                  "pr-4": isRtl
                }
              )}>
                • {item}
              </p>
            ))}
          </div>
        </section>

        <section className={clsx(
          "border-4 border-primary",
          {
            "border-l-4 border-t-0 border-r-0 border-b-0 pl-4 sm:pl-6": !isRtl,
            "border-r-4 border-t-0 border-l-0 border-b-0 pr-4 sm:pr-6": isRtl
          }
        )}>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-text-heading mb-4 sm:mb-6">
            {t('sections.termination.title')}
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {t.raw('sections.termination.content').map((item: string, index: number) => (
              <p key={index} className={clsx(
                "text-text-primary text-sm sm:text-base leading-6 sm:leading-7",
                {
                  "pl-4": !isRtl,
                  "pr-4": isRtl
                }
              )}>
                • {item}
              </p>
            ))}
          </div>
        </section>

        <section className={clsx(
          "border-4 border-primary",
          {
            "border-l-4 border-t-0 border-r-0 border-b-0 pl-4 sm:pl-6": !isRtl,
            "border-r-4 border-t-0 border-l-0 border-b-0 pr-4 sm:pr-6": isRtl
          }
        )}>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-text-heading mb-4 sm:mb-6">
            {t('sections.modifications.title')}
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {t.raw('sections.modifications.content').map((item: string, index: number) => (
              <p key={index} className={clsx(
                "text-text-primary text-sm sm:text-base leading-6 sm:leading-7",
                {
                  "pl-4": !isRtl,
                  "pr-4": isRtl
                }
              )}>
                • {item}
              </p>
            ))}
          </div>
        </section>

        <section className={clsx(
          "border-4 border-primary",
          {
            "border-l-4 border-t-0 border-r-0 border-b-0 pl-4 sm:pl-6": !isRtl,
            "border-r-4 border-t-0 border-l-0 border-b-0 pr-4 sm:pr-6": isRtl
          }
        )}>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-text-heading mb-4 sm:mb-6">
            {t('sections.law.title')}
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {t.raw('sections.law.content').map((item: string, index: number) => (
              <p key={index} className={clsx(
                "text-text-primary text-sm sm:text-base leading-6 sm:leading-7",
                {
                  "pl-4": !isRtl,
                  "pr-4": isRtl
                }
              )}>
                • {item}
              </p>
            ))}
          </div>
        </section>

        <section className={clsx(
          "border-4 border-primary",
          {
            "border-l-4 border-t-0 border-r-0 border-b-0 pl-4 sm:pl-6": !isRtl,
            "border-r-4 border-t-0 border-l-0 border-b-0 pr-4 sm:pr-6": isRtl
          }
        )}>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-text-heading mb-4 sm:mb-6">
            {t('sections.communication.title')}
          </h2>
          <div className="space-y-3 sm:space-y-4">
            <p className={clsx(
              "text-text-primary text-sm sm:text-base leading-6 sm:leading-7",
              {
                "pl-4": !isRtl,
                "pr-4": isRtl
              }
            )}>
              • {t('sections.communication.email')}: {CONTACT_INFO.email}
            </p>
            <p className={clsx(
              "text-text-primary text-sm sm:text-base leading-6 sm:leading-7",
              {
                "pl-4": !isRtl,
                "pr-4": isRtl
              }
            )}>
              • {t('sections.communication.phone')}: {CONTACT_INFO.phoneDisplay}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}