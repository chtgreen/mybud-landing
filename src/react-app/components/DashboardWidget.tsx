import type { FC } from 'react';
import { t, tArray } from '../lib/i18n';

type WidgetPair = {
  value: string;
  label: string;
  detail?: string;
};

const sanitizeTranslation = (value: string, fallbackKey: string): string =>
  value === fallbackKey ? '' : value;

const parseWidgetPairs = (key: string): WidgetPair[] => {
  const items = tArray(key) || [];

  return items
    .map((raw) => raw.split('|').map((part) => part.trim()))
    .filter((parts) => parts.length >= 2)
    .map<WidgetPair>((parts) => {
      const [value = '', label = '', detail = ''] = parts;
      return {
        value,
        label,
        detail: detail || undefined,
      };
    })
    .filter((item) => item.value && item.label);
};

interface DashboardWidgetProps {
  variant?: 'hero' | 'section';
}

const DashboardWidget: FC<DashboardWidgetProps> = ({ variant = 'hero' }) => {
  const title = sanitizeTranslation(t('hero.widget.title'), 'hero.widget.title') || 'Growers Hub';
  const chip = sanitizeTranslation(t('hero.widget.chip'), 'hero.widget.chip') || 'Ao vivo';

  const mainStatLabel = sanitizeTranslation(t('hero.widget.mainStat.label'), 'hero.widget.mainStat.label');
  const mainStatValue = sanitizeTranslation(t('hero.widget.mainStat.value'), 'hero.widget.mainStat.value');
  const mainStatTrend = sanitizeTranslation(t('hero.widget.mainStat.trend'), 'hero.widget.mainStat.trend');

  const stats = parseWidgetPairs('hero.widget.stats').slice(0, 3);
  const timeline = parseWidgetPairs('hero.widget.timeline').slice(0, 3);
  const signals = parseWidgetPairs('hero.widget.signals').slice(0, 3);
  const footnote = sanitizeTranslation(t('hero.widget.footnote'), 'hero.widget.footnote');
  const timelineTitle =
    sanitizeTranslation(t('hero.widget.timelineTitle'), 'hero.widget.timelineTitle') || 'Checkpoint do protocolo';
  const signalsTitle =
    sanitizeTranslation(t('hero.widget.signalsTitle'), 'hero.widget.signalsTitle') || 'Alertas rápidos';

  const basePadding = variant === 'hero' ? 'p-6 sm:p-6' : 'p-6 sm:p-7';
  const gridCols = variant === 'hero' ? 'sm:grid-cols-3' : 'sm:grid-cols-3';

  return (
    <div
      className={`rounded-[28px] border border-[var(--azul-suave)] bg-[var(--white)] shadow-[0_28px_48px_rgba(40,134,100,0.08)] ${basePadding}`}
    >
      <div className="flex items-center justify-between text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--verde-bud)]">
        <span>{title}</span>
        <span className="inline-flex items-center gap-2 rounded-full border border-[var(--azul-suave)] bg-[var(--background-soft)] px-3 py-1 text-[0.62rem] font-semibold tracking-[0.16em] text-[var(--verde-bud)]">
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[var(--verde-bud)]" />
          {chip}
        </span>
      </div>

      {(mainStatLabel || mainStatValue) && (
        <div className="mt-5 rounded-3xl border border-[var(--azul-suave)] bg-[var(--background-soft)] px-5 py-4">
          {mainStatLabel && (
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
              {mainStatLabel}
            </p>
          )}
          {mainStatValue && (
            <p className="mt-1 text-4xl font-semibold text-[var(--verde-bud)]">{mainStatValue}</p>
          )}
          {mainStatTrend && (
            <p className="mt-1 text-xs font-medium text-[var(--verde-bud)]">{mainStatTrend}</p>
          )}
        </div>
      )}

      {stats.length > 0 && (
        <div className={`mt-5 grid grid-cols-1 gap-3 ${gridCols}`}>
          {stats.map((item, index) => (
            <div
              key={`stat-${index}`}
              className="rounded-2xl border border-[var(--azul-suave)] bg-[var(--white)] px-4 py-3 shadow-[0_14px_24px_rgba(40,134,100,0.08)]"
            >
              <p className="text-2xl font-semibold text-[var(--verde-bud)]">{item.value}</p>
              <p className="text-[0.62rem] uppercase tracking-[0.16em] text-[var(--text-muted)]">{item.label}</p>
              {item.detail && (
                <p className="mt-1 text-[0.68rem]" style={{ color: 'rgba(40, 134, 100, 0.8)' }}>
                  {item.detail}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {timeline.length > 0 && (
        <div className="mt-6 rounded-2xl border border-[var(--azul-suave)] bg-[var(--off-white)] px-4 py-3">
          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
            {timelineTitle}
          </p>
          <ul className="mt-3 space-y-3">
            {timeline.map((item, index) => (
              <li key={`timeline-${index}`} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-2xl bg-[var(--background-soft)] text-[0.7rem] font-semibold text-[var(--verde-bud)]">
                  {item.value.replace('Semana ', 'S')}
                </span>
                <div className="flex-1">
                  <p className="text-[0.78rem] font-semibold text-[var(--verde-bud)]">{item.label}</p>
                  {item.detail && (
                    <p className="text-[0.68rem] text-[var(--text-muted)]">{item.detail}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {signals.length > 0 && (
        <div className="mt-5 rounded-2xl border border-[var(--azul-suave)] bg-[var(--white)] px-4 py-3">
          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
            {signalsTitle}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {signals.map((item, index) => (
              <span
                key={`signal-${index}`}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--azul-suave)] bg-[var(--background-soft)] px-3 py-1 text-[0.68rem] font-medium text-[var(--verde-bud)]"
              >
                <span className="inline-flex h-2 w-2 rounded-full bg-[var(--verde-claro)]" />
                <span>{item.label}</span>
                <span className="text-[var(--text-muted)]">{item.value}</span>
              </span>
            ))}
          </div>
        </div>
      )}

      {footnote && (
        <div className="mt-5 rounded-2xl border border-[var(--azul-suave)] bg-[var(--white)] px-3 py-2 text-[0.68rem] font-medium text-[var(--text-muted)]">
          {footnote}
        </div>
      )}
    </div>
  );
};

export default DashboardWidget;
