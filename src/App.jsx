import Navbar from './components/Navbar'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetails from './components/ItemDetails'

function App() {
  return (
    <>
      <div className='flex flex-col bg-gray-100 w-full min-h-screen'>
        <Navbar />
        <div className="h-full flex justify-center">
          <BrowserRouter>
            <Routes>
              <Route path="/" element= { <Home /> } />
              <Route path="/item/:itemId" element={ <ItemDetails /> }></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  )
}

export default App
