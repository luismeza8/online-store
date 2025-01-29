import ItemInShoppingCart from "../components/ItemInShoppingCart";

import { useContext } from "react";
import { CartContext } from "../contexts";

export default function ShoppingCart() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="flex flex-col items-center w-full h-full">
      <h2 className="font-bold text-3xl mt-6 mb-4">Your shopping cart</h2>
      <div className="w-[60%] h-full flex flex-col items-center">
        { cartItems.map((item, i) => ( <ItemInShoppingCart key={ i } item={ item } index={ i } /> )) }
      </div>
    </div>
  )
}
