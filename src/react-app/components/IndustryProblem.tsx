import type { FC } from 'react';
import { Bot, Database, Target } from './icons';

const IndustryProblem: FC = () => {
  return (
    <section className="py-20 md:py-28 bg-zinc-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Pare de Vender Mídia. <span className="text-emerald-400">Torne-se a Regra.</span>
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto font-medium">
            O seu cliente compra a sua garrafa de nutrientes e some da sua vista.<br />
            Ele erra o PPM, entra em <em>overfert</em>, queima a raiz e queima a sua reputação nos fóruns e grupos de Whatsapp.<br />
            Seu PDF de dosagens virou peso de papel. Nós vamos transformar ele no motor do cultivo.
          </p>
        </div>

        {/* The Exact Mechanism Request from the CEO */}
        <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              O que nós fazemos exatamente?
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-emerald-500/10 via-emerald-500/50 to-emerald-500/10 z-0" />

            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-2xl bg-zinc-800 border-2 border-emerald-500/30 flex items-center justify-center mb-6 group-hover:bg-emerald-500/10 transition-colors">
                <Database className="w-8 h-8 text-emerald-400" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">1. Mapeamento</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Pegamos a sua tabela oficial (Vega, Flora, Engorde, Flush).
              </p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-2xl bg-zinc-800 border-2 border-amber-500/30 flex items-center justify-center mb-6 group-hover:bg-amber-500/10 transition-colors">
                <Bot className="w-8 h-8 text-amber-400" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">2. Digitalização</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Embarcamos a matemática exata de pH, EC e Mililitragem no algoritmo.
              </p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-2xl bg-zinc-800 border-2 border-blue-500/30 flex items-center justify-center mb-6 group-hover:bg-blue-500/10 transition-colors">
                <Target className="w-8 h-8 text-blue-400" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">3. Execução Guiada</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">
                O app notifica o usuário ditando exatamente qual frasco abrir e quantos ml aplicar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryProblem;
