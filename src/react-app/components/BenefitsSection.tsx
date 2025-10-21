import type { FC } from 'react';
import type { LucideIcon } from './icons';
import { Brain, Clock3, Sprout } from './icons';

const promises: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
  aria: string;
  iconClass: string;
}> = [
  {
    icon: Sprout,
    title: 'Previsibilidade real',
    description: 'Você sabe o que vem a seguir em cada fase. O app sinaliza estágio, janela ideal e tarefas pendentes.',
    aria: 'Previsibilidade',
    iconClass: 'text-[#288664]'
  },
  {
    icon: Brain,
    title: 'Memória automática',
    description: 'Falou, registrou, ficou salvo. Voz, texto ou foto viram histórico organizado por planta.',
    aria: 'Memória automática',
    iconClass: 'text-[#7A49C7]'
  },
  {
    icon: Clock3,
    title: 'Rotina leve',
    description: 'O mybud lembra de tudo e avisa no momento certo. Você só confirma e segue pro próximo cuidado.',
    aria: 'Rotina leve',
    iconClass: 'text-[#EB4C80]'
  }
];

const BenefitsSection: FC = () => {
  return (
    <section id="beneficios" className="relative overflow-hidden bg-[#D5C0FD]">
      <div className="absolute inset-0">
        <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-white/40 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#EB4C80]/20 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center justify-center rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-[#288664] shadow-sm shadow-[#0000000f]">
            Seção 3 · Promessas claras
          </span>
          <h2 className="mt-6 text-3xl font-bold text-neutral-900 md:text-4xl lg:text-5xl">
            O que muda no seu grow:
          </h2>
          <p className="mt-4 text-lg text-neutral-700 md:text-xl">
            Traduza o valor do mybud em rotinas reais: menos improviso, mais previsibilidade e aprendizado contínuo.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {promises.map((promise) => {
            const Icon = promise.icon;
            return (
              <article
                key={promise.title}
                aria-label={promise.aria}
                className="group relative rounded-[24px] bg-white p-8 shadow-[0_24px_48px_-28px_rgba(0,0,0,0.25)]"
              >
                <div className="absolute -right-6 -top-6 h-16 w-16 rounded-3xl bg-white/60 blur-xl transition-all duration-300 group-hover:blur-2xl" />
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-[0_18px_35px_-25px_rgba(0,0,0,0.75)] ring-1 ring-black/5">
                  <Icon className={`w-7 h-7 ${promise.iconClass}`} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900">{promise.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-neutral-700">{promise.description}</p>
              </article>
            );
          })}
        </div>

        <div className="relative rounded-3xl bg-white/70 p-6 text-base text-neutral-800 shadow-lg shadow-[#0000001a] backdrop-blur-sm md:text-lg">
          Cultivar deixa de ser improviso e vira aprendizado constante — planta por planta.
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-end px-6 lg:px-10">
        <div className="relative flex max-w-sm items-end gap-4">
          <img
            src="/MyBud - Budzinho Colorido 1.png"
            alt="Mascote Budzinho sorrindo"
            className="h-32 w-32 object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.18)]"
          />
          <div className="mb-4 rounded-3xl bg-white px-5 py-4 text-sm font-semibold text-[#288664] shadow-[0_18px_48px_-24px_rgba(0,0,0,0.45)]">
            “Menos planilha, mais colheita!”
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
