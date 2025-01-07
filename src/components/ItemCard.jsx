export default function ItemCard({ title, img, price, rate, rateCount }) {
  return (
    <>
      <div className="flex flex-col max-w-[31%] bg-white rounded-xl shadow-md">
        <div className="flex flex-col justify-center min-h-[28rem]">
          <img className="px-8" src={ img } alt="" />
        </div>
        <div className="pb-2 px-4 pt-8 flex flex-col justify-between h-full">
          <div className="mb-4">
            <h2 className="font-bold">{ title }</h2>
            <p className="font-semibold">⭐ {rate} ({rateCount})</p>
          </div>
          <p>${ price }</p>
        </div>
      </div>
    </>
  )
}
