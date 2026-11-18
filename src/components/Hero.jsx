function Hero() {
  const technologies = [
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Accessibility",
    "Component Development",
  ];

  return (
    <section
      id="home"
      aria-labelledby="home-heading"
      className="mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-center px-6 py-24"
    >
      <p className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-accent">
        Front-End Developer
      </p>

      <h1
        id="home-heading"
        className="max-w-4xl text-5xl font-bold leading-[1.08] tracking-tight text-text-primary sm:text-6xl lg:text-7xl"
      >
        Building thoughtful,
        <span className="text-accent"> accessible </span>
        digital experiences.
      </h1>

      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-text-secondary">
        I bring eight years of web development experience to building responsive
        interfaces, reusable UI components, and engaging web experiences. I
        focus on translating designs into accessible, maintainable front-end
        solutions.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="#work"
          className="cursor-pointer rounded-md bg-accent-button px-6 py-3 font-medium text-accent-foreground transition-colors hover:brightness-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
        >
          View my work
        </a>

        <a
          href="#contact"
          className="cursor-pointer rounded-md border border-control-border px-6 py-3 font-medium text-text-primary transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
        >
          Get in touch
        </a>

        <a
          href="/Anna-Wesolowski-Resume.pdf"
          download
          className="cursor-pointer rounded-md border border-control-border px-6 py-3 font-medium text-text-primary transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
        >
          Download Résumé
        </a>
      </div>

      <ul
        aria-label="Technologies and areas of focus"
        className="mt-20 flex list-none flex-wrap items-center gap-x-8 gap-y-4 border-t border-border pt-8 text-sm font-medium text-text-secondary"
      >
        {technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
    </section>
  );
}

export default Hero;
