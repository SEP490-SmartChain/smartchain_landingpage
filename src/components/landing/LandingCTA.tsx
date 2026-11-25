import { ADMIN_REGISTER_URL } from '@/config/site';

import OrcaLogo from './OrcaLogo';

export default function LandingCTA() {
  return (
    <section
      aria-labelledby="cta-headline"
      className="relative overflow-x-clip border-t border-[var(--sc-border-default)] bg-[var(--sc-bg-primary)] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10">
        <div className="sc-surface-elevated relative overflow-hidden p-8 text-center sm:p-12 lg:p-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 60% 60% at 50% 0%, var(--sc-primary-alpha-12) 0%, transparent 75%)',
            }}
          />

          <div className="relative mx-auto max-w-2xl">
            <div className="mb-5 flex justify-center">
              <OrcaLogo size="lg" showWordmark={false} />
            </div>

            <h2
              id="cta-headline"
              className="text-3xl font-extrabold tracking-tight text-[var(--sc-text-primary)] sm:text-4xl"
              style={{ fontFamily: 'var(--sc-font-display)' }}
            >
              Sẵn sàng giao việc kho cho ORCA?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[var(--sc-text-secondary)] sm:text-lg">
              Tạo tài khoản doanh nghiệp để xem gói và điều khoản trước khi ký hợp đồng.
            </p>

            <div className="mt-8 flex justify-center">
              <a
                href={ADMIN_REGISTER_URL}
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-[var(--sc-primary)] px-7 py-3.5 text-base font-semibold text-[var(--sc-on-primary)] shadow-[0_8px_20px_rgb(15_118_110/22%)] transition-all hover:bg-[var(--sc-primary-hover)] active:scale-[0.98]"
              >
                <span>Tạo tài khoản doanh nghiệp</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
