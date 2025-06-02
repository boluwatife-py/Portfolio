export default function Availabilty({ darkMode }: { darkMode: boolean }) {
  return (
    <div className={`rounded-xl p-8 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
      <h3 className="text-xl font-bold mb-4">Availability</h3>
      <p className={`mb-4 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
        I'm currently available for freelance work and open to full-time
        opportunities.
      </p>
      <div className="flex items-center">
        <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
        <span
          className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}
        >
          Available for new projects
        </span>
      </div>
    </div>
  );
}
