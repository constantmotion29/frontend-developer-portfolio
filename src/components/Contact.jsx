function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-border px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-accent">
          Get In Touch
        </p>

        <h2
          id="contact-heading"
          className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-text-primary sm:text-4xl"
        >
          Let's build something meaningful.
        </h2>

        <p className="mt-6 max-w-2xl leading-relaxed text-text-secondary">
          I'm interested in connecting with teams building thoughtful digital
          experiences, accessible interfaces, and modern web applications. I'm
          particularly interested in front-end engineering, UI development, and
          design systems. If you're working on these kinds of experiences, I'd
          love to hear from you.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="mailto:anw1667@outlook.com"
            className="rounded-md bg-accent-button px-6 py-3 text-center font-medium text-white transition-colors hover:bg-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/annawesolowski"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-border px-6 py-3 font-medium text-text-primary transition-colors hover:bg-surface hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/constantmotion29"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-border px-6 py-3 font-medium text-text-primary transition-colors hover:bg-surface hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
