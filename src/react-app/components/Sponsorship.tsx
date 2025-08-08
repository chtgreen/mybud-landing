import type { FC } from 'react';
import { t } from '../lib/i18n';

interface SponsorshipProps {
  background?: 'white' | 'gray';
}

const Sponsorship: FC<SponsorshipProps> = ({ background = 'white' }) => {
  const bgClass = background === 'white' ? 'bg-white' : 'bg-gray-50';

  return (
    <section className={`py-20 ${bgClass} organic-background`}>
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              {t('sponsorship.title')}
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              {t('sponsorship.subtitle')}
            </p>
            {t('sponsorship.cta') !== 'sponsorship.cta' && (
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#features" className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-medium text-emerald-800 border border-emerald-300 hover:bg-emerald-50">
                  {t('sponsorship.cta')}
                </a>
              </div>
            )}
          </div>
          <div>
            <div className="card p-0 overflow-hidden">
              <div className="bg-gray-900 text-white p-3 text-sm font-medium">Diário público — exemplo</div>
              <div className="p-4">
                <div className="rounded-xl border border-gray-200 overflow-hidden">
                  <div className="p-3 flex items-center justify-between bg-gray-50">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-200"></div>
                      <div>
                        <div className="text-sm font-semibold text-gray-800">@grower_publico</div>
                        <div className="text-xs text-gray-500">Cultivo — Semana 5</div>
                      </div>
                    </div>
                    <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full text-xs font-semibold">
                      <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                      <span>{t('sponsorship.brandSticker') || 'Sticker de marca'}</span>
                    </div>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="text-sm text-gray-700">Tarefa: {t('sponsorship.sampleTask') || 'Aplicar nutrientes — Fase vegetativa'}</div>
                    <div className="rounded-lg bg-gray-100 h-40 flex items-center justify-center text-gray-500 text-sm">Foto/Vídeo do cultivo</div>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>Rega em 2h</span>
                      <span>Visível para a comunidade</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsorship; 