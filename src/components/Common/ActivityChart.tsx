import React from "react";

interface ActivityChartProps {
  data: number[];
  labels: string[];
}

export default function ActivityChart({ data, labels }: ActivityChartProps) {
  const maxVal = Math.max(...data, 100);

  return (
    <div className="h-56 w-full flex flex-col">
      <div className="flex-1 flex items-end justify-between gap-2 px-2 py-4 border-b border-gray-100">
        {data.map((val, idx) => (
          <div key={idx} className="flex-1 h-full flex flex-col justify-end items-center gap-3 group">
            <div className="w-full max-w-[40px] h-full bg-transparent flex flex-col justify-end">
              <div 
                className="w-full bg-gray-100 rounded-t-md flex flex-col justify-end transition-[height] duration-300 ease-in-out" 
                style={{ height: `${(val / maxVal) * 100}%` }}
              >
                <div 
                  className="w-full bg-blue-600 rounded-t-md transition-colors duration-200 group-hover:bg-blue-700" 
                  style={{ height: "70%" }} 
                />
              </div>
            </div>
            <span className="text-xs text-gray-500 whitespace-nowrap">{labels[idx]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
