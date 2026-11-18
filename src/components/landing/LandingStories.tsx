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
    tag: 'CHƯƠNG MỞ ĐẦU · TIẾP VẬN HÀNG HÓA',
    title: 'Xe Chở Hàng Tiến Vào Kho ORCA',
    desc: 'Cuộn chuột để đưa xe hàng tiến vào cổng kho và mở khóa quy trình vận hành bên trong.',
    accentColor: '#14b8a6',
    align: 'left' as const,
    stats: [],
    cta: '',
    ctaLink: '',
    // Exterior 3/4 Isometric Panorama: Shows BOTH the Left Loading Dock Canopy & Gates AND the Front Glass Office Facade!
    cam: {
      pos: [-5.2, 4.8, 8.2] as [number, number, number],
      target: [-0.6, 0.45, 0] as [number, number, number],
    },
  },
  {
    id: 1,
    nodeCode: '01',
    stepLabel: '01 · Nhập kho & Kiểm đếm',
    tag: 'BƯỚC 01 · TRONG KHO TIẾP NHẬN',
    title: 'Kiểm Đếm Độc Lập & Ghi Hình',
    desc: 'Mái kho mở ra: hàng từ thùng xe đi qua băng chuyền quét mã, nhân viên kiểm đếm độc lập kèm video đối chứng.',
    accentColor: '#14b8a6',
    align: 'right' as const,
    stats: [
      { value: '100%', label: 'Video đối chứng' },
      { value: 'Độc lập', label: 'Kiểm đếm' },
      { value: 'Tức thì', label: 'Cập nhật tồn' },
    ],
    cta: 'Xem chi tiết',
    ctaLink: '#features',
    // Zone 1 is at [-0.6, 0, -1.75]; HUD is on RIGHT -> frame Left side
    cam: {
      pos: [-0.1, 2.35, 1.55] as [number, number, number],
      target: [-0.1, 0.25, -1.75] as [number, number, number],
    },
  },
  {
    id: 2,
    nodeCode: '02',
    stepLabel: '02 · Kệ lưu trữ cao tầng',
    tag: 'BƯỚC 02 · TRONG KHO LƯU TRỮ',
    title: 'Kệ Cao Tầng & Quản Lý Hạn Dùng',
    desc: 'Xe nâng đưa hàng vào hệ thống kệ cao tầng, tự động ưu tiên xuất các lô hàng có hạn sử dụng gần nhất trước.',
    accentColor: '#f59e0b',
    align: 'left' as const,
    stats: [
      { value: '0 Đơn', label: 'Bán quá tồn' },
      { value: 'Tự động', label: 'Ưu tiên hạn' },
      { value: 'Chính xác', label: 'Từng ô kệ' },
    ],
    cta: 'Xem chi tiết',
    ctaLink: '#features',
    // Zone 2 is at [+2.7, 0, -1.75]; HUD is on LEFT -> frame Right side
    cam: {
      pos: [2.15, 2.45, 1.55] as [number, number, number],
      target: [2.15, 0.35, -1.75] as [number, number, number],
    },
  },
  {
    id: 3,
    nodeCode: '03',
    stepLabel: '03 · Định tuyến & Đóng gói',
    tag: 'BƯỚC 03 · TRONG KHO ĐIỀU PHỐI',
    title: 'Chọn Kho Gần Nhất & Đóng Gói',
    desc: 'Tự động phân bổ đơn về kho gần người mua nhất, lấy hàng nhanh theo đợt và đóng gói, cân đo chuẩn quy cách.',
    accentColor: '#3b82f6',
    align: 'left' as const,
    stats: [
      { value: '-40%', label: 'Thời gian giao' },
      { value: 'Tối ưu', label: 'Chọn kho gần' },
      { value: '100%', label: 'Quét mã đúng' },
    ],
    cta: 'Xem chi tiết',
    ctaLink: '#features',
    // Zone 3 is at [+2.7, 0, +1.75]; HUD is on LEFT -> frame Right side
    cam: {
      pos: [2.15, 2.35, 5.15] as [number, number, number],
      target: [2.15, 0.25, 1.75] as [number, number, number],
    },
  },
  {
    id: 4,
    nodeCode: '04',
    stepLabel: '04 · Đối soát tại cửa xuất',
    tag: 'BƯỚC 04 · TRONG KHO XUẤT HÀNG',
    title: 'Đối Soát & Bàn Giao Cửa Xuất',
    desc: 'So sánh bảng cước GHN, GHTK để chọn phương án tiết kiệm nhất và ký biên bản bàn giao kiện hàng tại cửa xuất.',
    accentColor: '#10b981',
    align: 'right' as const,
    stats: [
      { value: 'Tiết kiệm', label: 'Tối ưu cước' },
      { value: 'Minh bạch', label: 'Đối soát COD' },
      { value: '48 Giờ', label: 'Kiểm hàng hoàn' },
    ],
    cta: 'Xem bảng giá',
    ctaLink: '#pricing',
    // Zone 4 is at [-0.6, 0, +1.75]; HUD is on RIGHT -> frame Left side
    cam: {
      pos: [-0.1, 2.35, 5.15] as [number, number, number],
      target: [-0.1, 0.25, 1.75] as [number, number, number],
    },
  },
  {
    id: 5,
    nodeCode: 'XUẤT KHO',
    stepLabel: '05 · Đội xe 3PL rời kho',
    tag: 'HOÀN TẤT · ĐỘI XE 3PL KHỞI HÀNH',
    title: 'Xe Vận Chuyển 3PL Rời Kho Giao Hàng',
    desc: 'Nhà kho khép lại quy trình, đội xe đối tác 3PL nối đuôi nhau rời cổng kho để giao đơn hàng đến tận tay người mua.',
    accentColor: '#10b981',
    align: 'right' as const,
    stats: [
      { value: '99.4%', label: 'Giao đúng hẹn' },
      { value: 'GHN/GHTK', label: 'Khởi hành ngay' },
      { value: 'Tự động', label: 'Báo cáo COD' },
    ],
    cta: 'Đăng ký hợp tác ngay',
    ctaLink: ADMIN_REGISTER_URL,
    // Finale: 3/4 Left-Front Isometric Exterior View watching the 3PL Trucks drive directly out of the visible Outbound Dock Doors!
    cam: {
      pos: [-5.4, 4.6, 8.0] as [number, number, number],
      target: [-1.2, 0.4, 0.6] as [number, number, number],
    },
  },
] as const;

export default function LandingStories({ theme = 'light' }: { theme?: 'light' | 'dark' }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<LandingCanvasHandle>(null);
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [inView, setInView] = useState<boolean>(false);
  const activeIdxRef = useRef<number>(0);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0,
      rootMargin: '250px 0px 250px 0px',
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

          if (progressBarRef.current) {
            const accent = SPATIAL_STOPS[stopIdx].accentColor;
            progressBarRef.current.style.width = `${p * 100}%`;
            progressBarRef.current.style.background = accent;
            progressBarRef.current.style.boxShadow = `0 0 12px ${accent}`;
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
            canvasRef.current.setAccentColor(cur.accentColor);
            canvasRef.current.setSceneIndex(stopIdx);
          }
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const currentStop = SPATIAL_STOPS[activeIdx];

  const handleJumpToStop = (idx: number) => {
    if (!containerRef.current) return;
    const stop = SPATIAL_STOPS[idx] ?? SPATIAL_STOPS[0];
    activeIdxRef.current = idx;
    setActiveIdx(idx);
    const targetProgress = (idx + 0.2) / SPATIAL_STOPS.length;
    if (canvasRef.current) {
      canvasRef.current.setScrollProgress(targetProgress);
      canvasRef.current.setCameraPos(stop.cam.pos[0], stop.cam.pos[1], stop.cam.pos[2]);
      canvasRef.current.setCameraTarget(stop.cam.target[0], stop.cam.target[1], stop.cam.target[2]);
      canvasRef.current.setAccentColor(stop.accentColor);
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
      className="relative w-full border-t border-b border-[var(--sc-border-default)]"
      style={{
        height: `${SPATIAL_STOPS.length * 85}vh`,
        background: 'radial-gradient(ellipse 80% 70% at 55% 45%, #0b1d32 0%, #050b14 100%)',
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
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 55% 50% at 58% 48%, rgba(20,184,166,0.14) 0%, transparent 72%)',
            }}
          />
          <LandingCanvas
            ref={canvasRef}
            onSelectNode={handleJumpToStop}
            paused={!inView}
            theme={theme}
          />
        </div>

        {/* STOP 0: Minimalist Prompt at Bottom */}
        {activeIdx === 0 && (
          <div className="pointer-events-none relative z-20 mx-auto flex h-full max-w-[1380px] flex-col items-center justify-end px-4 pb-8 text-center">
            <button
              type="button"
              onClick={() => handleJumpToStop(1)}
              className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-teal-400/35 bg-[#071322]/85 px-5 py-2 text-xs font-semibold text-teal-300 shadow-lg backdrop-blur-md transition-all hover:border-teal-400 hover:bg-teal-400 hover:text-slate-950 active:scale-95 cursor-pointer"
            >
              <span>Cuộn để đưa xe hàng vào kho</span>
              <span>↓</span>
            </button>
          </div>
        )}

        {/* STOPS 1-5: Compact Story HUD Card */}
        {activeIdx > 0 && (
          <div
            className={`pointer-events-none relative z-20 mx-auto flex h-full max-w-[1380px] items-center px-4 sm:px-6 lg:px-10 ${
              currentStop.align === 'right' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div className="pointer-events-auto w-full max-w-[330px] pt-8">
              <div
                key={currentStop.id}
                className="flex flex-col gap-2.5 rounded-2xl border p-4 sm:p-5 backdrop-blur-xl animate-[fadeIn_0.2s_ease-out]"
                style={{
                  background: 'rgba(6, 14, 24, 0.9)',
                  borderColor: `${currentStop.accentColor}45`,
                  boxShadow: '0 16px 36px rgba(0,0,0,0.55)',
                }}
              >
                <div className="flex items-center justify-between gap-2">
                  <span
                    className="text-[10.5px] font-bold uppercase tracking-wider"
                    style={{ color: currentStop.accentColor }}
                  >
                    {currentStop.tag}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleJumpToStop(0)}
                    className="rounded bg-white/10 px-2 py-0.5 text-[10px] font-medium text-slate-300 hover:bg-white/20 hover:text-white cursor-pointer"
                  >
                    Mở đầu
                  </button>
                </div>

                <h3
                  className="text-lg font-bold leading-snug text-white sm:text-xl"
                  style={{ fontFamily: 'var(--sc-font-display)' }}
                >
                  {currentStop.title}
                </h3>

                <p className="text-xs leading-relaxed text-slate-300">{currentStop.desc}</p>

                <div className="grid grid-cols-3 gap-1.5 border-t border-white/10 pt-2.5">
                  {currentStop.stats.map((s) => (
                    <div key={s.label} className="rounded-lg bg-white/[0.04] p-1.5 text-center">
                      <div className="text-xs font-bold" style={{ color: currentStop.accentColor }}>
                        {s.value}
                      </div>
                      <div className="mt-0.5 text-[9.5px] text-slate-400">{s.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between gap-2 pt-1">
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => handleJumpToStop(Math.max(0, activeIdx - 1))}
                      className="rounded-lg border border-white/15 bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-200 hover:bg-white/10 cursor-pointer"
                    >
                      ←
                    </button>
                    {activeIdx < SPATIAL_STOPS.length - 1 && (
                      <button
                        type="button"
                        onClick={() =>
                          handleJumpToStop(Math.min(SPATIAL_STOPS.length - 1, activeIdx + 1))
                        }
                        className="rounded-lg border border-white/15 bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-200 hover:bg-white/10 cursor-pointer"
                      >
                        →
                      </button>
                    )}
                  </div>

                  <a
                    href={currentStop.ctaLink}
                    className="inline-flex items-center gap-1 rounded-lg px-3.5 py-1.5 text-xs font-bold text-slate-950 transition-opacity hover:opacity-90"
                    style={{ background: currentStop.accentColor }}
                  >
                    <span>{currentStop.cta}</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Minimalist Side Dot Indicator */}
        {inView && (
          <nav
            aria-label="Điều hướng bước 3D"
            className="pointer-events-auto fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-2.5 rounded-full border border-white/10 bg-[#060e18]/75 p-2 backdrop-blur-md sm:flex"
          >
            {SPATIAL_STOPS.map((stop, i) => {
              const isActive = activeIdx === i;
              return (
                <button
                  key={stop.id}
                  type="button"
                  onClick={() => handleJumpToStop(i)}
                  className="group relative flex items-center justify-center p-1 cursor-pointer"
                  aria-label={stop.stepLabel}
                >
                  <span className="pointer-events-none absolute right-7 whitespace-nowrap rounded-md border border-white/10 bg-[#060e18]/90 px-2.5 py-1 text-[10.5px] font-medium text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                    {stop.stepLabel}
                  </span>
                  <span
                    className="h-2 w-2 rounded-full transition-all duration-300"
                    style={{
                      background: isActive ? stop.accentColor : 'rgba(255, 255, 255, 0.25)',
                      transform: isActive ? 'scale(1.45)' : 'scale(1)',
                      boxShadow: isActive ? `0 0 8px ${stop.accentColor}` : 'none',
                    }}
                  />
                </button>
              );
            })}
          </nav>
        )}

        {/* Bottom Progress Line */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-30 h-[3px] bg-white/10">
          <div
            ref={progressBarRef}
            className="h-full"
            style={{ width: '0%', background: SPATIAL_STOPS[0].accentColor }}
          />
        </div>
      </div>
    </section>
  );
}
