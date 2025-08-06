import React from "react";
import ProjectsCarousel from "./ProjectCarousel";
import { useTranslation } from "react-i18next";

const ProjectSection = () => {
  const { t } = useTranslation();

  return (
    <section
      id="projects"
      className="w-[90%] min-h-screen flex flex-col items-center justify-center text-white gap-5"
    >
      <div className="info text-center w-[90%] md:w-[80%] xl:w-[40%] z-5 flex items-center justify-center flex-col">
        <h1 className="titulo-responsivo mb-2">{t("Projects.title")}</h1>
        <p className="subtitulos">{t("Projects.description")}</p>
      </div>

      <ProjectsCarousel />
    </section>
  );
};

export default ProjectSection;
