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
        },
        {
            id: 'pillar2',
            title: t('industry.demo.deliverables.pillar2.title'),
            desc: t('industry.demo.deliverables.pillar2.desc'),
            Icon: Calculator,
        },
        {
            id: 'pillar3',
            title: t('industry.demo.deliverables.pillar3.title'),
            desc: t('industry.demo.deliverables.pillar3.desc'),
            Icon: BarChart3,
        }
    ];

    return (
        <section className="py-32 md:py-48 bg-white text-zinc-950 border-b border-zinc-100">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-32">
                    <h2 className="text-5xl md:text-8xl font-black text-zinc-950 mb-10 tracking-[-0.03em] leading-[0.9] lowercase">
                        {t('industry.demo.deliverables.title')}
                    </h2>
                    <p className="text-2xl text-zinc-600 max-w-3xl mx-auto font-bold lowercase opacity-90 leading-relaxed">
                        {t('industry.demo.deliverables.subtitle')}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {deliverables.map((item) => (
                        <div key={item.id} className="p-12 rounded-[48px] border border-zinc-100 bg-zinc-50/50 group hover:shadow-xl hover:bg-white transition-all duration-700">
                            <div className="w-16 h-16 rounded-[28px] bg-emerald-500 flex items-center justify-center mb-10 shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                                <item.Icon className="w-8 h-8 text-zinc-950" />
                            </div>
                            <h3 className="text-3xl font-black text-zinc-950 mb-6 tracking-tight lowercase">
                                {item.title}
                            </h3>
                            <p className="text-lg text-zinc-500 font-bold leading-relaxed lowercase opacity-90">
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
