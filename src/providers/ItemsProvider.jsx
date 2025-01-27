import { useEffect, useState } from "react";
import { ItemsContext } from "../contexts";

export default function ItemsProvider({ children }) {
  const URL = "https://fakestoreapi.com/products"

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchItems() {
      try {
        setLoading(true);
        const response = await fetch(URL);
        const json = await response.json();
        setItems(json);
      } catch (e) {
        console.error(e, e.message);
      } finally {
        setLoading(false);
      }
    }
    fetchItems();
  }, []);

  return (
    <ItemsContext.Provider value={ items }>
      { children }
    </ItemsContext.Provider>
  )
}
