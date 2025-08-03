import Language from "./Language.js";
import { useTranslation } from "react-i18next"; // Importando o hook de tradução
import { Link } from "react-router";

function Navbar() {
  const { t } = useTranslation(); // Hook para tradução

  return (
    <header className="w-full fixed classe-livre border-1 border-b-white/20 h-16 backdrop-blur-sm z-10">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] p-2 sm:p-0 flex flex-row justify-between items-center">
        <nav className="font-semibold w-[80%] md:w-[60%] xl:w-[25%] classe-livre">
          <ul className="flex flex-row w-full justify-around md:space-x-4">
            <li>
              <a href="/home" className="nav-item">
                {t("Nav.home")}
              </a>
            </li>

            <li>
              <Link to={"/home#projects"} className="nav-item">
                {t("Nav.projects")}
              </Link>
            </li>

            <li>
              <a href="/about" className="nav-item">
                {t("Nav.sobre")}
              </a>
            </li>

            <li>
              <a href="/home#contact" className="nav-item">
                {t("Nav.contato")}
              </a>
            </li>

          </ul>
        </nav>

      <Language />

      </div>
    </header>
  );
}

export default Navbar;
