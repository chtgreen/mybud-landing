

interface B2BFunnelProps {
    onDemoClick: () => void;
    onTalkClick: () => void;
}

export default function B2BFunnel({ onDemoClick, onTalkClick }: B2BFunnelProps) {
    return (
        <div className="bg-[#050505] text-gray-200 font-sans selection:bg-[#eb4c80] selection:text-white pb-32">
            {/* 
        NOISE TEXTURE OVERLAY 
      */}
            <div
                className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
            />

            <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8">

                {/* HERO SECTION */}
                <section className="min-h-[85vh] pt-32 pb-20 flex flex-col justify-center animate-fade-in-up">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
                        Já imaginou seus produtos sendo usados com a dose certa, no momento certo — <span className="text-[#eb4c80]">sem depender de interpretação?</span>
                    </h1>

                    <div className="text-xl md:text-2xl text-gray-400 font-medium mb-12 max-w-2xl leading-relaxed">
                        <p className="mb-2">No MyBud, sua tabela deixa de ser um PDF</p>
                        <p className="text-gray-200">e vira parte da rotina do cultivador.</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={onDemoClick}
                            className="bg-[#eb4c80] hover:bg-[#d13a6a] text-white px-8 py-5 rounded-2xl font-bold text-lg transition-all hover:scale-105 shadow-[0_10px_30px_rgba(235,76,128,0.2)] flex items-center justify-center gap-3"
                        >
                            Ver minha marca dentro do MyBud <span className="text-xl">→</span>
                        </button>
                        <button
                            onClick={onTalkClick}
                            className="bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-800 px-8 py-5 rounded-2xl font-semibold text-lg transition-all flex items-center justify-center gap-3 hover:border-zinc-700"
                        >
                            Falar com vocês <span className="text-xl">→</span>
                        </button>
                    </div>
                </section>

                {/* DEMO SECTION */}
                <section className="py-24">
                    <div className="relative group perspective-1000">
                        <div className="bg-black border border-zinc-800 rounded-[2rem] p-4 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform-gpu transition-all duration-500 group-hover:border-zinc-700 hover:-translate-y-2">
                            {/* Fake UI */}
                            <div className="space-y-4 max-w-sm mx-auto">
                                <div className="bg-zinc-900/50 p-4 rounded-2xl border border-zinc-800 backdrop-blur flex items-center justify-between">
                                    <div>
                                        <p className="text-white font-semibold">Apply MyBud Fert</p>
                                        <p className="text-zinc-500 text-sm">2ml/L — Week 3</p>
                                    </div>
                                    <div className="w-6 h-6 rounded-full border-2 border-zinc-700 flex items-center justify-center">
                                        <div className="w-3 h-3 bg-[#eb4c80] rounded-full hidden group-hover:block transition-all" />
                                    </div>
                                </div>

                                <div className="bg-zinc-900/50 p-4 rounded-2xl border border-zinc-800 backdrop-blur flex items-center justify-between">
                                    <div>
                                        <p className="text-white font-semibold">pH Check</p>
                                        <p className="text-zinc-500 text-sm">6.2 — Optimal</p>
                                    </div>
                                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                                        ✓
                                    </div>
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
                            <p className="text-[#eb4c80] font-mono text-sm sm:text-base uppercase tracking-widest mb-6">
                                👉 seu produto dentro da rotina
                            </p>
                            <button
                                onClick={onDemoClick}
                                className="text-white font-medium hover:text-[#eb4c80] transition-colors border-b border-white/20 hover:border-[#eb4c80] pb-1"
                            >
                                Quero ver isso com minha marca →
                            </button>
                        </div>
                    </div>
                </section>

                {/* REFRAME */}
                <section className="py-24 sm:py-32 border-t border-zinc-900">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-white">Você já tem:</h2>
                    <ul className="space-y-4 mb-12 text-xl sm:text-2xl text-zinc-400">
                        <li className="flex items-center gap-4">
                            <span className="w-2 h-2 bg-zinc-700 rounded-full" /> feedback de clientes
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="w-2 h-2 bg-zinc-700 rounded-full" /> retorno de growshops
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="w-2 h-2 bg-zinc-700 rounded-full" /> gente usando seu produto
                        </li>
                    </ul>

                    <div className="bg-zinc-900/30 p-8 sm:p-12 rounded-[2rem] border border-zinc-800">
                        <p className="text-2xl sm:text-3xl text-white font-medium mb-8">
                            Mas isso acontece fora de contexto.
                        </p>
                        <div className="space-y-2 text-xl text-zinc-500 font-mono tracking-tight">
                            <p>Sem padrão.</p>
                            <p>Sem comparação.</p>
                            <p>Sem continuidade.</p>
                        </div>
                    </div>
                </section>

                {/* SHIFT */}
                <section className="py-24 sm:py-32">
                    <div className="text-center sm:text-left">
                        <h2 className="text-4xl sm:text-6xl font-bold text-white mb-6">
                            O MyBud não muda seu produto.
                        </h2>
                        <p className="text-3xl sm:text-5xl font-medium text-[#eb4c80]">
                            Ele muda como ele é usado.
                        </p>
                    </div>
                </section>

                {/* HOW IT WORKS */}
                <section className="py-24 sm:py-32 border-t border-zinc-900">
                    <div className="mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Você já tem a tabela.</h2>
                        <p className="text-2xl sm:text-3xl text-zinc-400">Nós colocamos ela em execução.</p>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-6 mb-16">
                        <div className="bg-zinc-900/20 p-8 rounded-[2rem] border border-zinc-800/50 hover:bg-zinc-900/40 transition-colors">
                            <span className="text-[#eb4c80] font-mono text-xl mb-4 block">01.</span>
                            <p className="text-xl text-white">Sua tabela entra no sistema</p>
                        </div>
                        <div className="bg-zinc-900/40 p-8 rounded-[2rem] border border-zinc-800 hover:bg-zinc-900/60 transition-colors">
                            <span className="text-[#eb4c80] font-mono text-xl mb-4 block">02.</span>
                            <p className="text-xl text-white">O app organiza o ciclo</p>
                        </div>
                        <div className="bg-[#111] p-8 rounded-[2rem] border border-zinc-700 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transform hover:-translate-y-1 transition-all">
                            <span className="text-[#eb4c80] font-mono text-xl mb-4 block">03.</span>
                            <p className="text-xl text-white font-medium">O cultivador segue a rotina</p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 text-zinc-500 font-mono text-lg">
                        <p className="flex items-center gap-3">
                            <span className="text-zinc-700">×</span> Sem interpretação
                        </p>
                        <p className="flex items-center gap-3">
                            <span className="text-zinc-700">×</span> Sem erro de dose
                        </p>
                        <p className="flex items-center gap-3">
                            <span className="text-zinc-700">×</span> Sem “acho que é isso”
                        </p>
                    </div>
                </section>

                {/* WHERE YOUR BRAND SHOWS UP */}
                <section className="py-24 sm:py-32 border-t border-zinc-900">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Não é catálogo.</h2>
                    <p className="text-3xl sm:text-4xl font-bold text-[#eb4c80] mb-12">É uso real.</p>

                    <ul className="space-y-6 mb-16 text-xl sm:text-2xl text-zinc-300">
                        <li className="flex items-center gap-4">
                            <span className="w-1.5 h-1.5 bg-white rounded-full" /> na tarefa do dia
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="w-1.5 h-1.5 bg-white rounded-full" /> no histórico da planta
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="w-1.5 h-1.5 bg-white rounded-full" /> no registro de atividades
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="w-1.5 h-1.5 bg-white rounded-full" /> nas recomendações
                        </li>
                    </ul>

                    <div className="inline-block bg-white/5 px-6 py-4 rounded-xl border border-white/10 hover:border-[#eb4c80] transition-colors">
                        <p className="text-[#eb4c80] font-mono text-sm uppercase tracking-widest">
                            👉 seu produto aparece quando precisa ser aplicado
                        </p>
                    </div>
                </section>

                {/* WHAT YOU GET */}
                <section className="py-24 sm:py-32 border-t border-zinc-900">
                    <ul className="space-y-6 mb-12 text-2xl sm:text-3xl text-zinc-200 font-medium tracking-tight">
                        <li className="flex items-center gap-4">
                            <span className="text-zinc-700 font-mono text-lg">/</span> quando seu produto é usado
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="text-zinc-700 font-mono text-lg">/</span> quanto é usado
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="text-zinc-700 font-mono text-lg">/</span> em qual fase
                        </li>
                    </ul>

                    <div className="text-xl sm:text-2xl text-zinc-500">
                        <p className="mb-2 text-zinc-400">Dados simples.</p>
                        <p>Mas que você nunca teve organizados assim.</p>
                    </div>
                </section>

                {/* THE LOOP */}
                <section className="py-24 sm:py-32 border-t border-zinc-900">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">Quando o uso é guiado:</h2>

                    <ul className="space-y-4 mb-16 text-xl sm:text-2xl text-zinc-400">
                        <li className="flex items-center gap-6 bg-zinc-900/30 p-4 rounded-2xl border border-zinc-900 hover:bg-zinc-800/50 transition-colors">
                            <span className="text-emerald-500">↓</span> menos erro
                        </li>
                        <li className="flex items-center gap-6 bg-zinc-900/30 p-4 rounded-2xl border border-zinc-900 hover:bg-zinc-800/50 transition-colors">
                            <span className="text-emerald-500">↑</span> mais consistência
                        </li>
                        <li className="flex items-center gap-6 bg-zinc-900/30 p-4 rounded-2xl border border-zinc-900 hover:bg-zinc-800/50 transition-colors">
                            <span className="text-emerald-500">★</span> melhor experiência com o produto
                        </li>
                    </ul>

                    <p className="text-[#eb4c80] font-mono text-lg uppercase tracking-wide">
                        👉 o cultivador tende a continuar usando
                    </p>
                </section>

                {/* DIFFERENTIATOR */}
                <section className="py-24 sm:py-32 border-t border-zinc-900">
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12">
                        Seu produto pode liberar o <span className="text-[#eb4c80]">MyBud Pro</span>.
                    </h2>

                    <div className="text-2xl sm:text-3xl text-zinc-300 font-medium leading-relaxed mb-16">
                        <p className="mb-4">O cultivador compra seu produto</p>
                        <p>e ganha uma <span className="text-white">camada digital de acompanhamento.</span></p>
                    </div>

                    <div className="inline-block border border-zinc-800 bg-black px-6 py-4 rounded-xl hover:border-zinc-700 transition-colors">
                        <p className="text-zinc-400 font-mono uppercase tracking-wide">
                            👉 <span className="text-white">mais valor</span> sem mudar o produto físico
                        </p>
                    </div>
                </section>

                {/* PRICING MODEL & RISK REVERSAL */}
                <section className="py-24 sm:py-32 border-t border-zinc-900">
                    <div className="bg-zinc-900/20 border border-zinc-800 rounded-[2rem] p-8 sm:p-12 max-w-2xl relative overflow-hidden group hover:border-zinc-700 transition-colors">
                        {/* Subtle glow effect */}
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-[#eb4c80]/5 rounded-full blur-3xl group-hover:bg-[#eb4c80]/10 transition-colors pointer-events-none" />

                        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 relative z-10">
                            <h2 className="text-3xl sm:text-4xl font-bold text-white">Entrada simples</h2>
                            <div className="bg-[#eb4c80]/10 text-[#eb4c80] text-xs sm:text-sm font-semibold px-4 py-2 rounded-full border border-[#eb4c80]/20 flex items-center gap-2">
                                <div className="w-2 h-2 bg-[#eb4c80] rounded-full animate-pulse" />
                                5 marcas nesse modelo
                            </div>
                        </div>

                        <div className="space-y-6 mb-10 text-xl text-zinc-300 font-medium relative z-10">
                            <div className="flex items-center justify-between border-b border-zinc-800 pb-6">
                                <span className="text-zinc-400">Setup:</span>
                                <span className="text-white text-2xl sm:text-3xl font-bold">
                                    R$1.290 <span className="text-zinc-500 text-lg font-normal tracking-wide">(único)</span>
                                </span>
                            </div>
                            <div className="flex items-center gap-4 text-white">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 border border-emerald-500/30">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                                </div>
                                Primeiro mês incluso
                            </div>
                            <div className="flex items-center gap-4 text-zinc-400">
                                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center opacity-50">
                                    <svg className="w-5 h-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                                </div>
                                Após: <span className="text-white ml-1 font-semibold">R$399</span>/mês
                            </div>
                        </div>

                        <div className="bg-zinc-900/60 p-6 sm:p-8 rounded-xl border border-zinc-800 mb-8 relative z-10">
                            <p className="text-zinc-200 font-medium text-lg leading-relaxed flex items-start gap-4">
                                <span className="text-[#eb4c80] text-2xl leading-none font-serif">"</span>
                                Setup já inclui a implementação + primeiro mês ativo no app.
                            </p>
                        </div>

                        <p className="text-zinc-400 text-lg sm:text-xl font-medium leading-relaxed relative z-10">
                            Você entra com o setup, <span className="text-zinc-200">testa no primeiro mês</span> e só continua se fizer sentido.
                        </p>
                    </div>
                </section>

                {/* CLOSE */}
                <section className="py-24 sm:py-32 border-t border-zinc-900 text-center sm:text-left">
                    <h2 className="text-3xl sm:text-5xl font-bold text-white mb-12 max-w-2xl leading-tight">
                        Se fizer sentido ver seu produto dentro de um cultivo estruturado:
                    </h2>

                    <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 mb-12">
                        <button
                            onClick={onDemoClick}
                            className="w-full sm:w-auto bg-[#eb4c80] hover:bg-[#d13a6a] text-white px-8 py-5 rounded-2xl font-bold text-lg transition-all hover:scale-105 shadow-[0_10px_30px_rgba(235,76,128,0.2)] flex items-center justify-center gap-3"
                        >
                            Ver demo com minha marca <span className="text-xl">→</span>
                        </button>
                        <span className="text-zinc-600 font-mono italic">ou</span>
                        <button
                            onClick={onTalkClick}
                            className="w-full sm:w-auto text-zinc-300 hover:text-white font-medium text-lg border-b border-zinc-700 hover:border-white pb-1 transition-colors flex items-center justify-center gap-2"
                        >
                            Conversar sobre integração <span className="text-xl">→</span>
                        </button>
                    </div>

                    <ul className="flex flex-col sm:flex-row sm:items-center justify-center sm:justify-start gap-4 sm:gap-8 text-zinc-500 font-mono text-sm uppercase tracking-wider">
                        <li className="flex items-center justify-center sm:justify-start gap-2">
                            <span className="w-1.5 h-1.5 bg-zinc-600 rounded-full" /> Sem contrato
                        </li>
                        <li className="flex items-center justify-center sm:justify-start gap-2">
                            <span className="w-1.5 h-1.5 bg-zinc-600 rounded-full" /> Ativação rápida
                        </li>
                        <li className="flex items-center justify-center sm:justify-start gap-2 text-[#eb4c80]">
                            <span className="w-1.5 h-1.5 bg-[#eb4c80] rounded-full" /> Primeiros parceiros definem o padrão
                        </li>
                    </ul>
                </section>

            </div>
        </div>
    );
}
