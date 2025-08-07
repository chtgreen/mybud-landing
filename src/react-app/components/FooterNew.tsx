import { useState, type FC } from 'react';
import posthog from 'posthog-js';
import { t } from '../lib/i18n';

const Footer: FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      questionKey: 'footer.faq1.question',
      answerKey: 'footer.faq1.answer'
    },
    {
      questionKey: 'footer.faq2.question', 
      answerKey: 'footer.faq2.answer'
    },
    {
      questionKey: 'footer.faq3.question',
      answerKey: 'footer.faq3.answer'
    }
  ];

  const toggleFAQ = (index: number) => {
    if (typeof posthog !== 'undefined') {
      posthog.capture('faq_interaction', {
        question: t(faqs[index]?.questionKey),
      });
    }
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <footer className="bg-white py-12 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Brand Info (Left) */}
          <div>
            {/* mybud Brand */}
            <div className="mb-6">
              <h4 className="text-xl font-bold text-emerald-600 mb-2">
                {t('footer.brand')}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('footer.tagline')}
              </p>
            </div>
            
            {/* Social Icons Only */}
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-8 h-8 text-gray-400 hover:text-emerald-600 transition-colors flex items-center justify-center"
              >
                <i className="fab fa-instagram text-lg"></i>
              </a>
              <a
                href="#"
                className="w-8 h-8 text-gray-400 hover:text-emerald-600 transition-colors flex items-center justify-center"
              >
                <i className="fab fa-discord text-lg"></i>
              </a>
              <a
                href="#"
                className="w-8 h-8 text-gray-400 hover:text-emerald-600 transition-colors flex items-center justify-center"
              >
                <i className="fab fa-reddit-alien text-lg"></i>
              </a>
            </div>
          </div>

          {/* FAQ Section (Right) */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-6">
              {t('footer.faqTitle')}
            </h3>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <button
                    className="w-full text-left flex items-center justify-between"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="text-sm font-medium text-gray-800">
                      {t(faq.questionKey)}
                    </span>
                    <svg
                      className={`w-5 h-5 transform transition-transform text-gray-400 ${
                        openFAQ === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </button>
                  {openFAQ === index && (
                    <div className="mt-3">
                      <p className="text-gray-600 text-xs leading-relaxed">
                        {t(faq.answerKey)}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Legal Links - Centralized Row */}
        <div className="border-t border-gray-100 mt-8 pt-6">
          <div className="flex justify-center items-center gap-6 mb-4">
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-emerald-600 transition-colors"
            >
              {t('footer.privacy')}
            </a>
            <span className="text-gray-300">•</span>
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-emerald-600 transition-colors"
            >
              {t('footer.terms')}
            </a>
            <span className="text-gray-300">•</span>
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-emerald-600 transition-colors"
            >
              {t('footer.contact')}
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-400 text-xs mb-2">
            {t('footer.copyright')}
          </p>
          <a
            href="https://cht.green"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-1 text-xs text-gray-500 hover:text-emerald-600 transition-colors"
          >
            <span className="font-bold">by cht.green</span>
            <span className="text-sm">🇧🇷</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;