import type { FC } from 'react';
import { t } from '../lib/i18n';

const PlansSection: FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900">
            {t('collective.plans.title')}
          </h2>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
            {t('collective.plans.subtitle')}
          </p>
        </div>

        {/* Simple 2-column table */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-6 text-zinc-800 font-bold text-lg">Plano</th>
                  <th className="text-left py-4 px-6 text-zinc-800 font-bold text-lg">Faixa</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-6 px-6">
                    <div className="font-bold text-xl text-emerald-600 mb-1">{t('collective.plans.core.title')}</div>
                    <div className="text-sm text-zinc-600">{t('collective.plans.core.description')}</div>
                  </td>
                  <td className="py-6 px-6 font-medium text-zinc-800">{t('collective.plans.core.range')}</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-6 px-6">
                    <div className="font-bold text-xl text-emerald-700 mb-1">{t('collective.plans.enterprise.title')}</div>
                    <div className="text-sm text-zinc-600">{t('collective.plans.enterprise.description')}</div>
                  </td>
                  <td className="py-6 px-6 font-medium text-zinc-800">{t('collective.plans.enterprise.range')}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex justify-center mt-8">
            <a href="#collective-lead-form" className="btn-primary text-lg px-8 py-4">
              {t('collective.plans.cta')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;

