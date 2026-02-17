import type { FC } from 'react';
import { t } from '../lib/i18n';

interface ContextSectionProps {
    background?: 'white' | 'gray';
}

const ContextSection: FC<ContextSectionProps> = ({ background = 'white' }) => {
    const bgClass = background === 'white' ? 'bg-white' : 'bg-gray-50';

    const title = t('collective.context.title');
    const description = t('collective.context.description');
    const highlight = t('collective.context.highlight');

    return (
        <section className={`py-20 ${bgClass} border-b border-gray-100`}>
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="max-w-4xl mx-auto">
                    {/* H2 Title - SEO optimized */}
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-zinc-900 text-center">
                        {title}
                    </h2>

                    {/* Description with keywords */}
                    <p className="text-lg md:text-xl text-zinc-600 leading-relaxed text-center mb-8">
                        {description}
                    </p>

                    {/* Highlighted keyphrase */}
                    <div className="mt-8 text-center">
                        <div className="inline-block bg-emerald-50 border-l-4 border-emerald-500 rounded-r-lg px-8 py-4">
                            <p className="text-xl font-semibold text-emerald-800 italic">
                                {highlight}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContextSection;
