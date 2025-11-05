import type { FC } from 'react';
import { t } from '../lib/i18n';

interface SponsorshipProps {
  background?: 'white' | 'gray';
  translationKey?: string; // e.g., 'problem' or 'collective.problem'
}

const Sponsorship: FC<SponsorshipProps> = ({ background = 'white', translationKey = 'problem' }) => {
  const bgClass = background === 'white' ? 'bg-white' : 'bg-gray-50';

  return (
    <section className={`py-20 ${bgClass} organic-background`}>
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-semibold text-gray-900 md:text-4xl">
              {t(`${translationKey}.title`)}
            </h2>
            <p className="mb-6 text-lg text-gray-700">
              {t(`${translationKey}.description`)}
            </p>
            {t(`${translationKey}.cta`) !== `${translationKey}.cta` && (
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#features"
                  className="inline-flex items-center justify-center rounded-xl border border-[var(--verde-bud)] bg-[var(--white)] px-6 py-3 text-base font-semibold text-[var(--verde-bud)] transition-colors hover:bg-[var(--background-soft)]"
                >
                  {t(`${translationKey}.cta`)}
                </a>
              </div>
            )}
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-lg rounded-[28px] border border-[var(--azul-suave)] bg-[var(--white)] px-6 py-5 shadow-[0_20px_38px_rgba(40,134,100,0.08)]">
              <div className="flex items-center justify-between text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--verde-bud)]">
                <span>{t(`${translationKey}.widget.title`)}</span>
                <span className="rounded-full border border-[var(--azul-suave)] bg-[var(--background-soft)] px-3 py-1 text-[0.62rem] font-semibold tracking-[0.16em] text-[var(--verde-bud)]">
                  {t(`${translationKey}.widget.chip`)}
                </span>
              </div>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[0, 1, 2, 3].map((index) => {
                  const value = t(`${translationKey}.widget.stats.${index}.value`);
                  const label = t(`${translationKey}.widget.stats.${index}.label`);
                  if (
                    value === `${translationKey}.widget.stats.${index}.value` ||
                    label === `${translationKey}.widget.stats.${index}.label`
                  ) {
                    return null;
                  }
                  return (
                    <div
                      key={index}
                      className="rounded-2xl border border-[var(--azul-suave)] bg-[var(--white)] px-4 py-3 shadow-[0_14px_24px_rgba(40,134,100,0.06)]"
                    >
                      <p className="text-2xl font-semibold text-[var(--verde-bud)]">{value}</p>
                      <p className="text-[0.62rem] uppercase tracking-[0.16em] text-[var(--text-muted)]">{label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsorship;
