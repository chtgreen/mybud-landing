import type { FC } from 'react';
import { t } from '../lib/i18n';

interface MomentSectionProps {
    background?: 'white' | 'gray';
}

const MomentSection: FC<MomentSectionProps> = ({ background = 'gray' }) => {
    const bgClass = background === 'white' ? 'bg-white' : 'bg-gray-50';

    const title = t('collective.moment.title');
    const description = t('collective.moment.description');
    const keyphrase = t('collective.moment.keyphrase');
    const keyphrase2 = t('collective.moment.keyphrase2');

    return (
        <section className={`py-20 ${bgClass} border-b border-gray-100`}>
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="max-w-4xl mx-auto">
                    {/* Main Content */}
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-zinc-900">
                            {title}
                        </h2>
                        <p className="text-lg md:text-xl text-zinc-600 leading-relaxed">
                            {description}
                        </p>
                    </div>

                    {/* Keyphrase - Emphasized */}
                    <div className="mt-12 text-center">
                        <div className="inline-block bg-white rounded-2xl px-8 py-6 shadow-sm border-2 border-emerald-100">
                            <p className="text-2xl md:text-3xl font-bold text-zinc-900 mb-2">
                                {keyphrase}
                            </p>
                            <p className="text-2xl md:text-3xl font-bold text-emerald-600">
                                {keyphrase2}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MomentSection;
