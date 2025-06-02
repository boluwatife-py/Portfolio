import React, { useState } from "react";

interface InputProps {
  darkMode: boolean;
  placeholder?: string;
  type?: "text" | "number" | "email" | "password";
  name: string;
  id: string;
  required?: boolean;
  autoComplete?: React.HTMLInputAutoCompleteAttribute;
}

interface TextAreaProps {
  darkMode: boolean;
  placeholder?: string;
  name: string;
  id: string;
  required?: boolean;
  rows?: number | 5;
}

export default function Input({
  darkMode,
  placeholder,
  type = "text",
  name,
  required = false,
  id,
  autoComplete,
}: InputProps) {
  const [inputValue, setInputValue] = useState("");
  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      autoComplete={autoComplete}
      className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none ${
        darkMode
          ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
          : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500"
      } border`}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      required={required}
    />
  );
}

export function TextArea({
  darkMode,
  placeholder,
  name,
  required = false,
  id,
  rows = 5,
}: TextAreaProps) {
  return (
    <textarea
      id={id}
      rows={rows}
      name={name}
      placeholder={placeholder}
      className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none ${
        darkMode
          ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
          : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500"
      } border`}
      required={required}
    ></textarea>
  );
}
