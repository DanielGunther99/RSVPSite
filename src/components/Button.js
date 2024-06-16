import React from "react";

const Button = ({ text, onClick, className, type = "button", ...props }) => {
  return (
    <button
      type={type}
      class={`px-4 py-2 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75 ${className}`}
      onClick={onClick}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
