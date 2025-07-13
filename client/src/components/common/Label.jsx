import React from "react";

const Label = ({ 
  children, 
  htmlFor, 
  className = "", 
  ...props 
}) => {
  const baseClasses = "block text-sm font-medium text-gray-700 mb-2";
  const classes = `${baseClasses} ${className}`;
  
  return (
    <label htmlFor={htmlFor} className={classes} {...props}>
      {children}
    </label>
  );
};

export default Label; 