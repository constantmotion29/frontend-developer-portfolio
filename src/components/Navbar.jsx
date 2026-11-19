import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar({ theme, onThemeToggle }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const location = useLocation();

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

  // Handle section links when navigating between routes.
  useEffect(() => {
    if (location.hash) {
      const targetId = decodeURIComponent(location.hash.slice(1));

      document.getElementById(targetId)?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  function closeMenu() {
    setMenuOpen(false);
  }

  const linkStyles =
    "underline decoration-current underline-offset-4 transition-colors hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus";

  return (
    <header className="border-b border-border">
      <nav aria-label="Main navigation" className="mx-auto max-w-6xl px-6 py-6">
        <div className="flex items-center justify-between">
          <Link
            to="/#home"
            className="text-lg font-bold tracking-tight text-text-primary transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
            onClick={closeMenu}
          >
            Anna Wesolowski<span className="text-accent">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 text-sm font-medium text-text-secondary md:flex">
            <Link to="/#work" className={linkStyles}>
              Work
            </Link>
            <Link to="/#about" className={linkStyles}>
              About
            </Link>
            <Link to="/#skills" className={linkStyles}>
              Skills
            </Link>
            <Link to="/#contact" className={linkStyles}>
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              type="button"
              onClick={onThemeToggle}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              aria-pressed={theme === "light"}
              className="flex size-10 cursor-pointer items-center justify-center rounded-md border border-control-border text-lg text-text-primary transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
            >
              <span aria-hidden="true">{theme === "dark" ? "☀" : "☾"}</span>
            </button>

            <Link
              to="/#contact"
              className="hidden rounded-md border border-accent/50 px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus sm:inline-flex"
            >
              Let's talk
            </Link>

            {/* Mobile Menu Button */}
            <button
              ref={menuButtonRef}
              type="button"
              className="cursor-pointer rounded-md border border-control-border px-3 py-2 text-sm font-medium text-text-primary transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus md:hidden"
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
          className="mt-6 flex flex-col gap-5 border-t border-border pt-6 text-sm font-medium text-text-secondary md:hidden"
        >
          <Link to="/#work" className={linkStyles} onClick={closeMenu}>
            Work
          </Link>

          <Link to="/#about" className={linkStyles} onClick={closeMenu}>
            About
          </Link>

          <Link to="/#skills" className={linkStyles} onClick={closeMenu}>
            Skills
          </Link>

          <Link to="/#contact" className={linkStyles} onClick={closeMenu}>
            Contact
          </Link>
        </nav>
      </nav>
    </header>
  );
}

export default Navbar;