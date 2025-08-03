export default function Education() {
  const education = [
    {
      date: "02/2025 - 12/2027",
      title: "Fatec Rubens Lara",
      curso: "Análise e Desenvolvimento de Sistemas",
      description: "Descrição do evento 1",
    },
    {
      date: "07/2023 - 12/2024",
      title: "Etec Praia Grande",
      curso: "Desenvolvimento de Sistemas",
      description: "Descrição do evento 2",
    },
    {
      date: "02/2023 - 07/2027",
      title: "CNA Idiomas",
      curso: "Inglês",
      description: "Descrição do evento 3",
    },
  ];

  return (
    <div className="w-auto sm:w-[50%] md:w-[60%] xl:w-full">
      <ol className="relative space-y-8 before:absolute before:top-0 before:left-1/2 before:h-full before:w-0.5 before:-translate-x-1/2 before:rounded-full before:bg-gray-200">
        {education.map((item, index) => (
          <li
            key={index}
            className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3"
          >
            <div className="relative flex items-start gap-2 sm:gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
              {/* Bola para marcar início de um evento */}
              <span className="size-3 shrink-0 rounded-full bg-blue-600"></span>

              {/* Informações */}
              <div className="mt-2">
                {/* Data do acontecimento */}
                <time className="text-sm sm:text-md md:text-lg lg:text-xl xl:text-sm font-medium text-zinc-600">
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
