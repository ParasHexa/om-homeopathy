import React from 'react';
import { Language } from '../types';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  className?: string;
  isCompact?: boolean;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  currentLang,
  onLanguageChange,
  className = '',
  isCompact = false,
}) => {
  const languages: Array<{ code: Language; label: string; nativeName: string }> = [
    { code: 'en', label: 'EN', nativeName: 'English' },
    { code: 'hi', label: 'हिंदी', nativeName: 'Hindi' },
    { code: 'gu', label: 'ગુજરાતી', nativeName: 'Gujarati' },
  ];

  return (
    <div
      className={`inline-flex items-center p-1 rounded-full bg-[#EAEFE9]/70 border border-[#5C8A74]/20 shadow-xs ${className}`}
      role="group"
      aria-label="Language selector"
    >
      <div className="pl-2 pr-1 text-[#5C8A74] hidden sm:flex items-center">
        <Globe size={14} className="opacity-80" />
      </div>

      <div className="flex items-center gap-0.5">
        {languages.map((lang) => {
          const isActive = currentLang === lang.code;
          return (
            <button
              key={lang.code}
              id={`lang-btn-${lang.code}`}
              onClick={() => onLanguageChange(lang.code)}
              title={lang.nativeName}
              className={`px-2.5 py-1 text-xs md:text-[13px] font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-[#0B2545] text-white shadow-xs'
                  : 'text-[#162534]/80 hover:text-[#0B2545] hover:bg-white/60'
              }`}
            >
              {isCompact ? lang.label : lang.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
