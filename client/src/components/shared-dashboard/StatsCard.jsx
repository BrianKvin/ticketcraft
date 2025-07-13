import React from "react";

const StatsCard = ({ title, value, change, changeType = "positive", icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
          {change && (
            <div className="flex items-center mt-2">
              <span
                className={`text-sm font-medium ${
                  changeType === "positive" ? "text-green-600" : "text-red-600"
                }`}
              >
                {change}
              </span>
              <span className="text-sm text-gray-500 ml-1">
                from last month
              </span>
            </div>
          )}
        </div>
        <div className="text-3xl">
          {icon && typeof icon === "string" ? (
            <span>{icon}</span>
          ) : (
            React.createElement(icon, { className: "w-8 h-8 text-gray-400" })
          )}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
