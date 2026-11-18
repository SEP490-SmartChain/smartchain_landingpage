import { ADMIN_LOGIN_URL, ADMIN_REGISTER_URL } from '@/config/site';

const PRICING_TIERS = [
  {
    code: 'BASIC',
    name: 'Gói Cơ Bản (Basic)',
    tag: 'DÀNH CHO CỬA HÀNG KHỞI ĐẦU',
    price: '4.000.000',
    priceNote: 'VND / tháng · Chi phí cố định hợp lý',
    warehouses: '1 kho',
    orders: '500 đơn / tháng',
    deposit: '3.000.000 VND',
    creditLimit: '5.000.000 VND',
    contractType: 'Ký hợp đồng điện tử trực tuyến',
    popular: false,
    desc: 'Phù hợp cho thương hiệu bắt đầu chuẩn hóa quy trình lưu kho, đóng gói chuyên nghiệp và giao hàng nhanh tại 1 khu vực trọng điểm.',
    features: [
      'Lưu trữ hàng hóa tại 1 trung tâm kho ORCA',
      'Định mức 500 đơn bán hàng / tháng',
      'Quản lý tồn kho chi tiết theo từng lô & hạn sử dụng',
      'Tự động ưu tiên xuất hàng cận hạn trước',
      'Đồng bộ đơn hàng tự động từ đa kênh bán',
      'Ký hợp đồng điện tử nhanh chóng ngay trên web',
    ],
    cta: 'Chọn gói Cơ Bản',
    ctaLink: ADMIN_REGISTER_URL,
  },
  {
    code: 'STANDARD',
    name: 'Gói Tiêu Chuẩn (Standard)',
    tag: 'DOANH NGHIỆP MỞ RỘNG ĐA MIỀN',
    price: '12.000.000',
    priceNote: 'VND / tháng · Tối ưu tốc độ & cước giao hàng',
    warehouses: '3 kho',
    orders: '1.500 đơn / tháng',
    deposit: '3.000.000 VND',
    creditLimit: '5.000.000 VND',
    contractType: 'Ký hợp đồng điện tử trực tuyến',
    popular: true,
    desc: 'Phân bổ hàng hóa tại cả 3 miền Bắc – Trung – Nam, tự động chọn kho gần người mua nhất để rút ngắn thời gian giao và tiết kiệm cước phí.',
    features: [
      'Sử dụng tối đa 3 trung tâm kho (Bắc – Trung – Nam)',
      'Định mức 1.500 đơn bán hàng / tháng',
      'Tự động chọn kho xuất hàng gần khách mua nhất',
      'So sánh & chọn mức cước tốt nhất từ GHN, GHTK',
      'Công cụ dự báo nhu cầu nhập hàng thông minh',
      'Đối soát tiền thu hộ (COD) & bảng kê chi tiết mỗi kỳ',
    ],
    cta: 'Chọn gói Tiêu Chuẩn',
    ctaLink: ADMIN_REGISTER_URL,
  },
  {
    code: 'ENTERPRISE',
    name: 'Gói Doanh Nghiệp Lớn',
    tag: 'THƯƠNG HIỆU SẢN LƯỢNG LỚN',
    price: 'Thỏa thuận',
    priceNote: 'Thiết kế riêng theo quy mô & sản lượng',
    warehouses: 'Theo nhu cầu',
    orders: 'Không giới hạn',
    deposit: 'Theo thỏa thuận',
    creditLimit: 'Hạn mức công nợ riêng',
    contractType: 'Thỏa thuận & ký hợp đồng riêng',
    popular: false,
    desc: 'Giải pháp may đo cho các thương hiệu lớn cần dung tích lưu trữ lớn, biểu phí ưu đãi theo sản lượng và đội ngũ điều phối chuyên trách.',
    features: [
      'Không giới hạn số lượng kho và sản lượng đơn/tháng',
      'Định mức dung tích lưu trữ (m³) và biểu phí ưu đãi riêng',
      'Hạn mức công nợ và mức cam kết bồi thường riêng biệt',
      'Hỗ trợ đóng gói theo bộ (Combo) & chiến dịch lớn',
      'Báo cáo phân tích vận hành & tài chính chuyên sâu',
      'Chuyên viên điều phối & kế toán phụ trách riêng',
    ],
    cta: 'Liên hệ nhận báo giá riêng',
    ctaLink: ADMIN_LOGIN_URL,
  },
] as const;

const SERVICE_TARIFF_ITEMS = [
  {
    name: 'Lấy hàng và đóng gói đơn',
    unit: 'Tính theo đơn',
    desc: 'Nhân viên lấy hàng tại kệ, kiểm tra đúng mẫu mã và đóng gói theo quy chuẩn.',
  },
  {
    name: 'Tiếp nhận & kiểm đếm hàng nhập',
    unit: 'Tính theo thùng',
    desc: 'Kiểm đếm độc lập, quay video đối chứng khi mở kiện và sắp xếp hàng lên kệ.',
  },
  {
    name: 'Lưu kho theo thể tích thực tế',
    unit: 'Tính theo m³/ngày',
    desc: 'Ghi nhận tự động mỗi ngày dựa trên không gian thực tế hàng hóa đang chiếm dụng.',
  },
  {
    name: 'Kiểm định hàng hoàn sau giao',
    unit: 'Tính theo kiện',
    desc: 'Kiểm tra tình trạng hàng hoàn về trong 48 giờ kèm hình ảnh báo cáo cho chủ hàng.',
  },
  {
    name: 'Đóng gói bộ sản phẩm (Combo)',
    unit: 'Tính theo bộ',
    desc: 'Ghép nhiều sản phẩm thành bộ quà tặng hoặc combo khuyến mãi theo yêu cầu.',
  },
  {
    name: 'Vật tư đóng gói bảo vệ',
    unit: 'Tính theo vật tư',
    desc: 'Cung cấp thùng carton, màng chống sốc và phụ kiện bảo vệ theo kích thước kiện.',
  },
] as const;

export default function LandingPricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="relative bg-[var(--sc-bg-primary)] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--sc-border-default)] bg-[var(--sc-bg-surface)] px-3.5 py-1 text-xs font-semibold text-[var(--sc-primary)]">
            <span>BẢNG GIÁ MINH BẠCH · HỢP ĐỒNG RÕ RÀNG</span>
          </div>

          <h2
            id="pricing-heading"
            className="mt-4 text-3xl font-extrabold tracking-tight text-[var(--sc-text-primary)] sm:text-4xl"
            style={{ fontFamily: 'var(--sc-font-display)' }}
          >
            Lựa chọn gói dịch vụ phù hợp với{' '}
            <span className="text-[var(--sc-primary)]">quy mô tăng trưởng của bạn.</span>
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-[var(--sc-text-secondary)] sm:text-base">
            Mọi điều khoản, định mức kho, hạn mức công nợ và biểu phí đều được công bố minh bạch. Ký
            kết hợp đồng điện tử trực tuyến và bắt đầu gửi hàng ngay.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-stretch">
          {PRICING_TIERS.map((tier) => (
            <article
              key={tier.code}
              className={`relative flex flex-col justify-between rounded-2xl border p-6 sm:p-8 transition-all ${
                tier.popular
                  ? 'border-2 border-[var(--sc-primary)] bg-[var(--sc-bg-surface)] shadow-[var(--sc-shadow-popover)]'
                  : 'border-[var(--sc-border-default)] bg-[var(--sc-bg-surface)] shadow-[var(--sc-shadow-section)]'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-6 rounded-full bg-[var(--sc-primary)] px-3.5 py-1 text-[10.5px] font-bold uppercase tracking-wider text-white">
                  ★ LỰA CHỌN TỐI ƯU CHO ĐA KHO
                </div>
              )}

              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--sc-text-tertiary)]">
                    {tier.tag}
                  </span>
                  <span className="rounded-md bg-[var(--sc-bg-secondary)] px-2.5 py-1 text-[11px] font-bold text-[var(--sc-primary)]">
                    {tier.code}
                  </span>
                </div>

                <h3
                  className="mt-2 text-2xl font-bold text-[var(--sc-text-primary)]"
                  style={{ fontFamily: 'var(--sc-font-display)' }}
                >
                  {tier.name}
                </h3>

                <div className="mt-4 pb-4 border-b border-[var(--sc-border-default)]">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl font-extrabold tabular-nums text-[var(--sc-text-primary)]">
                      {tier.price}
                    </span>
                    <span className="text-xs font-medium text-[var(--sc-text-secondary)]">
                      {tier.code === 'ENTERPRISE' ? '' : 'VND / tháng'}
                    </span>
                  </div>
                  <div className="mt-1 text-xs text-[var(--sc-text-tertiary)]">
                    {tier.priceNote}
                  </div>
                </div>

                <dl className="my-4 grid grid-cols-2 gap-3 rounded-xl bg-[var(--sc-bg-secondary)] p-3.5">
                  <div>
                    <dt className="text-[11px] text-[var(--sc-text-secondary)]">Số kho sử dụng</dt>
                    <dd className="mt-0.5 text-sm font-bold tabular-nums text-[var(--sc-text-primary)]">
                      {tier.warehouses}
                    </dd>
                  </div>
                  <div className="border-l border-[var(--sc-border-default)] pl-3">
                    <dt className="text-[11px] text-[var(--sc-text-secondary)]">
                      Định mức đơn hàng
                    </dt>
                    <dd className="mt-0.5 text-sm font-bold tabular-nums text-[var(--sc-text-primary)]">
                      {tier.orders}
                    </dd>
                  </div>
                </dl>

                <dl className="mb-4 grid grid-cols-2 gap-3 text-xs">
                  <div className="rounded-lg border border-[var(--sc-border-default)] p-2.5">
                    <dt className="text-[11px] text-[var(--sc-text-secondary)]">
                      Tiền cọc đảm bảo
                    </dt>
                    <dd className="mt-0.5 font-semibold tabular-nums text-[var(--sc-text-primary)]">
                      {tier.deposit}
                    </dd>
                  </div>
                  <div className="rounded-lg border border-[var(--sc-border-default)] p-2.5">
                    <dt className="text-[11px] text-[var(--sc-text-secondary)]">
                      Hạn mức nợ phí dịch vụ
                    </dt>
                    <dd className="mt-0.5 font-semibold tabular-nums text-[var(--sc-primary)]">
                      {tier.creditLimit}
                    </dd>
                  </div>
                </dl>

                <p className="text-xs leading-relaxed text-[var(--sc-text-secondary)] mb-4">
                  {tier.desc}
                </p>

                <ul className="space-y-2.5 mb-6">
                  {tier.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-2 text-xs text-[var(--sc-text-primary)]"
                    >
                      <span className="mt-0.5 shrink-0 font-bold text-[var(--sc-primary)]">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-[var(--sc-border-default)] pt-4">
                <div className="mb-3 text-[11px] text-[var(--sc-text-tertiary)]">
                  Hình thức: {tier.contractType}
                </div>
                <a
                  href={tier.ctaLink}
                  className={`flex w-full items-center justify-center gap-2 rounded-xl py-3 text-xs font-semibold transition-all sm:text-sm ${
                    tier.popular
                      ? 'bg-[var(--sc-primary)] text-white shadow-[0_6px_16px_rgb(15_118_110/25%)] hover:bg-[var(--sc-primary-hover)]'
                      : 'border border-[var(--sc-border-strong)] bg-[var(--sc-bg-secondary)] text-[var(--sc-text-primary)] hover:bg-[var(--sc-bg-muted)]'
                  }`}
                  style={tier.popular ? { color: 'var(--sc-bg-surface)' } : undefined}
                >
                  <span>{tier.cta}</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Service Tariffs Disclosure Box */}
        <div className="sc-surface mt-10 p-6 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[var(--sc-border-default)] pb-4">
            <div>
              <h3 className="text-base font-bold text-[var(--sc-text-primary)] sm:text-lg">
                Danh mục Phí thao tác kho &amp; Vận chuyển (Tính theo thực tế phát sinh)
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-[var(--sc-text-secondary)] sm:text-sm">
                Ngoài phí thuê bao gói hàng tháng, các dịch vụ thao tác tại kho được tính minh bạch
                theo số lượng thực tế sử dụng. Cước giao hàng tính theo biểu phí công bố và hoàn
                toàn tách biệt với tiền thu hộ (COD).
              </p>
            </div>
            <span className="rounded-full bg-[var(--sc-primary-lighter)] px-3 py-1 text-xs font-semibold text-[var(--sc-primary-dark)]">
              Không chi phí ẩn
            </span>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICE_TARIFF_ITEMS.map((item) => (
              <div
                key={item.name}
                className="rounded-xl border border-[var(--sc-border-default)] bg-[var(--sc-bg-secondary)] p-4"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-[var(--sc-text-primary)] sm:text-sm">
                    {item.name}
                  </span>
                  <span className="rounded bg-[var(--sc-bg-surface)] px-2 py-0.5 text-[10.5px] font-semibold text-[var(--sc-primary)]">
                    {item.unit}
                  </span>
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-[var(--sc-text-secondary)]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
