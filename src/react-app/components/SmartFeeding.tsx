import type { FC, ReactElement } from 'react';
import { t, tArray } from '../lib/i18n';
import { X, Check, MapPin, Hand, Sparkles, Target, RefreshCw, TrendingUp } from 'lucide-react';

interface BackgroundProps {
  background?: 'white' | 'gray';
}

// Map icon names to Lucide components
const iconMap: Record<string, ReactElement> = {
  'target': <Target className="w-10 h-10" />,
  'refresh': <RefreshCw className="w-10 h-10" />,
  'trending': <TrendingUp className="w-10 h-10" />
};

const SmartFeeding: FC<BackgroundProps> = ({ background = 'white' }) => {
  const bgClass = background === 'gray' ? 'bg-gray-50' : 'bg-white';
  
  const oldProblems = tArray('b2b.smartFeeding.comparison.old.problems') as string[];
  const newBenefits = tArray('b2b.smartFeeding.comparison.new.benefits') as string[];
  const valuePoints = tArray('b2b.smartFeeding.value.points') as unknown as Array<{ icon: string; text: string }>;

  return (
    <section className={`py-20 ${bgClass}`}>
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Badge + Title */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-800 rounded-full text-sm font-semibold mb-4">
            {t('b2b.smartFeeding.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900">
            {t('b2b.smartFeeding.title')}
          </h2>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
            {t('b2b.smartFeeding.subtitle')}
          </p>
        </div>

        {/* Comparison: Old vs New */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Old: Static PDF */}
          <div className="border-2 border-red-200 rounded-2xl p-8 bg-red-50/30">
            <h3 className="text-2xl font-bold mb-6 text-zinc-900">
              {t('b2b.smartFeeding.comparison.old.title')}
            </h3>
            <ul className="space-y-3">
              {oldProblems.map((problem, index) => (
                <li key={index} className="flex items-start gap-3 text-zinc-700">
                  <X className="text-red-500 mt-1 flex-shrink-0 w-5 h-5" />
                  <span>{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* New: MyBud Smart */}
          <div className="border-2 border-emerald-200 rounded-2xl p-8 bg-emerald-50/30">
            <h3 className="text-2xl font-bold mb-6 text-zinc-900">
              {t('b2b.smartFeeding.comparison.new.title')}
            </h3>
            <ul className="space-y-3">
              {newBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3 text-zinc-700">
                  <Check className="text-emerald-600 mt-1 flex-shrink-0 w-5 h-5" />
                  <span className="font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Real Example */}
        <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-8 md:p-12 text-white mb-16">
          <h3 className="text-2xl font-bold mb-6">
            {t('b2b.smartFeeding.example.title')}
          </h3>
          <div className="space-y-4 text-lg">
            <div className="flex items-start gap-3">
              <MapPin className="text-emerald-400 font-semibold w-6 h-6 flex-shrink-0 mt-0.5" />
              <p className="text-zinc-300">
                <span className="text-white font-semibold">Contexto:</span>{' '}
                {t('b2b.smartFeeding.example.scenario')}
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Hand className="text-emerald-400 font-semibold w-6 h-6 flex-shrink-0 mt-0.5" />
              <p className="text-zinc-300">
                <span className="text-white font-semibold">Ação:</span>{' '}
                {t('b2b.smartFeeding.example.action')}
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Sparkles className="text-emerald-400 font-semibold w-6 h-6 flex-shrink-0 mt-0.5" />
              <p className="text-zinc-300">
                <span className="text-white font-semibold">Resultado:</span>{' '}
                {t('b2b.smartFeeding.example.result')}
              </p>
            </div>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-zinc-900">
            {t('b2b.smartFeeding.value.title')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {valuePoints.map((point, index) => (
              <div key={index} className="card p-6">
                <div className="text-emerald-600 mb-4">
                  {iconMap[point.icon] || point.icon}
                </div>
                <p className="text-zinc-700 leading-relaxed">
                  {point.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartFeeding;

