import React from "react";

const Textarea = ({ 
  className = "", 
  placeholder = "",
  rows = 3,
  ...props 
}) => {
  const baseClasses = "flex w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 resize-vertical";
  
  const classes = `${baseClasses} ${className}`;
  
  return (
    <textarea
      className={classes}
      placeholder={placeholder}
      rows={rows}
      {...props}
    />
  );
};

export default Textarea; 