import { useId } from 'react';

interface OrcaLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showWordmark?: boolean;
  subtitle?: string;
  className?: string;
}

const SIZE_MAP = {
  sm: { box: 32, text: 'text-[16px]', sub: 'text-[9px]' },
  md: { box: 38, text: 'text-[18px]', sub: 'text-[10px]' },
  lg: { box: 44, text: 'text-[21px]', sub: 'text-[10.5px]' },
} as const;

/**
 * ORCA Brand Logo
 * Combines a sleek geometric Orca dorsal fin + wave crest with the 2-column
 * multi-warehouse hub foundation from the ORCA Console.
 */
export default function OrcaLogo({
  size = 'md',
  showWordmark = true,
  subtitle,
  className = '',
}: OrcaLogoProps) {
  const uid = useId();
  const bgId = `orca-bg-${uid}`;
  const finId = `orca-fin-${uid}`;
  const dim = SIZE_MAP[size];

  return (
    <span className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      <svg
        width={dim.box}
        height={dim.box}
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
        className="shrink-0 rounded-[10px] shadow-[0_6px_14px_rgb(15_118_110/22%)] transition-transform duration-200 group-hover:scale-[1.03]"
      >
        <defs>
          <linearGradient id={bgId} x1="3" y1="3" x2="37" y2="37" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0f766e" />
            <stop offset="58%" stopColor="#0d9488" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
          <linearGradient id={finId} x1="10" y1="8" x2="30" y2="28" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#ccfbf1" />
          </linearGradient>
        </defs>

        {/* Squircle Console Container */}
        <rect x="1.5" y="1.5" width="37" height="37" rx="10" fill={`url(#${bgId})`} />
        <rect x="2" y="2" width="36" height="36" rx="9.5" stroke="#ffffff" strokeOpacity="0.22" />

        {/* Geometric Orca Dorsal Fin + Hydrodynamic Crest */}
        <path
          d="M10.2 25.5C10.2 17.2 16.1 10.4 25.1 8.8C23.4 12.6 23.7 16.1 26.1 18.5C28.1 20.4 29.6 22.7 29.6 25.5H22.8C22.8 22.7 20.6 20.6 17.8 20.6C15.1 20.6 13.1 22.6 12.6 25.5H10.2Z"
          fill={`url(#${finId})`}
        />

        {/* Signature Orca Eye Patch (Active Dispatch Node) */}
        <rect
          x="24.2"
          y="12.5"
          width="4.4"
          height="2.6"
          rx="1.3"
          transform="rotate(-18 24.2 12.5)"
          fill="#99f6e4"
        />

        {/* Dual Foundation Hub Bars (Echoing Console 4-Grid Architecture) */}
        <rect x="10.2" y="28" width="8.8" height="2.8" rx="1.4" fill="#ffffff" fillOpacity="0.95" />
        <rect x="20.8" y="28" width="8.8" height="2.8" rx="1.4" fill="#99f6e4" fillOpacity="0.8" />
      </svg>

      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span
            className={`font-extrabold tracking-[-0.03em] text-[var(--sc-text-primary)] ${dim.text}`}
            style={{ fontFamily: 'var(--sc-font-display)' }}
          >
            ORCA
          </span>
          {subtitle && (
            <span
              className={`mt-0.5 font-mono font-semibold uppercase tracking-[0.14em] text-[var(--sc-primary)] ${dim.sub}`}
            >
              {subtitle}
            </span>
          )}
        </span>
      )}
    </span>
  );
}
