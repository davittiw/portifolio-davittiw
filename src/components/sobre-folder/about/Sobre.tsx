import { useTranslation } from "react-i18next";

function Sobre() {
  const { t } = useTranslation();

  return (
    <section
      id="about-creator"
      className="w-[90%] min-h-screen flex gap-20 flex-col items-center justify-center"
    >
      <div className="w-[90%] md:w-1/2 h-auto text-center">
        <h2 className="text-white text-4xl md:text-5xl xl:text-4xl font-bold">
          {t("About.title")}
        </h2>

        <div className="flex flex-col items-left justify-center p-3">
          <p className="text-gray-300 text-sm md:text-xl lg:text-xl xl:text-lg">
            {t("About.description")}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
