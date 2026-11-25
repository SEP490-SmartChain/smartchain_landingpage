import { useState } from 'react';

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

  const toggleQuestion = (id: string) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="relative scroll-mt-20 overflow-x-clip bg-[var(--sc-bg-primary)] py-20 sm:py-24"
    >
      {/* Preserve external anchor links formerly pointing to removed sections */}
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

      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10">
        <div className="max-w-2xl">
          <h2
            id="features-heading"
            className="text-3xl font-extrabold tracking-tight text-[var(--sc-text-primary)] sm:text-4xl"
            style={{ fontFamily: 'var(--sc-font-display)' }}
          >
            Giao việc kho, vẫn nắm rõ từng đơn
          </h2>
        </div>

        {/* 3 steps reading left-to-right on desktop, stacked vertically with each step's own card on mobile */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-stretch">
          {/* Step 1: Inbound Receipt */}
          <article className="sc-surface flex flex-col justify-between p-6 sm:p-7">
            <div>
              <span className="inline-flex rounded-md bg-[var(--sc-primary-alpha-12)] px-2.5 py-1 text-xs font-bold text-[var(--sc-primary)]">
                Bước 1
              </span>
              <h3
                className="mt-3 text-xl font-bold text-[var(--sc-text-primary)]"
                style={{ fontFamily: 'var(--sc-font-display)' }}
              >
                Gửi hàng, biết kho thực nhận bao nhiêu
              </h3>
              <p className="mt-2.5 text-base leading-relaxed text-[var(--sc-text-secondary)]">
                Bạn báo trước lô hàng. Khi ORCA kiểm đếm xong, bạn xem số đã gửi, số thực nhận và
                phần chênh lệch ngay trên phiếu nhập.
              </p>
            </div>

            <div
              role="group"
              aria-label="Phiếu nhập minh họa"
              className="mt-6 rounded-xl border border-[var(--sc-border-strong)] bg-[var(--sc-bg-secondary)] p-4"
            >
              <div className="flex items-center justify-between gap-2 border-b border-[var(--sc-border-default)] pb-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--sc-text-secondary)]">
                  Phiếu nhập minh họa
                </span>
                <span className="font-mono text-xs font-semibold text-[var(--sc-text-tertiary)]">
                  #PN-2048
                </span>
              </div>

              <div className="mt-3 text-sm font-semibold text-[var(--sc-text-primary)]">
                Cà phê hạt rang mộc 500g
              </div>

              <dl className="mt-3 grid grid-cols-3 gap-2 text-center">
                <div className="rounded-lg border border-[var(--sc-border-default)] bg-[var(--sc-bg-surface)] px-2 py-2.5">
                  <dt className="text-xs font-medium text-[var(--sc-text-secondary)]">Báo gửi</dt>
                  <dd className="mt-1 text-lg font-extrabold tabular-nums text-[var(--sc-text-primary)]">
                    100
                  </dd>
                </div>
                <div className="rounded-lg border border-[var(--sc-border-default)] bg-[var(--sc-bg-surface)] px-2 py-2.5">
                  <dt className="text-xs font-medium text-[var(--sc-text-secondary)]">Thực nhận</dt>
                  <dd className="mt-1 text-lg font-extrabold tabular-nums text-[var(--sc-primary)]">
                    98
                  </dd>
                </div>
                <div className="rounded-lg border border-[var(--sc-warning-border)] bg-[var(--sc-warning-bg)] px-2 py-2.5">
                  <dt className="text-xs font-semibold text-[var(--sc-warning-dark)]">Thiếu</dt>
                  <dd className="mt-1 text-lg font-extrabold tabular-nums text-[var(--sc-warning-dark)]">
                    2
                  </dd>
                </div>
              </dl>
            </div>
          </article>

          {/* Step 2: Order Pick, Pack & Carrier Handover */}
          <article className="sc-surface flex flex-col justify-between p-6 sm:p-7">
            <div>
              <span className="inline-flex rounded-md bg-[var(--sc-primary-alpha-12)] px-2.5 py-1 text-xs font-bold text-[var(--sc-primary)]">
                Bước 2
              </span>
              <h3
                className="mt-3 text-xl font-bold text-[var(--sc-text-primary)]"
                style={{ fontFamily: 'var(--sc-font-display)' }}
              >
                Có đơn, ORCA soạn và đóng gói
              </h3>
              <p className="mt-2.5 text-base leading-relaxed text-[var(--sc-text-secondary)]">
                Bạn nhập đơn hoặc tải tệp Excel. ORCA lấy hàng, đóng gói và bàn giao cho hãng vận
                chuyển. Bạn tra mã vận đơn để theo dõi từng kiện.
              </p>
            </div>

            <div
              role="group"
              aria-label="Kiện hàng minh họa"
              className="mt-6 rounded-xl border border-[var(--sc-border-strong)] bg-[var(--sc-bg-secondary)] p-4"
            >
              <div className="flex items-center justify-between gap-2 border-b border-[var(--sc-border-default)] pb-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--sc-text-secondary)]">
                  Kiện hàng minh họa
                </span>
                <span className="font-mono text-xs font-semibold text-[var(--sc-text-tertiary)]">
                  Đơn #DH-1042
                </span>
              </div>

              <div className="mt-3 flex items-baseline justify-between gap-2">
                <span className="text-xs font-medium text-[var(--sc-text-secondary)]">
                  Mã vận đơn
                </span>
                <span className="font-mono text-sm font-bold tracking-wide text-[var(--sc-text-primary)]">
                  VD84920163
                </span>
              </div>

              <div className="mt-3 rounded-lg border border-[var(--sc-success-border)] bg-[var(--sc-success-bg)] px-3.5 py-3">
                <div className="flex items-center gap-2">
                  <span
                    className="h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--sc-success)]"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-bold text-[var(--sc-success-dark)]">
                    Đã bàn giao hãng vận chuyển
                  </span>
                </div>
                <div className="mt-1 pl-4 text-xs font-medium text-[var(--sc-success-dark)]">
                  Kiện 01/01 · Đã quét xuất kho
                </div>
              </div>
            </div>
          </article>

          {/* Step 3: Weekly COD Reconciliation */}
          <article className="sc-surface flex flex-col justify-between p-6 sm:p-7">
            <div>
              <span className="inline-flex rounded-md bg-[var(--sc-primary-alpha-12)] px-2.5 py-1 text-xs font-bold text-[var(--sc-primary)]">
                Bước 3
              </span>
              <h3
                className="mt-3 text-xl font-bold text-[var(--sc-text-primary)]"
                style={{ fontFamily: 'var(--sc-font-display)' }}
              >
                Đối chiếu tiền thu hộ theo từng đơn
              </h3>
              <p className="mt-2.5 text-base leading-relaxed text-[var(--sc-text-secondary)]">
                Mở bảng kê tuần để xem tiền thu hộ, cước và phí. Nếu một dòng chưa khớp, bạn có thể
                báo lại ngay trên dòng đó.
              </p>
            </div>

            <div
              role="group"
              aria-label="Bảng kê tuần minh họa"
              className="mt-6 rounded-xl border border-[var(--sc-border-strong)] bg-[var(--sc-bg-secondary)] p-4"
            >
              <div className="flex items-center justify-between gap-2 border-b border-[var(--sc-border-default)] pb-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--sc-text-secondary)]">
                  Bảng kê tuần minh họa
                </span>
                <span className="rounded-full border border-[var(--sc-success-border)] bg-[var(--sc-success-bg)] px-2 py-0.5 text-[11px] font-semibold text-[var(--sc-success-dark)]">
                  Đã chi trả kỳ trước
                </span>
              </div>

              <div className="mt-3 rounded-lg border border-[var(--sc-border-default)] bg-[var(--sc-bg-surface)] p-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono text-xs font-bold text-[var(--sc-text-primary)]">
                    Đơn #DH-1048
                  </span>
                  <span className="rounded-full border border-[var(--sc-info-border)] bg-[var(--sc-info-bg)] px-2 py-0.5 text-[11px] font-semibold text-[var(--sc-info-dark)]">
                    Đang đối soát
                  </span>
                </div>

                <dl className="mt-2.5 grid grid-cols-3 gap-1.5 text-xs">
                  <div>
                    <dt className="text-[var(--sc-text-tertiary)]">Thu hộ</dt>
                    <dd className="mt-0.5 font-semibold tabular-nums text-[var(--sc-text-primary)]">
                      450.000 đ
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[var(--sc-text-tertiary)]">Cước &amp; phí</dt>
                    <dd className="mt-0.5 font-semibold tabular-nums text-[var(--sc-text-secondary)]">
                      -32.000 đ
                    </dd>
                  </div>
                  <div className="text-right">
                    <dt className="text-[var(--sc-text-tertiary)]">Thực nhận</dt>
                    <dd className="mt-0.5 font-bold tabular-nums text-[var(--sc-primary)]">
                      418.000 đ
                    </dd>
                  </div>
                </dl>

                <div className="mt-2.5 flex items-center justify-between border-t border-[var(--sc-border-default)] pt-2 text-xs">
                  <span className="text-[var(--sc-text-tertiary)]">Chưa chi trả</span>
                  <span className="rounded border border-[var(--sc-warning-border)] bg-[var(--sc-warning-bg)] px-2 py-0.5 font-semibold text-[var(--sc-warning-dark)]">
                    Báo sai dòng này
                  </span>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* 2 closed-by-default expandable questions */}
        <div className="mt-10 max-w-3xl space-y-3">
          {SHOP_FAQ_ITEMS.map((item) => {
            const isOpen = Boolean(openIds[item.id]);
            const panelId = `faq-panel-${item.id}`;
            return (
              <div key={item.id} className="sc-surface overflow-hidden">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleQuestion(item.id)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-[var(--sc-text-primary)] transition-colors hover:bg-[var(--sc-bg-secondary)]"
                >
                  <span>{item.question}</span>
                  <span
                    aria-hidden="true"
                    className={`shrink-0 text-lg leading-none text-[var(--sc-primary)] transition-transform duration-200 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  id={panelId}
                  hidden={!isOpen}
                  className="border-t border-[var(--sc-border-default)] px-5 py-4 text-base leading-relaxed text-[var(--sc-text-secondary)]"
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
