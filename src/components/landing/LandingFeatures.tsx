export default function LandingFeatures() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="relative py-20 sm:py-24 bg-[var(--sc-bg-primary)]"
    >
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10">
        {/* Clean Section Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--sc-border-default)] bg-[var(--sc-bg-surface)] px-3.5 py-1 text-xs font-semibold text-[var(--sc-primary)]">
            <span>GIÁ TRỊ MANG LẠI CHO DOANH NGHIỆP</span>
          </div>

          <h2
            id="features-heading"
            className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--sc-text-primary)] sm:text-4xl"
            style={{ fontFamily: 'var(--sc-font-display)' }}
          >
            Kiểm soát chặt chẽ hàng hóa,{' '}
            <span className="text-[var(--sc-primary)]">tối ưu từng đồng chi phí vận hành.</span>
          </h2>

          <p className="mt-2.5 text-sm leading-relaxed text-[var(--sc-text-secondary)] sm:text-base">
            Loại bỏ hoàn toàn nỗi lo thất thoát hàng tồn, giao nhầm hàng cận hạn hay chênh lệch tiền
            thu hộ (COD) cuối tháng.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {/* Cell 1 (2 Cols): Expiry & Lot Control */}
          <article className="sc-surface flex flex-col justify-between p-6 sm:p-7 lg:col-span-2">
            <div>
              <span className="rounded-full bg-[var(--sc-primary-lighter)] px-3 py-1 text-xs font-bold text-[var(--sc-primary-dark)]">
                QUẢN LÝ LÔ HÀNG &amp; HẠN SỬ DỤNG
              </span>

              <h3
                className="mt-3.5 text-xl font-bold text-[var(--sc-text-primary)] sm:text-2xl"
                style={{ fontFamily: 'var(--sc-font-display)' }}
              >
                Tự động ưu tiên xuất theo hạn dùng &amp; Hỗ trợ thu hồi nhanh
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-[var(--sc-text-secondary)]">
                Mỗi lô hàng nhập kho đều được theo dõi hạn sử dụng và vị trí kệ cụ thể. Hệ thống tự
                động xuất các lô có hạn dùng gần nhất trước. Khi cần kiểm tra chất lượng đột xuất,
                ORCA khoanh vùng lô hàng ngay lập tức và chuyển đơn sang lô thay thế để không làm
                gián đoạn việc kinh doanh.
              </p>
            </div>

            <div className="mt-5 rounded-xl border border-[var(--sc-border-default)] bg-[var(--sc-bg-secondary)] p-4">
              <div className="flex items-center justify-between border-b border-[var(--sc-border-default)] pb-2.5">
                <span className="text-xs font-semibold text-[var(--sc-text-primary)]">
                  Khoanh vùng &amp; Chuyển đổi lô hàng tự động
                </span>
                <span className="rounded bg-[var(--sc-bg-surface)] px-2 py-0.5 text-xs font-bold text-[var(--sc-primary)]">
                  Lô tháng 10/2026
                </span>
              </div>

              <div className="mt-3 grid grid-cols-3 gap-2.5 text-center">
                <div className="rounded-lg bg-[var(--sc-bg-surface)] p-2.5">
                  <div className="text-base font-bold text-[var(--sc-text-primary)]">100%</div>
                  <div className="text-[11px] text-[var(--sc-text-secondary)]">
                    Truy xuất nguồn gốc
                  </div>
                </div>
                <div className="rounded-lg bg-[var(--sc-bg-surface)] p-2.5">
                  <div className="text-base font-bold text-[var(--sc-primary)]">Tự động</div>
                  <div className="text-[11px] text-[var(--sc-text-secondary)]">
                    Đổi sang lô đạt chuẩn
                  </div>
                </div>
                <div className="rounded-lg bg-[var(--sc-bg-surface)] p-2.5">
                  <div className="text-base font-bold text-[var(--sc-success-dark)]">0%</div>
                  <div className="text-[11px] text-[var(--sc-text-secondary)]">
                    Rủi ro giao hàng quá hạn
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Cell 2: Smart Routing & Carrier Selection */}
          <article className="sc-surface flex flex-col justify-between p-6 sm:p-7">
            <div>
              <span className="rounded-full bg-[var(--sc-info-bg)] px-3 py-1 text-xs font-bold text-[var(--sc-info-dark)]">
                TỐI ƯU GIAO VẬN
              </span>

              <h3
                className="mt-3.5 text-xl font-bold text-[var(--sc-text-primary)]"
                style={{ fontFamily: 'var(--sc-font-display)' }}
              >
                Chọn Kho Gần Nhất &amp; So Sánh Cước Phí
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-[var(--sc-text-secondary)]">
                Tự động phân bổ đơn về kho gần người nhận nhất và chọn đối tác vận chuyển (GHN,
                GHTK...) có mức cước tối ưu nhất.
              </p>
            </div>

            <div className="mt-5 rounded-xl border border-[var(--sc-border-default)] bg-[var(--sc-bg-secondary)] p-4 text-xs">
              <div className="font-semibold text-[var(--sc-text-primary)]">
                Xuất từ: Trung tâm Kho TP.HCM
              </div>
              <div className="mt-1 text-[var(--sc-text-secondary)]">
                Đơn vị giao: <strong>GHN Tiêu chuẩn</strong> ·{' '}
                <strong className="tabular-nums text-[var(--sc-primary)]">
                  Tiết kiệm 22% cước
                </strong>
              </div>
            </div>
          </article>

          {/* Cell 3: 48h Return QC */}
          <article className="sc-surface flex flex-col justify-between p-6 sm:p-7">
            <div>
              <span className="rounded-full bg-[var(--sc-success-bg)] px-3 py-1 text-xs font-bold text-[var(--sc-success-dark)]">
                QUẢN LÝ HÀNG HOÀN
              </span>

              <h3
                className="mt-3.5 text-xl font-bold text-[var(--sc-text-primary)]"
                style={{ fontFamily: 'var(--sc-font-display)' }}
              >
                Kiểm Định Hàng Hoàn Trong 48 Giờ
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-[var(--sc-text-secondary)]">
                Hàng hoàn về được kiểm tra ngoại quan kèm hình ảnh thực tế trong 48 giờ. Hàng nguyên
                vẹn được nhập lại kệ bán ngay.
              </p>
            </div>

            <div className="mt-5 rounded-xl border border-[var(--sc-border-default)] bg-[var(--sc-bg-secondary)] p-4 text-xs">
              <div className="flex items-center justify-between">
                <span className="rounded bg-[var(--sc-info-bg)] px-2 py-0.5 font-semibold text-[var(--sc-info-dark)]">
                  Đã chụp ảnh đối chứng
                </span>
                <span className="text-[var(--sc-text-secondary)]">Cam kết 48h</span>
              </div>
              <div className="mt-2 text-[var(--sc-text-secondary)]">
                Chủ hàng chủ động chọn nhập lại kho hoặc thanh lý
              </div>
            </div>
          </article>

          {/* Cell 4 (2 Cols): Transparent Billing & COD */}
          <article className="sc-surface flex flex-col justify-between p-6 sm:p-7 lg:col-span-2">
            <div>
              <span className="rounded-full bg-[var(--sc-primary-lighter)] px-3 py-1 text-xs font-bold text-[var(--sc-primary-dark)]">
                MINH BẠCH TÀI CHÍNH &amp; DÒNG TIỀN
              </span>

              <h3
                className="mt-3.5 text-xl font-bold text-[var(--sc-text-primary)] sm:text-2xl"
                style={{ fontFamily: 'var(--sc-font-display)' }}
              >
                Tính Phí Lưu Kho Theo Thể Tích Thực Tế &amp; Đối Soát COD Rõ Ràng
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-[var(--sc-text-secondary)]">
                Dung tích lưu kho được ghi nhận tự động mỗi ngày theo lượng hàng thực tế đang nằm
                tại kho. Bảng kê cuối kỳ tách bạch rõ ràng giữa Phí thuê bao, Phí xử lý đơn hàng,
                Tiền cọc và Tiền thu hộ (COD).
              </p>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                {
                  tag: 'Trả theo thực tế',
                  title: 'Tính phí m³/ngày minh bạch',
                  desc: 'Dùng bao nhiêu không gian kệ tính bấy nhiêu, gộp định mức miễn phí trên toàn mạng lưới.',
                },
                {
                  tag: 'Rõ ràng từng khoản',
                  title: 'Sổ tiền & Công nợ tách biệt',
                  desc: 'Tiền cọc hợp đồng, phí dịch vụ và tiền thu hộ COD không bao giờ bị trộn lẫn.',
                },
                {
                  tag: 'Bảo vệ quyền lợi',
                  title: 'Cam kết bồi thường rõ ràng',
                  desc: 'Mọi khiếu nại hư hỏng hoặc thất lạc đều có video/hình ảnh tại kho làm căn cứ bồi hoàn.',
                },
              ].map((item) => (
                <div
                  key={item.tag}
                  className="rounded-xl border border-[var(--sc-border-default)] bg-[var(--sc-bg-secondary)] p-3.5"
                >
                  <div className="text-[11px] font-bold text-[var(--sc-primary)]">{item.tag}</div>
                  <div className="mt-1 text-sm font-semibold text-[var(--sc-text-primary)]">
                    {item.title}
                  </div>
                  <p className="mt-1 text-xs text-[var(--sc-text-secondary)]">{item.desc}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
