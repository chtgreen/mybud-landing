import type { FC } from 'react';
import { t } from '../lib/i18n';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: FC = () => {
  const { currentLanguage } = useLanguage();

  // Detect if we're in industry context
  const isIndustry = window.location.pathname.includes('/industry');
  const isDark = isIndustry;

  return (
    <footer className={`${isDark ? 'bg-zinc-950 text-white border-zinc-900' : 'bg-white text-zinc-900 border-gray-100'} py-20 border-t relative overflow-hidden`}>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Brand Info */}
          <div className="space-y-8">
            <div className="flex items-center">
              <img
                src={isDark ? "/mybud-logo-white.svg" : "/mybud-logo-green.svg"}
                alt="mybud Logo"
                className="h-12 w-auto"
              />
            </div>

            <div className="max-w-sm space-y-4">
              <p className={`${isDark ? 'text-zinc-400' : 'text-gray-600'} text-sm font-medium leading-relaxed`}>
                {t('footer.tagline')}
              </p>
              {t('footer.unifier') && (
                <p className="text-emerald-500 text-sm font-black tracking-tight">
                  {t('footer.unifier')}
                </p>
              )}
            </div>

            {/* Socials */}
            <div className="flex gap-4">
              <a href="https://instagram.com/mybud.app" target="_blank" rel="noreferrer" className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${isDark ? 'bg-zinc-900 text-zinc-400 hover:bg-emerald-500 hover:text-zinc-950' : 'bg-gray-100 text-gray-500 hover:bg-emerald-500 hover:text-white'}`}>
                <i className="fab fa-instagram text-lg" />
              </a>
              <a href="https://linkedin.com/company/cht-green/" target="_blank" rel="noreferrer" className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${isDark ? 'bg-zinc-900 text-zinc-400 hover:bg-emerald-500 hover:text-zinc-950' : 'bg-gray-100 text-gray-500 hover:bg-emerald-500 hover:text-white'}`}>
                <i className="fab fa-linkedin-in text-lg" />
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-6">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-emerald-500">Explorar</h4>
              <nav className="flex flex-col gap-4">
                <a href={`/${currentLanguage}/grower`} className="text-sm font-bold hover:text-emerald-400 transition-colors">Growers</a>
                <a href={`/${currentLanguage}/collective`} className="text-sm font-bold hover:text-emerald-400 transition-colors">Associações</a>
                <a href={`/${currentLanguage}/industry`} className="text-sm font-bold hover:text-emerald-400 transition-colors">Indústria</a>
              </nav>
            </div>
            <div className="space-y-6">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-emerald-500">Legal</h4>
              <nav className="flex flex-col gap-4">
                <a href="mailto:comercial@mybud.app" className="text-sm font-bold hover:text-emerald-400 transition-colors">Contato</a>
                <p className="text-[10px] text-zinc-500 font-medium italic max-w-[150px]">
                  {t('footer.legalNotice')}
                </p>
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`mt-20 pt-10 border-t ${isDark ? 'border-zinc-900' : 'border-gray-100'} flex flex-col md:flex-row justify-between items-center gap-6`}>
          <p className="text-xs font-bold text-zinc-500">
            {t('footer.copyright')}
          </p>
          <a href="https://cht.green" target="_blank" rel="noreferrer" className="group flex items-center gap-2">
            <span className="text-xs font-black text-zinc-500 group-hover:text-emerald-500 transition-colors">by cht.green</span>
            <span className="text-lg grayscale group-hover:grayscale-0 transition-all">🇧🇷</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
