import AddToShoppingCartButton from "./AddToShoppingCartButton"
import { Link } from "react-router";

export default function ItemCard({ item }) {
  return (
    <>
      <div className="flex flex-col max-w-[32%] mb-6 bg-white rounded-xl shadow-md">
        <div className="flex flex-col justify-center min-h-[28rem]">
          <img className="px-8" src={ item.image } alt="" />
        </div>
        <div className="pb-2 px-4 pt-8 flex flex-col justify-between h-full">
          <div className="mb-4">
            <Link to={`item/${ item.id }`} className="font-bold hover:underline hover:font-bold hover:cursor-pointer">{ item.title }</Link>
            <p className="font-semibold">⭐ { item.rating.rate } ({ item.rating.count })</p>
          </div>
          <div className="flex justify-between items-end">
            <p className="text-lg italic font-semibold">${ item.price }</p>
            <AddToShoppingCartButton item={ item } showTitle={false} />
          </div>
        </div>
      </div>
    </>
  )
}
