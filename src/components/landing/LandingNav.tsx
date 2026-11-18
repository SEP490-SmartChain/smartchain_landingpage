import { useState, useEffect } from 'react';

import { motion, AnimatePresence } from 'motion/react';

import { ADMIN_LOGIN_URL, ADMIN_REGISTER_URL } from '@/config/site';

import OrcaLogo from './OrcaLogo';

const NAV_LINKS = [
  { label: 'Giải pháp', href: '#overview' },
  { label: 'Hệ sinh thái', href: '#portals' },
  { label: 'Quy trình 3D', href: '#workflow' },
  { label: 'Ưu điểm', href: '#features' },
  { label: 'Cam kết dịch vụ', href: '#architecture' },
  { label: 'Bảng giá', href: '#pricing' },
] as const;

interface LandingNavProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export default function LandingNav({ theme, onToggleTheme }: LandingNavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      setMenuOpen(false);
      const target = document.querySelector(href);
      if (target) {
        const absoluteTop = window.scrollY + target.getBoundingClientRect().top - 76;
        window.scrollTo({ top: absoluteTop, behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--sc-border-default)] bg-[var(--sc-topbar-bg)] backdrop-blur-xl transition-colors duration-200">
        <div
          className={`mx-auto flex max-w-[1380px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-10 transition-[height] duration-200 ${
            scrolled ? 'h-16' : 'h-[68px]'
          }`}
        >
          <a href="/" className="group flex shrink-0 items-center gap-2.5 focus:outline-none">
            <OrcaLogo size="sm" />
          </a>

          <nav aria-label="Điều hướng chính" className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className="whitespace-nowrap rounded-lg px-3 py-1.5 text-[13.5px] font-medium text-[var(--sc-text-secondary)] transition-colors hover:bg-[var(--sc-bg-secondary)] hover:text-[var(--sc-text-primary)]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={onToggleTheme}
              className="sc-icon-button shrink-0"
              aria-label={
                theme === 'dark' ? 'Chuyển sang giao diện sáng' : 'Chuyển sang giao diện tối'
              }
              title={theme === 'dark' ? 'Giao diện Sáng' : 'Giao diện Tối'}
            >
              {theme === 'dark' ? (
                <svg
                  viewBox="0 0 24 24"
                  width="17"
                  height="17"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  width="17"
                  height="17"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
              )}
            </button>

            <a
              href={ADMIN_LOGIN_URL}
              className="hidden sm:inline-flex whitespace-nowrap items-center justify-center rounded-lg border border-[var(--sc-border-default)] bg-[var(--sc-bg-surface)] px-3.5 py-2 text-[13px] font-medium text-[var(--sc-text-primary)] shadow-[var(--sc-shadow-button)] transition-colors hover:border-[var(--sc-border-strong)] hover:bg-[var(--sc-bg-secondary)]"
            >
              Đăng nhập
            </a>

            <a
              href={ADMIN_REGISTER_URL}
              className="inline-flex whitespace-nowrap items-center gap-1.5 rounded-lg bg-[var(--sc-primary)] px-3.5 py-2 text-[13px] font-semibold shadow-[0_4px_12px_rgb(15_118_110/24%)] transition-all hover:bg-[var(--sc-primary-hover)] active:scale-[0.98]"
              style={{ color: theme === 'dark' ? '#050b14' : '#ffffff' }}
            >
              <span>Đăng ký ngay</span>
              <span aria-hidden="true">→</span>
            </a>

            <button
              type="button"
              className="sc-icon-button lg:!hidden"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'Đóng điều hướng' : 'Mở điều hướng'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                >
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                >
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 border-b border-[var(--sc-border-default)] bg-[var(--sc-bg-surface)] p-5 shadow-[var(--sc-shadow-popover)] lg:hidden"
          >
            <div className="mx-auto flex max-w-lg flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className="flex items-center justify-between rounded-lg px-3.5 py-2.5 text-sm font-medium text-[var(--sc-text-primary)] hover:bg-[var(--sc-bg-secondary)]"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-[var(--sc-text-tertiary)]">→</span>
                </a>
              ))}

              <div className="mt-3 grid grid-cols-2 gap-2.5 border-t border-[var(--sc-border-default)] pt-4">
                <a
                  href={ADMIN_LOGIN_URL}
                  className="flex items-center justify-center rounded-lg border border-[var(--sc-border-default)] bg-[var(--sc-bg-secondary)] py-2.5 text-sm font-medium text-[var(--sc-text-primary)]"
                >
                  Đăng nhập
                </a>
                <a
                  href={ADMIN_REGISTER_URL}
                  className="flex items-center justify-center rounded-lg bg-[var(--sc-primary)] py-2.5 text-sm font-semibold"
                  style={{ color: theme === 'dark' ? '#050b14' : '#ffffff' }}
                >
                  Đăng ký ngay
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
