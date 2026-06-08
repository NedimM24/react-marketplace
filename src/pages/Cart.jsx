import { useOutletContext } from "react-router-dom";
import { CartItem } from "../components/CartItem";
import styles from "./Cart.module.css"

export default function Cart(){
    const { productsArray, cart, setCart } = useOutletContext();
    const total = cart.reduce((sum, item) => sum + item.price,0)

    return(
        <>
            <div className={styles.container}> {/**Container */}

                <div className={styles.left}> {/**Left side contains cartitems*/}
                    {cart.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))}
                </div>

                <div className={styles.left}>
                    {/**Right side will have cart total and a non-functional checkout button */}
                    <h4>Cart total: ${total} </h4>
                    <button className={styles.btn}>Complete Purchase</button>
                </div>
                

            </div>
            
        </>
    )
}