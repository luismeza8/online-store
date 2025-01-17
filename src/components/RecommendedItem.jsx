import { Link } from "react-router";

export default function RecommendedItem({ itemId, title, img, price }) {
  return (
    <div className="max-w-full box-border mx-4 p-4 flex rounded-2xl hover:bg-gray-100">
      <img className="w-[50px]" src={ img } alt="" />
      <div className="w-full overflow-hidden flex-col ml-3">
        <Link 
          to={`item/${itemId}`} 
          className="hover:underline hover:font-bold max-w-full pb-1 text-sm font-semibold overflow-ellipsis whitespace-nowrap overflow-hidden"
        >
          { title }
        </Link>
        <p>${ price }</p>
      </div>
    </div>
  )
}
