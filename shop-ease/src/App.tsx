import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import ProductList from "./components/ProductList";
import Navbar from './components/Navbar'
import ProtectedRoute from "./components/ProtectedRoute";
import Cart from "./pages/Cart";
import "./App.css"

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
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/products" element={<ProductList />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
    
        <Route element={<ProtectedRoute />}>
        <Route path="/products" element={<ProductList/>}/>
        <Route path="/cart" element={<Cart/>}/>
        </Route>
      </Routes>

    </Router>
  );
}

export default App;