import { useParams } from "react-router"

export default function ItemDetails() {
  const { itemId } = useParams();

  return (
    <>
      { itemId }
    </>
  )
}
