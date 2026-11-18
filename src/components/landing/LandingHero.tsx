import { useState } from 'react';

import { ADMIN_LOGIN_URL, ADMIN_REGISTER_URL } from '@/config/site';

import OrcaLogo from './OrcaLogo';

type PreviewTab = 'dashboard' | 'inventory' | 'contract';

const WAREHOUSE_HUBS = [
  {
    code: 'Kho Miền Bắc',
    name: 'Trung tâm Kho Hà Nội',
    lots: '142 lô hàng · 1,280 vị trí kệ',
    sla: '99.5% giao đúng hẹn',
    badge: 'Đang hoạt động',
  },
  {
    code: 'Kho Miền Trung',
    name: 'Trung tâm Kho Đà Nẵng',
    lots: '86 lô hàng · 740 vị trí kệ',
    sla: '99.7% giao đúng hẹn',
    badge: 'Đang hoạt động',
  },
  {
    code: 'Kho Miền Nam',
    name: 'Trung tâm Kho TP.HCM',
    lots: '218 lô hàng · 1,950 vị trí kệ',
    sla: '99.2% giao đúng hẹn',
    badge: 'Đang hoạt động',
  },
] as const;

const LIVE_LOTS = [
  {
    sku: 'Cà phê Rang Xay 250g',
    lot: 'Lô tháng 10/2026',
    bin: 'Kho Hà Nội · Kệ A-02',
    expiry: '15/06/2027',
    available: '382 sản phẩm',
    status: 'Sẵn sàng xuất kho',
  },
  {
    sku: 'Trà Oolong Cao Cấp 500g',
    lot: 'Lô tháng 09/2026',
    bin: 'Kho Đà Nẵng · Kệ B-01',
    expiry: '20/04/2027',
    available: '170 sản phẩm',
    status: 'Ưu tiên xuất trước',
  },
  {
    sku: 'Mật Ong Hoa Rừng 1 Lít',
    lot: 'Lô tháng 11/2026',
    bin: 'Kho TP.HCM · Kệ C-04',
    expiry: '01/12/2027',
    available: '548 sản phẩm',
    status: 'Sẵn sàng xuất kho',
  },
] as const;

export default function LandingHero() {
  const [activeTab, setActiveTab] = useState<PreviewTab>('dashboard');

  return (
    <section
      id="overview"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24 sc-grid-bg"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[480px]"
        style={{
          background:
            'radial-gradient(ellipse 60% 45% at 50% 0%, var(--sc-primary-alpha-12) 0%, transparent 75%)',
        }}
      />

      <div className="relative mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10">
        {/* Clean Business Hero Copy */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--sc-border-default)] bg-[var(--sc-bg-surface)] px-3.5 py-1 text-xs font-medium text-[var(--sc-text-secondary)] shadow-[var(--sc-shadow-button)]">
            <span className="h-2 w-2 rounded-full bg-[var(--sc-success)]" />
            <span className="font-semibold text-[var(--sc-primary)]">ORCA FULFILLMENT</span>
            <span>·</span>
            <span>Giải pháp kho vận &amp; hoàn tất đơn hàng toàn diện</span>
          </div>

          <h1
            id="hero-heading"
            className="text-balance text-3xl font-extrabold tracking-[-0.03em] text-[var(--sc-text-primary)] sm:text-5xl lg:text-[52px] lg:leading-[1.12]"
            style={{ fontFamily: 'var(--sc-font-display)' }}
          >
            Tập trung phát triển kinh doanh,{' '}
            <span className="text-[var(--sc-primary)]">mọi khâu kho vận đã có ORCA.</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[var(--sc-text-secondary)] sm:text-lg">
            Lưu kho đa miền Bắc – Trung – Nam, quản lý tồn kho theo hạn sử dụng, đóng gói tiêu
            chuẩn, tối ưu phí giao hàng và đối soát tiền thu hộ (COD) minh bạch trên một nền tảng
            duy nhất.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a
              href={ADMIN_REGISTER_URL}
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--sc-primary)] px-6 py-3 text-sm font-semibold shadow-[0_8px_20px_rgb(15_118_110/25%)] transition-all hover:bg-[var(--sc-primary-hover)] active:scale-[0.98]"
              style={{ color: 'var(--sc-bg-surface)' }}
            >
              <span>Đăng ký Tài khoản Doanh nghiệp</span>
              <span aria-hidden="true">→</span>
            </a>

            <a
              href={ADMIN_LOGIN_URL}
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--sc-border-default)] bg-[var(--sc-bg-surface)] px-6 py-3 text-sm font-semibold text-[var(--sc-text-primary)] shadow-[var(--sc-shadow-button)] transition-colors hover:border-[var(--sc-border-strong)] hover:bg-[var(--sc-bg-secondary)]"
            >
              <span>Đăng nhập Hệ thống</span>
            </a>
          </div>
        </div>

        {/* Interactive Console Mockup Frame */}
        <div className="mt-12">
          <div className="sc-surface-elevated overflow-hidden border border-[var(--sc-border-strong)]">
            {/* Console Topbar */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--sc-border-default)] bg-[var(--sc-bg-surface)] px-4 py-3 sm:px-6">
              <div className="flex items-center gap-3">
                <OrcaLogo size="sm" />
                <span className="hidden h-4 w-px bg-[var(--sc-border-default)] sm:inline-block" />
                <span className="hidden text-xs font-medium text-[var(--sc-text-secondary)] sm:inline">
                  Bảng điều khiển dành cho Doanh nghiệp
                </span>
              </div>

              <div
                role="tablist"
                aria-label="Chế độ xem trước hệ thống"
                className="flex items-center gap-1 rounded-lg bg-[var(--sc-bg-secondary)] p-1"
              >
                {[
                  { id: 'dashboard', label: 'Mạng lưới kho' },
                  { id: 'inventory', label: 'Tồn kho & Hạn dùng' },
                  { id: 'contract', label: 'Hợp đồng & Chi phí' },
                ].map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveTab(tab.id as PreviewTab)}
                      className={`whitespace-nowrap rounded-md px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[var(--sc-bg-surface)] text-[var(--sc-primary)] shadow-[var(--sc-shadow-button)]'
                          : 'text-[var(--sc-text-secondary)] hover:text-[var(--sc-text-primary)]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              <span className="hidden items-center gap-1.5 rounded-full bg-[var(--sc-primary-lighter)] px-3 py-1 text-xs font-semibold text-[var(--sc-primary-dark)] lg:inline-flex">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--sc-primary)]" />
                Chủ Doanh Nghiệp
              </span>
            </div>

            {/* Console Workspace Content */}
            <div className="bg-[var(--sc-bg-primary)] p-4 sm:p-6">
              {/* 4 KPI Cards */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
                {[
                  { label: 'Đơn hàng trong tháng', value: '1,248 đơn', badge: 'Gói Tiêu Chuẩn' },
                  { label: 'Hàng tồn sẵn sàng bán', value: '14,820 sp', badge: '3 kho toàn quốc' },
                  {
                    label: 'Dung tích đang lưu kho',
                    value: '42.65 m³',
                    badge: 'Cập nhật mỗi ngày',
                  },
                  { label: 'Tỷ lệ bàn giao đúng hẹn', value: '99.4%', badge: 'Cam kết dịch vụ' },
                ].map((kpi) => (
                  <div key={kpi.label} className="sc-surface p-3.5 sm:p-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-medium text-[var(--sc-text-secondary)]">
                        {kpi.label}
                      </span>
                      <span className="rounded-full bg-[var(--sc-primary-lighter)] px-2 py-0.5 text-[10px] font-semibold text-[var(--sc-primary-dark)]">
                        {kpi.badge}
                      </span>
                    </div>
                    <div className="mt-2 text-lg font-bold tabular-nums text-[var(--sc-text-primary)] sm:text-2xl">
                      {kpi.value}
                    </div>
                  </div>
                ))}
              </div>

              {activeTab === 'dashboard' && (
                <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
                  {WAREHOUSE_HUBS.map((hub) => (
                    <div key={hub.code} className="sc-surface p-4">
                      <div className="flex items-center justify-between">
                        <span className="rounded-md bg-[var(--sc-primary-alpha-08)] px-2.5 py-1 text-xs font-bold text-[var(--sc-primary)]">
                          {hub.code}
                        </span>
                        <span className="rounded-full border border-[var(--sc-success-border)] bg-[var(--sc-success-bg)] px-2.5 py-0.5 text-[11px] font-semibold text-[var(--sc-success-dark)]">
                          {hub.badge}
                        </span>
                      </div>
                      <div className="mt-3 text-sm font-bold text-[var(--sc-text-primary)]">
                        {hub.name}
                      </div>
                      <div className="mt-1 flex items-center justify-between text-xs text-[var(--sc-text-secondary)]">
                        <span>{hub.lots}</span>
                        <span className="font-semibold text-[var(--sc-primary)]">{hub.sla}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'inventory' && (
                <div className="sc-surface mt-4 overflow-x-auto p-4">
                  <table className="w-full min-w-[560px] text-left text-xs">
                    <thead>
                      <tr className="border-b border-[var(--sc-border-default)] text-[var(--sc-text-tertiary)]">
                        <th className="pb-2.5 font-medium">Sản phẩm</th>
                        <th className="pb-2.5 font-medium">Lô nhập hàng</th>
                        <th className="pb-2.5 font-medium">Vị trí lưu trữ</th>
                        <th className="pb-2.5 font-medium">Hạn sử dụng</th>
                        <th className="pb-2.5 text-right font-medium">Tồn khả dụng</th>
                        <th className="pb-2.5 text-right font-medium">Trạng thái xuất</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[var(--sc-border-default)]">
                      {LIVE_LOTS.map((row) => (
                        <tr key={row.sku} className="text-[var(--sc-text-primary)]">
                          <td className="py-2.5 font-semibold">{row.sku}</td>
                          <td className="py-2.5 text-[var(--sc-primary)]">{row.lot}</td>
                          <td className="py-2.5">{row.bin}</td>
                          <td className="py-2.5 tabular-nums">{row.expiry}</td>
                          <td className="py-2.5 text-right font-bold tabular-nums text-[var(--sc-primary)]">
                            {row.available}
                          </td>
                          <td className="py-2.5 text-right">
                            <span className="rounded-full border border-[var(--sc-success-border)] bg-[var(--sc-success-bg)] px-2.5 py-0.5 text-[11px] font-semibold text-[var(--sc-success-dark)]">
                              {row.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === 'contract' && (
                <div className="sc-surface mt-4 grid grid-cols-1 gap-3 p-4 sm:grid-cols-3">
                  <div className="rounded-xl bg-[var(--sc-bg-secondary)] p-3.5">
                    <div className="text-xs text-[var(--sc-text-secondary)]">
                      Gói dịch vụ đang dùng
                    </div>
                    <div className="mt-1 text-lg font-bold tabular-nums text-[var(--sc-text-primary)]">
                      12.000.000 VND / tháng
                    </div>
                    <div className="mt-0.5 text-[11px] text-[var(--sc-text-tertiary)]">
                      Gói Tiêu Chuẩn · 3 kho · 1.500 đơn/tháng
                    </div>
                  </div>
                  <div className="rounded-xl bg-[var(--sc-bg-secondary)] p-3.5">
                    <div className="text-xs text-[var(--sc-text-secondary)]">
                      Tiền cọc &amp; Hạn mức công nợ
                    </div>
                    <div className="mt-1 text-lg font-bold tabular-nums text-[var(--sc-text-primary)]">
                      Cọc 3M · Hạn mức 5M
                    </div>
                    <div className="mt-0.5 text-[11px] text-[var(--sc-text-tertiary)]">
                      Quản lý độc lập, đối soát rõ ràng cuối kỳ
                    </div>
                  </div>
                  <div className="rounded-xl bg-[var(--sc-bg-secondary)] p-3.5">
                    <div className="text-xs text-[var(--sc-text-secondary)]">
                      Trạng thái hợp đồng
                    </div>
                    <div className="mt-1 text-lg font-bold text-[var(--sc-primary)]">
                      Đã ký điện tử hợp lệ
                    </div>
                    <div className="mt-0.5 text-[11px] text-[var(--sc-text-tertiary)]">
                      Lưu trữ trực tuyến, tra cứu bất cứ lúc nào
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
