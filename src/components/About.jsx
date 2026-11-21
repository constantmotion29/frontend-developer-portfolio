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
            Building thoughtful, accessible experiences through code.
          </h2>

          <div className="mt-8 max-w-2xl space-y-5 leading-relaxed text-text-secondary">
            <p>
              I'm a web developer with eight years of professional experience
              building and maintaining websites and applications across higher
              education and e-commerce. I've worked across the development
              process, from front-end implementation and backend integrations
              to CMS development and workflow automation.
            </p>

            <p>
              I enjoy turning design concepts into responsive, accessible
              interfaces and building reusable components that make digital
              experiences more consistent. I'm particularly interested in the
              details that make interfaces intuitive, maintainable, and
              inclusive.
            </p>

            <p>
              My independent projects have expanded my work into modern React
              application development, including component architecture, API
              integration, and automated testing. I'm continuing to build on
              that experience with a focus on UI engineering, design systems,
              and accessible front-end development.
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
