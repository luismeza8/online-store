import Navbar from './components/Navbar'
import Home from './components/Home'

function App() {
  return (
    <>
      <div className='flex flex-col bg-gray-100 w-full min-h-screen'>
        <Navbar />
        <div className="h-full flex justify-center">
          <Home />
        </div>
      </div>
    </>
  )
}

export default App
