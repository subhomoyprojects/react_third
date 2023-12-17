import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Product from "./Product";
import ProductDetails from "./ProductDetails";
import Parent from "./PropsPassing/Parent";
import ChildDetails from "./PropsPassing/ChildDetails";
import CountComponent from "./UseReducerComponent/CountComponent";
import Notestate from "./context/NewContext";
import About from "./context/Page";

function App() {
  return (
    <div className="App">
      <Router>
        <Notestate>
          <Header />
          <Routes>
            <Route path="/" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/parent" element={<Parent />} />
            <Route path="/parent/:id" element={<ChildDetails />} />
            <Route path="/countComponent" element={<CountComponent />} />
          </Routes>
        </Notestate>
      </Router>
    </div>
  );
}

export default App;
