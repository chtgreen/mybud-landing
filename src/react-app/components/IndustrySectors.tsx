import type { FC } from 'react';
import { Leaf, FlaskConical, Wrench, Shield } from './icons';

const IndustrySectors: FC = () => {
    const sectors = [
        {
            id: 'breeders',
            icon: Leaf,
            title: 'Breeders & Sementes',
            desc: 'Pare de vender genética às cegas. Descubra sua taxa de germinação real (Germination Rate) no mercado. Colete reviews validados do perfil da strain e transforme cultivadores amadores em embaixadores da sua marca.',
            color: 'text-emerald-500',
            bg: 'bg-emerald-50',
            border: 'border-emerald-200'
        },
        {
            id: 'nutrients',
            icon: FlaskConical,
            title: 'Nutrição & Fertilizantes',
            desc: 'O fim da tabela em PDF que ninguém lê. O usuário seleciona sua marca e o app roteiriza a vida dele. Sem erro de mililitragem, sem plantas queimadas. Maior rendimento gera recompra automática.',
            color: 'text-blue-500',
            bg: 'bg-blue-50',
            border: 'border-blue-200'
        },
        {
            id: 'biologicals',
            icon: Shield,
            title: 'Solos Ativos & Defensivos',
            desc: 'Venda o antídoto na hora do desespero. O grower relatou ácaros ou deficiência? Seu produto pula na tela dele como a cura exata. Intercepte a jornada de compra exatamente quando o problema ocorre.',
            color: 'text-amber-500',
            bg: 'bg-amber-50',
            border: 'border-amber-200'
        },
        {
            id: 'hardware',
            icon: Wrench,
            title: 'Equipamentos, Iluminação & Sensores',
            desc: 'De tendas (grows), painéis de LED e sensores de clima agnósticos, até o maquinário de extração. O MyBud é o sistema operacional da semente à colheita. Integre-se e posicione seu hardware como a solução exata quando o grower precisar.',
            color: 'text-rose-500',
            bg: 'bg-rose-50',
            border: 'border-rose-200'
        }
    ];

    return (
        <section className="py-20 md:py-28 bg-white border-t border-gray-100">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 mb-6 tracking-tight">
                        Uma plataforma para <span className="text-emerald-600">toda a indústria</span>
                    </h2>
                    <p className="text-lg md:text-xl text-zinc-500 max-w-3xl mx-auto font-medium leading-relaxed">
                        Somos o sistema operacional do cultivo: <strong>da semente à colheita</strong>. Injetamos sua marca na etapa exata onde o cultivador precisa dela, seja você um Breeder, marca de Hardware Agnóstico ou Solos Ativos.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {sectors.map((sector) => (
                        <div key={sector.id} className="p-8 rounded-3xl border border-gray-200 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                            <div className={`w-14 h-14 rounded-2xl ${sector.bg} ${sector.border} border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <sector.icon className={`w-7 h-7 ${sector.color}`} />
                            </div>
                            <h3 className="text-xl font-bold text-zinc-900 mb-3 leading-tight">
                                {sector.title}
                            </h3>
                            <p className="text-zinc-500 leading-relaxed text-sm font-medium">
                                {sector.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustrySectors;
