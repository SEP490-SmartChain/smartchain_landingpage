import { ADMIN_LOGIN_URL } from '@/config/site';

import OrcaLogo from './OrcaLogo';

export default function LandingFooter() {
  return (
    <footer className="overflow-x-clip border-t border-[var(--sc-border-default)] bg-[var(--sc-bg-surface)] py-10">
      <div className="mx-auto flex max-w-[1380px] flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-10">
        <div className="flex flex-wrap items-center gap-4">
          <a href="/" className="inline-flex items-center">
            <OrcaLogo size="sm" />
          </a>
          <span className="text-sm text-[var(--sc-text-tertiary)]">© 2026 ORCA Fulfillment</span>
        </div>

        <nav
          aria-label="Liên kết chân trang"
          className="flex flex-wrap items-center gap-6 text-sm font-medium text-[var(--sc-text-secondary)]"
        >
          <a href="#workflow" className="transition-colors hover:text-[var(--sc-primary)]">
            Quy trình 3D
          </a>
          <a href="#pricing" className="transition-colors hover:text-[var(--sc-primary)]">
            Gói dịch vụ
          </a>
          <a href={ADMIN_LOGIN_URL} className="transition-colors hover:text-[var(--sc-primary)]">
            Đăng nhập
          </a>
        </nav>
      </div>
    </footer>
  );
}
