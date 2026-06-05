import { useState } from "react"
import styles from "./ProductCard.module.css"
export function ProductCard({product}){
    const [productCount, setProductCount] = useState(0)
    return(
        <>
            <div className={styles.container}> {/* container */}
                <div> {/* top */}
                    <img src={product.image} alt="" />
                </div>

                <div> {/* bottom */}
                    <p>{product.title}</p>
                    <p>${product.price}</p>

                <div> {/* product state */}
                    <button>-</button><input type="text" 
                        value={productCount}
                    />
                    <button>+</button><br />
                </div>

                    <button>Add To cart</button>
                </div>

            </div>
        </>
    )
}