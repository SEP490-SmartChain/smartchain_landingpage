import React from "react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: string | number;
  trend?: {
    value: string;
    type: "positive" | "negative" | "neutral";
    icon?: React.ReactNode;
  };
  icon: React.ReactNode;
  theme?: "blue" | "amber" | "emerald" | "red";
}

const themeClasses = {
  blue: "bg-blue-50 text-blue-600",
  amber: "bg-amber-50 text-amber-600",
  emerald: "bg-green-100 text-green-600",
  red: "bg-red-100 text-red-600",
};

const trendClasses = {
  positive: "text-green-600",
  negative: "text-red-600",
  neutral: "text-gray-400",
};

export default function StatCard({
  label,
  value,
  trend,
  icon,
  theme = "blue",
}: StatCardProps) {
  return (
    <div className="bg-white p-5 rounded-xl border border-gray-200 flex items-start justify-between transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex flex-col">
        <p className="text-gray-500 text-sm font-medium">{label}</p>
        <h3 className="text-2xl font-bold text-gray-800 mt-1">{value}</h3>
        {trend && (
          <p className={cn("text-xs font-medium mt-2 flex items-center gap-1", trendClasses[trend.type])}>
            {trend.icon}
            {trend.value}
          </p>
        )}
      </div>
      <div className={cn("w-10 h-10 rounded-full flex items-center justify-center", themeClasses[theme])}>
        {icon}
      </div>
    </div>
  );
}
