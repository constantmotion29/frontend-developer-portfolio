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
      <p className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
        Front-End Developer
      </p>

      <h1
        id="home-heading"
        className="max-w-4xl text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl"
      >
        Building thoughtful,
        <span className="text-blue-400"> accessible </span>
        digital experiences.
      </h1>

      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-400">
        I bring eight years of web development experience to building
        responsive interfaces, reusable components, and accessible front-end
        experiences.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="#work"
          className="cursor-pointer rounded-md bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
        >
          View my work
        </a>

        <a
          href="#contact"
          className="cursor-pointer rounded-md border border-white/40 px-6 py-3 font-medium text-slate-200 transition-colors hover:border-white/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
        >
          Get in touch
        </a>
      </div>

      <ul
        aria-label="Technologies and areas of focus"
        className="mt-20 flex list-none flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10 pt-8 text-sm font-medium text-slate-400"
      >
        {technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
    </section>
  );
}

export default Hero;