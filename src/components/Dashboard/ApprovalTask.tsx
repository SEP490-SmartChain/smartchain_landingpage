import React from "react";
import { FileText, Users, AlertCircle, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface TaskItem {
  id: string;
  type: "PR" | "VENDOR" | "QC_ISSUE";
  icon: React.ReactNode;
  title: string;
  description: string;
  time?: string;
  person?: string;
  department?: string;
  actions: { label: string; primary?: boolean }[];
  theme: "blue" | "orange" | "pink";
}

const mockTasks: TaskItem[] = [
  {
    id: "1",
    type: "PR",
    icon: <FileText size={18} />,
    title: "Duyệt Yêu cầu mua hàng PR-0901",
    description: "Mua thép làm base khuôn MOLD-T100. Đã qua bước thẩm định kỹ thuật.",
    time: "2 giờ trước",
    person: "Nguyễn Văn A",
    actions: [
      { label: "Phê duyệt", primary: true },
      { label: "Từ chối" },
    ],
    theme: "blue",
  },
  {
    id: "2",
    type: "VENDOR",
    icon: <Users size={18} />,
    title: "Đánh giá Nhà cung cấp mới",
    description: "NCC Thép ĐẶC BIỆT K-Tech. Đã nhận báo giá, chờ đánh giá năng lực.",
    time: "Hôm qua",
    department: "Chăm sóc NCC",
    actions: [{ label: "Tiến hành đánh giá" }],
    theme: "orange",
  },
  {
    id: "3",
    type: "QC_ISSUE",
    icon: <AlertCircle size={18} />,
    title: "Xử lý hàng lỗi - PO-2023-0995",
    description: "Lô chốt dẫn hướng khuôn không đạt dung sai kích thước từ QC.",
    person: "Cần xử lý gấp",
    actions: [{ label: "Tạo phiếu đổi trả" }],
    theme: "pink",
  },
];

export default function ApprovalTask() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm h-full">
      <div className="px-6 py-5 border-b border-gray-100">
        <h3 className="text-base font-bold text-gray-800 m-0">Nhiệm vụ & Phê duyệt</h3>
      </div>

      <div className="flex flex-col">
        {mockTasks.map((task) => (
          <div key={task.id} className="p-6 border-b border-gray-100 transition-colors duration-200 hover:bg-gray-50 last:border-none">
            <div className="flex gap-4 mb-4">
              <div 
                className={cn(
                  "shrink-0 w-10 h-10 rounded-full flex items-center justify-center",
                  task.theme === "blue" && "bg-blue-50 text-blue-700",
                  task.theme === "orange" && "bg-orange-50 text-orange-700",
                  task.theme === "pink" && "bg-pink-50 text-pink-700"
                )}
              >
                {task.icon}
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-bold text-gray-800 leading-tight m-0">{task.title}</h4>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">{task.description}</p>
                
                <div className="flex flex-wrap gap-4 mt-3">
                  {task.time && (
                    <span className="flex items-center gap-1 text-xs font-medium text-gray-400">
                      <Clock size={14} /> {task.time}
                    </span>
                  )}
                  {task.person && (
                    <span className="flex items-center gap-1 text-xs font-medium text-gray-400">
                      {task.person.startsWith("Cần") ? "" : "Người trình: "} {task.person}
                    </span>
                  )}
                  {task.department && (
                    <span className="flex items-center gap-1 text-xs font-medium text-gray-400">
                      Nhiệm vụ: {task.department}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="flex gap-3 ml-14">
              {task.actions.map((action, idx) => (
                <button
                  key={idx}
                  className={cn(
                    "px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 border-none cursor-pointer",
                    action.primary 
                      ? "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-sm" 
                      : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300"
                  )}
                >
                  {action.label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
