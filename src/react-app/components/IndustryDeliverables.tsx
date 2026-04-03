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
            color: 'text-emerald-400',
            bg: 'bg-emerald-500/10',
            border: 'border-emerald-500/20'
        },
        {
            id: 'pillar2',
            title: t('industry.demo.deliverables.pillar2.title'),
            desc: t('industry.demo.deliverables.pillar2.desc'),
            Icon: Calculator,
            color: 'text-emerald-400',
            bg: 'bg-emerald-500/10',
            border: 'border-emerald-500/20'
        },
        {
            id: 'pillar3',
            title: t('industry.demo.deliverables.pillar3.title'),
            desc: t('industry.demo.deliverables.pillar3.desc'),
            Icon: BarChart3,
            color: 'text-emerald-400',
            bg: 'bg-emerald-500/10',
            border: 'border-emerald-500/20'
        }
    ];

    return (
        <section className="py-24 md:py-32 bg-zinc-950">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-tight">
                        {t('industry.demo.deliverables.title')}
                    </h2>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-medium">
                        {t('industry.demo.deliverables.subtitle')}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {deliverables.map((item) => (
                        <div key={item.id} className={`p-10 rounded-[32px] border ${item.border} bg-zinc-900/40 relative overflow-hidden group hover:bg-zinc-900/60 transition-all duration-300`}>
                            <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mb-8 shadow-inner`}>
                                <item.Icon className={`w-7 h-7 ${item.color}`} />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-4 tracking-tight">
                                {item.title}
                            </h3>
                            <p className="text-zinc-500 leading-relaxed font-medium">
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
