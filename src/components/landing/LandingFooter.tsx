import { ADMIN_LOGIN_URL, ADMIN_REGISTER_URL } from '@/config/site';

import OrcaLogo from './OrcaLogo';

const FOOTER_LINKS = {
  'Dịch Vụ Cho Nhà Bán Hàng': [
    { label: 'Lưu kho đa miền Bắc – Trung – Nam', href: '#overview' },
    { label: 'Quản lý lô hàng & hạn sử dụng', href: '#features' },
    { label: 'Đóng gói tiêu chuẩn & Combo', href: '#workflow' },
    { label: 'Ký hợp đồng dịch vụ trực tuyến', href: '#pricing' },
    { label: 'Đối soát tiền thu hộ (COD)', href: '#pricing' },
  ],
  'Năng Lực Vận Hành': [
    { label: 'Kiểm đếm độc lập có video', href: '#workflow' },
    { label: 'Tự động chọn kho gần khách nhất', href: '#workflow' },
    { label: 'Tối ưu cước phí GHN & GHTK', href: '#features' },
    { label: 'Kiểm định hàng hoàn trong 48 giờ', href: '#features' },
    { label: 'Hỗ trợ thu hồi lô hàng nhanh', href: '#features' },
  ],
  'Cam Kết Chất Lượng': [
    { label: 'Đồng bộ đơn hàng đa kênh', href: '#architecture' },
    { label: 'Bảo mật dữ liệu thương hiệu', href: '#architecture' },
    { label: 'Chính sách bồi thường rõ ràng', href: '#architecture' },
    { label: 'Biểu phí dịch vụ minh bạch', href: '#pricing' },
  ],
  'Truy Cập Hệ Thống': [
    { label: 'Đăng nhập Bảng điều khiển', href: ADMIN_LOGIN_URL },
    { label: 'Đăng ký Doanh nghiệp mới', href: ADMIN_REGISTER_URL },
    { label: 'Xem Bảng giá gói dịch vụ', href: '#pricing' },
    { label: 'Tham quan Mô hình Kho 3D', href: '#workflow' },
  ],
} as const;

export default function LandingFooter() {
  return (
    <footer className="border-t border-[var(--sc-border-default)] bg-[var(--sc-bg-surface)] py-12 sm:py-16">
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="/" className="inline-block">
              <OrcaLogo size="md" />
            </a>
            <p className="mt-4 text-xs leading-relaxed text-[var(--sc-text-secondary)]">
              Giải pháp Fulfillment &amp; Điều phối kho vận đa điểm dành cho doanh nghiệp thương mại
              điện tử Việt Nam.
            </p>
            <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[var(--sc-primary-lighter)] px-3 py-1 text-[11px] font-semibold text-[var(--sc-primary-dark)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--sc-success)]" />
              <span>Hệ thống kho vận hoạt động 24/7</span>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--sc-text-primary)]">
                {category}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {links.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-xs text-[var(--sc-text-secondary)] transition-colors hover:text-[var(--sc-primary)]"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-[var(--sc-border-default)] pt-6 text-xs text-[var(--sc-text-tertiary)] sm:flex-row">
          <p>© 2026 ORCA Fulfillment · Giải pháp Kho vận &amp; Điều phối Đa điểm</p>
          <div className="flex flex-wrap items-center gap-6">
            <a
              href={ADMIN_LOGIN_URL}
              className="hover:text-[var(--sc-text-primary)] transition-colors"
            >
              Chính sách bảo mật
            </a>
            <a
              href={ADMIN_LOGIN_URL}
              className="hover:text-[var(--sc-text-primary)] transition-colors"
            >
              Điều khoản dịch vụ
            </a>
            <a href="#pricing" className="hover:text-[var(--sc-text-primary)] transition-colors">
              Biểu phí dịch vụ kho
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
