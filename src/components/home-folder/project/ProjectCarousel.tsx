import { useState } from "react";
import projects from "../../../data/Projects"
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import { useTranslation } from "react-i18next";

const allTechs = [...new Set(projects.flatMap((p) => p.techs))];

export default function ProjectsCarousel() {
    const { t } = useTranslation(); 
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filtered = selectedTech
    ? projects.filter((p) => p.techs.includes(selectedTech))
    : projects;

  const currentProjects = filtered.slice(currentIndex, currentIndex + 3);

  return (
    <section className="w-[50%] text-white max-w-6xl mx-auto">
      <h2 className="text-2xl mb-4 font-medium">Filtrar por tecnologia:</h2>
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setSelectedTech(null)}
          className={`px-3 py-1 rounded-full border transition ${
            selectedTech === null
              ? "bg-white text-black border-white"
              : "border-gray-600 hover:bg-gray-700"
          }`}
        >
          Todos
        </button>
        {allTechs.map((tech) => (
          <button
            key={tech}
            onClick={() => setSelectedTech(tech)}
            className={`px-3 py-1 rounded-full border transition ${
              selectedTech === tech
                ? "bg-white text-black border-white"
                : "border-gray-600 hover:bg-gray-700"
            }`}
          >
            {tech}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <button
          disabled={currentIndex === 0}
          onClick={() => setCurrentIndex((i) => Math.max(i - 1, 0))}
          className="p-2 bg-gray-800 rounded-full disabled:opacity-30"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {currentProjects.map((project) => (
            <div
              key={project.title}
              className="rounded-xl border-2 border-gray-200/20 p-4 flex flex-col justify-between shadow"
            >

            {/* Imagem de cada projeto */}
              <div className="w-full h-48 rounded-lg mb-4 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full object-cover rounded-lg"
                />
              </div>
              
            {/* Informações dos projetos */}
              <h3 className="text-xl font-bold">{t(project.title)}</h3>
              <p className="text-sm text-gray-300 mt-1">{t(project.description)}</p>

            {/* Tags de tecnologias utilizadas */}
              <div className="flex flex-wrap gap-2 mt-3">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-sm bg-gray-900 rounded-full text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-2 mt-4">
                <a
                  href={project.siteUrl}
                  target="_blank"
                  className="flex-1 classe-livre gap-4 px-3 py-2 button transition"
                >
                  <ExternalLink size={16} /> Ver Site
                </a>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  className="flex-1 classe-livre gap-1 px-3 py-2 button transition"
                >
                  <Github size={16} /> GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

        <button
          disabled={currentIndex + 3 >= filtered.length}
          onClick={() => setCurrentIndex((i) => i + 1)}
          className="p-2 bg-gray-800 rounded-full disabled:opacity-30"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <p className="text-center text-sm text-gray-400 mt-6">
        {filtered.length} projetos encontrados
      </p>
    </section>
  );
}