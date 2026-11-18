import React, { useState } from 'react';
import { Language } from '../types';
import { MessageCircle, X } from 'lucide-react';

interface FloatingWhatsAppProps {
  currentLang: Language;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ currentLang }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  const tooltips = {
    en: 'Chat with Dr. Anamika',
    hi: 'डॉ. अनामिका से चैट करें',
    gu: 'ડૉ. અનામિકા સાથે વાત કરો',
  };

  const prefilledMessages = {
    en: 'Hello Dr. Anamika, I would like to inquire about a consultation.',
    hi: 'नमस्ते डॉ. अनामिका, मैं होम्योपैथी परामर्श के संबंध में जानकारी चाहता/चाहती हूँ।',
    gu: 'નમસ્તે ડૉ. અનામિકા, હું હોમિયોપેથી પરામર્શ વિશે પૂછપરછ કરવા માંગુ છું.',
  };

  const handleWhatsAppClick = () => {
    const encoded = encodeURIComponent(prefilledMessages[currentLang]);
    window.open(`https://wa.me/918200928769?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip Card with status indicator */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-[#5C8A74]/20 animate-in fade-in slide-in-from-right-3 duration-200">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <div className="flex flex-col text-left">
            <span className="text-xs font-bold text-[#0B2545]">
              {tooltips[currentLang]}
            </span>
            <span className="text-[10px] text-[#5C8A74] font-semibold">
              Online • Available for Appointments
            </span>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="p-1 text-slate-400 hover:text-slate-600 ml-1 rounded-full cursor-pointer"
            aria-label="Close tooltip"
          >
            <X size={12} />
          </button>
        </div>
      )}

      {/* Main Floating Button */}
      <button
        id="floating-whatsapp-trigger"
        onClick={handleWhatsAppClick}
        aria-label="Direct WhatsApp consultation chat with Dr. Anamika Chandegra"
        className="group relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white" />
        </span>
        <MessageCircle size={28} className="transition-transform group-hover:scale-110" />
      </button>
    </div>
  );
};
