import React, { useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  maxWidth?: "sm" | "md" | "lg" | "xl";
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  footer,
  maxWidth = "md",
}: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-[2px] animate-[fadeIn_0.2s_ease-out]" onClick={onClose}>
      <style>{`
        @keyframes slideUp { from { opacity: 0; transform: translateY(1rem) scale(0.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
      `}</style>
      <div
        className={cn(
          "bg-white rounded-xl shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] flex flex-col w-full max-h-[calc(100vh-2rem)] animate-[slideUp_0.3s_cubic-bezier(0.16,1,0.3,1)]",
          maxWidth === "sm" && "max-w-sm",
          maxWidth === "md" && "max-w-2xl", // originally 32rem which is max-w-2xl
          maxWidth === "lg" && "max-w-4xl", // 48rem
          maxWidth === "xl" && "max-w-6xl"  // 64rem
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
          <h3 className="m-0 text-lg font-semibold text-gray-900">{title}</h3>
          <button className="bg-transparent border-none text-gray-400 cursor-pointer p-1 rounded-md flex items-center justify-center transition-colors hover:bg-gray-100 hover:text-gray-600" onClick={onClose}>
            <X size={20} />
          </button>
        </div>
        <div className="p-6 overflow-y-auto flex-1">{children}</div>
        {footer && <div className="px-6 py-5 border-t border-gray-200 flex justify-end gap-3 bg-gray-50 rounded-b-xl">{footer}</div>}
      </div>
    </div>
  );
}
