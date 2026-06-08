import { useOutletContext } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import styles from "./Shop.module.css";

export default function Shop() {
  //useOutletContext passing props to use
  //Need to create a dunction to setCart (adding to cart) once user clicks add
  const { productsArray, cart, setCart } = useOutletContext();

  return (
    <div className={styles.container}>
      {productsArray.map((product) => (
        <div key={product.id} className={styles.card}>
          <ProductCard product={product} cart={cart} setCart={setCart} />
        </div>
      ))}
    </div>
  );
}