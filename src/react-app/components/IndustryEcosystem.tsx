import type { FC } from 'react';
import { Target, CheckCircle2 } from './icons';

const IndustryEcosystem: FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="bg-emerald-50 rounded-3xl p-8 md:p-12 border border-emerald-200">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-bold mb-6">
                🚀 Licenciamento B2B e Retenção
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 mb-6 leading-tight">
                Transforme seu produto físico em um bilhete VIP.
              </h2>
              <p className="text-lg text-emerald-700/80 mb-8 font-medium">
                Sua marca licencia o uso do MyBud no atacado. Quando o cliente compra o seu frasco ou equipamento, ganha de presente as funções Premium do App. A conta fecha para todos.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-zinc-900">1. Maior Taxa de Recompra</h4>
                    <p className="text-sm text-zinc-600">Para não perder o acesso ao App, o cultivador não pode trocar de marca. Ele fica preso no seu ecossistema.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-zinc-900">2. Oferta Irresistível na Prateleira</h4>
                    <p className="text-sm text-zinc-600">Seu produto se destaca da concorrência oferecendo uma ferramenta digital de ponta sem custo extra pro usuário.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400 to-emerald-300 rounded-3xl transform rotate-3 scale-105 opacity-20" />
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-zinc-900 flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-2">A Marca Paga a Licença</h3>
                <div className="w-0.5 h-6 bg-gray-200 my-2" />
                <h3 className="text-xl font-bold text-emerald-600 mb-2">O Cliente Leva o PRO</h3>
                <p className="text-sm text-zinc-500 mt-4 leading-relaxed">Você adquire pacotes B2B baratos. O cultivador escaneia o frasco e tem a inteligência premium nas mãos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryEcosystem;
