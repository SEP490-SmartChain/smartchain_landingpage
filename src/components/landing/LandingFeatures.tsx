import { useI18n } from '@/i18n/I18nContext';

// Feature base structure — 5 intentional cells, gapless bento 2+3 layout
const FEATURE_SLOTS = [
  {
    id: 'f1' as const,
    span: 'col-span-1 md:col-span-2 row-span-2',
    accent: '#00E599',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <rect x="6" y="16" width="14" height="18" rx="2" stroke="#00E599" strokeWidth="1.5" />
        <rect x="28" y="16" width="14" height="18" rx="2" stroke="#00E599" strokeWidth="1.5" />
        <path d="M20 24h8M24 20v8" stroke="#00E599" strokeWidth="1.5" strokeLinecap="round" />
        <path
          d="M13 16V10M35 16V10M13 10h22"
          stroke="#00E599"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: 'f2' as const,
    span: 'col-span-1',
    accent: '#00b4ff',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <circle cx="24" cy="24" r="16" stroke="#00b4ff" strokeWidth="1.5" />
        <path
          d="M24 14v10l6 4"
          stroke="#00b4ff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 'f3' as const,
    span: 'col-span-1',
    accent: '#a855f7',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <path
          d="M8 24h8l4-8 8 16 4-8h8"
          stroke="#a855f7"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 'f4' as const,
    span: 'col-span-1 md:col-span-2',
    accent: '#f59e0b',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <rect x="8" y="8" width="32" height="32" rx="4" stroke="#f59e0b" strokeWidth="1.5" />
        <path
          d="M16 24h16M16 18h10M16 30h12"
          stroke="#f59e0b"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="36" cy="36" r="6" fill="#050B14" stroke="#f59e0b" strokeWidth="1.5" />
        <path
          d="M34 36l1.5 1.5L38 34"
          stroke="#f59e0b"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
] as const;

export default function LandingFeatures() {
  const { t } = useI18n();

  const features = [
    { ...FEATURE_SLOTS[0], ...t.features.items.f1 },
    { ...FEATURE_SLOTS[1], ...t.features.items.f2 },
    { ...FEATURE_SLOTS[2], ...t.features.items.f3 },
    { ...FEATURE_SLOTS[3], ...t.features.items.f4 },
  ];

  return (
    <section
      className="py-16 md:py-24 lg:py-32 px-4 md:px-8 lg:px-16 max-w-[1400px] mx-auto"
      id="features-grid"
    >
      {/* Section header */}
      <div className="mb-10 md:mb-16 max-w-2xl">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-white leading-tight mb-4"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {t.features.heading}
          <br />
          <span style={{ color: '#00E599' }}>{t.features.headingHighlight}</span>
        </h2>
        <p className="text-gray-400 leading-relaxed max-w-[52ch]">
          {t.features.subheading}
        </p>
      </div>

      {/* Gapless bento — 2 col desktop, 1 col mobile, grid-flow-dense */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(200px,auto)]"
        style={{ gridAutoFlow: 'dense' }}
      >
        {features.map((feat) => (
          <article
            key={feat.id}
            className={`group relative overflow-hidden rounded-2xl ${feat.span}`}
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
              contain: 'layout',
            }}
          >
            {/* Outer shell — double bezel technique */}
            <div
              className="absolute inset-[1px] rounded-[calc(1rem-1px)] overflow-hidden"
              style={{ background: 'rgba(5,11,20,0.7)' }}
            >
              {/* Inner highlight */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.07)',
                }}
              />
            </div>

            {/* Content */}
            <div className="relative z-10 p-5 sm:p-6 md:p-8 flex flex-col h-full">
              {/* Accent glow blob — isolated on its own compositor layer */}
              <div
                className="absolute -top-10 -left-10 w-44 h-44 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: `radial-gradient(circle, ${feat.accent}22 0%, transparent 70%)`,
                  willChange: 'opacity',
                }}
              />

              {/* Icon */}
              <div className="mb-5 relative">{feat.icon}</div>

              {/* Title */}
              <h3
                className="text-xl font-bold text-white mb-3 tracking-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {feat.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-400 leading-relaxed flex-1">{feat.desc}</p>

              {/* Tag */}
              {feat.tag && (
                <div className="mt-6 self-start">
                  <span
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      background: `${feat.accent}18`,
                      color: feat.accent,
                      border: `1px solid ${feat.accent}30`,
                    }}
                  >
                    {feat.tag}
                  </span>
                </div>
              )}

              {/* Hover shimmer line */}
              <div
                className="absolute bottom-0 left-8 right-8 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(90deg, transparent, ${feat.accent}88, transparent)`,
                }}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
