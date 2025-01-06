export default function ItemCard({ title, img, price }) {
  return (
    <>
      <div className="flex flex-col max-w-[20%] bg-white rounded-xl">
        <img className="w-max-full px-4" src={ img } alt="" />
        <div className="pb-2 px-4 pt-8 flex flex-col justify-between h-full">
          <h2 className="font-bold">{ title }</h2>
          <p>{ price }</p>
        </div>
      </div>
    </>
  )
}
