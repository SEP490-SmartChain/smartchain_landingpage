import { ADMIN_LOGIN_URL, ADMIN_REGISTER_URL } from '@/config/site';

import OrcaLogo from './OrcaLogo';

export default function LandingCTA() {
  return (
    <section
      aria-labelledby="cta-headline"
      className="relative border-t border-[var(--sc-border-default)] bg-[var(--sc-bg-secondary)] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10">
        <div className="sc-surface-elevated relative overflow-hidden p-8 sm:p-12 lg:p-16 text-center">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 60% 60% at 50% 0%, var(--sc-primary-alpha-12) 0%, transparent 75%)',
            }}
          />

          <div className="relative mx-auto max-w-3xl">
            <div className="mb-5 flex justify-center">
              <OrcaLogo size="lg" showWordmark={false} />
            </div>

            <h2
              id="cta-headline"
              className="text-3xl font-extrabold tracking-tight text-[var(--sc-text-primary)] sm:text-4xl lg:text-5xl"
              style={{ fontFamily: 'var(--sc-font-display)' }}
            >
              Sẵn sàng nâng tầm vận hành{' '}
              <span className="text-[var(--sc-primary)]">cho doanh nghiệp của bạn?</span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[var(--sc-text-secondary)] sm:text-base">
              Khởi tạo tài khoản doanh nghiệp, xem trước hợp đồng dịch vụ và bắt đầu gửi hàng vào hệ
              thống kho ORCA trên toàn quốc ngay hôm nay.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
              <a
                href={ADMIN_REGISTER_URL}
                className="inline-flex items-center gap-2.5 rounded-xl bg-[var(--sc-primary)] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_20px_rgb(15_118_110/25%)] transition-all hover:bg-[var(--sc-primary-hover)] active:scale-[0.98]"
                style={{ color: 'var(--sc-bg-surface)' }}
              >
                <span>Đăng ký Tài khoản Doanh nghiệp</span>
                <span aria-hidden="true">→</span>
              </a>

              <a
                href={ADMIN_LOGIN_URL}
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--sc-border-default)] bg-[var(--sc-bg-surface)] px-7 py-3.5 text-sm font-semibold text-[var(--sc-text-primary)] transition-colors hover:border-[var(--sc-border-strong)] hover:bg-[var(--sc-bg-secondary)]"
              >
                <span>Đăng nhập Hệ thống</span>
              </a>
            </div>

            <p className="mt-6 text-xs text-[var(--sc-text-tertiary)]">
              Ký hợp đồng trực tuyến nhanh chóng · Chi phí minh bạch · Đối soát tiền thu hộ (COD)
              đúng hạn
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
