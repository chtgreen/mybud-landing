import type { FC } from 'react';
import { t, isB2B as isB2BContext } from '../lib/i18n';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: FC = () => {
  const { currentLanguage } = useLanguage();
  
  // Detect if we're in B2B context (unified condition)
  const isB2B = isB2BContext();
  
  // Check if we're in collective context
  const isCollective = window.location.pathname.includes('/collective');

  return (
    <footer className="bg-white py-12 border-t border-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className={`grid grid-cols-1 ${!isB2B && !isCollective ? 'lg:grid-cols-2' : ''} gap-12`}>
          {/* Brand Info (Left) */}
          <div>
            {/* mybud Logo & Brand */}
            <div className="mb-6">
              <div className="flex items-center mb-6">
                <img
                  src="/mybud-logo-green.svg"
                  alt="mybud Logo"
                  className="h-16 w-auto"
                  style={{
                    filter: 'invert(41%) sepia(89%) saturate(1891%) hue-rotate(313deg) brightness(95%) contrast(92%)'
                  }}
                />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                {t('footer.tagline')}
              </p>
              {t('footer.unifier') && (
                <p className="text-emerald-700 text-sm font-medium leading-relaxed">
                  {t('footer.unifier')}
                </p>
              )}
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              <a
                href="https://www.instagram.com/mybud.app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="mybud on Instagram"
                className="w-8 h-8 text-gray-400 hover:text-[#288664] transition-colors flex items-center justify-center"
              >
                <i className="fab fa-instagram text-lg"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/cht-green/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="mybud on LinkedIn"
                className="w-8 h-8 text-gray-400 hover:text-[#288664] transition-colors flex items-center justify-center"
              >
                <i className="fab fa-linkedin-in text-lg"></i>
              </a>
            </div>
          </div>

          {/* FAQ Section (Right) - Only on B2C Grower page */}
          {!isB2B && !isCollective && (
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-6">
                {t('footer.faqTitle')}
              </h3>
              <div className="space-y-3">
                {[
                  { questionKey: 'footer.faq1.question', answerKey: 'footer.faq1.answer' },
                  { questionKey: 'footer.faq2.question', answerKey: 'footer.faq2.answer' },
                  { questionKey: 'footer.faq3.question', answerKey: 'footer.faq3.answer' }
                ].map((faq, index) => {
                  const question = t(faq.questionKey);
                  const answer = t(faq.answerKey);
                  
                  return (
                    <details
                      key={index}
                      className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow group"
                    >
                      <summary className="w-full text-left flex items-center justify-between cursor-pointer list-none">
                        <span className="text-sm font-medium text-gray-800">
                          {question}
                        </span>
                        <svg
                          className="w-5 h-5 transform transition-transform text-gray-400 group-open:rotate-180"
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
                      </summary>
                      <div className="mt-3">
                        <p className="text-gray-600 text-xs leading-relaxed">
                          {answer}
                        </p>
                      </div>
                    </details>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Legal Links - Centralized Row */}
        <div className="border-t border-gray-100 mt-8 pt-6">
          <div className="flex flex-wrap justify-center items-center gap-4 mb-4">
            <a
              href="mailto:comercial@mybud.app"
              className="text-sm text-gray-500 hover:text-[#288664] transition-colors"
            >
              {t('footer.contact')}
            </a>
            <span className="text-gray-300">•</span>
            <a
              href={`/${currentLanguage}/grower`}
              className="text-sm text-gray-500 hover:text-[#288664] transition-colors font-medium"
            >
              {t('footer.growers') || 'Growers'}
            </a>
            <span className="text-gray-300">•</span>
            <a
              href={`/${currentLanguage}/collective`}
              className="text-sm text-gray-500 hover:text-[#288664] transition-colors font-medium"
            >
              {t('footer.collective') || 'Collective'}
            </a>
            <span className="text-gray-300">•</span>
            <a
              href={`/${currentLanguage}/industry`}
              className="text-sm text-gray-500 hover:text-[#288664] transition-colors font-medium"
            >
              {t('footer.industry') || 'Industry'}
            </a>
          </div>

          {/* Legal Notice */}
          {!isB2B && t('footer.legalNotice') && (
            <div className="text-center mb-4">
              <p className="text-xs text-gray-500 italic">
                {t('footer.legalNotice')}
              </p>
            </div>
          )}
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
            className="inline-flex items-center justify-center space-x-1 text-xs text-gray-500 hover:text-[#288664] transition-colors"
          >
            <span className="font-bold">by cht.green</span>
            <span className="inline-flex items-center gap-1 text-base">
              🇧🇷
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
