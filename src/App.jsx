import Navbar from './components/Navbar'
import RightSidebar from './components/RightSidebar'
import Home from './components/Home'
import ItemCard from "./components/ItemCard"
import { useState } from 'react'
import { useEffect } from 'react'

const URL = "https://fakestoreapi.com/products"

function App() {
  const [items, setItems] = useState([])

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch(URL)
        const json = await response.json()
        setItems(json)
      } catch (e) {
        console.error(e, e.message)
      }
    }
      fetchItems();
  }, [])

  return (
    <>
      <div className='flex flex-col bg-gray-100 w-full h-auto'>
        <Navbar />
        <div className="h-full flex justify-center">
          <Home>
            { items && items.map((item) => {
              return <ItemCard key={item.id} title={item.title} price={item.price} img={item.image} />
            }) }
          </Home>
          <RightSidebar />
        </div>
      </div>
    </>
  )
}

export default App
