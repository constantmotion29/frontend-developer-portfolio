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
            I enjoy bringing ideas to life through code.
          </h2>

          <div className="mt-8 max-w-2xl space-y-5 leading-relaxed text-text-secondary">
            <p>
              I've spent the past eight years building and maintaining websites
              and web applications in higher education and e-commerce. Along
              the way, I've worked with everything from content management
              systems to custom applications and e-commerce platforms.
            </p>

            <p>
              Much of my work involves turning designs into responsive,
              accessible interfaces and building reusable components. I enjoy
              the process of taking a design from concept to code and making
              sure everything works as expected.
            </p>

            <p>
              More recently, I've been building independent projects with
              React, exploring component development, API integration, and
              modern front-end tools while continuing to grow my skills.
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