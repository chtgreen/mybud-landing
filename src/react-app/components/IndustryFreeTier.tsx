import type { FC } from 'react';
import { t } from '../lib/i18n';
import { Zap } from 'lucide-react';

const IndustryFreeTier: FC = () => {
    return (
        <section className="py-24 md:py-48 bg-white text-zinc-950 overflow-hidden relative border-b border-zinc-100">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    <div className="space-y-12">
                        <div className="flex items-center gap-4">
                            <div className="w-2 h-2 rounded-full bg-emerald-500" />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">
                                Onboarding & Zero Friction
                            </span>
                        </div>

                        <div className="space-y-12">
                            <h2 className="text-5xl md:text-7xl font-black text-zinc-950 leading-[0.95] tracking-tight lowercase">
                                {t('industry.freeTier.title')}
                            </h2>
                            <div className="space-y-4">
                                <p className="text-2xl text-zinc-600 font-bold leading-relaxed lowercase opacity-90 max-w-xl">
                                    {t('industry.freeTier.description')}
                                </p>
                                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-zinc-100 border border-zinc-200">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                    <span className="text-xs font-black text-zinc-500 uppercase tracking-widest">{t('industry.howItWorks.acceptedFiles')}</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6 pt-6">
                            <div className="p-8 rounded-[40px] bg-zinc-50 border border-zinc-100 relative overflow-hidden group hover:bg-emerald-50 hover:border-emerald-200 transition-all duration-700">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-bl-full" />
                                <div className="flex gap-8 items-start relative z-10">
                                    <div className="w-16 h-16 rounded-[28px] bg-emerald-500 flex items-center justify-center text-zinc-950 shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                                        <Zap className="w-8 h-8" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-black text-zinc-950 mb-3 tracking-tight lowercase">
                                            {t('industry.freeTier.evolution')}
                                        </h3>
                                        <p className="text-lg text-zinc-500 font-bold leading-relaxed lowercase opacity-90 group-hover:text-zinc-600">
                                            {t('industry.freeTier.evolutionDesc')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Visual representation of free features */}
                    <div className="relative">
                        <div className="absolute -inset-10 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
                        <div className="bg-zinc-50 rounded-[60px] p-10 md:p-16 border border-zinc-100 relative z-10 transform lg:translate-x-12">
                            <div className="space-y-4">
                                {[
                                    { icon: 'Calculator', label: t('industry.freeTier.features.calculator'), active: true },
                                    { icon: 'Droplet', label: t('industry.freeTier.features.tankPrep'), active: true },
                                    { icon: 'Leaf', label: t('industry.freeTier.features.plantsLimit'), active: true },
                                    { icon: 'Shield', label: t('industry.freeTier.features.brandProtocol'), active: true }
                                ].map((item, i) => (
                                    <div key={i} className={`flex items-center justify-between p-7 rounded-3xl border transition-all duration-500 ${item.active ? 'bg-white border-zinc-200 shadow-sm hover:border-emerald-500/30' : 'bg-zinc-100/50 border-zinc-200 opacity-60'}`}>
                                        <div className="flex items-center gap-4">
                                            <div className={`w-1.5 h-1.5 rounded-full ${item.active ? 'bg-emerald-500' : 'bg-zinc-300'}`} />
                                            <span className={`text-lg font-black lowercase ${item.active ? 'text-zinc-950' : 'text-zinc-400'}`}>{item.label}</span>
                                        </div>

                                        {item.active && (
                                            <span className="text-emerald-500 font-black">grátis</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IndustryFreeTier;
