import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import projects from "../../../data/Projects"; // ajuste se necessário
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectsCarousel() {
  const { t } = useTranslation();
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliceCount, setSliceCount] = useState(3);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Observa a largura real da div de 90% da tela
  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      const width = entries[0].contentRect.width;

      if (width <= 640) {
        setSliceCount(1);
      } else if (width <= 1024) {
        setSliceCount(2);
      } else {
        setSliceCount(3);
      }
    });

    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  // Filtra os projetos por tecnologia
  const filtered = selectedTech
    ? projects.filter((p) => p.techs.includes(selectedTech))
    : projects;

  const maxIndex = Math.max(0, filtered.length - sliceCount);

  // Garante que currentIndex não ultrapasse o máximo
  useEffect(() => {
    if (currentIndex > maxIndex) setCurrentIndex(maxIndex);
  }, [currentIndex, maxIndex]);

  const currentProjects = filtered.slice(
    currentIndex,
    currentIndex + sliceCount
  );

  const allTechs = [...new Set(projects.flatMap((p) => p.techs))];

  // Navegação
  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - sliceCount));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + sliceCount));
  };

  return (
    <section className="flex justify-center w-full py-6">
      <div ref={containerRef} className="w-[90%]">
        {/* Filtro de tecnologias */}
        <div className="flex flex-wrap gap-3 justify-center mb-6">
          {allTechs.map((tech) => (
            <button
              key={tech}
              className={`px-3 py-1 border rounded-full ${
                selectedTech === tech
                  ? "bg-blue-600 text-white"
                  : "border-blue-600 text-blue-400 hover:bg-blue-800/20"
              }`}
              onClick={() =>
                setSelectedTech((prev) => (prev === tech ? null : tech))
              }
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Navegação esquerda e direita */}
        <div className="flex items-center gap-4">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="p-2 bg-blue-800/20 rounded-full disabled:opacity-30"
          >
            <ChevronLeft />
          </button>

          {/* CARDS */}
          <div className="flex gap-4 overflow-hidden w-full">
            {currentProjects.map((project) => (
              <div
                key={project.title}
                className="w-full rounded-xl border-2 blur-bg border-blue-600/20 p-4 flex flex-col justify-between"
              >
                <div className="w-full aspect-video mb-4 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                <h3 className="text-xl font-bold">{t(project.title)}</h3>
                <p className="text-sm text-gray-300 mt-1">
                  {t(project.description)}
                </p>

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
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className="p-2 bg-blue-800/20 rounded-full disabled:opacity-30"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
