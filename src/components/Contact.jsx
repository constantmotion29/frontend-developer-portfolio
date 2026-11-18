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
          className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-text-primary sm:text-5xl"
        >
          Let's build something meaningful.
        </h2>

        <p className="mt-6 max-w-xl leading-relaxed text-text-secondary">
          I'm interested in front-end development and UI engineering
          opportunities focused on building responsive, accessible interfaces
          and creating thoughtful user experiences. I'd love to connect.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
          <a
            href="mailto:anw1667@outlook.com"
            className="cursor-pointer rounded-md bg-accent-button px-6 py-3 text-center font-medium text-accent-foreground transition-colors hover:brightness-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/annawesolowski"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer rounded-md border border-control-border px-6 py-3 text-center font-medium text-text-primary underline decoration-current underline-offset-4 transition-colors hover:bg-surface hover:text-accent hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
          >
            LinkedIn <span aria-hidden="true">↗</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>

          <a
            href="https://github.com/constantmotion29"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer rounded-md border border-control-border px-6 py-3 text-center font-medium text-text-primary underline decoration-current underline-offset-4 transition-colors hover:bg-surface hover:text-accent hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
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
