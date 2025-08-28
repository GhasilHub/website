import OfficialPage from '@/components/OfficialPage';
import TermsContent from '@/components/TermsContent';
import { Metadata } from 'next';
import getAppLocale from '@/utils/getAppLocale';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getAppLocale();
  const t = await getTranslations({ locale, namespace: 'TermsAndConditions' });

  return {
    title: `GhasilHub - ${t('title')}`,
    description: t('description'),
  };
}

export default async function TermsPage() {
  const locale = await getAppLocale();
  const t = await getTranslations({ locale, namespace: 'TermsAndConditions' });

  return (
    <OfficialPage
      title={t('title')}
      desc={t('description')}
      locale={locale}
    >
      <TermsContent />
    </OfficialPage>
  );
}
