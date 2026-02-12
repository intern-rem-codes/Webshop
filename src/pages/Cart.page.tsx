import type { IProduct } from "../Interfaces/interfaces";
import ProductCard from "../components/ProductCard.component";
import { products as _products } from "../assets/utils/data";
import AddProduct from "../components/AddProduct.component";
import { useState } from "react";

interface ICartProps {
  cartItems: IProduct[];
}

export default function CartPage({ cartItems }: ICartProps) {
  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="item-details">
              <h2>{item.name}</h2>
              <p>Price: ${item.price}</p>
              <p>Quantity: 1</p>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3>Total: $50.00</h3>
        <button className="checkout-button">Checkout</button>
      </div>
    </div>
  );
}
