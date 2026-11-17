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
          Let's build something meaningful.
        </h2>

        <p className="mt-6 max-w-xl leading-relaxed text-slate-400">
          I'm interested in front-end development and UI engineering
          opportunities where I can build responsive, accessible
          interfaces and contribute to thoughtful, scalable web
          experiences. Let's connect.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
          <a
            href="mailto:anw1667@outlook.com"
            className="cursor-pointer rounded-md bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/annawesolowski"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer rounded-md border border-white/40 px-6 py-3 font-medium text-slate-200 transition-colors hover:border-white/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
          >
            LinkedIn <span aria-hidden="true">↗</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>

          <a
            href="https://github.com/constantmotion29"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer rounded-md border border-white/40 px-6 py-3 font-medium text-slate-200 transition-colors hover:border-white/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
          >
            GitHub <span aria-hidden="true">↗</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;