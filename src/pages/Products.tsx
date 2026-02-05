import ProductCard from "../components/ProductCard";
import products from "../assets/Products.json";
import type { IProduct } from "../Interfaces/interfaces";

const prod: IProduct[] = products;

export default function Products() {
  console.log(prod);
  return (
    <div className="products">
      {prod.map((p) => (
        <div>
          <h1>{p.name}</h1>
          <p>{p.description}</p>
        </div>
      ))}
      <ProductCard />
    </div>
  );
}
