import type { FC } from 'react';
import { t } from '../lib/i18n';
import { MousePointer2, Smartphone, PackageCheck } from 'lucide-react';

const IndustryEntry: FC = () => {
    return (
        <section id="how-it-works" className="py-32 md:py-64 bg-zinc-950 text-white relative overflow-hidden border-b border-white/5">
            {/* Structural Accents */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="text-center mb-20 md:mb-32">
                    <h2 className="text-5xl md:text-8xl font-black text-white tracking-[-0.05em] leading-[0.9] lowercase max-w-4xl mx-auto">
                        {t('industry.howItWorks.headline')}
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-12 md:gap-24 relative">
                    {/* Connecting Line - Desktop Only */}
                    <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                    {/* STEP 1 */}
                    <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
                        <div className="w-24 h-24 rounded-[32px] bg-white text-zinc-950 flex items-center justify-center mb-10 shadow-2xl relative z-10">
                            <PackageCheck className="w-10 h-10" />
                        </div>
                        <h3 className="text-2xl font-black text-white mb-6 lowercase tracking-tight">
                            {t('industry.howItWorks.step1')}
                        </h3>
                    </div>

                    {/* STEP 2 */}
                    <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
                        <div className="w-24 h-24 rounded-[32px] bg-emerald-500 text-zinc-950 flex items-center justify-center mb-10 shadow-[0_20px_50px_rgba(16,185,129,0.3)] relative z-10">
                            <Smartphone className="w-10 h-10" />
                        </div>
                        <h3 className="text-2xl font-black text-white mb-6 lowercase tracking-tight">
                            {t('industry.howItWorks.step2')}
                        </h3>
                    </div>

                    {/* STEP 3 */}
                    <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
                        <div className="w-24 h-24 rounded-[32px] bg-white text-zinc-950 flex items-center justify-center mb-10 shadow-2xl relative z-10">
                            <MousePointer2 className="w-10 h-10" />
                        </div>
                        <h3 className="text-2xl font-black text-white mb-6 lowercase tracking-tight">
                            {t('industry.howItWorks.step3')}
                        </h3>
                    </div>
                </div>

                {/* Semantic Bullet points */}
                <div className="mt-24 md:mt-40 flex flex-wrap justify-center gap-10 md:gap-20 border-t border-white/5 pt-20">
                    {t('industry.howItWorks.noTech').split('|').map((point, i) => (
                        <div key={i} className="flex items-center gap-4 group">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 group-hover:scale-150 transition-transform" />
                            <span className="text-lg md:text-xl font-black text-zinc-400 lowercase group-hover:text-white transition-colors">{point.trim()}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustryEntry;
