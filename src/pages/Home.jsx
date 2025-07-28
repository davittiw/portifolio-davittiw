import CardProfile from '../components/home/CardProfile.jsx'
import Projetos from '../components/projetos/Projetos.jsx'
import Contact from '../components/contato/Contact.jsx'

import Navbar from '../components/Navbar.jsx'
import Footer from '../components/FOoter/Footer.jsx'

export default function Home() {
    return(
      <>
        <Navbar/>
        
        {/* Principal Content */}
        <main id='main' className="flex items-center justify-center">
          <div className="w-110 sm:w-1/2 md:w-1/3 lg:w-1/4 min-h-screen flex flex-col items-center justify-center">
            <CardProfile/>
            <Projetos/>
            <Contact/>
          </div>
        </main>

        <Footer/>
      </>
    )
}