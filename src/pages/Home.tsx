import Inicio from "../components/home-folder/landing/Inicio";
import ProjectSection from "../components/home-folder/project/ProjectSection";
import Contact from "../components/home-folder/contact/Contact";
import Tech from "../components/home-folder/tech-stack/Tech"

import { useEffect } from "react";
import { useLocation } from "react-router";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if(location.hash) {
        const element = document.querySelector(location.hash);
        if(element){
          element.scrollIntoView({ behavior: "smooth"})
        }
      }
    }, 100)
    return () => clearTimeout(timeout)
  })

  return (
    <>
      <main id="home" className="w-full min-h-screen classe-livre flex-col">
        <div className="w-full min-h-screen classe-livre flex-col ">
          <Inicio />
          <Tech />
          <ProjectSection />
          <Contact />
        </div>
      </main>
    </>
  );

}
