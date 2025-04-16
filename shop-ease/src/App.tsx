import ProductList from "./components/ProductList";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App () {
return(
<Router>
  <header>
    <nav>
      <Link to="/">Products</Link> | <Link to="/cart">Cart</Link>
    </nav>
  </header>
  <Routes>
    <Route path="/" element={<ProductList/>}/>
    <Route path="/cart" element={<Cart/>}/>
  </Routes>
</Router>
)
}
export default App;