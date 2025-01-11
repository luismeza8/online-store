export default function RecommendedItem({ title, img, price }) {
  return (
    <div className="p-4 flex">
      <img className="w-[50px]" src={ img } alt="" />
      <div className="ml-3">
        <p className="pb-1 font-bold">{ title }</p>
        <p>${ price }</p>
      </div>
    </div>
  )
}
