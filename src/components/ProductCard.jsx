import { useState } from "react"
import styles from "./ProductCard.module.css"

export function ProductCard({ product, cart, setCart }) {
    const [quantity, setQuantity] = useState(0);
    
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
                                <button className={styles.quantButtons}>-</button>
                                <input
                                type="text"
                                value={quantity}
                                onChange={(e) => setQuantity(Number(e.target.value))}
                                />
                                <button onClick={() => setQuantity(prev => prev + 1)} className={styles.quantButtons}>+</button><br />
                        </div>

                        <div className={styles.btn}>
                            <button className={styles.addBtn} >Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}