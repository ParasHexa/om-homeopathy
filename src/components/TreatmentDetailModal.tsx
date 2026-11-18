import React from 'react';
import { Language, TreatmentItem } from '../types';
import { TRANSLATIONS } from '../data/translations';
import {
  X,
  Calendar,
  AlertTriangle,
  HelpCircle,
  Stethoscope,
  ListChecks,
  Compass,
  ArrowRight,
} from 'lucide-react';

interface TreatmentDetailModalProps {
  treatment: TreatmentItem | null;
  currentLang: Language;
  onClose: () => void;
  onBookTreatment: (treatmentId: string) => void;
}

export const TreatmentDetailModal: React.FC<TreatmentDetailModalProps> = ({
  treatment,
  currentLang,
  onClose,
  onBookTreatment,
}) => {
  if (!treatment) return null;

  const t = TRANSLATIONS[currentLang];
  const m = t.treatmentModal;

  const title = treatment.title[currentLang];
  const overview = treatment.overview[currentLang];
  const symptoms = treatment.symptoms[currentLang] || [];
  const approach = treatment.consultationApproach[currentLang];
  const expectations = treatment.expectations[currentLang];
  const whenToSeekUrgentCare = treatment.whenToSeekUrgentCare[currentLang];
  const faqs = treatment.faqs || [];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-[#0B2545]/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-treatment-title"
    >
      <div className="relative w-full max-w-3xl my-8 bg-white rounded-3xl shadow-2xl border border-[#5C8A74]/20 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header Strip */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-[#F4F8F5] via-[#FAFAF8] to-white border-b border-[#5C8A74]/15 flex items-start justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#5C8A74] uppercase tracking-wider mb-1.5">
              <Stethoscope size={14} />
              <span>Personalised Homeopathic Consultation</span>
            </span>
            <h3
              id="modal-treatment-title"
              className="text-xl sm:text-2xl md:text-3xl font-bold font-display text-[#0B2545]"
            >
              {title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#64748B] hover:text-[#0B2545] hover:bg-slate-100 transition-colors cursor-pointer shrink-0"
            aria-label="Close modal"
          >
            <X size={22} />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm sm:text-base text-[#334155]">
          {/* Overview */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#5C8A74] mb-2 flex items-center gap-1.5">
              <Compass size={15} />
              <span>{m.overview}</span>
            </h4>
            <p className="leading-relaxed bg-[#FAFAF8] p-4 rounded-2xl border border-[#5C8A74]/15 text-[#162534]">
              {overview}
            </p>
          </div>

          {/* Common Symptoms */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#5C8A74] mb-2.5 flex items-center gap-1.5">
              <ListChecks size={15} />
              <span>{m.commonSymptoms}</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {symptoms.map((symptom, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80 text-xs sm:text-sm text-[#334155]"
                >
                  <span className="w-2 h-2 rounded-full bg-[#5C8A74] mt-1.5 shrink-0" />
                  <span>{symptom}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Our Consultation Approach & What To Expect */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-[#F4F8F5] border border-[#5C8A74]/20">
              <h4 className="text-xs uppercase tracking-wider font-bold text-[#0B2545] mb-2">
                {m.ourApproach}
              </h4>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                {approach}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAFAF8] border border-slate-200">
              <h4 className="text-xs uppercase tracking-wider font-bold text-[#0B2545] mb-2">
                {m.whatToExpect}
              </h4>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                {expectations}
              </p>
            </div>
          </div>

          {/* Urgent Medical Attention Disclaimer Callout */}
          <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-950 flex items-start gap-3">
            <AlertTriangle size={20} className="text-amber-600 shrink-0 mt-0.5" />
            <div className="text-xs leading-relaxed">
              <strong className="block font-bold text-amber-900 mb-0.5">
                {m.urgentNoticeTitle}
              </strong>
              {whenToSeekUrgentCare}
            </div>
          </div>

          {/* Specific FAQs for this condition */}
          {faqs.length > 0 && (
            <div>
              <h4 className="text-xs uppercase tracking-wider font-bold text-[#5C8A74] mb-2.5 flex items-center gap-1.5">
                <HelpCircle size={15} />
                <span>{m.faqTitle}</span>
              </h4>
              <div className="space-y-2">
                {faqs.map((faqItem, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm"
                  >
                    <p className="font-semibold text-[#0B2545]">
                      {faqItem.q[currentLang]}
                    </p>
                    <p className="text-[#475569] mt-1 leading-relaxed">
                      {faqItem.a[currentLang]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Educational Disclaimer */}
          <p className="text-[11px] text-slate-500 italic pt-2 border-t border-slate-200">
            {m.educationalNotice}
          </p>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#64748B] hover:text-[#0B2545] transition-colors"
          >
            Close
          </button>

          <button
            onClick={() => {
              onBookTreatment(treatment.id);
              onClose();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#0B2545] hover:bg-[#133E68] active:scale-[0.98] rounded-full shadow-md transition-all cursor-pointer"
          >
            <Calendar size={16} />
            <span>{m.bookCta}</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </div>
  );
};
