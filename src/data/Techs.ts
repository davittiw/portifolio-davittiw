import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaEnvelopeOpenText,
} from "react-icons/fa";
import { SiTypescript, SiExpress, SiPrisma } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMysql } from "react-icons/di";

const techs = [
  {
    name: "React",
    icon: FaReact,
    color: "#61dafb",
    descricao: "Tech.tech-stacks.react-dec",
  },
  {
    name: "Next.Js",
    icon: FaEnvelopeOpenText,
    color: "#fff",
    descricao: "Tech.tech-stacks.next-dec",
  },
  {
    name: "Tailwind",
    icon: RiTailwindCssFill,
    color: "#38bdf8",
    descricao: "Tech.tech-stacks.tailwind-dec",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "#3c873a",
    descricao: "Tech.tech-stacks.node-dec",
  },
  {
    name: "Express",
    icon: SiExpress,
    color: "#000",
    descricao: "Tech.tech-stacks.express-dec",
  },
  {
    name: "Typescript",
    icon: SiTypescript,
    color: "#3178c6",
    descricao: "Tech.tech-stacks.type-dec",
  },
  {
    name: "Prisma",
    icon: SiPrisma,
    color: "#4752b7",
    descricao: "Tech.tech-stacks.prisma-dec",
  },
  {
    name: "MySQL",
    icon: DiMysql,
    color: "#00758f",
    descricao: "Tech.tech-stacks.mysql-dec",
  },
  {
    name: "Java",
    icon: FaJava,
    color: "#ea2d2e",
    descricao: "Tech.tech-stacks.java-dec",
  },
  {
    name: "Python",
    icon: FaPython,
    color: "",
    descricao: "Tech.tech-stacks.python-dec",
  },
];

export default techs;
