import { Link } from "react-router";

export default function ItemInShoppingCart({ id, title, price, img }) {
  return (
    <div className="w-4/5 flex bg-white m-4 p-4 rounded-xl shadow-md">
      <div className="w-full flex">
        <div className="bg-white p-2">
          <img className="w-16 aspect-square" src={ img } alt="" />
        </div>
        <div className="ml-8">
          <Link to={`/item/${id}`}>
            <h2 className="hover:underline font-semibold">{ title }</h2>
          </Link>
          <p>${ price }</p>
        </div>
      </div>
      <div className="w-fit h-fit hover:bg-gray-200 p-1 rounded-full cursor-pointer">
        <img src="/public/delete_black.svg" alt="delete from shopping cart." />
      </div>
    </div>
  )
}
