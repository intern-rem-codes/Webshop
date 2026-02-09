import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Content from "./components/Content";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Products from "./pages/Products.page";
import type { IProduct } from "./Interfaces/interfaces.ts";

export type Page = "home" | "products" | "cart" | "";

function App() {
  const [selectedPage, setSelectedPage] = useState<Page>("");
  console.log(selectedPage);

  const [selectedProduct, setSelectedProduct] = useState<IProduct[]>([]);
  console.log(selectedProduct);

  function renderPage() {
    if (selectedPage === "products") {
      return <Products onAddToCart={setSelectedProduct} />;
    }
    if (selectedPage === "cart") {
      return <Cart cartItems={setSelectedPage} />;
    }
    return <Home />;
  }

  return (
    <>
      <Header
        selectedMenuItem={selectedPage}
        onMenuItemClick={(item) => setSelectedPage(item)}
      />
      <Content>{renderPage()}</Content>
      <Footer />
    </>
  );
}

export default App;
