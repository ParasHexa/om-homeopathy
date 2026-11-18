import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { OmLogo } from './OmLogo';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Menu, X, Calendar, Sparkles } from 'lucide-react';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenBrandModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
  onOpenBrandModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#treatments', label: t.nav.treatments },
    { href: '#process', label: t.nav.howItWorks },
    { href: '#reviews', label: t.nav.reviews },
    { href: '#gallery', label: t.nav.gallery },
    { href: '#faq', label: t.nav.faq },
    { href: '#contact', label: t.nav.contact },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-[#5C8A74]/15 py-3'
          : 'bg-[#FAFAF8]/90 backdrop-blur-xs py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group focus:outline-none focus:ring-2 focus:ring-[#5C8A74]/50 rounded-lg p-0.5"
          aria-label="OM Homeopathy - Return to homepage"
        >
          <OmLogo variant="horizontal" size="md" />
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden xl:flex items-center space-x-1 lg:space-x-2"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-3 py-1.5 text-sm font-medium text-[#162534]/85 hover:text-[#0B2545] hover:bg-[#5C8A74]/10 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Area: Language Switcher + Brand identity link + Book CTA + Mobile Hamburger */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Brand Logo Showcase Modal Trigger */}
          {onOpenBrandModal && (
            <button
              onClick={onOpenBrandModal}
              title="View Custom Brand Logo & Identity Kit"
              className="hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-[#5C8A74] hover:text-[#0B2545] hover:bg-[#5C8A74]/10 rounded-full transition-colors border border-[#5C8A74]/30 cursor-pointer"
            >
              <Sparkles size={13} className="text-[#C59B27]" />
              <span>Logo Kit</span>
            </button>
          )}

          {/* Multilingual Switcher */}
          <LanguageSwitcher
            currentLang={currentLang}
            onLanguageChange={onLanguageChange}
          />

          {/* Book Appointment CTA */}
          <a
            href="#appointment"
            onClick={(e) => handleNavClick(e, '#appointment')}
            id="header-book-btn"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-[#0B2545] hover:bg-[#133E68] active:scale-[0.98] rounded-full shadow-xs transition-all duration-200"
          >
            <Calendar size={15} />
            <span>{t.nav.bookAppointment}</span>
          </a>

          {/* Mobile Hamburger Menu Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-[#0B2545] hover:bg-[#5C8A74]/15 focus:outline-none focus:ring-2 focus:ring-[#5C8A74]/50"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="xl:hidden bg-white/98 backdrop-blur-lg border-b border-[#5C8A74]/20 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-3 duration-200"
        >
          <div className="flex flex-col space-y-1.5 max-w-md mx-auto">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2.5 text-base font-medium text-[#162534] hover:bg-[#5C8A74]/10 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="#appointment"
                onClick={(e) => handleNavClick(e, '#appointment')}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 text-center font-semibold text-white bg-[#0B2545] hover:bg-[#133E68] rounded-xl shadow-xs transition-all"
              >
                <Calendar size={18} />
                <span>{t.nav.bookAppointment}</span>
              </a>

              {onOpenBrandModal && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBrandModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2 px-4 text-xs font-semibold text-[#5C8A74] bg-[#5C8A74]/10 rounded-lg"
                >
                  <Sparkles size={14} className="text-[#C59B27]" />
                  <span>View OM Homeopathy Brand Logo & Identity Mockups</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
