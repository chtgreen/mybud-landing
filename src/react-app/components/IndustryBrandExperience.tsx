import { useState, useEffect, type FC, type ChangeEvent, type FormEvent } from 'react';
import { t } from '../lib/i18n';
import { supabase } from '../lib/supabaseClient';

const CALENDAR_URL =
  'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0ET0xwuXrN7fWcxlAbExovzk9knxYjbbu13DLw2MwBrgMnyi1HQ51BM50cp717q98-Tf9qdY0c';

type Step = 'demo' | 'form-brand' | 'form-email' | 'loading' | 'result';
type DemoView = 'tasks' | 'calculator';

interface FormData {
  brandName: string;
  email: string;
}

interface IndustryBrandExperienceProps {
  onCTAClick: () => void;
}

const initialForm: FormData = {
  brandName: '',
  email: '',
};

// ── Phone frame mock screen ──────────────────────────────────────────────────

const PhoneFrame: FC<{ brandName: string; view?: DemoView }> = ({ brandName, view = 'tasks' }) => {
  const displayBrand = brandName || 'MyBud Fert';

  return (
    <div className="w-[280px] h-[540px] rounded-[48px] border-[6px] border-zinc-800 bg-zinc-950 relative overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.8)] flex-shrink-0 animate-in fade-in zoom-in-95 duration-1000">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[110px] h-[30px] bg-zinc-950 rounded-b-[20px] z-20 border-[2px] border-zinc-800 border-t-0" />

      {/* Screen content */}
      <div className="absolute inset-0 bg-zinc-950 flex flex-col pt-9">
        {/* App header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-zinc-900 bg-zinc-950/50 backdrop-blur-md sticky top-0 z-10">
          <span className="text-[17px] font-black text-emerald-500 tracking-tight">MyBud</span>
          <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
            {t('industry.experience.result.appHeader')}
          </span>
        </div>

        {/* Dynamic Content Area */}
        <div className="flex-1 overflow-y-auto scrollbar-none pb-10">
          {view === 'tasks' ? (
            <div className="p-4 space-y-3">
              <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest mb-3 px-1">
                {t('industry.experience.result.tasksSection')}
              </p>

              {/* Task 1 — highlighted */}
              <div className="bg-emerald-500/10 border-2 border-emerald-500/30 rounded-2xl p-4 shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-12 h-12 bg-emerald-500/20 rounded-bl-full" />
                <div className="flex items-start gap-3 relative z-10">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-[13px] font-extrabold text-white truncate">
                        {displayBrand} {t('industry.experience.result.productGrowA')}
                      </p>
                      <span className="text-emerald-500 font-black text-sm">✓</span>
                    </div>
                    <p className="text-[11px] text-emerald-400 font-bold">
                      {t('industry.experience.result.dose1')}
                    </p>
                    <div className="mt-3 inline-block px-2 py-0.5 rounded bg-emerald-500/20 border border-emerald-500/30">
                      <p className="text-[9px] text-emerald-300 font-black uppercase tracking-widest">
                        {t('industry.experience.result.phTarget')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Task 2 */}
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-4 opacity-50">
                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700 mt-1.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-[12px] font-bold text-zinc-400 truncate">
                      {displayBrand} {t('industry.experience.result.productCalMag')}
                    </p>
                    <p className="text-[11px] text-zinc-600 font-bold mt-1">
                      {t('industry.experience.result.dose2')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Schedule Preview */}
              <div className="mt-6 pt-5 border-t border-zinc-900 space-y-3">
                <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest px-1">
                  {t('industry.experience.result.scheduleSection')}
                </p>
                <div className="flex items-center gap-3 px-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <p className="text-[11px] text-emerald-400 font-black uppercase tracking-widest">Veg Semana 3</p>
                </div>
              </div>
            </div>
          ) : (
            /* CALCULATOR VIEW */
            <div className="p-5 space-y-6">
              <div className="space-y-2">
                <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">Calculadora</p>
                <h4 className="text-lg font-black text-white leading-tight">Dosagem Exata</h4>
              </div>

              <div className="space-y-4">
                <div className="bg-zinc-900 rounded-2xl p-4 border border-zinc-800">
                  <p className="text-[10px] font-bold text-zinc-500 uppercase mb-3">Tamanho do Tanque</p>
                  <div className="flex items-end gap-2">
                    <span className="text-3xl font-black text-emerald-500">10</span>
                    <span className="text-lg font-bold text-zinc-400 mb-1">Litros</span>
                  </div>
                </div>

                <div className="bg-zinc-900 rounded-2xl p-4 border border-zinc-800">
                  <p className="text-[10px] font-bold text-zinc-500 uppercase mb-3">Resultado</p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-zinc-300">{displayBrand} Grow A</span>
                      <span className="text-sm font-black text-emerald-400">20ml</span>
                    </div>
                    <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                      <div className="w-3/4 h-full bg-emerald-500" />
                    </div>
                  </div>
                </div>
              </div>

              <button className="w-full py-4 rounded-2xl bg-emerald-500 text-zinc-950 font-black text-sm uppercase tracking-widest shadow-[0_8px_16px_rgba(16,185,129,0.3)]">
                Aplicar Rega
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ── Step components ──────────────────────────────────────────────────────────

const StepWrapper: FC<{ children: React.ReactNode; showPhone?: boolean; brandName?: string; view?: DemoView }> = ({ children, showPhone, brandName, view }) => (
  <div className="flex flex-col items-center gap-12 w-full animate-in fade-in slide-in-from-bottom-8 duration-700">
    {showPhone && (
      <div className="relative group">
        <div className="absolute -inset-4 bg-emerald-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        <PhoneFrame brandName={brandName || ''} view={view} />
      </div>
    )}
    <div className="w-full max-w-sm">
      {children}
    </div>
  </div>
);

const StepHeadline: FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
  <div className="text-center mb-8 px-4">
    <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3 tracking-tight leading-tight">
      {title}
    </h3>
    {subtitle && (
      <p className="text-zinc-400 text-base font-medium">
        {subtitle}
      </p>
    )}
  </div>
);

// ── Main component ───────────────────────────────────────────────────────────

const IndustryBrandExperience: FC<IndustryBrandExperienceProps> = ({ onCTAClick }) => {
  const [step, setStep] = useState<Step>('demo');
  const [demoView, setDemoView] = useState<DemoView>('tasks');
  const [form, setForm] = useState<FormData>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [visibleLoadingSteps, setVisibleLoadingSteps] = useState(0);

  useEffect(() => {
    if (step === 'demo') {
      const interval = setInterval(() => {
        setDemoView(prev => prev === 'tasks' ? 'calculator' : 'tasks');
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [step]);

  // Handle input changes
  const handleChange = (field: keyof FormData) => (e: ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [field]: e.target.value }));
  };

  // Step 1 -> Step 2
  const handleNextToEmail = (e: FormEvent) => {
    e.preventDefault();
    if (form.brandName.trim()) {
      setStep('form-email');
    }
  };

  // Final submit
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const brandName = form.brandName.trim();
    const email = form.email.trim();

    if (!brandName || !email) return;

    setIsSubmitting(true);
    setStep('loading');

    // Fire-and-forget Supabase save
    supabase
      .from('industry_leads')
      .insert([
        {
          brand_name: brandName,
          email,
          created_at: new Date().toISOString(),
        },
      ])
      .then(({ error }) => {
        if (error) console.error('Failed to save industry lead:', error);
      });

    // Handle loading animation
    const timers: ReturnType<typeof setTimeout>[] = [];
    timers.push(setTimeout(() => setVisibleLoadingSteps(1), 500));
    timers.push(setTimeout(() => setVisibleLoadingSteps(2), 1000));
    timers.push(setTimeout(() => setVisibleLoadingSteps(3), 1500));
    timers.push(setTimeout(() => {
      setStep('result');
      setIsSubmitting(false);
    }, 2200));

    return () => timers.forEach(clearTimeout);
  };

  return (
    <section id="brand-experience" className="py-24 md:py-32 bg-zinc-900 overflow-hidden relative">
      {/* Background patterns - lightened */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.02)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(16,185,129,0.02)_1.5px,transparent_1.5px)] bg-[size:40px_40px]" />
      <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* STEP 0: Immediate Demo */}
        {step === 'demo' && (
          <div className="flex flex-col items-center gap-16 w-full animate-in fade-in duration-1000">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="absolute -inset-10 bg-emerald-500/5 blur-[100px] rounded-full opacity-40" />
                <PhoneFrame brandName="" view={demoView} />
              </div>

              <div className="order-1 lg:order-2 space-y-8 text-center lg:text-left">
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-5xl font-black text-white leading-[1.1] tracking-tighter">
                    {t('industry.experience.headline')}
                  </h2>
                  <p className="text-lg text-zinc-400 font-bold leading-relaxed">
                    {t('industry.experience.sub')}
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <button
                    onClick={() => setStep('form-brand')}
                    className="w-full py-5 rounded-2xl bg-emerald-500 text-zinc-950 font-black text-lg hover:bg-emerald-400 shadow-[0_15px_30px_rgba(16,185,129,0.3)] hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    Ver minha marca
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                  <button
                    onClick={onCTAClick}
                    className="w-full py-4 text-zinc-500 font-bold hover:text-zinc-300 transition-colors"
                  >
                    {t('industry.hero.secondaryCta')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 1: Brand Name */}
        {step === 'form-brand' && (
          <StepWrapper showPhone brandName={form.brandName} view="tasks">
            <StepHeadline title={t('industry.experience.form.step1Headline')} />
            <form onSubmit={handleNextToEmail} className="space-y-4">
              <input
                autoFocus
                type="text"
                value={form.brandName}
                onChange={handleChange('brandName')}
                placeholder={t('industry.experience.form.brandName')}
                required
                className="w-full px-6 py-5 bg-zinc-900 border-2 border-zinc-800 focus:border-emerald-500/50 rounded-2xl text-white text-lg font-medium placeholder-zinc-600 focus:outline-none transition-all"
              />
              <button
                type="submit"
                className="w-full py-5 rounded-2xl bg-emerald-500 text-white font-extrabold text-lg hover:bg-emerald-400 shadow-xl shadow-emerald-500/10 transition-all flex items-center justify-center gap-2"
              >
                {t('industry.experience.form.nextStep')}
              </button>
            </form>
          </StepWrapper>
        )}

        {/* STEP 2: Email */}
        {step === 'form-email' && (
          <StepWrapper showPhone brandName={form.brandName} view="tasks">
            <StepHeadline title={t('industry.experience.form.step2Headline')} />
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                autoFocus
                type="email"
                value={form.email}
                onChange={handleChange('email')}
                placeholder={t('industry.experience.form.email')}
                required
                className="w-full px-6 py-5 bg-zinc-900 border-2 border-emerald-500/30 focus:border-emerald-500 rounded-2xl text-white text-lg font-medium placeholder-zinc-600 focus:outline-none transition-all"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 rounded-2xl bg-emerald-500 text-white font-extrabold text-lg hover:bg-emerald-400 shadow-xl shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {t('industry.experience.form.cta')}
              </button>
              <button
                type="button"
                onClick={() => setStep('form-brand')}
                className="w-full py-2 text-zinc-500 text-sm font-bold hover:text-zinc-300 transition-colors"
              >
                ← {t('industry.experience.form.brandName')}: {form.brandName}
              </button>
            </form>
          </StepWrapper>
        )}

        {/* STEP 3: Loading */}
        {step === 'loading' && (
          <div className="flex flex-col items-center justify-center py-20 animate-in fade-in duration-500">
            <div className="w-16 h-16 border-4 border-zinc-800 border-t-emerald-500 rounded-full animate-spin mb-10" />
            <h3 className="text-2xl font-bold text-white mb-10 text-center">
              {t('industry.experience.loading.headline')}
            </h3>
            <div className="space-y-4 w-full max-w-xs">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 transition-all duration-500 ${visibleLoadingSteps >= i ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-zinc-300 font-medium">{t(`industry.experience.loading.step${i}`)}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 4: Result */}
        {step === 'result' && (
          <div className="flex flex-col items-center animate-in fade-in scale-95 duration-700">
            <div className="text-center mb-12 max-w-2xl px-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-bold mb-6">
                ✨ {t('industry.experience.result.message')}
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
                {t('industry.experience.result.subMessage')}
              </h2>
            </div>

            <div className="relative group mb-16">
              <div className="absolute -inset-10 bg-emerald-500/20 blur-[100px] rounded-full animate-pulse" />
              <PhoneFrame brandName={form.brandName} view="tasks" />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
              <button
                onClick={() => window.open(CALENDAR_URL, '_blank')}
                className="flex-1 py-5 rounded-2xl bg-emerald-500 text-white font-extrabold text-lg hover:bg-emerald-400 shadow-xl shadow-emerald-500/25 transition-all hover:-translate-y-1 active:translate-y-0"
              >
                {t('industry.experience.result.primaryCta')}
              </button>
              <button
                onClick={onCTAClick}
                className="flex-1 py-5 rounded-2xl bg-zinc-900 border-2 border-zinc-800 text-white font-bold text-lg hover:bg-zinc-800 transition-all hover:-translate-y-1 active:translate-y-0"
              >
                {t('industry.experience.result.secondaryCta')}
              </button>
            </div>

            <p className="mt-8 text-zinc-500 font-medium text-sm">
              {t('industry.experience.result.fullAppCta')}
            </p>
          </div>
        )}

      </div>
    </section>
  );
};

export default IndustryBrandExperience;
