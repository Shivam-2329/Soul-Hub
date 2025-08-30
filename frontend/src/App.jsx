import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light"); // light | dark | purple

  const switchTheme = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("purple");
    else setTheme("light");
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === "light"
          ? "bg-white text-black"
          : theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-purple-900 text-purple-100"
      }`}
    >
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b">
        <h1 className="text-2xl font-bold">Soul Hub</h1>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-2 py-1 rounded border"
          />
          <button
            onClick={switchTheme}
            className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700"
          >
            Toggle Theme
          </button>
        </div>
      </header>

      {/* Grid */}
      <main className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="h-40 bg-gray-300 dark:bg-gray-700 rounded flex items-center justify-center"
          >
            Item {i + 1}
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
