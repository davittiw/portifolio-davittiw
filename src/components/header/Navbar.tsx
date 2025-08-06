import { useState } from "react";
import Language from "./Language.js";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full border-b border-white/20 h-16 backdrop-blur-sm z-[60]">

      <div className="max-w-screen-xl mx-auto w-full px-4 h-full flex justify-between items-center">

        <nav className="flex font-semibold">
          <ul className="flex flex-row gap-6 items-center text-white">
            <li>
              <a href="/" className="nav-item">
                {t("Nav.home")}
              </a>
            </li>
            <li>
              <Link to="/#projects" className="nav-item">
                {t("Nav.projects")}
              </Link>
            </li>
            <li>
              <a href="/about" className="nav-item">
                {t("Nav.sobre")}
              </a>
            </li>
            <li>
              <a href="/#contact" className="nav-item">
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
