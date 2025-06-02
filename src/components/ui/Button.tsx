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
  onClick
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
      className={`px-6 py-3 text-sm font-medium rounded-md !rounded-button whitespace-nowrap cursor-pointer transition-colors ${className} ${
        variant === "primary"
          ? "bg-indigo-600 hover:bg-indigo-700 text-white"
          : darkMode
          ? "border border-gray-700 hover:border-indigo-500 hover:text-indigo-400"
          : "border border-gray-300 hover:border-indigo-500 hover:text-indigo-600"
      }`}
    >
      {children}
    </a>
  );
}

export default Button;
