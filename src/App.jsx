import { useEffect, useState } from 'react'
import { Outlet } from 'react-router'
import Navbar from './components/Navabar'
import { products } from './data/products'

import './App.css'

function App() {
  const [cart, setCart] = useState([]);
  //Get total quantity
  const totalQuantity = (cart.reduce((sum, item) => sum + item.quantity,0))

  //State for the products array. No need to set, read only (SWAP NEXT)
  //const [productsArray] = useState(products);

  //new array that will be fetched, ill clear the products array and link it here
  const [productsArray, setProductsArray] = useState([]);

  //useEffect to fetch from api and display info on mount
  useEffect(() => {
    const fetchProducts = async () => {
      try{
        const response = await fetch('https://fakestoreapi.com/products/');
        const data = await response.json();
        setProductsArray(data.slice(0, 12))
      } catch (error) {
        console.log(error);
        
      }
    }
    fetchProducts()
  }, [])
    
    console.log(productsArray);
    

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
