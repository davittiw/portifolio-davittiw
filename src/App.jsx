import CardProfile from './components/home/CardProfile'
import Navbar from './components/Navbar'
import Projetos from './components/projetos/Projetos'
import Contact from './components/contato/Contact.jsx'

import '../i18nify'
import { useTranslation } from 'react-i18next' // Importando o hook de tradução

function App() {
  const { t } = useTranslation(); // Hook para tradução

  return (
    <>
      <div className="w-full flex items-center justify-center bg-[var(--black-gray)] min-h-screen overflow-x-hidden">
        <Navbar/>
        <main id='main' className="bg-[var(--black-gray)] w-full sm:w-1/2 md:w-1/3 lg:w-1/4 min-h-screen flex flex-col items-center justify-center">
                <CardProfile/>
                <Projetos/>
                <Contact/>
        </main>
      </div>

      <footer className="bg-[var(--black-gray)] w-full text-center py-4 text-gray-500">
        <p>{t("Footer.text")}<a href="https://linkedin.com/in/davttiw/" target="_blank" className="text-[var(--white)]">@davittiw</a> &copy; 2025</p>
      </footer>
    </>
  )
}

export default App