function About() {
  const experienceMetrics = [
    {
      value: "8",
      description: "Years of professional web development experience",
    },
    {
      value: "18",
      description: "Reusable CMS content rows developed in six months",
    },
    {
      value: "100+",
      description: "E-commerce websites supported in a previous role",
    },
  ];

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
            Turning design specifications into polished interfaces.
          </h2>

          <div className="mt-8 max-w-2xl space-y-5 leading-relaxed text-slate-400">
            <p>
              I'm a front-end web developer with eight years of professional
              experience across higher education and e-commerce.
            </p>

            <p>
              I translate design specifications into responsive, accessible
              interfaces and reusable components, with a focus on maintainable
              front-end code.
            </p>

            <p>
              Outside my professional work, I build React applications and
              explore modern development workflows, including component-driven
              development and API integration.
            </p>
          </div>
        </div>

        <dl className="flex flex-col justify-center gap-8">
          {experienceMetrics.map((metric) => (
            <div
              key={metric.value}
              className="border-l-2 border-blue-400 pl-5"
            >
              <dt className="text-3xl font-bold">{metric.value}</dt>
              <dd className="mt-1 text-sm leading-relaxed text-slate-400">
                {metric.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default About;