import { Link } from 'react-router-dom';
import "../styles/home.css"
const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="main-title">👋 Welcome to ShopEase E-commerce!</h1>
          <p className="subtitle">Quality products, affordable prices and convenient shopping experience</p>
          <div className="features">
            <div className="feature">
              <span className="feature-icon">🚚</span>
              <span className="feature-text">Free delivery</span>
            </div>
            <div className="feature">
              <span className="feature-icon">⭐</span>
              <span className="feature-text">Premium quality</span>
            </div>
            <div className="feature">
              <span className="feature-icon">💰</span>
              <span className="feature-text">Best prices</span>
            </div>
          </div>
          <Link to="/products">
            <button className="shop-button">View Products</button>
          </Link>
        </div>
        <div className="hero-image">
          <div className="image-placeholder"></div>
        </div>
      </div>
      
      <div className="categories-section">
        <h2 className="section-title">Popular Categories</h2>
        <div className="category-cards">
          <div className="category-card">
            <div className="category-icon">📱</div>
            <h3>Electronics</h3>
          </div>
          <div className="category-card">
            <div className="category-icon">👕</div>
            <h3>Clothing</h3>
          </div>
          <div className="category-card">
            <div className="category-icon">🏠</div>
            <h3>Home & Garden</h3>
          </div>
          <div className="category-card">
            <div className="category-icon">🎮</div>
            <h3>Games & Entertainment</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
