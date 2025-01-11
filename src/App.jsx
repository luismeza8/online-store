import Navbar from './components/Navbar'
import RightSidebar from './components/RightSidebar'
import Home from './components/Home'

function App() {
  return (
    <>
      <div className='flex flex-col bg-gray-100 w-full h-auto'>
        <Navbar />
        <div className="h-full flex justify-center">
          <Home />
        </div>
      </div>
    </>
  )
}

export default App
