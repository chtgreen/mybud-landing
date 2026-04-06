import { useState, useEffect, type FC } from 'react';
import { t } from '../lib/i18n';
import { Target, Sprout, ShieldCheck, Droplet, CheckCircle2 } from 'lucide-react';

type Scenario = 'watering' | 'soil' | 'pests';

interface IndustryDemoProps {
  onCTAClick?: () => void;
}

const IndustryDemo: FC<IndustryDemoProps> = ({ onCTAClick }) => {
  const [activeScenario, setActiveScenario] = useState<Scenario>('watering');
  const [brandName, setBrandName] = useState('MyBud Fert');

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has('brand')) setBrandName(searchParams.get('brand') as string);
  }, []);

  const scenarios: { id: Scenario; label: string; desc: string; Icon: any }[] = [
    {
      id: 'watering',
      label: t('industry.demo.scenarios.watering.title'),
      desc: t('industry.demo.scenarios.watering.desc'),
      Icon: Droplet
    },
    {
      id: 'soil',
      label: t('industry.demo.scenarios.soil.title'),
      desc: t('industry.demo.scenarios.soil.desc'),
      Icon: Sprout
    },
    {
      id: 'pests',
      label: t('industry.demo.scenarios.pests.title'),
      desc: t('industry.demo.scenarios.pests.desc'),
      Icon: ShieldCheck
    },
  ];

  return (
    <section id="brand-experience" className="py-24 md:py-48 bg-zinc-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-32 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black mb-10 tracking-[0.4em] uppercase">
            SUA MARCA NA ROTINA
          </div>
          <h2 className="text-4xl md:text-8xl font-black text-white mb-10 tracking-[-0.05em] lowercase leading-[0.9]">
            como seu cliente encontra você no app
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Menu */}
          <div className="lg:col-span-5 space-y-4">
            {scenarios.map((scenario) => {
              const isActive = activeScenario === scenario.id;
              return (
                <button
                  key={scenario.id}
                  onClick={() => setActiveScenario(scenario.id)}
                  className={`w-full text-left p-8 rounded-[40px] transition-all duration-700 border group block relative overflow-hidden ${isActive
                    ? 'bg-white/[0.03] border-white/10 shadow-2xl scale-[1.02] z-10'
                    : 'bg-transparent border-transparent hover:bg-white/[0.02] hover:border-white/5 opacity-40 hover:opacity-80'
                    }`}
                >
                  <div className="flex items-center gap-6 relative z-10">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-700 ${isActive
                      ? 'bg-emerald-500 text-zinc-950 shadow-[0_0_30px_rgba(16,185,129,0.4)] scale-110'
                      : 'bg-zinc-900 border border-white/5 text-zinc-600 group-hover:text-emerald-500/50'
                      }`}>
                      <scenario.Icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-2xl font-black tracking-tight lowercase ${isActive ? 'text-white' : 'text-zinc-500'}`}>
                        {scenario.label}
                      </h3>
                      {isActive && (
                        <p className="text-lg font-bold text-zinc-500 mt-3 leading-tight animate-in fade-in slide-in-from-top-2 lowercase tracking-tight">
                          {scenario.desc}
                        </p>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Device Viewport */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="w-full max-w-[420px] relative">
              {/* Smartphone Frame */}
              <div className="relative bg-zinc-900 rounded-[64px] p-2.5 shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] ring-1 ring-white/10 border-4 border-zinc-800">
                <div className="bg-black rounded-[54px] overflow-hidden h-[750px] w-full relative flex flex-col">

                  {/* App Header Simulation */}
                  <div className="bg-emerald-600 px-8 pt-16 pb-8 text-white flex-shrink-0 relative">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-200/60">mybud live</span>
                    </div>
                    <h4 className="text-3xl font-black tracking-tighter lowercase leading-none">{brandName} lab</h4>
                    <p className="text-sm font-bold text-emerald-100/80 mt-2 lowercase">HOJE: Fase Vegetativa — Semana 3</p>
                  </div>

                  {/* Scrollable Content */}
                  <div className="flex-1 overflow-y-auto p-8 bg-zinc-950">
                    <div className="animate-in fade-in slide-in-from-bottom-12 duration-700">
                      {activeScenario === 'watering' && <WateringMockup brandName={brandName} />}
                      {activeScenario === 'soil' && <SoilMockup brandName={brandName} />}
                      {activeScenario === 'pests' && <PestMockup brandName={brandName} />}
                    </div>
                  </div>

                  {/* Home Indicator */}
                  <div className="h-1.5 w-32 bg-zinc-800 mx-auto mb-3 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── SCENARIO MOCKUPS ─── */

const WateringMockup: FC<{ brandName: string }> = ({ brandName }) => (
  <div className="space-y-8 text-left">
    <h4 className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-6">Próxima Tarefa</h4>
    <div className="p-6 rounded-[32px] bg-emerald-500/10 border border-emerald-500/20 group">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-14 h-14 rounded-2xl bg-emerald-500 flex items-center justify-center text-zinc-950 shadow-lg">
          <Droplet className="w-8 h-8 font-black" />
        </div>
        <div className="flex-1">
          <p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-1">Rega técnica</p>
          <h5 className="text-white text-2xl font-black lowercase">{brandName} — 2ml/L</h5>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 rounded-2xl bg-zinc-900 border border-white/5">
          <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">pH Alvo</p>
          <p className="text-white font-black text-lg">6.2</p>
        </div>
        <div className="p-4 rounded-2xl bg-zinc-900 border border-white/5">
          <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">PPM Ideal</p>
          <p className="text-white font-black text-lg">850</p>
        </div>
      </div>
      <button className="w-full mt-6 py-4 rounded-2xl bg-emerald-500 text-zinc-950 font-black text-sm uppercase tracking-widest animate-pulse">
        confirmar rega
      </button>
    </div>
  </div>
);

const SoilMockup: FC<{ brandName: string }> = ({ brandName }) => (
  <div className="space-y-8 text-left">
    <h4 className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-6">Preparo do Solo</h4>
    <div className="p-6 rounded-[32px] bg-zinc-900/50 border border-white/10">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center text-emerald-500 border border-white/5">
          <Sprout className="w-6 h-6" />
        </div>
        <h5 className="text-white text-xl font-black lowercase">Receita Super Soil MyBud</h5>
      </div>
      <div className="space-y-4">
        <div className="flex justify-between items-center p-4 rounded-2xl bg-zinc-950 border border-white/5">
          <span className="text-zinc-400 font-black lowercase text-sm">Coco {brandName}</span>
          <span className="text-emerald-500 font-mono font-black">50%</span>
        </div>
        <div className="flex justify-between items-center p-4 rounded-2xl bg-zinc-950 border border-white/5">
          <span className="text-zinc-400 font-black lowercase text-sm">Perlita expansão</span>
          <span className="text-emerald-500 font-mono font-black">30%</span>
        </div>
        <div className="flex justify-between items-center p-4 rounded-2xl bg-zinc-800 border border-emerald-500/20">
          <span className="text-white font-black lowercase text-sm">Inóculo {brandName}</span>
          <span className="text-emerald-500 font-mono font-black">20%</span>
        </div>
      </div>
    </div>
  </div>
);

const PestMockup: FC<{ brandName: string }> = ({ brandName }) => (
  <div className="space-y-8 text-left">
    <h4 className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-6">Manejo Ativo</h4>
    <div className="p-6 rounded-[32px] bg-red-500/10 border border-red-500/20">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 rounded-2xl bg-red-500 flex items-center justify-center text-zinc-950 shadow-lg">
          <ShieldCheck className="w-7 h-7" />
        </div>
        <div>
          <h5 className="text-white text-xl font-black lowercase leading-tight">Alerta de Gnats</h5>
          <p className="text-red-400 text-xs font-black uppercase tracking-widest">Protocolo sugerido</p>
        </div>
      </div>
      <div className="space-y-6">
        <div className="flex gap-4">
          <div className="w-6 h-6 rounded-full bg-zinc-950 border border-red-500/40 flex items-center justify-center flex-shrink-0 text-[10px] font-black text-red-500">1</div>
          <p className="text-zinc-400 font-bold lowercase text-sm">Aplicar <span className="text-white">EM-5 {brandName}</span> — 5ml/L nas regas.</p>
        </div>
        <div className="flex gap-4">
          <div className="w-6 h-6 rounded-full bg-zinc-950 border border-red-500/40 flex items-center justify-center flex-shrink-0 text-[10px] font-black text-red-500">2</div>
          <p className="text-zinc-400 font-bold lowercase text-sm">Reduzir umidade do topo para evitar larvas.</p>
        </div>
        <div className="flex gap-4">
          <div className="w-6 h-6 rounded-full bg-zinc-950 border border-red-500/40 flex items-center justify-center flex-shrink-0 text-[10px] font-black text-red-500">3</div>
          <p className="text-zinc-400 font-bold lowercase text-sm">Acompanhar resultado em 48h no app.</p>
        </div>
      </div>
    </div>
  </div>
);

export default IndustryDemo;
