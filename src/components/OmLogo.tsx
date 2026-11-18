import React from 'react';

interface OmLogoProps {
  variant?: 'horizontal' | 'vertical' | 'icon-only' | 'badge' | 'white';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  className?: string;
  doctorCredentials?: boolean;
}

export const OmLogoIcon: React.FC<{ size?: number; isWhite?: boolean; className?: string }> = ({
  size = 44,
  isWhite = false,
  className = '',
}) => {
  // Crops the circular OM symbol from the full logo image (log.jpeg, ~1600x640)
  const k = size / 390;
  return (
    <span
      className={`inline-block overflow-hidden shrink-0 ${isWhite ? 'bg-white rounded-full' : ''} ${className}`}
      style={{ width: size, height: size, position: 'relative' }}
    >
      <img
        src="/log.jpeg"
        alt="OM Homeopathy"
        style={{ position: 'absolute', width: 1600 * k, maxWidth: 'none', left: -228 * k, top: -118 * k }}
      />
    </span>
  );
};

export const OmLogo: React.FC<OmLogoProps> = ({ variant = 'horizontal', size = 'md', className = '' }) => {
  // Visible logo height (white padding in log.jpeg is cropped away)
  const heights = { sm: 54, md: 76, lg: 99, xl: 135 };
  if (variant === 'icon-only') {
    return <OmLogoIcon size={heights[size]} className={className} />;
  }
  const isWhite = variant === 'white';
  const h = heights[size] * (variant === 'vertical' ? 1.3 : 1);
  // Logo content spans ~x 230-1390, y 120-505 of the 1600x640 image
  const k = h / 385;
  return (
    <span
      className={`inline-block overflow-hidden select-none shrink-0 ${isWhite ? 'bg-white rounded-xl' : ''} ${className}`}
      style={{ position: 'relative', height: h, width: 1160 * k }}
    >
      <img
        src="/log.jpeg"
        alt="OM Homeopathy"
        className="mix-blend-multiply"
        style={{ position: 'absolute', maxWidth: 'none', width: 1600 * k, left: -230 * k, top: -120 * k }}
      />
    </span>
  );
};
