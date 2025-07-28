import Language from './Language.jsx';
import { useTranslation } from 'react-i18next'; // Importando o hook de tradução

function Navbar() {
    const { t } = useTranslation(); // Hook para tradução

    return (
      // Barra de navegação
      <div className="flex justify-center">
        <header className="fixed flex items-center justify-center w-full backdrop-blur-sm sm:w-90 md:w-100 lg:w-120 h-16 z-10">
          <nav className="flex h-full w-full p-10 md:p-2 justify-between items-center font-semibold">
            {/* Div centralizada com os links de navegação */}
            <div>
              <ul className="flex flex-row space-x-4">
                <li>
                  <a className="nav-item" href="/">
                    {t("Nav.home")}
                  </a>
                </li>

                <li>
                  <a className="nav-item" href="/#projetos">
                    {t("Nav.projects")}
                  </a>
                </li>

                <li>
                  <a className="nav-item" href="/#contato">
                    {t("Nav.contato")}
                  </a>
                </li>
              </ul>
            </div>

            <Language />
          </nav>
        </header>
      </div>
    );
}

export default Navbar;