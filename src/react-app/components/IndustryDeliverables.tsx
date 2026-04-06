import type { FC } from 'react';
import { t } from '../lib/i18n';
import { ShoppingCart, Smartphone, CheckCircle2 } from 'lucide-react';

const IndustryDeliverables: FC = () => {
    const steps = [
        {
            id: 'step1',
            text: t('industry.howItWorks.step1'),
            Icon: ShoppingCart,
        },
        {
            id: 'step2',
            text: t('industry.howItWorks.step2'),
            Icon: Smartphone,
        },
        {
            id: 'step3',
            text: t('industry.howItWorks.step3'),
            Icon: CheckCircle2,
        }
    ];

    return (
        <section className="py-32 md:py-48 bg-white text-zinc-950 border-b border-zinc-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-50 rounded-full blur-[120px] -mr-48 -mt-48 opacity-50" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="text-center mb-32">
                    <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-emerald-500/10 text-emerald-600 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                        {t('industry.howItWorks.step1Title')} → {t('industry.howItWorks.step2Title')} → {t('industry.howItWorks.step3Title')}
                    </div>
                    <h2 className="text-5xl md:text-8xl font-black text-zinc-950 mb-10 tracking-[-0.03em] leading-[0.9] lowercase">
                        {t('industry.howItWorks.title')}
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 md:gap-16">
                    {steps.map((item, index) => (
                        <div key={item.id} className="relative group p-10">
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-[20%] right-[-10%] w-20 h-px border-t-2 border-dashed border-zinc-100 z-0" />
                            )}
                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className="w-24 h-24 rounded-[36px] bg-emerald-500 flex items-center justify-center mb-10 shadow-2xl shadow-emerald-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700">
                                    <item.Icon className="w-10 h-10 text-zinc-950" />
                                </div>
                                <h3 className="text-3xl md:text-4xl font-black text-zinc-950 tracking-tight lowercase leading-tight max-w-[200px]">
                                    {item.text}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <p className="text-xl text-zinc-400 font-bold lowercase tracking-tight italic opacity-80">
                        {t('industry.howItWorks.noTech')}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default IndustryDeliverables;
