import type { FC } from 'react';
import posthog from 'posthog-js';

interface PaymentModalProps {
  open: boolean;
  onClose: () => void;
  stripeLink: string;
}

const PaymentModal: FC<PaymentModalProps> = ({ open, onClose, stripeLink }) => {
  if (!open) return null;

  const proceed = () => {
    posthog.capture('stripe_checkout_started');
    window.open(stripeLink, '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md mx-auto text-center">
        <h2 className="text-xl font-semibold mb-2">acesso antecipado</h2>
        <p className="text-zinc-600 mb-6">
          o app ainda está em desenvolvimento. seu pagamento garante acesso
          antecipado assim que o mybud estiver pronto.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-full border border-zinc-300"
          >
            voltar
          </button>
          <button
            onClick={proceed}
            className="px-4 py-2 rounded-full bg-emerald-600 text-white hover:bg-emerald-700"
          >
            continuar
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
