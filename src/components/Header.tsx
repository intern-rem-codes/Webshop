import type { Page } from "../App";
import logo from "../assets/shoplogo.jpg";

interface IHeaderProps {
  selectedMenuItem: Page;
  onMenuItemClick: (item: Page) => void;
}

export default function Header(props: IHeaderProps) {
  function handleMenuItemClick(item: Page) {
    if (props.selectedMenuItem == item) {
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
          <a
            style={handleMenuItemClick("home")}
            onClick={() => props.onMenuItemClick("home")}
            href="#"
          >
            Home
          </a>
        </li>
        <li>
          <a
            style={handleMenuItemClick("products")}
            onClick={() => props.onMenuItemClick("products")}
            href="#"
          >
            Products
          </a>
        </li>
        <li>
          <a
            style={handleMenuItemClick("cart")}
            onClick={() => props.onMenuItemClick("cart")}
            href="#"
          >
            Cart
          </a>
        </li>
      </ul>
    </div>
  );
}
