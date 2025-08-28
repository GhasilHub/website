'use client';

import { useTranslations, useLocale } from 'next-intl';
import clsx from 'clsx';
import { CONTACT_INFO } from '@/layouts/constants';

export default function PrivacyContent() {
  const t = useTranslations('PrivacyPolicy');
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

      {/* Privacy Policy Sections */}
      <div className="space-y-8 sm:space-y-10 lg:space-y-12">
        <section className={clsx(
          "border-4 border-primary",
          {
            "border-l-4 border-t-0 border-r-0 border-b-0 pl-4 sm:pl-6": !isRtl,
            "border-r-4 border-t-0 border-l-0 border-b-0 pr-4 sm:pr-6": isRtl
          }
        )}>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-text-heading mb-4 sm:mb-6">
            {t('sections.collecting.title')}
          </h2>
          <p className="text-text-primary text-sm sm:text-base leading-6 sm:leading-7 mb-4">
            {t('sections.collecting.subtitle')}
          </p>
          <div className="space-y-3 sm:space-y-4">
            {t.raw('sections.collecting.content').map((item: string, index: number) => (
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
            {t('sections.usage.title')}
          </h2>
          <p className="text-text-primary text-sm sm:text-base leading-6 sm:leading-7 mb-4">
            {t('sections.usage.subtitle')}
          </p>
          <div className="space-y-3 sm:space-y-4">
            {t.raw('sections.usage.content').map((item: string, index: number) => (
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
            {t('sections.sharing.title')}
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {t.raw('sections.sharing.content').map((item: string, index: number) => (
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
            {t('sections.security.title')}
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {t.raw('sections.security.content').map((item: string, index: number) => (
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
            {t('sections.whatsapp.title')}
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {t.raw('sections.whatsapp.content').map((item: string, index: number) => (
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
            {t('sections.outages.title')}
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {t.raw('sections.outages.content').map((item: string, index: number) => (
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
            {t('sections.rights.title')}
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {t.raw('sections.rights.content').map((item: string, index: number) => (
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
            {t('sections.amendments.title')}
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {t.raw('sections.amendments.content').map((item: string, index: number) => (
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
            {t('sections.contact.title')}
          </h2>
          <p className="text-text-primary text-sm sm:text-base leading-6 sm:leading-7 mb-4">
            {t('sections.contact.subtitle')}
          </p>
          <div className="space-y-3 sm:space-y-4">
            <p className={clsx(
              "text-text-primary text-sm sm:text-base leading-6 sm:leading-7",
              {
                "pl-4": !isRtl,
                "pr-4": isRtl
              }
            )}>
              • {t('sections.contact.email')}: {CONTACT_INFO.email}
            </p>
            <p className={clsx(
              "text-text-primary text-sm sm:text-base leading-6 sm:leading-7",
              {
                "pl-4": !isRtl,
                "pr-4": isRtl
              }
            )}>
              • {t('sections.contact.phone')}: {CONTACT_INFO.phoneDisplay}
            </p>
          </div>
        </section>

        {/* Legal Note */}
        <section className="bg-blue-50 p-4 sm:p-6 rounded-lg border border-blue-200">
          <h3 className="text-base sm:text-lg font-bold text-text-heading mb-3">
            {t('legalNote.title')}
          </h3>
          <p className="text-text-primary text-sm sm:text-base leading-6 sm:leading-7">
            {t('legalNote.content')}
          </p>
        </section>
      </div>
    </div>
  );
}