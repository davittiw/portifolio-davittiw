import { FaGithub, FaGlobe } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

function Projetos () {
    const { t } = useTranslation();

    const Projeto = [
      {
        nome: t("Project4.title"),
        descricao: t("Project4.description"),
        linkpj: "https://davittiw.vercel.app/",
        linkgh: "https://github.com/davittiw/portifolio-davittiw",
        img: "/images/portifolio.jpg",
      },
      {
        nome: t("Project5.title"),
        descricao: t("Project5.description"),
        linkpj: "https://bookboxd-liart.vercel.app/",
        linkgh: "https://github.com/davittiw/bookboxd",
        img: "/images/bookboxd.png",
      },
      {
        nome: t("Project1.title"),
        descricao: t("Project1.description"),
        linkpj: "https://verifica-clima.vercel.app/",
        linkgh: "https://github.com/davittiw/pj_verificador-clima",
        img: "/images/verifica-clima.jpg",
      },
      {
        nome: t("Project2.title"),
        descricao: t("Project2.description"),
        linkpj: "https://davittiw.github.io/pj_gerador-senhas/",
        linkgh: "https://github.com/davittiw/pj_gerador-senhas",
        img: "/images/gerador-de-senha.jpg",
      },
      {
        nome: t("Project3.title"),
        descricao: t("Project3.description"),
        linkpj: "https://projeto-conversor-bases.vercel.app/",
        linkgh: "https://github.com/davittiw/pj_conversor-bases",
        img: "/images/conversor-de-base.jpg",
      },
    ];

    return (
        <div id="projetos" className="w-80 sm:w-90 md:w-110 lg:w-120 min-h-screen mt-10 bg-[var(--black-gray)] items-center justify-center flex">

            <div className="w-100 sm:w-100 md:w-120 lg:w-120 flex flex-col gap-5 justify-center items-center">
                {Projeto.map((proj) => (
                    <div key={proj.nome} className="w-70 sm:w-70 md:w-120 lg:w-120 h-90 sm:h-90 md:h-50 lg:h-50 border border-white/20 rounded-xl shadow-lg gap-5 p-3 flex flex-col sm:flex-col md:flex-row lg:flex-row items-center hover:scale-105 transition-transform duration-200">

                        <img src={proj.img} alt={proj.nome} className="w-100 sm:w-100 md:w-50 h-40 object-cover rounded-lg"/>

                        <div>
                            <h3 className="text-lg font-bold text-white mb-1">{proj.nome}</h3>
                            <p className="text-gray-400 mb-3 text-left">{proj.descricao}</p>

                            <div className="flex gap-3">
                                <a href={proj.linkgh} target="_blank" className="text-white px-4 py-2 rounded-lg hover:bg-white hover:text-[var(--primary)] border border-[var(--primary)] transition-colors duration-200"><FaGithub /></a>
                                <a href={proj.linkpj} target="_blank" className=" text-white px-4 py-2 rounded-lg hover:bg-white hover:text-[var(--primary)] border border-[var(--primary)] transition-colors duration-200"><FaGlobe /></a>
                            </div>
                        </div>
                    </div>
                ))};
            </div>

        </div>
    )
}

export default Projetos;