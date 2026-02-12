import { useState } from "react";
import Footer from "./components/Footer.component.tsx";
import Header from "./components/Header.component.tsx";
import Content from "./components/Content.component.tsx";
import HomePage from "./pages/Home.page.tsx";
import CartPage from "./pages/Cart.page.tsx";
import ProductsPage from "./pages/Products.page";
import type { IProduct } from "./Interfaces/interfaces.ts";
import { Route, Routes } from "react-router";
import CalculatorPage from "./pages/calculator.page.tsx";

export type Page = "home" | "products" | "cart" | "calculator" | "";
// test
function App() {
  const [selectedProducts, setSelectedProducts] = useState<IProduct[]>([]);

  return (
    <>
      <Header cartCount={selectedProducts.length} />
      <Content>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/products"
            element={
              <ProductsPage
                onAddToCart={(product) =>
                  setSelectedProducts((prev) => [...prev, product])
                }
              />
            }
          />
          <Route
            path="/cart"
            element={<CartPage cartItems={selectedProducts} />}
          />
          <Route path="/calculator" element={<CalculatorPage />} />
        </Routes>
      </Content>
      <Footer />
    </>
  );
}

export default App;
