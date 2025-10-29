import React from "react";

const ChartComponent = ({ data = [] }) => {
  const maxValue = Math.max(...data.map((item) => item.revenue));

  return (
    <div className="space-y-4">
      <div className="flex items-end justify-between h-48 space-x-2">
        {data.map((item, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            <div className="w-full bg-gray-200 rounded-t relative">
              <div
                className="bg-green-500 rounded-t transition-all duration-500"
                style={{
                  height: `${(item.revenue / maxValue) * 100}%`,
                  minHeight: "4px",
                }}
              />
            </div>
            <span className="text-xs text-gray-600 mt-2">{item.month}</span>
          </div>
        ))}
      </div>

      <div className="flex justify-between text-sm text-gray-500">
        <span>
          Revenue: $
          {Math.min(...data.map((item) => item.revenue)).toLocaleString()}
        </span>
        <span>
          Revenue: $
          {Math.max(...data.map((item) => item.revenue)).toLocaleString()}
        </span>
      </div>
    </div>
  );
};

export default ChartComponent;
