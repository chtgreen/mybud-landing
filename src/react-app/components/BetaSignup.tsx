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
    <section className={`py-20 cta-organic organic-background ${bgClass}`}>
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('betaSignup.newsletterTitle')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('betaSignup.newsletterDesc')}
          </p>
        </div>

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