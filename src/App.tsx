import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default App;
