import { ArrowUpRight } from '@phosphor-icons/react';
import { motion, useReducedMotion } from 'motion/react';

import { ADMIN_REGISTER_URL } from '@/config/site';

export default function LandingCTA() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="cta-headline"
      className="relative overflow-x-clip border-t border-[var(--sc-border-default)] bg-[var(--sc-bg-primary)] py-28 sm:py-36"
    >
      <div className="mx-auto max-w-[1140px] px-4 sm:px-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="sc-champagne-card px-6 py-16 text-center sm:px-16 sm:py-24"
        >
          <div className="mx-auto max-w-xl">
            <h2
              id="cta-headline"
              className="text-balance font-medium tracking-[-0.03em] text-[var(--sc-text-primary)]"
              style={{
                fontFamily: 'var(--sc-font-display)',
                fontSize: 'clamp(2.15rem, 4.4vw, 3.5rem)',
                lineHeight: 1.08,
              }}
            >
              Sẵn sàng giao việc kho{' '}
              <span
                className="italic font-medium text-[var(--sc-champagne)]"
                style={{ fontFamily: 'var(--sc-font-serif)', fontSize: '1.08em' }}
              >
                cho ORCA?
              </span>
            </h2>

            <p className="mx-auto mt-4 text-base leading-[1.7] text-[var(--sc-text-secondary)]">
              Tạo tài khoản doanh nghiệp để xem gói và điều khoản trước khi ký hợp đồng.
            </p>

            <div className="mt-9 flex justify-center">
              <a
                href={ADMIN_REGISTER_URL}
                className="sc-btn-platinum group py-2.5 pl-7 pr-2.5 text-[15px]"
              >
                <span>Tạo tài khoản doanh nghiệp</span>
                <span className="sc-btn-orb group-hover:translate-x-0.5 group-hover:-translate-y-[1px]">
                  <ArrowUpRight size={14} weight="bold" aria-hidden="true" />
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
