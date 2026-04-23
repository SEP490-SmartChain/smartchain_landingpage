# Hướng dẫn Code Convention (Dự án Web Admin)

Tài liệu này quy định các chuẩn mực về cấu trúc thư mục, quy tắc viết code và quản lý luồng dữ liệu (Data Flow) trong dự án, đảm bảo source code dễ đọc, dễ bảo trì và dễ scale.

---

## 1. Cấu trúc Thư mục (Feature-Sliced Design)

Dự án áp dụng mô hình Feature-Sliced Design (FSD). Mọi tính năng mới KHÔNG ĐƯỢC nhét tất cả vào `src/components`. Bạn phải chia theo Domain/Nghiệp vụ.

```text
src/
├── app/                  # Routing, Layouts & Global Pages (Server Components)
│   ├── (admin)/          # Group route dành cho trang nội bộ (đã có AppLayout)
│   └── login/            # Các trang public không có layout admin
├── components/           # UI Components dùng chung (Atoms/Molecules)
│   ├── Common/           # Component phức tạp (DataTable, FileViewer)
│   └── ui/               # Component cơ bản (Button, Badge, Pagination)
├── features/             # Nơi chứa toàn bộ logic theo Domain (Core)
│   └── [feature_name]/   # Ví dụ: customers, orders, products...
│       ├── api/          # Hàm gọi API liên quan đến feature này
│       ├── components/   # Các UI Component đặc thù của feature này
│       └── schemas/      # Định nghĩa TypeScript Interface & Zod Schema
├── hooks/                # Global custom hooks (useAppStore, useAuth...)
├── i18n/                 # Cấu hình next-intl (request.ts) cho đa ngôn ngữ
├── services/             # Global services (apiClient.ts)
├── styles/               # Global CSS
└── proxy.ts              # Next.js 16+ Middleware (Thay thế cho middleware.ts cũ)
```

---

## 2. Quy tắc Rendering (Server vs Client)

Dự án sử dụng sức mạnh tối đa của Next.js App Router. Hãy tuân thủ quy tắc sau:

### 2.1. Server Components (Mặc định)
- Các file `page.tsx` trong thư mục `app/` **phải là Server Component** (KHÔNG có dòng `"use client"` ở đầu).
- **Trách nhiệm:** Lấy dữ liệu trực tiếp (Fetch Data), xử lý SEO, và truyền dữ liệu xuống Client Component thông qua `props`.

### 2.2. Client Components (`"use client"`)
- Chỉ sử dụng khi component cần tương tác trực tiếp với người dùng: có `onClick`, `onChange`, sử dụng `useState`, `useEffect`, hoặc custom hooks (`useAppStore`, `useForm`).
- Mọi file nằm trong `src/features/[name]/components/` thường sẽ là Client Component.

### 2.3. Routing & Middleware (Next.js 16+)
- **Middleware:** Từ Next.js 16, `middleware.ts` được đổi tên thành `proxy.ts` (File conventions). Mọi logic điều hướng, check auth ở cấp Server sẽ nằm ở `src/proxy.ts`.
- **Đa ngôn ngữ (i18n):** Sử dụng `next-intl` với cấu hình lưu locale qua Cookies (`NEXT_LOCALE`), thay vì chèn vào URL (ví dụ: `/vi/dashboard`). Quản lý cấu hình tại `src/i18n/request.ts` và không sử dụng `next-intl/middleware`.

---

## 3. Quy tắc Quản lý State & Form

### 3.1. Xác thực dữ liệu (Validation)
- BẤT KỲ Form nào cũng phải được định nghĩa Schema bằng **Zod** trước khi làm UI.
- Lưu file Schema tại `src/features/[name]/schemas/`.

```typescript
// Ví dụ: schemas/customerSchema.ts
import { z } from "zod";
export const customerSchema = z.object({
  email: z.string().email("Email không hợp lệ"),
});
export type CustomerFormValues = z.infer<typeof customerSchema>;
```

### 3.2. Quản lý Form (react-hook-form)
- Luôn sử dụng `useForm` kết hợp với `@hookform/resolvers/zod`.
- KHÔNG tạo state thủ công (`useState`) cho từng trường input trong Form.

---

## 4. Quy tắc Naming (Đặt tên)

- **Thư mục Feature:** Viết thường, số nhiều (Ví dụ: `customers`, `orders`, `products`).
- **Tên File Component:** PascalCase (Ví dụ: `CustomersTable.tsx`, `CustomerForm.tsx`).
- **Tên File Hook:** camelCase, bắt đầu bằng chữ "use" (Ví dụ: `useAppStore.ts`).
- **Tên Biến/Hàm:** camelCase (Ví dụ: `fetchCustomers`, `handleSubmit`).
- **Tên Interface/Type:** PascalCase (Ví dụ: `Customer`, `UserRole`).

---

## 5. Quy tắc Code UI & CSS

- **CSS Modules:** Mặc định sử dụng CSS Modules (`Component.module.css`) để đóng gói scope CSS, tránh xung đột class name toàn cầu.
- **Tái sử dụng UI:** Nếu một đoạn UI (như nút bấm, thẻ badge, thanh tìm kiếm) xuất hiện ở 2 nơi trở lên -> Bắt buộc phải extract nó ra thành Component bỏ vào `src/components/ui/`.
- **Biến màu sắc:** Ưu tiên dùng các biến CSS global đã định nghĩa trong `globals.css` (Ví dụ: `var(--gray-500)`) thay vì gõ mã HEX cứng.

---

## 6. Luồng phát triển một Tính năng mới (Workflow)

Khi bạn được giao làm một trang mới (VD: **Danh sách Sản phẩm**), hãy làm đúng theo thứ tự sau:

1. **Bước 1:** Tạo thư mục domain `src/features/products/`.
2. **Bước 2:** Định nghĩa dữ liệu `src/features/products/schemas/productSchema.ts` (Khai báo Zod schema, interface).
3. **Bước 3:** Tạo UI Component `src/features/products/components/ProductsTable.tsx` (Client component để render bảng và nút bấm).
4. **Bước 4:** Tạo trang Server `src/app/(admin)/products/page.tsx` để fetch data từ API và truyền vào `<ProductsTable />`.
5. **Bước 5:** (Tùy chọn) Viết các hàm gọi API trong `src/features/products/api/`.
