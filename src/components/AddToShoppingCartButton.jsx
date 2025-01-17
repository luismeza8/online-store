export default function AddToShoppingCartButton({ itemId, showTitle=true }) {
  const handleClick = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (cart === null) {
      localStorage.setItem("cart", JSON.stringify([]));
      cart = JSON.parse(localStorage.getItem("cart"));
    }

    localStorage.setItem("cart", JSON.stringify([...cart, itemId]))
  }

  return (
    <>
      <button onClick={handleClick} className="flex gap-2 items-center bg-blue-700 text-white py-2 px-4 rounded-3xl text-sm shadow-md">
        <img className="w-5" src="/public/shopping_cart_white.svg" alt="" />
        {showTitle ? <p>Add to cart</p> : ""}
      </button>
    </>
  )
}
