import CardProfile from './components/CardProfile'
import Navbar from './components/Navbar'
import Tech from './components/Tech'

function App() {
  return (
    <>
      <Navbar/>
        <div className='min-h-screen bg-[var(--black-gray)] flex flex-col items-center justify-center'>
          <CardProfile />
        </div>

        <main className="bg-[var(--black-gray)] min-h-100 flex flex-col items-center justify-center">
          <Tech />
        </main>
    </>
  )
}

export default App