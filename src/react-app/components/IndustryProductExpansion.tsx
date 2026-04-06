import type { FC } from 'react';
import { t } from '../lib/i18n';
import { Droplets, ShieldCheck, Sprout, Settings } from 'lucide-react';

const IndustryProductExpansion: FC = () => {
    const items = [
        {
            key: 'nutrition',
            Icon: Droplets,
        },
        {
            key: 'ipm',
            Icon: ShieldCheck,
        },
        {
            key: 'substrate',
            Icon: Sprout,
        },
        {
            key: 'equipment',
            Icon: Settings,
        }
    ];

    return (
        <section className="py-32 md:py-64 bg-white text-zinc-950 border-b border-zinc-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-zinc-100" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 md:gap-32 items-center mb-32">
                    <div className="space-y-10">
                        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-emerald-500/10 text-emerald-600 text-[10px] font-black uppercase tracking-[0.3em]">
                            {t('industry.expansion.title')}
                        </div>
                        <h2 className="text-4xl md:text-7xl font-black text-zinc-950 tracking-[-0.03em] leading-[0.95] lowercase">
                            {t('industry.expansion.punchline').split('\n').map((line, i) => (
                                <span key={i} className="block">{line}</span>
                            ))}
                        </h2>
                    </div>
                    <div className="bg-zinc-50 rounded-[48px] p-10 md:p-16 border border-zinc-100">
                        <p className="text-xl md:text-3xl text-zinc-950 font-black leading-tight lowercase tracking-tight mb-6">
                            {t('industry.expansion.subPunchline')}
                        </p>
                        <div className="w-12 h-1 bg-emerald-500 rounded-full" />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {items.map((item) => (
                        <div key={item.key} className="p-10 rounded-[32px] bg-zinc-50 border border-zinc-100 hover:border-emerald-500/30 transition-all group">
                            <div className="w-14 h-14 rounded-2xl bg-white border border-zinc-100 flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-zinc-950 transition-all duration-500">
                                <item.Icon className="w-7 h-7" />
                            </div>
                            <h4 className="text-2xl font-black text-zinc-950 mb-3 lowercase tracking-tight">
                                {t(`industry.expansion.items.${item.key}.title`)}
                            </h4>
                            <p className="text-zinc-500 font-bold lowercase leading-relaxed">
                                {t(`industry.expansion.items.${item.key}.desc`)}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustryProductExpansion;
