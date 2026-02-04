import logo from "../assets/shoplogo.jpg";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="MyShop logo" />
        </a>
      </div>

      <ul className="nav">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
}
