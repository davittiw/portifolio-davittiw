import React from "react";
import Education from "./Education";
import { useTranslation } from "react-i18next";

const EducationSec = () => {
  const { t } = useTranslation();

  return (
    <section id="education" className="min-h-screen w-full classe-livre">

      <div className="classe-livre flex-col gap-5 w-[90%]">
        <div className="info-education classe-livre flex-col">
          <h1 className="titulo-responsivo">{t("About.Academic.title")}</h1>
          <p className="subtitulos md:w-[90%]">
            {t("About.Academic.description")}
          </p>
        </div>

        <Education />
      </div>

      <span className="bg-blue-900 blur-3xl hidden rounded-full xl:block absolute top-300 left-350 w-200 h-200 -z-10 filter opacity-7"></span>
      <span className="bg-blue-900 blur-3xl hidden rounded-full xl:block absolute top-450 left-50 w-200 h-200 -z-10 filter opacity-7"></span>
    </section>
  );
};

export default EducationSec;
