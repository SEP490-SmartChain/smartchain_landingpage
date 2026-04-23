import React from "react";

interface ChartCardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export default function ChartCard({
  title,
  subtitle,
  children,
  footer,
}: ChartCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 mb-8 flex flex-col">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-gray-800 m-0">{title}</h3>
        {subtitle && <p className="text-gray-500 text-sm mt-1 mb-0">{subtitle}</p>}
      </div>
      <div className="flex-1 relative min-h-[200px]">
        {children}
      </div>
      {footer && (
        <div className="mt-6 pt-4 border-t border-gray-100">
          {footer}
        </div>
      )}
    </div>
  );
}
