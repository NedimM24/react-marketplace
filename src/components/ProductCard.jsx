import { useState } from "react"
import styles from "./ProductCard.module.css"

export function ProductCard({ product, cart, setCart }) {
    const [quantity, setQuantity] = useState(0);

    //Function that created a new object to add to the cart array
    //Updated quantity
    const handleAdd = () => {
        if (quantity <= 0) return;

        const cartItem = { ...product, quantity };

        const existingItem = cart.find(item => item.id === product.id);

        //Preventing the same item from popping up twice in the cart
        if (existingItem) {
            //Updating quantity of existing object
            setCart(prev =>
            prev.map(item =>
                item.id === product.id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            )
            );
        } else {
            //Add new object to the cart array
            setCart(prev => [...prev, cartItem]);
        }

        setQuantity(0);
        };

    return (
        <>
            <div className={styles.container}> {/* container */}
                <div> {/* top */}
                    <img src={product.image} alt="" />
                </div>

                <div> {/* bottom */}
                    <div className={styles.titlePrice}>
                        
                        <p className={styles.title}>{product.title}</p>
                        <p>${product.price}</p>
                    </div>

                    <div className={styles.changeQuant}> {/* product state */}
                       <div className={styles.userBtn}>
                                <button
                                    onClick={() => {
                                        if (quantity > 0) {
                                        setQuantity(prev => prev - 1);
                                        }
                                    }}
                                    className={styles.quantButtons}
                                    >
                                    -
                                    </button>
                                <input
                                type="text"
                                value={quantity}
                                onChange={(e) => setQuantity(Number(e.target.value))}
                                />
                                <button onClick={() => setQuantity(prev => prev + 1)} className={styles.quantButtons}>+</button><br />
                        </div>

                        <div className={styles.btn}>
                            <button onClick={handleAdd} className={styles.addBtn} >Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}