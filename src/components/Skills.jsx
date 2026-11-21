function Skills() {
  const skillGroups = [
    {
      title: "Front-end Development",
      description:
        "Building responsive, interactive websites and application interfaces.",
      skills: [
        "HTML5",
        "CSS3 / Sass",
        "JavaScript (ES6+)",
        "React",
        "jQuery",
        "Tailwind CSS",
        "Responsive Development",
      ],
    },
    {
      title: "UI Engineering & Accessibility",
      description:
        "Translating designs into consistent, accessible user experiences.",
      skills: [
        "Reusable UI Components",
        "Design-to-Code Implementation",
        "Figma Dev Mode",
        "Storybook",
        "WCAG Guidelines",
        "Semantic HTML",
        "Keyboard Accessibility",
        "Focus Management",
        "Cross-Browser Compatibility",
      ],
    },
    {
      title: "Testing & Quality",
      description:
        "Validating component behavior, accessibility, and application reliability.",
      skills: [
        "Vitest",
        "React Testing Library",
        "Playwright",
        "Storybook Testing",
        "Component Testing",
        "Accessibility Testing",
        "Chrome DevTools",
      ],
    },
    {
      title: "Application Development & Integration",
      description:
        "Developing application features and connecting front-end experiences to backend services.",
      skills: [
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
      title: "Development Tools & Platforms",
      description:
        "Supporting collaborative development, content platforms, and automated workflows.",
      skills: [
        "Git / GitHub",
        "CI/CD Pipelines",
        "Docker",
        "Cascade CMS",
        "Drupal",
        "WordPress",
        "Velocity",
        "XML / XSLT",
        "PowerShell",
        "Bash",
        "JavaScript Automation",
        "Enfocus Switch",
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
          A combination of professional development experience and modern
          application tools used in independent projects.
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
