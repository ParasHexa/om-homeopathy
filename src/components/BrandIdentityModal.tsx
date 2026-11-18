import React from 'react';
import { OmLogo, OmLogoIcon } from './OmLogo';
import { X, Sparkles, Check, Download, ShieldCheck, Heart } from 'lucide-react';

interface BrandIdentityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrandIdentityModal: React.FC<BrandIdentityModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B2545]/70 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-4xl my-8 bg-white rounded-3xl shadow-2xl border border-[#5C8A74]/30 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-[#0B2545] to-[#133E68] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-2xl bg-white/10">
              <OmLogoIcon size={32} isWhite />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl sm:text-2xl font-bold font-display tracking-wide">
                  OM HOMEOPATHY Brand Identity Suite
                </h3>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-[#5C8A74] text-white px-2 py-0.5 rounded-full">
                  Custom Design
                </span>
              </div>
              <p className="text-xs text-[#A8D5BA] mt-0.5">
                Sacred 'ॐ' • Healing Leaf • Balance • Clinical Medical Harmony
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X size={22} />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 bg-[#FAFAF8] text-sm">
          {/* Design Philosophy */}
          <div className="p-5 rounded-2xl bg-white border border-[#5C8A74]/20 shadow-xs">
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#5C8A74] mb-2 flex items-center gap-1.5">
              <Sparkles size={14} className="text-[#C59B27]" />
              <span>Design Concept & Medical Symbolism</span>
            </h4>
            <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
              The OM HOMEOPATHY visual identity synthesizes three fundamental concepts: the sacred <strong>'ॐ'</strong> representing universal vitality and peace, an organic <strong>healing leaf arc</strong> in soft sage green (#5C8A74) embodying natural botanicals and restoration, and a <strong>central balance point & golden bindu</strong> reflecting medical precision and holistic equilibrium.
            </p>
          </div>

          {/* Grid of Logo Variations */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#0B2545] mb-4">
              Core Logo Lockups & Formats
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* 1. Horizontal */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col items-center justify-center text-center">
                <span className="text-[11px] font-semibold text-slate-400 mb-4 uppercase tracking-wider">
                  Horizontal Lockup (Header/Web)
                </span>
                <OmLogo variant="horizontal" size="md" />
              </div>

              {/* 2. Vertical */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col items-center justify-center text-center">
                <span className="text-[11px] font-semibold text-slate-400 mb-4 uppercase tracking-wider">
                  Vertical Lockup (Badges/Plaques)
                </span>
                <OmLogo variant="vertical" size="lg" />
              </div>

              {/* 3. Icon Only */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col items-center justify-center text-center">
                <span className="text-[11px] font-semibold text-slate-400 mb-4 uppercase tracking-wider">
                  Symbol Only (Favicon & Profile)
                </span>
                <div className="p-3 rounded-full bg-[#FAFAF8] shadow-xs">
                  <OmLogoIcon size={64} />
                </div>
              </div>
            </div>
          </div>

          {/* Dark Mode / Inverted Variation */}
          <div className="p-6 rounded-2xl bg-[#0B2545] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-semibold text-[#A8D5BA] uppercase tracking-wider block mb-1">
                Inverted Monochrome on Deep Navy
              </span>
              <p className="text-xs text-slate-300">
                Optimized for signage, dark backgrounds, and embroidered physician coats.
              </p>
            </div>
            <OmLogo variant="white" size="lg" />
          </div>

          {/* Real-World Application Mockups */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#0B2545] mb-4">
              Brand Mockup Applications
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Mockup 1: Prescription Pad Header */}
              <div className="p-6 rounded-2xl bg-white border border-slate-300 shadow-sm relative">
                <div className="text-[10px] text-slate-400 uppercase tracking-widest mb-3">
                  Doctor's Prescription & Case Sheet
                </div>
                <div className="border-b-2 border-[#5C8A74] pb-4 flex items-center justify-between">
                  <OmLogo variant="horizontal" size="sm" />
                  <div className="text-right text-[10px] text-slate-600">
                    <strong className="block text-[#0B2545] text-xs">Dr. Anamika Chandegra</strong>
                    <span>B.H.M.S. & N.C.H.</span>
                    <br />
                    <span>+91 8200928769</span>
                  </div>
                </div>
                <div className="mt-4 space-y-2 text-[11px] text-slate-400">
                  <div className="flex justify-between border-b border-dashed border-slate-200 pb-1">
                    <span>Patient Name: _________________</span>
                    <span>Date: ___/___/2026</span>
                  </div>
                  <div className="pt-2 italic text-slate-400">
                    Rx: Constitutional Homeopathic Case Evaluation...
                  </div>
                </div>
              </div>

              {/* Mockup 2: Instagram / WhatsApp Profile Avatar */}
              <div className="p-6 rounded-2xl bg-white border border-slate-300 shadow-sm flex items-center gap-5">
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#0B2545] to-[#133E68] p-1 shadow-md flex items-center justify-center shrink-0">
                  <OmLogoIcon size={52} isWhite />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest">
                    Social & App Profile Avatar
                  </div>
                  <div className="text-sm font-bold text-[#0B2545] font-display mt-1">
                    OM HOMEOPATHY
                  </div>
                  <div className="text-xs text-[#5C8A74] font-medium">
                    @omhomeopathy.online
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Ideal circular profile aesthetic for WhatsApp, Instagram, and Google My Business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 bg-white border-t border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-[#5C8A74] font-medium">
            <ShieldCheck size={16} />
            <span>Fully vectorised SVG — infinitely scalable and responsive</span>
          </div>
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#0B2545] hover:bg-[#133E68] transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
