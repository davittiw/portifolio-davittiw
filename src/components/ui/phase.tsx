import React from "react";
import { useTranslation } from "react-i18next";

const phase = () => {
  const { t } = useTranslation();

  return (
    <div className="h-96 w-full classe-livre">
      <figure className="text-white classe-livre flex-col gap-10">
        <span className="bg-blue-600 w-50 md:w-100 h-0.5 absolute top-230 md:top-250"></span>
        <span className="bg-blue-600 w-50 md:w-100 h-0.5 absolute top-280 md:top-300"></span>

        <blockquote className="titulo-responsivo italic text-center">
          "{t("About.phase")}"
        </blockquote>

        <figcaption className="font-semibold text-2xl">
          - Jorge Luis Borges
        </figcaption>
      </figure>
    </div>
  );
};

export default phase;
