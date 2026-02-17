import type { FC } from 'react';
import { t, tArray } from '../lib/i18n';
import { Users, Building2, Shield } from './icons';
import type { LucideIcon } from './icons';

interface TargetAudienceSectionProps {
    background?: 'white' | 'gray';
}

interface AudienceItem {
    title: string;
    description: string;
}

const icons: LucideIcon[] = [Users, Building2, Shield];

const TargetAudienceSection: FC<TargetAudienceSectionProps> = ({ background = 'gray' }) => {
    const bgClass = background === 'white' ? 'bg-white' : 'bg-gray-50';

    const title = t('collective.targetAudience.title');
    const description = t('collective.targetAudience.description');
    const audiencesData = tArray('collective.targetAudience.audiences');

    // Type guard
    const audiences = Array.isArray(audiencesData) && typeof audiencesData[0] === 'object'
        ? (audiencesData as unknown as AudienceItem[])
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

                {/* Audiences Grid */}
                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {audiences.map((audience, idx) => {
                        const Icon = icons[idx] || Users;

                        return (
                            <div
                                key={idx}
                                className="bg-white rounded-xl p-6 border border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg"
                            >
                                {/* Icon */}
                                <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center mb-4">
                                    <Icon className="w-6 h-6 text-emerald-600" />
                                </div>

                                {/* Audience Title */}
                                <h3 className="text-lg font-bold text-zinc-900 mb-3">
                                    {audience.title}
                                </h3>

                                {/* Audience Description */}
                                <p className="text-zinc-600 leading-relaxed text-sm">
                                    {audience.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default TargetAudienceSection;
