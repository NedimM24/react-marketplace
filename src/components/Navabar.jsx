
import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"
import logo from "../assets/logo.svg"

export default function Navbar({totalQuantity}){
    return(
        <>
            <div className={styles.container}>
            <nav className={styles.nav} >
                <img className={styles.logo} src={logo} alt="company logo" />
                <div className={styles.allLinks}>
                     <Link className={styles.links} to={'/'}>Home</Link>
                    <Link className={styles.links} to={'/shop'}>Shop</Link>
                    <Link className={styles.links} to={'/cart'}>🛒
                        {totalQuantity > 0 ? <div className={styles.count}>{totalQuantity}</div> :null }
                    </Link>
                </div>
               
            </nav>
        </div>
        
        </>
    )
}