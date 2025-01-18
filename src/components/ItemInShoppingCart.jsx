export default function ItemInShoppingCart({ title, price, img }) {
  return (
    <div className="w-4/5 flex bg-white m-4 p-4 rounded-xl shadow-md">
      <div className="w-full flex">
        <div className="bg-white p-2">
          <img className="w-16 aspect-square" src={ img } alt="" />
        </div>
        <div className="ml-8">
          <h2 className="font-semibold">{ title }</h2>
          <p>${ price }</p>
        </div>
      </div>
      <div className="w-fit h-fit">
        <p>x</p>
      </div>
    </div>
  )
}
