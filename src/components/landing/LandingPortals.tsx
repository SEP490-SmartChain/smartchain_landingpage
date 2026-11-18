import { useState } from 'react';

type PortalId = 'seller' | 'warehouse' | 'platform';

const PORTALS = [
  {
    id: 'seller' as const,
    badge: 'DÀNH CHO KHÁCH HÀNG DOANH NGHIỆP',
    title: '1. Cổng Quản Trị Nhà Bán Hàng',
    subtitle: 'Dành cho Chủ thương hiệu & Nhân sự vận hành đơn hàng của doanh nghiệp',
    description:
      'Theo dõi toàn bộ hàng hóa gửi tại mạng lưới kho ORCA theo thời gian thực. Doanh nghiệp chủ động tạo lịch gửi hàng vào kho, nắm bắt lượng tồn từng mặt hàng, theo dõi trạng thái giao hàng và kiểm tra bảng kê chi phí, tiền thu hộ (COD) minh bạch.',
    roles: [
      {
        title: 'Chủ Doanh Nghiệp / Chủ Cửa Hàng',
        desc: 'Ký hợp đồng dịch vụ trực tuyến, quản lý danh mục sản phẩm, quyết định phương án xử lý hàng hoàn và theo dõi công nợ, doanh thu COD.',
      },
      {
        title: 'Nhân Viên Quản Lý Đơn Hàng',
        desc: 'Tạo phiếu gửi hàng vào kho, tra cứu số lượng tồn kho thực tế và theo dõi tiến độ giao từng đơn hàng cho khách mua.',
      },
    ],
    modules: [
      'Quản lý danh mục sản phẩm & quy cách',
      'Đăng ký lịch gửi hàng vào kho',
      'Theo dõi tồn kho đa điểm & dự báo nhu cầu',
      'Đồng bộ đơn hàng tự động từ đa kênh',
      'Ký hợp đồng điện tử trực tuyến',
      'Bảng kê chi phí & đối soát tiền thu hộ (COD)',
    ],
    previewTitle: 'Giao diện Nhà Bán Hàng · Minh bạch tài chính & hàng hóa',
    previewRows: [
      {
        tag: 'Bảng kê tháng 10',
        title: 'Tổng hợp phí dịch vụ lưu kho & xử lý đơn hàng',
        meta: 'Hiển thị chi tiết từng đơn hàng đã đóng gói và thể tích lưu kho thực tế mỗi ngày',
        status: 'Đã đối soát hoàn tất',
        tone: 'success',
      },
      {
        tag: 'Dự báo nhập hàng',
        title: 'Gợi ý bổ sung tồn kho cho mùa cao điểm',
        meta: 'Cảnh báo sớm các mặt hàng bán chạy sắp chạm ngưỡng an toàn tại Kho TP.HCM',
        status: 'Khuyến nghị nhập thêm',
        tone: 'info',
      },
      {
        tag: 'Xử lý hàng hoàn',
        title: 'Yêu cầu xác nhận phương án xử lý kiện hoàn về',
        meta: '2 sản phẩm bị móp vỏ hộp trong quá trình giao · Đính kèm hình ảnh chụp thực tế tại kho',
        status: 'Chờ chủ hàng xác nhận',
        tone: 'warning',
      },
    ],
  },
  {
    id: 'warehouse' as const,
    badge: 'VẬN HÀNH TIÊU CHUẨN TẠI KHO',
    title: '2. Hệ Thống Tác Nghiệp Kho & Thiết Bị Di Động',
    subtitle: 'Dành cho Quản lý kho & Đội ngũ nhân sự trực tiếp xử lý hàng hóa',
    description:
      'Mọi thao tác từ lúc nhận hàng, kiểm đếm, cất lên kệ cho đến lấy hàng và đóng gói đều được thực hiện qua thiết bị quét mã vạch chuyên dụng, kèm hình ảnh và video đối chứng nhằm loại bỏ hoàn toàn sai sót thủ công.',
    roles: [
      {
        title: 'Quản Lý Trung Tâm Kho',
        desc: 'Tổ chức sơ đồ khu vực kệ chứa hàng, phê duyệt biên bản kiểm nhận, phân bổ các đợt lấy hàng trong ngày và tổ chức kiểm kê định kỳ.',
      },
      {
        title: 'Nhân Viên Vận Hành Kho',
        desc: 'Thực hiện kiểm đếm độc lập khi hàng đến, quay video mở kiện, cất hàng đúng vị trí kệ, lấy hàng theo lộ trình và đóng gói bàn giao bưu tá.',
      },
    ],
    modules: [
      'Kiểm đếm độc lập kèm video đối chứng',
      'Kiểm tra ngoại quan kiện hàng khi nhập',
      'Sắp xếp & định vị chính xác từng ô kệ',
      'Lấy hàng theo đợt tối ưu quãng đường di chuyển',
      'Đóng gói tiêu chuẩn & bàn giao có chữ ký',
      'Kiểm định chất lượng hàng hoàn trong 48 giờ',
    ],
    previewTitle: 'Giao diện Vận Hành Kho · Chuẩn xác ở từng khâu vật lý',
    previewRows: [
      {
        tag: 'Nhập kho Hà Nội',
        title: 'Hoàn tất kiểm đếm & lưu trữ lô hàng mới',
        meta: 'Đã lưu trữ video mở kiện · 100% thùng hàng nguyên vẹn, đã sắp xếp lên kệ A-02',
        status: 'Đã sẵn sàng mở bán',
        tone: 'success',
      },
      {
        tag: 'Xử lý đơn trong ngày',
        title: 'Lấy hàng theo đợt 45 đơn hàng ưu tiên',
        meta: 'Hệ thống hướng dẫn nhân viên đi theo lộ trình ngắn nhất qua các dãy kệ, quét mã chống nhầm sản phẩm',
        status: 'Đang đóng gói (38/45 đơn)',
        tone: 'info',
      },
      {
        tag: 'Kiểm định hàng hoàn',
        title: 'Đánh giá tình trạng kiện hàng giao không thành công',
        meta: 'Hoàn tất kiểm tra trong vòng 48 giờ kể từ khi bưu tá trả hàng · Đã chụp ảnh báo cáo cho chủ hàng',
        status: 'Hoàn tất đúng cam kết',
        tone: 'success',
      },
    ],
  },
  {
    id: 'platform' as const,
    badge: 'ĐIỀU PHỐI MẠNG LƯỚI & KẾ TOÁN',
    title: '3. Trung Tâm Điều Phối & Đối Soát ORCA',
    subtitle: 'Dành cho Ban quản trị dịch vụ, Bộ phận Điều phối giao nhận & Kế toán đối soát',
    description:
      'Giám sát xuyên suốt tiến độ giao hàng với các đối tác vận chuyển (GHN, GHTK...), chủ động xử lý sớm các đơn hàng có nguy cơ trễ hẹn, hỗ trợ thu hồi nhanh các lô hàng cần kiểm tra và đảm bảo đối soát tài chính chính xác từng đồng.',
    roles: [
      {
        title: 'Ban Quản Trị Mạng Lưới',
        desc: 'Quản lý năng lực các trung tâm kho, kết nối đối tác vận chuyển và công bố biểu phí dịch vụ, hợp đồng minh bạch.',
      },
      {
        title: 'Chuyên Viên Điều Phối Giao Nhận',
        desc: 'Thiết lập quy tắc chọn kho tối ưu, theo dõi cam kết thời gian giao hàng, hỗ trợ thu hồi lô hàng và giải quyết khiếu nại vận chuyển.',
      },
      {
        title: 'Bộ Phận Kế Toán Đối Soát',
        desc: 'Đối chiếu cước phí và tiền thu hộ (COD) từ các hãng vận chuyển, xác nhận thanh toán và quyết toán công nợ định kỳ cho khách hàng.',
      },
    ],
    modules: [
      'Tự động chọn kho gần nhất & hãng cước tốt nhất',
      'Giám sát tiến độ & xử lý sự cố giao hàng',
      'Truy xuất nguồn gốc & khóa nhanh lô hàng cần thu hồi',
      'Quản lý biểu phí dịch vụ kho & bảng cước vận chuyển',
      'Đối soát tự động tiền thu hộ (COD) & trọng lượng kiện',
      'Giải quyết khiếu nại & bồi thường minh bạch',
    ],
    previewTitle: 'Giao diện Điều Phối & Kế Toán · Bảo vệ quyền lợi khách hàng',
    previewRows: [
      {
        tag: 'Tối ưu phí giao hàng',
        title: 'Tự động chọn phương án vận chuyển tiết kiệm nhất',
        meta: 'Đơn hàng đi Cần Thơ được xuất từ Kho TP.HCM qua đối tác có mức cước tối ưu nhất, giúp tiết kiệm 22% chi phí',
        status: 'Đã tối ưu tự động',
        tone: 'success',
      },
      {
        tag: 'An toàn chất lượng',
        title: 'Hỗ trợ khoanh vùng & tạm dừng xuất lô hàng cần kiểm tra',
        meta: 'Tự động chuyển các đơn đang chờ sang lô hàng mới đủ tiêu chuẩn để không làm gián đoạn việc giao hàng cho khách',
        status: 'Đã xử lý an toàn',
        tone: 'warning',
      },
      {
        tag: 'Đối soát tài chính',
        title: 'Kiểm tra chênh lệch cước phí & tiền thu hộ (COD)',
        meta: 'Tự động đối chiếu trọng lượng đóng gói thực tế tại kho với bảng tính phí của hãng vận chuyển',
        status: 'Khớp 100% số liệu',
        tone: 'info',
      },
    ],
  },
] as const;

export default function LandingPortals() {
  const [activePortal, setActivePortal] = useState<PortalId>('seller');
  const current = PORTALS.find((p) => p.id === activePortal) ?? PORTALS[0];

  return (
    <section
      id="portals"
      aria-labelledby="portals-heading"
      className="relative py-20 sm:py-28 border-t border-[var(--sc-border-default)] bg-[var(--sc-bg-secondary)]"
    >
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--sc-border-default)] bg-[var(--sc-bg-surface)] px-3.5 py-1 text-xs font-semibold text-[var(--sc-primary)]">
            <span>HỆ SINH THÁI QUẢN TRỊ CHUYÊN BIỆT</span>
          </div>

          <h2
            id="portals-heading"
            className="mt-4 text-3xl font-extrabold tracking-tight text-[var(--sc-text-primary)] sm:text-4xl"
            style={{ fontFamily: 'var(--sc-font-display)' }}
          >
            Một nền tảng thống nhất,{' '}
            <span className="text-[var(--sc-primary)]">phối hợp nhịp nhàng mọi bộ phận.</span>
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-[var(--sc-text-secondary)] sm:text-base">
            ORCA kết nối trực tiếp Nhà bán hàng, Đội ngũ nhân sự tại kho và Trung tâm điều phối – kế
            toán trên cùng một hệ thống, đảm bảo thông tin xuyên suốt và bảo mật riêng biệt cho từng
            doanh nghiệp.
          </p>
        </div>

        {/* Portal Selector Tabs */}
        <div
          role="tablist"
          aria-label="Chọn phân hệ ORCA"
          className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3"
        >
          {PORTALS.map((portal) => {
            const isSelected = portal.id === activePortal;
            return (
              <button
                key={portal.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActivePortal(portal.id)}
                className={`flex flex-col items-start rounded-2xl border p-5 text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'border-[var(--sc-primary)] bg-[var(--sc-bg-surface)] shadow-[var(--sc-shadow-popover)]'
                    : 'border-[var(--sc-border-default)] bg-[var(--sc-bg-surface)]/65 hover:border-[var(--sc-border-strong)] hover:bg-[var(--sc-bg-surface)]'
                }`}
              >
                <span className="rounded-md bg-[var(--sc-primary-lighter)] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[var(--sc-primary-dark)]">
                  {portal.badge}
                </span>
                <span className="mt-2.5 text-base font-bold text-[var(--sc-text-primary)]">
                  {portal.title}
                </span>
                <span className="mt-1 text-xs text-[var(--sc-text-secondary)]">
                  {portal.subtitle}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Portal Detail Panel */}
        <div className="sc-surface-elevated mt-6 overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.05fr_1.15fr] lg:items-start">
            {/* Left: Business Benefits & Roles */}
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--sc-primary)]">
                <span>●</span>
                <span>{current.badge}</span>
              </div>

              <h3
                className="mt-2 text-2xl font-bold text-[var(--sc-text-primary)] sm:text-3xl"
                style={{ fontFamily: 'var(--sc-font-display)' }}
              >
                {current.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[var(--sc-text-secondary)]">
                {current.description}
              </p>

              {/* Roles */}
              <div className="mt-6 space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-[var(--sc-text-tertiary)]">
                  Phân quyền rõ ràng theo trách nhiệm
                </div>
                {current.roles.map((r) => (
                  <div
                    key={r.title}
                    className="rounded-xl border border-[var(--sc-border-default)] bg-[var(--sc-bg-secondary)] p-3.5"
                  >
                    <div className="text-sm font-semibold text-[var(--sc-text-primary)]">
                      {r.title}
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-[var(--sc-text-secondary)]">
                      {r.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Modules Checklist */}
              <div className="mt-6">
                <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-[var(--sc-text-tertiary)]">
                  Tiện ích nổi bật
                </div>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {current.modules.map((mod) => (
                    <div
                      key={mod}
                      className="flex items-center gap-2 rounded-lg border border-[var(--sc-border-default)] bg-[var(--sc-bg-surface)] px-3 py-2 text-xs font-medium text-[var(--sc-text-primary)]"
                    >
                      <span className="text-[var(--sc-primary)]">✓</span>
                      <span>{mod}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Live Business Screen Simulation */}
            <div className="rounded-2xl border border-[var(--sc-border-default)] bg-[var(--sc-bg-primary)] p-4 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--sc-border-default)] pb-3.5">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--sc-primary)]" />
                  <span className="text-xs font-semibold text-[var(--sc-text-primary)] sm:text-sm">
                    {current.previewTitle}
                  </span>
                </div>
                <span className="rounded-md bg-[var(--sc-primary-lighter)] px-2.5 py-0.5 text-[10px] font-bold text-[var(--sc-primary-dark)]">
                  TRỰC QUAN &amp; MINH BẠCH
                </span>
              </div>

              <div className="mt-4 space-y-3">
                {current.previewRows.map((row) => {
                  const badgeStyle =
                    row.tone === 'success'
                      ? 'border-[var(--sc-success-border)] bg-[var(--sc-success-bg)] text-[var(--sc-success-dark)]'
                      : row.tone === 'warning'
                        ? 'border-[var(--sc-warning-border)] bg-[var(--sc-warning-bg)] text-[var(--sc-warning-dark)]'
                        : 'border-[var(--sc-info-border)] bg-[var(--sc-info-bg)] text-[var(--sc-info-dark)]';

                  return (
                    <div key={row.title} className="sc-surface p-4 transition-all">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-bold text-[var(--sc-primary)]">
                          {row.tag}
                        </span>
                        <span
                          className={`rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${badgeStyle}`}
                        >
                          {row.status}
                        </span>
                      </div>
                      <div className="mt-2 text-sm font-semibold text-[var(--sc-text-primary)]">
                        {row.title}
                      </div>
                      <p className="mt-1 text-xs leading-relaxed text-[var(--sc-text-secondary)]">
                        {row.meta}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-[var(--sc-border-default)] bg-[var(--sc-bg-surface)] p-3.5 text-xs text-[var(--sc-text-secondary)]">
                <span className="text-base leading-none text-[var(--sc-primary)]">🛡️</span>
                <div>
                  <strong className="text-[var(--sc-text-primary)]">
                    Cam kết bảo mật thông tin kinh doanh:
                  </strong>{' '}
                  Dữ liệu sản phẩm, giá bán, danh sách khách hàng và doanh thu của từng thương hiệu
                  được bảo vệ độc lập hoàn toàn. Nhân sự kho chỉ tiếp cận thông tin phục vụ đóng gói
                  và giao nhận.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
