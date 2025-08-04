import { useState, useEffect } from "react";
import projects from "../../../data/Projects";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import { useTranslation } from "react-i18next";

const allTechs = [...new Set(projects.flatMap((p) => p.techs))];

export default function ProjectsCarousel() {
  const { t } = useTranslation();
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliceCount, setSliceCount] = useState(3);

  useEffect(() => {
    function handleResize() {
      const w = window.innerWidth;
      if (w <= 640) {
        setSliceCount(1); // sm e menor
      } else if (w <= 768) {
        setSliceCount(2); // md
      } else {
        setSliceCount(3); // lg e maiores
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filtered = selectedTech
    ? projects.filter((p) => p.techs.includes(selectedTech))
    : projects;

  // Limita currentIndex para não passar do máximo possível
  const maxIndex = Math.max(0, filtered.length - sliceCount);

  // Ajusta currentIndex caso tenha passado do limite (ex: quando filtra e reduz array)
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [currentIndex, maxIndex]);

  const currentProjects = filtered.slice(
    currentIndex,
    currentIndex + sliceCount
  );

  return (
    <section className="w-[90%] md:w-[80%] text-white max-w-6xl mx-auto">
      <h2 className="text-xl mb-4 font-medium">{t("Projects.filter")}</h2>

      {/* Botões de filtro por linguagem */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => {
            setSelectedTech(null);
            setCurrentIndex(0);
          }}
          className={`px-2 py-1 rounded-full border transition ${
            selectedTech === null
              ? "bg-white text-black border-white"
              : "border-blue-600/20 hover:bg-gray-700"
          }`}
        >
          Todos
        </button>

        {allTechs.map((tech) => (
          <button
            key={tech}
            onClick={() => {
              setSelectedTech(tech);
              setCurrentIndex(0);
            }}
            className={`px-3 py-1 rounded-full border transition ${
              selectedTech === tech
                ? "bg-white text-black border-white"
                : "border-blue-600/20 hover:bg-gray-700"
            }`}
          >
            {tech}
          </button>
        ))}
      </div>

        {/* Cards */}
      <div className="flex items-center justify-center gap-4">
      {/* Botoes do carrossel */}
        <button
          disabled={currentIndex === 0}
          onClick={() => setCurrentIndex((i) => Math.max(i - 1, 0))}
          className="p-2 blur-bg rounded-full disabled:opacity-30"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex gap-4 w-full overflow-hidden">
          {currentProjects.map((project) => (
            <div
              key={project.title}
              className="rounded-xl border-2 w-80 blur-bg border-blue-600/20 p-4 flex flex-col justify-between"
            >
              {/* Imagem do projeto */}
              <div className="w-full h-48 rounded-lg mb-4 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full object-cover rounded-lg"
                />
              </div>

              {/* Titulo e descrição de cada projeto */}
              <h3 className="text-xl font-bold">{t(project.title)}</h3>
              <p className="text-sm text-gray-300 mt-1">
                {t(project.description)}
              </p>

              {/* Tag de cada tecnologia nos projetos */}
              <div className="flex flex-wrap gap-2 mt-3">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-sm border border-blue-600/20 rounded-full text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Botoes de links externos */}
              <div className="flex gap-2 mt-4">
                <a
                  href={project.siteUrl}
                  target="_blank"
                  className="flex-1 classe-livre gap-4 px-3 py-2 button border transition"
                >
                  <ExternalLink size={16} />
                  {t("Projects.button-see")}
                </a>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  className="flex-1 classe-livre gap-1 px-3 py-2 button border transition"
                >
                  <Github size={16} /> GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

        <button
          disabled={currentIndex >= maxIndex}
          onClick={() => setCurrentIndex((i) => Math.min(i + 1, maxIndex))}
          className="p-2 bg-gray-800 rounded-full disabled:opacity-30"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <p className="text-center text-sm text-gray-400 mt-6">
        {filtered.length} {t("Projects.titles-search")}
      </p>
    </section>
  );
}
