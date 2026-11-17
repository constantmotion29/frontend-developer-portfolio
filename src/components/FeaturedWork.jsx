function FeaturedWork() {
  const technologies = [
    "React",
    "JavaScript",
    "Vite",
    "Tailwind CSS",
    "Express",
    "REST APIs",
  ];

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="border-t border-border px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-accent">
            Selected Work
          </p>

          <h2
            id="work-heading"
            className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl"
          >
            Featured Work
          </h2>

          <p className="mt-4 max-w-2xl leading-relaxed text-text-secondary">
            Projects that showcase my approach to building responsive
            interfaces, implementing interactive features, and creating
            accessible web experiences.
          </p>
        </div>

        <article className="overflow-hidden rounded-xl border border-border bg-surface">
          <div className="grid md:grid-cols-2">
            {/* Project Preview */}
            <div className="flex items-center justify-center overflow-hidden bg-[#111722] p-4 sm:p-6">
              <img
                src="/images/video-crypt-preview.png"
                alt="The Video Crypt horror movie rental application showing its movie catalog"
                loading="lazy"
                decoding="async"
                className="aspect-video w-full rounded-lg object-contain object-center"
              />
            </div>

            {/* Project Details */}
            <div className="flex flex-col justify-center p-6 sm:p-10">
              <p className="text-sm font-medium text-accent">
                React Application
              </p>

              <h3 className="mt-3 text-2xl font-bold text-text-primary">
                The Video Crypt
              </h3>

              <p className="mt-4 leading-relaxed text-text-secondary">
                A vintage-inspired horror movie rental app built with React and
                Express. Features an interactive movie catalog, API integration,
                search and filtering, and a reservation system with persistent
                browser storage.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border bg-page px-3 py-1.5 text-xs font-medium text-text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-6 text-sm font-medium">
                <a
                  href="https://video-crypt.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline decoration-transparent underline-offset-4 transition-colors hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
                >
                  Live Demo <span aria-hidden="true">↗</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>

                <a
                  href="https://github.com/constantmotion29/video-crypt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-primary underline decoration-transparent underline-offset-4 transition-colors hover:text-accent hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
                >
                  GitHub Repository <span aria-hidden="true">↗</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default FeaturedWork;