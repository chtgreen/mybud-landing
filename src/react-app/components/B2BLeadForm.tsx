import { useState, useEffect, type FC, type ChangeEvent } from 'react';
import posthog from 'posthog-js';
import { t } from '../lib/i18n';
import { supabase } from '../lib/supabaseClient';
import { BarChart3, Mail } from './icons';
import { trackFormSubmission, identifyUser, trackButtonClick } from '../lib/analytics';

interface B2BLeadFormProps {
  background?: 'white' | 'gray';
}

interface LeadPayload {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

const TABLE_NAME = 'b2b_leads';

const initialState: LeadPayload = {
  name: '',
  email: '',
  phone: '',
  company: '',
  message: '',
};

const emailFallback = () => {
  const contactEmail = t('finalCta.email');
  if (contactEmail && contactEmail !== 'finalCta.email') {
    // Track email fallback click
    trackButtonClick('Email Fallback', 'B2B Lead Form', {
      action: 'mailto_click',
      email: contactEmail
    });
    window.location.href = `mailto:${contactEmail}`;
  }
};

const B2BLeadForm: FC<B2BLeadFormProps> = ({ background = 'gray' }) => {
  const [form, setForm] = useState<LeadPayload>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [validationError, setValidationError] = useState('');

  const bgClass = background === 'white' ? 'bg-white' : 'bg-gray-50';

  // Check if user has already submitted
  useEffect(() => {
    const submitted = localStorage.getItem('mybud_b2b_lead_submitted');
    if (submitted === 'true') {
      setHasSubmitted(true);
    }
  }, []);

  const handleChange = (field: keyof LeadPayload) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [field]: event.target.value }));
    // Clear validation error when user starts typing
    if (validationError) {
      setValidationError('');
    }
  };

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim();
    const phone = form.phone.trim();
    const company = form.company.trim();
    const message = form.message.trim();

    if (!name || !email || !phone || !company) {
      setValidationError(t('finalCta.errorMessage'));
      return;
    }

    setIsSubmitting(true);
    setValidationError('');

    try {
      const { error } = await supabase
        .from(TABLE_NAME)
        .insert([
          {
            name,
            email,
            phone,
            company,
            message: message || null,
            source: 'landing',
            created_at: new Date().toISOString(),
          },
        ]);

      if (error) throw error;

      // Track successful B2B lead submission with dual tracking (HIGH-VALUE CONVERSION)
      trackFormSubmission('B2B Lead Form', {
        email,
        phone,
        company,
        name,
        has_message: Boolean(message),
        source: 'landing_final_cta',
        conversion_type: 'b2b_lead',
        form_type: 'b2b_partnership'
      }, true);

      // Identify B2B lead for future tracking
      identifyUser(email, {
        name,
        phone,
        company,
        lead_type: 'b2b',
        lead_source: 'landing_page_form'
      });

      // Legacy PostHog tracking (can be removed later)
      if (typeof posthog !== 'undefined') {
        posthog.capture('b2b_lead_submitted', {
          email,
          phone,
          company,
          has_message: Boolean(message),
          source: 'landing_final_cta',
        });
      }

      // Save to localStorage to prevent duplicate submissions
      localStorage.setItem('mybud_b2b_lead_submitted', 'true');
      setHasSubmitted(true);
      setForm(initialState);
    } catch (error) {
      console.error('Failed to submit B2B lead', error);
      setValidationError(t('finalCta.errorMessage'));

      // Track failed B2B lead submission
      trackFormSubmission('B2B Lead Form', {
        error: error instanceof Error ? error.message : 'Unknown error',
        source: 'landing_final_cta',
        attempted_company: form.company,
        form_type: 'b2b_partnership'
      }, false);

      // Legacy PostHog tracking (can be removed later)
      if (typeof posthog !== 'undefined') {
        posthog.capture('b2b_lead_error', {
          error: error instanceof Error ? error.message : 'Unknown error',
          source: 'landing_final_cta',
        });
      }

      emailFallback();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={`py-20 organic-background ${bgClass}`}>
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('finalCta.title')}
          </h2>
          {t('finalCta.subtitle') !== 'finalCta.subtitle' && (
            <p className="text-lg text-gray-700 mb-4">
              {t('finalCta.subtitle')}
            </p>
          )}
          <p className="text-base text-gray-600">
            {t('finalCta.description')}
          </p>
        </div>

        {hasSubmitted ? (
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 border-2 border-emerald-500 rounded-2xl p-8 md:p-12 shadow-xl text-center">
              <svg className="w-20 h-20 text-emerald-600 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {t('finalCta.successTitle') !== 'finalCta.successTitle' ? t('finalCta.successTitle') : 'Obrigado pelo seu interesse!'}
              </h3>
              <p className="text-lg text-gray-700 mb-3">
                {t('finalCta.successMessage')}
              </p>
              <p className="text-base text-gray-600">
                {t('finalCta.successSubtext') !== 'finalCta.successSubtext' ? t('finalCta.successSubtext') : 'Nossa equipe entrará em contato em breve para discutir como podemos ajudar seu negócio.'}
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={submit} className="max-w-2xl mx-auto space-y-5 bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
          <div className="grid md:grid-cols-2 gap-5">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-2" htmlFor="b2b-name">
                {t('finalCta.form.namePlaceholder')}
              </label>
              <input
                id="b2b-name"
                type="text"
                value={form.name}
                onChange={handleChange('name')}
                placeholder={t('finalCta.form.namePlaceholder')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-2" htmlFor="b2b-email">
                {t('finalCta.form.emailPlaceholder')}
              </label>
              <input
                id="b2b-email"
                type="email"
                value={form.email}
                onChange={handleChange('email')}
                placeholder={t('finalCta.form.emailPlaceholder')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-2" htmlFor="b2b-phone">
                {t('finalCta.form.phonePlaceholder')}
              </label>
              <input
                id="b2b-phone"
                type="tel"
                value={form.phone}
                onChange={handleChange('phone')}
                placeholder={t('finalCta.form.phonePlaceholder')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-2" htmlFor="b2b-company">
                {t('finalCta.form.companyPlaceholder')}
              </label>
              <input
                id="b2b-company"
                type="text"
                value={form.company}
                onChange={handleChange('company')}
                placeholder={t('finalCta.form.companyPlaceholder')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                required
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-2" htmlFor="b2b-message">
              {t('modal.fields.objective')}
            </label>
            <textarea
              id="b2b-message"
              value={form.message}
              onChange={handleChange('message')}
              placeholder={t('modal.subtitle')}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 resize-none"
            />
          </div>

          {validationError && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
              {validationError}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-primary py-3 px-6 text-lg font-semibold disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              'Enviando...'
            ) : (
              <>
                <BarChart3 className="w-5 h-5" />
                {t('finalCta.primaryButton')}
              </>
            )}
          </button>

          <div className="text-center text-sm text-gray-600">
            <p>{t('finalCta.secondaryOption')}</p>
            <button
              type="button"
              onClick={emailFallback}
              className="font-semibold text-emerald-700 hover:text-emerald-600 transition-colors inline-flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              {t('finalCta.email')}
            </button>
          </div>
        </form>
        )}
      </div>
    </section>
  );
};

export default B2BLeadForm;
