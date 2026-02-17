import type { FC } from 'react';
import { t, tArray } from '../lib/i18n';
import { CheckCircle2 } from './icons';

interface FeaturesSummarySectionProps {
    background?: 'white' | 'gray';
}

interface CategoryItem {
    title: string;
    items: string[];
}

const FeaturesSummarySection: FC<FeaturesSummarySectionProps> = ({
    background = 'white'
}) => {
    const bgClass = background === 'white' ? 'bg-white' : 'bg-gray-50';

    const title = t('collective.featuresSummary.title');
    const subtitle = t('collective.featuresSummary.subtitle');
    const intro = t('collective.featuresSummary.intro');
    const categoriesData = tArray('collective.featuresSummary.categories');

    // Type guard to ensure we have the right structure
    const categories = Array.isArray(categoriesData) && typeof categoriesData[0] === 'object'
        ? (categoriesData as unknown as CategoryItem[])
        : [];

    return (
        <section className={`py-20 ${bgClass} border-b border-gray-100`}>
            <div className="container mx-auto px-6 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-12 max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
                        {title}
                    </h2>
                    <p className="text-lg md:text-xl text-zinc-600 leading-relaxed mb-6">
                        {subtitle}
                    </p>
                    <p className="text-xl font-semibold text-emerald-700">
                        {intro}
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {categories.map((category, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-xl p-6 border border-zinc-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300"
                        >
                            {/* Category Title */}
                            <h3 className="text-lg font-bold text-zinc-900 mb-4 flex items-start gap-2">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center mt-0.5">
                                    <CheckCircle2 className="w-4 h-4 text-white" />
                                </span>
                                <span className="flex-1">{category.title}</span>
                            </h3>

                            {/* Items */}
                            <ul className="space-y-2">
                                {category.items.map((item, itemIdx) => (
                                    <li
                                        key={itemIdx}
                                        className="text-zinc-600 text-sm leading-relaxed pl-8 relative"
                                    >
                                        <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSummarySection;
