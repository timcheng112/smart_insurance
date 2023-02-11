import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button
      type="button"
      className="inline-flex items-center justify-center rounded-md border border-transparent bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:w-auto"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
