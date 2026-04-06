import type { FC } from 'react';
import { CheckCircle2, Clock, Zap } from 'lucide-react';

const IndustryExecution: FC = () => {
    const points = [
        {
            id: 'product',
            title: 'qual produto usar',
            desc: 'identificação visual da garrafa no momento da rega',
            Icon: Zap,
        },
        {
            id: 'dosage',
            title: 'quantos ml aplicar',
            desc: 'cálculo automático baseado no seu protocolo',
            Icon: CheckCircle2,
        },
        {
            id: 'timing',
            title: 'quando aplicar',
            desc: 'notificações inteligentes no estágio certo da planta',
            Icon: Clock,
        }
    ];

    return (
        <section className="py-40 md:py-64 bg-zinc-950 text-white border-b border-white/5 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.03)_0%,transparent_50%)]" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    <div className="space-y-12">
                        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-[0.3em]">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                            execução real
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-5xl md:text-8xl font-black text-white tracking-[-0.05em] leading-[0.9] lowercase">
                                seu protocolo <br />
                                <span className="text-emerald-500 italic drop-shadow-[0_0_20px_rgba(16,185,129,0.2)]">vira execução.</span>
                            </h2>
                            <p className="text-xl md:text-3xl text-zinc-400 font-bold leading-tight lowercase tracking-tight max-w-xl">
                                sem tabelas confusas. o mybud traduz sua ciência em tarefas simples para o grower.
                            </p>
                        </div>

                        <div className="space-y-8 pt-8">
                            {points.map((point) => (
                                <div key={point.id} className="flex gap-6 items-start group">
                                    <div className="w-12 h-12 rounded-2xl bg-white text-zinc-950 flex items-center justify-center shrink-0 shadow-lg group-hover:bg-emerald-500 transition-colors">
                                        <point.Icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-black text-white lowercase tracking-tight mb-2 group-hover:text-emerald-400 transition-colors">
                                            {point.title}
                                        </h4>
                                        <p className="text-zinc-500 font-bold lowercase leading-relaxed">
                                            {point.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
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

                                {/* ITEM 3 (PENDING) */}
                                <div className="flex gap-6 items-center opacity-40">
                                    <div className="w-12 h-12 rounded-2xl border-2 border-white/20 flex items-center justify-center text-white/20">
                                        <span className="font-black">...</span>
                                    </div>
                                    <div className="flex-1">
                                        <h5 className="text-lg font-black text-white/40 lowercase">próxima semana</h5>
                                        <p className="text-zinc-500 text-sm font-bold uppercase tracking-wider">transição fase → flora</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Status Float Label */}
                        <div className="absolute -bottom-8 -right-8 bg-emerald-500 text-zinc-950 px-8 py-4 rounded-3xl font-black text-sm uppercase tracking-tighter shadow-2xl z-20">
                            protocolo em tempo real
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IndustryExecution;
