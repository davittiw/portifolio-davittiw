import { useTranslation } from 'react-i18next'; // Importando o hook de tradução

export default function Language () {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    }

    return(
        <div className='ml-auto flex items-center gap-6'>
            <button className={`mr-2 px-4 py-2 rounded-md text-white transition-colors ${
                i18n.language === 'pt' ? 'bg-blue-700' : 'bg-blue-500 hover:bg-blue-700'
                }`} onClick={() => changeLanguage('pt')}>PT</button>

            <button className={`px-4 py-2 rounded-md text-white transition-colors ${
                i18n.language === 'en' ? 'bg-green-700' : 'bg-green-500 hover:bg-green-700'
              }`} onClick={() => changeLanguage('en')}>EN</button>
</div>
)}