export default function Availabilty({ darkMode }: { darkMode: boolean }) {
  return (
    <div
      className={`rounded-xl p-4 sm:p-6 md:p-8 ${
        darkMode ? "bg-gray-800" : "bg-white"
      }`}
    >
      <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
        Availability
      </h3>
      <p
        className={`mb-3 sm:mb-4 text-sm sm:text-base ${
          darkMode ? "text-gray-400" : "text-gray-600"
        }`}
      >
        I'm currently available for freelance work and open to full-time
        opportunities.
      </p>
      <div className="flex items-center">
        <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full mr-2"></span>
        <span
          className={`text-xs sm:text-sm ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Available for new projects
        </span>
      </div>
    </div>
  );
}
