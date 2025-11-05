import { useCallback, useEffect, useRef, useState, type FC } from 'react';
import {
  BeanIcon,
  SproutIcon,
  LeafIcon,
  FlowerIcon,
  ScissorsIcon,
  HourglassIcon,
  WindIcon,
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  type StageIconComponent,
} from './icons/LucideStageIcons';

type StageStatus = 'completed' | 'current' | 'upcoming';

type Stage = {
  icon: StageIconComponent;
  name: string;
  nameKey: string;
  duration: string;
  status: StageStatus;
  summary: string;
  badgeLabel?: string;
  iconWrapperClass: string;
  badgeClass?: string;
  summaryClass: string;
  connectorClass: string;
};

const stages: Stage[] = [
  {
    icon: BeanIcon,
    name: 'Germinação',
    nameKey: 'timeline.germinating',
    duration: '3-7 dias',
    status: 'completed',
    summary: 'Brotou em 5 dias e ganhou força rapidamente.',
    badgeLabel: 'Concluído',
    iconWrapperClass:
      'border border-amber-200/90 bg-amber-50 text-amber-600 shadow-[0_14px_38px_-18px_rgba(251,191,36,0.55)]',
    badgeClass: 'border border-amber-200/60 bg-amber-100/90 text-amber-700',
    summaryClass: 'text-amber-700/80',
    connectorClass: 'from-amber-200/80 via-emerald-200/80 to-emerald-200/70',
  },
  {
    icon: SproutIcon,
    name: 'Enraizando',
    nameKey: 'timeline.rooting',
    duration: '7-14 dias',
    status: 'completed',
    summary: 'Raízes firmes aos 9 dias com ambiente controlado.',
    badgeLabel: 'Concluído',
    iconWrapperClass:
      'border border-green-200/90 bg-green-50 text-green-600 shadow-[0_14px_38px_-18px_rgba(74,222,128,0.45)]',
    badgeClass: 'border border-green-200/60 bg-green-100/90 text-green-700',
    summaryClass: 'text-green-700/80',
    connectorClass: 'from-green-200/80 via-emerald-200/80 to-emerald-200/70',
  },
  {
    icon: LeafIcon,
    name: 'Vegetativo',
    nameKey: 'timeline.vegetating',
    duration: '3-8 semanas',
    status: 'completed',
    summary: '35 dias de vegetativo com treinamentos leves.',
    badgeLabel: 'Concluído',
    iconWrapperClass:
      'border border-emerald-200/90 bg-emerald-50 text-emerald-600 shadow-[0_14px_38px_-18px_rgba(16,185,129,0.45)]',
    badgeClass: 'border border-emerald-200/60 bg-emerald-100/90 text-emerald-700',
    summaryClass: 'text-emerald-700/80',
    connectorClass: 'from-emerald-200/80 via-purple-200/80 to-purple-200/70',
  },
  {
    icon: FlowerIcon,
    name: 'Floração',
    nameKey: 'timeline.flowering',
    duration: '8-12 semanas',
    status: 'current',
    summary: 'Semana 6 • tricomas leitosos e pistilos âmbar.',
    badgeLabel: 'Semana 6',
    iconWrapperClass:
      'border border-purple-200 bg-purple-50 text-purple-600 shadow-[0_18px_38px_-16px_rgba(168,85,247,0.45)]',
    badgeClass: 'border border-purple-200/60 bg-purple-100 text-purple-700',
    summaryClass: 'text-purple-600',
    connectorClass: 'from-purple-200/70 via-blue-200/70 to-blue-200/60',
  },
  {
    icon: ScissorsIcon,
    name: 'Colheita',
    nameKey: 'timeline.harvested',
    duration: 'Semana 9+',
    status: 'upcoming',
    summary: 'Flush agendado e lupa pronta para monitorar tricomas.',
    badgeLabel: 'Em breve',
    iconWrapperClass:
      'border border-blue-200/80 bg-blue-50 text-blue-600 shadow-[0_10px_32px_-18px_rgba(59,130,246,0.35)]',
    badgeClass: 'border border-blue-200/60 bg-blue-100/80 text-blue-700',
    summaryClass: 'text-blue-600/80',
    connectorClass: 'from-blue-200/60 via-orange-200/60 to-orange-200/50',
  },
  {
    icon: HourglassIcon,
    name: 'Secagem',
    nameKey: 'timeline.drying',
    duration: '7-14 dias',
    status: 'upcoming',
    summary: 'Ambiente previsto: 20 °C, 60% UR e circulação leve.',
    badgeLabel: 'Estimativa',
    iconWrapperClass:
      'border border-orange-200/80 bg-orange-50 text-orange-500 shadow-[0_10px_32px_-18px_rgba(249,115,22,0.35)]',
    badgeClass: 'border border-orange-200/60 bg-orange-100/80 text-orange-600',
    summaryClass: 'text-orange-600/80',
    connectorClass: 'from-orange-200/60 via-cyan-200/60 to-cyan-200/50',
  },
  {
    icon: WindIcon,
    name: 'Cura',
    nameKey: 'timeline.curing',
    duration: '2-4+ semanas',
    status: 'upcoming',
    summary: 'Burping semanal e monitoramento de umidade.',
    badgeLabel: 'Estimativa',
    iconWrapperClass:
      'border border-cyan-200/80 bg-cyan-50 text-cyan-600 shadow-[0_10px_32px_-18px_rgba(6,182,212,0.35)]',
    badgeClass: 'border border-cyan-200/60 bg-cyan-100/80 text-cyan-700',
    summaryClass: 'text-cyan-700/80',
    connectorClass: 'from-cyan-200/60 via-teal-200/60 to-teal-200/50',
  },
  {
    icon: CheckIcon,
    name: 'Pronto',
    nameKey: 'timeline.finished',
    duration: 'Celebrar',
    status: 'upcoming',
    summary: 'Terpenos preservados e experiência completa.',
    iconWrapperClass:
      'border border-teal-200/80 bg-teal-50 text-teal-600 shadow-[0_10px_32px_-18px_rgba(45,212,191,0.35)]',
    badgeClass: 'border border-teal-200/60 bg-teal-100/80 text-teal-700',
    summaryClass: 'text-teal-700/80',
    connectorClass: 'from-teal-200/60 via-teal-200/40 to-teal-200/30',
  },
];

interface PlantTimelineProps {
  className?: string;
  compact?: boolean;
}

export const PlantTimeline: FC<PlantTimelineProps> = ({ className = '', compact = false }) => {
  const iconSizeClass = compact ? 'h-12 w-12' : 'h-14 w-14';
  const cardWidth = compact ? 'min-w-[110px]' : 'min-w-[130px] md:min-w-[145px]';
  const iconGlyphSize = compact ? 'h-5 w-5' : 'h-6 w-6';
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollButtons = useCallback(() => {
    const el = scrollRef.current;
    if (!el) {
      setCanScrollLeft(false);
      setCanScrollRight(false);
      return;
    }

    const { scrollLeft, scrollWidth, clientWidth } = el;
    const maxScrollLeft = scrollWidth - clientWidth;

    setCanScrollLeft(scrollLeft > 12);
    setCanScrollRight(scrollLeft < maxScrollLeft - 12);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateScrollButtons();

    const handleScroll = () => updateScrollButtons();
    el.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      el.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [updateScrollButtons]);

  const scrollAmount = compact ? 180 : 240;

  const handleScroll = useCallback(
    (direction: 'left' | 'right') => {
      const el = scrollRef.current;
      if (!el) return;

      const offset = direction === 'left' ? -scrollAmount : scrollAmount;
      el.scrollBy({ left: offset, behavior: 'smooth' });
    },
    [scrollAmount]
  );

  return (
    <div className={`relative ${className}`}>
      <div className="relative mx-auto max-w-5xl">
        <button
          type="button"
          aria-label="Ver etapas anteriores"
          onClick={() => handleScroll('left')}
          disabled={!canScrollLeft}
          className={`absolute left-0 top-1/2 z-30 -translate-y-1/2 rounded-full border border-gray-200 bg-white/90 p-2 shadow-lg transition-opacity ${
            canScrollLeft ? 'opacity-100 hover:bg-white' : 'pointer-events-none opacity-0'
          }`}
        >
          <ChevronLeftIcon className="h-5 w-5 text-gray-600" />
        </button>

        <button
          type="button"
          aria-label="Ver próximas etapas"
          onClick={() => handleScroll('right')}
          disabled={!canScrollRight}
          className={`absolute right-0 top-1/2 z-30 -translate-y-1/2 rounded-full border border-gray-200 bg-white/90 p-2 shadow-lg transition-opacity ${
            canScrollRight ? 'opacity-100 hover:bg-white' : 'pointer-events-none opacity-0'
          }`}
        >
          <ChevronRightIcon className="h-5 w-5 text-gray-600" />
        </button>

        <div className="relative">
          {canScrollLeft && (
            <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-12 bg-gradient-to-r from-white via-white/80 to-transparent" />
          )}
          {canScrollRight && (
            <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-12 bg-gradient-to-l from-white via-white/80 to-transparent" />
          )}

          <div
            ref={scrollRef}
            className="flex items-center gap-2 md:gap-2.5 overflow-x-auto pb-6 scrollbar-hide scroll-smooth"
          >
            {stages.map((stage, index) => {
              const isUpcoming = stage.status === 'upcoming';
              const isCurrent = stage.status === 'current';
              const nextStage = stages[index + 1];

              return (
                <div 
                  key={stage.nameKey} 
                  className="flex items-center flex-shrink-0 group animate-in fade-in slide-in-from-bottom-4 duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`flex flex-col items-center text-center gap-2 ${cardWidth} transition-transform duration-300 group-hover:-translate-y-1`}
                  >
                    <div
                      className={`relative flex items-center justify-center rounded-2xl border backdrop-blur-sm ${iconSizeClass} ${stage.iconWrapperClass} ${
                        isUpcoming ? 'opacity-75 border-dashed' : ''
                      } ${
                        isCurrent ? 'ring-3 ring-purple-200/50 shadow-[0_18px_42px_-14px_rgba(147,51,234,0.45)]' : ''
                      }`}
                    >
                      <stage.icon className={iconGlyphSize} />

                      {stage.status === 'completed' && (
                        <span className="absolute -top-1 -right-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-white bg-emerald-500 text-white text-[9px] shadow-lg">
                          <CheckIcon className="w-3 h-3" aria-hidden="true" />
                        </span>
                      )}
                      {isCurrent && (
                        <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-2.5 py-0.5 text-[11px] font-semibold text-purple-600 shadow-lg">
                          Ao vivo
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col items-center gap-1 pt-2">
                      <span className="text-sm font-semibold text-gray-900 md:text-base">
                        {stage.name}
                      </span>
                      {stage.duration && (
                        <span className="text-[11px] uppercase tracking-[0.22em] text-gray-500">
                          {stage.duration}
                        </span>
                      )}
                    </div>

                    {stage.summary && (
                      <p
                        className={`hidden text-center text-xs leading-snug md:block md:text-xs ${stage.summaryClass}`}
                      >
                        {stage.summary}
                      </p>
                    )}

                    {stage.badgeLabel && (
                      <span
                        className={`mt-1 inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide ${stage.badgeClass}`}
                      >
                        {stage.badgeLabel}
                      </span>
                    )}
                  </div>

                  {nextStage && (
                    <div
                      className={`mx-2.5 h-1 w-8 sm:w-12 rounded-full bg-gradient-to-r ${stage.connectorClass} ${
                        isUpcoming ? 'opacity-40' : 'opacity-80'
                      } transition-all duration-500`}
                      style={{ 
                        animation: 'grow-line 0.8s ease-out forwards',
                        animationDelay: `${index * 100 + 200}ms`,
                        transformOrigin: 'left'
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantTimeline;
