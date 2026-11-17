import { useEffect, useRef, useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="border-b border-white/10">
      <nav
        aria-label="Main navigation"
        className="mx-auto max-w-6xl px-6 py-6"
      >
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className="text-lg font-bold tracking-tight text-white transition-colors hover:text-slate-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
            onClick={closeMenu}
          >
            Anna Wesolowski<span className="text-blue-400">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 text-sm font-medium text-slate-400 md:flex">
            <a
              href="#work"
              className="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
            >
              Work
            </a>

            <a
              href="#about"
              className="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
            >
              About
            </a>

            <a
              href="#skills"
              className="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
            >
              Skills
            </a>

            <a
              href="#contact"
              className="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
            >
              Contact
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-md border border-blue-400/50 px-4 py-2 text-sm font-medium text-blue-300 transition-colors hover:bg-blue-400/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400 sm:inline-flex"
            >
              Let's talk
            </a>

            {/* Mobile Menu Button */}
            <button
              ref={menuButtonRef}
              type="button"
              className="cursor-pointer rounded-md border border-white/20 px-3 py-2 text-sm font-medium text-slate-200 transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400 md:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label={
                menuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          hidden={!menuOpen}
          className="mt-6 flex flex-col gap-5 border-t border-white/10 pt-6 text-sm font-medium text-slate-300 md:hidden"
        >
          <a
            href="#work"
            className="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
            onClick={closeMenu}
          >
            Work
          </a>

          <a
            href="#about"
            className="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
            onClick={closeMenu}
          >
            About
          </a>

          <a
            href="#skills"
            className="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
            onClick={closeMenu}
          >
            Skills
          </a>

          <a
            href="#contact"
            className="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
            onClick={closeMenu}
          >
            Contact
          </a>
        </nav>
      </nav>
    </header>
  );
}

export default Navbar;