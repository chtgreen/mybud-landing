import type { FC } from 'react';
import { t, tArray } from '../lib/i18n';
import { CheckCircle2 } from './icons';

interface HowItWorksSectionProps {
    background?: 'white' | 'gray';
}

interface FeatureItem {
    title: string;
    description: string;
}

const HowItWorksSection: FC<HowItWorksSectionProps> = ({ background = 'gray' }) => {
    const bgClass = background === 'white' ? 'bg-white' : 'bg-gray-50';

    const title = t('collective.howItWorks.title');
    const description = t('collective.howItWorks.description');
    const featuresData = tArray('collective.howItWorks.features');

    // Type guard
    const features = Array.isArray(featuresData) && typeof featuresData[0] === 'object'
        ? (featuresData as unknown as FeatureItem[])
        : [];

    return (
        <section className={`py-20 ${bgClass} border-b border-gray-100`}>
            <div className="container mx-auto px-6 max-w-6xl">
                {/* H2 Title - SEO optimized */}
                <div className="text-center mb-12 max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
                        {title}
                    </h2>
                    <p className="text-lg md:text-xl text-zinc-600 leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Features List */}
                <div className="max-w-4xl mx-auto space-y-4">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-xl p-6 border border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-md"
                        >
                            <div className="flex items-start gap-4">
                                {/* Checkmark */}
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center mt-1">
                                    <CheckCircle2 className="w-5 h-5 text-white" />
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-zinc-900 mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-zinc-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
