import { useTranslation } from "react-i18next";
import Stat from "./Stats";
import TechsStacks from "./TechsStacks";

function Tech() {
  const { t } = useTranslation();

  return (
    <>
      <section id="tech" className="min-h-screen w-[90%] md:w-[90%] flex-col gap-5 classe-livre">
        <div className="info w-full md:w-1/3 h-auto text-center">

          <h2 className="text-white text-4xl font-bold">{t("Tech.title")}</h2>
          <p className="text-white text-lg mb-8 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            alias hic porro rem quaerat doloribus.
          </p>

        <TechsStacks/>

        <div className="flex gap-10 justify-around py-16">
          <Stat end={6} suffix="+ " label="Projetos Realizados" />
          <Stat end={1} suffix="+" label="Ano de Experiência" />
        </div>
        
      </div>
      </section>
    </>
  );
}

export default Tech;
