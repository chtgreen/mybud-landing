import { useState, type FC } from 'react';
import posthog from 'posthog-js';
import { supabase } from '../lib/supabaseClient';
import { t } from '../lib/i18n';

interface BetaModalProps {
  open: boolean;
  onClose: () => void;
}

const BetaModal: FC<BetaModalProps> = ({ open, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPaymentDetails, setShowPaymentDetails] = useState(false);
  const [showNewsletterForm, setShowNewsletterForm] = useState(false);

  if (!open) return null;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !name.trim()) return;

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('beta_signups')
        .insert([
          {
            email: email.trim(),
            // Temporarily store name in existing column until DB has proper 'name'
            instagram: name.trim(),
            created_at: new Date().toISOString(),
          }
        ]);

      if (error) throw error;

      // Track successful signup
      if (typeof posthog !== 'undefined') {
        posthog.capture('free_waitlist_signup_completed', {
          email,
          has_name: !!name,
          source: 'beta_modal'
        });
      }

      // Show success message
      alert(t('betaSignup.successMessage'));
      setEmail('');
      setName('');
      onClose();
    } catch (error) {
      console.error('Error:', error);
      alert(t('betaSignup.errorMessage'));

      if (typeof posthog !== 'undefined') {
        posthog.capture('free_waitlist_signup_error', {
          error: error instanceof Error ? error.message : 'Unknown error',
          source: 'beta_modal'
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSupportClick = () => {
    if (typeof posthog !== 'undefined') {
      posthog.capture('priority_access_clicked', {
        source: 'beta_modal',
        choice: 'paid_priority'
      });
    }
    setShowPaymentDetails(true);
  };

  const handleNewsletterClick = () => {
    if (typeof posthog !== 'undefined') {
      posthog.capture('free_waitlist_clicked', {
        source: 'beta_modal',
        choice: 'free_waitlist'
      });
    }
    setShowNewsletterForm(true);
  };

  const handlePaymentMethodClick = () => {
    if (typeof posthog !== 'undefined') {
      posthog.capture('payment_method_clicked', {
        method: 'pix',
        source: 'beta_modal'
      });
    }
  };

  const handleWhatsAppClick = () => {
    if (typeof posthog !== 'undefined') {
      posthog.capture('whatsapp_contact_clicked', {
        context: 'payment_confirmation',
        source: 'beta_modal'
      });
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        onClick={handleBackdropClick}
      >
        <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {t('betaSignup.title')}
              </h2>
              <p className="text-gray-600 mt-1">
                {t('betaSignup.subtitle')}
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Desenvolvimento em progresso</span>
                <span>78% completo</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-emerald-500 h-2 rounded-full" style={{width: '78%'}}></div>
              </div>
              <p className="text-xs text-gray-500 mt-2">Lançamento oficial estimado: Novembro 2025</p>
            </div>

            {/* Access Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Priority Access Card */}
              <div className="border-2 border-emerald-500 rounded-lg p-6 relative">
                <div className="absolute -top-3 left-4 bg-emerald-500 text-white px-3 py-1 rounded text-sm font-medium">
                  Acesso Prioritário
                </div>
                <div className="mt-2">
                  <div className="text-2xl font-bold text-gray-900 mb-2">R$ 300</div>
                  <p className="text-sm text-gray-600 mb-4">Apoie o desenvolvimento e receba:</p>
                  <ul className="space-y-2 text-sm text-gray-700 mb-6">
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3"></div>
                      Acesso imediato quando lançar
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3"></div>
                      6 meses premium inclusos
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3"></div>
                      Kit físico exclusivo
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3"></div>
                      Discord privado do desenvolvimento
                    </li>
                  </ul>
                  {!showPaymentDetails ? (
                     <button
                       onClick={handleSupportClick}
                       className="w-full btn-primary py-3 px-4"
                     >
                       Apoiar Projeto
                     </button>
                   ) : (
                     <div className="space-y-3">
                       <div className="text-sm font-medium text-gray-900 mb-2">Como apoiar:</div>
                       <div 
                         className="bg-gray-50 p-3 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
                         onClick={handlePaymentMethodClick}
                       >
                         <div className="text-sm font-medium text-gray-700">Chave Pix:</div>
                         <div className="text-sm font-mono text-gray-800">pix@mybud.app</div>
                       </div>
                       <div 
                         className="bg-emerald-50 p-3 rounded-lg cursor-pointer hover:bg-emerald-100 transition-colors"
                         onClick={handleWhatsAppClick}
                       >
                         <div className="text-sm font-medium text-emerald-700">Enviar comprovante:</div>
                         <div className="text-sm font-mono text-emerald-800">+55 48 3199-2171</div>
                       </div>
                       <div className="text-xs text-gray-500">
                         Após o pagamento, entraremos em contato para confirmar e enviar o kit.
                       </div>
                     </div>
                   )}
                </div>
              </div>

              {/* Free Access Card */}
              <div className="border border-gray-300 rounded-lg p-6">
                <div className="text-lg font-semibold text-gray-900 mb-2">Acesso Gratuito</div>
                <p className="text-sm text-gray-600 mb-4">Receba atualizações e entre na lista de acesso antecipado</p>
                
                {!showNewsletterForm ? (
                  <div>
                    <ul className="space-y-2 text-sm text-gray-700 mb-6">
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
                        Atualizações do desenvolvimento
                      </li>
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
                        Lista de acesso antecipado
                      </li>
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
                        Possível convite beta gratuito
                      </li>
                    </ul>
                    <button
                      onClick={handleNewsletterClick}
                      className="w-full btn-secondary py-3 px-4"
                    >
                      Receber Atualizações
                    </button>
                  </div>
                ) : (
                  <form onSubmit={submit} className="space-y-3">
                    <input
                      type="text"
                      placeholder="Seu nome"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm"
                      required
                    />

                    <input
                      type="email"
                      placeholder="Seu melhor email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm"
                      required
                    />

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary py-2 px-4 text-sm disabled:opacity-50"
                    >
                      {isSubmitting ? 'Enviando...' : 'Confirmar Inscrição'}
                    </button>

                    <p className="text-xs text-gray-500 text-center">
                      Sem spam. Respeitamos sua privacidade.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BetaModal; 