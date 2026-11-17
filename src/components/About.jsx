function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-t border-white/10 px-6 py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
            About Me
          </p>

          <h2
            id="about-heading"
            className="max-w-xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl"
          >
            Turning thoughtful designs into functional experiences.
          </h2>

          <div className="mt-8 max-w-2xl space-y-5 leading-relaxed text-slate-400">
            <p>
              I'm a front-end web developer with eight years of
              professional experience building and maintaining websites
              and web applications across higher education and e-commerce.
            </p>

            <p>
              My work focuses on translating design specifications into
              responsive, accessible interfaces, developing reusable
              components, and creating maintainable front-end solutions.
            </p>

            <p>
              I'm continuing to expand my skills in modern front-end
              development, with hands-on experience building React
              applications and integrating APIs. I'm particularly
              interested in UI engineering, component-driven development,
              and creating thoughtful digital experiences.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-6">
          <div className="border-l-2 border-blue-400 pl-5">
            <p className="text-3xl font-bold">Eight</p>
            <p className="mt-1 text-sm text-slate-400">
              Years of professional web development experience
            </p>
          </div>

          <div className="border-l-2 border-blue-400 pl-5">
            <p className="text-3xl font-bold">18</p>
            <p className="mt-1 text-sm text-slate-400">
              Reusable content components developed in six months
            </p>
          </div>

          <div className="border-l-2 border-blue-400 pl-5">
            <p className="text-3xl font-bold">100+</p>
            <p className="mt-1 text-sm text-slate-400">
              E-commerce websites supported in a previous role
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;