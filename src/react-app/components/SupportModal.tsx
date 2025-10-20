import { useEffect, type FC } from 'react';
import posthog from 'posthog-js';
import { t } from '../lib/i18n';
import { Rocket } from './icons';

interface SupportModalProps {
  open: boolean;
  onClose: () => void;
}

const SupportModal: FC<SupportModalProps> = ({ open, onClose }) => {
  // Track modal view time
  useEffect(() => {
    if (open) {
      const startTime = Date.now();
      
      if (typeof posthog !== 'undefined') {
        posthog.capture('support_modal_opened', {
          timestamp: startTime
        });
      }

      return () => {
        const timeSpent = Date.now() - startTime;
        if (typeof posthog !== 'undefined') {
          posthog.capture('support_modal_closed', {
            time_spent_ms: timeSpent,
            time_spent_seconds: Math.round(timeSpent / 1000)
          });
        }
      };
    }
  }, [open]);

  const handlePaymentMethodClick = () => {
    if (typeof posthog !== 'undefined') {
      posthog.capture('payment_method_clicked', {
        method: 'pix',
        modal: 'support_modal'
      });
    }
  };

  const handleWhatsAppClick = () => {
    if (typeof posthog !== 'undefined') {
      posthog.capture('whatsapp_contact_clicked', {
        context: 'payment_confirmation',
        modal: 'support_modal'
      });
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!open) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl p-8 max-w-md mx-auto text-center relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            {t('paymentModal.title')}
          </h2>
          <p className="text-gray-600 mb-4">
            {t('paymentModal.subtitle')}
          </p>
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 mb-4">
            <p className="text-emerald-800 text-sm leading-relaxed">
              {t('paymentModal.diyStatement')}
            </p>
          </div>
          <p className="text-lg font-medium text-gray-800 mb-4">
            {t('paymentModal.price')}
          </p>
        </div>

        <div className="text-left mb-6">
          <ul className="space-y-3">
            <li className="flex items-start space-x-3">
              <span className="text-emerald-500 mt-1">–</span>
              <span className="text-gray-700">{t('paymentModal.benefits.earlyAccess')}</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-emerald-500 mt-1">–</span>
              <span className="text-gray-700">{t('paymentModal.benefits.premium')}</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-emerald-500 mt-1">–</span>
              <span className="text-gray-700">{t('paymentModal.benefits.kit')}</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-emerald-500 mt-1">–</span>
              <span className="text-gray-700">{t('paymentModal.benefits.community')}</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-emerald-500 mt-1">–</span>
              <span className="text-gray-700">{t('paymentModal.benefits.priority')}</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-emerald-500 mt-1">–</span>
              <span className="text-gray-700">{t('paymentModal.benefits.behindScenes')}</span>
            </li>
          </ul>
        </div>

        {/* QR Codes Info */}
        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-6">
          <p className="text-amber-800 text-sm leading-relaxed">
            {t('paymentModal.qrCodesInfo')}
          </p>
        </div>

        {/* Discord Access Info */}
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
          <p className="text-blue-800 text-sm leading-relaxed">
            {t('paymentModal.discordAccess')}
          </p>
        </div>

        <div className="text-center space-y-4 mb-6">
          <p className="text-gray-800 font-medium flex items-center justify-center gap-2">
            <Rocket className="w-5 h-5 text-emerald-600" aria-hidden="true" />
            {t('paymentModal.launch')}
          </p>
          
          <div 
            className="bg-gray-50 p-4 rounded-lg space-y-3 cursor-pointer hover:bg-gray-100 transition-colors"
            onClick={handlePaymentMethodClick}
          >
            <p className="text-sm font-medium text-gray-700 mb-2">
              {t('paymentModal.paymentTitle')}
            </p>
            <p className="text-lg font-mono text-gray-800">
              {t('paymentModal.paymentMethod')}
            </p>
          </div>

          <div 
            className="bg-emerald-50 p-4 rounded-lg space-y-2 cursor-pointer hover:bg-emerald-100 transition-colors"
            onClick={handleWhatsAppClick}
          >
            <p className="text-sm font-medium text-emerald-700">
              {t('paymentModal.paymentInstruction')}
            </p>
            <p className="text-lg font-mono text-emerald-800">
              {t('paymentModal.whatsapp')}
            </p>
          </div>
          
          <p className="text-sm text-gray-600">
            {t('paymentModal.followUp')}
          </p>
        </div>

        <button
          onClick={onClose}
          className="w-full btn-primary py-3"
        >
          {t('paymentModal.closeButton')}
        </button>
      </div>
    </div>
  );
};

export default SupportModal; 
