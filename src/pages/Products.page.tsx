import ProductCard from "../components/ProductCard";
import { products as _products } from "../assets/utils/data";
import AddProduct from "../components/AddProduct";
import { useState } from "react";

export default function Products() {
  const [products, setProducts] = useState(_products);
  return (
    <div className="products">
      <AddProduct
        onAddProduct={(newProduct) => setProducts([...products, newProduct])}
      />
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
