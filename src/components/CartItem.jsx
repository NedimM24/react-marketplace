import styles from "./CartItem.module.css";

export function CartItem({ item, setCart }) {

    const increase = () => {
        setCart(prev =>
            prev.map(cartItem =>
                cartItem.id === item.id
                    ?{...cartItem, quantity: cartItem.quantity + 1}
                    :cartItem
            ))
        }


    const decrease = () => {
        setCart(prev =>
            prev.map(cartItem =>
                cartItem.id === item.id
                    ?{...cartItem, quantity: cartItem.quantity - 1}
                    :cartItem
            )
            .filter(cartItem => cartItem.quantity > 0)
        )
    }
  return (
    <div className={styles.container}>
      <img src={item.image} alt="placeholder image" className={styles.image} />

      <div className={styles.rightSide}>
        <div className={styles.text}>
          <p>{item.title}</p>
          <p>${item.price}</p>
        </div>

        <div className={styles.changeQuant}>
          <button onClick={decrease} className={styles.quantButtons}>-</button>
          <input type="text" 
          value={item.quantity}
           />
          <button onClick={increase} className={styles.quantButtons}>+</button>
        </div>
      </div>
    </div>
  );
}