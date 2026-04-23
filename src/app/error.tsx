"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex items-center justify-center h-screen w-full bg-gray-50 p-4">
      <div className="bg-white p-8 rounded-xl shadow-sm text-center max-w-sm w-full border border-gray-200">
        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl text-red-600">⚠️</span>
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">Đã có lỗi xảy ra!</h2>
        <p className="text-gray-500 text-sm mb-6">
          Hệ thống gặp sự cố trong quá trình xử lý yêu cầu. Vui lòng thử lại.
        </p>
        <button
          className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium transition-colors w-full border-none cursor-pointer hover:bg-blue-700"
          onClick={() => reset()}
        >
          Thử lại
        </button>
      </div>
    </div>
  );
}
