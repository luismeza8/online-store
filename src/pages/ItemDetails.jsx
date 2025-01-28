import { useContext } from "react";
import { useParams } from "react-router"

import AddToShoppingCartButton from "../components/AddToShoppingCartButton"
import { ItemsContext } from "../contexts";

export default function ItemDetails() {
  const { itemId } = useParams();
  const items = useContext(ItemsContext);
  const item = items.find(i => i.id === parseInt(itemId));

  return (
    <>
      { item && 
        <div className="w-full flex gap-12 justify-center m-12">
          <div className="p-4 shadow-xl bg-white aspect-square flex justify-center max-w-[30%] rounded-xl">
            <img className="" src={item.image} alt={item.title} />
          </div>
          <div className="max-w-[40%] mt-4">
            <div className="mb-6">
              <h2 className="mb-1 text-4xl font-bold">{ item.title }</h2>
            <p className="font-semibold">⭐ { item.rating.rate } ({ item.rating.count })</p>
            </div>
            <p className="text-gray-700 mb-1">{ item.description }</p>
            <p className="text-gray-600 mb-6">Category: { item.category }</p>
            <h3 className="text-2xl mb-4 font-semibold italic">${ item.price }</h3>
            <AddToShoppingCartButton itemId={item.id} />
          </div>
        </div> }
    </>
  );
}
