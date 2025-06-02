function Label({
  darkMode,
  children,
  htmlFor
}: {
  darkMode: boolean;
  children?: React.ReactNode;
  htmlFor: string;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-sm font-medium mb-2 ${
        darkMode ? "text-gray-300" : "text-gray-700"
      }`}
    >
      {children}
    </label>
  );
}

export default Label;
