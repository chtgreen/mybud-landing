import type { FC } from 'react';
import { t, tArray } from '../lib/i18n';
import { Lock, Lightbulb } from './icons';

const DeploymentOptions: FC = () => {
  const saasFeatures = tArray('collective.deploymentOptions.saas.features') as string[];
  const enterpriseFeatures = tArray('collective.deploymentOptions.enterprise.features') as string[];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900">
            {t('collective.deploymentOptions.title')}
          </h2>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
            {t('collective.deploymentOptions.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* SaaS Option */}
          <div className="card p-8 hover:shadow-xl transition-shadow">
            <div className="mb-6">
              <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
                {t('collective.deploymentOptions.saas.badge')}
              </span>
              <h3 className="text-2xl font-bold text-zinc-900 mb-3">
                {t('collective.deploymentOptions.saas.title')}
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                {t('collective.deploymentOptions.saas.description')}
              </p>
            </div>

            <div className="space-y-3 mb-6">
              {saasFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-zinc-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-zinc-700 leading-relaxed">
                  <strong>Destaque:</strong> {t('collective.deploymentOptions.saas.highlight')}
                </p>
              </div>
            </div>

            <a href="#contact" className="btn-primary w-full text-center">
              {t('collective.deploymentOptions.saas.cta')}
            </a>
          </div>

          {/* Enterprise Option */}
          <div className="card p-8 bg-gradient-to-br from-emerald-900 to-emerald-800 text-white hover:shadow-2xl transition-shadow">
            <div className="mb-6">
              <span className="inline-block px-4 py-1.5 bg-emerald-400 text-emerald-900 rounded-full text-sm font-semibold mb-4">
                {t('collective.deploymentOptions.enterprise.badge')}
              </span>
              <h3 className="text-2xl font-bold mb-3">
                {t('collective.deploymentOptions.enterprise.title')}
              </h3>
              <p className="text-zinc-300 leading-relaxed">
                {t('collective.deploymentOptions.enterprise.description')}
              </p>
            </div>

            <div className="space-y-3 mb-6">
              {enterpriseFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-zinc-200">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-emerald-400/10 border border-emerald-400/30 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-zinc-200 leading-relaxed">
                  <strong>Destaque:</strong> {t('collective.deploymentOptions.enterprise.highlight')}
                </p>
              </div>
            </div>

            <a href="#contact" className="inline-flex items-center justify-center w-full px-8 py-3 bg-white text-emerald-900 rounded-full font-semibold hover:bg-emerald-50 transition-colors">
              {t('collective.deploymentOptions.enterprise.cta')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeploymentOptions;

