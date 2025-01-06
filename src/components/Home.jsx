export default function Home({ children }) {
  return (
    <>
      <div className='flex flex-col w-1/2 mx-8 mb-8'>
        <h1 className="text-3xl font-bold my-4">Browse items</h1>
        <div className="flex flex-wrap justify-between w-full h-auto">
          { children }
        </div>
      </div>
    </>
  )
}
