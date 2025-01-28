import { Link } from "react-router";

export default function RecommendedItem({ item }) {
  return (
    <div className="max-w-full box-border mx-4 p-4 flex rounded-2xl hover:bg-gray-100">
      <img className="w-[50px]" src={ item.image } alt="" />
      <div className="w-full overflow-hidden flex-col ml-3">
        <Link 
          to={`item/${item.id}`} 
          className="hover:underline hover:font-bold max-w-full pb-1 text-sm font-semibold overflow-ellipsis whitespace-nowrap overflow-hidden"
        >
          { item.title }
        </Link>
        <p>${ item.price }</p>
      </div>
    </div>
  )
}
