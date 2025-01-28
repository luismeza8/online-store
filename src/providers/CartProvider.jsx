import { useState } from "react"
import { CartContext } from "../contexts";

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (itemIndex) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemIndex));
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      { children }
    </CartContext.Provider>
  )
}
