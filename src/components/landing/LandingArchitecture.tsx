const COMMITMENT_PILLARS = [
  {
    step: '01',
    name: 'Đồng Bộ Đơn Hàng Đa Kênh Tức Thì',
    tag: 'KẾT NỐI BÁN HÀNG MƯỢT MÀ',
    desc: 'Tiếp nhận đơn hàng tự động từ Website, sàn thương mại điện tử, hệ thống quản lý bán hàng hoặc tệp Excel chỉ trong vài giây mà không lo trùng lặp đơn.',
    badge: 'Tự động 100%',
    highlights: ['Kết nối nhanh chóng', 'Nhập đơn hàng loạt', 'Cập nhật trạng thái tức thì'],
  },
  {
    step: '02',
    name: 'Bảo Mật Tuyệt Đối Dữ Liệu Doanh Nghiệp',
    tag: 'AN TOÀN THÔNG TIN KINH DOANH',
    desc: 'Mỗi doanh nghiệp sở hữu một không gian quản trị độc lập. Thông tin nguồn hàng, giá vốn, khách hàng và doanh thu được bảo mật tuyệt đối.',
    badge: 'Bảo mật đa lớp',
    highlights: [
      'Tách biệt từng thương hiệu',
      'Phân quyền nhân sự rõ ràng',
      'Nhật ký hoạt động minh bạch',
    ],
  },
  {
    step: '03',
    name: 'Cam Kết Tồn Kho & Tốc Độ Xử Lý',
    tag: 'VẬN HÀNH CHÍNH XÁC',
    desc: 'Số lượng tồn kho hiển thị theo thời gian thực ngay sau mỗi thao tác nhập – xuất. Đảm bảo xử lý đơn hàng đúng cam kết thời gian ngay cả trong mùa cao điểm.',
    badge: '99.4% Đúng hẹn',
    highlights: [
      'Không bán quá số lượng tồn',
      'Kiểm kê định kỳ chính xác',
      'Cảnh báo hàng sắp hết hạn',
    ],
  },
  {
    step: '04',
    name: 'Hợp Đồng Điện Tử & Chứng Từ Đầy Đủ',
    tag: 'PHÁP LÝ & ĐỐI SOÁT RÕ RÀNG',
    desc: 'Ký kết hợp đồng dịch vụ trực tuyến nhanh chóng với đầy đủ giá trị pháp lý. Toàn bộ biên bản bàn giao, video kiểm hàng và hóa đơn được lưu trữ đầy đủ.',
    badge: 'Minh bạch 100%',
    highlights: ['Ký hợp đồng trực tuyến', 'Video mở kiện đối chứng', 'Quyết toán đúng kỳ hạn'],
  },
] as const;

export default function LandingArchitecture() {
  return (
    <section
      id="architecture"
      aria-labelledby="architecture-heading"
      className="relative border-t border-[var(--sc-border-default)] bg-[var(--sc-bg-secondary)] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--sc-border-default)] bg-[var(--sc-bg-surface)] px-3.5 py-1 text-xs font-semibold text-[var(--sc-primary)]">
            <span>CAM KẾT DỊCH VỤ &amp; BẢO MẬT</span>
          </div>

          <h2
            id="architecture-heading"
            className="mt-4 text-3xl font-extrabold tracking-tight text-[var(--sc-text-primary)] sm:text-4xl"
            style={{ fontFamily: 'var(--sc-font-display)' }}
          >
            Nền tảng vận hành đáng tin cậy cho{' '}
            <span className="text-[var(--sc-primary)]">mọi quy mô doanh nghiệp.</span>
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-[var(--sc-text-secondary)] sm:text-base">
            ORCA chuẩn hóa toàn bộ quy trình từ pháp lý hợp đồng, bảo mật dữ liệu kinh doanh cho đến
            cam kết chất lượng xử lý từng kiện hàng.
          </p>
        </div>

        {/* 4 Pillars */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {COMMITMENT_PILLARS.map((pillar) => (
            <div
              key={pillar.step}
              className="sc-surface flex flex-col justify-between p-6 transition-transform duration-200 hover:-translate-y-1"
            >
              <div>
                <div className="mb-4 flex items-center justify-between border-b border-[var(--sc-border-default)] pb-3">
                  <span className="text-2xl font-extrabold text-[var(--sc-primary)]">
                    {pillar.step}
                  </span>
                  <span className="rounded-md bg-[var(--sc-primary-lighter)] px-2.5 py-0.5 text-[10.5px] font-bold text-[var(--sc-primary-dark)]">
                    {pillar.badge}
                  </span>
                </div>

                <div className="mb-1 text-[11px] font-bold uppercase tracking-wider text-[var(--sc-text-tertiary)]">
                  {pillar.tag}
                </div>

                <h3
                  className="mb-2.5 text-base font-bold text-[var(--sc-text-primary)] sm:text-lg"
                  style={{ fontFamily: 'var(--sc-font-display)' }}
                >
                  {pillar.name}
                </h3>

                <p className="text-xs leading-relaxed text-[var(--sc-text-secondary)] sm:text-[13px]">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-1.5 border-t border-[var(--sc-border-default)] pt-4">
                {pillar.highlights.map((h) => (
                  <span
                    key={h}
                    className="rounded-md border border-[var(--sc-border-default)] bg-[var(--sc-bg-secondary)] px-2 py-0.5 text-[10.5px] font-medium text-[var(--sc-text-secondary)]"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
