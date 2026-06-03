import { useState } from 'react'
import { Outlet } from 'react-router'
import Navbar from './componenets/Navabar'

import './App.css'

function App() {
  //State for the navbar shop count
  const [navbarCartCount, setNavbarCartCount] = useState(0);

  return (
    <>
     <Navbar navbarCartCount={navbarCartCount} />
     <Outlet />
    </>
  )
}

export default App
