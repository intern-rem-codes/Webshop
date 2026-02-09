import type { IProduct } from "../Interfaces/interfaces";
import ProductCard from "../components/ProductCard";
import { products as _products } from "../assets/utils/data";
import AddProduct from "../components/AddProduct";
import { useState } from "react";
interface ICartProps {
  cartItems: (value: string) => void;
}
export default function Cart({ cartItems }: ICartProps) {
  const [products, setProducts] = useState(_products);
  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      <div className="cart-items">
        <div className="cart-item">
          <img src="" alt="Product 1" />
          <div className="item-details">
            <h2>Product 1</h2>
            <p>Price: $10.00</p>
            <p>Quantity: 1</p>
          </div>
        </div>
        <div className="cart-item">
          <img src="" alt="Product 2" />
          <div className="item-details">
            <h2>Product 2</h2>
            <p>Price: $20.00</p>
            <p>Quantity: 2</p>
          </div>
        </div>
      </div>
      <div className="cart-summary">
        <h3>Total: $50.00</h3>
        <button>Checkout</button>
      </div>
    </div>
  );
}
