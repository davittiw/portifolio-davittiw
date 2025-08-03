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
    descricao:
      "Biblioteca JavaScript declarativa e eficiente para construir interfaces de usuário modernas, especialmente aplicações de página única (SPA).",
  },
  {
    name: "Next.Js",
    icon: FaEnvelopeOpenText,
    color: "#fff",
    descricao:
      "Framework baseado em React que oferece renderização híbrida (SSR/SSG), roteamento automático e excelente performance para apps web escaláveis.",
  },
  {
    name: "Tailwind",
    icon: RiTailwindCssFill,
    color: "#38bdf8",
    descricao:
      "Framework CSS utilitário que permite criar layouts responsivos e modernos diretamente com classes, sem sair do HTML.",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "#3c873a",
    descricao:
      "Ambiente de execução JavaScript do lado do servidor que permite criar APIs, sistemas backend e ferramentas CLI com alta performance.",
  },
  {
    name: "Express",
    icon: SiExpress,
    color: "#000",
    descricao:
      " Framework minimalista e flexível para Node.js, usado para construir APIs e aplicações web de forma rápida e eficiente.",
  },
  {
    name: "Typescript",
    icon: SiTypescript,
    color: "#3178c6",
    descricao:
      "Superset do JavaScript que adiciona tipagem estática ao código, ajudando a evitar erros e melhorar a manutenibilidade de aplicações.",
  },
  {
    name: "Prisma",
    icon: SiPrisma,
    color: "#4752b7",
    descricao:
      "ORM moderno para Node.js e TypeScript que facilita o acesso e a manipulação de bancos de dados relacionais com tipagem segura.",
  },
  {
    name: "MySQL",
    icon: DiMysql,
    color: "#00758f",
    descricao:
      "Sistema de gerenciamento de banco de dados relacional amplamente utilizado, conhecido por sua performance, confiabilidade e facilidade de uso.",
  },
  {
    name: "Java",
    icon: FaJava,
    color: "#ea2d2e",
    descricao:
      "Linguagem de programação orientada a objetos, robusta e multiplataforma, muito usada em aplicações corporativas e desenvolvimento Android.",
  },
  {
    name: "Python",
    icon: FaPython,
    color: "",
    descricao:
      "Linguagem de programação versátil, simples e poderosa, muito popular para automação, análise de dados, desenvolvimento web e inteligência artificial.",
  },
];

export default techs;
