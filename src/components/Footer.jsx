function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 text-sm text-slate-400 sm:flex-row">
        <p>
          © {new Date().getFullYear()} Anna Wesolowski. All rights reserved.
        </p>

        <p>Built with React, Vite, and Tailwind CSS.</p>
      </div>
    </footer>
  );
}

export default Footer;