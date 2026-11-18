import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { Video, PackageCheck, Calendar, CheckCircle2 } from 'lucide-react';

interface ConsultationProcessProps {
  currentLang: Language;
  onBookClick: () => void;
}

export const ConsultationProcess: React.FC<ConsultationProcessProps> = ({
  currentLang,
  onBookClick,
}) => {
  const t = TRANSLATIONS[currentLang];
  const p = t.processSection;

  return (
    <section id="process" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E8F0EC] text-[#5C8A74] text-xs font-semibold tracking-wider uppercase mb-3">
            {p.badge}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-[#0B2545] tracking-tight">
            {p.heading}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#475569] leading-relaxed">
            {p.subheading}
          </p>
        </div>

        {/* 2 Key Pillars: Online Consultation & Doorstep Delivery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Online Consultation Card */}
          <div className="p-6 sm:p-7 rounded-3xl bg-[#FAFAF8] border border-[#5C8A74]/20 shadow-xs flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#E8F0EC] text-[#5C8A74] flex items-center justify-center shrink-0">
              <Video size={24} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-[#0B2545]">
                  {p.onlineTitle}
                </h3>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#5C8A74]/15 text-[#5C8A74]">
                  Worldwide
                </span>
              </div>
              <p className="mt-1.5 text-xs sm:text-sm text-[#475569] leading-relaxed">
                {p.onlineDesc}
              </p>
            </div>
          </div>

          {/* Doorstep Delivery Card */}
          <div className="p-6 sm:p-7 rounded-3xl bg-[#FAFAF8] border border-[#5C8A74]/20 shadow-xs flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#E8F0EC] text-[#5C8A74] flex items-center justify-center shrink-0">
              <PackageCheck size={24} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-[#0B2545]">
                  {p.deliveryTitle}
                </h3>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#0B2545]/10 text-[#0B2545]">
                  Doorstep Courier
                </span>
              </div>
              <p className="mt-1.5 text-xs sm:text-sm text-[#475569] leading-relaxed">
                {p.deliveryDesc}
              </p>
            </div>
          </div>
        </div>

        {/* 4-Step Process Timeline Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {p.steps.map((stepItem, idx) => (
            <div
              key={idx}
              className="relative p-6 rounded-3xl bg-white border border-[#5C8A74]/20 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Step Number Display */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-bold font-display text-[#5C8A74]/30 group-hover:text-[#5C8A74] transition-colors">
                    {stepItem.step}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#F4F8F5] flex items-center justify-center text-[#5C8A74]">
                    <CheckCircle2 size={16} />
                  </div>
                </div>

                <h3 className="text-base font-bold text-[#0B2545] mb-2 font-display">
                  {stepItem.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  {stepItem.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-[#5C8A74] font-medium">
                <span>Step {idx + 1} of 4</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onBookClick}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-[#0B2545] hover:bg-[#133E68] shadow-md hover:shadow-lg active:scale-[0.98] transition-all cursor-pointer"
          >
            <Calendar size={16} />
            <span>Book Your Online Slot with Dr. Anamika</span>
          </button>
        </div>
      </div>
    </section>
  );
};
