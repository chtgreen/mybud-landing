import { useState, useEffect, useRef, type FC } from 'react';
import { createPortal } from 'react-dom';
import posthog from 'posthog-js';
import { supabase } from '../lib/supabaseClient';
import { t } from '../lib/i18n';
import { trackFormSubmission, trackCTAClick, identifyUser } from '../lib/analytics';

interface BetaModalProps {
  open: boolean;
  onClose: () => void;
  remainingKits?: number;
  kitPrice?: number;
}

type SubmissionStatus = 'idle' | 'success' | 'error';

const SHOP_URL =
  'https://store.mybud.app/products/founder-kit-mybud-o-app-que-cresce-com-voce?variant=48038522585330&utm_source=lp&utm_medium=modal&utm_campaign=kit_bud';

const priorityBenefits = [
  'betaModal.priority.benefits.premium',
  'betaModal.priority.benefits.physicalKit',
  'betaModal.priority.benefits.immediateAccess',
  'betaModal.priority.benefits.priorityFeedback'
] as const;

const BetaModal: FC<BetaModalProps> = ({ open, onClose, remainingKits = 47, kitPrice = 249 }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<SubmissionStatus>('idle');
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      setFullName('');
      setEmail('');
      setStatus('idle');
      setIsSubmitting(false);
    }
  }, [open]);

  useEffect(() => {
    if (!open || typeof document === 'undefined') return;

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    if (!fullName) {
      nameInputRef.current?.focus({ preventScroll: true });
    } else {
      emailInputRef.current?.focus({ preventScroll: true });
    }
  }, [open, fullName]);

  const portalTarget = typeof document !== 'undefined' ? document.body : null;

  if (!open || !portalTarget) {
    return null;
  }

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedName = fullName.trim();
    const trimmedEmail = email.trim();
    if (!trimmedName || !trimmedEmail) return;

    setIsSubmitting(true);
    setStatus('idle');

    try {
      const { error } = await supabase.from('beta_signups').insert([
        {
          full_name: trimmedName,
          email: trimmedEmail,
          instagram: '',
          created_at: new Date().toISOString()
        }
      ]);

      if (error) throw error;

      // Track successful form submission with dual tracking
      trackFormSubmission('Beta Waitlist Signup', {
        full_name: trimmedName,
        email: trimmedEmail,
        source: 'beta_modal',
        channel: 'modal_free_access',
        conversion_type: 'beta_signup'
      }, true);

      // Identify user for future tracking
      identifyUser(trimmedEmail, {
        name: trimmedName,
        signup_source: 'beta_modal',
        signup_type: 'free_waitlist'
      });

      // Legacy PostHog tracking (can be removed later)
      if (typeof posthog !== 'undefined') {
        posthog.capture('free_waitlist_signup_completed', {
          full_name: trimmedName,
          email: trimmedEmail,
          source: 'beta_modal',
          channel: 'modal_free_access'
        });
      }

      setStatus('success');
      setFullName('');
      setEmail('');
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');

      // Track failed form submission
      trackFormSubmission('Beta Waitlist Signup', {
        error: error instanceof Error ? error.message : 'Unknown error',
        source: 'beta_modal',
        channel: 'modal_free_access'
      }, false);

      // Legacy PostHog tracking (can be removed later)
      if (typeof posthog !== 'undefined') {
        posthog.capture('free_waitlist_signup_error', {
          error: error instanceof Error ? error.message : 'Unknown error',
          source: 'beta_modal',
          channel: 'modal_free_access'
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePurchaseClick = () => {
    // Track priority access purchase click with dual tracking (REVENUE EVENT)
    trackCTAClick({
      ctaName: 'Priority Access Purchase',
      ctaLocation: 'Beta Modal - Priority Side',
      ctaType: 'button',
      ctaText: t('betaModal.priority.cta'),
      destinationUrl: SHOP_URL,
      customProperties: {
        source: 'beta_modal',
        choice: 'paid_priority',
        destination: 'shopify',
        value: kitPrice,
        currency: 'BRL',
        conversion_type: 'purchase_click',
        revenue_event: true,
        product: 'Founder Kit',
        kit_price: kitPrice,
        remainingKits: remainingKits
      }
    });
    
    // Legacy PostHog tracking (can be removed later)
    if (typeof posthog !== 'undefined') {
      posthog.capture('priority_access_clicked', {
        source: 'beta_modal',
        choice: 'paid_priority',
        destination: 'shopify'
      });
    }
    
    window.open(SHOP_URL, '_blank', 'noopener,noreferrer');
  };

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999] p-4"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="beta-modal-title"
    >
      <div
        className="relative bg-white rounded-[24px] border border-[#E6E7E8] shadow-[0_32px_60px_rgba(15,61,34,0.15)] max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label={t('betaModal.close')}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="px-6 pt-6 pb-4 space-y-3">
          <div className="text-sm font-medium text-gray-600">
            {t('betaModal.progress.label')}
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-[#288664]" style={{ width: '78%' }} />
          </div>
          <p className="text-xs text-gray-500">
            {t('betaModal.progress.eta')}
          </p>
        </div>

        <div className="px-6 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-2 border-[#288664] rounded-3xl p-6 md:p-8 flex flex-col gap-6">
              <div className="space-y-4">
                <span className="inline-flex items-center rounded-full bg-[#288664] text-white text-xs font-semibold uppercase tracking-wide px-3 py-1">
                  {t('betaModal.priority.chip')}
                </span>
                <div>
                  <h2 id="beta-modal-title" className="text-2xl font-semibold text-gray-900">
                    {t('betaModal.priority.title')}
                  </h2>
                  <p className="text-sm text-gray-600 mt-2">
                    {t('betaModal.priority.description')}
                  </p>
                </div>
                <div className="text-3xl font-semibold text-gray-900">
                  {t('betaModal.priority.price').replace('{price}', kitPrice.toString())}
                </div>
                <ul className="space-y-3 text-sm text-gray-700">
                  {priorityBenefits.map((benefitKey) => (
                    <li
                      key={benefitKey}
                      className="flex items-start gap-3 leading-relaxed"
                    >
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#288664]/10 text-[#288664] mt-0.5">
                        <svg
                          className="w-3 h-3"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-7.071 7.071a1 1 0 01-1.414 0L3.293 8.85a1 1 0 011.414-1.414l3.222 3.222 6.364-6.364a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span>{t(benefitKey)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <button
                  type="button"
                  onClick={handlePurchaseClick}
                  className="w-full inline-flex items-center justify-center rounded-full bg-[#EB4C80] hover:bg-[#288664] text-white font-semibold text-sm py-3 transition-colors"
                >
                  {t('betaModal.priority.cta')}
                </button>
                <div className="text-xs text-gray-600">
                  <div>{t('betaModal.priority.counter').replace('{count}', remainingKits.toString())}</div>
                  <div className="text-gray-500 mt-1">
                    {t('betaModal.priority.microcopy')}
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-[#E6E7E8] rounded-3xl p-6 md:p-8 flex flex-col gap-6">
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {t('betaModal.free.title')}
                </h3>
                <p className="text-sm text-gray-600">
                  {t('betaModal.free.description')}
                </p>
              </div>

              <form onSubmit={submit} className="space-y-4">
                <label htmlFor="beta-modal-name" className="sr-only">
                  {t('betaModal.free.form.nameLabel')}
                </label>
                <input
                  id="beta-modal-name"
                  type="text"
                  required
                  value={fullName}
                  ref={nameInputRef}
                  onChange={(event) => {
                    if (status !== 'idle') {
                      setStatus('idle');
                    }
                    setFullName(event.target.value);
                  }}
                  autoComplete="name"
                  placeholder={t('betaModal.free.form.namePlaceholder')}
                  className="w-full rounded-full border border-[#E6E7E8] bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-[#288664] focus:outline-none focus:ring-2 focus:ring-[#288664]/30 transition"
                />
                <label htmlFor="beta-modal-email" className="sr-only">
                  {t('betaModal.free.form.label')}
                </label>
                <input
                  id="beta-modal-email"
                  type="email"
                  required
                  value={email}
                  ref={emailInputRef}
                  onChange={(event) => {
                    if (status !== 'idle') {
                      setStatus('idle');
                    }
                    setEmail(event.target.value);
                  }}
                  autoComplete="email"
                  placeholder={t('betaModal.free.form.placeholder')}
                  className="w-full rounded-full border border-[#E6E7E8] bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-[#288664] focus:outline-none focus:ring-2 focus:ring-[#288664]/30 transition"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center rounded-full border border-[#E6E7E8] bg-white text-[#288664] font-semibold text-sm py-3 transition-colors hover:bg-[#288664]/5 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting
                    ? t('betaModal.free.form.loading')
                    : t('betaModal.free.form.cta')}
                </button>
                <p className="text-xs text-gray-500">
                  {t('betaModal.free.form.microcopy')}
                </p>
                {status === 'success' && (
                  <p className="text-xs font-medium text-[#288664]">
                    {t('betaModal.free.form.success')}
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-xs font-medium text-red-500">
                    {t('betaModal.free.form.error')}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>,
    portalTarget
  );
};

export default BetaModal;
