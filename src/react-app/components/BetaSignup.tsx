import { useState, type FC } from 'react';
import posthog from 'posthog-js';
import { supabase } from '../lib/supabaseClient';
import { t } from '../lib/i18n';

interface BetaSignupProps {
  background?: 'white' | 'gray';
}

const BetaSignup: FC<BetaSignupProps> = ({ background = 'gray' }) => {
  const [email, setEmail] = useState('');
  const [instagram, setInstagram] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const bgClass = background === 'white' ? 'bg-white' : 'bg-gray-50';

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('beta_signups')
        .insert([
          {
            email: email.trim(),
            instagram: instagram.trim() || null,
            created_at: new Date().toISOString(),
          }
        ]);

      if (error) throw error;

      // Track successful signup
      if (typeof posthog !== 'undefined') {
        posthog.capture('newsletter_signup_completed', {
          email,
          has_instagram: !!instagram,
          source: 'beta_section'
        });
      }

      // Show success message
      alert(t('betaSignup.successMessage'));
      setEmail('');
      setInstagram('');
    } catch (error) {
      console.error('Error:', error);
      alert(t('betaSignup.errorMessage'));

      if (typeof posthog !== 'undefined') {
        posthog.capture('newsletter_signup_error', {
          error: error instanceof Error ? error.message : 'Unknown error',
          source: 'beta_section'
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="beta" className={`py-20 cta-organic organic-background ${bgClass}`}>
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Title and Subtitle */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('betaSignup.title')}
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            {t('betaSignup.subtitle')}
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Left Column: What We Expect */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              {t('betaSignup.whatWeExpect.title')}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">{t('betaSignup.whatWeExpect.useApp')}</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">{t('betaSignup.whatWeExpect.survey')}</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">{t('betaSignup.whatWeExpect.call')}</span>
              </li>
            </ul>
          </div>

          {/* Right Column: What You Get */}
          <div className="bg-gradient-to-br from-[#D5C0FD]/30 to-[#ECFDF5]/40 rounded-2xl p-8 shadow-lg border-2 border-[#D5C0FD]/50">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <svg className="w-6 h-6 text-[#7c3aed]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
              {t('betaSignup.whatYouGet.title')}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#7c3aed] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-800 font-medium">{t('betaSignup.whatYouGet.earlyAccess')}</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#7c3aed] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-800 font-medium">{t('betaSignup.whatYouGet.premium')}</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#7c3aed] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-800 font-medium">{t('betaSignup.whatYouGet.support')}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={submit} className="max-w-lg mx-auto space-y-4">
          <input
            type="email"
            placeholder={t('betaSignup.emailPlaceholder')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            required
          />

          <input
            type="text"
            placeholder={t('betaSignup.instagramPlaceholder')}
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-primary py-3 px-6 disabled:opacity-50"
          >
            {isSubmitting ? 'Enviando...' : t('betaSignup.button')}
          </button>

          <p className="text-xs text-gray-500 text-center">
            {t('betaSignup.privacy')}
          </p>
        </form>
      </div>
    </section>
  );
};

export default BetaSignup;
