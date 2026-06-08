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

  //Function that increases the quantity by 1 if the + button is clicked
  const handleIncrease = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);

      if(exists) {
        return prev.map((item)=>
          item.id === product.id
          ?{...item, quantity: item.quantity + 1 } : item)
      } else {
        return [...prev, {...product, quantity: 1}]
      }
    })
  }
  

  return (
    <>
     <Navbar totalQuantity={totalQuantity}/>
     <Outlet context={{
      productsArray, 
      cart, 
      setCart, handleIncrease}} />
    </>
  )
}

export default App
