import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { OmLogo } from './OmLogo';
import { MessageCircle, Mail, Phone, ShieldCheck, Heart, Sparkles } from 'lucide-react';

interface FooterProps {
  currentLang: Language;
  onOpenBrandModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onOpenBrandModal }) => {
  const t = TRANSLATIONS[currentLang];
  const f = t.footer;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
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
    <footer className="bg-[#0B2545] text-white pt-16 pb-12 border-t border-[#5C8A74]/30 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#5C8A74]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Doctor credentials */}
          <div className="lg:col-span-4 flex flex-col">
            <OmLogo variant="white" size="lg" />
            <p className="mt-4 text-xs text-slate-300 leading-relaxed max-w-sm">
              {f.aboutText}
            </p>

            <div className="mt-6 p-3.5 rounded-2xl bg-white/5 border border-white/10 max-w-xs">
              <div className="text-xs uppercase tracking-wider text-[#A8D5BA] font-semibold">
                Consulting Physician
              </div>
              <div className="text-sm font-bold text-white mt-0.5">
                Dr. Anamika Chandegra
              </div>
              <div className="text-xs text-slate-300">
                B.H.M.S. & N.C.H.
              </div>
            </div>

            {onOpenBrandModal && (
              <button
                onClick={onOpenBrandModal}
                className="mt-4 inline-flex items-center gap-1.5 text-xs text-[#A8D5BA] hover:text-white transition-colors cursor-pointer w-fit"
              >
                <Sparkles size={13} className="text-[#F6D89B]" />
                <span>Explore OM Brand Identity & Logo Kit</span>
              </button>
            )}
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-wider text-[#A8D5BA] font-bold mb-4 font-display">
              {f.quickLinksTitle}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleNavClick(e, '#home')}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleNavClick(e, '#about')}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a
                  href="#treatments"
                  onClick={(e) => handleNavClick(e, '#treatments')}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.treatments}
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  onClick={(e) => handleNavClick(e, '#process')}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.howItWorks}
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  onClick={(e) => handleNavClick(e, '#reviews')}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.reviews}
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  onClick={(e) => handleNavClick(e, '#gallery')}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => handleNavClick(e, '#faq')}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.faq}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Conditions Supported */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-wider text-[#A8D5BA] font-bold mb-4 font-display">
              Consultation Care
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>Digestive & Acidity</li>
              <li>Respiratory Allergies</li>
              <li>Skin & Dermatological</li>
              <li>Joint & Muscular Comfort</li>
              <li>Stress, Sleep & Wellbeing</li>
              <li>Pediatric & Child Health</li>
              <li>Women's Hormonal Care</li>
            </ul>
          </div>

          {/* Col 4: Contact & Consultations */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-wider text-[#A8D5BA] font-bold mb-4 font-display">
              {f.contactTitle}
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <a
                href="https://wa.me/918200928769"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <MessageCircle size={15} className="text-[#25D366]" />
                <span>+91 8200928769 (WhatsApp)</span>
              </a>

              <a
                href="mailto:dranamikachandegra@gmail.com"
                className="flex items-center gap-2 hover:text-white transition-colors break-all"
              >
                <Mail size={15} className="text-[#A8D5BA]" />
                <span>dranamikachandegra@gmail.com</span>
              </a>

              <p className="pt-2 text-[11px] text-slate-400">
                Mon – Sat: 10:00 AM – 7:00 PM <br />
                Sunday: By Prior Appointment
              </p>
            </div>
          </div>
        </div>

        {/* Required Medical Disclaimer */}
        <div className="mt-8 p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-300 flex items-start gap-3">
          <ShieldCheck size={18} className="text-[#A8D5BA] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-white">Medical Disclaimer: </strong>
            {t.disclaimer.text}
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>{f.copyright}</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Privacy Assured</span>
            <span>•</span>
            <span>Ethical Healthcare Practice</span>
            <span>•</span>
            <span>Patient-Centred Care</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
