import React from "react";
import { Link } from "react-router-dom";

const QuickActions = ({ actions = [] }) => {
  const getColorClasses = (color) => {
    switch (color) {
      case "green":
        return "bg-green-50 text-green-600 hover:bg-green-100";
      case "blue":
        return "bg-blue-50 text-blue-600 hover:bg-blue-100";
      case "purple":
        return "bg-purple-50 text-purple-600 hover:bg-purple-100";
      case "orange":
        return "bg-orange-50 text-orange-600 hover:bg-orange-100";
      default:
        return "bg-gray-50 text-gray-600 hover:bg-gray-100";
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Quick Actions
      </h3>
      <div className="space-y-3">
        {actions.map((action, index) => (
          <Link
            key={index}
            to={action.link}
            className={`block p-4 rounded-lg transition-colors duration-200 ${getColorClasses(
              action.color
            )}`}
          >
            <div className="flex items-center space-x-3">
              <div className="text-2xl">{action.icon}</div>
              <div>
                <h4 className="font-medium">{action.title}</h4>
                <p className="text-sm opacity-75">{action.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
