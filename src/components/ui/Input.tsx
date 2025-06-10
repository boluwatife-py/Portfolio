interface InputProps {
  darkMode: boolean;
  placeholder?: string;
  type?: "text" | "number" | "email" | "password";
  name: string;
  id: string;
  required?: boolean;
  autoComplete?: React.HTMLInputAutoCompleteAttribute;
  error?: string;
  disabled?: boolean;
}

interface TextAreaProps {
  darkMode: boolean;
  placeholder?: string;
  name: string;
  id: string;
  required?: boolean;
  rows?: number | 5;
  error?: string;
  disabled?: boolean;
}

export default function Input({
  darkMode,
  placeholder,
  type = "text",
  name,
  required = false,
  id,
  autoComplete,
  error,
  disabled,
}: InputProps) {
  return (
    <div className="space-y-1">
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        autoComplete={autoComplete}
        disabled={disabled}
        className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none ${
          darkMode
            ? "bg-gray-700 text-white placeholder-gray-400"
            : "bg-gray-50 text-gray-900 placeholder-gray-500"
        } ${
          error
            ? "border border-red-500 focus:ring-red-500"
            : "border-gray-300 focus:ring-indigo-500"
        }`}
        required={required}
      />
      {error && <p className="text-xs sm:text-sm text-red-500">{error}</p>}
    </div>
  );
}

// TextArea.tsx
export function TextArea({
  darkMode,
  placeholder,
  name,
  required = false,
  id,
  rows = 5,
  error,
  disabled
}: TextAreaProps & { error?: string }) {
  return (
    <div className="space-y-1">
      <textarea
        id={id}
        rows={rows}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg focus:ring-2 focus:outline-none ${
          darkMode
            ? "bg-gray-700 text-white placeholder-gray-400"
            : "bg-gray-50 text-gray-900 placeholder-gray-500"
        } ${
          error
            ? "border border-red-500 focus:ring-red-500"
            : "border-gray-300 focus:ring-indigo-500"
        }`}
        required={required}
      ></textarea>
      {error && <p className="text-xs sm:text-sm text-red-500">{error}</p>}
    </div>
  );
}
