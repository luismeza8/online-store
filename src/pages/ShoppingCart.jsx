import { useEffect, useState } from "react";

export default function ShoppingCart() {
  const URL = "https://fakestoreapi.com/products";
  const cart = JSON.parse(localStorage.getItem("cart"));

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchItem(itemId) {
      try {
        const response = await fetch(`${URL}/${itemId}`);
        const json = await JSON.parse(response);
        console.log(json)
        return(json);
      } catch (e) {
        console.error(e, "Error fetching in shopping cart" + e.message);
        return({})
      }
    }

    async function fetchAllItems() {
      for (let i = 0; i <= cart.length; i++) {
        const item = await fetchItem(cart[i]);
        console.log(item)
      }
    }

    fetchAllItems()
    
  }, []);
  
  return (
    <div className="bg-red-400 flex justify-center w-full h-full">
      <div className="w-[60%] h-full bg-blue-400">
        {cart}
      </div>
    </div>
  )
}
