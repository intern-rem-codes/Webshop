import { useState } from "react";
import type { IProduct } from "../Interfaces/interfaces";
export interface IAddProduct {
  onAddProduct: (value: IProduct) => void;
}

const initialProductState: IProduct = {
  id: Date.now(),
  name: "",
  description: "",
  price: "0",
  image: "",
};
export default function AddProduct(props: IAddProduct) {
  const [product, setProduct] = useState<IProduct>(initialProductState);

  const [error, setError] = useState("");

  function handleAddProduct() {
    if (!product?.name || !product?.image || !product?.price) {
      setError("Please fill in all fields");
      return;
    }
    if (product.name.length < 3 || product.name.length > 10) {
      setError("Product name must be at least 3 characters long");
      return;
    }
    if (!product.image.startsWith("http")) {
      setError("Please enter a valid image URL");
      return;
    }

    props.onAddProduct(product);
    setProduct(initialProductState);
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
        value={product.name}
        onChange={(e) => setProduct({ ...product, name: e.target.value })}
        alt="Product name"
      />
      <div className="description">Product description</div>
      <textarea
        value={product.description}
        onChange={(e) =>
          setProduct({ ...product, description: e.target.value })
        }
      />
      <div className="price">Product price</div>
      <input
        type="number"
        value={product.price}
        onChange={(e) => setProduct({ ...product, price: e.target.value })}
        alt="Product price"
      />
      <div className="image">Product image URL</div>
      <input
        type="text"
        value={product.image}
        onChange={(e) => setProduct({ ...product, image: e.target.value })}
        alt="Product image URL"
      />
      <button className="add-product-button" onClick={handleAddProduct}>
        Add Product
      </button>
    </div>
  );
}
