import { useState, type FC } from 'react';
import posthog from 'posthog-js';
import { supabase } from '../lib/supabaseClient';

interface BetaSignupProps {
  title: string;
  subtitle: string;
  placeholder: string;
  button: string;
  currentLanguage?: string;
}

const BetaSignup: FC<BetaSignupProps> = ({
  title,
  subtitle,
  placeholder,
  button,
  currentLanguage = 'pt'
}) => {
  const [email, setEmail] = useState('');
  const [instagram, setInstagram] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const texts = {
    pt: {
      title: 'garanta seu acesso à beta e receba atualizações exclusivas',
      subtitle: 'junte-se à primeira onda de growers que estão moldando o futuro do cultivo. você terá acesso antecipado, vantagens exclusivas e nossa eterna gratidão.',
      emailPlaceholder: 'seu melhor email',
      instagramPlaceholder: '@seu_instagram (opcional, para VIPs)',
      button: 'quero testar o app',
      vipLink: 'não quer testar? entrar na lista vip para novidades',
      privacy: 'apenas dicas boas. nada de spam. respeitamos sua privacidade.',
      successMessage: 'Obrigado! Você está na lista da beta. 🌱',
      errorMessage: 'algo deu errado. tente novamente.'
    },
    en: {
      title: 'Secure your beta access and get exclusive updates',
      subtitle: 'Join the first wave of growers shaping the future of cultivation. You\'ll get early access, exclusive perks, and our eternal gratitude.',
      emailPlaceholder: 'Your best email',
      instagramPlaceholder: '@your_instagram (optional, for VIPs)',
      button: 'I want to test the app',
      vipLink: 'Don\'t want to test? Join the VIP list for news',
      privacy: 'Only good tips. No spam. We respect your privacy.',
      successMessage: 'Thank you! You\'re on the beta list. 🌱',
      errorMessage: 'Something went wrong. Please try again.'
    },
    es: {
      title: 'Asegura tu acceso beta y recibe actualizaciones exclusivas',
      subtitle: 'Únete a la primera ola de cultivadores que están moldeando el futuro del cultivo. Tendrás acceso anticipado, ventajas exclusivas y nuestra eterna gratitud.',
      emailPlaceholder: 'Tu mejor email',
      instagramPlaceholder: '@tu_instagram (opcional, para VIPs)',
      button: 'Quiero probar la app',
      vipLink: '¿No quieres probar? Únete a la lista VIP para noticias',
      privacy: 'Solo buenos consejos. Nada de spam. Respetamos tu privacidad.',
      successMessage: '¡Gracias! Estás en la lista beta. 🌱',
      errorMessage: 'Algo salió mal. Inténtalo de nuevo.'
    }
  };

  const t = texts[currentLanguage as keyof typeof texts] || texts.pt;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.from('leads').insert({ 
      email,
      instagram: instagram || null
    });
    
    if (error) {
      setStatus('error');
    } else {
      setStatus('success');
      posthog.capture('beta_signup', { 
        email: !!email,
        instagram: !!instagram,
        language: currentLanguage
      });
      setEmail('');
      setInstagram('');
      
      // Show alert like in template
      alert(t.successMessage);
      setStatus('idle');
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
            {t.title}
          </h2>
          <p
            className="text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: 'var(--text-zinc-600)' }}
          >
            {t.subtitle}
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <div className="card p-6">
            <form onSubmit={submit} className="space-y-4">
              <div>
                <input
                  type="email"
                  id="beta-email"
                  placeholder={t.emailPlaceholder}
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border transition input-focus"
                  style={{
                    borderColor: 'var(--border-zinc-200)',
                    background: 'var(--bg-white)',
                    color: 'var(--text-zinc-800)',
                  }}
                />
              </div>

              <div>
                <input
                  type="text"
                  id="beta-instagram"
                  placeholder={t.instagramPlaceholder}
                  value={instagram}
                  onChange={(e) => setInstagram(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border transition input-focus"
                  style={{
                    borderColor: 'var(--border-zinc-200)',
                    background: 'var(--bg-white)',
                    color: 'var(--text-zinc-800)',
                  }}
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary mt-6 text-lg py-4"
                disabled={status === 'success'}
              >
                {t.button}
              </button>
            </form>

            <div className="mt-6 text-center">
              <a
                href="#"
                className="text-emerald text-sm font-medium"
                style={{ color: 'var(--emerald-600)' }}
              >
                {t.vipLink}
              </a>
              <p
                className="text-xs mt-4"
                style={{ color: 'var(--text-slate-500)' }}
              >
                {t.privacy}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BetaSignup;
