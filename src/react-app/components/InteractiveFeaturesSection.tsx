import type { FC } from 'react';
import { useState } from 'react';
import { t, tArray } from '../lib/i18n';
import {
    Sprout,
    Leaf,
    FlaskConical,
    Package,
    Atom,
    Users,
    Plug,
    MapPin,
    FileText,
    ChevronDown
} from './icons';
import type { LucideIcon } from './icons';

interface InteractiveFeaturesSectionProps {
    background?: 'white' | 'gray';
}

interface FeatureDetail {
    description: string;
    highlight?: string;
    items: string[];
}

interface Feature {
    id: string;
    icon: string;
    title: string;
    summary: string;
    details: FeatureDetail;
}

const iconMap: Record<string, LucideIcon> = {
    seedling: Sprout,
    plant: Leaf,
    flask: FlaskConical,
    package: Package,
    molecule: Atom,
    users: Users,
    plug: Plug,
    mapPin: MapPin,
    fileText: FileText,
};

const InteractiveFeaturesSection: FC<InteractiveFeaturesSectionProps> = ({
    background = 'white'
}) => {
    const bgClass = background === 'white' ? 'bg-white' : 'bg-gray-50';
    const [expandedFeature, setExpandedFeature] = useState<string | null>(null);
    const [showAll, setShowAll] = useState(false);

    const title = t('collective.detailedFeatures.title');
    const subtitle = t('collective.detailedFeatures.subtitle');
    const featuresData = tArray('collective.detailedFeatures.features');

    // Type guard to ensure we have the right structure
    const allFeatures = Array.isArray(featuresData) && typeof featuresData[0] === 'object'
        ? (featuresData as unknown as Feature[])
        : [];

    const features = showAll ? allFeatures : allFeatures.slice(0, 4);

    const toggleFeature = (featureId: string) => {
        setExpandedFeature(expandedFeature === featureId ? null : featureId);
    };

    return (
        <section className={`py-24 ${bgClass} relative overflow-hidden`}>
            {/* Subtle background gradient */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-300 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4 tracking-tight">
                        {title}
                    </h2>
                    <p className="text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                </div>

                {/* Interactive Features Grid */}
                <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
                    {features.map((feature) => {
                        const Icon = iconMap[feature.icon] || FileText;
                        const isExpanded = expandedFeature === feature.id;

                        return (
                            <div
                                key={feature.id}
                                className={`
                  group relative rounded-2xl border-2 transition-all duration-500 ease-out
                  ${isExpanded
                                        ? 'bg-white border-emerald-500 shadow-xl md:col-span-2'
                                        : 'bg-white border-zinc-200 hover:border-emerald-300 hover:shadow-lg'
                                    }
                `}
                            >
                                {/* Clickable Header */}
                                <button
                                    onClick={() => toggleFeature(feature.id)}
                                    className="w-full text-left p-6 flex items-start gap-4 transition-all duration-300"
                                >
                                    {/* Icon */}
                                    <div className={`
                    flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center
                    transition-all duration-500
                    ${isExpanded
                                            ? 'bg-emerald-500 shadow-lg scale-110'
                                            : 'bg-emerald-50 group-hover:bg-emerald-100'
                                        }
                  `}>
                                        <Icon className={`
                      w-7 h-7 transition-colors duration-500
                      ${isExpanded ? 'text-white' : 'text-emerald-700'}
                    `} />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <h3 className={`
                       text-xl font-bold mb-2 transition-colors duration-300
                      ${isExpanded ? 'text-emerald-700' : 'text-zinc-900 group-hover:text-emerald-700'}
                    `}>
                                            {feature.title}
                                        </h3>
                                        <p className="text-zinc-600 leading-relaxed">
                                            {feature.summary}
                                        </p>
                                    </div>

                                    {/* Expand/Collapse Icon */}
                                    <div className="flex-shrink-0">
                                        <ChevronDown className={`
                      w-6 h-6 text-zinc-400 transition-all duration-500
                      ${isExpanded ? 'rotate-180 text-emerald-600' : 'group-hover:text-emerald-600'}
                    `} />
                                    </div>
                                </button>

                                {/* Expandable Details */}
                                <div className={`
                  overflow-hidden transition-all duration-500 ease-out
                  ${isExpanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}
                `}>
                                    <div className="px-6 pb-6 pt-2">
                                        {/* Divider */}
                                        <div className="h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent mb-6" />

                                        {/* Description */}
                                        <p className="text-zinc-700 leading-relaxed mb-4 text-lg">
                                            {feature.details.description}
                                        </p>

                                        {/* Highlight (if exists) */}
                                        {feature.details.highlight && (
                                            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 mb-6 rounded-r-lg">
                                                <p className="text-emerald-800 font-semibold italic">
                                                    {feature.details.highlight}
                                                </p>
                                            </div>
                                        )}

                                        {/* Items List */}
                                        <div className="space-y-3">
                                            {feature.details.items.map((item, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex items-start gap-3 group/item"
                                                    style={{
                                                        animation: isExpanded ? `fadeInUp 0.4s ease-out ${idx * 0.1}s both` : 'none'
                                                    }}
                                                >
                                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center mt-0.5 transition-transform group-hover/item:scale-110">
                                                        <div className="w-2 h-2 rounded-full bg-white" />
                                                    </div>
                                                    <span className="text-zinc-700 leading-relaxed flex-1">
                                                        {item}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Show More Button */}
                {!showAll && allFeatures.length > 4 && (
                    <div className="mt-12 text-center">
                        <button
                            onClick={() => setShowAll(true)}
                            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-emerald-500 text-emerald-700 font-bold hover:bg-emerald-500 hover:text-white transition-all duration-300"
                        >
                            {t('collective.detailedFeatures.showMore')}
                            <ChevronDown className="w-5 h-5" />
                        </button>
                    </div>
                )}

                {/* Bottom Message */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-3 bg-white rounded-full px-8 py-4 shadow-sm border border-zinc-200">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <p className="text-zinc-700">
                            <strong className="font-semibold">{t('collective.detailedFeatures.bottomTextBold')}</strong>
                            <span className="text-zinc-500 ml-2">{t('collective.detailedFeatures.bottomTextNormal')}</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Add fadeInUp animation */}
            <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </section>
    );
};

export default InteractiveFeaturesSection;
