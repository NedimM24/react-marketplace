import { useOutletContext } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import styles from "./Shop.module.css";

export default function Shop() {
  const { productsArray } = useOutletContext();

  return (
    <div className={styles.container}>
      {productsArray.map((product) => (
        <div key={product.id} className={styles.card}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}