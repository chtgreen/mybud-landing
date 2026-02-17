import type { FC } from 'react';
import { t, tArray } from '../lib/i18n';
import { AlertCircle } from './icons';

interface ProblemsSectionProps {
    background?: 'white' | 'gray';
}

interface ProblemItem {
    title: string;
    description: string;
}

const ProblemsSection: FC<ProblemsSectionProps> = ({ background = 'gray' }) => {
    const bgClass = background === 'white' ? 'bg-white' : 'bg-gray-50';

    const title = t('collective.problems.title');
    const description = t('collective.problems.description');
    const itemsData = tArray('collective.problems.items');

    // Type guard
    const items = Array.isArray(itemsData) && typeof itemsData[0] === 'object'
        ? (itemsData as unknown as ProblemItem[])
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

                {/* 3 Problems Grid */}
                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {items.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-xl p-6 border-2 border-red-100 hover:border-red-300 transition-all duration-300 hover:shadow-lg"
                        >
                            {/* Icon */}
                            <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center mb-4">
                                <AlertCircle className="w-6 h-6 text-red-600" />
                            </div>

                            {/* Problem Title */}
                            <h3 className="text-lg font-bold text-zinc-900 mb-3">
                                {item.title}
                            </h3>

                            {/* Problem Description */}
                            <p className="text-zinc-600 leading-relaxed text-sm">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProblemsSection;
