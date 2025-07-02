import { type ExperienceShowcaseListItemProps } from "@/components/experience/experience-showcase-list-item";

export const EDUCATION: ExperienceShowcaseListItemProps[] = [
  {
    title: "Bachelor of Engineering in Information Science and Engineering",
    organisation: {
      name: "Atria Institute of Technology (VTU)",
      href: "https://atria.edu/",
    },
    date: "2021 – 2025",
    location: "Bengaluru, Karnataka",
    description:
      "Focused on software engineering, web technologies, and full-stack development. CGPA: 7.75",
  },
  {
    title: "Pre-University Course (Class XII) – Science",
    organisation: {
      name: "RNS PU College",
      href: "https://www.rnspucollege.com/",
    },
    date: "2019 – 2021",
    location: "Udupi, Karnataka",
    description:
      "Completed KSEEB Class XII with 92%. Developed interest in computer science and problem solving.",
  },
  {
    title: "Secondary School (Class X)",
    organisation: {
      name: "GHS Siddapura",
      href: "#", // No website listed in resume
    },
    date: "2016 – 2019",
    location: "Udupi, Karnataka",
    description:
      "Completed KSEEB Class X with 88%. Built strong academic foundation and discipline.",
  },
];
