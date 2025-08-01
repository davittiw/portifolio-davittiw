import { FaReact, FaNodeJs, FaJava, FaPython } from "react-icons/fa";
import { SiTypescript, SiExpress, SiPrisma } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMysql } from "react-icons/di";

function Tech() {
  const techs = [
    { name: "React", icon: FaReact, color: "#61dafb" },
    { name: "Tailwind", icon: RiTailwindCssFill, color: "#38bdf8" },
    { name: "Node.js", icon: FaNodeJs, color: "#3c873a" },
    { name: "Express", icon: SiExpress, color: "#000" },
    { name: "Typescript", icon: SiTypescript, color: "#3178c6" },
    { name: "Prisma", icon: SiPrisma, color: "#4752b7" },
    { name: "MySQL", icon: DiMysql, color: "#00758f" },
    { name: "Java", icon: FaJava, color: "#ea2d2e" },
    { name: "Python", icon: FaPython, color: "" },
  ];

  return (
    <div id="tech" className="mt-5 flex justify-center items-center">
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2 justify-center">
        {techs.map((tech) => {
          const Icon = tech.icon;
          return (
            <div
              key={tech.name}
              className="border border-white/20 text-gray-300 rounded-lg items-center justify-center flex h-10 p-2 gap-2 transition-colors duration-200 cursor-pointer animate-pulse hover:bg-gray-800 hover:border-gray-600 hover:text-white"
              style={{
                borderColor: undefined,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = tech.color;
                e.currentTarget.style.color = tech.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "";
                e.currentTarget.style.color = "";
              }}
            >
              <Icon
                size={20}
                style={{ color: "inherit" }}
                className="transition-colors duration-200"
              />
              <span className="transition-colors duration-200">
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Tech;
