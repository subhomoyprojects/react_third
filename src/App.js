import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Product from "./Product";
import ProductDetails from "./ProductDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
