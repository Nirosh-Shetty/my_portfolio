import { SiExpress, SiNextdotjs } from "react-icons/si";
import { FramerMotionIcon } from "@/components/icons";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

// Languages
import HtmlSvg from "@/public/icons/html.svg";
import CsssSvg from "@/public/icons/css.svg";
import Java from "@/public/icons/java.svg";
import JavascriptSvg from "@/public/icons/javascript.svg";
import TypescriptSvg from "@/public/icons/typescript.svg";
import PythonSvg from "@/public/icons/python.svg";

// Libraries
import ReactjsSvg from "@/public/icons/reactjs.svg";
import ReduxSvg from "@/public/icons/redux.svg";
import TailwindcssSvg from "@/public/icons/tailwindcss.svg";
import MuiSvg from "@/public/icons/mui.svg";
import JiraSvg from "@/public/icons/jira.svg";

// Backend
import NodejsSvg from "@/public/icons/nodejs.svg";
import rabbitmqSvg from "@/public/icons/rabbitmq.svg";
import Socketdotio from "@/public/icons/socket.io.svg";

// Database and ORMS
import MongoDBSvg from "@/public/icons/mongodb.svg";
import PostgressSvg from "@/public/icons/postgresql.svg";
import RedisSvg from "@/public/icons/redis.svg";

// Tools and Tech
import GitSvg from "@/public/icons/git.svg";
import DockerSvg from "@/public/icons/docker.svg";
import AwsSvg from "@/public/icons/aws.svg";
import PostmanSvg from "@/public/icons/postman.svg";
import FigmaSvg from "@/public/icons/figma.svg";

//non-technical skills
import DisciplineSVG from "@/public/icons/discipline.svg";
import FocusSvg from "@/public/icons/focus.svg";
import EagernessToLearnSvg from "@/public/icons/eagerness-to-learn.svg";
import TeamPlayerSvg from "@/public/icons/team-player.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      {
        name: "Java",
        icon: Java,
      },
      {
        name: "Python",
        icon: PythonSvg,
      },
      {
        name: "Javascript",
        icon: JavascriptSvg,
      },
      {
        name: "Typescript",
        icon: TypescriptSvg,
      },
      {
        name: "HTML",
        icon: HtmlSvg,
      },
      {
        name: "CSS",
        icon: CsssSvg,
      },
    ],
  },
  {
    sectionName: "Frontend",
    skills: [
      {
        name: "Reactjs",
        icon: ReactjsSvg,
      },
      {
        name: "Nextjs",
        icon: SiNextdotjs,
      },

      // {
      //   name: "React Router Dom",
      //   icon: ReactRouterDomIcon,
      // },
      {
        name: "Redux",
        icon: ReduxSvg,
      },
      {
        name: "Tailwindcss",
        icon: TailwindcssSvg,
      },
      {
        name: "MUI",
        icon: MuiSvg,
      },
      {
        name: "Framer motion",
        icon: FramerMotionIcon,
      },
    ],
  },
  {
    sectionName: "Backend",
    skills: [
      {
        name: "Nodejs",
        icon: NodejsSvg,
      },
      {
        name: "Express",
        icon: SiExpress,
      },
      {
        name: "Redis",
        icon: RedisSvg,
      },
      {
        name: "Socket.io",
        icon: Socketdotio,
      },
      {
        name: "RabbitMQ",
        icon: rabbitmqSvg,
      },
      // {
      //   name: "Socket.io",
      //   icon: SiSocketdotio,
      // },
    ],
  },
  {
    sectionName: "Databases and ORMs",
    skills: [
      {
        name: "MongoDB",
        icon: MongoDBSvg,
      },
      {
        name: "Postgress",
        icon: PostgressSvg,
      },
    ],
  },
  {
    sectionName: "Cloud & Deployment",
    skills: [
      {
        name: "AWS",
        icon: AwsSvg,
      },
      {
        name: "Docker",
        icon: DockerSvg,
      },
    ],
  },
  {
    sectionName: "Tools and Technologies",
    skills: [
      {
        name: "Jira",
        icon: JiraSvg,
      },

      {
        name: "Postman",
        icon: PostmanSvg,
      },
      {
        name: "Figma",
        icon: FigmaSvg,
      },
      {
        name: "Git",
        icon: GitSvg,
      },
    ],
  },
  {
    sectionName: "Non-Technical Skills",
    skills: [
      {
        name: "Discipline",
        icon: DisciplineSVG,
      },
      {
        name: "Focus",
        icon: FocusSvg,
      },

      {
        name: "Team Player",
        icon: TeamPlayerSvg,
      },
      {
        name: "Eagerness to Learn",
        icon: EagernessToLearnSvg,
      },
    ],
  },
];
