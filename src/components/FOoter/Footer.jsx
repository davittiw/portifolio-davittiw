import "../../../i18nify";
import { useTranslation } from "react-i18next"; // Importando o hook de tradução

export default function Footer() {
  const { t } = useTranslation(); // Hook para tradução

  return (
    <footer className="w-full h-15 text-center py-4 flex flex-row items-center justify-around border-1 border-t-white/20 text-gray-500">
      <p>
        {t("Footer.text")}
        <a
          href="https://linkedin.com/in/davttiw/"
          target="_blank"
          className="nav-item"
        >
          @davittiw
        </a>
      </p>
      
      <p className="hidden sm:block">&copy; 2025 | All rights reserved.</p>
    </footer>
  );
}
