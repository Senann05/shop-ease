import ProductList from "./components/ProductList";
import ProductDetail from "./pages/ProductDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App () {
return(
<Router>
  <Routes>
    <Route path="/" element={<ProductList/>} />
    <Route path="/product/:id" element={<ProductDetail/>} />
  </Routes>
</Router>
)
}
export default App;