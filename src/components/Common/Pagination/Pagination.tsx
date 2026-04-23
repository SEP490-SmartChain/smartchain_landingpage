import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-end gap-4 py-4">
      <button
        className="flex items-center justify-center w-8 h-8 rounded-md border border-gray-200 bg-white text-gray-600 transition-all duration-200 hover:bg-gray-50 hover:text-blue-600 hover:border-blue-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:hover:text-gray-600 disabled:hover:border-gray-200"
        disabled={currentPage <= 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <ChevronLeft size={16} />
      </button>

      <div className="text-sm text-gray-600">
        Trang <span className="font-semibold text-gray-900">{currentPage}</span> / {totalPages}
      </div>

      <button
        className="flex items-center justify-center w-8 h-8 rounded-md border border-gray-200 bg-white text-gray-600 transition-all duration-200 hover:bg-gray-50 hover:text-blue-600 hover:border-blue-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:hover:text-gray-600 disabled:hover:border-gray-200"
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
}
