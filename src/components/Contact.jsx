function About() {
  const experienceMetrics = [
    {
      value: "8",
      description: "Years working in web development",
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
      className="border-t border-border px-6 py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-accent">
            About Me
          </p>

          <h2
            id="about-heading"
            className="max-w-xl text-3xl font-bold leading-tight tracking-tight text-text-primary sm:text-4xl"
          >
            A little about me and what I do.
          </h2>

          <div className="mt-8 max-w-2xl space-y-5 leading-relaxed text-text-secondary">
            <p>
              I'm a web developer with eight years of experience working
              across higher education and e-commerce. I've built and maintained
              websites, worked with different content management systems, and
              developed custom features and applications.
            </p>

            <p>
              I particularly enjoy front-end work: taking a design and figuring
              out how to build it with HTML, CSS, and JavaScript. I care about
              how an interface looks, but also how it works, whether it's
              accessible, and how it holds up across different devices.
            </p>

            <p>
              Outside of my day-to-day work, I've been learning React by
              building projects of my own. The Video Crypt is one example,
              where I've had the chance to work with React, APIs, and
              interactive application features.
            </p>
          </div>
        </div>

        <dl className="flex flex-col justify-center gap-8">
          {experienceMetrics.map((metric) => (
            <div key={metric.value} className="border-l-2 border-accent pl-5">
              <dt className="text-3xl font-bold text-text-primary">
                {metric.value}
              </dt>
              <dd className="mt-1 text-sm leading-relaxed text-text-secondary">
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