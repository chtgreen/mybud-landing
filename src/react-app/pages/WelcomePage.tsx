import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import posthog from 'posthog-js';
import { t } from '../lib/i18n';
import { CheckCircle, Mail, Download, Sprout } from 'lucide-react';

const steps = [
  { key: 'welcome.steps.step1', icon: Mail },
  { key: 'welcome.steps.step2', icon: Download },
  { key: 'welcome.steps.step3', icon: Sprout },
];

const WelcomePage = () => {
  const { lang } = useParams<{ lang: string }>();

  useEffect(() => {
    if (typeof posthog !== 'undefined') {
      posthog.capture('welcome_page_viewed', { language: lang });
    }
  }, [lang]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50 flex items-center justify-center px-6 py-16">
      <div className="max-w-lg w-full text-center space-y-8">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-100">
          <CheckCircle className="w-10 h-10 text-emerald-600" />
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold text-zinc-900">
            {t('welcome.title')}
          </h1>
          <p className="text-lg text-emerald-700 font-medium">
            {t('welcome.subtitle')}
          </p>
        </div>

        <p className="text-zinc-600 leading-relaxed">
          {t('welcome.message')}
        </p>

        <div className="bg-white rounded-2xl border border-emerald-200 p-6 text-left space-y-4">
          <h2 className="font-semibold text-zinc-900">
            {t('welcome.steps.title')}
          </h2>
          {steps.map((step, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5">
                <step.icon className="w-4 h-4 text-emerald-600" />
              </div>
              <p className="text-zinc-700 pt-1">
                {t(step.key)}
              </p>
            </div>
          ))}
        </div>

        <p className="text-sm text-zinc-500">
          {t('welcome.support')}
        </p>

        <Link
          to={`/${lang || 'pt'}/grower`}
          className="inline-block text-emerald-700 hover:text-emerald-800 font-medium underline underline-offset-4"
        >
          {t('welcome.backHome')}
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;
