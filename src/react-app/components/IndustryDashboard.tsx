import type { FC } from 'react';
import { t } from '../lib/i18n';
import { BarChart3, Users, ShoppingCart } from 'lucide-react';

const IndustryDashboard: FC = () => {
    return (
        <section className="py-40 md:py-64 bg-zinc-950 text-white border-b border-white/5 relative overflow-hidden" id="dashboard">
            {/* Background Gradient */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    {/* Left: Dashboard Mockup */}
                    <div className="relative group overflow-visible">
                        {/* Glow and background elements */}
                        <div className="absolute -inset-10 bg-emerald-500/10 blur-[100px] rounded-full transition-opacity duration-500 opacity-50 group-hover:opacity-100" />

                        <div className="relative bg-zinc-900/80 border border-white/10 rounded-[32px] p-6 md:p-10 shadow-2xl backdrop-blur-xl transition-all duration-700 group-hover:scale-[1.02] group-hover:border-white/20">
                            {/* Dashboard Header */}
                            <div className="flex items-center justify-between mb-10 pb-6 border-b border-white/5">
                                <div className="space-y-1">
                                    <h3 className="text-xl font-bold tracking-tight text-white lowercase">{t('industry.dashboard.mock.usageInsights')}</h3>
                                    <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider">{t('industry.dashboard.mock.brandInField')}</p>
                                </div>
                                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                    <span className="text-[10px] font-black text-emerald-400 tracking-wider">{t('industry.dashboard.mock.live')}</span>
                                </div>
                            </div>

                            {/* Main Stats Grid */}
                            <div className="grid grid-cols-2 gap-6 mb-10">
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-4 hover:border-white/10 transition-colors">
                                    <Users className="w-5 h-5 text-emerald-500" />
                                    <div className="space-y-1">
                                        <p className="text-2xl font-black text-white">1.240</p>
                                        <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{t('industry.dashboard.statGrowers')}</p>
                                    </div>
                                </div>
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-4 hover:border-white/10 transition-colors">
                                    <BarChart3 className="w-5 h-5 text-emerald-500" />
                                    <div className="space-y-1">
                                        <p className="text-2xl font-black text-white">84%</p>
                                        <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{t('industry.dashboard.statAdhesion')}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Graph Simulation */}
                            <div className="space-y-8">
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest leading-none">{t('industry.dashboard.mock.usageByStage')}</span>
                                    <div className="flex gap-2">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                        <div className="w-2 h-2 rounded-full bg-emerald-500/20" />
                                        <div className="w-2 h-2 rounded-full bg-emerald-500/10" />
                                    </div>
                                </div>

                                <div className="h-40 flex items-end gap-3 justify-between">
                                    {[65, 45, 85, 30, 95, 60, 75].map((height, i) => (
                                        <div key={i} className="flex-1 group/bar relative">
                                            {/* Value above bar */}
                                            <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] font-black text-emerald-500/50 group-hover/bar:text-emerald-500 transition-colors">
                                                {height}%
                                            </div>
                                            <div
                                                className="w-full bg-emerald-500/20 rounded-t-lg transition-all duration-1000 origin-bottom hover:bg-emerald-500"
                                                style={{ height: `${height}%` }}
                                            />
                                            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] font-bold text-zinc-600 uppercase whitespace-nowrap">
                                                {t('industry.dashboard.weekShort')} {i + 1}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Floating Re-order Alert */}
                            <div className="absolute -right-8 bottom-24 bg-white text-zinc-950 p-6 rounded-3xl shadow-2xl border border-white/10 animate-in fade-in slide-in-from-right-8 duration-1000 hidden md:block max-w-[200px]">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-8 h-8 rounded-xl bg-orange-500/10 flex items-center justify-center">
                                        <ShoppingCart className="w-4 h-4 text-orange-600" />
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-tighter text-zinc-400">{t('industry.dashboard.statReorder')}</span>
                                </div>
                                <p className="text-sm font-black leading-tight lowercase tracking-tighter">
                                    {t('industry.dashboard.reorderMsg')}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Copy */}
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <h2 className="text-5xl md:text-8xl font-black text-white tracking-[-0.05em] leading-[0.9] lowercase">
                                {t('industry.data.title')}
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
                            <div className="space-y-4">
                                <h4 className="text-xl md:text-2xl font-black text-white lowercase tracking-tight">{t('industry.data.point1')}</h4>
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-xl md:text-2xl font-black text-white lowercase tracking-tight">{t('industry.data.point2')}</h4>
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-xl md:text-2xl font-black text-white lowercase tracking-tight">{t('industry.data.point3')}</h4>
                            </div>
                        </div>

                        <div className="pt-8 flex flex-col gap-4">
                            <p className="text-2xl md:text-4xl text-emerald-500 font-black lowercase tracking-tighter">
                                {t('industry.data.punchline')}
                            </p>
                            <div className="flex items-center gap-3 text-zinc-600 text-xs font-bold uppercase tracking-widest mt-8">
                                <div className="p-1 rounded bg-zinc-900/50 border border-white/5">
                                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                    </svg>
                                </div>
                                {t('industry.dashboard.anonymousNote')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default IndustryDashboard;
