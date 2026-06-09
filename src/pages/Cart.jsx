import { useOutletContext } from "react-router-dom";
import { CartItem } from "../components/CartItem";
import styles from "./Cart.module.css";
import { Link } from "react-router-dom";

export default function Cart() {
    const { productsArray, cart, setCart } = useOutletContext();
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

    if(!cart || cart.length === 0) {
        return(
            <div className={styles.empty}>
                <h1>Cart is Empty!</h1>
                <h1>Get to shopping!</h1>
                <button className={styles.shopBtn}><Link className={styles.links} to={'/shop'}>Shop</Link></button>
            </div>
        )
    }
 
    return (
        <>
            <div className={styles.container}> {/* Container */}

                <div className={styles.left}> {/* Left side contains cartitems */}
                    {cart.map((item) => (
                        <div key={item.id} className={styles.cartItem}>
                            <CartItem item={item} setCart={setCart} />
                        </div>
                    ))}
                </div>

                <div className={styles.right}>
                    {/* Right side will have cart total and checkout button */}
                    <p className={styles.total}>Cart total: ${total}</p>
                    <button className={styles.btn}>Checkout</button>
                </div>

            </div>
        </>
    );
}