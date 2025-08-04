import { useTranslation } from "react-i18next";
import Stat from "./Stats";
import TechsStacks from "./TechsStacks";

function Tech() {
  const { t } = useTranslation();

  return (
    <>
      <section id="tech" className="min-h-screen w-[90%] md:w-[90%] flex-col gap-5 classe-livre">
        <div className="info w-[90%] h-auto text-center classe-livre flex-col">

          <h2 className="text-white text-4xl font-bold">{t("Tech.title")}</h2>
          <p className="text-white text-lg mb-8 mt-4">
            {t("Tech.description")}
          </p>

          <TechsStacks/>

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
