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

  function handleAddProduct() {
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
  }

  return (
    <div className="add-product">
      <div className="title">
        <h1>Add a new product</h1>
      </div>
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
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
}
