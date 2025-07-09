import { FaReact, FaNodeJs, FaGitAlt, FaJava, FaPython, FaPhp } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMysql } from "react-icons/di";

function Tech () {
    const techs = [
        {name: 'React', icon: <FaReact />},
        {name: 'Node.js', icon: <FaNodeJs />},
        {name: 'Java', icon: <FaJava />},
        {name: 'Python', icon: <FaPython />},
        {name: 'PHP', icon: <FaPhp />},
        {name: 'TypeScript', icon: <SiTypescript />},
        {name: 'Tailwind', icon: <RiTailwindCssFill />},
        {name: 'MySQL', icon: <DiMysql size={30}/>},
        {name: 'Git', icon: <FaGitAlt />}
    ];

    return(
        <div className="w-full flex justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-2 justify-items-center max-w-fit">
            {techs.map((tech) => (
                <div className="border-white/20 border text-gray-300 gap-2 rounded-lg items-center justify-center flex w-28 h-10" key={tech.name}>
                    {tech.icon}
                    <span>{tech.name}</span>
                </div>
            ))}
            </div>
        </div>
    );
}

export default Tech;