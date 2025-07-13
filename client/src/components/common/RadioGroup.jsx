import React from "react";

const RadioGroup = ({
  children,
  value,
  onValueChange,
  className = "",
  ...props
}) => {
  return (
    <div className={`space-y-2 ${className}`} {...props}>
      {children}
    </div>
  );
};

const RadioGroupItem = ({ value, id, className = "", ...props }) => {
  return (
    <input
      type="radio"
      id={id}
      value={value}
      className={`h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 ${className}`}
      {...props}
    />
  );
};

export { RadioGroup, RadioGroupItem };
