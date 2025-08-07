import { useState, type FC } from 'react';
import posthog from 'posthog-js';
import { supabase } from '../lib/supabaseClient';
import { t } from '../lib/i18n';

const BetaSignup: FC = () => {
  const [email, setEmail] = useState('');
  const [instagram, setInstagram] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || isSubmitting) return;
    
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('beta_signups')
        .insert([
          {
            email,
            instagram: instagram || null,
            source: 'landing_page'
          }
        ]);

      if (error) throw error;

      // Track successful signup
      if (typeof posthog !== 'undefined') {
        posthog.capture('beta_signup_completed', {
          email,
          has_instagram: !!instagram,
        });
      }

      // Show success message
      alert(t('betaSignup.successMessage'));
      
      // Reset form
      setEmail('');
      setInstagram('');
      
    } catch (error) {
      console.error('Error:', error);
      alert(t('betaSignup.errorMessage'));
      
      if (typeof posthog !== 'undefined') {
        posthog.capture('beta_signup_error', {
          error: error.message,
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="beta-form" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-medium mb-6 text-zinc-800">
            {t('betaSignup.title')}
          </h2>
          <p className="text-lg leading-relaxed text-zinc-600 max-w-2xl mx-auto">
            {t('betaSignup.subtitle')}
          </p>
        </div>

        <form onSubmit={submit} className="max-w-md mx-auto">
          <div className="space-y-4 mb-6">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('betaSignup.emailPlaceholder')}
              required
              disabled={isSubmitting}
              className="input-focus w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-emerald-400 focus:ring-0 text-zinc-800 placeholder-zinc-400 transition-colors"
            />
            
            <input
              type="text"
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
              placeholder={t('betaSignup.instagramPlaceholder')}
              disabled={isSubmitting}
              className="input-focus w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-emerald-400 focus:ring-0 text-zinc-800 placeholder-zinc-400 transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="cta-button w-full px-8 py-4 text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? '...' : t('betaSignup.button')}
          </button>

          <div className="text-center mt-6">
            <a
              href="#"
              className="text-sm text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              {t('betaSignup.vipLink')}
            </a>
          </div>

          <p className="text-xs text-zinc-500 text-center mt-4">
            {t('betaSignup.privacy')}
          </p>
        </form>
      </div>
    </section>
  );
};

export default BetaSignup;