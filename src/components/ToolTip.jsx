import React from "react";

const Tooltip = ({ children, text }) => {
  return (
    <div className="relative group" aria-describedby={text}>
      <div className="absolute left-1/2 transform -translate-x-1/2 top-full mb-2 hidden group-hover:block bg-transparent text-gray-500 dark:text-white text-xxs rounded py-1 px-2 z-10">
        {text}
      </div>
      {children}
    </div>
  );
};

export default Tooltip;
