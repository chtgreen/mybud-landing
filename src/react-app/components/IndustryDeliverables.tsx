import type { FC } from 'react';
import { t } from '../lib/i18n';
import { Shield, Calculator, BarChart3 } from './icons';

const IndustryDeliverables: FC = () => {
    const deliverables = [
        {
            id: 'pillar1',
            title: t('industry.demo.deliverables.pillar1.title'),
            desc: t('industry.demo.deliverables.pillar1.desc'),
            Icon: Shield,
            color: 'text-rose-600',
            bg: 'bg-rose-100',
            border: 'border-rose-200'
        },
        {
            id: 'pillar2',
            title: t('industry.demo.deliverables.pillar2.title'),
            desc: t('industry.demo.deliverables.pillar2.desc'),
            Icon: Calculator,
            color: 'text-blue-600',
            bg: 'bg-blue-100',
            border: 'border-blue-200'
        },
        {
            id: 'pillar3',
            title: t('industry.demo.deliverables.pillar3.title'),
            desc: t('industry.demo.deliverables.pillar3.desc'),
            Icon: BarChart3,
            color: 'text-violet-600',
            bg: 'bg-violet-100',
            border: 'border-violet-200'
        }
    ];

    return (
        <section className="py-20 md:py-28 bg-white border-t border-gray-100">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 mb-6 font-display tracking-tight leading-tight">
                        {t('industry.demo.deliverables.title')}
                    </h2>
                    <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto font-medium">
                        {t('industry.demo.deliverables.subtitle')}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {deliverables.map((item) => (
                        <div key={item.id} className={`p-8 rounded-3xl border ${item.border} ${item.bg} bg-opacity-30 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300`}>
                            <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mb-6`}>
                                <item.Icon className={`w-7 h-7 ${item.color}`} />
                            </div>
                            <h3 className="text-xl font-bold text-zinc-900 mb-4 tracking-tight">
                                {item.title}
                            </h3>
                            <p className="text-zinc-600 leading-relaxed text-sm md:text-base font-medium">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustryDeliverables;
