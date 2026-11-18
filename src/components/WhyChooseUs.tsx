import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import {
  UserCheck,
  Sparkles,
  HeartHandshake,
  Video,
  History,
  MessageCircle,
} from 'lucide-react';

interface WhyChooseUsProps {
  currentLang: Language;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];
  const w = t.whyChooseSection;

  const cardIcons = [
    <UserCheck key="1" size={24} className="text-[#5C8A74]" />,
    <Sparkles key="2" size={24} className="text-[#5C8A74]" />,
    <HeartHandshake key="3" size={24} className="text-[#5C8A74]" />,
    <Video key="4" size={24} className="text-[#5C8A74]" />,
    <History key="5" size={24} className="text-[#5C8A74]" />,
    <MessageCircle key="6" size={24} className="text-[#5C8A74]" />,
  ];

  return (
    <section className="py-20 bg-[#F4F8F5]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E8F0EC] text-[#5C8A74] text-xs font-semibold tracking-wider uppercase mb-3">
            {w.badge}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-[#0B2545] tracking-tight">
            {w.heading}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#475569] leading-relaxed">
            {w.subheading}
          </p>
        </div>

        {/* 6 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {w.cards.map((card, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white border border-[#5C8A74]/15 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#E8F0EC] flex items-center justify-center mb-4">
                  {cardIcons[idx]}
                </div>
                <h3 className="text-base font-bold text-[#0B2545] mb-2 font-display">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  {card.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1 text-[11px] text-[#5C8A74] font-medium">
                <span>Personalised standard of care</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
