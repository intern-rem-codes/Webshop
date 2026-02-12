import type { IProduct } from "../Interfaces/interfaces";

interface IProductCardProps {
  product: IProduct;
  onAddToCart: (value: IProduct) => void;
}

export default function ProductCard(props: IProductCardProps) {
  return (
    <div className="product-card">
      <a href="#"></a>
      <img src={props.product.image} alt="product.title" />

      <div className="product-info">
        <h2>{props.product.name}</h2>
        <p>{props.product.description}</p>

        <div className="product-footer">
          <span className="price">${props.product.price}</span>
          <button onClick={() => props.onAddToCart(props.product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
