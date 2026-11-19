import { Link } from "react-router-dom";

const technologies = [
  "React",
  "JavaScript",
  "Vite",
  "Tailwind CSS",
  "Express",
  "REST APIs",
  "Vitest",
  "Playwright",
  "Storybook",
];

function CaseStudySection({ eyebrow, title, children, id }) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="border-t border-border py-16 sm:py-20"
    >
      <div className="grid gap-6 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </p>

          <h2
            id={`${id}-heading`}
            className="text-2xl font-bold tracking-tight text-text-primary sm:text-3xl"
          >
            {title}
          </h2>
        </div>

        <div className="space-y-5 leading-relaxed text-text-secondary">
          {children}
        </div>
      </div>
    </section>
  );
}

function TheVideoCryptCaseStudy() {
  return (
    <article>
      {/* Project introduction */}
      <header className="px-6 pb-16 pt-16 sm:pb-20 sm:pt-24">
        <div className="mx-auto max-w-6xl">
          <Link
            to="/"
            className="text-sm font-medium text-text-secondary underline underline-offset-4 transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
          >
            ← Back to portfolio
          </Link>

          <div className="mt-12 max-w-4xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-accent">
              Featured Project · React Application
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
              The Video Crypt
            </h1>

            <p className="mt-6 max-w-3xl text-xl leading-relaxed text-text-secondary sm:text-2xl">
              Bringing the neighborhood video store back to life.
            </p>

            <p className="mt-6 max-w-2xl leading-relaxed text-text-secondary">
              A vintage-inspired horror movie rental application built as a
              hands-on introduction to React. What started as a way to learn a
              new framework became a fully deployed application with movie
              discovery, API integration, persistent reservations, and
              accessibility built into the experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-5 text-sm font-medium">
              <a
                href="https://video-crypt.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline underline-offset-4 hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
              >
                Live Demo ↗
                <span className="sr-only"> (opens in a new tab)</span>
              </a>

              <a
                href="https://github.com/constantmotion29/video-crypt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-primary underline underline-offset-4 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
              >
                GitHub Repository ↗
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>

          <div className="mt-12 overflow-hidden rounded-xl border border-border bg-[#111722] p-3 sm:mt-16 sm:p-5">
            <img
              src="/images/video-crypt-preview.png"
              alt="The Video Crypt movie rental application displaying its horror movie catalog"
              className="h-auto w-full rounded-lg"
              fetchPriority="high"
            />
          </div>
        </div>
      </header>

      {/* Application Screenshots */}
      <section
        aria-labelledby="screenshots-heading"
        className="border-t border-border px-6 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Inside the application
          </p>

          <h2
            id="screenshots-heading"
            className="text-3xl font-bold tracking-tight text-text-primary"
          >
            More than a movie catalog.
          </h2>

          <p className="mt-4 max-w-2xl leading-relaxed text-text-secondary">
            Explore the interfaces and interactions that bring The Video Crypt
            to life.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Movie Catalog */}
            <figure className="min-w-0">
              <div className="flex h-80 items-center justify-center overflow-hidden rounded-lg border border-border bg-[#111722] p-3">
                <img
                  src="/images/video-crypt-catalog.png"
                  alt="The Video Crypt movie catalog displaying its horror movie collection"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-contain"
                />
              </div>

              <figcaption className="mt-3">
                <h3 className="font-semibold text-text-primary">
                  The Movie Catalog
                </h3>
                <p className="mt-1 text-sm text-text-secondary">
                  Browse a curated horror movie collection with search,
                  filtering, and availability indicators.
                </p>
              </figcaption>
            </figure>

            {/* Reservations */}
            <figure className="min-w-0">
              <div className="flex h-80 items-center justify-center overflow-hidden rounded-lg border border-border bg-[#111722] p-3">
                <img
                  src="/images/video-crypt-reservations.png"
                  alt="The Video Crypt reservation experience"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-contain"
                />
              </div>

              <figcaption className="mt-3">
                <h3 className="font-semibold text-text-primary">
                  Movie Reservations
                </h3>
                <p className="mt-1 text-sm text-text-secondary">
                  An interactive reservation experience with persistent browser
                  storage.
                </p>
              </figcaption>
            </figure>

            {/* Mobile Experience */}
            <figure className="min-w-0">
              <div className="flex h-80 items-center justify-center overflow-hidden rounded-lg border border-border bg-[#111722] p-3">
                <img
                  src="/images/video-crypt-mobile.png"
                  alt="The Video Crypt application displayed on a mobile viewport"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-contain"
                />
              </div>

              <figcaption className="mt-3">
                <h3 className="font-semibold text-text-primary">
                  Responsive Experience
                </h3>
                <p className="mt-1 text-sm text-text-secondary">
                  A layout adapted for smaller screens and mobile browsing.
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Project overview */}
      <div className="border-y border-border bg-surface px-6 py-10">
        <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-text-secondary">
              Project type
            </p>
            <p className="mt-2 font-medium text-text-primary">
              Personal project
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-text-secondary">
              Focus
            </p>
            <p className="mt-2 font-medium text-text-primary">
              Front-end development · UI engineering
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-text-secondary">
              Technologies
            </p>
            <p className="mt-2 font-medium text-text-primary">
              React · JavaScript · Express
            </p>
          </div>
        </div>
      </div>

      <div className="px-6">
        <div className="mx-auto max-w-6xl">
          <CaseStudySection
            id="overview"
            eyebrow="01 / The idea"
            title="A project worth getting lost in"
          >
            <p>
              I wanted to learn React by building something I genuinely enjoyed.
              Rather than following a tutorial to recreate a generic example, I
              chose a concept that gave me room to experiment and build an
              application with real functionality.
            </p>

            <p>
              The result was The Video Crypt: a fictional neighborhood video
              rental store dedicated to horror movies. The project gave me a
              practical way to explore React while building something that felt
              personal and fun.
            </p>
          </CaseStudySection>

          <CaseStudySection
            id="design"
            eyebrow="02 / Visual direction"
            title="A little nostalgia. A lot of horror."
          >
            <p>
              The visual identity draws on the atmosphere of an independent
              video rental store in the late 1980s and early 1990s. I wanted the
              interface to feel like browsing a collection of horror tapes
              rather than using a conventional movie database.
            </p>

            <p>
              I developed the visual direction alongside the application instead
              of starting with a finished design. The vintage-inspired aesthetic
              evolved as the functionality came together, with typography,
              color, and layout helping establish the store's personality.
            </p>
          </CaseStudySection>

          <CaseStudySection
            id="architecture"
            eyebrow="03 / Development"
            title="Growing beyond one component"
          >
            <p>
              This was my first substantial React application, and I had very
              little experience with the framework when I started. My initial
              implementation put most of the application in App.jsx. As the
              project grew, that approach became difficult to manage.
            </p>

            <p>
              I began separating the interface into reusable components and
              moving related application logic into custom hooks. This helped
              give the project a clearer structure and made individual
              responsibilities easier to understand and maintain.
            </p>

            <p>
              I developed custom hooks for movie data, movie details, and
              reservations, separating data-related logic from the components
              that display it.
            </p>
          </CaseStudySection>

          <CaseStudySection
            id="integration"
            eyebrow="04 / API integration"
            title="Connecting the interface to real data"
          >
            <p>
              Working with asynchronous API requests was another new part of the
              learning process. I adapted an existing Express backend to serve
              the curated movie catalog and retrieve additional movie details
              through The Movie Database (TMDB) API.
            </p>

            <p>
              The application uses its own API endpoints to communicate with the
              backend. The TMDB API key stays on the server rather than being
              exposed in the browser, keeping sensitive configuration out of the
              front-end application.
            </p>

            <p>
              I also worked through the practical details of asynchronous
              requests, including loading and error states, while connecting the
              interface to the backend.
            </p>
          </CaseStudySection>

          <CaseStudySection
            id="reservations"
            eyebrow="05 / Application behavior"
            title="Making reservations persist"
          >
            <p>
              The reservation system lets visitors interact with the movie
              catalog instead of simply browsing static content. Users can
              reserve movies and see their availability reflected throughout the
              application.
            </p>

            <p>
              I used browser localStorage to persist reservations between
              visits. Learning how to manage that data alongside React state was
              an important part of understanding how an interactive application
              maintains a consistent experience.
            </p>
          </CaseStudySection>

          <CaseStudySection
            id="accessibility"
            eyebrow="06 / Accessibility"
            title="Accessibility from the beginning"
          >
            <p>
              Accessibility was a deliberate part of the project from the start.
              I brought experience from my professional work into the
              application, applying those principles in a React environment.
            </p>

            <p>
              The implementation includes semantic HTML, keyboard navigation,
              visible focus indicators, accessible dialog behavior and focus
              management, and reduced-motion support.
            </p>

            <p>
              I also tested responsive layouts and browser zoom to check that
              the experience remained usable across different viewport sizes and
              viewing conditions.
            </p>
          </CaseStudySection>

          <CaseStudySection
            id="testing"
            eyebrow="07 / Quality assurance"
            title="Learning to test the application"
          >
            <p>
              Automated testing was entirely new to me when I started this
              project. I expanded my workflow to include component tests,
              end-to-end testing, and Storybook interaction tests.
            </p>

            <p>
              I used Vitest and React Testing Library for front-end tests,
              Playwright for end-to-end coverage, and Storybook to develop and
              exercise component interactions in isolation.
            </p>

            <p>
              This gave me experience testing not just how the application
              looks, but how its components and user interactions behave.
            </p>
          </CaseStudySection>

          <CaseStudySection
            id="learning"
            eyebrow="08 / Reflection"
            title="From learning React to shipping an application"
          >
            <p>
              The biggest challenge was learning several things at once:
              component organization, props, state, hooks, API integration, and
              debugging. I relied on documentation, tutorials, experimentation,
              and ChatGPT as a learning and debugging partner along the way.
            </p>

            <p>
              The most rewarding part was seeing all the pieces finally come
              together. What began as an opportunity to learn React became a
              working application connected to a backend and an external API,
              with persistent user interactions, accessibility considerations,
              and automated tests.
            </p>

            <p>
              More than anything, this project gave me practical experience
              taking an idea from an early implementation through to a deployed
              application.
            </p>
          </CaseStudySection>

          <CaseStudySection
            id="next-steps"
            eyebrow="09 / What's next"
            title="Room to keep growing"
          >
            <p>
              There are plenty of ways I would like to expand The Video Crypt.
              Future improvements include a larger movie collection, more
              browsing and discovery features, richer movie detail pages, and
              pagination.
            </p>

            <p>
              For now, the project represents an important milestone in my
              front-end development journey: building something functional,
              learning unfamiliar tools, and turning the experience into a real
              application.
            </p>
          </CaseStudySection>
        </div>
      </div>

      {/* Technologies */}
      <section className="border-t border-border bg-surface px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Tools & technologies
          </p>

          <h2 className="text-2xl font-bold text-text-primary">Built with</h2>

          <div className="mt-8 flex flex-wrap gap-3">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-md border border-border bg-page px-4 py-2 text-sm font-medium text-text-secondary"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Closing links */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Take a closer look
          </p>

          <h2 className="mt-3 text-3xl font-bold text-text-primary sm:text-4xl">
            See The Video Crypt in action.
          </h2>

          <div className="mt-8 flex flex-wrap gap-6 text-sm font-medium">
            <a
              href="https://video-crypt.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-4 hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
            >
              Visit Live Demo ↗
              <span className="sr-only"> (opens in a new tab)</span>
            </a>

            <a
              href="https://github.com/constantmotion29/video-crypt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-primary underline underline-offset-4 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
            >
              Explore GitHub Repository ↗
              <span className="sr-only"> (opens in a new tab)</span>
            </a>

            <Link
              to="/"
              className="text-text-secondary underline underline-offset-4 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
            >
              Back to portfolio
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}

export default TheVideoCryptCaseStudy;
