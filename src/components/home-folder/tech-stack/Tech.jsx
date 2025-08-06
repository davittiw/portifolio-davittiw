import { useTranslation } from "react-i18next";
import Stat from "./Stats";
import TechsStacks from "./TechsStacks";

function Tech() {
  const { t } = useTranslation();

  return (
    <>
      <section
        id="tech"
        className="relative min-h-screen w-[90%] md:w-[90%] flex-col gap-5 classe-livre overflow-hidden"
      >
        <div className="info w-[90%]  relative z-5 h-auto text-center classe-livre flex-col">
          <h2 className="titulo-responsivo">{t("Tech.title")}</h2>

          <p className="subtitulos mb-8 mt-4">{t("Tech.description")}</p>

          <TechsStacks />

          <div className="flex gap-10  w-[50%] justify-around py-16">
            <Stat end={6} suffix="+ " label={t("Tech.stats-proj")} />
            <Stat end={1} suffix="+" label={t("Tech.stats-year")} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Tech;
