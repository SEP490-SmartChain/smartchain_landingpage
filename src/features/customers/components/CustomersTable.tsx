"use client";
import React, { useState } from "react";
import { ExternalLink, Edit2, Trash2, Filter } from "lucide-react";

import DataTable, { ColumnDef } from "@/components/Common/DataTable/DataTable";
import Pagination from "@/components/ui/Pagination/Pagination";
import DataToolbar from "@/components/ui/DataToolbar/DataToolbar";
import Badge from "@/components/ui/Badge/Badge";
import CustomerForm from "./CustomerForm";

interface Customer {
  id: string;
  name: string;
  status: string;
  email: string;
  dob: string;
}

interface CustomersTableProps {
  initialData: Customer[];
}

export default function CustomersTable({ initialData }: CustomersTableProps) {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [isFormOpen, setIsFormOpen] = useState(false);
  // Optional: add local search/filter state here if not doing server-side search

  const columns: ColumnDef<Customer>[] = [
    { key: "id", label: "#" },
    { 
      key: "name", 
      label: "Full Name",
      render: (row) => <span className="text-gray-600 text-[13px]">{row.name}</span>
    },
    { 
      key: "status", 
      label: "Status",
      render: (row) => <Badge status={row.status} />
    },
    { 
      key: "email", 
      label: "E-Mail",
      render: (row) => <span className="text-gray-600 text-[13px]">{row.email}</span>
    },
    { 
      key: "dob", 
      label: "Date of Birth",
      render: (row) => <span className="text-gray-600 text-[13px]">{row.dob}</span>
    },
    {
      key: "actions",
      label: "",
      render: () => (
        <div className="flex items-center gap-2 justify-end">
          <button className="flex items-center justify-center w-8 h-8 bg-white border border-gray-200 rounded-md text-gray-500 cursor-pointer transition-colors hover:bg-gray-50 hover:text-gray-900"><ExternalLink size={14} /></button>
          <button className="flex items-center justify-center w-8 h-8 bg-white border border-gray-200 rounded-md text-gray-500 cursor-pointer transition-colors hover:bg-gray-50 hover:text-gray-900"><Edit2 size={14} /></button>
          <button className="flex items-center justify-center w-8 h-8 bg-white border border-gray-200 rounded-md text-gray-500 cursor-pointer transition-colors hover:bg-gray-50 hover:text-gray-900"><Trash2 size={14} /></button>
        </div>
      )
    }
  ];

  const headerWithFilter = (title: string) => (
    <div className="flex items-center gap-2">
      {title} <Filter size={12} className="text-gray-400" />
    </div>
  );

  columns[1].label = headerWithFilter("Full Name") as any;
  columns[2].label = headerWithFilter("Status") as any;
  columns[3].label = headerWithFilter("E-Mail") as any;
  columns[4].label = headerWithFilter("Date of Birth") as any;

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <DataToolbar
        primaryActionLabel="NEW CUSTOMER"
        onPrimaryAction={() => setIsFormOpen(true)}
        onSearch={(val) => console.log("Searching for:", val)}
      />

      <DataTable 
        columns={columns as any} 
        data={initialData} 
      />

      <Pagination
        currentPage={page}
        totalPages={Math.ceil(initialData.length / pageSize) || 1}
        pageSize={pageSize}
        onPageChange={setPage}
        onPageSizeChange={setPageSize}
      />

      {isFormOpen && (
        <CustomerForm 
          onClose={() => setIsFormOpen(false)} 
          onSubmitSuccess={() => console.log("Refresh table data here")}
        />
      )}
    </div>
  );
}
