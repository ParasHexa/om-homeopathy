import React, { useState } from 'react';
import { Language, ReviewItem } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { REVIEWS } from '../data/reviewsAndGallery';
import {
  Star,
  ChevronLeft,
  ChevronRight,
  MessageSquarePlus,
  ShieldCheck,
  X,
  CheckCircle,
} from 'lucide-react';

interface PatientReviewsProps {
  currentLang: Language;
}

export const PatientReviews: React.FC<PatientReviewsProps> = ({ currentLang }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    treatment: '',
    rating: 5,
    type: 'Online',
    review: '',
  });

  const t = TRANSLATIONS[currentLang];
  const r = t.reviewsSection;

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowModal(false);
      setFormData({ name: '', treatment: '', rating: 5, type: 'Online', review: '' });
    }, 2000);
  };

  return (
    <section id="reviews" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E8F0EC] text-[#5C8A74] text-xs font-semibold tracking-wider uppercase mb-3">
              {r.badge}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-[#0B2545] tracking-tight">
              {r.heading}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#475569] max-w-2xl">
              {r.subheading}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-[#0B2545] bg-[#E8F0EC] hover:bg-[#d8e6de] transition-colors cursor-pointer"
            >
              <MessageSquarePlus size={16} className="text-[#5C8A74]" />
              <span>{r.shareBtn}</span>
            </button>

            {/* Carousel Navigation Buttons */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={prevReview}
                className="p-2.5 rounded-full border border-slate-200 hover:bg-slate-50 text-[#0B2545] transition-colors cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={nextReview}
                className="p-2.5 rounded-full border border-slate-200 hover:bg-slate-50 text-[#0B2545] transition-colors cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[0, 1, 2].map((offset) => {
            const index = (currentIndex + offset) % REVIEWS.length;
            const rev: ReviewItem = REVIEWS[index];
            const isCenter = offset === 0;

            return (
              <div
                key={rev.id}
                className={`p-6 sm:p-7 rounded-3xl transition-all duration-300 flex flex-col justify-between ${
                  isCenter
                    ? 'bg-[#FAFAF8] border-2 border-[#5C8A74]/30 shadow-md ring-1 ring-[#5C8A74]/20'
                    : 'bg-white border border-slate-200/80 shadow-xs hidden md:flex'
                }`}
              >
                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-[#C59B27]">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="#C59B27" stroke="none" />
                      ))}
                    </div>
                    <span className="text-[11px] font-semibold text-[#5C8A74] bg-[#E8F0EC] px-2.5 py-0.5 rounded-full">
                      {rev.consultationType}
                    </span>
                  </div>

                  {/* Treatment Category Tag */}
                  <div className="text-xs font-semibold text-[#0B2545] mb-2 font-display">
                    {rev.treatment[currentLang]}
                  </div>

                  {/* Review text */}
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed italic">
                    "{rev.comment[currentLang]}"
                  </p>
                </div>

                {/* Patient Initials & Date */}
                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#0B2545] text-white flex items-center justify-center text-xs font-bold font-display">
                      {rev.name.split(' ').length > 1
                        ? rev.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
                        : rev.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#0B2545]">
                        {rev.name}
                      </div>
                      <div className="text-[10px] text-slate-400">
                        {rev.date}
                      </div>
                    </div>
                  </div>
                  <span title="Verified Consultation">
                    <ShieldCheck size={16} className="text-[#5C8A74]" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ethical Transparency Disclaimer */}
        <div className="mt-8 text-center text-xs text-[#64748B] max-w-xl mx-auto">
          <p>{r.disclaimer}</p>
        </div>
      </div>

      {/* Share Experience Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B2545]/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-5 right-5 p-1.5 rounded-full text-slate-400 hover:text-slate-700"
            >
              <X size={20} />
            </button>

            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <CheckCircle size={48} className="mx-auto text-[#5C8A74]" />
                <h3 className="text-lg font-bold text-[#0B2545]">
                  {r.successMsg}
                </h3>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold font-display text-[#0B2545]">
                    {r.modalTitle}
                  </h3>
                  <p className="text-xs text-[#64748B] mt-1">
                    {r.modalSubtitle}
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0B2545] mb-1">
                    {r.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Priya M."
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#5C8A74]/50"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#0B2545] mb-1">
                      {r.treatmentLabel}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.treatment}
                      onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                      placeholder="e.g. Acidity, Allergy"
                      className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#5C8A74]/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0B2545] mb-1">
                      {r.typeLabel}
                    </label>
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#5C8A74]/50"
                    >
                      <option value="Online">Online Video Consultation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0B2545] mb-1">
                    {r.reviewLabel}
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={formData.review}
                    onChange={(e) => setFormData({ ...formData, review: e.target.value })}
                    placeholder="Share how Dr. Anamika's consultation and counselling helped you..."
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#5C8A74]/50 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-full text-sm font-semibold text-white bg-[#0B2545] hover:bg-[#133E68] transition-colors cursor-pointer"
                >
                  {r.submitBtn}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
