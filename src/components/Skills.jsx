function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="border-t border-white/10 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
          Technical Skills
        </p>

        <h2
          id="skills-heading"
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Tools and technologies
        </h2>

        <p className="mt-4 max-w-2xl leading-relaxed text-slate-400">
          A foundation in web development, with a focus on front-end
          engineering, accessible interfaces, and modern application
          development.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-[#1d2431] p-6">
            <h3 className="font-semibold text-white">
              Front-end Development
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              <li>HTML5</li>
              <li>CSS3 / Sass</li>
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Tailwind CSS</li>
              <li>Responsive Design</li>
            </ul>
          </div>

          <div className="rounded-xl border border-white/10 bg-[#1d2431] p-6">
            <h3 className="font-semibold text-white">UI Engineering</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              <li>Reusable UI Components</li>
              <li>Design-to-Code Implementation</li>
              <li>Figma Dev Mode</li>
              <li>Web Accessibility (WCAG)</li>
              <li>Cross-Browser Testing</li>
              <li>Component-Driven Development</li>
            </ul>
          </div>

          <div className="rounded-xl border border-white/10 bg-[#1d2431] p-6">
            <h3 className="font-semibold text-white">Backend & APIs</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              <li>Node.js</li>
              <li>Express</li>
              <li>PHP</li>
              <li>REST APIs</li>
              <li>MySQL</li>
              <li>Server-Side Development</li>
            </ul>
          </div>

          <div className="rounded-xl border border-white/10 bg-[#1d2431] p-6">
            <h3 className="font-semibold text-white">CMS & Templating</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              <li>Cascade CMS</li>
              <li>Drupal</li>
              <li>WordPress</li>
              <li>Velocity</li>
              <li>XML / XSLT</li>
              <li>Structured Content</li>
            </ul>
          </div>

          <div className="rounded-xl border border-white/10 bg-[#1d2431] p-6">
            <h3 className="font-semibold text-white">
              Development Tools
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              <li>Git / GitHub</li>
              <li>Vite</li>
              <li>VS Code</li>
              <li>Chrome DevTools</li>
              <li>CI/CD Pipelines</li>
              <li>Docker</li>
            </ul>
          </div>

          <div className="rounded-xl border border-white/10 bg-[#1d2431] p-6">
            <h3 className="font-semibold text-white">
              Additional Technologies
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              <li>PowerShell</li>
              <li>Bash</li>
              <li>JavaScript Automation</li>
              <li>Microsoft SQL Server</li>
              <li>jQuery</li>
              <li>Enfocus Switch</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;