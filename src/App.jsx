import Navbar from './components/Navbar'
import RightSidebar from './components/RightSidebar'
import Home from './components/Home'
import ItemCard from "./components/ItemCard"

function App() {
  return (
    <>
      <div className='flex flex-col bg-gray-100 w-full h-auto'>
        <Navbar />
        <div className="h-full flex justify-center">
          <Home>
            <ItemCard title='Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops' price='$300' img='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'></ItemCard>
            <ItemCard title='item #1' price='$300' img='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'></ItemCard>
            <ItemCard title='item #1' price='$300' img='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'></ItemCard>
            <ItemCard title='item #1' price='$300' img='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'></ItemCard>
            <ItemCard title='item #1' price='$300' img='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'></ItemCard>
            <ItemCard title='item #1' price='$300' img='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'></ItemCard>
            <ItemCard title='item #1' price='$300' img='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'></ItemCard>
            <ItemCard title='item #1' price='$300' img='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'></ItemCard>
            <ItemCard title='item #1' price='$300' img='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'></ItemCard>
            <ItemCard title='item #1' price='$300' img='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'></ItemCard>
            <ItemCard title='item #1' price='$300' img='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'></ItemCard>
            <ItemCard title='item #1' price='$300' img='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'></ItemCard>
            <ItemCard title='item #1' price='$300' img='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'></ItemCard>
            <ItemCard title='item #1' price='$300' img='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'></ItemCard>
            <ItemCard title='item #1' price='$300' img='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'></ItemCard>
            <ItemCard title='item #1' price='$300' img='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'></ItemCard>
            <ItemCard title='item #1' price='$300' img='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'></ItemCard>
            <ItemCard title='item #1' price='$300' img='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'></ItemCard>
            <ItemCard title='item #1' price='$300' img='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'></ItemCard>
            <ItemCard title='item #1' price='$300' img='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'></ItemCard>
            <ItemCard title='item #1' price='$300' img='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'></ItemCard>
            <ItemCard title='item #1' price='$300' img='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'></ItemCard>
            <ItemCard title='item #1' price='$300' img='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'></ItemCard>
          </Home>
          <RightSidebar />
        </div>
      </div>
    </>
  )
}

export default App
