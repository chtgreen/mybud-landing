import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import posthog from 'posthog-js';
import { t } from '../lib/i18n';
import { CheckCircle, Mail, Download, Sprout, ArrowRight } from 'lucide-react';

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
    // Simple celebratory log
    console.log('Welcome to MyBud! Payment confirmed.');
  }, [lang]);

  return (
    <div className="min-h-screen bg-emerald-50 flex items-center justify-center px-6 py-12 md:py-20">
      <div className="max-w-xl w-full text-center space-y-10">
        {/* Success Icon */}
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-emerald-500 blur-2xl opacity-20 animate-pulse rounded-full"></div>
          <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-white shadow-sm ring-1 ring-emerald-100">
            <CheckCircle className="w-12 h-12 text-emerald-600" />
          </div>
        </div>

        {/* Title & Subtitle */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 tracking-tight">
            {t('welcome.title')}
          </h1>
          <p className="text-xl text-emerald-700 font-medium">
            {t('welcome.subtitle')}
          </p>
        </div>

        {/* Main Message */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl border border-white/40 p-8 shadow-sm">
          <p className="text-zinc-600 text-lg leading-relaxed">
            {t('welcome.message')}
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-6 text-left max-w-md mx-auto">
          <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-widest px-1">
            {t('welcome.steps.title')}
          </h2>
          <div className="space-y-4">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="group flex items-center gap-4 bg-white p-4 rounded-2xl border border-emerald-100/50 shadow-sm transition-all hover:shadow-md hover:border-emerald-200"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center transition-colors group-hover:bg-emerald-100">
                  <step.icon className="w-5 h-5 text-emerald-600" />
                </div>
                <p className="text-zinc-800 font-medium text-base">
                  {t(step.key)}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8 space-y-6">
          <p className="text-sm text-zinc-500 font-medium">
            {t('welcome.support')}
          </p>

          <Link
            to={`/${lang || 'pt'}/grower`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-zinc-900 text-white font-semibold text-lg hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-200"
          >
            {t('welcome.backHome')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
