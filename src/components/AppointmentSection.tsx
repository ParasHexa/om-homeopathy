import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { TREATMENTS } from '../data/treatments';
import {
  Calendar,
  Clock,
  User,
  Phone,
  MessageCircle,
  Mail,
  ShieldCheck,
  CheckCircle2,
  Video,
} from 'lucide-react';

interface AppointmentSectionProps {
  currentLang: Language;
  preselectedTreatmentId?: string;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({
  currentLang,
  preselectedTreatmentId,
}) => {
  const t = TRANSLATIONS[currentLang];
  const a = t.appointmentSection;

  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    treatment: preselectedTreatmentId || '',
    date: '',
    timeSlot: 'Morning (10:00 AM – 1:00 PM)',
    consultationType: 'Online Video Consultation',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [emailStatus, setEmailStatus] = useState<string | null>(null);

  useEffect(() => {
    if (preselectedTreatmentId) {
      setFormData((prev) => ({ ...prev, treatment: preselectedTreatmentId }));
    }
  }, [preselectedTreatmentId]);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = a.validationErrors.name;
    }
    if (!formData.phoneNumber.trim() || formData.phoneNumber.length < 8) {
      errs.phoneNumber = a.validationErrors.phone;
    }
    if (!formData.treatment) {
      errs.treatment = a.validationErrors.treatment;
    }
    if (!formData.date) {
      errs.date = a.validationErrors.date;
    }
    if (!formData.timeSlot) {
      errs.timeSlot = a.validationErrors.time;
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const getTreatmentTitle = (id: string): string => {
    const found = TREATMENTS.find((item) => item.id === id);
    if (!found) return id;
    return found.title[currentLang];
  };

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const treatmentName = getTreatmentTitle(formData.treatment);

    const message = `Hello Dr. Anamika,

I would like to book a homeopathy consultation.

Name: ${formData.fullName}
Phone: ${formData.phoneNumber}
Treatment/Concern: ${treatmentName}
Preferred Date: ${formData.date}
Preferred Time: ${formData.timeSlot}
Consultation Type: ${formData.consultationType}

Additional Message:
${formData.message.trim() ? formData.message.trim() : 'None'}

Please let me know the appointment availability.

Thank you.`;

    const encoded = encodeURIComponent(message);
    const waUrl = `https://wa.me/918200928769?text=${encoded}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleEmailBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const treatmentName = getTreatmentTitle(formData.treatment);

    const subject = `New Homeopathy Appointment Request - ${formData.fullName}`;
    const body = `Name: ${formData.fullName}
Phone: ${formData.phoneNumber}
Treatment: ${treatmentName}
Preferred Date: ${formData.date}
Preferred Time: ${formData.timeSlot}
Consultation Type: ${formData.consultationType}
Message: ${formData.message.trim() || 'No additional message'}

Please confirm availability. Thank you.`;

    const mailtoUrl = `mailto:dranamikachandegra@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
    setEmailStatus(a.successEmailToast);
    setTimeout(() => setEmailStatus(null), 5000);
  };

  return (
    <section id="appointment" className="py-20 bg-[#FAFAF8] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E8F0EC] text-[#5C8A74] text-xs font-semibold tracking-wider uppercase mb-3">
            {a.badge}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-[#0B2545] tracking-tight">
            {a.heading}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#475569] leading-relaxed">
            {a.subheading}
          </p>
        </div>

        {/* Booking Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#5C8A74]/20 shadow-lg relative">
          {emailStatus && (
            <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm flex items-center gap-2">
              <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
              <span>{emailStatus}</span>
            </div>
          )}

          <form className="space-y-6">
            {/* Row 1: Full Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-[#0B2545] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <User size={14} className="text-[#5C8A74]" />
                  <span>{a.fullName}</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Ramesh Patel"
                  className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-all ${
                    errors.fullName
                      ? 'border-rose-400 bg-rose-50/30'
                      : 'border-slate-200 focus:border-[#5C8A74] focus:ring-2 focus:ring-[#5C8A74]/20'
                  }`}
                />
                {errors.fullName && (
                  <p className="text-xs text-rose-500 mt-1">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0B2545] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Phone size={14} className="text-[#5C8A74]" />
                  <span>{a.phoneNumber}</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  placeholder="+91 98765 43210"
                  className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-all ${
                    errors.phoneNumber
                      ? 'border-rose-400 bg-rose-50/30'
                      : 'border-slate-200 focus:border-[#5C8A74] focus:ring-2 focus:ring-[#5C8A74]/20'
                  }`}
                />
                {errors.phoneNumber && (
                  <p className="text-xs text-rose-500 mt-1">{errors.phoneNumber}</p>
                )}
              </div>
            </div>

            {/* Row 2: Treatment & Format */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-[#0B2545] uppercase tracking-wider mb-2">
                  {a.treatmentSelect}
                </label>
                <select
                  value={formData.treatment}
                  onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-all ${
                    errors.treatment
                      ? 'border-rose-400 bg-rose-50/30'
                      : 'border-slate-200 focus:border-[#5C8A74] focus:ring-2 focus:ring-[#5C8A74]/20'
                  }`}
                >
                  <option value="">{a.treatmentPlaceholder}</option>
                  {TREATMENTS.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.title[currentLang]}
                    </option>
                  ))}
                  <option value="General Homeopathic Wellbeing">
                    General Wellbeing & Other Concern
                  </option>
                </select>
                {errors.treatment && (
                  <p className="text-xs text-rose-500 mt-1">{errors.treatment}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0B2545] uppercase tracking-wider mb-2">
                  {a.consultationType}
                </label>
                <div className="py-3 px-4 rounded-xl text-xs font-semibold flex items-center justify-between border bg-[#E8F0EC]/80 border-[#5C8A74]/30 text-[#0B2545]">
                  <div className="flex items-center gap-2">
                    <Video size={16} className="text-[#5C8A74]" />
                    <span>{a.onlineOption}</span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#5C8A74] text-white">
                    100% Online
                  </span>
                </div>
              </div>
            </div>

            {/* Row 3: Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-[#0B2545] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Calendar size={14} className="text-[#5C8A74]" />
                  <span>{a.preferredDate}</span>
                </label>
                <input
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-all ${
                    errors.date
                      ? 'border-rose-400 bg-rose-50/30'
                      : 'border-slate-200 focus:border-[#5C8A74] focus:ring-2 focus:ring-[#5C8A74]/20'
                  }`}
                />
                {errors.date && (
                  <p className="text-xs text-rose-500 mt-1">{errors.date}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0B2545] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Clock size={14} className="text-[#5C8A74]" />
                  <span>{a.preferredTime}</span>
                </label>
                <select
                  value={formData.timeSlot}
                  onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-[#5C8A74] focus:ring-2 focus:ring-[#5C8A74]/20 focus:outline-none"
                >
                  <option value="Morning (10:00 AM – 1:00 PM)">
                    Morning (10:00 AM – 1:00 PM)
                  </option>
                  <option value="Afternoon (2:00 PM – 5:00 PM)">
                    Afternoon (2:00 PM – 5:00 PM)
                  </option>
                  <option value="Evening (5:00 PM – 7:30 PM)">
                    Evening (5:00 PM – 7:30 PM)
                  </option>
                </select>
              </div>
            </div>

            {/* Row 4: Message (Optional) */}
            <div>
              <label className="block text-xs font-bold text-[#0B2545] uppercase tracking-wider mb-2">
                {a.messageOptional}
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={a.messagePlaceholder}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-[#5C8A74] focus:ring-2 focus:ring-[#5C8A74]/20 focus:outline-none resize-none"
              />
            </div>

            {/* Submit Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                type="button"
                id="book-whatsapp-btn"
                onClick={handleWhatsAppBooking}
                className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#1EBE5D] active:scale-[0.98] rounded-full shadow-md transition-all cursor-pointer"
              >
                <MessageCircle size={18} />
                <span>{a.bookViaWhatsApp}</span>
              </button>

              <button
                type="button"
                id="book-email-btn"
                onClick={handleEmailBooking}
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#0B2545] bg-white hover:bg-slate-50 border border-slate-300 active:scale-[0.98] rounded-full shadow-xs transition-all cursor-pointer"
              >
                <Mail size={17} className="text-[#5C8A74]" />
                <span>{a.sendViaEmail}</span>
              </button>
            </div>

            {/* Privacy & Required Indicators */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-[#64748B]">
              <span className="flex items-center gap-1">
                <ShieldCheck size={14} className="text-[#5C8A74]" />
                <span>{a.privacyAssurance}</span>
              </span>
              <span>{a.requiredNotice}</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
