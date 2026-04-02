import { useState, useEffect, type FC } from 'react';
import { t } from '../lib/i18n';
import { Target, Clock3, FileText, Lightbulb, CheckCircle2, Droplet, Store, Calculator, Database, Flower2, ChevronDown, Palette } from './icons';

const Hint: FC<{ textKey: string }> = ({ textKey }) => (
  <div className="mt-4 px-4 py-3 rounded-xl bg-emerald-50 border border-emerald-100/50">
    <p className="text-xs text-emerald-700 text-center font-medium">
      {t(textKey)}
    </p>
  </div>
);

type Tab = 'tasks' | 'timeline' | 'activity' | 'recommendations' | 'hub' | 'calculator' | 'stickers';

interface IndustryDemoProps {
  onCTAClick?: () => void;
}

const IndustryDemo: FC<IndustryDemoProps> = ({ onCTAClick }) => {
  const [activeTab, setActiveTab] = useState<Tab>('tasks');
  const [brandName, setBrandName] = useState('MyBud Fert');
  const [brandLogo, setBrandLogo] = useState<string | null>(null);

  useEffect(() => {
    // We do this in useEffect to ensure safe client-side hydration
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has('brand')) {
      setBrandName(searchParams.get('brand') as string);
    }
    if (searchParams.has('logo')) {
      setBrandLogo(searchParams.get('logo') as string);
    }
  }, []);

  const tabs: { id: Tab; label: string; descKey: string; Icon: typeof Target }[] = [
    { id: 'tasks', label: t('industry.presence.tasks.title'), descKey: 'industry.demo.mock.descriptions.tasks', Icon: Target },
    { id: 'timeline', label: t('industry.presence.timeline.title'), descKey: 'industry.demo.mock.descriptions.timeline', Icon: Clock3 },
    { id: 'activity', label: t('industry.presence.activityLog.title'), descKey: 'industry.demo.mock.descriptions.activity', Icon: FileText },
    { id: 'recommendations', label: t('industry.presence.recommendations.title'), descKey: 'industry.demo.mock.descriptions.recommendations', Icon: Lightbulb },
    { id: 'hub', label: t('industry.demo.mock.hub.title'), descKey: 'industry.demo.mock.descriptions.hub', Icon: Store },
    { id: 'calculator', label: t('industry.demo.mock.calculator.title'), descKey: 'industry.demo.mock.descriptions.calculator', Icon: Calculator },
    { id: 'stickers', label: t('industry.demo.mock.stickers.title'), descKey: 'industry.demo.mock.descriptions.stickers', Icon: Palette },
  ];

  const mockupProps = { brandName, brandLogo };

  return (
    <section id="demo" className="py-20 md:py-32 bg-gray-50 border-t border-gray-100/50 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 mb-4 font-display tracking-tight">
            {t('industry.demo.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Vertical Carousel Menu (Left side) */}
          <div className="md:col-span-6 flex flex-col gap-3">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-left p-5 transition-all duration-300 rounded-2xl flex flex-col gap-2 relative ${isActive
                      ? 'bg-white shadow-xl shadow-gray-200/50 border border-emerald-100 scale-[1.02] z-10'
                      : 'bg-transparent border border-transparent opacity-60 hover:opacity-100 hover:bg-gray-100/50'
                    }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${isActive ? 'bg-emerald-100 text-emerald-600' : 'bg-gray-200 text-gray-500'
                      }`}>
                      <tab.Icon className="w-5 h-5" />
                    </div>
                    <h3 className={`text-lg font-bold transition-colors ${isActive ? 'text-zinc-900' : 'text-zinc-600'
                      }`}>
                      {tab.label}
                    </h3>
                  </div>
                  {isActive && (
                    <div className="pl-14 pt-1 animate-in fade-in slide-in-from-top-1">
                      <p className="text-sm font-medium text-emerald-800/80 leading-relaxed">
                        {t(tab.descKey)}
                      </p>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Phone Frame (Right side) */}
          <div className="md:col-span-6 flex justify-center sticky top-24">
            <div className="w-full max-w-[340px]">
              <div className="relative bg-zinc-900 rounded-[3rem] p-3 shadow-2xl ring-1 ring-zinc-900/10">
                {/* iPhone buttons */}
                <div className="absolute left-[-2px] top-28 w-1 h-8 bg-zinc-800 rounded-l-md" />
                <div className="absolute left-[-2px] top-44 w-1 h-12 bg-zinc-800 rounded-l-md" />
                <div className="absolute left-[-2px] top-60 w-1 h-12 bg-zinc-800 rounded-l-md" />
                <div className="absolute right-[-2px] top-40 w-1 h-16 bg-zinc-800 rounded-r-md" />

                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-zinc-900 rounded-b-3xl z-20" />

                {/* Screen */}
                <div className="bg-white rounded-[2.5rem] overflow-hidden h-[680px] w-full relative flex flex-col">
                  {/* Status Bar context */}
                  <div className="bg-emerald-700 px-6 pt-12 pb-5 text-white flex-shrink-0 z-10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-white/80 text-[10px] font-bold tracking-widest uppercase">MyBud App</span>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-emerald-100 text-xs font-medium">Live sync</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold tracking-tight mb-1">Indoor Tent #1</h3>
                    <p className="text-sm text-emerald-100 font-medium">Blue Dream — Vegetative Week 3</p>
                  </div>

                  {/* Scrollable Content */}
                  <div className="flex-1 overflow-y-auto p-5 pb-8 relative bg-gray-50/50">
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                      {activeTab === 'tasks' && <TasksMockup {...mockupProps} />}
                      {activeTab === 'timeline' && <TimelineMockup {...mockupProps} />}
                      {activeTab === 'activity' && <ActivityMockup {...mockupProps} />}
                      {activeTab === 'recommendations' && <RecommendationsMockup {...mockupProps} />}
                      {activeTab === 'hub' && <BrandHubMockup {...mockupProps} />}
                      {activeTab === 'calculator' && <CalculatorMockup {...mockupProps} />}
                      {activeTab === 'stickers' && <StickersMockup {...mockupProps} />}
                    </div>
                  </div>

                  {/* Bottom Home indicator */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-zinc-900/20 rounded-full z-20" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA below demo */}
        {onCTAClick && (
          <div className="text-center mt-20 pt-16 border-t border-gray-200">
            <button
              type="button"
              onClick={onCTAClick}
              className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl text-lg font-bold bg-emerald-700 text-white hover:bg-emerald-800 shadow-xl shadow-emerald-900/20 hover:shadow-2xl hover:shadow-emerald-900/30 transition-all hover:-translate-y-1"
            >
              {t('industry.demo.cta')}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

/* ─── Mock Screens ─── */

interface MockupProps {
  brandName: string;
  brandLogo: string | null;
}

const BrandBadge: FC<{ name: string; logo: string | null }> = ({ name, logo }) => (
  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white border border-emerald-200 text-xs font-bold text-emerald-800 shadow-sm">
    {logo ? (
      <img src={logo} alt={name} className="w-4 h-4 rounded-full object-cover" />
    ) : (
      <span className="w-4 h-4 rounded-full bg-emerald-600 flex items-center justify-center text-white text-[8px] font-black">
        {name.charAt(0)}
      </span>
    )}
    {name}
  </span>
);

const TasksMockup: FC<MockupProps> = ({ brandName, brandLogo }) => (
  <div className="space-y-4">
    <div className="flex items-center gap-2 mb-2">
      <Target className="w-5 h-5 text-zinc-400" />
      <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">{t('industry.demo.mock.tasks.todayTasks')}</p>
    </div>

    {/* Active task with brand product */}
    <div className="rounded-2xl border-2 border-emerald-500 bg-emerald-50/50 p-4 shadow-sm relative overflow-hidden">
      <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/10 rounded-bl-full" />
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5 relative z-10">
          <Droplet className="w-5 h-5 text-emerald-700" />
        </div>
        <div className="flex-1 min-w-0 relative z-10">
          <p className="text-base font-bold text-zinc-900">{t('industry.demo.mock.tasks.wateringNutrients')}</p>
          <p className="text-sm font-medium text-zinc-500 mt-0.5 block">{t('industry.demo.mock.tasks.vegWeek3')}</p>
          <div className="flex flex-wrap gap-2 mt-3 items-center">
            <BrandBadge name={brandName} logo={brandLogo} />
            <span className="inline-flex items-center px-2 py-1 rounded-lg bg-zinc-100 text-xs font-bold text-zinc-700">2ml/L</span>
            <span className="inline-flex items-center px-2 py-1 rounded-lg bg-zinc-100 text-xs font-bold text-zinc-700">pH 6.2</span>
          </div>
        </div>
      </div>
    </div>

    {/* Completed task */}
    <div className="rounded-2xl border border-gray-200 bg-white p-4 opacity-70">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
          <CheckCircle2 className="w-5 h-5 text-emerald-500" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-base font-medium text-zinc-500 line-through">{t('industry.demo.mock.tasks.phCheck')}</p>
          <p className="text-sm text-zinc-400 mt-0.5">{t('industry.demo.mock.tasks.optimalRange')}</p>
        </div>
      </div>
    </div>

    {/* Upcoming task */}
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0 mt-0.5">
          <Target className="w-5 h-5 text-amber-600" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-base font-bold text-zinc-900">{t('industry.demo.mock.tasks.foliarSpray')}</p>
          <p className="text-sm text-zinc-500 mt-0.5 font-medium">{t('industry.demo.mock.tasks.tomorrow')}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            <BrandBadge name="CalMag Plus" logo={null} />
            <span className="inline-flex items-center px-2 py-1 rounded-lg bg-zinc-100 text-xs font-bold text-zinc-700">1ml/L</span>
          </div>
        </div>
      </div>
    </div>

    <Hint textKey="industry.demo.tasksHint" />
  </div>
);

const TimelineMockup: FC<MockupProps> = ({ brandName, brandLogo }) => (
  <div className="space-y-4">
    <div className="flex items-center gap-2 mb-2">
      <Clock3 className="w-5 h-5 text-zinc-400" />
      <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">{t('industry.demo.mock.timeline.title')}</p>
    </div>

    <div className="relative pl-6 pt-2">
      <div className="absolute left-[11px] top-4 bottom-2 w-0.5 bg-gray-200 rounded-full" />

      {/* Day 21 */}
      <div className="relative pb-6">
        <div className="absolute left-[-16.5px] top-2 w-3.5 h-3.5 rounded-full bg-emerald-500 ring-4 ring-white" />
        <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm hover:border-emerald-300 transition-colors">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-black text-zinc-800">{t('industry.demo.mock.timeline.day21')}</span>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">{t('industry.demo.mock.timeline.today')}</span>
          </div>
          <p className="text-sm font-semibold text-zinc-700 mb-3">{t('industry.demo.mock.tasks.wateringNutrients')}</p>
          <div className="flex gap-2 items-center bg-gray-50 p-2 rounded-xl">
            <BrandBadge name={brandName} logo={brandLogo} />
            <span className="text-xs font-bold text-zinc-500">2ml/L</span>
          </div>
        </div>
      </div>

      {/* Day 18 */}
      <div className="relative pb-6">
        <div className="absolute left-[-16.5px] top-2 w-3.5 h-3.5 rounded-full bg-emerald-400 ring-4 ring-white" />
        <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-bold text-zinc-800">{t('industry.demo.mock.timeline.day18')}</span>
            <span className="text-xs font-medium text-zinc-400">{t('industry.demo.mock.timeline.daysAgo3')}</span>
          </div>
          <p className="text-sm font-medium text-zinc-600 mb-3">{t('industry.demo.mock.tasks.wateringNutrients')}</p>
          <div className="flex gap-2 items-center bg-gray-50 p-2 rounded-xl">
            <BrandBadge name={brandName} logo={brandLogo} />
            <span className="text-xs font-bold text-zinc-500">2ml/L</span>
          </div>
        </div>
      </div>

      {/* Day 14 */}
      <div className="relative pb-6">
        <div className="absolute left-[-16.5px] top-2 w-3.5 h-3.5 rounded-full bg-emerald-300 ring-4 ring-white" />
        <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-bold text-zinc-800">{t('industry.demo.mock.timeline.day14')}</span>
            <span className="text-xs font-medium text-zinc-400">{t('industry.demo.mock.timeline.weekAgo1')}</span>
          </div>
          <p className="text-sm font-medium text-zinc-600 mb-3">{t('industry.demo.mock.timeline.firstFeed')}</p>
          <div className="flex gap-2 items-center bg-gray-50 p-2 rounded-xl">
            <BrandBadge name={brandName} logo={brandLogo} />
            <span className="text-xs font-bold text-zinc-500">1ml/L</span>
          </div>
        </div>
      </div>
    </div>

    <Hint textKey="industry.demo.timelineHint" />
  </div>
);

const ActivityMockup: FC<MockupProps> = ({ brandName, brandLogo }) => (
  <div className="space-y-4">
    <div className="flex items-center gap-2 mb-2">
      <FileText className="w-5 h-5 text-zinc-400" />
      <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">{t('industry.demo.mock.activity.title')}</p>
    </div>

    {/* Fake form */}
    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden pb-2">
      <div className="px-5 py-4 bg-emerald-50 border-b border-emerald-100 flex items-center gap-3">
        <Droplet className="w-5 h-5 text-emerald-700" />
        <span className="text-base font-bold text-emerald-900">{t('industry.demo.mock.activity.watering')}</span>
      </div>

      <div className="p-5 space-y-5">
        <div>
          <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider block mb-2">{t('industry.demo.mock.activity.volume')}</label>
          <div className="flex gap-2">
            <div className="flex-1 px-4 py-3 rounded-xl border-2 border-emerald-500 bg-emerald-50 text-base text-emerald-900 font-bold">1500</div>
            <div className="px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-base text-zinc-500 font-medium">ml</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider block mb-2">pH</label>
            <div className="px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-base text-zinc-800 font-bold">6.2</div>
          </div>
          <div>
            <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider block mb-2">EC</label>
            <div className="px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-base text-zinc-800 font-bold">1.4</div>
          </div>
        </div>

        <div className="pt-2">
          <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider block mb-3">{t('industry.demo.mock.activity.productsApplied')}</label>

          <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-3 shadow-sm">
            <div className="flex items-center gap-4">
              {brandLogo ? (
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden border border-emerald-200 bg-white shadow-sm">
                  <img src={brandLogo} alt={brandName} className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className="w-12 h-12 rounded-xl bg-emerald-600 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <span className="text-white text-xl font-bold">{brandName.charAt(0)}</span>
                </div>
              )}
              <div className="flex-1 min-w-0">
                <p className="text-base font-bold text-zinc-900">{brandName}</p>
                <p className="text-xs font-medium text-zinc-500 truncate">{t('industry.demo.mock.activity.biofertilizer')}</p>
              </div>
              <div className="text-right">
                <p className="text-base font-black text-emerald-700 bg-emerald-100 px-2 py-1 rounded-lg">2 ml/L</p>
              </div>
            </div>
          </div>

          <button type="button" className="w-full mt-3 py-3 rounded-xl border-2 border-dashed border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 transition-colors text-sm font-semibold text-zinc-500 hover:text-emerald-700 text-center">
            {t('industry.demo.mock.activity.addProduct')}
          </button>
        </div>
      </div>
    </div>

    <Hint textKey="industry.demo.activityHint" />
  </div>
);

const RecommendationsMockup: FC<MockupProps> = ({ brandName, brandLogo }) => (
  <div className="space-y-4">
    <div className="flex items-center gap-2 mb-2">
      <Lightbulb className="w-5 h-5 text-zinc-400" />
      <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">{t('industry.demo.mock.recommendations.title')}</p>
    </div>

    {/* Primary recommendation */}
    <div className="rounded-2xl border-2 border-emerald-400 bg-emerald-50/80 p-5 shadow-sm">
      <div className="flex gap-4">
        <div className="w-12 h-12 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center flex-shrink-0">
          <Lightbulb className="w-6 h-6 text-emerald-700" />
        </div>
        <div className="flex-1">
          <p className="text-base font-bold text-zinc-900 leading-snug">{t('industry.demo.mock.recommendations.applyToday').replace('{brand}', brandName)}</p>
          <p className="text-xs font-medium text-zinc-500 mt-2 mb-3 leading-relaxed">{t('industry.demo.mock.recommendations.basedOnStage')}</p>
          <div className="flex flex-wrap gap-2 items-center">
            <BrandBadge name={brandName} logo={brandLogo} />
            <span className="inline-flex items-center px-2 py-1 rounded-lg bg-emerald-200 text-xs font-bold text-emerald-800">{t('industry.demo.mock.recommendations.suggested')}</span>
          </div>
        </div>
      </div>
    </div>

    {/* Info insight */}
    <div className="rounded-2xl border border-blue-200 bg-blue-50/80 p-5">
      <div className="flex gap-4">
        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
          <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className="flex-1 pt-1">
          <p className="text-sm font-bold text-zinc-900">{t('industry.demo.mock.recommendations.ecLow')}</p>
          <p className="text-xs font-medium text-zinc-600 mt-1">{t('industry.demo.mock.recommendations.ecTarget')}</p>
        </div>
      </div>
    </div>

    {/* Warning insight */}
    <div className="rounded-2xl border border-amber-200 bg-amber-50/80 p-5">
      <div className="flex gap-4">
        <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
          <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <div className="flex-1 pt-1">
          <p className="text-sm font-bold text-zinc-900">{t('industry.demo.mock.recommendations.increaseCalMag')}</p>
          <p className="text-xs font-medium text-zinc-600 mt-1 mb-2">{t('industry.demo.mock.recommendations.calciumBoost')}</p>
          <BrandBadge name="CalMag Plus" logo={null} />
        </div>
      </div>
    </div>

    <Hint textKey="industry.demo.recommendationsHint" />
  </div>
);

const BrandHubMockup: FC<MockupProps> = ({ brandName, brandLogo }) => (
  <div className="space-y-5">
    {/* Header Cover */}
    <div className="h-32 bg-emerald-800 rounded-t-3xl relative mb-14 shadow-inner">
      <div className="absolute -bottom-10 left-6 p-1.5 bg-white rounded-2xl shadow-md">
        {brandLogo ? (
          <div className="w-20 h-20 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden border border-emerald-100 bg-white">
            <img src={brandLogo} alt={brandName} className="w-full h-full object-cover" />
          </div>
        ) : (
          <div className="w-20 h-20 rounded-xl bg-emerald-600 flex items-center justify-center flex-shrink-0">
            <span className="text-white text-3xl font-black">{brandName.charAt(0)}</span>
          </div>
        )}
      </div>
      <div className="absolute top-4 right-4 px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-full flex items-center gap-2 border border-white/30">
        <Store className="w-4 h-4 text-white" />
        <span className="text-xs text-white font-bold tracking-wide">Verified</span>
      </div>
    </div>

    {/* Brand Info */}
    <div className="px-4">
      <h3 className="text-2xl font-black text-zinc-900 tracking-tight">{brandName}</h3>
      <p className="text-sm text-zinc-500 mt-1 font-medium leading-relaxed">{t('industry.demo.mock.hub.bio')}</p>

      <div className="flex gap-4 mt-5">
        <div className="bg-white px-4 py-2 rounded-xl border border-gray-200 shadow-sm shadow-gray-100">
          <span className="text-lg font-black text-zinc-900">12.4k</span>
          <span className="text-xs font-semibold text-zinc-500 ml-1">{t('industry.demo.mock.hub.followers')}</span>
        </div>
      </div>
    </div>

    <div className="px-2">
      <button type="button" className="w-full py-4 rounded-xl bg-emerald-100 hover:bg-emerald-200 border border-emerald-200/50 text-emerald-800 text-sm font-bold flex items-center justify-center gap-2 transition-colors">
        <Database className="w-4 h-4" />
        {t('industry.demo.mock.hub.importPlan')}
      </button>
    </div>

    {/* Featured Products */}
    <div className="px-2">
      <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-3">{t('industry.demo.mock.hub.featured')}</p>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 border border-gray-200 rounded-2xl bg-white shadow-sm flex flex-col items-center text-center hover:border-emerald-300 transition-colors cursor-pointer">
          <div className="w-12 h-12 rounded-full bg-emerald-50 mb-3 flex items-center justify-center">
            <Droplet className="w-6 h-6 text-emerald-600" />
          </div>
          <p className="text-sm font-bold text-zinc-900 truncate w-full mb-0.5">Grow A</p>
          <p className="text-xs font-semibold text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded-md">NPK 3-1-5</p>
        </div>
        <div className="p-4 border border-gray-200 rounded-2xl bg-white shadow-sm flex flex-col items-center text-center hover:border-orange-300 transition-colors cursor-pointer">
          <div className="w-12 h-12 rounded-full bg-orange-50 mb-3 flex items-center justify-center">
            <Flower2 className="w-6 h-6 text-orange-600" />
          </div>
          <p className="text-sm font-bold text-zinc-900 truncate w-full mb-0.5">Bloom B</p>
          <p className="text-xs font-semibold text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded-md">NPK 1-4-6</p>
        </div>
      </div>
    </div>
  </div>
);

const CalculatorMockup: FC<MockupProps> = ({ brandName, brandLogo }) => (
  <div className="space-y-6">
    <div className="flex items-center gap-3 mb-2 pb-4 border-b border-gray-200">
      <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
        <Calculator className="w-5 h-5 text-emerald-700" />
      </div>
      <div>
        <h3 className="text-base font-bold text-emerald-900">{t('industry.demo.mock.calculator.title')}</h3>
        <p className="text-xs font-medium text-emerald-700/70">Powered by {brandName}</p>
      </div>
    </div>

    {/* Tank Size */}
    <div className="border border-gray-200 rounded-2xl bg-white p-4 shadow-sm">
      <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest block mb-3">{t('industry.demo.mock.calculator.reservoir')}</label>
      <div className="relative h-12 bg-gray-100 rounded-xl flex p-1">
        <div className="absolute left-[33.33%] top-1 bottom-1 w-[33.33%] bg-white rounded-lg shadow-sm border border-gray-200 transition-all z-10" />
        <button type="button" className="flex-1 h-full z-20 flex items-center justify-center text-sm font-semibold text-zinc-500">1 L</button>
        <button type="button" className="flex-1 h-full z-20 flex items-center justify-center text-sm font-black text-zinc-900">5 L</button>
        <button type="button" className="flex-1 h-full z-20 flex items-center justify-center text-sm font-semibold text-zinc-500">10 L</button>
      </div>
    </div>

    {/* Stage selector */}
    <div className="border border-gray-200 rounded-2xl bg-white p-4 shadow-sm flex justify-between items-center cursor-pointer hover:border-emerald-300 transition-colors">
      <div>
        <span className="text-xs text-emerald-600 font-black uppercase tracking-wider block mb-0.5 cursor-pointer">Vegetative</span>
        <span className="text-base text-zinc-900 font-bold">Week 3</span>
      </div>
      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
        <ChevronDown className="w-4 h-4 text-zinc-500" />
      </div>
    </div>

    <button type="button" className="w-full py-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-base font-bold shadow-md shadow-emerald-900/10 transition-colors">
      {t('industry.demo.mock.calculator.calculate')}
    </button>

    {/* Results */}
    <div className="bg-white rounded-2xl border border-emerald-500/20 shadow-sm overflow-hidden mt-4">
      <div className="bg-emerald-50/50 px-4 py-3 border-b border-emerald-100">
        <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Recommended Recipe</span>
      </div>
      <div className="p-2">
        <div className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors">
          <div className="flex items-center gap-3">
            {brandLogo ? (
              <img src={brandLogo} alt={brandName} className="w-8 h-8 rounded-lg object-cover border border-gray-200 shadow-sm" />
            ) : (
              <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center shadow-sm">
                <span className="text-white text-[10px] font-bold">{brandName.charAt(0)}</span>
              </div>
            )}
            <span className="text-sm font-bold text-zinc-900">Grow A</span>
          </div>
          <span className="text-base font-black text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-100">10.0 ml</span>
        </div>

        <div className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors">
          <div className="flex items-center gap-3">
            {brandLogo ? (
              <img src={brandLogo} alt={brandName} className="w-8 h-8 rounded-lg object-cover border border-gray-200 shadow-sm" />
            ) : (
              <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center shadow-sm">
                <span className="text-white text-[10px] font-bold">{brandName.charAt(0)}</span>
              </div>
            )}
            <span className="text-sm font-bold text-zinc-900">Micro</span>
          </div>
          <span className="text-base font-black text-zinc-700 bg-gray-100 px-3 py-1.5 rounded-lg border border-gray-200">7.5 ml</span>
        </div>
      </div>
    </div>

    <button type="button" className="w-full py-4 rounded-xl bg-white border-2 border-emerald-600 hover:bg-emerald-50 text-emerald-700 text-sm font-bold text-center transition-colors">
      {t('industry.demo.mock.calculator.applyButton')}
    </button>
  </div>
);

const StickersMockup: FC<MockupProps> = ({ brandName, brandLogo }) => (
  <div className="space-y-4">
    <div className="flex items-center gap-2 mb-4">
      <Palette className="w-5 h-5 text-zinc-400" />
      <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">{t('industry.demo.mock.stickers.dragAndDrop')}</p>
    </div>

    {/* Photo Mockup */}
    <div className="h-96 bg-zinc-800 rounded-3xl relative overflow-hidden flex items-center justify-center shadow-inner group">
      {/* Background Image representation */}
      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/60 to-zinc-900/80" />

      {/* Fake UI Overlays from a story/feed post */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
        <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur flex items-center justify-center">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </div>
        <div className="px-3 py-1.5 rounded-full bg-black/40 backdrop-blur">
          <span className="text-[10px] text-white font-bold uppercase tracking-widest">Share Update</span>
        </div>
      </div>

      <Flower2 className="w-24 h-24 text-white/10 absolute z-0" />

      {/* The Draggable Sticker */}
      <div className="absolute top-1/3 left-1/4 transform -rotate-12 hover:rotate-0 hover:scale-110 transition-transform cursor-pointer bg-white p-2.5 rounded-2xl shadow-xl shadow-black/40 flex flex-col items-center justify-center border-[3px] border-white z-20">
        {brandLogo ? (
          <img src={brandLogo} alt={brandName} className="w-16 h-16 rounded-xl object-cover mb-1 border border-zinc-100" />
        ) : (
          <div className="w-16 h-16 rounded-xl bg-emerald-600 flex items-center justify-center mb-1">
            <span className="text-white text-3xl font-black">{brandName.charAt(0)}</span>
          </div>
        )}
        <span className="text-[9px] font-black uppercase text-zinc-400 tracking-widest mt-1">Powered By</span>
        <span className="text-xs font-black text-emerald-800 tracking-tight">{brandName}</span>
      </div>

      {/* Growth Stage Sticker */}
      <div className="absolute bottom-1/4 right-8 transform rotate-6 bg-yellow-400 p-2 rounded-xl shadow-lg border-2 border-yellow-300 z-20">
        <span className="text-[10px] font-black uppercase text-yellow-900">Week 3 Veg 🔥</span>
      </div>
    </div>

    <div className="px-5 py-4 rounded-2xl bg-emerald-50 border border-emerald-100 mt-6">
      <p className="text-sm text-emerald-800 text-center font-bold leading-relaxed">
        {t('industry.demo.mock.stickers.communityText')}
      </p>
    </div>
  </div>
);

export default IndustryDemo;
