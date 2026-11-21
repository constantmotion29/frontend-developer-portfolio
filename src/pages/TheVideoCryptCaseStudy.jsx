import { Link } from "react-router-dom";

const technologies = [
  "React",
  "JavaScript",
  "Vite",
  "Custom CSS",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "TMDB API",
  "REST APIs",
  "Vitest",
  "React Testing Library",
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
              Inspired by the neighborhood video stores I used to visit almost
              every Friday, The Video Crypt is a fictional horror rental shop
              built with React. I wanted to create something of my own while
              exploring modern front-end development, bringing together a
              retro-inspired storefront, a searchable movie catalog, live movie
              data, and an interactive reservation experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-5 text-sm font-medium">
              <a
                href="https://video-crypt.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline underline-offset-4 hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
              >
                Live Demo{" "}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="inline-block"
                >
                  <path d="M4 12 12 4M5 4h7v7" />
                </svg>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>

              <a
                href="https://github.com/constantmotion29/video-crypt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-primary underline underline-offset-4 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
              >
                GitHub Repository{" "}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="inline-block"
                >
                  <path d="M4 12 12 4M5 4h7v7" />
                </svg>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>

          <div className="mt-12 overflow-hidden rounded-xl border border-border bg-[#111722] p-3 sm:mt-16 sm:p-5">
            <img
              src="/images/video-crypt-preview.webp"
              alt="The Video Crypt movie rental application displaying its horror movie catalog"
              className="h-auto w-full rounded-lg transition-transform duration-300 ease-out motion-reduce:transition-none hover:scale-[1.04]"
              fetchPriority="high"
            />
          </div>
        </div>
      </header>

      {/* Application screenshots */}
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
            From browsing the collection to reserving a movie, here are a few of
            the features that bring the store to life.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Movie catalog */}
            <figure className="min-w-0">
              <div className="flex h-80 items-center justify-center overflow-hidden rounded-lg border border-border bg-[#111722] p-3">
                <img
                  src="/images/video-crypt-catalog.webp"
                  alt="The Video Crypt movie catalog displaying its horror movie collection"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-contain transition-transform duration-300 ease-out motion-reduce:transition-none hover:scale-[1.04]"
                />
              </div>

              <figcaption className="mt-3">
                <h3 className="font-semibold text-text-primary">
                  The Movie Catalog
                </h3>
                <p className="mt-1 text-sm text-text-secondary">
                  Browse the collection, search for movies, and filter titles by
                  availability.
                </p>
              </figcaption>
            </figure>

            {/* Reservations */}
            <figure className="min-w-0">
              <div className="flex h-80 items-center justify-center overflow-hidden rounded-lg border border-border bg-[#111722] p-3">
                <img
                  src="/images/video-crypt-reservations.webp"
                  alt="A Video Crypt reservation receipt showing a movie rental, confirmation number, and return date"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-contain transition-transform duration-300 ease-out motion-reduce:transition-none hover:scale-[1.04]"
                />
              </div>

              <figcaption className="mt-3">
                <h3 className="font-semibold text-text-primary">
                  Movie Reservations
                </h3>
                <p className="mt-1 text-sm text-text-secondary">
                  Reserve a title, view a reservation receipt, and keep track of
                  availability.
                </p>
              </figcaption>
            </figure>

            {/* Mobile experience */}
            <figure className="min-w-0">
              <div className="flex h-80 items-center justify-center overflow-hidden rounded-lg border border-border bg-[#111722] p-3">
                <img
                  src="/images/video-crypt-mobile.webp"
                  alt="The Video Crypt application displayed on a mobile viewport"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-contain transition-transform duration-300 ease-out motion-reduce:transition-none hover:scale-[1.04]"
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
        <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
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

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-text-secondary">
              Movie collection
            </p>
            <p className="mt-2 font-medium text-text-primary">
              9 curated horror titles
            </p>
          </div>
        </div>
      </div>

      {/* Case study sections */}
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
              A horror movie rental store felt like the right fit. It gave me an
              opportunity to recreate the atmosphere of those neighborhood shops
              while building something with real interactions and functionality
              behind the design.
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
              Typography, colors, textures, and layout all helped create the
              atmosphere. The design wasn't something I finished before writing
              code; it developed alongside the project.
            </p>

            <p>
              I also wanted the interface to feel interactive, not just look the
              part. I built reusable movie cards, search and filtering controls,
              expandable movie details, and reservation interactions. Each piece
              needed to work together while keeping the catalog easy to browse.
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
              at first, but as I added more features, the file became harder to
              manage and changes started affecting more of the application.
            </p>

            <p>
              I began breaking the interface into reusable components and moving
              related logic into custom hooks. I created separate hooks for
              loading the movie catalog, fetching additional movie details, and
              managing reservations. This gave each part of the application a
              clearer responsibility and made it easier to work on features
              independently.
            </p>

            <p>
              I also separated the Express backend from the React application.
              The front end is responsible for rendering the interface and
              handling user interactions, while the backend manages API requests
              and communication with TMDB. This kept the external data
              integration separate from the parts of the application users
              interact with.
            </p>
          </CaseStudySection>

          <CaseStudySection
            id="integration"
            eyebrow="04 / API integration"
            title="Connecting to movie data"
          >
            <p>
              I wanted the catalog to do more than display a collection of
              hardcoded information. I added an Express backend that serves my
              locally curated movie catalog, enriches it with content ratings,
              and retrieves additional movie details from The Movie Database
              (TMDB).
            </p>

            <p>
              The React application communicates with my own API endpoints,
              using a configurable base URL for local development and
              production. The Express backend handles communication with TMDB,
              keeping the external API integration separate from the interface
              and preventing the TMDB API key from being exposed in the browser.
            </p>

            <p>
              I also implemented a 24-hour in-memory cache for movie
              certifications to avoid repeating the same external requests. The
              integration includes request timeouts and error handling, allowing
              the catalog to load even when certification data is unavailable.
              Working through these details gave me a better understanding of
              handling external API dependencies.
            </p>
          </CaseStudySection>

          <CaseStudySection
            id="reservations"
            eyebrow="05 / Application behavior"
            title="Making reservations work"
          >
            <p>
              I wanted visitors to be able to do more than browse the movies.
              The reservation feature lets them reserve titles, view a
              reservation receipt, cancel reservations, and see availability
              update throughout the catalog.
            </p>

            <p>
              Reservations are saved in the browser using localStorage and
              restored when the application loads. Each reservation includes a
              confirmation number, reservation date, three-day rental period,
              and rental price. I also added compatibility for an earlier
              version of the reservation data as the application evolved.
            </p>

            <p>
              I used a custom React hook to manage reservation state, keep it
              synchronized with browser storage, and derive reserved movie
              information from the catalog. It's a front-end demonstration
              rather than a shared rental system, but it gave me a chance to
              build a feature involving persistent browser storage, application
              state, and several connected interactions.
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
              from the beginning rather than something added at the end.
            </p>

            <p>
              I used semantic HTML, visible keyboard focus indicators, and
              keyboard-accessible controls throughout the application. The
              reservation receipt required some additional attention. I used a
              native HTML dialog, managed focus when it opens, restored focus to
              the previously focused element when it closes, and made the
              background content inert while the dialog is open.
            </p>

            <p>
              I also added reduced-motion support and checked the interface at
              different screen sizes and browser zoom levels. I wanted the
              experience to remain usable whether someone was navigating with a
              keyboard, using a smaller screen, or enlarging the page to make
              content easier to read.
            </p>
          </CaseStudySection>

          <CaseStudySection
            id="testing"
            eyebrow="07 / Testing"
            title="Adding automated tests"
          >
            <p>
              Testing was another area I wanted to explore as part of this
              project. I started adding tests as the application grew, covering
              individual components as well as the behavior behind them.
            </p>

            <p>
              I used Vitest and React Testing Library for front-end component
              and hook tests, and added tests for the Express routes and TMDB
              integration. I also set up Storybook to develop and test
              components independently, including browser-based component
              testing.
            </p>

            <p>
              Across the application, backend, and Storybook projects, I now
              have 94 automated tests passing. Building out this coverage helped
              me get into the habit of checking that things work as expected,
              rather than relying only on what I could see while clicking around
              in the browser.
            </p>
          </CaseStudySection>

          <CaseStudySection
            id="learning"
            eyebrow="08 / Along the way"
            title="Learning by building"
          >
            <p>
              This project gave me a chance to bring together parts of web
              development that I hadn't used in one application before. I got
              more comfortable working with React components, props, state, and
              hooks, while learning how to organize a larger application,
              connect it to an API, and test different parts of it.
            </p>

            <p>
              There was plenty of trial and error along the way. I spent time
              reading documentation, experimenting with different approaches,
              and working through problems as they came up. Each new feature
              gave me something else to figure out.
            </p>

            <p>
              What started as a way to learn React turned into a deployed
              application with its own backend, external movie data,
              reservations, and automated tests. Getting all of those pieces
              working together was easily the most rewarding part.
            </p>
          </CaseStudySection>

          <CaseStudySection
            id="next-steps"
            eyebrow="09 / What's next"
            title="There's more I'd like to add"
          >
            <p>
              I still have ideas for the project, including expanding the movie
              collection, adding more ways to discover titles, and building out
              more detailed movie pages.
            </p>

            <p>
              For now, I'm happy with how far it has come. It's been a great way
              to learn by doing, try out new tools, and build something that
              feels like my own.
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
              Visit Live Demo{" "}
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="inline-block"
              >
                <path d="M4 12 12 4M5 4h7v7" />
              </svg>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>

            <a
              href="https://github.com/constantmotion29/video-crypt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-primary underline underline-offset-4 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
            >
              Explore GitHub Repository{" "}
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="inline-block"
              >
                <path d="M4 12 12 4M5 4h7v7" />
              </svg>
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
