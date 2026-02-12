import { Route, useLocation, useNavigate } from "react-router";
import type { Page } from "../App";
import logo from "../assets/shoplogo.jpg";

interface IHeaderProps {
  cartCount: number;
}

export default function Header(props: IHeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();

  function getButtonStyle(item: Page) {
    if (
      (location.pathname === "/" && item === "home") ||
      location.pathname === `/${item}`
    ) {
      return { color: "red" };
    } else {
      return {};
    }
  }
  return (
    <div className="header">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="MyShop logo" />
        </a>
      </div>

      <ul className="nav">
        <li>
          <button
            className="header-button"
            style={getButtonStyle("home")}
            onClick={() => navigate("/")}
          >
            Home
          </button>
        </li>
        <li>
          <button
            className="header-button"
            style={getButtonStyle("products")}
            onClick={() => navigate("/products")}
          >
            Products
          </button>
        </li>
        <li>
          <button
            className="header-button"
            style={getButtonStyle("cart")}
            onClick={() => navigate("/cart")}
          >
            Cart ({props.cartCount ?? 0})
          </button>
        </li>
        <li>
          <button
            className="header-button"
            style={getButtonStyle("calculator")}
            onClick={() => navigate("/calculator")}
          >
            Calculator
          </button>
        </li>
      </ul>
    </div>
  );
}
