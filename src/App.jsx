import Home from './pages/Home'
import ItemDetails from './pages/ItemDetails'
import ShoppingCart from './pages/ShoppingCart'

import Navbar from './components/Navbar'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ItemsProvider from "./providers/ItemsProvider";
import CartProvider from "./providers/CartProvider";

function App() {
  return (
    <>
      <BrowserRouter>
        <ItemsProvider>
          <CartProvider>
            <div className='flex flex-col bg-gray-100 w-full min-h-screen'>
              <Navbar />
              <div className="h-full flex justify-center">
                <Routes>
                  <Route path="/" element= { <Home isLoading={ false } /> } />
                  <Route path="/item/:itemId" element={ <ItemDetails /> } />
                  <Route path="/cart" element={ <ShoppingCart /> } />
                </Routes>
              </div>
          </div>
          </CartProvider>
        </ItemsProvider>
      </BrowserRouter>
    </>
  )
}

export default App
