import React from "react";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("Topbar");
  return { title: t("title_help") };
}

export default function HelpPage() {
  return (
    <div style={{ padding: "2rem 2.5rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: 600, color: "#1a1d21", marginBottom: "0.5rem" }}>Help</h1>
      <div style={{ fontSize: "0.8125rem", color: "#6a6e76", display: "flex", gap: "0.5rem", marginBottom: "2rem" }}>
        <span>Dashboard</span> <span>/</span> <span style={{ color: "#1a1d21", fontWeight: 500 }}>Help</span>
      </div>
      <div style={{ backgroundColor: "white", padding: "3rem", borderRadius: "0.5rem", border: "1px solid #e5e7eb", textAlign: "center", color: "#6b7280" }}>
        Tính năng đang được phát triển...
      </div>
    </div>
  );
}
