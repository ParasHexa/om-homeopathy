import React, { useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { FAQS } from '../data/reviewsAndGallery';
import { Search, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';

interface FaqSectionProps {
  currentLang: Language;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ currentLang }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-2']);

  const t = TRANSLATIONS[currentLang];
  const f = t.faqSection;

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = FAQS.filter((faq) => {
    const q = faq.question[currentLang].toLowerCase();
    const a = faq.answer[currentLang].toLowerCase();
    const query = searchQuery.toLowerCase().trim();
    return !query || q.includes(query) || a.includes(query);
  });

  return (
    <section id="faq" className="py-20 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E8F0EC] text-[#5C8A74] text-xs font-semibold tracking-wider uppercase mb-3">
            {f.badge}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-[#0B2545] tracking-tight">
            {f.heading}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#475569] leading-relaxed">
            {f.subheading}
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8 max-w-xl mx-auto">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={f.searchPlaceholder}
            className="w-full pl-11 pr-4 py-3 text-sm rounded-full bg-[#FAFAF8] border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#5C8A74]/50 transition-all text-[#162534]"
          />
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            const question = faq.question[currentLang];
            const answer = faq.answer[currentLang];

            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-colors border ${
                  isOpen
                    ? 'bg-[#FAFAF8] border-[#5C8A74]/30 shadow-xs'
                    : 'bg-white border-slate-200/80 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-[#0B2545] cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{question}</span>
                  <span className="p-1 rounded-full text-[#5C8A74] bg-[#E8F0EC]/60 shrink-0">
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-slate-100">
                    {answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Ask Doctor CTA */}
        <div className="mt-12 text-center p-6 rounded-3xl bg-[#E8F0EC]/50 border border-[#5C8A74]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-[#0B2545]">
              {f.needMoreHelp}
            </h4>
            <p className="text-xs text-[#64748B] mt-0.5">
              Connect directly with Dr. Anamika on WhatsApp for quick guidance.
            </p>
          </div>

          <a
            href="https://wa.me/918200928769?text=Hello%20Dr.%20Anamika%2C%20I%20have%20a%20question%20regarding%20homeopathy%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-[#0B2545] hover:bg-[#133E68] transition-colors shrink-0 shadow-xs"
          >
            <MessageCircle size={15} />
            <span>{f.askDoctorBtn}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
