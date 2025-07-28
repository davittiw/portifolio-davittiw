import { FaGithub, FaGlobe } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import project from '../../data/Project'

function Projetos () {
    const { t } = useTranslation();

    return (
        <div id="projetos" className="w-80 sm:w-90 md:w-110 lg:w-120 min-h-screen mt-10 bg-[var(--black-gray)] items-center justify-center flex">

            <div className="w-100 sm:w-100 md:w-120 lg:w-120 flex flex-col gap-5 justify-center items-center">
                {project.map((proj) => (
                    <div key={proj.nome} className="w-70 sm:w-70 md:w-120 lg:w-120 h-90 sm:h-90 md:h-50 lg:h-55 border border-white/20 rounded-xl shadow-lg gap-5 p-3 flex flex-col sm:flex-col md:flex-row lg:flex-row items-center hover:scale-105 transition-transform duration-200">

                        <img src={proj.img} alt={t(proj.nome)} className="w-100 sm:w-100 md:w-50 h-full object-cover rounded-lg"/>

                        <div className="space-y-2">
                            <h3 className="text-lg font-bold text-white">{t(proj.nome)}</h3>
                            <p className="text-gray-400 text-left">{t(proj.descricao)}</p>

                            <div className="flex gap-3">
                                <a href={proj.linkgh} target="_blank" className="text-white px-4 py-2 rounded-lg hover:bg-white hover:text-[var(--primary)] border border-[var(--primary)] transition-colors duration-200"><FaGithub /></a>
                                <a href={proj.linkpj} target="_blank" className=" text-white px-4 py-2 rounded-lg hover:bg-white hover:text-[var(--primary)] border border-[var(--primary)] transition-colors duration-200"><FaGlobe /></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Projetos;