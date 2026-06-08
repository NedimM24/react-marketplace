import { useState } from 'react'
import { Outlet } from 'react-router'
import Navbar from './components/Navabar'
import { products } from './data/products'

import './App.css'

function App() {
  const [cart, setCart] = useState([
    {
        id: 1,
        image: "https://picsum.photos/200/200",
        title: "placeholder",
        price: 13,
        description: "This is a placeholder description",
        quantity: 0,
    },
  ]);

  //State for the products array. No need to set, read only 
  const [productsArray] = useState(products);
  

  return (
    <>
     <Navbar />
     <Outlet context={{
      productsArray, 
      cart, 
      setCart}} />
    </>
  )
}

export default App
