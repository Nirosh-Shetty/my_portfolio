import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Personal Finance",
    href: "/projects",
    tags: ["PERN Stack", "JWT", "MUI", "Chart.js"],
    image: {
      LIGHT: "/images/projects/jsontreeLight.webp",
      DARK: "/images/projects/jsontreeDark.webp",
    },
  },
  {
    index: 1,
    title: "College Academic Management",
    href: "/projects",
    tags: ["MERN Stack", "MUI", "TailwindCSS"],
    image: {
      LIGHT: "/images/projects/manyGamesLight.webp",
      DARK: "/images/projects/manyGamesDark.webp",
    },
  },
  {
    index: 2,
    title: "Anonymous Messenger",
    href: "/projects",
    tags: ["Next.js", "TypeScript", "NextAuth", "Zod", "MongoDB"],
    image: {
      LIGHT: "/images/projects/kanbanLight.webp",
      DARK: "/images/projects/kanbanDark.webp",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Personal Finance",
    favicon: "/images/projects/logos/jsontree.ico",
    imageUrl: [
      "/images/projects/jsontreeLight.webp",
      "/images/projects/jsontreeDark.webp",
    ],
    description:
      "Built a money manager app using the PERN stack. JWT for auth, Chart.js for insights, and MUI for UI. Features include transaction tracking, charts, and a finance blog.",
    sourceCodeHref: "https://github.com/BUMBAIYA/personal-finance", // update with real link
    liveWebsiteHref: "https://personal-finance.vercel.app", // update with real URL
  },
  {
    name: "College Academic Management",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: [
      "/images/projects/manyGamesDark.webp",
      "/images/projects/manyGamesLight.webp",
      "/images/projects/manyGames2048.webp",
      "/images/projects/manyGamesPuzzle.webp",
      "/images/projects/manyGamesWordle.webp",
    ],
    description:
      "A full-featured academic platform using the MERN stack, MUI, and TailwindCSS. Includes RBAC, attendance, quiz, events, placements, and performance tracking.",
    sourceCodeHref: "https://github.com/BUMBAIYA/college-management", // update with real link
    liveWebsiteHref: "https://college-management.vercel.app", // update with real URL
  },
  {
    name: "Anonymous Messenger",
    favicon: "/images/projects/logos/kanban.ico",
    imageUrl: [
      "/images/projects/kanbanLight.webp",
      "/images/projects/kanbanDark.webp",
      "/images/projects/kanbanCardLight.webp",
    ],
    description:
      "Send and receive anonymous messages securely. Built with MERN, Next.js, TypeScript, Zod for schema validation, and NextAuth for authentication.",
    sourceCodeHref: "https://github.com/BUMBAIYA/anonymous-messenger", // update with real link
    liveWebsiteHref: "https://anonymous-messenger.vercel.app", // update with real URL
  },
  {
    name: "My portfolio",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/portfolioDark.webp",
      "/images/projects/portfolioLight.webp",
    ],
    description:
      "My personal portfolio website made using Nextjs, tailwindcss and framer motion.",
    sourceCodeHref: "https://github.com/BUMBAIYA/amitchauhan-v2",
    liveWebsiteHref: siteMetadata.siteUrl,
  },
];
