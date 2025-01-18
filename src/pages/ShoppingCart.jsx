import ItemInShoppingCart from "../components/ItemInShoppingCart";

import { useEffect, useState } from "react";

export default function ShoppingCart() {
  const URL = "https://fakestoreapi.com/products";
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchItem(itemId) {
      try {
        const response = await fetch(`${URL}/${itemId}`);
        const json = await response.json();
        return json;
      } catch (e) {
        console.error(e, `Error fetching the items in the shopping cart ${e.message}`);
        return {};
      }
    }

    async function fetchAllItems() {
      try {
        const promises = cart.map((itemId) => fetchItem(itemId));
        const results = await Promise.all(promises);
        setItems(results);
      } catch (e) {
        console.error(e, `Error fetching all the items ${e.message}`);
      } finally {
        setLoading(false);
      }
    }

    if (cart.length > 0) {
      fetchAllItems();
    }
    
  }, [cart]);
  
  return (
    <div className="flex flex-col items-center w-full h-full">
      <h2 className="font-bold text-3xl mt-6 mb-4">Your shopping cart</h2>
      <div className="w-[60%] h-full flex flex-col items-center">
        { loading ? (
          <p>Loading...</p>
        ) : (
          items.map((item) => (
            <ItemInShoppingCart key={ item.id } id={ item.id } title={ item.title } price={ item.price } img={ item.image }/>
          ))
        ) }
      </div>
    </div>
  )
}
