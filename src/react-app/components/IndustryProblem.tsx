import type { FC } from 'react';
import { t } from '../lib/i18n';
import { MoveRight, XCircle, AlertCircle, HelpCircle, Droplet } from 'lucide-react';

const IndustryProblem: FC = () => {
  return (
    <section className="py-24 md:py-48 bg-white text-zinc-950 relative border-b border-zinc-100 overflow-hidden">
      {/* Structural Accents */}
      <div className="absolute top-0 inset-x-0 h-px bg-zinc-50" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* Label */}
        <div className="flex items-center gap-4 mb-20 animate-in fade-in duration-1000">
          <div className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">
            {t('industry.problem.badge')}
          </span>
        </div>

        {/* Impact Headline */}
        <div className="grid lg:grid-cols-2 gap-24 items-end mb-40">
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-black text-zinc-950 tracking-[-0.03em] leading-[0.95] md:leading-[0.9] lowercase animate-in fade-in slide-in-from-bottom-8 duration-1000 whitespace-pre-line">
            {t('industry.problem.title')}
          </h2>
          <p className="text-xl md:text-2xl text-zinc-950 font-black leading-relaxed lowercase max-w-lg mb-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
            {t('industry.problem.intro')}
          </p>
        </div>

        {/* The Pain: Binary Choice */}
        <div className="grid lg:grid-cols-2 gap-8 mb-48">

          {/* Legacy side: THE MESS */}
          <div className="bg-zinc-100 rounded-[40px] md:rounded-[60px] p-10 md:p-16 border border-zinc-200 transition-all duration-700 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(255,0,0,0.03)_0%,transparent_50%)]" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-12">
                <span className="text-[10px] font-black text-red-500 uppercase tracking-widest flex items-center gap-2">
                  <XCircle className="w-3 h-3" />
                  O GAP DA APLICAÇÃO
                </span>
                <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
              </div>

              {/* Messy visuals: Problem representation */}
              <div className="relative mb-12">
                {/* Google Search Mock */}
                <div className="absolute -left-4 -top-8 bg-white p-4 rounded-2xl shadow-xl border border-zinc-200 rotate-[-4deg] max-w-[240px] opacity-80">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-zinc-200" />
                    <p className="text-[8px] font-bold text-zinc-400">google.com/search?q=qual+dosagem+vegetativo...</p>
                  </div>
                  <p className="text-xs font-black text-zinc-950">Qual a dosagem correta para semana 3?</p>
                </div>

                {/* Confusing Spreadsheet/PDF */}
                <div className="bg-white p-8 rounded-[32px] border border-zinc-200 shadow-2xl relative z-10 opacity-60 grayscale blur-[0.5px]">
                  <p className="text-[10px] font-mono text-zinc-400 mb-4 uppercase tracking-widest border-b border-zinc-100 pb-2 flex items-center gap-2">
                    <AlertCircle className="w-2.5 h-2.5" />
                    tabela_nutricional_final_v2_FINAL.pdf
                  </p>
                  <div className="space-y-4">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="flex gap-4 items-center">
                        <div className="h-2 w-12 bg-zinc-100 rounded-full" />
                        <div className="h-2 flex-1 bg-zinc-100 rounded-full" />
                        <div className="h-2 w-8 bg-zinc-50 rounded-full" />
                      </div>
                    ))}
                    <div className="pt-4 border-t border-zinc-100">
                      <p className="text-[10px] font-bold text-zinc-300 italic">"se ph &gt; 6.5, abaixe 0.2... se umidade &lt; 40%, aumente..."</p>
                    </div>
                  </div>
                </div>

                {/* Human Error Floating Note */}
                <div className="absolute -right-4 -bottom-4 bg-zinc-50 p-4 rounded-2xl shadow-lg border border-zinc-200 rotate-[3deg] flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-zinc-300" />
                  <p className="text-[10px] font-bold text-zinc-400 italic">"era 2ml ou 2.5ml?"</p>
                </div>
              </div>

              <h4 className="text-2xl font-black text-zinc-950 lowercase mb-4">Sua marca ensina, mas não está lá.</h4>
              <p className="text-zinc-500 font-bold lowercase leading-relaxed italic border-l-2 border-zinc-200 pl-8 opacity-80">
                O maior erro acontece entre ler o rótulo e abrir a ferramenta.
              </p>
            </div>
          </div>

          {/* Solution Side: THE SYNC */}
          <div className="bg-zinc-950 rounded-[40px] md:rounded-[60px] p-10 md:p-16 relative overflow-hidden shadow-2xl transition-all duration-700 group">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] group-hover:bg-emerald-500/20 transition-all duration-1000" />

            <div className="flex items-center justify-between mb-16 relative z-10">
              <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest flex items-center gap-2">
                <Droplet className="w-3 h-3" />
                DENTRO DO CULTIVO
              </span>
              <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.8)]" />
            </div>

            <div className="space-y-12 relative z-10">
              <div className="max-w-md">
                <h4 className="text-3xl md:text-5xl font-black text-white lowercase leading-[0.95] mb-8">Agora o app diz o que fazer.</h4>
                <div className="p-6 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl mb-8 group-hover:scale-105 transition-transform">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-zinc-950">
                      <span className="font-black">✓</span>
                    </div>
                    <p className="text-white font-black text-xl lowercase">Seguir sua tabela</p>
                  </div>
                  <p className="text-emerald-500/60 font-black text-xs uppercase tracking-widest">Execução garantida todos os dias.</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group/cta cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-white text-zinc-950 flex items-center justify-center group-hover/cta:scale-110 transition-all">
                  <MoveRight className="w-6 h-6 group-hover/cta:translate-x-1 transition-transform" />
                </div>
                <span className="text-xl font-black text-white lowercase group-hover/cta:text-emerald-400 transition-colors">Digitalizar meu protocolo</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default IndustryProblem;
