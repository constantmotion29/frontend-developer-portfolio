import { useEffect, useState } from "react";
import { Navigate, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import TheVideoCryptCaseStudy from "./pages/TheVideoCryptCaseStudy.jsx";

function getInitialTheme() {
  try {
    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }
  } catch {
    // Fall back to the system preference if storage is unavailable.
  }

  return window.matchMedia?.("(prefers-color-scheme: light)")?.matches
    ? "light"
    : "dark";
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme());

  useEffect(() => {
    document.documentElement.dataset.theme = theme;

    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {
      // Theme still works for the current session if storage is unavailable.
    }
  }, [theme]);

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  }

  return (
    <div className="min-h-screen bg-page text-text-primary">
      <Navbar theme={theme} onThemeToggle={toggleTheme} />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/projects"
            element={<Navigate to="/projects/the-video-crypt" replace />}
          />
          <Route
            path="/projects/the-video-crypt"
            element={<TheVideoCryptCaseStudy />}
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
