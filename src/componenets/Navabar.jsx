//Basic navebar not styled yet. Currently only here for navigation
import { Link } from "react-router-dom"

export default function Navbar({navbarCartCount}){
    return(
        <>
        <nav>
            <Link to={'/'}>🏠 Home</Link>
            <Link to={'/shop'}>$ Shop</Link>
            <Link to={'/cart'}>🛒 Cart {navbarCartCount > 0 ? navbarCartCount : ""}</Link>
        </nav>
        </>
    )
}