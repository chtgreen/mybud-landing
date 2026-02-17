import type { FC } from 'react';
import { t, tArray } from '../lib/i18n';
import { CheckCircle2 } from './icons';

interface SolutionSectionProps {
    background?: 'white' | 'gray';
}

const SolutionSection: FC<SolutionSectionProps> = ({ background = 'white' }) => {
    const bgClass = background === 'white' ? 'bg-white' : 'bg-gray-50';

    const title = t('collective.solution.title');
    const description = t('collective.solution.description');
    const features = tArray('collective.solution.features') as string[];

    return (
        <section className={`py-20 ${bgClass} border-b border-gray-100`}>
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="max-w-4xl mx-auto">
                    {/* H2 Title - SEO optimized */}
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-zinc-900 text-center">
                        {title}
                    </h2>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-zinc-600 leading-relaxed text-center mb-10">
                        {description}
                    </p>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-2 gap-4">
                        {features.map((feature, idx) => (
                            <div
                                key={idx}
                                className="flex items-start gap-3 bg-white rounded-lg p-4 border border-emerald-100 hover:border-emerald-300 hover:shadow-md transition-all duration-300"
                            >
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center mt-0.5">
                                    <CheckCircle2 className="w-4 h-4 text-white" />
                                </div>
                                <span className="text-zinc-700 leading-relaxed flex-1">
                                    {feature}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SolutionSection;
