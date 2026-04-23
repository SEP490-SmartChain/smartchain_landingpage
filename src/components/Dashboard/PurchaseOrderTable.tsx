import React, { useState } from "react";
import DataTable, { ColumnDef } from "@/components/Common/DataTable/DataTable";
import { cn } from "@/lib/utils";

interface PurchaseOrder {
  id: string;
  prId: string;
  vendor: string;
  vendorSubtitle: string;
  project: string;
  expectedDate: string;
  status: "DELIVERING" | "QC_PENDING" | "STOCKED";
  statusText: string;
}

const mockOrders: PurchaseOrder[] = [
  {
    id: "PO-2023-1024",
    prId: "Từ PR-0892",
    vendor: "Công ty Thép Hòa Phát",
    vendorSubtitle: "Thép tấm S50C",
    project: "MOLD-AUTO-01",
    expectedDate: "24/10/2023",
    status: "DELIVERING",
    statusText: "Đang giao hàng",
  },
  {
    id: "PO-2023-1025",
    prId: "Từ PR-0894",
    vendor: "Misumi Vietnam",
    vendorSubtitle: "Linh kiện tiêu chuẩn khuôn",
    project: "MOLD-PHONE-02",
    expectedDate: "25/10/2023",
    status: "QC_PENDING",
    statusText: "Chờ kiểm tra QC",
  },
  {
    id: "PO-2023-1028",
    prId: "Từ PR-0897",
    vendor: "Vật tư CNC Hitachi",
    vendorSubtitle: "Dao phay ngón hợp kim",
    project: "Vật tư tiêu hao",
    expectedDate: "26/10/2023",
    status: "STOCKED",
    statusText: "Đã nhập kho",
  },
  {
    id: "PO-2023-1030",
    prId: "Từ MRP-Q4",
    vendor: "Đồng thau YB",
    vendorSubtitle: "Đồng đỏ làm điện cực",
    project: "MOLD-AUTO-01",
    expectedDate: "28/10/2023",
    status: "DELIVERING",
    statusText: "Đang giao hàng",
  },
];

export default function PurchaseOrderTable() {
  const [page, setPage] = useState(1);

  const columns: ColumnDef<PurchaseOrder>[] = [
    {
      key: "id",
      label: "MÃ PO / PR",
      render: (row) => (
        <>
          <div className="text-sm font-bold text-gray-800">{row.id}</div>
          <div className="text-xs text-gray-500 mt-0.5">{row.prId}</div>
        </>
      ),
    },
    {
      key: "vendor",
      label: "NHÀ CUNG CẤP",
      render: (row) => (
        <>
          <div className="text-sm font-bold text-gray-800">{row.vendor}</div>
          <div className="text-xs text-gray-500 mt-0.5">{row.vendorSubtitle}</div>
        </>
      ),
    },
    {
      key: "project",
      label: "DỰ ÁN KHUÔN",
      render: (row) => (
        <span className="inline-block px-2.5 py-1 text-xs font-medium text-gray-500 border border-gray-200 rounded-md">
          {row.project}
        </span>
      ),
    },
    {
      key: "expectedDate",
      label: "NGÀY DỰ KIẾN",
      render: (row) => <span className="text-sm text-gray-700">{row.expectedDate}</span>,
    },
    {
      key: "status",
      label: "TRẠNG THÁI",
      render: (row) => (
        <span 
          className={cn(
            "inline-flex px-2.5 py-1 text-xs font-semibold rounded-md whitespace-nowrap",
            row.status === "DELIVERING" && "bg-orange-50 text-orange-700",
            row.status === "QC_PENDING" && "bg-blue-50 text-blue-700",
            row.status === "STOCKED" && "bg-green-50 text-green-700"
          )}
        >
          {row.statusText}
        </span>
      ),
    },
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm h-full">
      <div className="p-5 px-6 flex items-center justify-between border-b border-gray-100">
        <h3 className="text-base font-bold text-gray-800 m-0">Đơn mua hàng đang thực hiện (PO)</h3>
        <button className="text-sm font-medium text-blue-600 transition-colors duration-200 hover:text-blue-700 hover:underline border-none bg-transparent cursor-pointer">Xem tất cả</button>
      </div>

      <div className="p-6">
        <DataTable
          columns={columns}
          data={mockOrders}
          pagination={{
            currentPage: page,
            totalPages: 3,
            onPageChange: setPage,
          }}
        />
      </div>
    </div>
  );
}
