import type { FC } from 'react';
import { t } from '../lib/i18n';
import { Sprout, Tag, TestTube, Stethoscope, Users, Dna, Building2, Factory } from 'lucide-react';

const IndustryEcosystem: FC = () => {
  // MyBud connects the entire cultivation ecosystem
  const stakeholders = [
    { name: 'Growers', Icon: Sprout },
    { name: 'Marcas', Icon: Tag },
    { name: 'Laboratórios', Icon: TestTube },
    { name: 'Profissionais', Icon: Stethoscope },
    { name: 'Associações', Icon: Users },
    { name: 'Breeders', Icon: Dna },
    { name: 'Clubes', Icon: Building2 },
    { name: 'Fabricantes', Icon: Factory },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
            {t('industry.ecosystem.title')}
          </h2>

          <p className="text-lg text-zinc-600 mb-4 max-w-3xl mx-auto leading-relaxed">
            {t('industry.ecosystem.connection')}
          </p>
          
          <p className="text-xl font-semibold text-emerald-700 mb-12 max-w-2xl mx-auto">
            {t('industry.ecosystem.impact')}
          </p>

          {/* Visual Network - Circle of Connections */}
          <div className="relative mt-16">
            {/* Center - MyBud */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-emerald-600 to-emerald-700 flex items-center justify-center text-white font-bold text-lg shadow-lg z-20 border border-emerald-500/20">
              <span className="tracking-tight">MyBud</span>
            </div>

            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ height: '500px' }}>
              {stakeholders.map((_, idx) => {
                const angle = (idx * 360) / stakeholders.length;
                const rad = (angle * Math.PI) / 180;
                const centerX = 50;
                const centerY = 50;
                const radius = 35;
                const x = centerX + radius * Math.cos(rad);
                const y = centerY + radius * Math.sin(rad);
                
                return (
                  <line
                    key={idx}
                    x1={`${centerX}%`}
                    y1={`${centerY}%`}
                    x2={`${x}%`}
                    y2={`${y}%`}
                    stroke="#e5e7eb"
                    strokeWidth="1.5"
                    opacity="0.5"
                  />
                );
              })}
            </svg>

            {/* Stakeholders in Circle */}
            <div className="relative" style={{ height: '500px' }}>
              {stakeholders.map((item, idx) => {
                const angle = (idx * 360) / stakeholders.length - 90;
                const rad = (angle * Math.PI) / 180;
                const radius = 200;
                const x = radius * Math.cos(rad);
                const y = radius * Math.sin(rad);
                const { Icon } = item;
                
                return (
                  <div
                    key={idx}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    }}
                  >
                    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all duration-300 w-28 text-center group">
                      <div className="flex justify-center mb-2">
                        <Icon className="w-6 h-6 text-zinc-600 group-hover:text-emerald-700 transition-colors duration-300" strokeWidth={1.5} />
                      </div>
                      <div className="text-xs font-medium text-zinc-700">{item.name}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryEcosystem;

