import { useState, useEffect, type FC } from 'react';
import { t } from '../lib/i18n';
import { Target, Clock3, FileText, Lightbulb, CheckCircle2, Droplet, Store, Calculator, Palette } from './icons';

type Tab = 'tasks' | 'timeline' | 'activity' | 'recommendations' | 'hub' | 'calculator' | 'stickers';

interface IndustryDemoProps {
  onCTAClick?: () => void;
}

const IndustryDemo: FC<IndustryDemoProps> = ({ onCTAClick }) => {
  const [activeTab, setActiveTab] = useState<Tab>('tasks');
  const [brandName, setBrandName] = useState('MyBud Fert');
  const [brandLogo, setBrandLogo] = useState<string | null>(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has('brand')) setBrandName(searchParams.get('brand') as string);
    if (searchParams.has('logo')) setBrandLogo(searchParams.get('logo') as string);
  }, []);

  const tabs: { id: Tab; label: string; descKey: string; Icon: typeof Target }[] = [
    { id: 'tasks', label: t('industry.presence.tasks.title'), descKey: 'industry.demo.mock.descriptions.tasks', Icon: Target },
    { id: 'timeline', label: t('industry.presence.timeline.title'), descKey: 'industry.demo.mock.descriptions.timeline', Icon: Clock3 },
    { id: 'activity', label: t('industry.presence.activityLog.title'), descKey: 'industry.demo.mock.descriptions.activity', Icon: FileText },
    { id: 'recommendations', label: t('industry.presence.recommendations.title'), descKey: 'industry.demo.mock.descriptions.recommendations', Icon: Lightbulb },
    { id: 'hub', label: t('industry.demo.mock.hub.title'), descKey: 'industry.demo.mock.descriptions.hub', Icon: Store },
    { id: 'calculator', label: t('industry.demo.mock.calculator.title'), descKey: 'industry.demo.mock.descriptions.calculator', Icon: Calculator },
  ];

  const mockupProps = { brandName, brandLogo };

  return (
    <section id="demo" className="py-24 md:py-32 bg-zinc-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
            {t('industry.demo.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-start">
          {/* Menu */}
          <div className="md:col-span-5 space-y-4">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left p-6 rounded-3xl transition-all duration-300 border block ${isActive
                    ? 'bg-zinc-900 border-zinc-700 shadow-2xl scale-[1.02]'
                    : 'bg-transparent border-transparent hover:bg-zinc-900/40 hover:border-zinc-800 opacity-60'
                    }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${isActive ? 'bg-emerald-500 text-zinc-950' : 'bg-zinc-800 text-zinc-500'
                      }`}>
                      <tab.Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-black tracking-tight ${isActive ? 'text-white' : 'text-zinc-500'}`}>
                        {tab.label}
                      </h3>
                      {isActive && (
                        <p className="text-sm font-medium text-emerald-500/80 mt-2 leading-relaxed animate-in fade-in slide-in-from-top-2">
                          {t(tab.descKey)}
                        </p>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Device */}
          <div className="md:col-span-7 flex justify-center sticky top-32">
            <div className="w-full max-w-[360px] relative">
              {/* iPhone Frame */}
              <div className="relative bg-zinc-900 rounded-[3.5rem] p-4 shadow-2xl ring-1 ring-zinc-800">
                <div className="bg-zinc-950 rounded-[2.8rem] overflow-hidden h-[720px] w-full relative flex flex-col border border-zinc-800">
                  {/* App Header */}
                  <div className="bg-emerald-600 px-6 pt-12 pb-6 text-white flex-shrink-0 relative">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">{t('industry.demo.mock.liveBadge')}</span>
                      <div className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                    </div>
                    <h4 className="text-xl font-black">{brandName} Lab</h4>
                    <p className="text-sm font-bold text-emerald-100">{t('industry.demo.mock.vegStageWeek3')}</p>
                  </div>

                  {/* Scrollable Screen Content */}
                  <div className="flex-1 overflow-y-auto p-6 bg-zinc-950 custom-scrollbar">
                    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
                      {activeTab === 'tasks' && <TasksMockup {...mockupProps} />}
                      {activeTab === 'timeline' && <TimelineMockup {...mockupProps} />}
                      {activeTab === 'activity' && <ActivityMockup {...mockupProps} />}
                      {activeTab === 'recommendations' && <RecommendationsMockup {...mockupProps} />}
                      {activeTab === 'hub' && <BrandHubMockup {...mockupProps} />}
                      {activeTab === 'calculator' && <CalculatorMockup {...mockupProps} />}
                      {activeTab === 'stickers' && <StickersMockup {...mockupProps} />}
                    </div>
                  </div>

                  {/* Home Indicator */}
                  <div className="h-1 w-32 bg-zinc-800 mx-auto mb-2 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {onCTAClick && (
          <div className="text-center mt-24">
            <button
              onClick={onCTAClick}
              className="px-12 py-5 rounded-2xl text-xl font-black bg-emerald-500 text-zinc-950 hover:bg-emerald-400 shadow-[0_20px_40px_rgba(16,185,129,0.2)] transition-all hover:-translate-y-1"
            >
              {t('industry.demo.cta')}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

/* ─── Mock Visuals (Simplified Dark Versions) ─── */

interface MockupProps {
  brandName: string;
  brandLogo: string | null;
}

const MockItemWrapper: FC<{ children: React.ReactNode; active?: boolean }> = ({ children, active }) => (
  <div className={`p-5 rounded-3xl border mb-4 transition-all ${active ? 'bg-emerald-500/10 border-emerald-500/30 shadow-lg' : 'bg-zinc-900/50 border-zinc-800'}`}>
    {children}
  </div>
);

const TasksMockup: FC<MockupProps> = ({ brandName }) => (
  <div className="space-y-4">
    <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-6">{t('industry.demo.mock.nextTasks')}</p>
    <MockItemWrapper active>
      <div className="flex gap-4">
        <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex items-center justify-center text-zinc-950">
          <Droplet className="w-6 h-6" />
        </div>
        <div>
          <h4 className="text-white font-black">{t('industry.demo.mock.tasks.wateringNutrients')}</h4>
          <p className="text-xs font-bold text-emerald-400 mt-1">{brandName} — 2.5ml/L</p>
        </div>
      </div>
    </MockItemWrapper>
    <MockItemWrapper>
      <div className="flex gap-4 opacity-50">
        <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center text-zinc-500">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <div>
          <h4 className="text-zinc-400 font-bold">{t('industry.demo.mock.checkSoilPh')}</h4>
          <p className="text-xs text-zinc-600 mt-1">{t('industry.demo.mock.completedAgo').replace('{time}', '2h')}</p>
        </div>
      </div>
    </MockItemWrapper>
  </div>
);

const TimelineMockup: FC<MockupProps> = () => (
  <div className="space-y-6">
    {[1, 2, 3].map(i => (
      <div key={i} className="flex gap-6 relative">
        <div className={`w-3 h-3 rounded-full mt-2 z-10 ${i === 1 ? 'bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]' : 'bg-zinc-800'}`} />
        {i < 3 && <div className="absolute left-[5.5px] top-4 w-px h-full bg-zinc-900" />}
        <div className="flex-1">
          <h5 className="text-xs font-black text-zinc-500 mb-2 uppercase">{t('industry.demo.mock.dayNum').replace('{num}', (24 - i).toString())}</h5>
          <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-2xl">
            <p className="text-sm font-bold text-white">{t('industry.demo.mock.vegFertilization')}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const ActivityMockup: FC<MockupProps> = ({ brandName }) => (
  <div className="space-y-6">
    <div className="bg-zinc-900/80 rounded-3xl p-6 border border-zinc-800">
      <div className="flex justify-between items-center mb-8">
        <span className="text-lg font-black text-white">{t('industry.demo.mock.activity.newWatering')}</span>
        <Droplet className="text-emerald-500" />
      </div>
      <div className="space-y-4">
        <div className="flex justify-between p-4 bg-zinc-950 rounded-2xl border border-zinc-800">
          <span className="text-zinc-500 font-bold uppercase text-[10px]">{t('industry.demo.mock.activity.volume')}</span>
          <span className="text-white font-black">2500 ml</span>
        </div>
        <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl">
          <p className="text-[10px] font-black text-emerald-500 uppercase mb-3">{t('industry.demo.mock.activity.product')}</p>
          <div className="flex justify-between items-center">
            <span className="text-white font-black">{brandName}</span>
            <span className="bg-zinc-950 px-2 py-1 rounded text-emerald-400 font-mono text-xs">2 ml/L</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const RecommendationsMockup: FC<MockupProps> = ({ brandName }) => (
  <div className="space-y-6">
    <div className="p-6 bg-emerald-500 rounded-[32px] text-zinc-950 relative overflow-hidden">
      <Lightbulb className="absolute -right-4 -top-4 w-32 h-32 opacity-10" />
      <h4 className="text-xl font-black mb-2 tracking-tight">{t('industry.demo.mock.expertTip')}</h4>
      <p className="text-sm font-bold leading-relaxed">
        {t('industry.demo.mock.recommendations.suggestion').replace('{brand}', brandName)}
      </p>
    </div>
  </div>
);

const BrandHubMockup: FC<MockupProps> = ({ brandName }) => (
  <div className="space-y-6">
    <div className="h-32 bg-gradient-to-br from-emerald-600 to-teal-800 rounded-3xl relative">
      <div className="absolute -bottom-8 left-6 w-16 h-16 bg-zinc-950 border-4 border-zinc-950 rounded-2xl flex items-center justify-center">
        <span className="text-2xl font-black text-white">{brandName.charAt(0)}</span>
      </div>
    </div>
    <div className="pt-8 px-2">
      <h4 className="text-2xl font-black text-white">{brandName}</h4>
      <p className="text-sm text-zinc-500 font-medium mt-2">{t('industry.demo.mock.hub.bio')}</p>
      <button className="w-full mt-8 py-4 bg-emerald-500 text-zinc-950 font-black rounded-2xl">{t('industry.demo.mock.hub.follow')}</button>
    </div>
  </div>
);

const CalculatorMockup: FC<MockupProps> = ({ brandName }) => (
  <div className="space-y-6">
    <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-3xl">
      <h4 className="text-lg font-black text-white mb-6">{t('industry.demo.mock.calculator.title')}</h4>
      <div className="space-y-4">
        <div>
          <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest block mb-2">{t('industry.demo.mock.calculator.tankSize')}</label>
          <div className="flex gap-2">
            {[10, 20, 50].map(v => (
              <div key={v} className={`flex-1 py-3 text-center rounded-xl border font-black ${v === 20 ? 'bg-emerald-500 border-emerald-500 text-zinc-950' : 'bg-zinc-950 border-zinc-800 text-zinc-500'}`}>
                {v}L
              </div>
            ))}
          </div>
        </div>
        <div className="pt-4 border-t border-zinc-800">
          <div className="flex justify-between items-center">
            <span className="text-zinc-400 font-bold">{brandName}</span>
            <span className="text-xl font-black text-emerald-400">40 ml</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const StickersMockup: FC<MockupProps> = ({ brandName }) => (
  <div className="space-y-6">
    <div className="aspect-[3/4] bg-zinc-900 rounded-[32px] border-2 border-dashed border-zinc-800 flex items-center justify-center p-8 text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <Palette className="w-12 h-12 text-zinc-700 mb-4" />
        <p className="text-sm font-bold text-zinc-500">{t('industry.demo.mock.stickersComingSoon')}</p>
      </div>
      {/* Fake Sticker */}
      <div className="absolute bottom-10 right-6 bg-white p-3 rounded-2xl shadow-2xl rotate-6 flex flex-col items-center border-[4px] border-white active:scale-110 transition-transform cursor-pointer">
        <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center mb-1">
          <span className="text-white font-black text-xl">{brandName.charAt(0)}</span>
        </div>
        <span className="text-[8px] font-black text-emerald-800 uppercase">{t('industry.demo.mock.poweredBy')}</span>
        <span className="text-[10px] font-black text-zinc-900">{brandName}</span>
      </div>
    </div>
  </div>
);


export default IndustryDemo;

