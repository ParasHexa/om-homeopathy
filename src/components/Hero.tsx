import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { Calendar, ArrowRight, ShieldCheck, Video, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  currentLang: Language;
  onBookClick: () => void;
  onExploreTreatments: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentLang,
  onBookClick,
  onExploreTreatments,
}) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#F2F6F3]/80 via-[#FAFAF8] to-[#FAFAF8]"
    >
      {/* Decorative ambient subtle background elements */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#5C8A74]/8 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-20 right-0 w-96 h-96 bg-[#0B2545]/5 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Medical Credential Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#5C8A74]/30 shadow-xs mb-6">
              <span className="w-2 h-2 rounded-full bg-[#5C8A74] animate-pulse" />
              <span className="text-xs md:text-sm font-semibold text-[#0B2545] tracking-wide">
                {t.hero.badge}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl font-bold font-display text-[#0B2545] leading-[1.18] tracking-tight">
              {t.hero.headline}
            </h1>

            {/* Subheading */}
            <p className="mt-5 text-base sm:text-lg md:text-xl text-[#334155] leading-relaxed max-w-2xl font-normal">
              {t.hero.subheading}
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <button
                id="hero-book-cta"
                onClick={onBookClick}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-semibold text-white bg-[#0B2545] hover:bg-[#133E68] active:scale-[0.98] rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <Calendar size={18} />
                <span>{t.hero.ctaPrimary}</span>
              </button>

              <button
                id="hero-explore-cta"
                onClick={onExploreTreatments}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-[#0B2545] bg-white hover:bg-[#F2F6F3] border border-[#5C8A74]/30 active:scale-[0.98] rounded-full shadow-xs transition-all cursor-pointer"
              >
                <span>{t.hero.ctaSecondary}</span>
                <ArrowRight size={17} className="text-[#5C8A74]" />
              </button>
            </div>

            {/* Trust Indicator Pill */}
            <div className="mt-8 pt-6 border-t border-[#5C8A74]/20 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-[#475569]">
              <div className="flex items-center gap-1.5 font-medium text-[#0B2545]">
                <ShieldCheck size={16} className="text-[#5C8A74]" />
                <span>{t.hero.trustText}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Doctor's Visual Portrait & Clinical Badge */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Ambient halo ring */}
            <div className="relative w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#5C8A74]/30 animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-3 rounded-full bg-gradient-to-tr from-[#5C8A74]/20 via-[#E8F0EC]/60 to-white shadow-xl" />

              {/* Organic circular image container */}
              <div className="relative w-full h-full p-3 rounded-full overflow-hidden flex items-center justify-center">
                <img
                  src="/src/assets/images/dr_anamika_portrait_1789671903521.jpg"
                  alt="Dr. Anamika Chandegra - B.H.M.S. & N.C.H. Homeopathic Physician"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top rounded-full shadow-inner hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating Doctor Badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[90%] sm:w-[85%] bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-lg border border-[#5C8A74]/25 text-center">
                <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-[#5C8A74] tracking-wider uppercase mb-0.5">
                  <Sparkles size={13} className="text-[#C59B27]" />
                  <span>Consulting Physician</span>
                </div>
                <div className="text-base sm:text-lg font-bold font-display text-[#0B2545]">
                  Dr. Anamika Chandegra
                </div>
                <div className="text-xs text-[#5C8A74] font-semibold">
                  B.H.M.S. & N.C.H.
                </div>
              </div>

              {/* Floating 100% Online Telehealth Pill */}
              <div className="absolute -top-2 -right-2 bg-white rounded-full py-1.5 px-3.5 shadow-md border border-[#5C8A74]/20 flex items-center gap-1.5">
                <Video size={13} className="text-[#5C8A74]" />
                <span className="text-[11px] font-bold text-[#0B2545]">100% Online Consultations</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Trust Strip below Hero */}
        <div className="mt-16 sm:mt-20 pt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.trustStrip.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/80 backdrop-blur-xs rounded-2xl p-4 border border-[#5C8A74]/20 shadow-xs hover:shadow-md transition-all flex items-start gap-3.5"
            >
              <div className="w-8 h-8 rounded-full bg-[#E8F0EC] text-[#5C8A74] flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 size={17} />
              </div>
              <div>
                <h2 className="text-sm font-bold text-[#0B2545]">
                  {item.title}
                </h2>
                <p className="text-xs text-[#64748B] mt-0.5 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
