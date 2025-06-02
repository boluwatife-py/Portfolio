interface CodeSnippetProps {
  darkMode: boolean;
}

function CodeSnippet({ darkMode }: CodeSnippetProps){
  return (
    <div
      className={`w-full max-w-md p-1 rounded-2xl ${
        darkMode ? 'bg-gradient-to-br from-indigo-600 to-purple-600' : 'bg-gradient-to-br from-indigo-500 to-purple-500'
      }`}
    >
      <div className={`rounded-xl overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-white'} p-6`}>
        <div className="flex items-center mb-4">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>
        <div className={`font-mono text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          <div className="mb-2">
            <span className="text-pink-500">const</span> <span className="text-green-500">developer</span>{' '}
            <span className="text-pink-500">=</span> {'{'}
          </div>
          <div className="pl-4 mb-1">
            <span className="text-purple-500">name</span>: <span className="text-yellow-500">'Boluwatife Akingbade'</span>,
          </div>
          <div className="pl-4 mb-1">
            <span className="text-purple-500">title</span>: <span className="text-yellow-500">'Full-Stack Developer'</span>,
          </div>
          <div className="pl-4 mb-1">
            <span className="text-purple-500">skills</span>: [<span className="text-yellow-500">'Python'</span>,{' '}
            <span className="text-yellow-500">'JavaScript'</span>, <span className="text-yellow-500">'React'</span>, ...],
          </div>
          <div className="pl-4 mb-1">
            <span className="text-purple-500">isAvailable</span>: <span className="text-blue-500">true</span>,
          </div>
          <div className="pl-4 mb-1">
            <span className="text-purple-500">contact</span>: <span className="text-yellow-500">'email@boluwatife.tech'</span>
          </div>
          <div>{'}'}</div>
        </div>
      </div>
    </div>
  );
};

export default CodeSnippet;