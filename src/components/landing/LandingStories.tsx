import { useState, useRef, useEffect } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { ADMIN_REGISTER_URL } from '@/config/site';

import LandingCanvas, { type LandingCanvasHandle } from './LandingCanvas';

gsap.registerPlugin(ScrollTrigger);

export const SPATIAL_STOPS = [
  {
    id: 0,
    nodeCode: 'MỞ ĐẦU',
    stepLabel: '00 · Xe tiến vào kho',
    tag: 'MỞ ĐẦU',
    title: 'Xe Chở Hàng Tiến Vào Kho ORCA',
    desc: 'Cuộn chuột để đưa xe hàng vào cổng kho và mở ra quy trình bên trong.',
    accentColor: '#f5b942',
    lightAccent: '#c4841d',
    align: 'left' as const,
    stats: [],
    cta: '',
    ctaLink: '',
    cam: {
      pos: [-5.2, 4.8, 8.2] as [number, number, number],
      target: [-0.6, 0.45, 0] as [number, number, number],
    },
  },
  {
    id: 1,
    nodeCode: '01',
    stepLabel: '01 · Nhập kho & Kiểm đếm',
    tag: 'BƯỚC 01 · TIẾP NHẬN',
    title: 'Kiểm Đếm & Ghi Hình Độc Lập',
    desc: 'Hàng qua băng chuyền quét mã, kiểm đếm thực nhận kèm video đối chứng.',
    accentColor: '#f5b942',
    lightAccent: '#c4841d',
    align: 'right' as const,
    stats: [
      { value: 'Độc lập', label: 'Kiểm đếm' },
      { value: 'Đối chứng', label: 'Phiếu nhập' },
      { value: 'Tức thì', label: 'Khớp tồn' },
    ],
    cta: 'Xem chi tiết',
    ctaLink: '#features',
    cam: {
      pos: [-0.1, 2.35, 1.55] as [number, number, number],
      target: [-0.1, 0.25, -1.75] as [number, number, number],
    },
  },
  {
    id: 2,
    nodeCode: '02',
    stepLabel: '02 · Kệ lưu trữ cao tầng',
    tag: 'BƯỚC 02 · LƯU KỆ',
    title: 'Kệ Cao Tầng & Ưu Tiên Hạn Dùng',
    desc: 'Định danh từng ô kệ và tự động ưu tiên xuất lô hết hạn sớm trước.',
    accentColor: '#fb923c',
    lightAccent: '#c2590c',
    align: 'left' as const,
    stats: [
      { value: 'Chuẩn lô', label: 'Tách kệ' },
      { value: 'FEFO', label: 'Ưu tiên hạn' },
      { value: 'Chính xác', label: 'Ô lưu trữ' },
    ],
    cta: 'Xem chi tiết',
    ctaLink: '#features',
    cam: {
      pos: [2.15, 2.45, 1.55] as [number, number, number],
      target: [2.15, 0.35, -1.75] as [number, number, number],
    },
  },
  {
    id: 3,
    nodeCode: '03',
    stepLabel: '03 · Định tuyến & Đóng gói',
    tag: 'BƯỚC 03 · ĐÓNG GÓI',
    title: 'Điều Phối Đa Kho & Đóng Kiện',
    desc: 'Chọn kho phù hợp, lấy hàng theo đợt và cân đo, niêm phong chuẩn quy cách.',
    accentColor: '#38bdf8',
    lightAccent: '#0369a1',
    align: 'left' as const,
    stats: [
      { value: 'Đa kho', label: 'Điều phối' },
      { value: 'Cân đo', label: 'Chuẩn kiện' },
      { value: 'Quét mã', label: 'Đúng SKU' },
    ],
    cta: 'Xem chi tiết',
    ctaLink: '#features',
    cam: {
      pos: [2.15, 2.35, 5.15] as [number, number, number],
      target: [2.15, 0.25, 1.75] as [number, number, number],
    },
  },
  {
    id: 4,
    nodeCode: '04',
    stepLabel: '04 · Đối soát tại cửa xuất',
    tag: 'BƯỚC 04 · CỬA XUẤT',
    title: 'Đối Soát & Bàn Giao Hãng Vận Chuyển',
    desc: 'Tách bạch cước theo từng kiện và ký biên bản bàn giao trực tiếp tại cửa xuất.',
    accentColor: '#34d399',
    lightAccent: '#047857',
    align: 'right' as const,
    stats: [
      { value: 'Theo kiện', label: 'Tính cước' },
      { value: 'Minh bạch', label: 'Đối soát COD' },
      { value: 'Ảnh chụp', label: 'Hàng hoàn' },
    ],
    cta: 'Xem bảng giá',
    ctaLink: '#pricing',
    cam: {
      pos: [-0.1, 2.35, 5.15] as [number, number, number],
      target: [-0.1, 0.25, 1.75] as [number, number, number],
    },
  },
  {
    id: 5,
    nodeCode: 'XUẤT KHO',
    stepLabel: '05 · Đội xe 3PL rời kho',
    tag: 'HOÀN TẤT · XUẤT BẾN',
    title: 'Đội Xe 3PL Rời Kho Giao Hàng',
    desc: 'Đội xe đối tác rời cổng kho giao kiện tận tay người mua và cập nhật mã vận đơn.',
    accentColor: '#f5b942',
    lightAccent: '#c4841d',
    align: 'right' as const,
    stats: [
      { value: '3PL', label: 'Bàn giao' },
      { value: 'Vận đơn', label: 'Tra cứu ngay' },
      { value: 'Tuần', label: 'Bảng kê COD' },
    ],
    cta: 'Đăng ký ngay',
    ctaLink: ADMIN_REGISTER_URL,
    cam: {
      pos: [-5.4, 4.6, 8.0] as [number, number, number],
      target: [-1.2, 0.4, 0.6] as [number, number, number],
    },
  },
] as const;

export default function LandingStories({ theme = 'dark' }: { theme?: 'light' | 'dark' }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<LandingCanvasHandle>(null);
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [inView, setInView] = useState<boolean>(false);
  const activeIdxRef = useRef<number>(0);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const themeRef = useRef<'light' | 'dark'>(theme);

  const isLight = theme === 'light';

  useEffect(() => {
    themeRef.current = theme;
    const stop = SPATIAL_STOPS[activeIdxRef.current] ?? SPATIAL_STOPS[0];
    const resolvedAccent = theme === 'light' ? stop.lightAccent : stop.accentColor;
    if (progressBarRef.current) {
      progressBarRef.current.style.background = resolvedAccent;
      progressBarRef.current.style.boxShadow = `0 0 14px ${resolvedAccent}`;
    }
    canvasRef.current?.setAccentColor(resolvedAccent);
  }, [theme]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0,
      rootMargin: '180px 0px 180px 0px',
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

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
          const rawIdx = p * totalStops;
          const stopIdx = Math.min(Math.floor(rawIdx), totalStops - 1);

          if (activeIdxRef.current !== stopIdx) {
            activeIdxRef.current = stopIdx;
            setActiveIdx(stopIdx);
          }

          const stop = SPATIAL_STOPS[stopIdx];
          const accent = themeRef.current === 'light' ? stop.lightAccent : stop.accentColor;

          if (progressBarRef.current) {
            progressBarRef.current.style.width = `${p * 100}%`;
            progressBarRef.current.style.background = accent;
            progressBarRef.current.style.boxShadow = `0 0 14px ${accent}`;
          }

          if (canvasRef.current) {
            canvasRef.current.setScrollProgress(p);

            const cur = SPATIAL_STOPS[stopIdx];
            const next = SPATIAL_STOPS[Math.min(stopIdx + 1, totalStops - 1)];
            const rawT = rawIdx - stopIdx;
            const easeWindow = rawT < 0.8 ? 0 : (rawT - 0.8) / 0.2;
            const t = easeWindow * easeWindow * (3 - 2 * easeWindow);
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
            canvasRef.current.setAccentColor(accent);
            canvasRef.current.setSceneIndex(stopIdx);
          }
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const currentStop = SPATIAL_STOPS[activeIdx];
  const currentAccent = isLight ? currentStop.lightAccent : currentStop.accentColor;

  const handleJumpToStop = (idx: number) => {
    if (!containerRef.current) return;
    const stop = SPATIAL_STOPS[idx] ?? SPATIAL_STOPS[0];
    const accent = isLight ? stop.lightAccent : stop.accentColor;
    activeIdxRef.current = idx;
    setActiveIdx(idx);
    const targetProgress = (idx + 0.2) / SPATIAL_STOPS.length;
    if (canvasRef.current) {
      canvasRef.current.setScrollProgress(targetProgress);
      canvasRef.current.setCameraPos(stop.cam.pos[0], stop.cam.pos[1], stop.cam.pos[2]);
      canvasRef.current.setCameraTarget(stop.cam.target[0], stop.cam.target[1], stop.cam.target[2]);
      canvasRef.current.setAccentColor(accent);
      canvasRef.current.setSceneIndex(idx);
    }
    const totalH = containerRef.current.scrollHeight - window.innerHeight;
    const targetY = containerRef.current.offsetTop + targetProgress * totalH;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  return (
    <section
      id="workflow"
      aria-label="Hành trình đơn hàng 3D tại Trung tâm Kho ORCA"
      ref={containerRef}
      className="relative w-full border-t border-b border-[var(--sc-border-strong)]"
      style={{
        height: `${SPATIAL_STOPS.length * 85}vh`,
        // High-Contrast Showroom Spotlight Stage: Crisp Sunlit Gallery in Light, Luminous Studio Stage in Dark
        background: isLight
          ? 'radial-gradient(ellipse 68% 58% at 54% 48%, #ffffff 0%, #e7e1d4 62%, #d8d0c0 100%)'
          : 'radial-gradient(ellipse 66% 58% at 54% 48%, #20273b 0%, #10131d 58%, #08090e 100%)',
      }}
    >
      {/* Sticky Fullscreen 3D Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            contain: 'strict',
            visibility: inView ? 'visible' : 'hidden',
            pointerEvents: inView ? 'auto' : 'none',
          }}
        >
          {/* Focused Gold-Emerald Studio Key Halo Behind 3D Model */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: isLight
                ? 'radial-gradient(ellipse 52% 46% at 56% 48%, rgba(245, 185, 66, 0.22) 0%, rgba(16, 185, 129, 0.08) 45%, transparent 72%)'
                : 'radial-gradient(ellipse 52% 46% at 56% 48%, rgba(245, 185, 66, 0.2) 0%, rgba(52, 211, 153, 0.1) 45%, transparent 72%)',
            }}
          />
          <LandingCanvas
            ref={canvasRef}
            onSelectNode={handleJumpToStop}
            paused={!inView}
            theme={theme}
          />
        </div>

        {/* STOP 0: High-Contrast Prompt Pill */}
        {activeIdx === 0 && (
          <div className="pointer-events-none relative z-20 mx-auto flex h-full max-w-[1380px] flex-col items-center justify-end px-4 pb-10 text-center">
            <button
              type="button"
              onClick={() => handleJumpToStop(1)}
              className="sc-btn-platinum pointer-events-auto px-6 py-2.5 text-xs"
            >
              <span>Cuộn để đưa xe hàng vào kho</span>
              <span>↓</span>
            </button>
          </div>
        )}

        {/* STOPS 1-5: Clean, Concise Story HUD Card */}
        {activeIdx > 0 && (
          <div
            className={`pointer-events-none relative z-20 mx-auto flex h-full max-w-[1380px] items-center px-4 sm:px-6 lg:px-10 ${
              currentStop.align === 'right' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div className="pointer-events-auto w-full max-w-[320px] pt-8">
              <div
                key={currentStop.id}
                className="sc-spatial-card flex flex-col gap-2.5 p-5 animate-[fadeIn_0.2s_ease-out]"
                style={{
                  borderColor: `${currentAccent}66`,
                }}
              >
                <div className="flex items-center justify-between gap-2">
                  <span
                    className="text-[10px] font-semibold uppercase tracking-[0.16em]"
                    style={{ color: currentAccent, fontFamily: 'var(--sc-font-mono)' }}
                  >
                    {currentStop.tag}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleJumpToStop(0)}
                    className="cursor-pointer rounded-full border border-[var(--sc-border-default)] bg-[var(--sc-bg-recessed)] px-2.5 py-0.5 text-[10px] font-medium text-[var(--sc-text-secondary)] hover:text-[var(--sc-text-primary)]"
                  >
                    Mở đầu
                  </button>
                </div>

                <h3
                  className="text-lg font-semibold leading-snug text-[var(--sc-text-primary)]"
                  style={{ fontFamily: 'var(--sc-font-display)' }}
                >
                  {currentStop.title}
                </h3>

                <p className="text-xs leading-relaxed text-[var(--sc-text-secondary)]">
                  {currentStop.desc}
                </p>

                <div className="grid grid-cols-3 gap-1.5 border-t border-[var(--sc-border-default)] pt-2.5">
                  {currentStop.stats.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-lg bg-[var(--sc-bg-recessed)]/80 p-1.5 text-center"
                    >
                      <div
                        className="text-[11px] font-semibold"
                        style={{ color: currentAccent, fontFamily: 'var(--sc-font-mono)' }}
                      >
                        {s.value}
                      </div>
                      <div className="mt-0.5 text-[9.5px] text-[var(--sc-text-tertiary)]">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between gap-2 pt-1">
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => handleJumpToStop(Math.max(0, activeIdx - 1))}
                      className="cursor-pointer rounded-full border border-[var(--sc-border-default)] bg-[var(--sc-bg-surface)] px-2.5 py-1 text-xs font-medium text-[var(--sc-text-primary)] hover:border-[var(--sc-champagne)]"
                    >
                      ←
                    </button>
                    {activeIdx < SPATIAL_STOPS.length - 1 && (
                      <button
                        type="button"
                        onClick={() =>
                          handleJumpToStop(Math.min(SPATIAL_STOPS.length - 1, activeIdx + 1))
                        }
                        className="cursor-pointer rounded-full border border-[var(--sc-border-default)] bg-[var(--sc-bg-surface)] px-2.5 py-1 text-xs font-medium text-[var(--sc-text-primary)] hover:border-[var(--sc-champagne)]"
                      >
                        →
                      </button>
                    )}
                  </div>

                  <a href={currentStop.ctaLink} className="sc-btn-platinum px-3.5 py-1.5 text-xs">
                    <span>{currentStop.cta}</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contained Side Step Indicator */}
        <nav
          aria-label="Điều hướng bước 3D"
          className="sc-spatial-card pointer-events-auto absolute right-5 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-2.5 rounded-full p-2 sm:flex"
        >
          {SPATIAL_STOPS.map((stop, i) => {
            const isActive = activeIdx === i;
            const dotAccent = isLight ? stop.lightAccent : stop.accentColor;
            return (
              <button
                key={stop.id}
                type="button"
                onClick={() => handleJumpToStop(i)}
                className="group relative flex cursor-pointer items-center justify-center p-1"
                aria-label={stop.stepLabel}
              >
                <span className="sc-spatial-card pointer-events-none absolute right-8 whitespace-nowrap rounded-lg px-2.5 py-1 text-[10.5px] font-medium text-[var(--sc-text-primary)] opacity-0 transition-opacity group-hover:opacity-100">
                  {stop.stepLabel}
                </span>
                <span
                  className="h-2 w-2 rounded-full transition-all duration-300"
                  style={{
                    background: isActive
                      ? dotAccent
                      : isLight
                        ? 'rgba(20, 21, 25, 0.25)'
                        : 'rgba(255, 255, 255, 0.28)',
                    transform: isActive ? 'scale(1.5)' : 'scale(1)',
                    boxShadow: isActive ? `0 0 10px ${dotAccent}` : 'none',
                  }}
                />
              </button>
            );
          })}
        </nav>

        {/* Bottom Vivid Progress Line */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-30 h-[3px] bg-[var(--sc-border-default)]">
          <div
            ref={progressBarRef}
            className="h-full"
            style={{ width: '0%', background: currentAccent }}
          />
        </div>
      </div>
    </section>
  );
}
