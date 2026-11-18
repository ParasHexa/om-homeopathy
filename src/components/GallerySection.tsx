import React, { useState } from 'react';
import { Language, GalleryItem } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { GALLERY_ITEMS } from '../data/reviewsAndGallery';
import { Shield, Eye, X, ZoomIn } from 'lucide-react';

interface GallerySectionProps {
  currentLang: Language;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ currentLang }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'consultation' | 'treatment' | 'care' | 'stories'>('all');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const t = TRANSLATIONS[currentLang];
  const g = t.gallerySection;

  const filteredItems = activeTab === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeTab);

  return (
    <section id="gallery" className="py-20 bg-[#FAFAF8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E8F0EC] text-[#5C8A74] text-xs font-semibold tracking-wider uppercase mb-3">
            {g.badge}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-[#0B2545] tracking-tight">
            {g.heading}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#475569] leading-relaxed">
            {g.subheading}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: g.tabs.all },
            { id: 'consultation', label: g.tabs.consultation },
            { id: 'treatment', label: g.tabs.treatment },
            { id: 'care', label: g.tabs.care },
            { id: 'stories', label: g.tabs.stories },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#0B2545] text-white shadow-xs'
                  : 'bg-white text-[#475569] hover:bg-[#E8F0EC] hover:text-[#0B2545] border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => {
            const altText = item.alt[currentLang];
            const caption = item.caption[currentLang];

            return (
              <div
                key={item.id}
                onClick={() => setActiveLightboxItem(item)}
                className="group relative rounded-3xl overflow-hidden bg-white shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer border border-[#5C8A74]/20 flex flex-col"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                  <img
                    src={item.src}
                    alt={altText}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-[#0B2545]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-2">
                    <ZoomIn size={22} />
                    <span className="text-xs font-semibold">View Full</span>
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <p className="text-xs text-[#334155] leading-relaxed font-medium">
                    {caption}
                  </p>
                  <div className="mt-2 text-[10px] uppercase tracking-wider text-[#5C8A74] font-bold">
                    OM Homeopathy • {item.category}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Privacy Notice */}
        <div className="mt-10 p-4 rounded-2xl bg-white border border-[#5C8A74]/20 max-w-3xl mx-auto flex items-start gap-3">
          <Shield size={18} className="text-[#5C8A74] shrink-0 mt-0.5" />
          <p className="text-xs text-[#64748B] leading-relaxed">
            {g.privacyNotice}
          </p>
        </div>
      </div>

      {/* Full-Screen Lightbox Modal */}
      {activeLightboxItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B2545]/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveLightboxItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveLightboxItem(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
            >
              <X size={20} />
            </button>

            <div className="rounded-2xl overflow-hidden max-h-[70vh] flex items-center justify-center bg-black/5">
              <img
                src={activeLightboxItem.src}
                alt={activeLightboxItem.alt[currentLang]}
                referrerPolicy="no-referrer"
                className="max-h-[65vh] w-auto object-contain mx-auto rounded-xl"
              />
            </div>

            <div className="mt-4 px-2">
              <h4 className="text-sm font-bold text-[#0B2545]">
                {activeLightboxItem.alt[currentLang]}
              </h4>
              <p className="text-xs sm:text-sm text-[#475569] mt-1">
                {activeLightboxItem.caption[currentLang]}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
