import { useContext } from "react"
import { CartContext } from "../contexts"

export default function AddToShoppingCartButton({ item, showTitle=true }) {
  const { addToCart } = useContext(CartContext);

  const handleClick = () => {
    addToCart(item);
  }

  return (
    <>
      <button onClick={handleClick} className="flex gap-2 items-center bg-blue-700 text-white py-2 px-4 rounded-3xl text-sm shadow-md">
        <img className="w-5" src="/public/shopping_cart_white.svg" alt="" />
        {showTitle ? <p>Add to cart</p> : ""}
      </button>
    </>
  )
}
