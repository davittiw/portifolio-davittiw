import CardProfile from './components/CardProfile'
import Navbar from './components/Navbar'
import Tech from './components/Tech'
import Projetos from './components/Projetos'

function App() {
  return (
    <>
      <Navbar/>
        <div className="bg-[var(--black-gray)] min-w-full min-h-full flex flex-col items-center justify-center">

            <div className='min-h-screen bg-[var(--black-gray)] flex flex-col items-center justify-center'>
              <CardProfile/>
              <Tech/>
              <Projetos/>
            </div>

        </div>
    </>
  )
}

export default App