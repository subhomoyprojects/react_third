import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Product from "./Product";
import ProductDetails from "./ProductDetails";
import Parent from "./PropsPassing/Parent";
import ChildDetails from "./PropsPassing/ChildDetails";
import CountComponent from "./UseReducerComponent/CountComponent";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/parent" element={<Parent />} />
          <Route path="/parent/:id" element={<ChildDetails />} />
          <Route path="/countComponent" element={<CountComponent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
