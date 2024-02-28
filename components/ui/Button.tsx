import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, className }) => {
  return (
    <button
      className={`px-3 sm:px-4 py-3 animate-shimmer rounded-full border border-slate-400 dark:border-slate-800 bg-[linear-gradient(110deg,#94a3b8,45%,#e2e8f0,55%,#94a3b8)] dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors focus:outline-none ${className}`}
    >
      {children}
    </button>
  );
};
