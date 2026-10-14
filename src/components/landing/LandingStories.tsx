import { useState, useRef, useEffect, useMemo, type RefObject } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { ADMIN_LOGIN_URL } from '@/config/site';
import { useI18n } from '@/i18n/I18nContext';

import type { LandingCanvasHandle } from './LandingCanvas';

gsap.registerPlugin(ScrollTrigger);

// ── 6 Narrative Spatial Stops with Dynamic Left/Right Alternating HUD Layout ──
// • Kho bên TRÁI (Tồn Kho Mù, Rate Shopping)  -> Camera dạt sang phải, Thẻ chữ hiện bên PHẢI (align: 'right')
// • Kho bên PHẢI (Trễ Hạn, Smart Routing)      -> Camera dạt sang trái, Thẻ chữ hiện bên TRÁI (align: 'left')
// • Lõi ORCA ở GIỮA                           -> Thẻ chữ hiện bên TRÁI (align: 'left')
export const SPATIAL_STOPS = [
  {
    id: 0,
    nodeCode: 'GLOBAL',
    tag: 'TỔNG QUAN HỆ THỐNG',
    title: 'Mạng Lưới Điều Phối Đơn Hàng Đa Kho — Ba Miền',
    subtitle: 'Đồng bộ đa điểm · Tối ưu tự động',
    description: '',
    nodeBadge: '3 KHO · HÀ NỘI · ĐÀ NẴNG · TP.HCM',
    accentColor: '#00E599',
    align: 'left' as const,
    stats: [],
    hudPills: [],
    cta: '',
    ctaLink: '',
    // Initial global high-floating camera
    cam: {
      pos: [0, 7.5, 9.5] as [number, number, number],
      target: [0, 0.65, 0] as [number, number, number],
    },
  },
  {
    id: 1,
    nodeCode: 'PAIN-01',
    tag: 'NỖI ĐAU 01 · GIAO HÀNG CHẬM',
    title: 'Hàng Ở Một Nơi, Khách ở Ba Miền',
    subtitle: 'Giao liên miền 3–5 ngày · Tự đóng hàng 125 giờ/tháng',
    description:
      'Shop ở Đà Nẵng bán hàng khô cho khách Hà Nội và TP.HCM. Mỗi kiện 1 kg gửi đi mất 35.000đ và 3–5 ngày. Tối nào hai vợ chồng cũng tự đóng hàng mà khách vẫn nhận chậm và dễ gửi nhầm vì không quét mã.',
    nodeBadge: '⚠️ GIAO XA CHẬM & TỐN CÔNG ĐÓNG GÓI',
    accentColor: '#FFB800',
    align: 'right' as const, // Thẻ chữ bên PHẢI
    stats: [
      { value: '3–5 ngày', label: 'Giao liên miền' },
      { value: '35.000đ', label: 'Cước 1 kg xa' },
      { value: '125 giờ', label: 'Tự đóng hàng/tháng' },
    ],
    hudPills: [
      { icon: '📦', text: 'Hàng ở một nơi, đơn ở hai miền còn lại đều gửi xa — chậm và tốn tiền' },
      {
        icon: '⏰',
        text: 'Tự đóng hàng không quét mã dễ gửi nhầm, gửi thiếu mà không biết',
      },
    ],
    cta: 'ORCA giúp giao nhanh hơn 1–4 ngày',
    ctaLink: '#features',
    // Node ở [-2.6, 0, -2.6]. Camera nhìn sang [-1.2, ...] -> Kho nằm trọn vẹn ở nửa bên TRÁI!
    cam: {
      pos: [-1.2, 4.0, 1.4] as [number, number, number],
      target: [-1.2, 0.8, -2.6] as [number, number, number],
    },
  },
  {
    id: 2,
    nodeCode: 'PAIN-02',
    tag: 'NỖI ĐAU 02 · HÀNG HẾT HẠN',
    title: 'Hàng Có Hạn Dùng Bị Huỷ Vì Không Theo Dõi Lô',
    subtitle: 'Bán lô mới trước · Lô cũ nằm đến khi hết hạn',
    description:
      'Shop không theo dõi lô, bán hàng mới trước, lô cũ nằm lại đến khi hết hạn. Hàng đặc sản, gạo, cà phê có hạn dùng ngắn — phải huỷ càng lãng phí. Không biết lô nào đã giao cho ai để thu hồi khi có sự cố.',
    nodeBadge: '⚠️ HÀNG HẾT HẠN & KHÔNG TRUY XUẤT ĐƯỢC',
    accentColor: '#FF4444',
    align: 'left' as const, // Thẻ chữ bên TRÁI
    stats: [
      { value: 'Lãng phí', label: 'Hàng bị huỷ' },
      { value: '???', label: 'Không biết lô đã giao' },
      { value: 'Mất vốn', label: 'Không thu hồi được' },
    ],
    hudPills: [
      {
        icon: '🗓️',
        text: 'Không theo dõi lô — không biết lô nào đã giao cho ai khi cần thu hồi',
      },
      { icon: '🛢️', text: 'Hàng bị huỷ vì hết hạn là lãng phí trực tiếp cho người bán' },
    ],
    cta: 'ORCA xuất lô gần hết hạn trước',
    ctaLink: '#features',
    // Node ở [2.6, 0, -2.6]. Camera nhìn sang [1.2, ...] -> Kho nằm trọn vẹn ở nửa bên PHẢI!
    cam: {
      pos: [1.2, 4.0, 1.4] as [number, number, number],
      target: [1.2, 0.8, -2.6] as [number, number, number],
    },
  },
  {
    id: 3,
    nodeCode: 'SOL-01',
    tag: 'GIẢI PHÁP 01 · CHỌN KHO & LÔ',
    title: 'ORCA Chọn Kho Gần Nhất & Xuất Lô Theo Hạn',
    subtitle: 'FEFO — Xuất lô gần hết hạn trước · Tự tách đơn đa kho',
    description:
      'ORCA tự chọn kho gần người mua nhất và xuất lô gần hết hạn trước. Nếu một kho không đủ hàng, tự tách đơn tối đa 3 kiện từ nhiều kho và phân bổ tiền COD chính xác 0đ sai lệch. Không bao giờ xuất lô đã hết hạn hoặc đang bị thu hồi.',
    nodeBadge: '⚡ CHỌN KHO & LÔ TỐI ƯU',
    accentColor: '#A855F7',
    align: 'left' as const, // Thẻ chữ bên TRÁI
    stats: [
      { value: 'FEFO', label: 'Xuất lô đúng' },
      { value: '≤3 kiện', label: 'Tách đơn đa kho' },
      { value: '0đ', label: 'Sai lệch tiền COD' },
    ],
    hudPills: [
      { icon: '⚡', text: 'Xuất lô gần hết hạn trước — giảm hàng bị huỷ vì hết hạn' },
      { icon: '🔀', text: 'Tự tách đơn & phân bổ tiền thu hộ COD chuẩn xác tuyệt đối' },
    ],
    cta: 'Xem chi tiết cách chọn kho',
    ctaLink: '#features',
    // Node ở [2.6, 0, 2.6]. Camera nhìn sang [1.2, ...] -> Kho nằm trọn vẹn ở nửa bên PHẢI!
    cam: {
      pos: [1.2, 4.0, 6.6] as [number, number, number],
      target: [1.2, 0.8, 2.6] as [number, number, number],
    },
  },
  {
    id: 4,
    nodeCode: 'SOL-02',
    tag: 'GIẢI PHÁP 02 · CHỌN HÃNG TỰ ĐỘNG',
    title: 'ORCA Chọn Hãng & Tự Chuyển Khi Hãng Lỗi',
    subtitle: 'Tích hợp sẵn GHN, GHTK, Viettel Post, J&T',
    description:
      'Luật chọn hãng do điều phối viên ORCA đặt. Hãng lỗi mùa sale thì hệ thống tự chuyển sang hãng dự phòng — không tạo trùng vận đơn. Mọi vận đơn đều tạo bằng tài khoản ORCA, người bán không cần tài khoản riêng với hãng.',
    nodeBadge: '🔗 TỰ ĐỘNG FAILOVER HÃNG',
    accentColor: '#00B4FF',
    align: 'right' as const, // Thẻ chữ bên PHẢI
    stats: [
      { value: 'Tự động', label: 'Chuyển hãng khi lỗi' },
      { value: '4+', label: 'Hãng dự phòng' },
      { value: '0', label: 'Trùng vận đơn' },
    ],
    hudPills: [
      { icon: '💰', text: 'Người bán không cần tài khoản riêng với GHN, GHTK hay Viettel Post' },
      { icon: '🔗', text: 'Hãng lỗi thì tự failover sang hãng dự phòng — không kẹt đơn' },
    ],
    cta: 'Xem cấu hình Rule Engine',
    ctaLink: '#features',
    // Node ở [-2.6, 0, 2.6]. Camera nhìn sang [-1.2, ...] -> Kho nằm trọn vẹn ở nửa bên TRÁI!
    cam: {
      pos: [-1.2, 4.0, 6.6] as [number, number, number],
      target: [-1.2, 0.8, 2.6] as [number, number, number],
    },
  },
  {
    id: 5,
    nodeCode: 'CORE',
    tag: 'TRỌNG TÂM · TRUNG TÂM ĐIỀU PHỐI',
    title: 'ORCA: Trợ Lý Kho Vận Cho Shop Online',
    subtitle: 'Giao nhanh hơn 1–4 ngày · Không lo hàng hết hạn · Rõ tiền COD',
    description:
      'Toàn bộ chuỗi kho vận đổ về ORCA. Shop chỉ cần tạo phiếu gửi hàng và theo dõi — ORCA lo mọi việc: xếp hàng vào kệ, quét mã xuất kho, chụp ảnh kiện hàng, đối soát COD hàng tuần và chuyển khoản về tài khoản.',
    nodeBadge: '⚡ ORCA — TRUNG TÂM KHO VẬN',
    accentColor: '#00E599',
    align: 'left' as const, // Thẻ chữ bên TRÁI
    stats: [
      { value: '99.99%', label: 'Độ chính xác' },
      { value: '30s', label: 'Thời gian đối soát' },
      { value: '1M+ Dòng', label: 'Xử lý dữ liệu' },
    ],
    hudPills: [
      { icon: '🎯', text: 'Xuất lô gần hết hạn trước — giảm hàng bị huỷ, cảnh báo sắp hết hàng từng kho' },
      { icon: '📊', text: 'Báo cáo tồn kho, đơn hàng, tiền COD — xuất theo kỳ để tự kê khai thuế' },
    ],
    cta: 'Bắt đầu sử dụng ORCA',
    ctaLink: ADMIN_LOGIN_URL,
    // Center Core ở [0, 0, 0]. Camera nhìn sang [-1.4, ...] -> Lõi nằm trọn vẹn ở nửa bên PHẢI!
    cam: {
      pos: [-1.4, 3.8, 4.8] as [number, number, number],
      target: [-1.4, 0.85, 0] as [number, number, number],
    },
  },
] as const;

export default function LandingStories({
  canvasRef,
}: {
  canvasRef: RefObject<LandingCanvasHandle | null>;
}) {
  const { t } = useI18n();
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const activeIdxRef = useRef<number>(0);

  const spatialStops = useMemo(() => [
    { ...SPATIAL_STOPS[0], ...t.hero.stops.global },
    { ...SPATIAL_STOPS[1], ...t.hero.stops.pain1 },
    { ...SPATIAL_STOPS[2], ...t.hero.stops.pain2 },
    { ...SPATIAL_STOPS[3], ...t.hero.stops.sol1 },
    { ...SPATIAL_STOPS[4], ...t.hero.stops.sol2 },
    { ...SPATIAL_STOPS[5], ...t.hero.stops.core },
  ], [t.hero.stops]);

  // Use ref + direct DOM mutation instead of React state to avoid re-render on every scroll tick
  const progressBarRef = useRef<HTMLDivElement>(null);
  const currentAccentRef = useRef<string>(SPATIAL_STOPS[0].accentColor);

  useEffect(() => {
    const totalStops = SPATIAL_STOPS.length;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.1,
        onUpdate: (self) => {
          const p = self.progress;

          // Determine current spatial stop index
          const rawIdx = p * totalStops;
          const stopIdx = Math.min(Math.floor(rawIdx), totalStops - 1);

          if (activeIdxRef.current !== stopIdx) {
            activeIdxRef.current = stopIdx;
            setActiveIdx(stopIdx);
            // Update accent ref for progress bar color sync
            currentAccentRef.current = SPATIAL_STOPS[stopIdx].accentColor;
          }

          // Direct DOM mutation — zero React re-render cost
          if (progressBarRef.current) {
            const accent = SPATIAL_STOPS[stopIdx].accentColor;
            progressBarRef.current.style.width = `${p * 100}%`;
            progressBarRef.current.style.background = accent;
            progressBarRef.current.style.boxShadow = `0 0 12px ${accent}`;
          }

          // Smooth 3D Camera Drone Flight
          if (canvasRef.current) {
            const cur = SPATIAL_STOPS[stopIdx];
            const next = SPATIAL_STOPS[Math.min(stopIdx + 1, totalStops - 1)];
            const t = rawIdx - stopIdx;

            const lerp = (a: number, b: number) => a + (b - a) * t;

            canvasRef.current.setCameraPos(
              lerp(cur.cam.pos[0], next.cam.pos[0]),
              lerp(cur.cam.pos[1], next.cam.pos[1]),
              lerp(cur.cam.pos[2], next.cam.pos[2]),
            );
            canvasRef.current.setCameraTarget(
              lerp(cur.cam.target[0], next.cam.target[0]),
              lerp(cur.cam.target[1], next.cam.target[1]),
              lerp(cur.cam.target[2], next.cam.target[2]),
            );
            canvasRef.current.setAccentColor(cur.accentColor);
            canvasRef.current.setSceneIndex(stopIdx);
          }
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [canvasRef]);

  const currentStop = spatialStops[activeIdx] ?? spatialStops[0];

  const handleJumpToStop = (idx: number) => {
    if (!containerRef.current) return;
    const totalH = containerRef.current.scrollHeight - window.innerHeight;
    const targetY = containerRef.current.offsetTop + (idx / SPATIAL_STOPS.length) * totalH + 10;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  return (
    <div
      id="story-container"
      ref={containerRef}
      className="relative w-full pointer-events-none"
      style={{ height: `${SPATIAL_STOPS.length * 85}vh` }}
    >
      {/* ── Sticky Fullscreen Viewport ───────────────────────────────────── */}
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden pointer-events-none">
        {/* ── STOP 0: Clean 3D Hero View with Floating Action Guide ───────── */}
        {activeIdx === 0 && (
          <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 relative z-20 pointer-events-none flex flex-col items-center justify-end pb-8 sm:pb-10 h-full">
            <div className="flex flex-col items-center gap-2.5 text-center animate-fadeIn pointer-events-auto">
              <div
                className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[11px] font-mono font-bold text-emerald-400 border border-emerald-500/30"
                style={{
                  background: 'rgba(2,44,28,0.9)',
                  boxShadow: '0 0 25px rgba(0,229,153,0.2)',
                }}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>{t.hero.systemBadge}</span>
              </div>

              <h1
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400 tracking-tight"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {t.hero.exploreTitle}
              </h1>

              <p className="text-[11px] sm:text-xs text-slate-300 font-mono flex items-center gap-2">
                <span>🖱️</span>
                <span>{t.hero.exploreHint}</span>
              </p>

              {/* Bouncing scroll prompt */}
              <button
                type="button"
                onClick={() => handleJumpToStop(1)}
                className="mt-1 flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-slate-300 hover:text-white border border-white/15 cursor-pointer transition-colors"
                style={{ background: 'rgba(255,255,255,0.06)' }}
              >
                <span>{t.hero.startTour}</span>
                <span>↓</span>
              </button>
            </div>
          </div>
        )}

        {/* ── STOPS 1-5: AR Spatial Inspector HUD (Alternating Left / Right) ── */}
        {activeIdx > 0 && (
          <div
            className={`w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 relative z-20 pointer-events-none flex ${
              currentStop.align === 'right' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div className="w-full sm:max-w-[430px] lg:max-w-[460px] pt-16 sm:pt-14 md:pt-16 pointer-events-auto">
              <div
                key={currentStop.id}
                className="flex flex-col gap-3 sm:gap-3.5 p-4 sm:p-5 sm:p-6 rounded-2xl border transition-[border-color,box-shadow] duration-300 animate-fadeIn max-h-[78vh] overflow-y-auto"
                style={{
                  background: 'rgba(5, 11, 20, 0.92)',
                  borderColor: `${currentStop.accentColor}35`,
                  boxShadow: `0 0 30px ${currentStop.accentColor}12, 0 16px 40px rgba(0,0,0,0.6)`,
                }}
              >
                {/* Header: Node Code + Chapter Tag */}
                <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-2.5">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full animate-pulse"
                      style={{ background: currentStop.accentColor }}
                    />
                    <span
                      className="text-[10.5px] font-mono font-bold tracking-[0.2em] uppercase"
                      style={{ color: currentStop.accentColor }}
                    >
                      {currentStop.tag}
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold text-slate-300 bg-white/10 border border-white/10">
                    {currentStop.nodeCode}
                  </span>
                </div>

                {/* Title */}
                <h2
                  className="text-xl sm:text-[1.8rem] lg:text-[1.95rem] font-bold text-white leading-[1.18] tracking-tight"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {currentStop.title}
                </h2>

                {/* Subtitle Accent */}
                <div
                  className="text-xs sm:text-[13px] font-semibold tracking-wide font-mono"
                  style={{ color: currentStop.accentColor }}
                >
                  {currentStop.subtitle}
                </div>

                {/* Description Paragraph */}
                <p
                  className="text-xs sm:text-[13px] leading-relaxed text-slate-300 font-normal"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {currentStop.description}
                </p>

                {/* Tactical HUD Pills */}
                <div className="flex flex-col gap-2 pt-0.5">
                  {currentStop.hudPills.map((pill) => (
                    <div
                      key={pill.text}
                      className="flex items-start gap-2.5 px-3 py-2 rounded-lg border"
                      style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        borderColor: 'rgba(255, 255, 255, 0.08)',
                      }}
                    >
                      <span className="text-sm shrink-0">{pill.icon}</span>
                      <span className="text-[11.5px] sm:text-xs text-slate-300 leading-snug">
                        {pill.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Stats Row */}
                <div className="flex items-center justify-between pt-2 border-t border-white/10">
                  {currentStop.stats.map((s) => (
                    <div key={s.label} className="text-center">
                      <div
                        className="text-lg sm:text-xl font-bold font-mono tracking-tight"
                        style={{ color: currentStop.accentColor }}
                      >
                        {s.value}
                      </div>
                      <div className="text-[9px] sm:text-[9.5px] text-slate-400 uppercase tracking-wider font-mono mt-0.5">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <div className="pt-0.5">
                  <a
                    href={currentStop.ctaLink}
                    className="group flex items-center justify-center gap-2.5 w-full py-2.5 rounded-xl font-bold text-xs tracking-wider uppercase transition-opacity duration-200 active:scale-[0.98]"
                    style={{
                      background: currentStop.accentColor,
                      color: '#050B14',
                      boxShadow: `0 0 25px ${currentStop.accentColor}55`,
                    }}
                  >
                    <span>{currentStop.cta}</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── Fixed Bottom/Side Neon Scroll Progress Bar (DOM-mutated, zero React cost) ── */}
      <div
        className="fixed bottom-0 left-0 right-0 h-[3px] z-50 pointer-events-none"
        style={{ background: 'rgba(255, 255, 255, 0.06)' }}
      >
        <div
          ref={progressBarRef}
          className="h-full"
          style={{
            width: '0%',
            background: SPATIAL_STOPS[0].accentColor,
          }}
        />
      </div>

      {/* ── Dot Navigation: bottom-center on mobile, right-side on sm+ ───── */}
      <nav
        aria-label="Spatial Tour Navigation"
        className="fixed bottom-5 sm:bottom-auto left-1/2 sm:left-auto -translate-x-1/2 sm:translate-x-0 sm:right-6 md:right-10 sm:top-1/2 sm:-translate-y-1/2 flex flex-row sm:flex-col gap-2.5 sm:gap-3 z-50 p-2 sm:p-2.5 rounded-full backdrop-blur-md border border-white/10 pointer-events-auto"
        style={{ background: 'rgba(5, 11, 20, 0.65)' }}
      >
        {SPATIAL_STOPS.map((stop, i) => {
          const isActive = activeIdx === i;
          return (
            <button
              key={stop.id}
              type="button"
              onClick={() => handleJumpToStop(i)}
              className="group relative flex items-center justify-center p-1 cursor-pointer"
              aria-label={`Jump to ${stop.nodeCode}`}
            >
              {/* Tooltip Label on hover — hidden on mobile, shown right on sm+ */}
              <span className="hidden sm:block absolute right-8 px-2.5 py-1 rounded-md text-[10px] font-mono font-semibold text-white bg-[#050B14]/90 border border-white/15 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
                {stop.nodeCode}: {stop.tag}
              </span>

              {/* Dot indicator */}
              <span
                className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300"
                style={{
                  background: isActive ? stop.accentColor : 'rgba(255, 255, 255, 0.25)',
                  transform: isActive ? 'scale(1.5)' : 'scale(1)',
                  boxShadow: isActive ? `0 0 10px ${stop.accentColor}` : 'none',
                }}
              />
            </button>
          );
        })}
      </nav>
    </div>
  );
}
