export default function Home({ children }) {
  return (
    <>
      <div className='flex flex-col w-full mx-8 mb-8'>
        <h1 className="text-3xl font-bold my-4">Browse items</h1>
        <div className="flex flex-wrap justify-between gap-2 w-full h-auto">
          { children }
        </div>
      </div>
    </>
  )
}
