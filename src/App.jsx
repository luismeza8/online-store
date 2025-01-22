import Home from './pages/Home'
import ItemDetails from './pages/ItemDetails'
import ShoppingCart from './pages/ShoppingCart'

import Navbar from './components/Navbar'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { ItemsContext } from "./ItemsContext"

function App() {
  const URL = "https://fakestoreapi.com/products"

  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch(URL);
        const json = await response.json();
        setItems(json);
      } catch (e) {
        console.error(e, e.message);
      } finally {
        console.log('ok')
      }
    }
    fetchItems();
  }, []);

  return (
    <>
      <ItemsContext.Provider value={items}>
        <BrowserRouter>
          <div className='flex flex-col bg-gray-100 w-full min-h-screen'>
            <Navbar />
            <div className="h-full flex justify-center">
              <Routes>
                <Route path="/" element= { <Home /> } />
                <Route path="/item/:itemId" element={ <ItemDetails /> } />
                <Route path="/cart" element={ <ShoppingCart /> } />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </ItemsContext.Provider>
    </>
  )
}

export default App
