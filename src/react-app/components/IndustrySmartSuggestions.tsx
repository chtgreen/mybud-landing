import type { FC } from 'react';
import { t, tObject } from '../lib/i18n';
import { Sparkles, Bug, Thermometer, TrendingUp, AlertTriangle, Sun, Play } from 'lucide-react';

const IndustrySmartSuggestions: FC = () => {
    const suggestions = tObject('industry.smartSuggestions.suggestions');

    // Mapping icons to keys
    const icons: Record<string, any> = {
        slugs: Bug,
        ph: Thermometer,
        growth: TrendingUp,
        excess: AlertTriangle,
        light: Sun,
        newCycle: Play
    };

    if (!suggestions) return null;

    return (
        <section className="py-32 md:py-64 bg-zinc-950 text-white relative overflow-hidden border-b border-white/5">
            {/* Ambient background effects */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="max-w-4xl mb-24 md:mb-32">
                    <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-black uppercase tracking-[0.4em] mb-10">
                        <Sparkles className="w-3 h-3" />
                        Smart Suggestions
                    </div>
                    <h2 className="text-5xl md:text-8xl font-black text-white tracking-[-0.05em] leading-[0.95] lowercase mb-12">
                        {t('industry.smartSuggestions.title').split('\n').map((line, i) => (
                            <span key={i} className="block">{line}</span>
                        ))}
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-24">
                    {Object.entries(suggestions as Record<string, any>).map(([key, data]) => {
                        const Icon = icons[key] || Sparkles;
                        return (
                            <div key={key} className="bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-[40px] hover:border-emerald-500/30 hover:bg-white/10 transition-all duration-700 group">
                                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-zinc-950 transition-all duration-500">
                                    <Icon className="w-6 h-6" />
                                </div>

                                <div className="space-y-4">
                                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
                                        gatilho
                                    </div>
                                    <h4 className="text-2xl font-black text-white lowercase leading-tight">
                                        {data.trigger}
                                    </h4>

                                    <div className="pt-8 border-t border-white/5 space-y-4">
                                        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-500">
                                            execução sugerida
                                        </div>
                                        <p className="text-xl font-bold text-zinc-300 lowercase leading-relaxed whitespace-pre-line">
                                            {data.action}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 pt-12 border-t border-white/5">
                    <p className="text-2xl md:text-3xl font-black text-zinc-500 lowercase text-center md:text-left transition-colors hover:text-white duration-1000">
                        {t('industry.smartSuggestions.footer')}
                    </p>
                    <div className="flex -space-x-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="w-16 h-16 rounded-full border-4 border-zinc-950 bg-zinc-800 flex items-center justify-center overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                                <div className="w-full h-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 font-black">
                                    {i === 1 ? 'BIO' : i === 2 ? 'FERT' : 'SOL'}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IndustrySmartSuggestions;
