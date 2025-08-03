import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
// import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Personal Finance",
    href: "/projects",
    tags: ["PERN Stack", "JWT", "MUI", "Chart.js"],
    image: {
      LIGHT: "/images/projects/PersonalFinance/FinanceStats.webp",
      DARK: "/images/projects/PersonalFinance/FinanceStats.webp",
    },
  },
  {
    index: 1,
    title: "College Academic Management",
    href: "/projects",
    tags: ["MERN Stack", "MUI", "TailwindCSS"],
    image: {
      LIGHT:
        "/images/projects/AcademicManagementSystem/AcademicAdminDashboardLight.webp",
      DARK: "/images/projects/AcademicManagementSystem/AcademicAdminDashboardDark.webp",
    },
  },
  {
    index: 2,
    title: "Anonymous Messenger",
    href: "/projects",
    tags: ["Next.js", "TypeScript", "NextAuth", "Zod", "MongoDB"],
    image: {
      LIGHT: "/images/projects/anonymousMessenger/messengerDashboard.webp",
      DARK: "/images/projects/anonymousMessenger/messengerDashboard.webp",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Personal Finance",
    favicon: "/images/projects/logos/PersonalFinance.ico",
    imageUrl: [
      "/images/projects/PersonalFinance/FinanceStats.webp",
      "/images/projects/PersonalFinance/FinanceAddExpense.webp",
      "/images/projects/PersonalFinance/FinanceAddIncome.webp",
      "/images/projects/PersonalFinance/FinanceTransactionLog.webp",
      "/images/projects/PersonalFinance/FinanceBlog2.webp",
      // "/images/projects/PersonalFinance/FinanceBlogDetailed.webp",
      "/images/projects/PersonalFinance/FinanceProfile.webp",
    ],
    description:
      "Built a money manager app using the PERN stack. JWT for auth, Chart.js for insights, and MUI for UI. Features include transaction tracking, charts, and a finance blog.",
    sourceCodeHref: "https://github.com/Nirosh-Shetty/Personal-Finance", // update with real link
    // liveWebsiteHref: "https://personal-finance.vercel.app", // update with real URL
  },
  {
    name: "College Academic Management",
    favicon: "/images/projects/logos/AcademicManagementSystem.ico",
    imageUrl: [
      "/images/projects/AcademicManagementSystem/AcademicAdminDashboardLight.webp",
      "/images/projects/AcademicManagementSystem/AcademicAttendance.webp",
      "/images/projects/AcademicManagementSystem/AcademicStaffDashBoard.webp",
      "/images/projects/AcademicManagementSystem/AcademicQuizResult.webp",
      "/images/projects/AcademicManagementSystem/AcademicPlacement.webp",
      "/images/projects/AcademicManagementSystem/AcademicRoleSelect.webp",
    ],
    description:
      "A full-featured academic platform using the MERN stack, MUI, and TailwindCSS. Includes RBAC, attendance, quiz, events, placements, and performance tracking.",
    sourceCodeHref: "https://github.com/Nirosh-Shetty/information-science-dept", // update with real link
    // liveWebsiteHref: "https://college-management.vercel.app", // update with real URL
  },
  {
    name: "Anonymous Messenger",
    favicon: "/images/projects/logos/anonymousMessenger.ico",
    imageUrl: [
      "/images/projects/anonymousMessenger/messengerDashboard.webp",
      "/images/projects/anonymousMessenger/messengerHome.webp",
      "/images/projects/anonymousMessenger/messengerSendMessages.webp",
    ],
    description:
      "Send and receive anonymous messages securely. Built with MERN, Next.js, TypeScript, Zod for schema validation, and NextAuth for authentication.",
    sourceCodeHref: "https://github.com/Nirosh-Shetty/Anonymous-Messenger", // update with real link
    // liveWebsiteHref: "https://anonymous-messenger.vercel.app", // update with real URL
  },
  {
    name: "Ciny",
    favicon: "/images/projects/logos/ciny.ico",
    imageUrl: [
      "/images/projects/ciny/cinyHome.webp",
      "/images/projects/ciny/cinySlider.webp",
      "/images/projects/ciny/cinyTestimonials.webp",
      "/images/projects/ciny/cinyIntructor.webp",
    ],
    description:
      "A simple filmmaking course platform built with Next.js, TypeScript, and Acernity UI. Easily browse courses, view instructors, and start learning filmmaking online.",
    sourceCodeHref: "https://github.com/Nirosh-Shetty/Ciny",
    // liveWebsiteHref: siteMetadata.siteUrl,
  },
];
