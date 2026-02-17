import type { FC } from 'react';
import { t } from '../lib/i18n';

interface PositioningSectionProps {
    background?: 'white' | 'gray';
}

const PositioningSection: FC<PositioningSectionProps> = ({ background = 'white' }) => {
    const bgClass = background === 'white' ? 'bg-white' : 'bg-gray-50';

    const title = t('collective.positioning.title');
    const description = t('collective.positioning.description');
    const details = t('collective.positioning.details');

    return (
        <section className={`py-20 ${bgClass} border-b border-gray-100`}>
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-zinc-900">
                        {title}
                    </h2>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-zinc-600 leading-relaxed mb-6">
                        {description}
                    </p>

                    {/* Details */}
                    <p className="text-base md:text-lg text-zinc-500 leading-relaxed italic">
                        {details}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PositioningSection;
