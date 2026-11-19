function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center text-sm text-text-secondary sm:flex-row sm:text-left">
        <p>
          © {new Date().getFullYear()} Anna Wesolowski. All rights reserved.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="/Anna-Wesolowski-Resume.pdf"
            download
            aria-label="Download résumé as a PDF"
            className="underline underline-offset-4 transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
          >
            Résumé (PDF)
          </a>

          <p>Made with React, Vite, and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;