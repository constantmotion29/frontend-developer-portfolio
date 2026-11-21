import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const DIST_DIR = path.resolve("dist");
const SOURCE_FILE = path.join(DIST_DIR, "index.html");
const OUTPUT_DIR = path.join(DIST_DIR, "projects", "the-video-crypt");
const OUTPUT_FILE = path.join(OUTPUT_DIR, "index.html");

const SITE_URL = "https://anna-wesolowski.vercel.app";
const PAGE_URL = `${SITE_URL}/projects/the-video-crypt/`;
const PAGE_TITLE = "The Video Crypt Case Study | Anna Wesolowski";
const PAGE_DESCRIPTION =
  "Explore The Video Crypt, a horror movie rental application built with React, Vite, Express, and accessible UI patterns. See the design, architecture, integrations, and testing behind the project.";
const PREVIEW_IMAGE = `${SITE_URL}/images/video-crypt-preview.webp`;

const PROJECT_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Anna Wesolowski",
      url: `${SITE_URL}/`,
      jobTitle: "Front-End Developer",
      sameAs: [
        "https://www.linkedin.com/in/annawesolowski",
        "https://github.com/constantmotion29",
      ],
      knowsAbout: [
        "Front-End Development",
        "UI Engineering",
        "Web Accessibility",
        "Responsive Web Design",
      ],
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${PAGE_URL}#application`,
      name: "The Video Crypt",
      url: "https://video-crypt.vercel.app/",
      applicationCategory: "WebApplication",
      operatingSystem: "Web",
      description:
        "A fictional horror movie rental storefront featuring a searchable movie catalog, movie details, and interactive reservations.",
      image: PREVIEW_IMAGE,
      author: {
        "@id": `${SITE_URL}/#person`,
      },
      keywords: [
        "React",
        "JavaScript",
        "Vite",
        "Node.js",
        "Express",
        "TMDB API",
        "Vitest",
        "React Testing Library",
        "Storybook",
        "Web accessibility",
      ],
    },
  ],
};

function replaceTag(html, pattern, replacement, name) {
  if (!pattern.test(html)) {
    throw new Error(`Could not find the existing ${name} tag.`);
  }

  return html.replace(pattern, replacement);
}

async function prerender() {
  let html = await readFile(SOURCE_FILE, "utf8");

  html = replaceTag(
    html,
    /<title>[\s\S]*?<\/title>/i,
    `<title>${PAGE_TITLE}</title>`,
    "title",
  );

  html = replaceTag(
    html,
    /<link rel="canonical"[^>]*>/i,
    `<link rel="canonical" href="${PAGE_URL}" />`,
    "canonical",
  );

  html = replaceTag(
    html,
    /<meta\s+name="description"[\s\S]*?>/i,
    `<meta name="description" content="${PAGE_DESCRIPTION}" />`,
    "description",
  );

  // Remove the original homepage social metadata.
  html = html.replace(
    /<meta\s+property="og:(?:url|title|description|image)"[\s\S]*?>/gi,
    "",
  );

  html = html.replace(/<meta\s+name="twitter:[^"]+"[\s\S]*?>/gi, "");

  // Replace homepage structured data with project-specific structured data.
  html = html.replace(
    /<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/gi,
    "",
  );

  const metadata = [
    `<meta property="og:url" content="${PAGE_URL}" />`,
    `<meta property="og:title" content="${PAGE_TITLE}" />`,
    `<meta property="og:description" content="${PAGE_DESCRIPTION}" />`,
    `<meta property="og:image" content="${PREVIEW_IMAGE}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${PAGE_TITLE}" />`,
    `<meta name="twitter:description" content="${PAGE_DESCRIPTION}" />`,
    `<meta name="twitter:image" content="${PREVIEW_IMAGE}" />`,
  ].join("\n    ");

  html = html.replace(
    /(<meta property="og:type"[^>]*>)/i,
    `$1\n    ${metadata}`,
  );

  const structuredData = `<script type="application/ld+json">\n${JSON.stringify(PROJECT_SCHEMA, null, 2)}\n</script>`;

  html = html.replace("</head>", `    ${structuredData}\n  </head>`);

  await mkdir(OUTPUT_DIR, { recursive: true });
  await writeFile(OUTPUT_FILE, html, "utf8");

  console.log(`Prerendered: ${OUTPUT_FILE}`);
}

prerender().catch((error) => {
  console.error("Prerendering failed:", error);
  throw error;
});
