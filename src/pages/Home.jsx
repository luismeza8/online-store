import ItemCard from "../components/ItemCard"
import PriceFilter from "../components/PriceFilter"
import RecommendedItem from "../components/RecommendedItem"

import { useState, useEffect, useContext } from 'react'

import { ItemsContext } from "../contexts"

const Sorting = {
  Desc: "desc",
  Asc: "asc"
}

export default function Home({ isLoading }) {
  const [displayedItems, setDisplayedItems] = useState([]);
  const [sorting, setSorting] = useState(Sorting.Asc);
  const [priceFiltered, setPriceFiltered] = useState([0, 1000]);
  const [recommendedItems, setRecommendedItems] = useState([]);

  const contextItems = useContext(ItemsContext);

  if (displayedItems.length === 0 && contextItems.length > 0) {
    setDisplayedItems(contextItems);
  }

  useEffect(() => {
      setDisplayedItems((prev) => [...prev].reverse());
  }, [sorting]);

  useEffect(() => {
    const filteredList = [...contextItems.filter((item) => {
      if (item.price >= priceFiltered[0] && item.price <= priceFiltered[1]) {
        return item;
      }
    })];
    
    if (sorting === Sorting.Desc) {
      setDisplayedItems(filteredList.reverse());
    } else {
      setDisplayedItems(filteredList);
    }
  }, [priceFiltered]);

  useEffect(() => {
    if (contextItems.length > 0) {
      const uniqueRamdomIndices = new Set();
      while (uniqueRamdomIndices.size < 3 && uniqueRamdomIndices.size < contextItems.length) {
        const randomIndex = Math.floor(Math.random() * contextItems.length);
        uniqueRamdomIndices.add(randomIndex);
      }

      const recommendations = Array.from(uniqueRamdomIndices).map(
        (index) => contextItems[index]
      );
      setRecommendedItems(recommendations);
    }
  }, [contextItems])

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
        <div className="grid grid-cols-3 gap-5">
          { isLoading ? (<p>loading</p>) : (displayedItems.map((item) => (
            <ItemCard key={item.id} item={ item } />
          )))}
        </div>
      </div>

      {/* Sidebar */}
      <div className="m-4 pb-4 h-fit w-1/5 bg-white flex flex-col rounded-2xl shadow-md">
        <PriceFilter getPriceFiltered={handlePriceFiltered}/>
        <h2 className="mx-4 mt-4 mb-2 text-lg font-bold">Recommended items</h2>
        { recommendedItems && recommendedItems.map((item) => {
          return <RecommendedItem key={ item.id } item={ item } />
        }) }
      </div>
    </>
  )
}
