import type { FC } from 'react';
import { t } from '../lib/i18n';

const MapPinIcon: FC<{ className?: string }> = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);

const CollectiveGeolocationSection: FC = () => {
    const title = t('collective.geolocation.title');
    const subtitle = t('collective.geolocation.subtitle');
    const description = t('collective.geolocation.description');

    return (
        <section className="py-24 bg-zinc-900 text-white relative overflow-hidden">
            {/* Background Map Effect */}
            <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 0 L100 100 M100 0 L0 100" stroke="white" strokeWidth="0.5" />
                    {/* Abstract grid */}
                    {[...Array(10)].map((_, i) => (
                        <line key={`h-${i}`} x1="0" y1={i * 10} x2="100" y2={i * 10} stroke="white" strokeWidth="0.2" />
                    ))}
                    {[...Array(10)].map((_, i) => (
                        <line key={`v-${i}`} x1={i * 10} y1="0" x2={i * 10} y2="100" stroke="white" strokeWidth="0.2" />
                    ))}
                </svg>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 mb-6">
                            <MapPinIcon className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">{t('collective.geolocation.badge')}</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            {title}
                        </h2>

                        <h3 className="text-xl md:text-2xl text-emerald-400 font-medium mb-8">
                            {subtitle}
                        </h3>

                        <div className="prose prose-lg prose-invert text-zinc-300 whitespace-pre-line">
                            {description.split('\n').map((line, i) => (
                                <p key={i} className="mb-4" dangerouslySetInnerHTML={{
                                    __html: line
                                        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')
                                        .replace(/\*(.*?)\*/g, '<em class="text-emerald-200">$1</em>')
                                }} />
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        {/* Visual representation of geolocation */}
                        <div className="aspect-square rounded-3xl bg-zinc-800 border border-zinc-700 p-8 relative overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-zinc-900/50" />

                            {/* Central Point */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="w-4 h-4 bg-emerald-500 rounded-full animate-ping absolute" />
                                <div className="w-4 h-4 bg-emerald-500 rounded-full relative shadow-[0_0_20px_rgba(16,185,129,0.5)]" />
                            </div>

                            {/* Radar Circles */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-emerald-500/30 rounded-full" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-emerald-500/20 rounded-full" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-emerald-500/10 rounded-full" />

                            {/* Data Points */}
                            <div className="absolute top-1/3 left-1/3 p-2 bg-zinc-900/80 backdrop-blur border border-zinc-700 rounded text-xs text-emerald-400">
                                {t('collective.geolocation.label1')}
                            </div>
                            <div className="absolute bottom-1/3 right-1/3 p-2 bg-zinc-900/80 backdrop-blur border border-zinc-700 rounded text-xs text-emerald-400">
                                {t('collective.geolocation.label2')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CollectiveGeolocationSection;
