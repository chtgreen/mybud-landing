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
  const [useWhiteLogo, setUseWhiteLogo] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentLanguage } = useLanguage();

  // Detect context - map legacy props to new ones
  const isB2B = typeof isB2BProp === "boolean" ? isB2BProp : isB2BContext();
  const isCollective = typeof isCollectiveProp === "boolean" ? isCollectiveProp : false;
  const isEnterprise = typeof isEnterpriseProp === "boolean" ? isEnterpriseProp : false;
  const isIndustry = typeof isIndustryProp === "boolean" ? isIndustryProp : (isB2B || isEnterprise);
  const isGrower = typeof isGrowerProp === "boolean" ? isGrowerProp : (!isCollective && !isIndustry);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledPastHero = window.scrollY > window.innerHeight * 0.65;

      if (isIndustry || isCollective) {
        setUseWhiteLogo(false);
        return;
      }

      setUseWhiteLogo(!scrolledPastHero);
    };

    if (isIndustry || isCollective) {
      setUseWhiteLogo(false);
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isIndustry, isCollective]);

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

  const navItems = isCollective || isIndustry
    ? [
      { id: "features", label: t("header.nav.features") },
      { id: "contact", label: t("header.nav.contact") },
    ]
    : [
      { id: "features", label: t("header.nav.features") },
      { id: "kit", label: t("header.nav.kit") },
    ];

  const isHeroContext = !isIndustry && !isCollective && useWhiteLogo && !isMenuOpen;

  const headerClasses = [
    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out",
    isHeroContext
      ? "bg-transparent"
      : "bg-white/95 backdrop-blur-[12px] shadow-md",
  ].join(" ");

  const containerClasses = [
    "container mx-auto px-4 md:px-6 w-full",
    isHeroContext ? "py-2.5 md:py-3.5" : "py-2 md:py-3",
  ].join(" ");

  const navButtonClass = [
    "text-sm font-semibold transition-colors",
    isHeroContext
      ? "text-white hover:text-white/80"
      : "text-[#288664] hover:text-[#0f5132]",
  ].join(" ");

  const desktopLanguageWrapperClass = isHeroContext
    ? "rounded-full px-3 py-1.5 border transition-all hidden sm:block bg-transparent border-transparent"
    : "language-selector rounded-full px-3 py-1.5 border transition-all hidden sm:block bg-white border-gray-300";

  const desktopSelectClass = [
    "bg-transparent border-none focus:ring-0 text-sm font-medium cursor-pointer text-black",
  ].join(" ");

  const mobileLanguageWrapperClass = isHeroContext
    ? "rounded-full px-3 py-1.5 border transition-all sm:hidden bg-transparent border-transparent"
    : "language-selector rounded-full px-3 py-1.5 border transition-all sm:hidden bg-white border-gray-300";

  const mobileSelectClass = [
    "bg-transparent border-none focus:ring-0 text-sm font-medium cursor-pointer text-black",
  ].join(" ");

  const mobileToggleButtonClass = [
    "md:hidden inline-flex items-center justify-center rounded-full border p-2 transition-colors",
    isHeroContext
      ? "border-white/40 bg-transparent text-white hover:bg-white/10"
      : "border-gray-200 bg-white text-gray-700 hover:bg-gray-100",
  ].join(" ");

  const ctaButtonClass = [
    "inline-flex items-center justify-center whitespace-nowrap rounded-full px-4 md:px-5 py-1.5 text-sm md:text-base font-semibold transition-colors",
    isHeroContext
      ? "bg-transparent border border-white/70 text-white hover:bg-white/15 hover:text-white shadow-[0_6px_18px_rgba(12,83,49,0.25)]"
      : "bg-transparent border border-[#288664] text-[#288664] hover:bg-[#288664] hover:text-white shadow-none",
  ].join(" ");

  const logoHref = isIndustry 
    ? `/${currentLanguage}/industry` 
    : isCollective 
      ? `/${currentLanguage}/collective`
      : `/${currentLanguage}/grower`;
  
  // Get page links for navigation
  const getPageLinks = () => {
    const links = [];
    if (!isGrower) {
      links.push({ href: `/${currentLanguage}/grower`, label: t("header.switchToGrower") || t("header.switchToB2C") || "Para Growers" });
    }
    if (!isCollective) {
      links.push({ href: `/${currentLanguage}/collective`, label: t("header.switchToCollective") || "Associações" });
    }
    if (!isIndustry) {
      links.push({ href: `/${currentLanguage}/industry`, label: t("header.switchToIndustry") || t("header.switchToEnterprise") || t("header.switchToB2B") || "Indústria" });
    }
    return links;
  };
  
  const pageLinks = getPageLinks();

  return (
    <header className={headerClasses}>
      <div className={containerClasses}>
        <div className="flex items-center justify-between gap-4 relative">
          {/* Logo */}
          <a
            href={logoHref}
            className="flex items-center"
            aria-label="mybud home"
          >
            <img
              src={
                isHeroContext
                  ? "/mybud-logo-white.svg"
                  : "/mybud-logo-green.svg"
              }
              alt="mybud logo"
              className="h-8 md:h-12 lg:h-14 w-auto transition-opacity duration-300"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6">
            {/* Internal section links */}
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={handleNavClick(item.id)}
                className={navButtonClass}
              >
                {item.label}
              </button>
            ))}

            {/* Separator */}
            {pageLinks.length > 0 && (
              <div className={`w-px h-4 ${isHeroContext ? 'bg-white/30' : 'bg-gray-300'}`} />
            )}

            {/* Page navigation links */}
            {pageLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`${navButtonClass} inline-flex items-center gap-1.5`}
              >
                {link.label}
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            ))}
          </nav>

          {/* Action area */}
          <div className="flex items-center gap-2 md:gap-4">
            <button
              type="button"
              onClick={handleCtaClick}
              className={ctaButtonClass}
            >
              {t("header.cta")}
            </button>

            <div className={desktopLanguageWrapperClass}>
              <select
                id="language-select"
                value={currentLanguage}
                onChange={handleLanguageChange}
                className={desktopSelectClass}
              >
                <option value="pt">Português</option>
                <option value="en">English</option>
                <option value="es">Español</option>
              </select>
            </div>

            {/* Mobile language selector */}
            <div className={mobileLanguageWrapperClass}>
              <select
                aria-label="Language selector"
                value={currentLanguage}
                onChange={handleLanguageChange}
                className={mobileSelectClass}
              >
                <option value="pt">PT</option>
                <option value="en">EN</option>
                <option value="es">ES</option>
              </select>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className={mobileToggleButtonClass}
              aria-label="Toggle navigation"
            >
              {isMenuOpen ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 mt-3 rounded-2xl bg-white/90 backdrop-blur-xl border border-gray-200 shadow-[0_12px_30px_rgba(0,0,0,0.12)] overflow-hidden">
              <nav className="flex flex-col px-4 py-4">
                {/* Internal section links */}
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={handleNavClick(item.id)}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-gray-800 hover:bg-gray-100 transition-colors"
                  >
                    {item.label}
                  </button>
                ))}

                {/* Separator */}
                {pageLinks.length > 0 && (
                  <div className="my-2 border-t border-gray-200" />
                )}

                {/* Page navigation links */}
                {pageLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-[#288664] hover:bg-gray-100 transition-colors inline-flex items-center justify-between"
                  >
                    {link.label}
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </a>
                ))}

                <div className="mt-3 border-t border-gray-200 pt-3">
                  <button
                    type="button"
                    onClick={handleCtaClick}
                    className="w-full inline-flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold text-white bg-[#EB4C80] hover:bg-[#288664] transition-colors shadow-sm"
                  >
                    {t("header.cta")}
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
