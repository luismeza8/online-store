import Navbar from './components/Navbar'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetails from './pages/ItemDetails'

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='flex flex-col bg-gray-100 w-full min-h-screen'>
          <Navbar />
          <div className="h-full flex justify-center">
              <Routes>
                <Route path="/" element= { <Home /> } />
                <Route path="/item/:itemId" element={ <ItemDetails /> }></Route>
              </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
