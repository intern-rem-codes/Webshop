import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Content from "./components/Content";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Products from "./pages/Products";

export type Page = "home" | "products" | "cart" | "";

function App() {
  const [selectedPage, setSelectedPage] = useState<Page>("");
  console.log(selectedPage);

  function renderPage() {
    if (selectedPage === "products") {
      return <Products />;
    }
    if (selectedPage === "cart") {
      return <Cart />;
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
