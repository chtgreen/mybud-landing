import type { FC } from 'react';
import { t, tArray } from '../lib/i18n';
import { X } from './icons';

interface WhatItsNotSectionProps {
    background?: 'white' | 'gray';
}

interface NotItem {
    title: string;
    description: string;
}

const WhatItsNotSection: FC<WhatItsNotSectionProps> = ({ background = 'white' }) => {
    const bgClass = background === 'white' ? 'bg-white' : 'bg-gray-50';

    const title = t('collective.whatItsNot.title');
    const description = t('collective.whatItsNot.description');
    const itemsData = tArray('collective.whatItsNot.items');

    // Type guard
    const items = Array.isArray(itemsData) && typeof itemsData[0] === 'object'
        ? (itemsData as unknown as NotItem[])
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

                {/* What It's Not Grid */}
                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {items.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-xl p-6 border border-zinc-200 hover:border-zinc-300 transition-all duration-300 hover:shadow-md"
                        >
                            {/* X Icon */}
                            <div className="w-12 h-12 rounded-lg bg-zinc-100 flex items-center justify-center mb-4">
                                <X className="w-6 h-6 text-zinc-500" />
                            </div>

                            {/* Not Title */}
                            <h3 className="text-lg font-bold text-zinc-900 mb-3">
                                {item.title}
                            </h3>

                            {/* Not Description */}
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

export default WhatItsNotSection;
