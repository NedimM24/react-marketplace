import { useOutletContext } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";

export default function Shop() {
  const { productsArray } = useOutletContext();

  return (
    <>
      <h1>Shop</h1>
        <div>
            {productsArray.map(product => (
                <ProductCard key={product.id} product={product} />
      ))}
        </div>
      
    </>
  );
}