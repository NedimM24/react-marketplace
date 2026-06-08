import { useState } from 'react'
import { Outlet } from 'react-router'
import Navbar from './components/Navabar'
import { products } from './data/products'

import './App.css'

function App() {
  const [cart, setCart] = useState([]);
  //Get total quantity
  const totalQuantity = (cart.reduce((sum, item) => sum + item.quantity,0))

  //State for the products array. No need to set, read only 
  const [productsArray] = useState(products);

  return (
    <>
     <Navbar totalQuantity={totalQuantity}/>
     <Outlet context={{
      productsArray, 
      cart, 
      setCart, 
      }} />
    </>
  )
}

export default App
