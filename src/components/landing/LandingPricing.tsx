import { useState } from 'react';

import { ArrowUpRight, Plus } from '@phosphor-icons/react';
import { motion, useReducedMotion } from 'motion/react';

import { ADMIN_LOGIN_URL, ADMIN_REGISTER_URL } from '@/config/site';

const SHOW_CONFIGURED_PRICES: boolean = true;

interface PricingPlan {
  code: 'BASIC' | 'STANDARD' | 'ENTERPRISE';
  name: string;
  audience: string;
  monthlyFee: string;
  monthlyUnit?: string;
  quota: string;
  deposit: string;
  ctaLabel: string;
  ctaHref: string;
  isChampagneBespoke?: boolean;
  customInstruction?: string;
}

const PRICING_PLANS: readonly PricingPlan[] = [
  {
    code: 'BASIC',
    name: 'Cơ Bản',
    audience: 'Khi bạn muốn giao việc đóng hàng cho một kho và dành thêm thời gian bán hàng.',
    monthlyFee: '4.000.000 đ',
    monthlyUnit: '/ tháng',
    quota: '500 đơn/tháng · 1 kho',
    deposit: '3.000.000 đ',
    ctaLabel: 'Đăng ký để chọn gói',
    ctaHref: ADMIN_REGISTER_URL,
  },
  {
    code: 'STANDARD',
    name: 'Tiêu Chuẩn',
    audience: 'Khi bạn cần phân bổ hàng ở nhiều kho và xử lý nhiều đơn hơn mỗi tháng.',
    monthlyFee: '12.000.000 đ',
    monthlyUnit: '/ tháng',
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
    isChampagneBespoke: true,
    customInstruction:
      'Sau khi đăng nhập, vào Cài đặt → Hợp đồng và chọn ‘Cần một gói riêng?’ để gửi nhu cầu.',
  },
];

export default function LandingPricing() {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="relative scroll-mt-20 overflow-x-clip border-t border-[var(--sc-border-default)] bg-[var(--sc-bg-secondary)] py-28 sm:py-36"
    >
      <div className="relative mx-auto max-w-[1220px] px-4 sm:px-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          {SHOW_CONFIGURED_PRICES && (
            <div
              className="mb-3 text-[11px] tracking-[0.2em] text-[var(--sc-champagne)] uppercase"
              style={{ fontFamily: 'var(--sc-font-mono)' }}
            >
              GIÁ VÀ ĐỊNH MỨC MINH HỌA
            </div>
          )}

          <h2
            id="pricing-heading"
            className="text-balance font-medium tracking-[-0.03em] text-[var(--sc-text-primary)]"
            style={{
              fontFamily: 'var(--sc-font-display)',
              fontSize: 'clamp(2.1rem, 4.2vw, 3.35rem)',
              lineHeight: 1.1,
            }}
          >
            Gói nào hợp với{' '}
            <span
              className="italic font-medium text-[var(--sc-champagne)]"
              style={{ fontFamily: 'var(--sc-font-serif)', fontSize: '1.08em' }}
            >
              lượng đơn của bạn?
            </span>
          </h2>

          <p className="mt-4 text-base leading-[1.7] text-[var(--sc-text-secondary)]">
            Bắt đầu từ số đơn mỗi tháng và số kho bạn cần dùng. Khi so gói, hãy xem cả phí tháng,
            tiền cọc ban đầu và các khoản tính theo thực tế.
          </p>
        </motion.div>

        {!SHOW_CONFIGURED_PRICES && (
          <div className="sc-luxury-card mx-auto mt-10 max-w-3xl p-6 text-center">
            <p className="text-base font-medium text-[var(--sc-text-primary)]">
              Bạn có thể xem phí tháng, tiền cọc và định mức áp dụng trong hợp đồng trước khi ký.
            </p>
          </div>
        )}

        {/* 3 Clean Specular Luxury Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-stretch">
          {PRICING_PLANS.map((plan, idx) => {
            const bespoke = Boolean(plan.isChampagneBespoke);

            return (
              <motion.article
                key={plan.code}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: reduceMotion ? 0 : idx * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`${
                  bespoke ? 'sc-champagne-card' : 'sc-luxury-card'
                } flex flex-col justify-between p-7 sm:p-9`}
              >
                <div>
                  <h3
                    className="text-2xl font-medium tracking-[-0.025em] text-[var(--sc-text-primary)]"
                    style={{ fontFamily: 'var(--sc-font-display)' }}
                  >
                    {plan.name}
                  </h3>

                  <p className="mt-3 min-h-[3.25rem] text-[15px] leading-[1.7] text-[var(--sc-text-secondary)]">
                    {plan.audience}
                  </p>

                  {SHOW_CONFIGURED_PRICES && (
                    <dl className="mt-7 divide-y divide-[var(--sc-border-default)] border-t border-b border-[var(--sc-border-default)]">
                      <div className="py-4">
                        <dt className="text-xs text-[var(--sc-text-tertiary)]">Phí tháng</dt>
                        <dd className="mt-1.5 flex items-baseline gap-1.5">
                          <span
                            className={`text-2xl font-medium tracking-[-0.025em] tabular-nums sm:text-[28px] ${
                              bespoke
                                ? 'text-[var(--sc-champagne)]'
                                : 'text-[var(--sc-text-primary)]'
                            }`}
                            style={{ fontFamily: 'var(--sc-font-mono)' }}
                          >
                            {plan.monthlyFee}
                          </span>
                          {plan.monthlyUnit && (
                            <span className="text-sm text-[var(--sc-text-tertiary)]">
                              {plan.monthlyUnit}
                            </span>
                          )}
                        </dd>
                      </div>

                      <div className="flex items-baseline justify-between gap-4 py-3.5">
                        <dt className="text-xs text-[var(--sc-text-tertiary)]">Định mức</dt>
                        <dd className="text-right text-sm font-medium tabular-nums text-[var(--sc-text-primary)]">
                          {plan.quota}
                        </dd>
                      </div>

                      <div className="flex items-baseline justify-between gap-4 py-3.5">
                        <dt className="text-xs text-[var(--sc-text-tertiary)]">Tiền cọc</dt>
                        <dd
                          className="text-right text-sm font-medium tabular-nums text-[var(--sc-text-primary)]"
                          style={{ fontFamily: 'var(--sc-font-mono)' }}
                        >
                          {plan.deposit}
                        </dd>
                      </div>
                    </dl>
                  )}

                  {plan.customInstruction && (
                    <p className="mt-5 rounded-xl border border-[var(--sc-border-default)] bg-[var(--sc-bg-recessed)]/60 px-4 py-3 text-xs leading-[1.7] text-[var(--sc-text-secondary)]">
                      {plan.customInstruction}
                    </p>
                  )}
                </div>

                <div className="mt-8 pt-2">
                  {bespoke ? (
                    <a
                      href={plan.ctaHref}
                      className="sc-btn-whisper group w-full px-5 py-3 text-sm"
                    >
                      <span>{plan.ctaLabel}</span>
                      <ArrowUpRight
                        size={15}
                        className="text-[var(--sc-champagne)] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </a>
                  ) : (
                    <a
                      href={plan.ctaHref}
                      className="sc-btn-platinum group w-full py-2 pl-6 pr-2 text-sm"
                    >
                      <span className="flex-1 text-center">{plan.ctaLabel}</span>
                      <span className="sc-btn-orb group-hover:translate-x-0.5 group-hover:-translate-y-[1px]">
                        <ArrowUpRight size={14} weight="bold" aria-hidden="true" />
                      </span>
                    </a>
                  )}

                  {bespoke ? (
                    <p className="mt-3.5 text-center text-xs text-[var(--sc-text-secondary)]">
                      Chưa có tài khoản?{' '}
                      <a
                        href={ADMIN_REGISTER_URL}
                        className="font-medium text-[var(--sc-champagne)] underline underline-offset-4 hover:opacity-85"
                      >
                        Đăng ký
                      </a>
                    </p>
                  ) : (
                    <div className="mt-3.5 hidden h-4 lg:block" aria-hidden="true" />
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Concise Footnote & Expandable Terms */}
        <div className="mx-auto mt-12 max-w-3xl space-y-6 text-center">
          {SHOW_CONFIGURED_PRICES && (
            <p className="text-sm leading-[1.7] text-[var(--sc-text-secondary)]">
              Phí tháng bao gồm soạn và đóng gói trong định mức của gói. Cước vận chuyển tính theo
              từng kiện. Tiền cọc là khoản riêng khi bắt đầu dịch vụ.
            </p>
          )}

          <div className="border-t border-b border-[var(--sc-border-default)] text-left">
            <button
              type="button"
              aria-expanded={detailsOpen}
              aria-controls="pricing-inclusion-panel"
              onClick={() => setDetailsOpen((v) => !v)}
              className="group flex w-full cursor-pointer items-center justify-between gap-4 py-4 text-left text-base font-medium text-[var(--sc-text-primary)] transition-colors hover:text-[var(--sc-champagne)]"
            >
              <span>Gói bao gồm gì? Khi nào phát sinh phí?</span>
              <span
                aria-hidden="true"
                className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--sc-border-default)] text-[var(--sc-champagne)] transition-transform duration-200 ${
                  detailsOpen ? 'rotate-45' : ''
                }`}
              >
                <Plus size={14} weight="regular" />
              </span>
            </button>

            <div
              id="pricing-inclusion-panel"
              hidden={!detailsOpen}
              className="pb-5 pr-8 text-[15px] leading-[1.75] text-[var(--sc-text-secondary)]"
            >
              <p>
                Gói gồm soạn và đóng gói trong định mức đơn, nhập thùng và lưu kho trong định mức
                hợp đồng. Bạn có thể phát sinh phí khi vượt định mức, dùng thêm vật tư, đóng combo
                hoặc có hàng hoàn cần vận chuyển và kiểm tra. Một đơn tách thành hai kiện vẫn tính
                là một đơn trong định mức, còn cước vận chuyển tính cho từng kiện.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
