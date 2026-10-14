import type { Translations } from '../types';

export const vi: Translations = {
  nav: {
    stories: 'Nỗi Đau & Giải Pháp',
    features: 'Tính Năng',
    architecture: 'Quy Trình',
    pricing: 'Bảng Giá',
    login: 'Đăng nhập Workspace',
  },
  hero: {
    systemBadge: 'HỆ THỐNG ĐIỀU PHỐI LOGISTICS ĐA KHO THÔNG MINH',
    exploreTitle: 'Khám Phá Mạng Lưới ORCA',
    exploreHint: 'Lăn chuột hoặc Click trực tiếp vào 4 điểm nút & Lõi trung tâm để khám phá',
    startTour: 'Bắt đầu tham quan',
    coreLabel: '⚡ ORCA Core',
    stops: {
      global: {
        tag: 'TỔNG QUAN HỆ THỐNG',
        title: 'Mạng Lưới Điều Phối Đơn Hàng Đa Kho — Ba Miền',
        subtitle: 'Đồng bộ đa điểm · Tối ưu tự động',
        description: '',
        nodeBadge: '3 KHO · HÀ NỘI · ĐÀ NẴNG · TP.HCM',
        stats: [],
        hudPills: [],
        cta: '',
      },
      pain1: {
        tag: 'NỖI ĐAU 01 · GIAO HÀNG CHẬM',
        title: 'Hàng Ở Một Nơi, Khách ở Ba Miền',
        subtitle: 'Giao liên miền 3–5 ngày · Tự đóng hàng 125 giờ/tháng',
        description:
          'Shop ở Đà Nẵng bán hàng khô cho khách Hà Nội và TP.HCM. Mỗi kiện 1 kg gửi đi mất 35.000đ và 3–5 ngày. Tối nào hai vợ chồng cũng tự đóng hàng mà khách vẫn nhận chậm và dễ gửi nhầm vì không quét mã.',
        nodeBadge: '⚠️ GIAO XA CHẬM & TỐN CÔNG ĐÓNG GÓI',
        stats: [
          { value: '3–5 ngày', label: 'Giao liên miền' },
          { value: '35.000đ', label: 'Cước 1 kg xa' },
          { value: '125 giờ', label: 'Tự đóng hàng/tháng' },
        ],
        hudPills: [
          { icon: '📦', text: 'Hàng ở một nơi, đơn ở hai miền còn lại đều gửi xa — chậm và tốn tiền' },
          { icon: '⏰', text: 'Tự đóng hàng không quét mã dễ gửi nhầm, gửi thiếu mà không biết' },
        ],
        cta: 'ORCA giúp giao nhanh hơn 1–4 ngày',
      },
      pain2: {
        tag: 'NỖI ĐAU 02 · HÀNG HẾT HẠN',
        title: 'Hàng Có Hạn Dùng Bị Huỷ Vì Không Theo Dõi Lô',
        subtitle: 'Bán lô mới trước · Lô cũ nằm đến khi hết hạn',
        description:
          'Shop không theo dõi lô, bán hàng mới trước, lô cũ nằm lại đến khi hết hạn. Hàng đặc sản, gạo, cà phê có hạn dùng ngắn — phải huỷ càng lãng phí. Không biết lô nào đã giao cho ai để thu hồi khi có sự cố.',
        nodeBadge: '⚠️ HÀNG HẾT HẠN & KHÔNG TRUY XUẤT ĐƯỢC',
        stats: [
          { value: 'Lãng phí', label: 'Hàng bị huỷ' },
          { value: '???', label: 'Không biết lô đã giao' },
          { value: 'Mất vốn', label: 'Không thu hồi được' },
        ],
        hudPills: [
          { icon: '🗓️', text: 'Không theo dõi lô — không biết lô nào đã giao cho ai khi cần thu hồi' },
          { icon: '🛢️', text: 'Hàng bị huỷ vì hết hạn là lãng phí trực tiếp cho người bán' },
        ],
        cta: 'ORCA xuất lô gần hết hạn trước',
      },
      sol1: {
        tag: 'GIẢI PHÁP 01 · CHỌN KHO & LÔ',
        title: 'ORCA Chọn Kho Gần Nhất & Xuất Lô Theo Hạn',
        subtitle: 'FEFO — Xuất lô gần hết hạn trước · Tự tách đơn đa kho',
        description:
          'ORCA tự chọn kho gần người mua nhất và xuất lô gần hết hạn trước. Nếu một kho không đủ hàng, tự tách đơn tối đa 3 kiện từ nhiều kho và phân bổ tiền COD chính xác 0đ sai lệch. Không bao giờ xuất lô đã hết hạn hoặc đang bị thu hồi.',
        nodeBadge: '⚡ CHỌN KHO & LÔ TỐI ƯU',
        stats: [
          { value: 'FEFO', label: 'Xuất lô đúng' },
          { value: '≤3 kiện', label: 'Tách đơn đa kho' },
          { value: '0đ', label: 'Sai lệch tiền COD' },
        ],
        hudPills: [
          { icon: '⚡', text: 'Xuất lô gần hết hạn trước — giảm hàng bị huỷ vì hết hạn' },
          { icon: '🔀', text: 'Tự tách đơn & phân bổ tiền thu hộ COD chuẩn xác tuyệt đối' },
        ],
        cta: 'Xem chi tiết cách chọn kho',
      },
      sol2: {
        tag: 'GIẢI PHÁP 02 · CHỌN HÃNG TỰ ĐỘNG',
        title: 'ORCA Chọn Hãng & Tự Chuyển Khi Hãng Lỗi',
        subtitle: 'Tích hợp sẵn GHN, GHTK, Viettel Post, J&T',
        description:
          'Luật chọn hãng do điều phối viên ORCA đặt. Hãng lỗi mùa sale thì hệ thống tự chuyển sang hãng dự phòng — không tạo trùng vận đơn. Mọi vận đơn đều tạo bằng tài khoản ORCA, người bán không cần tài khoản riêng với hãng.',
        nodeBadge: '🔗 TỰ ĐỘNG FAILOVER HÃNG',
        stats: [
          { value: 'Tự động', label: 'Chuyển hãng khi lỗi' },
          { value: '4+', label: 'Hãng dự phòng' },
          { value: '0', label: 'Trùng vận đơn' },
        ],
        hudPills: [
          { icon: '💰', text: 'Người bán không cần tài khoản riêng với GHN, GHTK hay Viettel Post' },
          { icon: '🔗', text: 'Hãng lỗi thì tự failover sang hãng dự phòng — không kẹt đơn' },
        ],
        cta: 'Xem cấu hình Rule Engine',
      },
      core: {
        tag: 'TRỌNG TÂM · TRUNG TÂM ĐIỀU PHỐI',
        title: 'ORCA: Trợ Lý Kho Vận Cho Shop Online',
        subtitle: 'Giao nhanh hơn 1–4 ngày · Không lo hàng hết hạn · Rõ tiền COD',
        description:
          'Toàn bộ chuỗi kho vận đổ về ORCA. Shop chỉ cần tạo phiếu gửi hàng và theo dõi — ORCA lo mọi việc: xếp hàng vào kệ, quét mã xuất kho, chụp ảnh kiện hàng, đối soát COD hàng tuần và chuyển khoản về tài khoản.',
        nodeBadge: '⚡ ORCA — TRUNG TÂM KHO VẬN',
        stats: [
          { value: '99.99%', label: 'Độ chính xác' },
          { value: '30s', label: 'Thời gian đối soát' },
          { value: '1M+ Dòng', label: 'Xử lý dữ liệu' },
        ],
        hudPills: [
          { icon: '🎯', text: 'Xuất lô gần hết hạn trước — giảm hàng bị huỷ, cảnh báo sắp hết hàng từng kho' },
          { icon: '📊', text: 'Báo cáo tồn kho, đơn hàng, tiền COD — xuất theo kỳ để tự kê khai thuế' },
        ],
        cta: 'Bắt đầu sử dụng ORCA',
      },
    },
    nodes: {
      pain1: {
        name: 'Hàng Ở Một Nơi, Khách Ba Miền',
        shortLabel: 'Giao Xa & Chậm',
      },
      pain2: {
        name: 'Hàng Hết Hạn Do Thiếu Quản Lý Lô',
        shortLabel: 'Hàng Hết Hạn',
      },
      sol1: {
        name: 'Chọn Kho Gần & Xuất Lô FEFO',
        shortLabel: 'Kho & Lô FEFO',
      },
      sol2: {
        name: 'Chọn Hãng Tự Động & Failover',
        shortLabel: 'Hãng & Failover',
      },
    },
  },
  features: {
    heading: 'Kiến trúc được xây dựng',
    headingHighlight: 'cho shop vừa và nhỏ.',
    subheading:
      'Mỗi tính năng được thiết kế để giải quyết một nỗi đau thực tế của shop online bán ngoài sàn tại Việt Nam — giao hàng chậm, hàng hết hạn, lệch tiền COD.',
    items: {
      f1: {
        title: 'Chọn Kho & Lô Theo Hạn Dùng',
        desc: 'Thuật toán tự động chọn kho gần người mua và xuất lô gần hết hạn trước — không để hàng bị huỷ vì hết hạn. Hệ thống không bao giờ xuất lô đã hết hạn hoặc đang bị thu hồi.',
        tag: null,
      },
      f2: {
        title: 'Rate Shopping 3PL',
        desc: 'So sánh cước GHN, GHTK, Viettel Post, J&T theo thời gian thực. Luật chọn hãng đặt sẵn, tự động chuyển hãng khi hãng lỗi — không kẹt đơn.',
        tag: '4+ Hãng vận chuyển',
      },
      f3: {
        title: 'Tách Đơn Tự Động',
        desc: 'Khi một kho không đủ hàng, ORCA tự tách đơn — tối đa 3 kiện từ nhiều kho — và phân bổ tiền COD chính xác theo từng kiện.',
        tag: 'Tối đa 3 kiện / đơn',
      },
      f4: {
        title: 'Đối Soát Tiền Thu Hộ COD',
        desc: 'Mỗi tuần, hệ thống đối soát tiền COD từ hãng, trừ phí vận chuyển và phí dịch vụ, lập bảng kê chuyển khoản cho từng người bán. Mỗi khoản phí chỉ được tính đúng một lần.',
        tag: 'Mỗi tuần thanh toán',
      },
    },
  },
  architecture: {
    badge: 'QUY TRÌNH VẬN HÀNH ORCA',
    heading: 'Từ Đơn Hàng Đến',
    headingHighlight: 'Giao Tận Tay',
    subheading:
      'ORCA xử lý toàn bộ chuỗi — từ khi nhận đơn đến khi chuyển khoản COD về tài khoản người bán. Người bán rảnh tay, ORCA lo mọi việc kho vận.',
    layers: {
      step1: {
        name: 'Nhận Đơn & Xác Thực',
        tag: 'TIẾP NHẬN ĐƠN HÀNG',
        desc: 'Shop gửi đơn qua kết nối tự động (website, Google Sheets), nhập tay hoặc tải file. Đơn thu hộ có rủi ro cao được giữ lại chờ người bán gọi xác nhận trước khi xử lý.',
        badge: 'Nhiều kênh nhập',
      },
      step2: {
        name: 'Chọn Kho & Lô Hàng',
        tag: 'ĐIỀU PHỐI KHO THÔNG MINH',
        desc: 'Hệ thống tự chọn kho gần người mua, xuất lô gần hết hạn trước (FEFO). Nếu một kho không đủ hàng, tự tách đơn từ nhiều kho — tối đa 3 kiện. Không xuất lô đã hết hạn hoặc bị thu hồi.',
        badge: 'FEFO hạn dùng',
      },
      step3: {
        name: 'Chọn Hãng & Tạo Vận Đơn',
        tag: 'PHÂN BỔ VẬN CHUYỂN',
        desc: 'Luật chọn hãng do điều phối viên ORCA đặt — GHN, GHTK, Viettel Post, J&T. Hãng lỗi thì tự chuyển hãng dự phòng, không tạo trùng vận đơn. Mọi vận đơn tạo bằng tài khoản ORCA.',
        badge: 'Tự động failover',
      },
      step4: {
        name: 'Đối Soát & Chuyển Khoản',
        tag: 'TÀI CHÍNH & BÁO CÁO',
        desc: 'Mỗi tuần đối soát COD với hãng, trừ phí đúng một lần, lập bảng kê. Shop xem được tồn kho, đơn hàng, tiền của mình mọi lúc — xuất dữ liệu theo kỳ để tự kê khai thuế.',
        badge: 'Mỗi tuần',
      },
    },
  },
  pricing: {
    badge: 'BẢNG GIÁ MINH BẠCH · KHÔNG CHI PHÍ ẨN',
    heading: 'Phí Dịch Vụ Minh Bạch',
    headingHighlight: 'Không Chi Phí Ẩn',
    subheading:
      'Linh hoạt theo số đơn thực tế. Shop hòa vốn ngay khi khoảng 60% đơn đi miền khác — rảnh tay là lợi ích có ngay từ tháng đầu.',
    tiers: {
      starter: {
        name: 'Gói Cơ Bản',
        tag: 'DÀNH CHO SHOP MỚI BẮT ĐẦU',
        price: '4.000.000',
        unit: 'đ / tháng',
        desc: 'Một kho, tự động chọn hãng vận chuyển và đối soát COD hàng tuần.',
        features: [
          'Tối đa 700 đơn hàng / tháng',
          'Sử dụng 1 kho (chọn một trong 3 miền)',
          'Chọn hãng tự động: GHN, GHTK, Viettel Post',
          'Đối soát COD hàng tuần',
          'Quét mã khi xuất kho',
          'Hỗ trợ qua Ticket & Email',
        ],
        cta: 'Bắt đầu dùng thử',
      },
      growth: {
        name: 'Gói Tiêu Chuẩn',
        tag: 'PHỔ BIẾN NHẤT · 3 MIỀN',
        price: '12.000.000',
        unit: 'đ / tháng',
        desc: 'Ba kho Ba Miền, xuất lô theo hạn dùng, tự tách đơn và gợi ý chia hàng vào kho.',
        features: [
          'Tối đa 1.500 đơn hàng / tháng',
          'Dùng 3 kho: Hà Nội, Đà Nẵng, TP.HCM',
          'Xuất lô gần hết hạn trước (FEFO)',
          'Tự tách đơn khi kho không đủ hàng',
          'Gợi ý chia hàng vào kho theo tốc độ bán',
          'Cảnh báo hàng sắp hết & gần hết hạn',
          'Hỗ trợ 24/7 qua Hotline & Zalo',
        ],
        cta: 'Bắt đầu với Gói Tiêu Chuẩn',
      },
      enterprise: {
        name: 'Gói Doanh Nghiệp',
        tag: 'QUY MÔ LỚN & ĐẶC THÙ',
        price: 'Liên hệ',
        unit: 'theo quy mô',
        desc: 'Tùy chỉnh số kho, số đơn, luật ưu tiên riêng và hợp đồng bảo mật.',
        features: [
          'Không giới hạn số đơn / tháng',
          'Mở rộng số kho theo yêu cầu',
          'Luật chọn kho và hãng riêng theo hợp đồng',
          'Tích hợp API với hệ thống nội bộ',
          'Hạn mức nợ và đặt cọc tùy biến',
          'Account Manager chuyên trách riêng',
          'Hợp đồng bảo mật dữ liệu',
        ],
        cta: 'Liên Hệ Tư Vấn',
      },
    },
  },
  cta: {
    headingLine1: 'Sẵn sàng rảnh tay',
    headingLine2: 'kho vận cho ORCA?',
    subheading:
      'Tham gia cùng các shop online đang giao hàng nhanh hơn 1–4 ngày với ORCA — không còn kẹt đơn, không còn lệch tiền, không còn lo hàng hết hạn.',
    button: 'Bắt đầu dùng ORCA',
    secondary: 'Xem Bảng Giá',
  },
  footer: {
    tagline: 'Nền tảng SaaS giúp shop online giao hàng nhanh hơn, không lo hàng hết hạn và đối soát COD rõ ràng.',
    groupServices: 'Dịch Vụ',
    groupIntegrations: 'Kết Nối',
    groupDocs: 'Tài Liệu',
    groupCompany: 'Công Ty',
    copyright: '© 2026 ORCA · SEP490 SE_34 · FPT University Da Nang',
    links: {
      services: ['Chọn Kho & Lô', 'Rate Shopping', 'Tách Đơn', 'Đối Soát COD', 'Hàng Trả Về'],
      integrations: ['GHN API', 'GHTK API', 'Viettel Post', 'J&T Express', 'Google Sheets'],
      docs: ['Hướng Dẫn Shop', 'API Documentation', 'Changelog'],
      company: ['Về ORCA', 'Liên Hệ'],
    },
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    apiTerms: 'API Terms',
  },
};
