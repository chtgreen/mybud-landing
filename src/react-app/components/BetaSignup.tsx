import { useState, type FC } from 'react';
import posthog from 'posthog-js';
import { supabase } from '../lib/supabaseClient';

interface BetaSignupProps {
  title: string;
  subtitle: string;
  placeholder: string;
  button: string;
}

const BetaSignup: FC<BetaSignupProps> = ({
  title,
  subtitle,
  placeholder,
  button,
}) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.from('early_signups').insert({ email });
    if (error) {
      setStatus('error');
    } else {
      setStatus('success');
      posthog.capture('beta_signup', { email });
      setEmail('');
    }
  };

  return (
    <section className="py-20 bg-gray-50" id="beta-signup">
      <div className="max-w-xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold mb-4">{title}</h2>
        <p className="text-zinc-600 mb-8">{subtitle}</p>
        <form
          onSubmit={submit}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <input
            type="email"
            required
            placeholder={placeholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 rounded-full border border-zinc-300"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-full bg-emerald-600 text-white font-medium hover:bg-emerald-700"
          >
            {button}
          </button>
        </form>
        {status === 'success' && (
          <p className="text-emerald-600 mt-4">email registrado!</p>
        )}
        {status === 'error' && (
          <p className="text-red-600 mt-4">algo deu errado. tente novamente.</p>
        )}
      </div>
    </section>
  );
};

export default BetaSignup;
