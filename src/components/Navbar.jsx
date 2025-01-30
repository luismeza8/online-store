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
      <div className="bg-white w-full h-[8vh] flex justify-center shadow-sm">
        <div className='w-[70%] h-full flex justify-between items-center'>
          <div className="flex items-center w-1/2 gap-12">
            <Link className="text-blue-700 text-2xl font-extrabold" to="/">ONLINE SHOP</Link>
            <Link className="hover:underline" to="/">Home</Link>
            <Link className="hover:underline" to="/about">About</Link>
          </div>
          <div className="flex w-2/6 justify-end items-center gap-12">
            <a className="hover:underline flex items-center gap-1" target="_blank" href="https://x.com/luis_mz8">
              <img className="w-[25px]" src="/public/twitter_icon.svg" alt="" />
              <p>Twitter</p>
            </a>
            <a className="hover:underline flex items-center gap-1" target="_blank" href="https://github.com/luismeza8/online-store">
              <img src="/public/github_icon.svg" alt="" />
              <p>Github</p>
            </a>
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
