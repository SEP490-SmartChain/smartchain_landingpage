import { useState } from 'react';

import { CheckCircle, FlagBanner, Plus, WarningCircle } from '@phosphor-icons/react';

const SHOP_FAQ_ITEMS = [
  {
    id: 'expiry-policy',
    question: 'Hàng có hạn dùng được xuất thế nào?',
    answer: 'ORCA lọc các lô còn đủ hạn để giao, rồi ưu tiên lô hết hạn sớm hơn.',
  },
  {
    id: 'return-policy',
    question: 'Nếu khách trả hàng thì sao?',
    answer:
      'Khi kho kiểm xong kiện hoàn, bạn có thể xem ảnh của hàng hoàn trên tài khoản và quyết định cách xử lý.',
  },
] as const;

export default function LandingFeatures() {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({});
  const [flaggedRow, setFlaggedRow] = useState(false);

  const toggleQuestion = (id: string) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="relative scroll-mt-20 bg-[var(--sc-bg-primary)] py-28 sm:py-36"
    >
      <span
        id="portals"
        className="pointer-events-none absolute top-0 scroll-mt-20"
        aria-hidden="true"
      />
      <span
        id="architecture"
        className="pointer-events-none absolute top-0 scroll-mt-20"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1140px] px-4 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="features-heading"
            className="text-balance font-medium tracking-[-0.03em] text-[var(--sc-text-primary)]"
            style={{
              fontFamily: 'var(--sc-font-display)',
              fontSize: 'clamp(2.1rem, 4.2vw, 3.35rem)',
              lineHeight: 1.1,
            }}
          >
            Giao việc kho,{' '}
            <span
              className="italic font-medium text-[var(--sc-champagne)]"
              style={{ fontFamily: 'var(--sc-font-serif)', fontSize: '1.08em' }}
            >
              vẫn nắm rõ từng đơn.
            </span>
          </h2>
        </div>

        {/* 3 Clean, Airy Editorial Proof Cards */}
        <div className="mt-16 flex flex-col gap-6 sm:gap-8">
          {/* 01 · Inbound */}
          <article className="sc-luxury-card grid grid-cols-1 items-center gap-8 p-7 sm:p-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <span
                className="text-xs tracking-[0.2em] text-[var(--sc-champagne)]"
                style={{ fontFamily: 'var(--sc-font-mono)' }}
              >
                01
              </span>
              <h3
                className="mt-3 text-xl font-medium tracking-[-0.02em] text-[var(--sc-text-primary)] sm:text-2xl"
                style={{ fontFamily: 'var(--sc-font-display)' }}
              >
                Gửi hàng, biết kho thực nhận bao nhiêu
              </h3>
              <p className="mt-3 text-base leading-[1.7] text-[var(--sc-text-secondary)]">
                Bạn báo trước lô hàng. Khi ORCA kiểm đếm xong, bạn xem số đã gửi, số thực nhận và
                phần chênh lệch ngay trên phiếu nhập.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div
                role="group"
                aria-label="Phiếu nhập minh họa"
                className="rounded-2xl border border-[var(--sc-border-default)] bg-[var(--sc-bg-recessed)]/65 p-5 sm:p-6"
              >
                <div className="flex items-center justify-between text-xs text-[var(--sc-text-secondary)]">
                  <span>Phiếu nhập minh họa</span>
                  <span
                    className="text-[var(--sc-champagne)]"
                    style={{ fontFamily: 'var(--sc-font-mono)' }}
                  >
                    #PN-2048
                  </span>
                </div>

                <dl className="mt-4 grid grid-cols-3 gap-3 text-center">
                  <div className="rounded-xl border border-[var(--sc-border-default)] bg-[var(--sc-bg-surface)] py-4">
                    <dt className="text-xs text-[var(--sc-text-tertiary)]">Báo gửi</dt>
                    <dd
                      className="mt-1 text-2xl font-medium tabular-nums text-[var(--sc-text-primary)]"
                      style={{ fontFamily: 'var(--sc-font-mono)' }}
                    >
                      100
                    </dd>
                  </div>
                  <div className="rounded-xl border border-[var(--sc-border-default)] bg-[var(--sc-bg-surface)] py-4">
                    <dt className="text-xs text-[var(--sc-text-tertiary)]">Thực nhận</dt>
                    <dd
                      className="mt-1 text-2xl font-medium tabular-nums text-[var(--sc-status-ok)]"
                      style={{ fontFamily: 'var(--sc-font-mono)' }}
                    >
                      98
                    </dd>
                  </div>
                  <div className="rounded-xl border border-[var(--sc-champagne-soft)] bg-[var(--sc-status-warn-bg)] py-4">
                    <dt className="text-xs font-medium text-[var(--sc-status-warn)]">Thiếu</dt>
                    <dd
                      className="mt-1 text-2xl font-medium tabular-nums text-[var(--sc-status-warn)]"
                      style={{ fontFamily: 'var(--sc-font-mono)' }}
                    >
                      02
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </article>

          {/* 02 · Handover */}
          <article className="sc-luxury-card grid grid-cols-1 items-center gap-8 p-7 sm:p-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <span
                className="text-xs tracking-[0.2em] text-[var(--sc-champagne)]"
                style={{ fontFamily: 'var(--sc-font-mono)' }}
              >
                02
              </span>
              <h3
                className="mt-3 text-xl font-medium tracking-[-0.02em] text-[var(--sc-text-primary)] sm:text-2xl"
                style={{ fontFamily: 'var(--sc-font-display)' }}
              >
                Có đơn, ORCA soạn và đóng gói
              </h3>
              <p className="mt-3 text-base leading-[1.7] text-[var(--sc-text-secondary)]">
                Bạn nhập đơn hoặc tải tệp Excel. ORCA lấy hàng, đóng gói và bàn giao cho hãng vận
                chuyển. Bạn tra mã vận đơn để theo dõi từng kiện.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div
                role="group"
                aria-label="Kiện hàng minh họa"
                className="rounded-2xl border border-[var(--sc-border-default)] bg-[var(--sc-bg-recessed)]/65 p-5 sm:p-6"
              >
                <div className="flex items-center justify-between text-xs text-[var(--sc-text-secondary)]">
                  <span>Kiện hàng #DH-1042</span>
                  <span
                    className="font-medium text-[var(--sc-text-primary)]"
                    style={{ fontFamily: 'var(--sc-font-mono)' }}
                  >
                    MVĐ · VD84920163
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[var(--sc-border-default)] bg-[var(--sc-bg-surface)] px-5 py-4">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle
                      size={19}
                      weight="fill"
                      className="shrink-0 text-[var(--sc-status-ok)]"
                      aria-hidden="true"
                    />
                    <span className="text-base font-medium text-[var(--sc-text-primary)]">
                      Đã bàn giao hãng vận chuyển
                    </span>
                  </div>
                  <span
                    className="text-xs text-[var(--sc-text-tertiary)]"
                    style={{ fontFamily: 'var(--sc-font-mono)' }}
                  >
                    01/01 kiện
                  </span>
                </div>
              </div>
            </div>
          </article>

          {/* 03 · COD */}
          <article className="sc-champagne-card grid grid-cols-1 items-center gap-8 p-7 sm:p-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <span
                className="text-xs tracking-[0.2em] text-[var(--sc-champagne)]"
                style={{ fontFamily: 'var(--sc-font-mono)' }}
              >
                03
              </span>
              <h3
                className="mt-3 text-xl font-medium tracking-[-0.02em] text-[var(--sc-text-primary)] sm:text-2xl"
                style={{ fontFamily: 'var(--sc-font-display)' }}
              >
                Đối chiếu tiền thu hộ theo từng đơn
              </h3>
              <p className="mt-3 text-base leading-[1.7] text-[var(--sc-text-secondary)]">
                Mở bảng kê tuần để xem tiền thu hộ, cước và phí. Nếu một dòng chưa khớp, bạn có thể
                báo lại ngay trên dòng đó.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div
                role="group"
                aria-label="Bảng kê tuần minh họa"
                className="rounded-2xl border border-[var(--sc-border-default)] bg-[var(--sc-bg-recessed)]/75 p-5 sm:p-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span className="text-[var(--sc-text-secondary)]">Bảng kê tuần · #DH-1048</span>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-[var(--sc-status-ok-bg)] px-2.5 py-0.5 text-[11px] font-medium text-[var(--sc-status-ok)]">
                      Đã chi trả
                    </span>
                    <span className="rounded-full bg-[var(--sc-status-info-bg)] px-2.5 py-0.5 text-[11px] font-medium text-[var(--sc-status-info)]">
                      Đang đối soát
                    </span>
                  </div>
                </div>

                <dl className="mt-4 grid grid-cols-3 gap-3 rounded-xl border border-[var(--sc-border-default)] bg-[var(--sc-bg-surface)] p-4 text-xs sm:text-sm">
                  <div>
                    <dt className="text-[var(--sc-text-tertiary)]">Thu hộ</dt>
                    <dd
                      className="mt-1 font-medium tabular-nums text-[var(--sc-text-primary)]"
                      style={{ fontFamily: 'var(--sc-font-mono)' }}
                    >
                      450.000 đ
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[var(--sc-text-tertiary)]">Cước &amp; phí</dt>
                    <dd
                      className="mt-1 tabular-nums text-[var(--sc-text-secondary)]"
                      style={{ fontFamily: 'var(--sc-font-mono)' }}
                    >
                      -32.000 đ
                    </dd>
                  </div>
                  <div className="text-right">
                    <dt className="text-[var(--sc-text-tertiary)]">Thực nhận</dt>
                    <dd
                      className="mt-1 font-semibold tabular-nums text-[var(--sc-champagne)]"
                      style={{ fontFamily: 'var(--sc-font-mono)' }}
                    >
                      418.000 đ
                    </dd>
                  </div>
                </dl>

                <div className="mt-3.5 flex items-center justify-between gap-3 text-xs">
                  <span className="text-[var(--sc-text-secondary)]">
                    {flaggedRow ? 'Đã ghi nhận tra soát dòng này' : 'Đang đối soát'}
                  </span>

                  <button
                    type="button"
                    onClick={() => setFlaggedRow((v) => !v)}
                    className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-[var(--sc-champagne-soft)] bg-[var(--sc-bg-surface)] px-3.5 py-1.5 font-medium text-[var(--sc-champagne)] transition-colors hover:border-[var(--sc-champagne)]"
                  >
                    {flaggedRow ? (
                      <>
                        <FlagBanner size={13} weight="fill" aria-hidden="true" />
                        <span>Đã báo kiểm tra</span>
                      </>
                    ) : (
                      <>
                        <WarningCircle size={13} weight="regular" aria-hidden="true" />
                        <span>Báo sai dòng này</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* 2 Closed-by-Default Questions */}
        <div className="mx-auto mt-16 max-w-3xl divide-y divide-[var(--sc-border-default)] border-t border-b border-[var(--sc-border-default)]">
          {SHOP_FAQ_ITEMS.map((item) => {
            const isOpen = Boolean(openIds[item.id]);
            const panelId = `faq-panel-${item.id}`;
            return (
              <div key={item.id}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleQuestion(item.id)}
                  className="group flex w-full cursor-pointer items-center justify-between gap-6 py-4.5 text-left text-base font-medium text-[var(--sc-text-primary)] transition-colors hover:text-[var(--sc-champagne)]"
                >
                  <span>{item.question}</span>
                  <span
                    aria-hidden="true"
                    className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--sc-border-default)] text-[var(--sc-champagne)] transition-transform duration-200 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  >
                    <Plus size={14} weight="regular" />
                  </span>
                </button>
                <div
                  id={panelId}
                  hidden={!isOpen}
                  className="pb-5 pr-8 text-[15.5px] leading-[1.75] text-[var(--sc-text-secondary)]"
                >
                  {item.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
