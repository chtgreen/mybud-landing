import type { FC } from 'react';
import { ArrowDownRight, TrendingUp, CheckCircle2 } from 'lucide-react';
import { t } from '../lib/i18n';

const IndustryFreeToPro: FC = () => {
    return (
        <section className="py-24 md:py-48 bg-zinc-950 text-white overflow-hidden relative">
            {/* Background design */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="text-center mb-24">
                    <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black mb-10 tracking-[0.4em] uppercase">
                        {t('industry.progression.entryBadge')}
                    </div>
                    <h2 className="text-4xl md:text-8xl font-black text-white tracking-tighter lowercase leading-[0.9] max-w-4xl mx-auto italic">
                        {t('industry.progression.title')}
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-10">
                    {/* Entry side - FOCUS ON USE */}
                    <div className="bg-zinc-900 border border-white/5 rounded-[60px] p-12 md:p-20 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[100px]" />

                        <div className="relative z-10">
                            <h3 className="text-3xl md:text-5xl font-black mb-12 tracking-tight lowercase leading-tight">
                                {t('industry.progression.entryTitle')}
                            </h3>

                            <div className="space-y-12 mb-16">
                                <div className="flex gap-6 items-start">
                                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                    </div>
                                    <p className="text-xl md:text-2xl font-bold text-zinc-400 lowercase leading-tight">
                                        {t('industry.progression.entryPoint1')}
                                    </p>
                                </div>
                                <div className="flex gap-6 items-start">
                                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                    </div>
                                    <p className="text-xl md:text-2xl font-bold text-zinc-400 lowercase leading-tight">
                                        {t('industry.progression.entryPoint2')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Scale side - FOCUS ON RETENTION/SALES */}
                    <div className="bg-emerald-500 rounded-[60px] p-12 md:p-20 relative overflow-hidden group shadow-2xl shadow-emerald-500/20">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-zinc-950/10 rounded-bl-[100px]" />

                        <div className="relative z-10">
                            <h3 className="text-3xl md:text-5xl font-black mb-12 tracking-tight text-zinc-950 lowercase leading-tight">
                                {t('industry.progression.scaleTitle')}
                            </h3>

                            <div className="space-y-12 mb-16">
                                <div className="flex gap-6 items-start">
                                    <div className="w-8 h-8 rounded-full bg-zinc-950/20 flex items-center justify-center flex-shrink-0 mt-1">
                                        <TrendingUp className="w-4 h-4 text-zinc-950" />
                                    </div>
                                    <p className="text-xl md:text-2xl font-bold text-zinc-900 lowercase leading-tight">
                                        {t('industry.progression.scalePoint1')}
                                    </p>
                                </div>
                                <div className="flex gap-6 items-start">
                                    <div className="w-8 h-8 rounded-full bg-zinc-950/20 flex items-center justify-center flex-shrink-0 mt-1">
                                        <TrendingUp className="w-4 h-4 text-zinc-950" />
                                    </div>
                                    <p className="text-xl md:text-2xl font-bold text-zinc-900 lowercase leading-tight">
                                        {t('industry.progression.scalePoint2')}
                                    </p>
                                </div>
                            </div>

                            <button
                                onClick={() => document.getElementById('ecosystem')?.scrollIntoView({ behavior: 'smooth' })}
                                className="flex items-center gap-4 px-10 py-5 rounded-3xl bg-zinc-950 text-white font-black text-sm uppercase tracking-widest hover:scale-105 transition-transform group/btn shadow-xl"
                            >
                                {t('industry.progression.cta')}
                                <ArrowDownRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IndustryFreeToPro;
