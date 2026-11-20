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
        Turning designs into
        <span className="text-accent"> working </span>
        experiences.
      </h1>

      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-text-secondary">
        I've spent eight years building and maintaining websites and web
        applications. I enjoy bringing designs to life through code, creating
        responsive interfaces and reusable components that work well for
        everyone.
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
          href="/Anna_Wesolowski_Resume.pdf"
          download
          aria-label="Download résumé as a PDF"
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