import Language from "./Language.jsx";
import { useTranslation } from "react-i18next"; // Importando o hook de tradução

import { Link } from "react-router";

function Navbar() {
  const { t } = useTranslation(); // Hook para tradução

  return (
    <header className="fixed flex items-center border-1 border-b-white/20 justify-center w-full h-16 backdrop-blur-sm z-10">
      <div className="w-[90%] md:w-[80%] flex flex-row justify-between">

        <Link to="/">
          <h1 className="nav-item font-semibold text-xl">Davittiw</h1>
        </Link>

        <nav className="flex w-1/5 items-center justify-between font-semibold">
          <ul className="flex items-center justify-center flex-row space-x-4">
            <li>
              <Link to="" className="nav-item">
                {t("Nav.home")}
              </Link>
            </li>
            <li>
              <Link to="" className="nav-item">
                {t("Nav.projects")}
              </Link>
            </li>
            <li>
              <Link to="" className="nav-item">
                {t("Nav.contato")}
              </Link>
            </li>
          </ul>
        </nav>

        <Language />

      </div>
    </header>
  );
}

export default Navbar;
