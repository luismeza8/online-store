import { Link } from "react-router";

export default function ItemCard({ id, title, img, price, rate, rateCount }) {
  return (
    <>
      <div className="flex flex-col max-w-[32%] mb-6 bg-white rounded-xl shadow-md">
        <div className="flex flex-col justify-center min-h-[28rem]">
          <img className="px-8" src={ img } alt="" />
        </div>
        <div className="pb-2 px-4 pt-8 flex flex-col justify-between h-full">
          <div className="mb-4">
            <Link to={`item/${id}`} className="font-bold hover:underline hover:font-bold hover:cursor-pointer">{ title }</Link>
            <p className="font-semibold">⭐ {rate} ({rateCount})</p>
          </div>
          <div className="flex justify-between items-end">
            <p className="text-lg italic font-semibold">${ price }</p>
            <button className="bg-blue-700 text-white py-2 px-4 rounded-3xl text-sm shadow-md">
              <img className="w-5" src="/public/shopping_cart_white.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
