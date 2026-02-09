import ProductCard from "../components/ProductCard";
import { products as _products } from "../assets/utils/data";
import AddProduct from "../components/AddProduct";
import { useState } from "react";
import type { IProduct } from "../Interfaces/interfaces.ts";

interface IProductsProps {
  onAddToCart: (value: IProduct[]) => void;
}
export default function Products({ onAddToCart }: IProductsProps) {
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
