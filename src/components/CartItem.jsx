import styles from "./CartItem.module.css";

export function CartItem({ item }) {
  return (
    <div className={styles.container}>
      <img src={item.image} alt="placeholder image" className={styles.image} />

      <div className={styles.rightSide}>
        <div className={styles.text}>
          <p>{item.title}</p>
          <p>${item.price}</p>
        </div>

        <div className={styles.changeQuant}>
          <button className={styles.quantButtons}>-</button>
          <input type="text" value={item.quantity} readOnly />
          <button className={styles.quantButtons}>+</button>
        </div>
      </div>
    </div>
  );
}