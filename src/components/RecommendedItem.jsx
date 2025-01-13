export default function RecommendedItem({ title, img, price }) {
  return (
    <div className="max-w-full box-border mx-4 p-4 flex rounded-2xl hover:bg-gray-100">
      <img className="w-[50px]" src={ img } alt="" />
      <div className="w-full overflow-hidden flex-col ml-3">
        <p className="max-w-full pb-1 text-sm font-semibold overflow-ellipsis whitespace-nowrap overflow-hidden">{ title }</p>
        <p>${ price }</p>
      </div>
    </div>
  )
}
