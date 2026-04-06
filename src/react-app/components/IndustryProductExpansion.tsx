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
            {/* Flow line animation */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-[0.03]">
                <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none">
                    <path d="M-100 400C200 100 600 700 900 400C1200 100 1600 400 1600 400" stroke="currentColor" strokeWidth="2" strokeDasharray="10 20" className="animate-[dash_60s_linear_infinite]" />
                </svg>
            </div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 md:gap-32 items-center mb-32">
                    <div className="space-y-10">
                        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-emerald-500/10 text-emerald-600 text-[10px] font-black uppercase tracking-[0.4em]">
                            {t('industry.expansion.title')}
                        </div>
                        <h2 className="text-5xl md:text-8xl font-black text-zinc-950 tracking-[-0.05em] leading-[0.95] lowercase">
                            {t('industry.expansion.punchline').split('\n').map((line, i) => (
                                <span key={i} className="block">{line}</span>
                            ))}
                        </h2>
                    </div>
                    <div className="bg-zinc-50 rounded-[48px] p-10 md:p-16 border border-zinc-200">
                        <p className="text-xl md:text-3xl text-zinc-900 font-bold leading-tight lowercase tracking-tight mb-8">
                            {t('industry.expansion.subPunchline')}
                        </p>
                        <div className="w-16 h-1 bg-emerald-500 rounded-full" />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {items.map((item) => (
                        <div key={item.key} className="p-10 rounded-[40px] bg-zinc-50 border border-zinc-100 hover:border-emerald-500/40 hover:bg-white hover:shadow-[0_20px_80px_rgba(16,185,129,0.08)] transition-all duration-700 group relative overflow-hidden flex flex-col items-start text-left">
                            <div className="w-14 h-14 rounded-[20px] bg-white border border-zinc-100 flex items-center justify-center mb-10 shadow-sm group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-zinc-950 group-hover:shadow-[0_10px_30px_rgba(16,185,129,0.3)] transition-all duration-500 relative z-10">
                                <item.Icon className="w-6 h-6" />
                            </div>
                            <h4 className="text-2xl font-black text-zinc-950 mb-3 lowercase tracking-tight relative z-10">
                                {t(`industry.expansion.items.${item.key}.title`)}
                            </h4>

                            {/* Connectivity indicator */}
                            <div className="mt-8 flex items-center gap-2 text-emerald-500/40 font-black text-[8px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                                no fluxo do grower
                            </div>

                            {/* Decorative Glow */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustryProductExpansion;
