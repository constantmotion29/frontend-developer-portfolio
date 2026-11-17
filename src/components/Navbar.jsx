import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-white/10">
      <nav
        aria-label="Main navigation"
        className="mx-auto max-w-6xl px-6 py-6"
      >
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className="text-lg font-bold tracking-tight"
            onClick={() => setMenuOpen(false)}
          >
            Anna Wesolowski<span className="text-blue-400">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
            <a href="#work" className="transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400">Work</a>
            <a href="#about" className="transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400">About</a>
            <a href="#skills" className="transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400">Skills</a>
            <a href="#contact" className="transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-md border border-blue-400/50 px-4 py-2 text-sm text-blue-300 transition hover:bg-blue-400/10 sm:inline-flex"
            >
              Let's talk
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="cursor-pointer rounded-md border border-white/20 px-3 py-2 text-sm text-slate-200 transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400 md:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label={
                menuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              onClick={() => setMenuOpen(!menuOpen)}
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
          className="mt-6 flex flex-col gap-5 border-t border-white/10 pt-6 text-sm text-slate-300 md:hidden"
        >
          <a href="#work" className="transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#about" className="transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" className="transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#contact" className="transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
      </nav>
    </header>
  );
}

export default Navbar;