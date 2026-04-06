import type { FC } from 'react';
import { t } from '../lib/i18n';
import { CheckCircle2, Droplet, Clock } from 'lucide-react';

const IndustryExecution: FC = () => {
    return (
        <section className="py-40 md:py-64 bg-zinc-950 text-white border-b border-white/5 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.03)_0%,transparent_50%)]" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <h2 className="text-5xl md:text-8xl font-black text-white tracking-[-0.05em] leading-[0.9] lowercase">
                                {t('industry.presence.title')}
                            </h2>
                            <p className="text-xl md:text-3xl text-zinc-400 font-bold leading-tight lowercase tracking-tight max-w-xl">
                                {t('industry.presence.punchline')}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
                            <div className="space-y-4">
                                <div className="w-12 h-12 rounded-2xl bg-white text-zinc-950 flex items-center justify-center">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <h4 className="text-xl font-black lowercase">{t('industry.presence.tasks.title')}</h4>
                            </div>
                            <div className="space-y-4">
                                <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-zinc-950 flex items-center justify-center">
                                    <Droplet className="w-6 h-6" />
                                </div>
                                <h4 className="text-xl font-black lowercase">{t('industry.presence.tasks.example')}</h4>
                            </div>
                            <div className="space-y-4">
                                <div className="w-12 h-12 rounded-2xl bg-white text-zinc-950 flex items-center justify-center">
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                                <h4 className="text-xl font-black lowercase">{t('industry.presence.tasks.point1')}</h4>
                            </div>
                        </div>
                    </div>

                    {/* Timeline Interaction Mockup */}
                    <div className="relative group perspective-1000">
                        <div className="absolute -inset-20 bg-emerald-500/5 blur-[120px] rounded-full animate-pulse" />
                        <div className="bg-zinc-900 border border-white/5 rounded-[48px] p-8 md:p-12 shadow-2xl relative z-10 transition-transform duration-700 hover:rotate-2 hover:scale-[1.02]">
                            <div className="flex items-center justify-between mb-12 border-b border-white/5 pb-8">
                                <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest leading-none">semana 3</span>
                                <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                            </div>

                            <div className="space-y-10">
                                {/* ITEM 1 */}
                                <div className="flex gap-6 items-center">
                                    <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex items-center justify-center text-zinc-950">
                                        <span className="font-black">✓</span>
                                    </div>
                                    <div className="flex-1">
                                        <h5 className="text-lg font-black text-white lowercase">rega + nutrientes</h5>
                                        <p className="text-zinc-500 text-sm font-bold uppercase tracking-wider">grow a — 2ml/l</p>
                                    </div>
                                </div>

                                {/* ITEM 2 */}
                                <div className="flex gap-6 items-center">
                                    <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex items-center justify-center text-zinc-950">
                                        <span className="font-black">✓</span>
                                    </div>
                                    <div className="flex-1">
                                        <h5 className="text-lg font-black text-white lowercase">verificar ph</h5>
                                        <p className="text-zinc-500 text-sm font-bold uppercase tracking-wider">meta: 6.2</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Status Float Label */}
                        <div className="absolute -bottom-8 -right-8 bg-emerald-500 text-zinc-950 px-8 py-4 rounded-3xl font-black text-sm uppercase tracking-tighter shadow-2xl z-20">
                            o grower não interpreta. ele executa.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IndustryExecution;
