import { useState } from "react";
import type { IProduct } from "../Interfaces/interfaces";
export interface IAddProduct {
  onAddProduct: (value: IProduct) => void;
}

export default function AddProduct(props: IAddProduct) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [error, setError] = useState("");

  function handleAddProduct() {
    if (!name || !image || price <= 0) {
      setError("Please fill in all fields");
      return;
    }
    if (name.length < 3 || name.length > 10) {
      setError("Product name must be at least 3 characters long");
      return;
    }
    if (!image.startsWith("http")) {
      setError("Please enter a valid image URL");
      return;
    }
    const newProduct: IProduct = {
      id: Date.now(),
      name,
      description,
      price: price.toString(),
      image,
    };
    props.onAddProduct(newProduct);
    setName("");
    setDescription("");
    setPrice(0);
    setImage("");
    setError("");
  }

  return (
    <div className="add-product">
      <div className="title">
        <h2>Add New Product</h2>
      </div>
      {error && <p className="error">{error}</p>}
      <div className="name">Product name</div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        alt="Product name"
      />
      <div className="description">Product description</div>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div className="price">Product price</div>
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        alt="Product price"
      />
      <div className="image">Product image URL</div>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        alt="Product image URL"
      />
      <button className="add-product-button" onClick={handleAddProduct}>Add Product</button>
    </div>
  );
}
