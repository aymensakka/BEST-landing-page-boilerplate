import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  const t = useTranslations('useCases.notFound');
  
  return (
    <div className="min-h-[50vh] flex items-center justify-center text-center px-4">
      <div className="max-w-md w-full space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">{t('title')}</h1>
          <p className="text-gray-500 dark:text-gray-400">
            {t('description')}
          </p>
        </div>
        <Button asChild>
          <Link href="/use-cases">
            {t('backToUseCases')}
          </Link>
        </Button>
      </div>
    </div>
  );
}
