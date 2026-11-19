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
              A little piece of the video store experience, brought to the web.
            </p>

            <p className="mt-6 max-w-2xl leading-relaxed text-text-secondary">
              I built The Video Crypt as a way to learn React while working on
              something I was genuinely interested in. Inspired by the video
              rental stores I used to visit almost every Friday, it's a
              fictional horror movie shop where visitors can browse movies,
              check availability, and make reservations.
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
            A look inside The Video Crypt
          </h2>

          <p className="mt-4 max-w-2xl leading-relaxed text-text-secondary">
            Here are a few parts of the application, from browsing the movie
            collection to making reservations.
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
                  Browse the collection, search for movies, and filter titles
                  by availability.
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
                  Reserve movies and keep track of their availability.
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
                  Mobile Layout
                </h3>
                <p className="mt-1 text-sm text-text-secondary">
                  The catalog and its features adapt to smaller screens.
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
            title="Why I built it"
          >
            <p>
              I wanted to learn React, but I didn't want to spend my time
              following tutorials and building the same examples everyone else
              builds. I wanted a project I could make my own and actually enjoy
              working on.
            </p>

            <p>
              I settled on a horror movie rental store. I used to visit video
              stores almost every Friday, so the idea brought back some good
              memories. I thought it would be fun to recreate that experience
              as a website.
            </p>
          </CaseStudySection>

          <CaseStudySection
            id="design"
            eyebrow="02 / Visual direction"
            title="Creating the look of the store"
          >
            <p>
              I wanted the site to feel like an old independent video rental
              store, somewhere you might have browsed horror tapes in the late
              1980s or early 1990s. I didn't want it to look like a typical
              movie database.
            </p>

            <p>
              I worked out the visual style as I built the application.
              Typography, colors, and layout all helped shape the look. The
              design wasn't something I finished before writing code; it
              developed alongside the project.
            </p>
          </CaseStudySection>

          <CaseStudySection
            id="architecture"
            eyebrow="03 / Development"
            title="Getting the application organized"
          >
            <p>
              When I started, I was still getting comfortable with React. My
              first version had most of the application in App.jsx. That worked
              initially, but as I added more features, the file became harder
              to work with.
            </p>

            <p>
              I started breaking the interface into smaller components and
              moving related logic into custom hooks. This made it easier to
              work on individual parts of the application without everything
              being tied together.
            </p>

            <p>
              I ended up creating custom hooks for movie data, movie details,
              and reservations, keeping that logic separate from the
              components displaying the information.
            </p>
          </CaseStudySection>

          <CaseStudySection
            id="integration"
            eyebrow="04 / API integration"
            title="Working with an API"
          >
            <p>
              I wanted the movie catalog to do more than display a collection
              of hardcoded information. I worked with an Express backend to
              serve the catalog and retrieve additional movie details from
              The Movie Database (TMDB).
            </p>

            <p>
              The front end makes requests to my own API endpoints, which
              communicate with TMDB on the server. This also means the TMDB
              API key stays on the server instead of being exposed in the
              browser.
            </p>

            <p>
              This was a good opportunity to get more familiar with
              asynchronous requests and handling loading and error states in
              the interface.
            </p>
          </CaseStudySection>

          <CaseStudySection
            id="reservations"
            eyebrow="05 / Application behavior"
            title="Making reservations work"
          >
            <p>
              I wanted visitors to be able to do more than browse the movies.
              The reservation feature lets them reserve titles and see changes
              in availability throughout the catalog.
            </p>

            <p>
              Reservations are saved in the browser using localStorage, so
              they remain there when someone returns to the site. Getting
              that data to work alongside React state was another part of the
              project I had to learn along the way.
            </p>
          </CaseStudySection>

          <CaseStudySection
            id="accessibility"
            eyebrow="06 / Accessibility"
            title="Making the site accessible"
          >
            <p>
              Accessibility is something I've worked with throughout my
              professional career, so I wanted it to be part of this project
              too.
            </p>

            <p>
              I used semantic HTML, added visible keyboard focus indicators,
              and worked on keyboard navigation and dialog behavior, including
              focus management. I also included support for reduced motion.
            </p>

            <p>
              I checked the layouts at different screen sizes and browser zoom
              levels to make sure the application remained usable.
            </p>
          </CaseStudySection>

          <CaseStudySection
            id="testing"
            eyebrow="07 / Testing"
            title="Adding automated tests"
          >
            <p>
              Testing was another area I wanted to explore as part of this
              project. I started learning how to test individual components as
              well as the application as a whole.
            </p>

            <p>
              I used Vitest and React Testing Library for component tests,
              Playwright for end-to-end tests, and Storybook to work with
              components and test their interactions in isolation.
            </p>

            <p>
              This gave me a better understanding of how to check that things
              work as expected, rather than relying only on what I could see
              in the browser.
            </p>
          </CaseStudySection>

          <CaseStudySection
            id="learning"
            eyebrow="08 / What I learned"
            title="Putting everything together"
          >
            <p>
              There was a lot to learn while building this project. I was
              getting familiar with React components, props, state, and hooks
              while also working through API requests, application structure,
              and debugging.
            </p>

            <p>
              I used documentation, tutorials, experimentation, and ChatGPT
              to help me understand problems and work through things I hadn't
              encountered before.
            </p>

            <p>
              Seeing the application come together was the most rewarding
              part. What started as a way to learn React turned into a
              working application with a backend, movie data from an external
              API, reservations, and automated tests.
            </p>
          </CaseStudySection>

          <CaseStudySection
            id="next-steps"
            eyebrow="09 / What's next"
            title="There's more I'd like to add"
          >
            <p>
              I have a few ideas for where to take the project next, including
              a larger movie collection, better browsing and discovery
              features, more detailed movie pages, and pagination.
            </p>

            <p>
              For now, I'm happy to have taken the idea from an initial
              experiment to a deployed application. I've learned a lot along
              the way, and there's still plenty I'd like to explore.
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

          <h2 className="text-2xl font-bold text-text-primary">
            Built with
          </h2>

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