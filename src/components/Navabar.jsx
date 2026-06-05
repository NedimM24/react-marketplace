//Basic navebar not styled yet. Currently only here for navigation
import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"
import logo from "../assets/logo.svg"


export default function Navbar(){
    return(
        <>
            <div className={styles.container}>
            <nav className={styles.nav} >
                <img className={styles.logo} src={logo} alt="" />
                <div className={styles.allLinks}>
                     <Link className={styles.links} to={'/'}>Home</Link>
                    <Link className={styles.links} to={'/shop'}>Shop</Link>
                    <Link className={styles.links} to={'/cart'}>🛒  </Link>
                </div>
               
            </nav>
        </div>
        
        </>
    )
}