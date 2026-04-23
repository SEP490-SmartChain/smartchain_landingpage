"use client";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-gray-50">
      <div className="w-10 h-10 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin mb-4"></div>
      <p className="text-gray-500 text-sm font-medium">Đang tải dữ liệu...</p>
    </div>
  );
}
