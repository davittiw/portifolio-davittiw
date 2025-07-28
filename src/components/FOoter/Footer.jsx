import '../../../i18nify'
import { useTranslation } from 'react-i18next' // Importando o hook de tradução

export default function Footer() {
    const { t } = useTranslation(); // Hook para tradução
    return (
      <footer className="bg-[var(--black-gray)] w-full text-center py-4 text-gray-500">
        <p>{t("Footer.text")}
            <a href="https://linkedin.com/in/davttiw/" 
                target="_blank" 
                className="text-[var(--white)]">@davittiw
            </a>
             &copy; 2025
        </p>
      </footer>
    )
}