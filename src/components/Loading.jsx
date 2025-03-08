import React from "react";

const Loading = () => (
  <div className="flex items-center  justify-center gap-3 text-gray-400 animate-pulse">
    <svg className="w-6 h-6 animate-spin" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8h-8z" />
    </svg>
    <p className="text-lg">Verifying...</p>
  </div>
);

export default Loading;