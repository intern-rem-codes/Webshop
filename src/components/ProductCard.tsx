import image from "../assets/product.image.jpeg";

export default function ProductCard() {
  return (
    <div className="product-card">
      <a href="#"></a>
      <img src={image} alt="product.title" />

      <div className="product-info">
        <h2>Product Title</h2>
        <p>Description</p>

        <div className="product-footer">
          <span className="price">$199,99</span>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
