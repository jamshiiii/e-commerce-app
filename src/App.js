import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Products from "./components/Products";
import Product from "./components/Product";
import About from "./components/About";
import Contact from "./components/Contact";
import CartBtn from "./components/CartBtn";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:id" element={<Product />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/cartBtn" element={<CartBtn />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
