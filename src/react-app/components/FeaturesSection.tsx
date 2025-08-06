import type { FC } from 'react';

interface Feature {
  title: string;
  description: string;
}

interface FeaturesSectionProps {
  features: readonly Feature[];
  currentLanguage?: string;
}

const FeaturesSection: FC<FeaturesSectionProps> = ({ features, currentLanguage = 'pt' }) => {
  const texts = {
    pt: {
      title: 'o app feito por quem vive a rotina do grow',
      subtitle: 'ferramentas que resolvem as dores reais do cultivo, da semente à colheita.',
      features: [
        {
          title: 'diário de cultivo integrado',
          desc: 'nunca mais perca o controle das fases. mybud organiza o histórico e os estágios de cada planta automaticamente.'
        },
        {
          title: 'anotações por voz',
          desc: 'mãos na terra? apenas fale. diga o que fez, e o app transcreve e organiza tudo no diário da sua planta.'
        },
        {
          title: 'alertas inteligentes',
          desc: 'seja lembrado na hora certa. receba notificações personalizadas de rega, nutrientes, e mudanças de fotoperíodo.'
        },
        {
          title: 'guias para iniciantes',
          desc: 'começando agora? mybud te guia em cada passo com dicas práticas e sem julgamentos, para sua primeira colheita ser um sucesso.'
        }
      ]
    },
    en: {
      title: 'The app built by those who live the grow routine',
      subtitle: 'Tools that solve the real pains of cultivation, from seed to harvest.',
      features: [
        {
          title: 'Integrated grow journal',
          desc: 'Never lose track of stages again. My Bud automatically organizes the history and phases for each plant.'
        },
        {
          title: 'Voice notes',
          desc: 'Hands dirty? Just talk. Say what you did, and the app transcribes and logs it in your plant\'s journal.'
        },
        {
          title: 'Smart alerts',
          desc: 'Get reminded at the right time. Receive custom notifications for watering, nutrients, and photoperiod changes.'
        },
        {
          title: 'Beginner\'s guides',
          desc: 'Just starting? My Bud guides you every step of the way with practical, judgment-free tips for a successful first harvest.'
        }
      ]
    },
    es: {
      title: 'La app creada por quienes viven la rutina del cultivo',
      subtitle: 'Herramientas que resuelven los dolores reales del cultivo, desde la semilla hasta la cosecha.',
      features: [
        {
          title: 'Diario de cultivo integrado',
          desc: 'Nunca más pierdas el control de las fases. My Bud organiza automáticamente el historial y las etapas de cada planta.'
        },
        {
          title: 'Notas por voz',
          desc: '¿Manos en la tierra? Solo habla. Di lo que hiciste, y la app transcribe y organiza todo en el diario de tu planta.'
        },
        {
          title: 'Alertas inteligentes',
          desc: 'Recibe recordatorios en el momento correcto. Notificaciones personalizadas para riego, nutrientes y cambios de fotoperíodo.'
        },
        {
          title: 'Guías para principiantes',
          desc: '¿Empezando ahora? My Bud te guía en cada paso con consejos prácticos y sin juicios, para que tu primera cosecha sea un éxito.'
        }
      ]
    }
  };

  const t = texts[currentLanguage as keyof typeof texts] || texts.pt;

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2
            className="text-2xl md:text-3xl font-medium mb-6"
            style={{ color: 'var(--text-zinc-800)' }}
          >
            {t.title}
          </h2>
          <p
            className="text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: 'var(--text-zinc-600)' }}
          >
            {t.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.features.map((feature, idx) => (
            <div key={idx} className="card">
              <div className="flex items-start space-x-4">
                <div
                  className="p-2 rounded-lg"
                  style={{ background: 'var(--emerald-100)' }}
                >
                  {/* Feature icons */}
                  {idx === 0 && (
                    <svg
                      className="w-5 h-5"
                      style={{ color: 'var(--emerald-600)' }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H7.5A2.25 2.25 0 005.25 6v12A2.25 2.25 0 007.5 20.25h9A2.25 2.25 0 0018.75 18V6A2.25 2.25 0 0016.5 3.75z"
                      />
                    </svg>
                  )}
                  {idx === 1 && (
                    <svg
                      className="w-5 h-5"
                      style={{ color: 'var(--emerald-600)' }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
                      />
                    </svg>
                  )}
                  {idx === 2 && (
                    <svg
                      className="w-5 h-5"
                      style={{ color: 'var(--emerald-600)' }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                      />
                    </svg>
                  )}
                  {idx === 3 && (
                    <svg
                      className="w-5 h-5"
                      style={{ color: 'var(--emerald-600)' }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                      />
                    </svg>
                  )}
                </div>
                <div>
                  <h3
                    className="font-medium mb-2"
                    style={{ color: 'var(--text-zinc-800)' }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'var(--text-zinc-600)' }}
                  >
                    {feature.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
