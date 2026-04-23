import Link from "next/link";
import { Button } from "@/components/Common/Button/Button";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="text-center max-w-md bg-white p-12 rounded-2xl shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] border border-gray-200">
        <h1 className="text-8xl font-black text-blue-600 m-0 leading-none drop-shadow-md">404</h1>
        <h2 className="text-2xl font-bold text-gray-900 mt-4 mb-2">Không tìm thấy trang</h2>
        <p className="text-gray-500 mb-8 leading-relaxed">
          Xin lỗi, trang bạn đang cố gắng truy cập không tồn tại, đã bị xóa hoặc tạm thời không khả dụng.
        </p>
        <Link href="/dashboard">
          <Button variant="primary" size="lg">Về trang chủ</Button>
        </Link>
      </div>
    </div>
  );
}
