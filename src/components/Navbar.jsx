import { useContext } from "react";
import { Link } from "react-router";
import { CartContext } from "../contexts";

export default function Navbar() {
  const { cartItems } = useContext(CartContext);

  const getShoppingCartLenght = () => {
    return cartItems.length;
  }

  return (
    <>
      <div className="bg-white w-full h-[8vh] flex justify-center">
        <div className='w-[70%] h-full flex justify-between items-center'>
          <div className="flex w-1/2 gap-12">
            <Link to="/">SHOP</Link>
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
          </div>
          <div className="flex w-2/6 justify-end items-center gap-12">
            <Link>instagram</Link>
            <Link>tiktok</Link>
            <Link 
              className="flex hover:bg-gray-100 p-1 rounded-full"
              to="/cart"
            >
              <img className="" src="/public/shopping_cart_black.svg" alt="" />
              <p className="text-sm">{ getShoppingCartLenght() }</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
