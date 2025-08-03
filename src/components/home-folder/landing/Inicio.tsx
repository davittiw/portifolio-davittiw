import React from "react";

const Inicio = () => {
  return (
    <section
      id="home"
      className="w-[90%] min-h-screen text-white flex gap-10 justify-center items-center"
    >
      <div className="w-[90%] md:w-[100%] lg:w-[90%] flex flex-col md:flex-row justify-center items-center gap-10">

        <div className="w-[90%] md:w-[50%] text-center">
          <h2 className="text-zinc-400 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-2xl">Hi! I'm Luccas Davi</h2>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-5xl font-bold">
            <span className="gradient-text bg-gradient-to-bl bg-clip-text text-transparent">
              Full-Stack
            </span> Developer
          </h1>

          <p className="text-sm md:text-xl lg:text-2xl xl:text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
            provident ipsa autem. Deserunt, sint adipisci! Adipisci distinctio
            hic cumque reiciendis culpa expedita molestias minima, atque
            voluptatem! Accusantium veritatis consectetur possimus?{" "}
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
