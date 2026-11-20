# Front-End Developer Portfolio

A personal portfolio showcasing my front-end development experience, UI engineering skills, and approach to building responsive, accessible web experiences.

Built with React, Vite, and Tailwind CSS, the portfolio features a component-based architecture with reusable UI components and Storybook for component development and documentation.

**[View Live Portfolio](https://anna-wesolowski.vercel.app)**

## Tech Stack

- **React** – Component-based UI development
- **JavaScript (ES6+)** – Application logic and interactive functionality
- **Vite** – Development server and production build tooling
- **Tailwind CSS** – Responsive styling and utility-first CSS
- **Storybook** – Component development and documentation
- **ESLint** – Code quality and linting

## Features

- Responsive layouts for desktop and mobile devices
- Reusable React components
- Accessible navigation and semantic HTML
- Keyboard-accessible interactions and visible focus indicators
- Reduced-motion support
- Dedicated component stories in Storybook
- Featured project showcase with live demo and GitHub links
- Contact section with links to professional profiles

## Featured Project

### The Video Crypt

A vintage-inspired horror movie rental application built with React and Express, combining a nostalgic video store aesthetic with modern frontend development practices.

Features include:

- Interactive horror movie catalog
- Server-side TMDB API integration
- Search and filtering functionality
- Movie detail expansion
- Reservation management and confirmation receipts
- Persistent browser storage
- Responsive layouts and accessible interactions

**[Live Demo](https://video-crypt.vercel.app)** · **[GitHub Repository](https://github.com/constantmotion29/video-crypt)**

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

Clone the repository and navigate to the project directory:

```bash
git clone https://github.com/constantmotion29/frontend-developer-portfolio.git
cd frontend-developer-portfolio
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will provide a local development URL in the terminal.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the Vite development server |
| `npm run build` | Builds the application for production |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs ESLint |
| `npm run storybook` | Starts the Storybook development server |
| `npm run build-storybook` | Builds Storybook for production |

## Storybook

Storybook is used to develop, inspect, and document individual React components independently of the main application.

To start Storybook:

```bash
npm run storybook
```

The development server runs at `http://localhost:6006`.

To create a production build of Storybook:

```bash
npm run build-storybook
```

## Accessibility

Accessibility is an important consideration throughout the project.

Implementation includes:

- Semantic HTML and accessible section headings
- Keyboard navigation and visible focus indicators
- Descriptive accessible names for interactive elements
- Reduced-motion preferences
- Responsive layouts and zoom support
- Storybook accessibility checks

## Project Structure

```text
frontend-developer-portfolio/
├── .storybook/
│   ├── main.js
│   └── preview.jsx
├── public/
│   └── images/
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── FeaturedWork.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   └── Skills.jsx
│   ├── App.jsx
│   └── index.css
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
└── vite.config.js
```

## Deployment

The portfolio is deployed on [Vercel](https://vercel.com/).

**[anna-wesolowski.vercel.app](https://anna-wesolowski.vercel.app)**

The project is connected to GitHub, allowing changes pushed to the repository to trigger automatic deployments.

## License

This project was created as a personal portfolio and demonstration of front-end development skills.