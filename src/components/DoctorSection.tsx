import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { Heart, Activity, UserCheck, ShieldCheck, Quote } from 'lucide-react';

interface DoctorSectionProps {
  currentLang: Language;
  onBookClick: () => void;
}

export const DoctorSection: React.FC<DoctorSectionProps> = ({
  currentLang,
  onBookClick,
}) => {
  const t = TRANSLATIONS[currentLang];
  const doc = t.doctorSection;

  const pillarIcons = [
    <UserCheck key="1" size={20} className="text-[#5C8A74]" />,
    <Activity key="2" size={20} className="text-[#5C8A74]" />,
    <Heart key="3" size={20} className="text-[#5C8A74]" />,
    <ShieldCheck key="4" size={20} className="text-[#5C8A74]" />,
  ];

  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Doctor Clinical Portrait & Aesthetics */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              {/* Subtle background card accent */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#E8F0EC] to-[#F7F9F7] -rotate-2 -z-10 shadow-xs" />

              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#5C8A74]/20 bg-white">
                <img
                  src="/dr_anamika_chandegra.jpeg"
                  alt="Dr. Anamika Chandegra (B.H.M.S. & N.C.H.)"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover max-h-[500px]"
                />

                {/* Doctor Bio Overlay Card at Bottom */}
                <div className="p-5 bg-gradient-to-t from-[#0B2545] via-[#0B2545]/90 to-transparent text-white absolute bottom-0 left-0 right-0">
                  <div className="text-xl font-bold font-display tracking-tight">
                    {doc.doctorName}
                  </div>
                  <div className="text-sm text-[#A8D5BA] font-semibold mt-0.5">
                    {doc.credentials}
                  </div>
                  <p className="text-xs text-slate-200 mt-1">
                    Homeopathic Physician & Counsellor
                  </p>
                </div>
              </div>

              {/* Serene Clinical Quote Badge */}
              <div className="mt-4 p-4 rounded-2xl bg-[#FAFAF8] border border-[#5C8A74]/20 flex items-start gap-3">
                <Quote size={24} className="text-[#5C8A74] shrink-0 opacity-80" />
                <p className="text-xs italic text-[#334155] leading-relaxed">
                  {doc.quote}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Core Healing Pillars */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8F0EC] text-[#5C8A74] text-xs font-semibold tracking-wider uppercase mb-3 w-fit">
              {doc.badge}
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-[#0B2545] tracking-tight">
              {doc.heading}
            </h2>

            <p className="text-base sm:text-lg text-[#5C8A74] font-medium mt-2">
              {doc.subheading}
            </p>

            {/* Paragraphs */}
            <div className="mt-6 space-y-4 text-sm sm:text-base text-[#475569] leading-relaxed">
              {doc.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* 4 Pillars of Clinical Practice */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {doc.pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#FAFAF8] border border-[#5C8A74]/15 hover:border-[#5C8A74]/40 transition-colors"
                >
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <div className="p-1.5 rounded-lg bg-white shadow-xs">
                      {pillarIcons[idx % pillarIcons.length]}
                    </div>
                    <h3 className="text-sm font-bold text-[#0B2545]">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Consultation CTA */}
            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={onBookClick}
                className="px-6 py-3 rounded-full text-sm font-semibold text-white bg-[#0B2545] hover:bg-[#133E68] shadow-xs active:scale-[0.98] transition-all cursor-pointer"
              >
                Book a Consultation with Dr. Anamika
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
