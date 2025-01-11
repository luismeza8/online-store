import PriceFilter from "./PriceFilter";

export default function RightSidebar() {
  return (
    <>
      <div className="m-4 h-screen w-1/5 bg-white flex flex-col">
        <PriceFilter />
      </div>
    </>
  );
}
