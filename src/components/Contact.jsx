function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-white/10 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
          Get In Touch
        </p>

        <h2
          id="contact-heading"
          className="max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-5xl"
        >
          Have a project or opportunity in mind?
        </h2>

        <p className="mt-6 max-w-xl leading-relaxed text-slate-400">
          I'm interested in opportunities focused on front-end
          development, UI engineering, and building accessible digital
          experiences. I'd love to hear from you.
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href="mailto:anw1667@outlook.com"
            className="cursor-pointer rounded-md bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/annawesolowski"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-white/40 px-6 py-3 font-medium text-slate-200 transition hover:border-white/60"
          >
            LinkedIn ↗
            <span className="sr-only">(opens in a new tab)</span>
          </a>

          <a
            href="https://github.com/constantmotion29"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-white/40 px-6 py-3 font-medium text-slate-200 transition hover:border-white/60"
          >
            GitHub ↗
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;