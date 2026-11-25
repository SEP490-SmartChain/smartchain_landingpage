import { ADMIN_LOGIN_URL } from '@/config/site';

export default function LandingFooter() {
  return (
    <footer className="overflow-x-clip border-t border-[var(--sc-border-default)] bg-[var(--sc-bg-primary)] py-12">
      <div className="mx-auto flex max-w-[1260px] flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-8">
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="/"
            className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.26em] text-[var(--sc-text-primary)] uppercase"
          >
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-[var(--sc-champagne)]"
            />
            <span>ORCA</span>
          </a>
          <span className="h-3 w-px bg-[var(--sc-border-default)]" aria-hidden="true" />
          <span className="text-xs text-[var(--sc-text-tertiary)]">© 2026 ORCA Fulfillment</span>
        </div>

        <nav
          aria-label="Liên kết chân trang"
          className="flex flex-wrap items-center gap-8 text-xs font-medium tracking-[0.04em] text-[var(--sc-text-secondary)]"
        >
          <a
            href="#workflow"
            className="transition-colors duration-200 hover:text-[var(--sc-champagne)]"
          >
            Quy trình 3D
          </a>
          <a
            href="#pricing"
            className="transition-colors duration-200 hover:text-[var(--sc-champagne)]"
          >
            Gói dịch vụ
          </a>
          <a
            href={ADMIN_LOGIN_URL}
            className="transition-colors duration-200 hover:text-[var(--sc-champagne)]"
          >
            Đăng nhập
          </a>
        </nav>
      </div>
    </footer>
  );
}
