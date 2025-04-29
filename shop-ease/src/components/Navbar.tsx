import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch,useAppSelector } from '../app/hooks'
import { logout } from '../features/auth/authSlice'

const Navbar = () => {
  const cartItems = useAppSelector((state) => state.cart.items)

  const user = useAppSelector((state) => state.auth.user)
  const token = useAppSelector((state) => state.auth.token)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    navigate('/login')
  }

    return(
      <nav className="navbar">
      <Link to="/">🛍️ ShopEase</Link>
      {token ? (
          <>
            <li>Welcome, {user?.username}</li>
            <li>
              <button onClick={handleLogout} className="logout-btn">
                log out
              </button>
            </li>
          </>
        ) : (
          <>
      <Link to="/login">🔐 Login</Link>
      <Link to="/register">📝 Register</Link>
          </>
        )}
    
         <Link to="/cart">
        🛒 Cart ({cartItems.length})
      </Link> 
    </nav>  
    )
}
export default Navbar;