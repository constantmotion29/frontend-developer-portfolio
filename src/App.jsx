function App() {
  return (
    <main className="min-h-screen bg-[#171c26] text-[#f4f5f7]">
      {/* Navigation */}
      <header className="border-b border-white/10">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <a href="#home" className="text-lg font-bold tracking-tight">
            Your Name<span className="text-blue-400">.</span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
            <a href="#work" className="transition hover:text-white">
              Work
            </a>
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#skills" className="transition hover:text-white">
              Skills
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-md border border-blue-400/50 px-4 py-2 text-sm text-blue-300 transition hover:bg-blue-400/10"
          >
            Let's talk
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="mx-auto flex min-h-[75vh] max-w-6xl flex-col justify-center px-6 py-24"
      >
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
          Front-End Developer
        </p>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
          Building thoughtful,
          <span className="text-blue-400"> accessible </span>
          digital experiences.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-400">
          8 years of web development experience, bringing designs to life
          through responsive interfaces, reusable components, and modern
          front-end technologies.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#work"
            className="rounded-md bg-blue-500 px-6 py-3 font-medium text-white transition hover:bg-blue-400"
          >
            View my work
          </a>

          <a
            href="#contact"
            className="rounded-md border border-white/20 px-6 py-3 font-medium text-slate-200 transition hover:border-white/50"
          >
            Get in touch
          </a>
        </div>

        <div className="mt-20 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-500">
          <span>React</span>
          <span>JavaScript</span>
          <span>Tailwind CSS</span>
          <span>Accessibility</span>
          <span>UI Engineering</span>
        </div>
      </section>

      {/* Featured Work */}
      <section id="work" className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
              Selected Work
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Featured Project
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
              <div className="flex min-h-72 items-center justify-center bg-[#292331] p-8">
                <div className="text-center">
                  <p className="text-sm uppercase tracking-[0.3em] text-red-400">
                    Independent Video Rentals
                  </p>
                  <h3 className="mt-4 text-5xl font-bold tracking-tight text-white">
                    THE VIDEO
                    <br />
                    CRYPT
                  </h3>
                  <p className="mt-4 font-mono text-xs text-slate-400">
                    GOOD HORROR. BAD DECISIONS.
                  </p>
                </div>
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
                  integration, search and filtering, and a reservation
                  experience.
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

      {/* About */}
      <section id="about" className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
              About Me
            </p>

            <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Turning thoughtful designs into functional experiences.
            </h2>

            <div className="mt-8 max-w-2xl space-y-5 leading-relaxed text-slate-400">
              <p>
                I'm a front-end web developer with eight years of professional
                experience building and maintaining websites and web
                applications across higher education and e-commerce.
              </p>

              <p>
                My work focuses on translating design specifications into
                responsive, accessible interfaces, developing reusable
                components, and creating maintainable front-end solutions.
              </p>

              <p>
                I'm continuing to expand my skills in modern front-end
                development, with hands-on experience building React
                applications and integrating APIs. I'm particularly interested
                in UI engineering, component-driven development, and creating
                thoughtful digital experiences.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-6">
            <div className="border-l-2 border-blue-400 pl-5">
              <p className="text-3xl font-bold">8</p>
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

      {/* Skills */}
      <section id="skills" className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
            Technical Skills
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
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
              <h3 className="font-semibold text-white">Development Tools</h3>
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

      {/* Contact */}
      <section id="contact" className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
            Get In Touch
          </p>

          <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            Have a project or opportunity in mind?
          </h2>

          <p className="mt-6 max-w-xl leading-relaxed text-slate-400">
            I'm interested in opportunities focused on front-end development, UI
            engineering, and building accessible digital experiences. I'd love
            to hear from you.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="mailto:anw1667@outlook.com"
              className="rounded-md bg-blue-500 px-6 py-3 font-medium text-white transition hover:bg-blue-400"
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/annawesolowski"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-white/20 px-6 py-3 font-medium text-slate-200 transition hover:border-white/50"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/constantmotion29"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-white/20 px-6 py-3 font-medium text-slate-200 transition hover:border-white/50"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 text-sm text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Anna Wesolowski. All rights reserved.</p>

          <p>Built with React, Vite, and Tailwind CSS.</p>
        </div>
      </footer>
    </main>
  );
}

export default App;
