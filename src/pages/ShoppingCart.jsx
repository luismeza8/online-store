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
    <div className="bg-red-400 flex justify-center w-full h-full">
      <div className="w-[60%] h-full bg-blue-400">
        { loading ? (
          <p>Loading...</p>
        ) : (
          items.map((item) => (
            <h2>{ item.title }</h2>
          ))
        ) }
      </div>
    </div>
  )
}
