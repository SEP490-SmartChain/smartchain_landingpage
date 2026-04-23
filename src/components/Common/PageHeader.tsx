import React from "react";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle?: string | React.ReactNode;
  primaryAction?: {
    label: string;
    icon?: React.ReactNode;
    onClick?: () => void;
  };
  secondaryActions?: Array<{
    label: string;
    icon?: React.ReactNode;
    onClick?: () => void;
  }>;
  children?: React.ReactNode;
}

export default function PageHeader({
  title,
  subtitle,
  primaryAction,
  secondaryActions,
  children,
}: PageHeaderProps) {
  return (
    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-gray-800 tracking-tight">{title}</h2>
        {subtitle && <p className="text-gray-500 text-sm mt-1">{subtitle}</p>}
      </div>
      
      <div className="flex items-center gap-3">
        {secondaryActions?.map((action, idx) => (
          <button
            key={idx}
            className={cn(
              "px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm font-medium",
              "flex items-center gap-2 transition-all duration-200 hover:bg-gray-50 hover:border-gray-300"
            )}
            onClick={action.onClick}
          >
            {action.icon}
            {action.label}
          </button>
        ))}
        
        {children}

        {primaryAction && (
          <button
            className={cn(
              "px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium border border-transparent",
              "flex items-center gap-2 transition-all duration-200 hover:bg-blue-700 hover:shadow-md"
            )}
            onClick={primaryAction.onClick}
          >
            {primaryAction.icon}
            {primaryAction.label}
          </button>
        )}
      </div>
    </div>
  );
}
