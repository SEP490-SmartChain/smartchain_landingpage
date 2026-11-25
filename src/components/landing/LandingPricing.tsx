import { useState } from 'react';

import { ADMIN_LOGIN_URL, ADMIN_REGISTER_URL } from '@/config/site';

/**
 * Static toggle between the two plan content variants specified in the plan:
 * - `false`: Public version when business tariff numbers are not yet formally approved.
 *   Displays the 3 plan names, self-selection guidance, CTAs, and contract notice without demo prices.
 * - `true`: Preview / confirmed tariff version with monthly fee, quota, and deposit in matching order.
 */
const SHOW_CONFIGURED_PRICES: boolean = true;

interface PricingPlan {
  code: 'BASIC' | 'STANDARD' | 'ENTERPRISE';
  name: string;
  audience: string;
  monthlyFee: string;
  quota: string;
  deposit: string;
  ctaLabel: string;
  ctaHref: string;
  isCustom?: boolean;
  customInstruction?: string;
}

const PRICING_PLANS: readonly PricingPlan[] = [
  {
    code: 'BASIC',
    name: 'Cơ Bản',
    audience: 'Khi bạn muốn giao việc đóng hàng cho một kho và dành thêm thời gian bán hàng.',
    monthlyFee: '4.000.000 đ/tháng',
    quota: '500 đơn/tháng · 1 kho',
    deposit: '3.000.000 đ',
    ctaLabel: 'Đăng ký để chọn gói',
    ctaHref: ADMIN_REGISTER_URL,
  },
  {
    code: 'STANDARD',
    name: 'Tiêu Chuẩn',
    audience: 'Khi bạn cần phân bổ hàng ở nhiều kho và xử lý nhiều đơn hơn mỗi tháng.',
    monthlyFee: '12.000.000 đ/tháng',
    quota: '1.500 đơn/tháng · Tối đa 3 kho',
    deposit: '3.000.000 đ',
    ctaLabel: 'Đăng ký để chọn gói',
    ctaHref: ADMIN_REGISTER_URL,
  },
  {
    code: 'ENTERPRISE',
    name: 'Doanh Nghiệp Lớn',
    audience: 'Khi sản lượng, dung tích lưu kho hoặc cách đóng gói cần được thỏa thuận riêng.',
    monthlyFee: 'Theo hợp đồng',
    quota: 'Theo nhu cầu và hợp đồng',
    deposit: 'Theo hợp đồng',
    ctaLabel: 'Đăng nhập để yêu cầu báo giá',
    ctaHref: ADMIN_LOGIN_URL,
    isCustom: true,
    customInstruction:
      'Sau khi đăng nhập, vào Cài đặt → Hợp đồng và chọn ‘Cần một gói riêng?’ để gửi nhu cầu.',
  },
];

export default function LandingPricing() {
  const [detailsOpen, setDetailsOpen] = useState(false);

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="relative scroll-mt-20 overflow-x-clip border-t border-[var(--sc-border-default)] bg-[var(--sc-bg-secondary)] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="max-w-3xl">
          {SHOW_CONFIGURED_PRICES && (
            <span className="mb-3 inline-flex rounded-full border border-[var(--sc-border-strong)] bg-[var(--sc-bg-surface)] px-3.5 py-1 text-xs font-semibold text-[var(--sc-primary)]">
              Giá và định mức minh họa
            </span>
          )}

          <h2
            id="pricing-heading"
            className="text-3xl font-extrabold tracking-tight text-[var(--sc-text-primary)] sm:text-4xl"
            style={{ fontFamily: 'var(--sc-font-display)' }}
          >
            Gói nào hợp với lượng đơn của bạn?
          </h2>

          <p className="mt-3 text-base leading-relaxed text-[var(--sc-text-secondary)] sm:text-lg">
            Bắt đầu từ số đơn mỗi tháng và số kho bạn cần dùng. Khi so gói, hãy xem cả phí tháng,
            tiền cọc ban đầu và các khoản tính theo thực tế.
          </p>
        </div>

        {/* Unconfirmed tariff contract notice for public version */}
        {!SHOW_CONFIGURED_PRICES && (
          <div className="sc-surface mt-8 border-l-4 border-l-[var(--sc-primary)] px-5 py-4 sm:px-6">
            <p className="text-base font-semibold text-[var(--sc-text-primary)]">
              Bạn có thể xem phí tháng, tiền cọc và định mức áp dụng trong hợp đồng trước khi ký.
            </p>
            <p className="mt-1 text-sm leading-relaxed text-[var(--sc-text-secondary)] sm:text-base">
              Phí tháng bao gồm soạn và đóng gói trong định mức của gói. Cước vận chuyển tính theo
              từng kiện. Tiền cọc là khoản riêng khi bắt đầu dịch vụ.
            </p>
          </div>
        )}

        {/* 3 Plan Cards in identical field order */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-stretch">
          {PRICING_PLANS.map((plan) => (
            <article
              key={plan.code}
              className="sc-surface flex flex-col justify-between p-6 sm:p-8"
            >
              <div>
                <h3
                  className="text-2xl font-bold text-[var(--sc-text-primary)]"
                  style={{ fontFamily: 'var(--sc-font-display)' }}
                >
                  {plan.name}
                </h3>

                <p className="mt-3 text-base leading-relaxed text-[var(--sc-text-secondary)]">
                  {plan.audience}
                </p>

                {SHOW_CONFIGURED_PRICES && (
                  <dl className="mt-6 divide-y divide-[var(--sc-border-default)] rounded-xl border border-[var(--sc-border-default)] bg-[var(--sc-bg-secondary)] px-4">
                    <div className="py-3.5">
                      <dt className="text-xs font-medium text-[var(--sc-text-tertiary)]">
                        Phí tháng
                      </dt>
                      <dd className="mt-1 text-xl font-extrabold tabular-nums text-[var(--sc-text-primary)]">
                        {plan.monthlyFee}
                      </dd>
                    </div>
                    <div className="py-3.5">
                      <dt className="text-xs font-medium text-[var(--sc-text-tertiary)]">
                        Định mức
                      </dt>
                      <dd className="mt-1 text-base font-semibold tabular-nums text-[var(--sc-text-primary)]">
                        {plan.quota}
                      </dd>
                    </div>
                    <div className="py-3.5">
                      <dt className="text-xs font-medium text-[var(--sc-text-tertiary)]">
                        Tiền cọc
                      </dt>
                      <dd className="mt-1 text-base font-semibold tabular-nums text-[var(--sc-text-primary)]">
                        {plan.deposit}
                      </dd>
                    </div>
                  </dl>
                )}

                {plan.customInstruction && (
                  <p className="mt-5 rounded-xl border border-[var(--sc-border-default)] bg-[var(--sc-bg-secondary)] p-3.5 text-sm leading-relaxed text-[var(--sc-text-secondary)]">
                    {plan.customInstruction}
                  </p>
                )}
              </div>

              <div className="mt-7 border-t border-[var(--sc-border-default)] pt-5">
                <a
                  href={plan.ctaHref}
                  className={`flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-base font-semibold transition-all active:scale-[0.99] ${
                    plan.isCustom
                      ? 'border border-[var(--sc-border-strong)] bg-[var(--sc-bg-secondary)] text-[var(--sc-text-primary)] hover:bg-[var(--sc-bg-muted)]'
                      : 'bg-[var(--sc-primary)] text-[var(--sc-on-primary)] shadow-[0_6px_16px_rgb(15_118_110/20%)] hover:bg-[var(--sc-primary-hover)]'
                  }`}
                >
                  <span>{plan.ctaLabel}</span>
                  <span aria-hidden="true">→</span>
                </a>

                {plan.isCustom && (
                  <p className="mt-3 text-center text-sm text-[var(--sc-text-secondary)]">
                    Chưa có tài khoản?{' '}
                    <a
                      href={ADMIN_REGISTER_URL}
                      className="font-semibold text-[var(--sc-primary)] underline underline-offset-4 hover:text-[var(--sc-primary-hover)]"
                    >
                      Đăng ký
                    </a>
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Summary line immediately below priced cards */}
        {SHOW_CONFIGURED_PRICES && (
          <p className="mt-6 text-base leading-relaxed text-[var(--sc-text-secondary)]">
            Phí tháng bao gồm soạn và đóng gói trong định mức của gói. Cước vận chuyển tính theo
            từng kiện. Tiền cọc là khoản riêng khi bắt đầu dịch vụ.
          </p>
        )}

        {/* Expandable fee inclusion & overage disclosure */}
        <div className="mt-8 max-w-3xl">
          <div className="sc-surface overflow-hidden">
            <button
              type="button"
              aria-expanded={detailsOpen}
              aria-controls="pricing-inclusion-panel"
              onClick={() => setDetailsOpen((v) => !v)}
              className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-[var(--sc-text-primary)] transition-colors hover:bg-[var(--sc-bg-secondary)]"
            >
              <span>Gói bao gồm gì? Khi nào phát sinh phí?</span>
              <span
                aria-hidden="true"
                className={`shrink-0 text-lg leading-none text-[var(--sc-primary)] transition-transform duration-200 ${
                  detailsOpen ? 'rotate-45' : ''
                }`}
              >
                +
              </span>
            </button>

            <div
              id="pricing-inclusion-panel"
              hidden={!detailsOpen}
              className="border-t border-[var(--sc-border-default)] px-5 py-4 text-base leading-relaxed text-[var(--sc-text-secondary)]"
            >
              {SHOW_CONFIGURED_PRICES ? (
                <p>
                  Gói gồm soạn và đóng gói trong định mức đơn, nhập thùng và lưu kho trong định mức
                  hợp đồng. Bạn có thể phát sinh phí khi vượt định mức, dùng thêm vật tư, đóng combo
                  hoặc có hàng hoàn cần vận chuyển và kiểm tra. Một đơn tách thành hai kiện vẫn tính
                  là một đơn trong định mức, còn cước vận chuyển tính cho từng kiện.
                </p>
              ) : (
                <p>
                  Bạn có thể xem phí tháng, tiền cọc và định mức áp dụng trong hợp đồng trước khi
                  ký. Chi tiết phần bao gồm trong gói và các trường hợp tính theo thực tế (vượt định
                  mức, vật tư đóng gói, đóng combo, xử lý hàng hoàn và cước vận chuyển từng kiện)
                  được quy định trực tiếp trong hợp đồng của từng gói.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
