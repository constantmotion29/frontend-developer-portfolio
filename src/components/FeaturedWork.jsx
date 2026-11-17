function FeaturedWork() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="border-t border-white/10 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
            Selected Work
          </p>

          <h2
            id="work-heading"
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Featured Work
          </h2>

          <p className="mt-4 max-w-2xl leading-relaxed text-slate-400">
            A selection of projects demonstrating my approach to front-end
            development, interface implementation, and accessible user
            experiences.
          </p>
        </div>

        <article className="overflow-hidden rounded-2xl border border-white/10 bg-[#1d2431]">
          <div className="grid md:grid-cols-2">
            {/* Project Preview */}
            <div className="overflow-hidden bg-[#111722]">
              <img
                src="/images/video-crypt-preview.png"
                alt="The Video Crypt horror movie rental application showing its movie catalog"
                className="h-full min-h-72 w-full object-contain object-top"
              />
            </div>

            {/* Project Details */}
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <p className="text-sm font-medium text-blue-400">
                React Application
              </p>

              <h3 className="mt-3 text-2xl font-bold">The Video Crypt</h3>

              <p className="mt-4 leading-relaxed text-slate-400">
                A vintage-inspired horror movie rental application built with
                React and Express. Features an interactive movie catalog, API
                integration, search and filtering, and a reservation experience.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "React",
                  "JavaScript",
                  "Vite",
                  "Tailwind CSS",
                  "Express",
                  "REST APIs",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-white/10 px-3 py-1.5 text-xs text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-5 text-sm font-medium">
                <a
                  href="https://video-crypt.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 transition hover:text-blue-300"
                >
                  Live Demo ↗
                </a>

                <a
                  href="https://github.com/constantmotion29/video-crypt.git"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-300 transition hover:text-white"
                >
                  GitHub Repository ↗
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
