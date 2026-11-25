import { useEffect, useState } from 'react';

import { ArrowUpRight, Moon, Sun } from '@phosphor-icons/react';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from 'motion/react';

import { ADMIN_LOGIN_URL, ADMIN_REGISTER_URL } from '@/config/site';

const NAV_LINKS = [
  { label: 'Quy trình 3D', href: '#workflow' },
  { label: 'Đối chứng', href: '#features' },
  { label: 'Gói dịch vụ', href: '#pricing' },
] as const;

interface LandingNavProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export default function LandingNav({ theme, onToggleTheme }: LandingNavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const next = latest > 36;
    setScrolled((prev) => (prev === next ? prev : next));
  });

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4 sm:top-6">
        <div
          className={`pointer-events-auto sc-luxury-nav flex w-full items-center justify-between gap-4 rounded-full transition-all duration-500 ${
            scrolled ? 'h-13 max-w-[960px] px-4' : 'h-15 max-w-[1220px] px-5 sm:px-6'
          }`}
        >
          {/* Minimalist Luxury Wordmark (Devialet / Polestar Poise) */}
          <a
            href="/"
            className="flex items-center gap-2.5 text-sm font-semibold tracking-[0.26em] text-[var(--sc-text-primary)] uppercase"
          >
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[var(--sc-champagne)]" />
            <span>ORCA</span>
          </a>

          <nav
            aria-label="Điều hướng chính"
            onMouseLeave={() => setHovered(null)}
            className="hidden items-center gap-1 md:flex"
          >
            {NAV_LINKS.map((link) => {
              const active = hovered === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onMouseEnter={() => setHovered(link.href)}
                  className="relative whitespace-nowrap rounded-full px-4 py-1.5 text-[13.5px] font-normal text-[var(--sc-text-secondary)] transition-colors duration-200 hover:text-[var(--sc-text-primary)]"
                >
                  {active && !reduceMotion && (
                    <motion.span
                      layoutId="orca-champagne-nav"
                      transition={{ type: 'spring', stiffness: 320, damping: 30 }}
                      className="absolute inset-0 -z-10 rounded-full bg-[var(--sc-champagne-soft)]"
                    />
                  )}
                  <span>{link.label}</span>
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={onToggleTheme}
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-[var(--sc-border-default)] text-[var(--sc-text-secondary)] transition-colors hover:border-[var(--sc-champagne)] hover:text-[var(--sc-text-primary)]"
              aria-label={
                theme === 'dark' ? 'Chuyển sang giao diện Sáng' : 'Chuyển sang giao diện Tối'
              }
              title={theme === 'dark' ? 'Chế độ Sáng' : 'Chế độ Tối'}
            >
              {theme === 'dark' ? (
                <Sun size={15} weight="regular" aria-hidden="true" />
              ) : (
                <Moon size={15} weight="regular" aria-hidden="true" />
              )}
            </button>

            <a
              href={ADMIN_LOGIN_URL}
              className="hidden whitespace-nowrap px-3 py-1.5 text-[13.5px] font-normal text-[var(--sc-text-secondary)] transition-colors hover:text-[var(--sc-text-primary)] sm:inline-flex"
            >
              Đăng nhập
            </a>

            <a
              href={ADMIN_REGISTER_URL}
              className="sc-btn-platinum group whitespace-nowrap py-1.5 pl-4 pr-1.5 text-[13px]"
            >
              <span>Tạo tài khoản</span>
              <span className="sc-btn-orb !h-6 !w-6 group-hover:translate-x-0.5 group-hover:-translate-y-[1px]">
                <ArrowUpRight size={13} weight="bold" aria-hidden="true" />
              </span>
            </a>

            <button
              type="button"
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-[var(--sc-border-default)] text-[var(--sc-text-primary)] md:hidden"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'Đóng điều hướng' : 'Mở điều hướng'}
              aria-expanded={menuOpen}
              aria-controls="mobile-luxury-drawer"
            >
              <span
                className="relative flex h-3 w-3.5 flex-col items-center justify-center"
                aria-hidden="true"
              >
                <span
                  className={`absolute h-[1px] w-3.5 bg-current transition-transform duration-300 ${
                    menuOpen ? 'translate-y-0 rotate-45' : '-translate-y-1'
                  }`}
                />
                <span
                  className={`absolute h-[1px] w-3.5 bg-current transition-transform duration-300 ${
                    menuOpen ? 'translate-y-0 -rotate-45' : 'translate-y-1'
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-luxury-drawer"
            key="mobile-nav"
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-4 top-22 z-40 mx-auto max-w-md md:hidden"
          >
            <nav aria-label="Điều hướng di động" className="sc-luxury-card flex flex-col gap-1 p-5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between rounded-xl px-3.5 py-3 text-base font-medium text-[var(--sc-text-primary)] transition-colors hover:bg-[var(--sc-bg-recessed)]"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight
                    size={15}
                    className="text-[var(--sc-champagne)]"
                    aria-hidden="true"
                  />
                </a>
              ))}

              <div className="mt-3 grid grid-cols-2 gap-2.5 border-t border-[var(--sc-border-default)] pt-4">
                <a href={ADMIN_LOGIN_URL} className="sc-btn-whisper py-2.5 text-sm">
                  Đăng nhập
                </a>
                <a href={ADMIN_REGISTER_URL} className="sc-btn-platinum py-2.5 text-sm">
                  Tạo tài khoản
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
