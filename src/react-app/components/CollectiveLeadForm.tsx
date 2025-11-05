import { useState, useEffect, type FC, type ChangeEvent } from 'react';
import posthog from 'posthog-js';
import { t } from '../lib/i18n';
import { supabase } from '../lib/supabaseClient';
import { Mail, Rocket } from './icons';
import { trackFormSubmission, identifyUser, trackButtonClick } from '../lib/analytics';

interface CollectiveLeadFormProps {
  background?: 'white' | 'gray';
}

interface CollectiveLeadPayload {
  organization_name: string;
  whatsapp: string;
  email: string;
  plant_count: string;
}

const TABLE_NAME = 'collective_leads';

const initialState: CollectiveLeadPayload = {
  organization_name: '',
  whatsapp: '',
  email: '',
  plant_count: '',
};

const emailFallback = () => {
  const contactEmail = 'comercial@mybud.app';
  trackButtonClick('Email Fallback', 'Collective Lead Form', {
    action: 'mailto_click',
    email: contactEmail
  });
  window.location.href = `mailto:${contactEmail}`;
};

const CollectiveLeadForm: FC<CollectiveLeadFormProps> = ({ background = 'white' }) => {
  const [form, setForm] = useState<CollectiveLeadPayload>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const bgClass = background === 'white' ? 'bg-white' : 'bg-gray-50';

  // Check if user has already submitted
  useEffect(() => {
    const submitted = localStorage.getItem('mybud_collective_lead_submitted');
    if (submitted === 'true') {
      setHasSubmitted(true);
    }
  }, []);

  const handleChange = (field: keyof CollectiveLeadPayload) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [field]: event.target.value }));
  };

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();

    const organization_name = form.organization_name.trim();
    const whatsapp = form.whatsapp.trim();
    const email = form.email.trim();
    const plant_count = form.plant_count.trim();

    if (!organization_name || !whatsapp || !email || !plant_count) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from(TABLE_NAME)
        .insert([
          {
            organization_name,
            whatsapp,
            email,
            plant_count,
            source: 'collective_landing',
            created_at: new Date().toISOString(),
          },
        ]);

      if (error) throw error;

      // Track successful collective lead submission
      trackFormSubmission('Collective Lead Form', {
        email,
        organization_name,
        whatsapp,
        plant_count,
        source: 'collective_final_cta',
        conversion_type: 'collective_pilot_lead',
        form_type: 'collective_pilot'
      }, true);

      // Identify collective lead for future tracking
      identifyUser(email, {
        organization: organization_name,
        whatsapp,
        plant_count,
        lead_type: 'collective',
        lead_source: 'collective_landing_page_form'
      });

      // Legacy PostHog tracking
      if (typeof posthog !== 'undefined') {
        posthog.capture('collective_lead_submitted', {
          email,
          organization_name,
          whatsapp,
          plant_count,
          source: 'collective_final_cta',
        });
      }

      // Save to localStorage to prevent duplicate submissions
      localStorage.setItem('mybud_collective_lead_submitted', 'true');
      setHasSubmitted(true);
      setForm(initialState);
    } catch (error) {
      console.error('Failed to submit collective lead', error);
      alert('Algo deu errado. Tente novamente ou escreva para comercial@mybud.app');

      // Track failed submission
      trackFormSubmission('Collective Lead Form', {
        error: error instanceof Error ? error.message : 'Unknown error',
        source: 'collective_final_cta',
        attempted_organization: form.organization_name,
        form_type: 'collective_pilot'
      }, false);

      if (typeof posthog !== 'undefined') {
        posthog.capture('collective_lead_error', {
          error: error instanceof Error ? error.message : 'Unknown error',
          source: 'collective_final_cta',
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
            {t('collective.finalCta.title')}
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            {t('collective.finalCta.text')}
          </p>
        </div>

        {hasSubmitted ? (
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 border-2 border-emerald-500 rounded-2xl p-8 md:p-12 shadow-xl text-center">
              <svg className="w-20 h-20 text-emerald-600 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {t('collective.finalCta.successTitle')}
              </h3>
              <p className="text-lg text-gray-700 mb-3">
                {t('collective.finalCta.successMessage')}
              </p>
              <p className="text-base text-gray-600">
                {t('collective.finalCta.successSubtext')}
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={submit} className="max-w-2xl mx-auto space-y-5 bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-2" htmlFor="collective-org-name">
              {t('collective.finalCta.formFields.organizationName')}
            </label>
            <input
              id="collective-org-name"
              type="text"
              value={form.organization_name}
              onChange={handleChange('organization_name')}
              placeholder={t('collective.finalCta.formFields.organizationName')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-2" htmlFor="collective-whatsapp">
              {t('collective.finalCta.formFields.whatsapp')}
            </label>
            <input
              id="collective-whatsapp"
              type="tel"
              value={form.whatsapp}
              onChange={handleChange('whatsapp')}
              placeholder={t('collective.finalCta.formFields.whatsapp')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-2" htmlFor="collective-plant-count">
              {t('collective.finalCta.formFields.plantCount')}
            </label>
            <input
              id="collective-plant-count"
              type="text"
              value={form.plant_count}
              onChange={handleChange('plant_count')}
              placeholder={t('collective.finalCta.formFields.plantCount')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-2" htmlFor="collective-email">
              {t('collective.finalCta.formFields.email')}
            </label>
            <input
              id="collective-email"
              type="email"
              value={form.email}
              onChange={handleChange('email')}
              placeholder={t('collective.finalCta.formFields.email')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-primary py-3 px-6 text-lg font-semibold disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              'Enviando...'
            ) : (
              <>
                <Rocket className="w-5 h-5" />
                {t('collective.finalCta.formTitle')}
              </>
            )}
          </button>

          <div className="text-center text-sm text-gray-600">
            <p>Prefere falar direto?</p>
            <button
              type="button"
              onClick={emailFallback}
              className="font-semibold text-emerald-700 hover:text-emerald-600 transition-colors inline-flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              comercial@mybud.app
            </button>
          </div>
        </form>
        )}
      </div>
    </section>
  );
};

export default CollectiveLeadForm;

