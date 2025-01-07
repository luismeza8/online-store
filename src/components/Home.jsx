import ItemCard from "./ItemCard"
import { useState, useEffect, useRef } from 'react'

const URL = "https://fakestoreapi.com/products"
const Sorting = {
  Desc: "desc",
  Asc: "asc"
}

export default function Home() {
  const [items, setItems] = useState([])
  const [sorting, setSorting] = useState(Sorting.Asc)
  const [loading, setLoading] = useState(false)

  const originalListItems = useRef([]);

  useEffect(() => {
    async function fetchItems() {
      try {
        setLoading(true);
        const response = await fetch(URL);
        const json = await response.json();
        originalListItems.current = json;
        setItems(json);
      } catch (e) {
        console.error(e, e.message);
      } finally {
        setLoading(false);
      }
    }
    fetchItems();
  }, [])

  useEffect(() => {
    if (sorting === Sorting.Desc) {
      setItems([...originalListItems.current].reverse());
    } else {
      setItems(originalListItems.current);
    }
  }, [sorting]);

  return (
    <div className='flex flex-col w-1/2 mx-8 mb-8'>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold my-4">Browse items</h1>
        <div className="flex items-center">
          <p className="mx-2 font-bold">Sort:</p>
          <select onChange={(e) => setSorting(e.target.value)} className="px-2 py-1 bg-white rounded-xl shadow-md" name="sort" id="">
            <option value={Sorting.Asc}>Ascendente</option>
            <option value={Sorting.Desc}>Descendiente</option>
          </select>
        </div>
      </div>
      <div className="flex flex-wrap gap-6 w-full h-auto">
        { loading ? (<p>loading</p>) : items && items.map((item) => {
          return <ItemCard 
            key={item.id} 
            title={item.title} 
            price={item.price} 
            img={item.image} 
            rate={item.rating.rate} 
            rateCount={item.rating.count} />
        }) }
      </div>
    </div>
  )
}
