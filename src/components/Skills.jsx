function Skills() {
  const skillGroups = [
    {
      title: "Front-end Development",
      description: "Building responsive, maintainable web interfaces.",
      skills: [
        "HTML5",
        "CSS3 / Sass",
        "JavaScript (ES6+)",
        "React",
        "jQuery",
        "Responsive Development",
      ],
    },
    {
      title: "UI Engineering & Accessibility",
      description:
        "Translating designs into reusable, accessible interfaces.",
      skills: [
        "Reusable UI Components",
        "Design-to-Code Implementation",
        "Figma Dev Mode",
        "WCAG Guidelines",
        "Cross-Browser Testing",
        "Component-Driven Development",
        "Storybook",
      ],
    },
    {
      title: "Modern Application Development",
      description:
        "Building interactive applications and integrating services.",
      skills: [
        "Tailwind CSS",
        "Vite",
        "Node.js",
        "Express",
        "REST APIs",
        "PHP",
        "MySQL",
        "Microsoft SQL Server",
      ],
    },
    {
      title: "Development Tools & Automation",
      description:
        "Supporting efficient development and automation workflows.",
      skills: [
        "Git / GitHub",
        "VS Code",
        "Chrome DevTools",
        "CI/CD Pipelines",
        "Docker",
        "PowerShell",
        "Bash",
        "JavaScript Automation",
        "Enfocus Switch",
      ],
    },
    {
      title: "CMS & Templating",
      description:
        "Developing structured content systems and reusable templates.",
      skills: [
        "Cascade CMS",
        "Drupal",
        "WordPress",
        "Velocity",
        "XML / XSLT",
        "Structured Content",
      ],
    },
  ];

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="border-t border-border px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-accent">
          Technical Skills
        </p>

        <h2
          id="skills-heading"
          className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl"
        >
          Tools and technologies
        </h2>

        <p className="mt-4 max-w-2xl leading-relaxed text-text-secondary">
          A combination of established front-end development experience,
          modern JavaScript technologies, UI engineering practices, and a
          focus on accessible, maintainable interfaces.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-xl border border-border bg-surface p-5 sm:p-6"
            >
              <h3 className="font-semibold text-text-primary">
                {group.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {group.description}
              </p>

              <ul
                aria-label={`${group.title} skills`}
                className="mt-4 space-y-2 text-sm text-text-secondary"
              >
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;