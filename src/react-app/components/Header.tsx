import React, { useState, useEffect } from "react";
import { Language, isB2B as isB2BContext, t } from "../lib/i18n";
import { useLanguage } from "../contexts/LanguageContext";

interface HeaderProps {
  onLanguageChange: (lang: Language) => void;
  isB2B?: boolean;
  isCollective?: boolean;
  isEnterprise?: boolean;
  isIndustry?: boolean;
  isGrower?: boolean;
  onCTAClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  onLanguageChange,
  isB2B: isB2BProp,
  isCollective: isCollectiveProp,
  isEnterprise: isEnterpriseProp,
  isIndustry: isIndustryProp,
  isGrower: isGrowerProp,
  onCTAClick,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentLanguage } = useLanguage();

  // Detect context
  const isB2B = typeof isB2BProp === "boolean" ? isB2BProp : isB2BContext();
  const isCollective = typeof isCollectiveProp === "boolean" ? isCollectiveProp : false;
  const isEnterprise = typeof isEnterpriseProp === "boolean" ? isEnterpriseProp : false;
  const isIndustry = typeof isIndustryProp === "boolean" ? isIndustryProp : (isB2B || isEnterprise);
  const isGrower = typeof isGrowerProp === "boolean" ? isGrowerProp : (!isCollective && !isIndustry);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = e.target.value as Language;
    onLanguageChange(newLanguage);
  };

  const closeMenu = () => setIsMenuOpen(false);

  const handleNavClick =
    (targetId: string) => (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      closeMenu();
    };

  const handleCtaClick = () => {
    if (onCTAClick) {
      onCTAClick();
    } else {
      const kitSection = document.getElementById("kit");
      if (kitSection) {
        kitSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    closeMenu();
  };

  const navItems = isIndustry
    ? [
      { id: "brand-experience", label: t("header.nav.features") },
      { id: "contact", label: t("header.nav.contact") },
    ]
    : isCollective
      ? [
        { id: "features", label: t("header.nav.features") },
        { id: "contact", label: t("header.nav.contact") },
      ]
      : [
        { id: "features", label: t("header.nav.features") },
        { id: "kit", label: t("header.nav.kit") },
      ];

  const headerClasses = [
    "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
    isScrolled || isMenuOpen
      ? (isIndustry ? "bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-900" : "bg-white/95 backdrop-blur-xl shadow-md")
      : "bg-transparent",
  ].join(" ");

  const containerClasses = [
    "container mx-auto px-6 py-4 md:py-6 w-full transition-all duration-500",
    isScrolled ? "md:py-4" : "",
  ].join(" ");

  const navButtonClass = [
    "text-sm font-black transition-all hover:scale-105",
    isIndustry
      ? "text-zinc-400 hover:text-emerald-400"
      : ("text-[#288664] hover:text-[#0f5132]"),
  ].join(" ");

  const ctaButtonClass = [
    "px-6 py-2.5 rounded-full text-sm font-black transition-all hover:scale-105 active:scale-95",
    isIndustry
      ? "bg-emerald-500 text-zinc-950 shadow-[0_10px_20px_rgba(16,185,129,0.2)]"
      : "bg-[#EB4C80] text-white shadow-lg",
  ].join(" ");

  const selectClass = [
    "bg-transparent border-none focus:ring-0 text-sm font-black cursor-pointer appearance-none",
    isIndustry ? "text-zinc-400 hover:text-white" : "text-[#288664]",
  ].join(" ");

  const logoHref = isIndustry
    ? `/${currentLanguage}/industry`
    : isCollective
      ? `/${currentLanguage}/collective`
      : `/${currentLanguage}/grower`;

  return (
    <header className={headerClasses}>
      <div className={containerClasses}>
        <div className="flex items-center justify-between gap-8 relative">
          {/* Logo */}
          <a href={logoHref} className="flex items-center group" aria-label="mybud home">
            <img
              src={isIndustry ? "/mybud-logo-white.svg" : "/mybud-logo-green.svg"}
              alt="mybud logo"
              className="h-10 md:h-12 w-auto transition-transform duration-500 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button key={item.id} type="button" onClick={handleNavClick(item.id)} className={navButtonClass}>
                {item.label}
              </button>
            ))}

            <div className={`w-px h-4 ${isIndustry ? 'bg-zinc-800' : 'bg-gray-200'}`} />

            {!isGrower && (
              <a href={`/${currentLanguage}/grower`} className={navButtonClass}>
                Growers
              </a>
            )}
            {!isCollective && (
              <a href={`/${currentLanguage}/collective`} className={navButtonClass}>
                Associações
              </a>
            )}
            {!isIndustry && (
              <a href={`/${currentLanguage}/industry`} className={navButtonClass}>
                Indústria
              </a>
            )}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center relative pr-4 mr-4 border-r border-zinc-800">
              <select value={currentLanguage} onChange={handleLanguageChange} className={selectClass}>
                <option value="pt" className="bg-zinc-950">PT</option>
                <option value="en" className="bg-zinc-950">EN</option>
                <option value="es" className="bg-zinc-950">ES</option>
              </select>
            </div>

            <button type="button" onClick={handleCtaClick} className={ctaButtonClass}>
              {t("header.cta")}
            </button>

            {/* Mobile Toggle */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-xl transition-colors ${isIndustry ? 'text-white hover:bg-zinc-900' : 'text-zinc-900 hover:bg-zinc-100'}`}
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden absolute top-full left-0 right-0 mt-4 mx-6 p-6 rounded-3xl border animate-in slide-in-from-top-4 duration-300 ${isIndustry ? 'bg-zinc-900 border-zinc-800 text-white' : 'bg-white border-zinc-100 text-zinc-900 shadow-2xl'}`}>
            <nav className="flex flex-col gap-6">
              {navItems.map((item) => (
                <button key={item.id} type="button" onClick={handleNavClick(item.id)} className="text-lg font-black text-left">
                  {item.label}
                </button>
              ))}
              <div className={`h-px w-full ${isIndustry ? 'bg-zinc-800' : 'bg-zinc-100'}`} />
              {!isGrower && <a href={`/${currentLanguage}/grower`} className="text-lg font-black">{t("header.switchToGrower") || "Growers"}</a>}
              {!isCollective && <a href={`/${currentLanguage}/collective`} className="text-lg font-black">{t("header.switchToCollective") || "Associações"}</a>}
              {!isIndustry && <a href={`/${currentLanguage}/industry`} className="text-lg font-black">Indústria</a>}
              <div className="flex items-center gap-4 pt-2">
                <span className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Idioma</span>
                <select value={currentLanguage} onChange={handleLanguageChange} className={selectClass}>
                  <option value="pt" className="bg-zinc-900">Português</option>
                  <option value="en" className="bg-zinc-900">English</option>
                  <option value="es" className="bg-zinc-900">Español</option>
                </select>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
