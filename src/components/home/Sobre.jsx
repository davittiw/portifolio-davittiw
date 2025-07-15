import { useTranslation } from 'react-i18next';

function Sobre() {
    const { t } = useTranslation();

    return(
    <div className="w-80 sm:w-90 md:w-120 lg:w-120 h-50 mt-5 rounded-xl border border-gray-700 shadow-3xl">
        <div className="flex flex-col items-left justify-center p-3 md:p-4 lg:p-4">
            <h2 className="text-white text-lg font-bold">{t('About.title')}</h2>
            <p className="text-gray-300 text-sm mt-2">
                {t('About.description')}
            </p>    
        </div>
    </div>
    );
}

export default Sobre;