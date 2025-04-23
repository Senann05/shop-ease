// import ProductList from "./components/ProductList";
// import Cart from "./pages/Cart";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// function App () {
// return(
// <Router>
//   <header>
//     <nav>
//       <Link to="/">Products</Link> | <Link to="/cart">Cart</Link>
//     </nav>
//   </header>
//   <Routes>
//     <Route path="/" element={<ProductList/>}/>
//     <Route path="/cart" element={<Cart/>}/>
//   </Routes>
// </Router>
// )
// }
// export default App;

import { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import Cart from "./pages/Cart";
import "./App.css"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      document.body.classList.toggle('dark-mode', savedTheme === 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDark);
      document.body.classList.toggle('dark-mode', prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    document.body.classList.toggle('dark-mode', newDarkMode);
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
  };

  return(
    <Router>
      <header>
        <nav className="navbar">
          <div className="nav-links">
            <Link to="/">Products</Link> | <Link to="/cart">Cart</Link>
          </div>
          <div 
            className={`theme-toggle ${isDarkMode ? '' : 'light'}`} 
            onClick={toggleTheme}
          >
            <div className="toggle-thumb">
              <i className="toggle-icon">{isDarkMode ? '🌙' : '☀️'}</i>
            </div>
          </div>
        </nav>
      </header>
      <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
      <Routes>        
        <Route path="/products" element={<ProductList/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </Router>
  );
}

export default App;