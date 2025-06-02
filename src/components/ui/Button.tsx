// src/components/Button/Button.tsx
import React from "react";
import { smoothScrollTo } from "../../utils/smoothScroll";

interface ButtonProps {
  href: string;
  children?: React.ReactNode;
  darkMode: boolean;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

function Button({
  href,
  children,
  darkMode,
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      smoothScrollTo(href);
    }
  };

  return (
    <a
      href={href}
      onClick={onClick || handleClick}
      className={`px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm font-medium rounded-md !rounded-button whitespace-nowrap cursor-pointer transition-all duration-300 hover:scale-[1.02] ${className} ${
        variant === "primary"
          ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm hover:shadow-md"
          : darkMode
          ? "border border-gray-700 hover:border-indigo-500 hover:text-indigo-400 bg-gray-800/50"
          : "border border-gray-300 hover:border-indigo-500 hover:text-indigo-600 bg-white/50"
      }`}
    >
      {children}
    </a>
  );
}

export default Button;
