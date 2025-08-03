import React from "react";
import ProjectsCarousel from "./ProjectCarousel";

const ProjectSection = () => {
  return (
    <section
      id="projects"
      className="w-[90%] min-h-screen flex flex-col items-center justify-center text-white gap-5"
    >
      <div className="info text-center w-[50%] space-y-5 flex items-center justify-center flex-col">
        <h1 className="font-bold text-3xl">Conheça meus projetos :)</h1>
        <p className="text-sm lg:text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima tempore natus deserunt, dolore assumenda qui!
        </p>
      </div>

      <ProjectsCarousel/>
    </section>
  );
};

export default ProjectSection;
