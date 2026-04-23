import React from "react";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("Topbar");
  return { title: t("title_dashboard") };
}

export default function DashboardPage() {
  return (
    <div className="py-8 px-10">
      <h1 className="text-[2rem] font-semibold text-[#1a1d21] mb-2 m-0">Dashboard</h1>
      <div className="text-[13px] text-[#6a6e76] flex gap-2 mb-8">
        <span>Dashboard</span> <span>/</span> <span className="text-[#1a1d21] font-medium">Dashboard</span>
      </div>
      <div className="bg-white p-12 rounded-lg border border-gray-200 text-center text-gray-500">
        Tính năng đang được phát triển...
      </div>
    </div>
  );
}
