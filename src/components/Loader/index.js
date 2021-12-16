import React from "react";

const Table = () => {
  return (
    <div className="flex justify-center items-center text-white">
      <div
        className="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0"
        role="status"
      >
        <span className="visually-hidden">...</span>
      </div>
    </div>
  );
};

export default Table;
