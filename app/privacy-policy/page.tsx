import OfficialPage from '@/components/OfficialPage';
import PrivacyContent from '@/components/PrivacyContent';
import { Metadata } from 'next';
import getAppLocale from '@/utils/getAppLocale';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getAppLocale();
  const t = await getTranslations({ locale, namespace: 'PrivacyPolicy' });

  return {
    title: `GhasilHub - ${t('title')}`,
    description: t('description'),
  };
}

export default async function PrivacyPolicyPage() {
  const locale = await getAppLocale();
  const t = await getTranslations({ locale, namespace: 'PrivacyPolicy' });

  return (
    <OfficialPage
      title={t('title')}
      desc={t('description')}
      locale={locale}
    >
      <PrivacyContent />
    </OfficialPage>
  );
}
