import React from "react";
import { useTranslation } from "react-i18next";

const Inicio = () => {
  const { t } = useTranslation()

  return (
    <section
      id="home"
      className="w-[90%] min-h-screen text-white flex gap-10 justify-center items-center"
    >
      <div className="w-[90%] md:w-[100%] lg:w-[90%] flex flex-col md:flex-row justify-center items-center gap-10">

        <div className="w-[90%] md:w-[50%] text-center">
          <h2 className="text-zinc-400 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-2xl">{t("Info.hi")}</h2>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-5xl classe-livre font-bold">
            <span className="gradient-text bg-gradient-to-bl bg-clip-text text-transparent">
              {t("Info.dev")}
            </span>
          </h1>

          <p className="text-sm md:text-xl lg:text-2xl xl:text-lg">
            {t("Info.description")}
          </p>
        </div>

      </div>

      <a href="#tech" className="absolute bottom-30 md:bottom-20">
        <span className="material-symbols-outlined nav-item animate-bounce cursor-pointer">
          keyboard_arrow_down
        </span>
      </a>

    </section>
  );
};

export default Inicio;
