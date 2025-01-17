import ItemCard from "../components/ItemCard"
import PriceFilter from "../components/PriceFilter"
import RecommendedItem from "../components/RecommendedItem"

import { useState, useEffect, useRef } from 'react'

const URL = "https://fakestoreapi.com/products"
const Sorting = {
  Desc: "desc",
  Asc: "asc"
}

export default function Home() {
  const [items, setItems] = useState([]);
  const [sorting, setSorting] = useState(Sorting.Asc);
  const [loading, setLoading] = useState(false);
  const [priceFiltered, setPriceFiltered] = useState([0, 100]);
  const [recommendedItems, setRecommendedItems] = useState([]);

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

    if (items && items.length > 0) {
      for (let i = 0; i <= 3; i++) {
        setRecommendedItems([...items[Math.floor(Math.random()*items.length)]])
      }
    }
  }, []);

  useEffect(() => {
    if (sorting === Sorting.Desc) {
      setItems([...originalListItems.current].reverse());
    } else {
      setItems(originalListItems.current);
    }
  }, [sorting]);

  useEffect(() => {
    setItems([...originalListItems.current.filter((item) => {
      if (item.price >= priceFiltered[0] && item.price <= priceFiltered[1]) {
        return item;
      }
    })]);
  }, [priceFiltered]);

  useEffect(() => {
    if (items.length > 0) {
      const uniqueRamdomIndices = new Set();
      while (uniqueRamdomIndices.size < 3 && uniqueRamdomIndices.size < items.length) {
        const randomIndex = Math.floor(Math.random() * items.length);
        uniqueRamdomIndices.add(randomIndex);
      }

      const recommendations = Array.from(uniqueRamdomIndices).map(
        (index) => items[index]
      );
      setRecommendedItems(recommendations);
    }
  }, [items])

  const handlePriceFiltered = (priceFilteredFromChild) => {
    setPriceFiltered(priceFilteredFromChild);
  }

  return (
    <>
      <div className='flex flex-col w-1/2 mx-8 mb-8'>
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold my-4">Browse items</h1>
          <div className="flex items-center">
            <p className="mx-2 font-bold">Sort:</p>
            <select 
              onChange={(e) => setSorting(e.target.value)} 
              className="px-2 py-1 bg-white rounded-xl shadow-md" 
              name="sort" 
            >
              <option value={Sorting.Asc}>Ascendente</option>
              <option value={Sorting.Desc}>Descendiente</option>
            </select>
          </div>
        </div>
        <div className="flex flex-wrap justify-between w-full h-auto">
          { loading ? (<p>loading</p>) : (items && items.map((item) => (
            <ItemCard 
              key={item.id} 
              id={item.id}
              title={item.title} 
              price={item.price} 
              img={item.image} 
              rate={item.rating.rate} 
              rateCount={item.rating.count}
            />
          )))}
        </div>
      </div>

      {/* Sidebar */}
      <div className="m-4 pb-4 h-fit w-1/5 bg-white flex flex-col rounded-2xl shadow-md">
        <PriceFilter getPriceFiltered={handlePriceFiltered}/>
        <h2 className="mx-4 mt-4 mb-2 text-lg font-bold">Recommended items</h2>
        { recommendedItems && recommendedItems.map((item) => {
          return <RecommendedItem key={item.id} itemId={item.id} title={item.title} img={item.image} price={item.price}/>
        }) }
      </div>
    </>
  )
}
