import { type MouseEvent } from 'react';

import { ArrowUpRight, CheckCircle, Cube } from '@phosphor-icons/react';
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'motion/react';

export default function LandingHero() {
  const reduceMotion = useReducedMotion();

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 120, damping: 24 });
  const smoothY = useSpring(pointerY, { stiffness: 120, damping: 24 });

  const stageX = useTransform(smoothX, [-0.5, 0.5], [-6, 6]);
  const stageY = useTransform(smoothY, [-0.5, 0.5], [-5, 5]);
  const badgeFastX = useTransform(smoothX, [-0.5, 0.5], [12, -12]);
  const badgeFastY = useTransform(smoothY, [-0.5, 0.5], [9, -9]);
  const badgeSlowX = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);
  const badgeSlowY = useTransform(smoothY, [-0.5, 0.5], [7, -7]);

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (reduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    pointerX.set((e.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section
      id="overview"
      aria-labelledby="hero-heading"
      className="relative scroll-mt-20 overflow-x-clip pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* Subtle Studio Champagne Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-[560px] max-w-[1280px]"
        style={{
          background:
            'radial-gradient(ellipse 60% 48% at 65% 22%, var(--sc-champagne-soft) 0%, transparent 72%)',
        }}
      />

      <div className="relative mx-auto max-w-[1220px] px-4 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* ── LEFT: Pure Minimalist Editorial Copy ── */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            <h1
              id="hero-heading"
              className="text-balance font-medium tracking-[-0.035em] text-[var(--sc-text-primary)]"
              style={{
                fontFamily: 'var(--sc-font-display)',
                fontSize: 'clamp(2.65rem, 5vw, 4.5rem)',
                lineHeight: 1.06,
              }}
            >
              Bạn chốt đơn.{' '}
              <span
                className="block italic font-medium text-[var(--sc-champagne)]"
                style={{ fontFamily: 'var(--sc-font-serif)', fontSize: '1.08em' }}
              >
                ORCA lo việc kho.
              </span>
            </h1>

            <p className="mt-6 max-w-[44ch] text-base font-normal leading-[1.75] text-[var(--sc-text-secondary)] sm:text-[17.5px]">
              ORCA nhận hàng, lưu kho, đóng gói và bàn giao cho hãng vận chuyển. Bạn xem được hàng
              còn trong kho, kiện đã giao và tiền thu hộ theo từng đơn.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3.5">
              <a href="#pricing" className="sc-btn-platinum group py-2.5 pl-6 pr-2.5 text-[15px]">
                <span>Xem các gói dịch vụ</span>
                <span className="sc-btn-orb group-hover:translate-x-0.5 group-hover:-translate-y-[1px]">
                  <ArrowUpRight size={14} weight="bold" aria-hidden="true" />
                </span>
              </a>

              <a href="#workflow" className="sc-btn-whisper group px-6 py-3 text-[15px]">
                <Cube
                  size={17}
                  weight="regular"
                  className="text-[var(--sc-champagne)] transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                />
                <span>Xem quy trình kho 3D</span>
              </a>
            </div>
          </motion.div>

          {/* ── RIGHT: Clean Sculptural Isometric Parcel & 3 Floating Micro-Badges ── */}
          <motion.figure
            initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: reduceMotion ? 0 : 0.1, ease: [0.22, 1, 0.36, 1] }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative m-0 lg:col-span-6"
          >
            <div className="relative mx-auto max-w-[520px] py-6">
              {/* Soft Architectural Ring Behind Sculpture */}
              <div
                aria-hidden="true"
                className="sc-atelier-grid pointer-events-none absolute inset-4 rounded-full opacity-90"
                style={{
                  maskImage: 'radial-gradient(circle at 50% 50%, black 28%, transparent 72%)',
                  WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 28%, transparent 72%)',
                }}
              />

              {/* Floating Pill 1: Real-time Stock */}
              <motion.div
                style={reduceMotion ? undefined : { x: badgeFastX, y: badgeFastY }}
                className="sc-spatial-card absolute top-2 right-2 z-20 inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-medium text-[var(--sc-text-primary)] sm:right-0"
              >
                <CheckCircle
                  size={15}
                  weight="fill"
                  className="text-[var(--sc-status-ok)]"
                  aria-hidden="true"
                />
                <span>Tồn kho: 248 đv</span>
              </motion.div>

              {/* Floating Pill 2: Waybill Tracking */}
              <motion.div
                style={reduceMotion ? undefined : { x: badgeSlowX, y: badgeSlowY }}
                className="sc-spatial-card absolute bottom-14 left-0 z-20 inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-medium text-[var(--sc-text-primary)]"
              >
                <span
                  className="h-2 w-2 rounded-full bg-[var(--sc-champagne)]"
                  aria-hidden="true"
                />
                <span style={{ fontFamily: 'var(--sc-font-mono)' }}>MVĐ · VD84920163</span>
              </motion.div>

              {/* Floating Pill 3: Net COD */}
              <motion.div
                style={reduceMotion ? undefined : { x: badgeFastX, y: badgeSlowY }}
                className="sc-spatial-card absolute right-2 bottom-4 z-20 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-[var(--sc-champagne)] sm:right-4"
              >
                <span style={{ fontFamily: 'var(--sc-font-mono)' }}>COD +652.000 đ</span>
              </motion.div>

              {/* Centerpiece Isometric Luxury Sculpture (Adapts Naturally to Light & Dark) */}
              <motion.div
                style={reduceMotion ? undefined : { x: stageX, y: stageY }}
                className="relative z-10"
              >
                <svg
                  viewBox="0 0 480 360"
                  role="img"
                  aria-labelledby="orca-sculpture-title"
                  className="block h-auto w-full drop-shadow-[0_28px_40px_rgba(0,0,0,0.16)]"
                >
                  <title id="orca-sculpture-title">
                    Minh họa kiện hàng đóng gói niêm phong trên bàn cân kiểm định ORCA
                  </title>
                  <defs>
                    <linearGradient
                      id="plinthSurface"
                      x1="90"
                      y1="175"
                      x2="390"
                      y2="305"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor="#122834" />
                      <stop offset="100%" stopColor="#09151d" />
                    </linearGradient>
                    <linearGradient
                      id="boxTopLux"
                      x1="130"
                      y1="68"
                      x2="350"
                      y2="168"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor="#f8fafc" />
                      <stop offset="100%" stopColor="#dce5ee" />
                    </linearGradient>
                    <linearGradient
                      id="boxLeftLux"
                      x1="128"
                      y1="120"
                      x2="240"
                      y2="256"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor="#d5e0ea" />
                      <stop offset="100%" stopColor="#9fb0c2" />
                    </linearGradient>
                    <linearGradient
                      id="boxRightLux"
                      x1="240"
                      y1="120"
                      x2="352"
                      y2="256"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor="#b8c7d6" />
                      <stop offset="100%" stopColor="#7c8ea3" />
                    </linearGradient>
                    <linearGradient
                      id="goldRibbonLux"
                      x1="176"
                      y1="92"
                      x2="306"
                      y2="150"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor="#6ee7b7" />
                      <stop offset="50%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#0f766e" />
                    </linearGradient>
                    <linearGradient
                      id="laserCurtain"
                      x1="240"
                      y1="44"
                      x2="240"
                      y2="168"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0.24" />
                    </linearGradient>
                  </defs>

                  {/* Sculpted Brushed-Obsidian Weighing Plinth */}
                  <polygon points="240,164 426,234 240,304 54,234" fill="url(#plinthSurface)" />
                  <polygon points="54,234 240,304 240,316 54,246" fill="#071118" />
                  <polygon points="426,234 240,304 240,316 426,246" fill="#0f212c" />
                  <polygon
                    points="240,164 426,234 240,304 54,234"
                    fill="none"
                    stroke="#10b981"
                    strokeOpacity="0.6"
                    strokeWidth="1.2"
                  />
                  <polygon
                    points="240,180 392,236 240,290 88,236"
                    fill="none"
                    stroke="#34d399"
                    strokeOpacity="0.28"
                    strokeDasharray="4 5"
                  />

                  {/* Precision Matte Alabaster Parcel */}
                  <polygon points="132,120 240,166 240,254 132,206" fill="url(#boxLeftLux)" />
                  <polygon points="348,120 240,166 240,254 348,206" fill="url(#boxRightLux)" />
                  <polygon points="240,74 348,120 240,166 132,120" fill="url(#boxTopLux)" />
                  <polyline
                    points="132,120 240,166 348,120"
                    fill="none"
                    stroke="#ffffff"
                    strokeOpacity="0.85"
                    strokeWidth="1.3"
                  />

                  {/* ORCA Emerald-Teal Security Seal */}
                  <polygon points="178,100 198,92 306,138 286,146" fill="url(#goldRibbonLux)" />
                  <polygon points="286,146 306,138 306,182 286,190" fill="#0d9488" />

                  {/* Crisp Thermal Shipping Label */}
                  <g transform="matrix(0.92, 0.39, 0, 1, 150, 148)">
                    <rect x="0" y="0" width="68" height="46" rx="3" fill="#ffffff" />
                    <rect x="6" y="6" width="24" height="4" rx="1" fill="#0f766e" />
                    <rect x="6" y="13" width="44" height="2.5" rx="1" fill="#64748b" />
                    <g fill="#0f172a" transform="translate(6, 21)">
                      <rect x="0" y="0" width="2.2" height="16" />
                      <rect x="4" y="0" width="1" height="16" />
                      <rect x="7" y="0" width="3" height="16" />
                      <rect x="12" y="0" width="1.2" height="16" />
                      <rect x="15" y="0" width="2.4" height="16" />
                      <rect x="19.5" y="0" width="1.1" height="16" />
                      <rect x="22.5" y="0" width="3.5" height="16" />
                      <rect x="28" y="0" width="1.5" height="16" />
                      <rect x="31.5" y="0" width="2.4" height="16" />
                      <rect x="36" y="0" width="3" height="16" />
                      <rect x="41" y="0" width="1.2" height="16" />
                      <rect x="44" y="0" width="2.8" height="16" />
                      <rect x="49" y="0" width="3.5" height="16" />
                    </g>
                  </g>

                  {/* Optical Emerald Laser Verification Plane */}
                  <polygon points="104,120 376,120 348,62 132,62" fill="url(#laserCurtain)" />
                  <line
                    x1="96"
                    y1="120"
                    x2="384"
                    y2="120"
                    stroke="#10b981"
                    strokeWidth="1.6"
                    strokeDasharray="5 4"
                  />
                  <circle cx="96" cy="120" r="3" fill="#10b981" />
                  <circle cx="384" cy="120" r="3" fill="#10b981" />
                </svg>
              </motion.div>
            </div>

            <figcaption className="mt-2 text-center text-xs text-[var(--sc-text-tertiary)]">
              Minh họa quy trình đóng gói
            </figcaption>
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
