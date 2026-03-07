import React from "react";

function Button({ title, icon }) {
  return (
    <button
      type="button"
      className="flex items-center justify-center gap-2 px-5 py-2 rounded-xl 
      bg-blue-600 text-white font-medium
      hover:bg-blue-700 active:scale-95
      shadow-md hover:shadow-lg
      transition-all duration-200
      disabled:opacity-50 disabled:pointer-events-none"
    >
      {icon && <span className="text-lg">{icon}</span>}
      {title && <span className="">{title}</span>}
    </button>
  );
}

export default Button;