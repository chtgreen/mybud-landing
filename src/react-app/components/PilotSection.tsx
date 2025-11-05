import type { FC } from 'react';
import { t } from '../lib/i18n';
import { Rocket } from './icons';

const PilotSection: FC = () => {
  return (
    <section id="pilot" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* CTA Card */}
        <div className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50 rounded-3xl p-12 md:p-16 border-2 border-emerald-200 shadow-xl">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          <div className="relative">
            <div className="flex items-center justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Rocket className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-zinc-900 text-center max-w-4xl mx-auto">
              {t('collective.pilot.title')}
            </h2>
            
            <p className="text-xl md:text-2xl text-center text-zinc-700 mb-10 font-medium max-w-3xl mx-auto leading-relaxed">
              {t('collective.pilot.benefit')}
            </p>
            
            <div className="flex justify-center">
              <a 
                href="#contact" 
                className="btn-primary text-lg px-12 py-5 inline-flex items-center gap-3 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
              >
                <Rocket className="w-5 h-5" />
                {t('collective.pilot.cta')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PilotSection;
