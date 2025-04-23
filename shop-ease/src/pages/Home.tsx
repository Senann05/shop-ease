import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className="home-page">
      <h1>👋 ShopEase E-commerce saytına xoş gəlmisiniz!</h1>
      <p>Buradan məhsullara baxa və alış-veriş edə bilərsiniz.</p>
      <Link to="/products">
        <button> Məhsullara bax</button>
      </Link>
    </div>
  )
}

export default Home
