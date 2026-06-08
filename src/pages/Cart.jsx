import { useOutletContext } from "react-router-dom";
import { CartItem } from "../components/CartItem";
import styles from "./Cart.module.css";

export default function Cart() {
    const { productsArray, cart, setCart } = useOutletContext();
    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <>
            <div className={styles.container}> {/* Container */}

                <div className={styles.left}> {/* Left side contains cartitems */}
                    {cart.map((item) => (
                        <div key={item.id} className={styles.cartItem}>
                            <CartItem item={item} />
                        </div>
                    ))}
                </div>

                <div className={styles.right}>
                    {/* Right side will have cart total and checkout button */}
                    <p>Cart total: ${total}</p>
                    <button className={styles.btn}>Checkout</button>
                </div>

            </div>
        </>
    );
}