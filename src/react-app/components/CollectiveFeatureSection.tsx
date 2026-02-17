import type { FC } from 'react';
import { t, tArray } from '../lib/i18n';
import { CheckIcon } from './icons/LucideStageIcons';

interface CollectiveFeatureSectionProps {
    translationKey: string;
    background?: 'white' | 'gray';
    align?: 'left' | 'center';
    icon?: FC<{ className?: string }>;
}

const CollectiveFeatureSection: FC<CollectiveFeatureSectionProps> = ({
    translationKey,
    background = 'white',
    align = 'left',
    icon: Icon
}) => {
    const bgClass = background === 'white' ? 'bg-white' : 'bg-gray-50';
    const alignClass = align === 'center' ? 'text-center' : 'text-left';
    const containerAlignClass = align === 'center' ? 'items-center' : 'items-start';

    const title = t(`${translationKey}.title`);
    const subtitle = t(`${translationKey}.subtitle`);
    const description = t(`${translationKey}.description`);
    const footer = t(`${translationKey}.footer`);
    const list = tArray(`${translationKey}.list`);

    // Check if keys exist (t returns key if not found)
    const hasSubtitle = subtitle !== `${translationKey}.subtitle` && subtitle !== '';
    const hasDescription = description !== `${translationKey}.description` && description !== '';
    const hasFooter = footer !== `${translationKey}.footer` && footer !== '';
    const hasList = list.length > 0;

    return (
        <section className={`py-20 ${bgClass} border-b border-gray-100`}>
            <div className="container mx-auto px-6 max-w-5xl">
                <div className={`flex flex-col ${containerAlignClass} max-w-4xl mx-auto`}>
                    {Icon && (
                        <div className="mb-6 p-3 bg-emerald-100 rounded-xl text-emerald-600">
                            <Icon className="w-8 h-8" />
                        </div>
                    )}

                    <h2 className={`text-3xl md:text-4xl font-bold text-zinc-900 mb-6 ${alignClass}`}>
                        {title}
                    </h2>

                    {hasSubtitle && (
                        <h3 className={`text-xl md:text-2xl font-semibold text-emerald-700 mb-6 ${alignClass}`}>
                            {subtitle}
                        </h3>
                    )}

                    {hasDescription && (
                        <div className={`prose prose-lg text-zinc-600 mb-8 ${alignClass} whitespace-pre-line`}>
                            {description.split('\n').map((line, i) => (
                                <p key={i} className="mb-4" dangerouslySetInnerHTML={{
                                    __html: line
                                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                        .replace(/\*(.*?)\*/g, '<em>$1</em>')
                                }} />
                            ))}
                        </div>
                    )}

                    {hasList && (
                        <div className="grid gap-4 w-full">
                            {list.map((item, index) => (
                                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="mt-1 text-emerald-500 flex-shrink-0">
                                        <CheckIcon className="w-5 h-5" />
                                    </div>
                                    <span className="text-lg text-zinc-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    )}

                    {hasFooter && (
                        <div className={`mt-10 pt-8 border-t border-gray-200 w-full ${alignClass}`}>
                            <p className="text-lg font-medium text-zinc-900 whitespace-pre-line text-center italic">
                                {footer}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default CollectiveFeatureSection;
