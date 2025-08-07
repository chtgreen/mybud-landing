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
    <section id="beta-form" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 
            className="text-2xl md:text-3xl font-medium mb-6"
            style={{ color: 'var(--text-zinc-800)' }}
          >
            {t('betaSignup.title')}
          </h2>
          <p 
            className="text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: 'var(--text-zinc-600)' }}
          >
            {t('betaSignup.subtitle')}
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="card p-6">
            <form onSubmit={submit} className="space-y-4" id="beta-form-submit">
              <div>
                <input
                  type="email"
                  id="beta-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('betaSignup.emailPlaceholder')}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg border transition"
                  style={{
                    borderColor: 'var(--border-zinc-200)',
                    background: 'var(--bg-white)',
                    color: 'var(--text-zinc-800)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--emerald-600)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-zinc-200)'}
                />
              </div>

              <div>
                <input
                  type="text"
                  id="beta-instagram"
                  value={instagram}
                  onChange={(e) => setInstagram(e.target.value)}
                  placeholder={t('betaSignup.instagramPlaceholder')}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg border transition"
                  style={{
                    borderColor: 'var(--border-zinc-200)',
                    background: 'var(--bg-white)',
                    color: 'var(--text-zinc-800)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--emerald-600)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-zinc-200)'}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary mt-6 text-lg py-4"
              >
                {isSubmitting ? '...' : t('betaSignup.button')}
              </button>
            </form>

            <div className="mt-6 text-center">
              <a
                href="#"
                className="text-emerald text-sm font-medium"
              >
                {t('betaSignup.vipLink')}
              </a>
              <p
                className="text-xs mt-4"
                style={{ color: 'var(--text-slate-500)' }}
              >
                {t('betaSignup.privacy')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BetaSignup;