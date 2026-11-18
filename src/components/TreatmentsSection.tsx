import React, { useState } from 'react';
import { Language, TreatmentItem } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { TREATMENTS } from '../data/treatments';
import { TreatmentDetailModal } from './TreatmentDetailModal';
import {
  ThermometerSnowflake,
  Wind,
  Activity,
  Sparkles,
  Feather,
  Zap,
  ShieldAlert,
  HeartHandshake,
  Smile,
  Moon,
  Clock,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

interface TreatmentsSectionProps {
  currentLang: Language;
  onBookTreatment: (treatmentId: string) => void;
}

export const TreatmentsSection: React.FC<TreatmentsSectionProps> = ({
  currentLang,
  onBookTreatment,
}) => {
  const [selectedTreatment, setSelectedTreatment] = useState<TreatmentItem | null>(null);
  const t = TRANSLATIONS[currentLang];
  const tr = t.treatmentsSection;

  const renderIcon = (iconName: string) => {
    const props = { size: 22, className: 'text-[#5C8A74]' };
    switch (iconName) {
      case 'ThermometerSnowflake':
        return <ThermometerSnowflake {...props} />;
      case 'Wind':
        return <Wind {...props} />;
      case 'Activity':
        return <Activity {...props} />;
      case 'Sparkles':
        return <Sparkles {...props} />;
      case 'Feather':
        return <Feather {...props} />;
      case 'Zap':
        return <Zap {...props} />;
      case 'ShieldAlert':
        return <ShieldAlert {...props} />;
      case 'HeartHandshake':
        return <HeartHandshake {...props} />;
      case 'Smile':
        return <Smile {...props} />;
      case 'Moon':
        return <Moon {...props} />;
      case 'Clock':
        return <Clock {...props} />;
      default:
        return <Activity {...props} />;
    }
  };

  return (
    <section id="treatments" className="py-20 bg-[#FAFAF8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E8F0EC] text-[#5C8A74] text-xs font-semibold tracking-wider uppercase mb-3">
            {tr.badge}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-[#0B2545] tracking-tight">
            {tr.heading}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#475569] leading-relaxed">
            {tr.subheading}
          </p>
        </div>

        {/* 11 Treatment Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TREATMENTS.map((item) => {
            const title = item.title[currentLang];
            const shortDesc = item.shortDescription[currentLang];

            return (
              <div
                key={item.id}
                className="group relative flex flex-col justify-between bg-white rounded-2xl p-6 border border-[#5C8A74]/15 shadow-xs hover:shadow-md hover:border-[#5C8A74]/40 transition-all duration-300"
              >
                <div>
                  {/* Icon & Category Indicator */}
                  <div className="w-12 h-12 rounded-xl bg-[#F4F8F5] border border-[#5C8A74]/20 flex items-center justify-center mb-4 group-hover:bg-[#E8F0EC] transition-colors">
                    {renderIcon(item.iconName)}
                  </div>

                  <h3 className="text-lg font-bold font-display text-[#0B2545] leading-snug group-hover:text-[#133E68] transition-colors">
                    {title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-[#64748B] leading-relaxed line-clamp-3">
                    {shortDesc}
                  </p>
                </div>

                {/* Card Action */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedTreatment(item)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5C8A74] group-hover:text-[#0B2545] transition-colors cursor-pointer"
                  >
                    <span>{tr.learnMore}</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => onBookTreatment(item.id)}
                    className="text-[11px] font-medium text-slate-400 hover:text-[#0B2545] transition-colors"
                  >
                    Book Consultation
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Responsible Medical Note */}
        <div className="mt-10 max-w-2xl mx-auto text-center p-3.5 rounded-2xl bg-white/60 border border-[#5C8A74]/20 text-xs text-[#64748B] flex items-center justify-center gap-2">
          <ShieldCheck size={16} className="text-[#5C8A74] shrink-0" />
          <span>{tr.disclaimerSnippet}</span>
        </div>
      </div>

      {/* Modal View for detailed condition information */}
      <TreatmentDetailModal
        treatment={selectedTreatment}
        currentLang={currentLang}
        onClose={() => setSelectedTreatment(null)}
        onBookTreatment={onBookTreatment}
      />
    </section>
  );
};
