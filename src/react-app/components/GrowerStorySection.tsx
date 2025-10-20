import type { FC } from 'react';
import type { LucideIcon } from './icons';
import { Lock, Sprout, Wrench } from './icons';

interface GrowerStorySectionProps {
  onCTAClick: () => void;
}

const pillars: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
}> = [
  {
    icon: Lock,
    title: 'Privacidade real',
    description: 'Controla tudo sem expor o grow. Dados ficam anônimos e só você decide o que compartilhar.'
  },
  {
    icon: Sprout,
    title: 'Comunidade que cultiva',
    description: 'Construímos o mybud ouvindo growers que já erraram rega, confundiram genética e aprenderam apanhando.'
  },
  {
    icon: Wrench,
    title: 'Autonomia total',
    description: 'O app se adapta ao seu cultivo. Você define fases, tarefas e registra do jeito que fizer sentido.'
  }
];

const GrowerStorySection: FC<GrowerStorySectionProps> = ({ onCTAClick }) => {
  return (
    <section id="sobre" className="relative overflow-hidden bg-white">
      <div className="absolute inset-0">
        <div className="absolute -top-24 left-1/4 h-48 w-48 rounded-full bg-[#D5C0FD]/40 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-56 w-56 rounded-full bg-[#EB4C80]/15 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-14 px-6 py-20 lg:flex-row lg:items-center lg:px-10">
        <div className="flex-1">
          <span className="inline-flex items-center justify-center rounded-full bg-[#E6E7E8]/70 px-4 py-2 text-sm font-semibold text-[#288664] shadow-sm shadow-[#0000000f]">
            Seção 4 · Propósito
          </span>
          <h2 className="mt-6 text-3xl font-bold text-neutral-900 md:text-4xl lg:text-5xl">
            Feito de grower, pra grower.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-neutral-700">
            A ideia nasceu da frustração de quem já esqueceu rega, confundiu genéticas e perdeu o timing da flora. O mybud
            é o diário que entende o cultivo, sem complicar. Ele traz as informações certas no momento certo — sem precisar
            abrir o Google ou seguir planilhas intermináveis.
          </p>
          <p className="mt-4 text-base text-neutral-600">
            Privado, leve e feito pra você cuidar do que realmente importa: suas plantas.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="flex items-start gap-4 rounded-2xl border border-[#E6E7E8] bg-white/80 p-5 shadow-sm shadow-[#00000012]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E6E7E8]/60 text-[#288664]">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-neutral-900">{pillar.title}</h3>
                    <p className="mt-1 text-sm text-neutral-600">{pillar.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

            <button
              onClick={onCTAClick}
              className="mt-8 inline-flex items-center justify-center rounded-xl border border-[#E6E7E8] bg-white px-6 py-3 text-sm font-semibold text-[#288664] transition-colors hover:bg-[#E6E7E8]/60"
            >
              Quero fazer parte do beta →
            </button>
        </div>

        <div className="flex-1">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-[#EB4C80]/20 blur-2xl" />
            <div className="absolute -bottom-6 -right-8 h-28 w-28 rounded-full bg-[#D5C0FD]/40 blur-2xl" />
            <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#E6E7E8] via-white to-[#D5C0FD]/60 p-8 shadow-[0_35px_60px_-30px_rgba(0,0,0,0.35)]">
              <div className="rounded-[24px] border border-white/60 bg-white/80 p-6 backdrop-blur-sm">
                <img
                  src="/mybud - Budzinho Colorido 2.png"
                  alt="Budzinho anotando o diário de cultivo"
                  className="mx-auto h-48 w-auto object-contain"
                />
                <div className="mt-6 rounded-2xl bg-[#D5C0FD]/40 p-4 text-center text-sm font-medium text-[#288664]">
                  Acompanhe, aprenda e evolua junto com cada planta.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowerStorySection;
