import { useEffect, useState } from "react";
import { useParams } from "react-router"

export default function ItemDetails() {
  const URL = "https://fakestoreapi.com/products";
  const { itemId } = useParams();

  const [item, setItem] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchItem() {
      try {
        setLoading(true);
        const response = await fetch(`${URL}/${itemId}`);
        const json = await response.json();
        console.log(json)
        setItem(json);
      } catch (e) {
        console.error(e, e.message);
      } finally {
        setLoading(false);
      }
    }

    fetchItem();
  }, []);

  return (
    <>
      { 
        loading ? <p>Loading...</p> : ( item && 
          <div className="w-full flex gap-12 justify-center m-12">
            <div className="p-4 shadow-xl bg-white aspect-square flex justify-center max-w-[30%] rounded-xl">
              <img className="" src={item.image} alt={item.title} />
            </div>
            <div className="max-w-[40%] mt-4">
              <div className="mb-6">
                <h2 className="mb-1 text-4xl font-bold">{ item.title }</h2>
                <p>⭐ { item.rating.rate } ({item.rating.count})</p>
              </div>
              <p className="text-gray-700 mb-1">{ item.description }</p>
              <p className="text-gray-600 mb-6">Category: { item.category }</p>
              <h3 className="text-2xl font-semibold italic">${ item.price }</h3>
            </div>
          </div>
          )
      }
    </>
  );
}
