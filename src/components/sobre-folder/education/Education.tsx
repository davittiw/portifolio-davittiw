import { useTranslation } from "react-i18next";

export default function Education() {
  const { t } = useTranslation();
  const education = [
    {
      date: "02/2025 - 12/2027",
      title: "Fatec Rubens Lara",
      curso: t("About.Academic.titulos.form1.title"),
      description: t("About.Academic.titulos.form1.description"),
    },
    {
      date: "07/2023 - 12/2024",
      title: "Etec Praia Grande",
      curso: t("About.Academic.titulos.form2.title"),
      description: t("About.Academic.titulos.form2.description"),
    },
    {
      date: "02/2023 - 07/2027",
      title: "CNA Idiomas",
      curso: t("About.Academic.titulos.form3.title"),
      description: t("About.Academic.titulos.form3.description"),
    },
  ];


  return (
    <div className="w-full sm:w-[70%] md:w-[80%] xl:w-full classe-livre">
      <ol className="relative space-y-8 before:absolute before:top-0 before:left-1/2 before:h-full before:w-0.5 before:-translate-x-1/2 before:rounded-full before:bg-gray-200 flex justify-center flex-col items-center">
        {education.map((item, index) => (
          <li
            key={index}
            className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3 w-full"
          >
            <div className="relative flex items-start gap-2 sm:gap-4 group-odd:flex-row-reverse group-odd:text-right w-full group-even:order-last">
              {/* Bola para marcar início de um evento */}
              <span className="size-3 shrink-0 rounded-full bg-blue-600"></span>

              {/* Informações */}
              <div className="mt-2">
                {/* Data do acontecimento */}
                <time className="text-sm sm:text-md md:text-lg font-medium text-zinc-600">
                  {item.date}
                </time>

                {/* Título do acontecimento */}
                <h3 className="text-md sm:text-lg md:text-xl lg:text-2xl xl:text-xl font-bold text-white">
                  {item.title}
                </h3>

                {/* Nome do curso */}
                <p className="text-zinc-300 text-sm sm:text-md md:text-lg lg:text-xl xl:text-lg font-regular">
                  {item.curso}
                </p>

                {/* Descrição do curso */}
                <p className="mt-0.5 text-sm md:text-lg lg:text-xl xl:text-sm text-zinc-400">
                  {item.description}
                </p>
              </div>
            </div>

            <div aria-hidden="true"></div>
          </li>
        ))}
      </ol>
    </div>
  );
}
