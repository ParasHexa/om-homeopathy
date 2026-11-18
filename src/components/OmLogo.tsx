import React from 'react';

interface OmLogoProps {
  variant?: 'horizontal' | 'vertical' | 'icon-only' | 'badge' | 'white';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  className?: string;
  doctorCredentials?: boolean;
}

export const OmLogoIcon: React.FC<{
  size?: number;
  className?: string;
  isWhite?: boolean;
}> = ({ size = 42, className = '', isWhite = false }) => {
  const navyColor = isWhite ? '#FFFFFF' : '#0B2545';
  const sageColor = isWhite ? '#A8D5BA' : '#5C8A74';
  const accentGold = isWhite ? '#F6D89B' : '#C59B27';
  const ringColor = isWhite ? 'rgba(255,255,255,0.2)' : 'rgba(92, 138, 116, 0.25)';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 transition-transform duration-300 ${className}`}
      aria-label="OM Homeopathy Medical Healing Symbol"
    >
      {/* Outer sanctuary healing circle */}
      <circle
        cx="50"
        cy="50"
        r="46"
        stroke={ringColor}
        strokeWidth="2"
        strokeDasharray="2 3"
      />
      <circle
        cx="50"
        cy="50"
        r="42"
        stroke={sageColor}
        strokeWidth="2.5"
        strokeOpacity="0.8"
      />

      {/* Subtle background healing quadrant glow */}
      <circle cx="50" cy="50" r="38" fill={isWhite ? 'rgba(255,255,255,0.06)' : 'rgba(92,138,116,0.06)'} />

      {/* Botanical Healing Leaf Arc embracing the symbol */}
      <path
        d="M 18 50 C 18 72, 36 86, 54 86 C 42 84, 28 72, 28 52 C 28 36, 40 24, 52 18 C 30 24, 18 36, 18 50 Z"
        fill={sageColor}
        opacity="0.88"
      />
      {/* Leaf stem vein delicate line */}
      <path
        d="M 22 56 Q 32 68 46 80"
        stroke={isWhite ? '#FFFFFF' : '#FFFFFF'}
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.6"
      />

      {/* Sacred Om (ॐ) in modern medical geometry */}
      {/* Upper left curve */}
      <path
        d="M 40 38 C 34 33, 40 26, 49 26 C 58 26, 61 33, 56 40 C 52 44, 46 45, 43 45"
        stroke={navyColor}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Lower full sweeping curve */}
      <path
        d="M 43 45 C 53 45, 66 49, 64 61 C 62 72, 47 75, 38 68 C 32 63, 33 54, 38 49"
        stroke={navyColor}
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Right tail ascending gracefully into healing leaf balance */}
      <path
        d="M 54 48 C 66 46, 75 54, 76 68 C 77 75, 74 80, 71 82"
        stroke={sageColor}
        strokeWidth="3.6"
        strokeLinecap="round"
      />

      {/* Top crescent & healing bindu (dewdrop) */}
      <path
        d="M 64 24 C 68 28, 77 28, 81 24"
        stroke={navyColor}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="72.5" cy="18" r="3.2" fill={accentGold} />

      {/* Subtle medical balance cross intersection */}
      <g opacity="0.85">
        <path d="M 48 49 L 52 49" stroke={sageColor} strokeWidth="2" strokeLinecap="round" />
        <path d="M 50 47 L 50 51" stroke={sageColor} strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  );
};

export const OmLogo: React.FC<OmLogoProps> = ({
  variant = 'horizontal',
  size = 'md',
  showTagline = true,
  className = '',
  doctorCredentials = false,
}) => {
  const isWhite = variant === 'white';

  const iconSizes = {
    sm: 32,
    md: 44,
    lg: 58,
    xl: 80,
  };

  if (variant === 'icon-only') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <OmLogoIcon size={iconSizes[size]} isWhite={isWhite} />
      </div>
    );
  }

  if (variant === 'badge') {
    return (
      <div className={`inline-flex items-center gap-3 p-2 rounded-2xl bg-white/90 border border-[#5C8A74]/20 shadow-sm ${className}`}>
        <OmLogoIcon size={iconSizes[size]} isWhite={false} />
        <div className="flex flex-col text-left">
          <span className="font-bold text-[#0B2545] tracking-wider text-sm font-display">
            OM HOMEOPATHY
          </span>
          <span className="text-[11px] font-medium text-[#5C8A74] tracking-widest uppercase">
            Healing & Counselling
          </span>
        </div>
      </div>
    );
  }

  if (variant === 'vertical') {
    return (
      <div className={`flex flex-col items-center text-center gap-2 ${className}`}>
        <OmLogoIcon size={iconSizes[size]} isWhite={isWhite} />
        <div className="flex flex-col items-center">
          <span
            className={`font-bold tracking-wider font-display leading-tight ${
              isWhite ? 'text-white' : 'text-[#0B2545]'
            } ${size === 'lg' || size === 'xl' ? 'text-2xl' : 'text-lg'}`}
          >
            OM HOMEOPATHY
          </span>
          {showTagline && (
            <span
              className={`text-xs font-medium tracking-[0.2em] uppercase mt-0.5 ${
                isWhite ? 'text-[#A8D5BA]' : 'text-[#5C8A74]'
              }`}
            >
              Healing & Counselling
            </span>
          )}
          {doctorCredentials && (
            <span
              className={`text-[11px] mt-1 font-medium ${
                isWhite ? 'text-white/80' : 'text-[#334155]'
              }`}
            >
              Dr. Anamika Chandegra • B.H.M.S. & N.C.H.
            </span>
          )}
        </div>
      </div>
    );
  }

  // Default: Horizontal version for header / cards
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <OmLogoIcon size={iconSizes[size]} isWhite={isWhite} />
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-bold tracking-[0.08em] font-display transition-colors ${
              isWhite ? 'text-white' : 'text-[#0B2545]'
            } ${
              size === 'sm'
                ? 'text-base'
                : size === 'md'
                ? 'text-lg md:text-xl'
                : 'text-2xl'
            }`}
          >
            OM HOMEOPATHY
          </span>
        </div>
        {showTagline && (
          <span
            className={`text-[10px] md:text-[11px] font-semibold tracking-[0.18em] uppercase mt-1 ${
              isWhite ? 'text-[#A8D5BA]' : 'text-[#5C8A74]'
            }`}
          >
            Healing & Counselling
          </span>
        )}
      </div>
    </div>
  );
};
