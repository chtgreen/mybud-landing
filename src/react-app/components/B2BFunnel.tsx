import React from 'react';

interface B2BFunnelProps {
    onDemoClick: () => void;
    onTalkClick: () => void;
}

export default function B2BFunnel({ onDemoClick, onTalkClick }: B2BFunnelProps) {
    return (
        <div className="bg-[#050505] text-gray-200 font-sans selection:bg-[#eb4c80] selection:text-white pb-32">
            {/* NOISE TEXTURE OVERLAY */}
            <div
                className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
            />

            <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8">

                {/* 1. HERO SECTION */}
                <section className="min-h-[85vh] pt-32 pb-20 flex flex-col justify-center animate-fade-in-up">
                    <div className="inline-block mb-6">
                        <span className="bg-zinc-900 text-zinc-300 text-sm font-semibold px-4 py-1.5 rounded-full border border-zinc-800 uppercase tracking-widest">
                            Growth SaaS para marcas de cultivo
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
                        Teu fertilizante sendo usado no <span className="text-[#eb4c80]">cultivo real.</span>
                    </h1>

                    <div className="text-xl md:text-2xl text-zinc-400 font-medium mb-10 max-w-2xl leading-relaxed">
                        <p>Dentro do MyBud, teu produto vira rotina:</p>
                        <p className="text-gray-200">dose, fase e aplicação — direto na mão do grower.</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 text-zinc-400 font-mono text-lg mb-12">
                        <p className="flex items-center gap-3"><span className="text-[#eb4c80]">👉</span> Sem catálogo</p>
                        <p className="flex items-center gap-3"><span className="text-[#eb4c80]">👉</span> Sem anúncio</p>
                        <p className="flex items-center gap-3"><span className="text-[#eb4c80]">👉</span> Sem achismo</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mb-6">
                        <button
                            onClick={onDemoClick}
                            className="bg-[#eb4c80] hover:bg-[#d13a6a] text-white px-8 py-5 rounded-2xl font-bold text-lg transition-all hover:scale-105 shadow-[0_10px_30px_rgba(235,76,128,0.2)] flex items-center justify-center gap-3"
                        >
                            Ver minha marca no MyBud <span className="text-xl">→</span>
                        </button>
                        <button
                            onClick={onTalkClick}
                            className="bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-800 px-8 py-5 rounded-2xl font-semibold text-lg transition-all flex items-center justify-center gap-3 hover:border-zinc-700"
                        >
                            Falar direto <span className="text-xl">→</span>
                        </button>
                    </div>

                    <p className="text-zinc-500 font-medium text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#eb4c80] rounded-full animate-pulse" />
                        Vagas limitadas para marcas iniciais
                    </p>
                </section>

                {/* 2. DEMO VISUAL */}
                <section className="py-24 border-t border-zinc-900">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Um grower usando teu produto no MyBud veria isso:</h2>
                    </div>

                    <div className="relative group perspective-1000">
                        <div className="bg-black border border-zinc-800 rounded-[2rem] p-4 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform-gpu transition-all duration-500 group-hover:border-zinc-700 hover:-translate-y-2 max-w-md mx-auto">
                            <div className="space-y-4">
                                <div className="bg-zinc-900/50 p-4 rounded-2xl border border-zinc-800 backdrop-blur flex items-center justify-between">
                                    <div>
                                        <p className="text-white font-semibold">Apply MyBud Fert</p>
                                        <p className="text-zinc-500 text-sm">2ml/L — Week 3</p>
                                    </div>
                                    <div className="w-6 h-6 rounded-full border-2 border-zinc-700 flex items-center justify-center" />
                                </div>

                                <div className="bg-zinc-900/50 p-4 rounded-2xl border border-zinc-800 backdrop-blur flex items-center justify-between">
                                    <div>
                                        <p className="text-white font-semibold">pH Check</p>
                                        <p className="text-zinc-500 text-sm">6.2 — Optimal</p>
                                    </div>
                                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">✓</div>
                                </div>

                                <div className="bg-zinc-900/50 p-4 rounded-2xl border border-emerald-900/40 backdrop-blur flex items-center justify-between relative overflow-hidden">
                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500"></div>
                                    <div className="pl-3">
                                        <p className="text-white font-semibold flex items-center gap-2">
                                            CalMag
                                            <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded-full text-zinc-300">Today</span>
                                        </p>
                                        <p className="text-zinc-500 text-sm">1ml/L — Flower</p>
                                    </div>
                                    <div className="w-6 h-6 rounded-full border-2 border-zinc-700" />
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 text-center">
                            <p className="text-zinc-400 font-medium text-lg sm:text-xl">
                                Seu produto aparece no momento exato da rega.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 3. ONDE SEU PRODUTO APARECE */}
                <section className="py-24 sm:py-32 border-t border-zinc-900">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">Onde seu produto aparece</h2>
                    <ul className="space-y-6 mb-12 text-xl sm:text-2xl text-zinc-200">
                        <li className="flex items-center gap-4"><span className="text-emerald-500 font-bold">✓</span> Na hora da rega</li>
                        <li className="flex items-center gap-4"><span className="text-emerald-500 font-bold">✓</span> Na rotina semanal</li>
                        <li className="flex items-center gap-4"><span className="text-emerald-500 font-bold">✓</span> No histórico do cultivo</li>
                    </ul>
                </section>

                {/* 4. BLOCO DE DOR */}
                <section className="py-24 sm:py-32 border-t border-zinc-900">
                    <div className="bg-zinc-900/30 border border-zinc-800 rounded-[2rem] p-8 sm:p-12 relative overflow-hidden">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                            Pare de vender mídia. <span className="text-[#eb4c80]">Torne-se parte do cultivo.</span>
                        </h2>

                        <p className="text-xl text-zinc-400 mb-8 leading-relaxed max-w-xl">
                            O cliente compra seu fertilizante e some.
                        </p>

                        <ul className="space-y-4 mb-10 text-lg sm:text-xl text-zinc-300 max-w-sm">
                            <li className="flex items-center gap-4 bg-black/40 p-3 rounded-lg border border-black"><span className="text-[#eb4c80]">×</span> Erra dose</li>
                            <li className="flex items-center gap-4 bg-black/40 p-3 rounded-lg border border-black"><span className="text-[#eb4c80]">×</span> Mistura errado</li>
                            <li className="flex items-center gap-4 bg-black/40 p-3 rounded-lg border border-black"><span className="text-[#eb4c80]">×</span> Queima a planta</li>
                            <li className="flex items-center gap-4 bg-black/40 p-3 rounded-lg border border-black"><span className="text-[#eb4c80]">×</span> Culpa sua marca</li>
                        </ul>

                        <div className="inline-block px-5 py-3 rounded-xl border border-zinc-700 bg-zinc-900 mb-6">
                            <p className="text-white font-mono text-sm sm:text-base tracking-wide">
                                👉 Seu PDF de dosagem não é seguido.
                            </p>
                        </div>

                        <p className="text-zinc-300 text-lg font-medium">
                            Nós colocamos seu produto dentro da rotina real do grower.
                        </p>
                    </div>
                </section>

                {/* 5. COMO FUNCIONA */}
                <section className="py-24 sm:py-32 border-t border-zinc-900">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">Como funciona</h2>

                    <div className="grid sm:grid-cols-3 gap-6 mb-12">
                        <div className="bg-zinc-900/20 p-8 rounded-[2rem] border border-zinc-800/50">
                            <span className="text-[#eb4c80] font-mono text-2xl mb-4 block">1.</span>
                            <p className="text-lg text-white">Você envia seus produtos</p>
                        </div>
                        <div className="bg-zinc-900/40 p-8 rounded-[2rem] border border-zinc-800">
                            <span className="text-[#eb4c80] font-mono text-2xl mb-4 block">2.</span>
                            <p className="text-lg text-white">Nós configuramos dose e fases</p>
                        </div>
                        <div className="bg-[#111] p-8 rounded-[2rem] border border-zinc-700 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                            <span className="text-[#eb4c80] font-mono text-2xl mb-4 block">3.</span>
                            <p className="text-lg text-white font-medium">Growers começam a usar no dia a dia</p>
                        </div>
                    </div>

                    <div className="inline-block px-5 py-4 rounded-xl border border-[#eb4c80]/20 bg-[#eb4c80]/5">
                        <p className="text-white font-mono text-sm sm:text-base tracking-wide flex flex-col sm:flex-row gap-4">
                            <span>👉 Sem integração técnica</span>
                            <span className="hidden sm:inline text-zinc-700">|</span>
                            <span>👉 Sem esforço do seu lado</span>
                        </p>
                    </div>
                </section>

                {/* 6. O QUE VOCÊ RECEBE */}
                <section className="py-24 sm:py-32 border-t border-zinc-900">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">O que você recebe</h2>
                    <ul className="space-y-6 text-xl sm:text-2xl text-zinc-300 bg-zinc-900/20 p-8 rounded-[2rem] border border-zinc-800">
                        <li className="flex items-start gap-4">
                            <span className="text-[#eb4c80] font-bold mt-1">+</span> Seu fertilizante dentro do app
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="text-[#eb4c80] font-bold mt-1">+</span> Dose e fase configuradas
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="text-[#eb4c80] font-bold mt-1">+</span> Conteúdo pronto <span className="text-zinc-500 text-lg ml-2 hidden sm:inline">(posts + vídeos + prints)</span>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="text-[#eb4c80] font-bold mt-1">+</span> Posicionamento como marca parceira inicial
                        </li>
                    </ul>
                </section>

                {/* 7. PARE DE RESPONDER DMs */}
                <section className="py-24 sm:py-32 border-t border-zinc-900">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                        Pare de responder <span className="text-[#eb4c80]">"quantos ml/L?"</span>
                    </h2>
                    <p className="text-xl text-zinc-400 mb-8">O app mostra automaticamente:</p>
                    <ul className="space-y-6 text-xl sm:text-2xl text-zinc-200">
                        <li className="flex items-center gap-4"><span className="text-emerald-500 font-bold">✓</span> quanto usar</li>
                        <li className="flex items-center gap-4"><span className="text-emerald-500 font-bold">✓</span> quando usar</li>
                        <li className="flex items-center gap-4"><span className="text-emerald-500 font-bold">✓</span> em qual fase</li>
                    </ul>
                </section>

                {/* 8. ANALYTICS */}
                <section className="py-24 sm:py-32 border-t border-zinc-900">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                        Veja como seu produto é usado
                    </h2>
                    <p className="text-xl text-zinc-400 mb-8">Descubra:</p>
                    <ul className="space-y-6 text-xl sm:text-2xl text-zinc-200">
                        <li className="flex items-center gap-4"><span className="text-[#eb4c80] font-bold">→</span> onde o grower erra</li>
                        <li className="flex items-center gap-4"><span className="text-[#eb4c80] font-bold">→</span> quando ele aplica</li>
                        <li className="flex items-center gap-4"><span className="text-[#eb4c80] font-bold">→</span> como evolui no ciclo</li>
                    </ul>
                </section>

                {/* 9. PREÇO & RISCO */}
                <section className="py-24 sm:py-32 border-t border-zinc-900 relative">
                    <div className="bg-zinc-900/40 border border-zinc-800 rounded-[2rem] p-8 sm:p-12 max-w-2xl backdrop-blur-sm relative z-10 hover:border-zinc-700 transition-colors shadow-2xl">
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-[#eb4c80]/10 rounded-full blur-3xl pointer-events-none" />

                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Entrada simples</h2>

                        <div className="space-y-6 mb-10 text-xl text-zinc-300 font-medium">
                            <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-zinc-800 pb-6 gap-2">
                                <span className="text-white text-4xl font-bold tracking-tight">R$1.290 <span className="text-zinc-500 text-lg font-normal tracking-wide">(único)</span></span>
                            </div>

                            <div className="flex items-center gap-4 text-emerald-400">
                                <span className="text-2xl">✓</span> Inclui setup + primeiro mês ativo
                            </div>
                            <div className="flex items-center gap-4 text-zinc-400">
                                <span className="text-2xl opacity-50 text-zinc-600">↳</span> Após: R$399/mês
                            </div>
                        </div>

                        <div className="bg-black/50 p-6 rounded-xl border border-zinc-800 mb-10">
                            <p className="text-zinc-300 text-lg sm:text-xl font-medium leading-relaxed font-mono">
                                <span className="text-[#eb4c80]">"</span> Você entra, testa e decide continuar. <span className="text-[#eb4c80]">"</span>
                            </p>
                        </div>

                        <div className="border-t border-zinc-800 pt-8">
                            <p className="text-white font-bold text-xl mb-2 flex items-center gap-2">
                                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" /> Sem contrato.
                            </p>
                            <p className="text-zinc-400">Se não fizer sentido, você pausa.</p>
                        </div>
                    </div>
                </section>

                {/* 10. ESCASSEZ & FECHAMENTO */}
                <section className="py-24 sm:py-32 border-t border-zinc-900 text-center sm:text-left">
                    <div className="mb-12">
                        <p className="text-[#eb4c80] font-bold text-base sm:text-lg mb-2 uppercase tracking-wider">
                            Estamos abrindo poucas marcas neste modelo
                        </p>
                        <h2 className="text-3xl sm:text-5xl font-bold text-white max-w-2xl leading-tight">
                            Quem entra agora define o padrão dentro do app.
                        </h2>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 mb-12">
                        <button
                            onClick={onDemoClick}
                            className="w-full sm:w-auto bg-[#eb4c80] hover:bg-[#d13a6a] text-white px-8 py-5 rounded-2xl font-bold text-lg transition-all hover:scale-105 shadow-[0_10px_30px_rgba(235,76,128,0.2)] flex items-center justify-center gap-3"
                        >
                            Ver minha marca no MyBud <span className="text-xl">→</span>
                        </button>
                        <span className="text-zinc-600 font-mono italic">ou</span>
                        <button
                            onClick={onTalkClick}
                            className="w-full sm:w-auto text-zinc-300 hover:text-white font-medium text-lg border-b border-zinc-700 hover:border-white pb-1 transition-colors flex items-center justify-center gap-2"
                        >
                            Entrar como marca parceira <span className="text-xl">→</span>
                        </button>
                    </div>
                </section>

                {/* 11. LICENCIAMENTO (bloco separado no final) */}
                <section className="py-24 border-t border-zinc-900 mt-12 bg-zinc-900/10 rounded-[2rem] p-8 sm:p-12 border border-zinc-800">
                    <div className="mb-8">
                        <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest mb-4">Para marcas que querem escalar</p>
                        <h2 className="text-3xl font-bold text-white mb-4">Licencie o MyBud junto com seu produto.</h2>
                    </div>

                    <ul className="space-y-4 text-lg sm:text-xl text-zinc-300 mb-8">
                        <li className="flex items-center gap-4"><span className="w-1.5 h-1.5 bg-white rounded-full" /> O cliente compra seu fertilizante</li>
                        <li className="flex items-center gap-4"><span className="w-1.5 h-1.5 bg-white rounded-full" /> Ganha acesso ao app</li>
                        <li className="flex items-center gap-4"><span className="w-1.5 h-1.5 bg-white rounded-full" /> Continua usando sua marca</li>
                    </ul>

                    <div className="flex flex-col sm:flex-row gap-6 text-[#eb4c80] font-mono text-lg font-bold">
                        <p>👉 Mais recompra</p>
                        <p>👉 Mais retenção</p>
                    </div>
                </section>

            </div>
        </div>
    );
}
