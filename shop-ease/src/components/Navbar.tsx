import { Link } from "react-router-dom";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { logout } from "../features/auth/authSlice";

const Navbar= ()=>{
    const user = useAppSelector((state)=> state.auth.user)
    const token = useAppSelector((state)=> state.auth.token)
    const dispatch = useAppDispatch()

    const handleLogout=()=>{
      dispatch(logout())
    }
    return(
        <nav className="navbar">
            <Link to= "/">Home</Link>
            {/* <Link to="/products">Products</Link> */}
            {token ? (
        <>
        <span>{user?.username}</span>
        <button onClick={handleLogout}></button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Regist</Link>
        </>)}
        </nav>
    )
}
export default Navbar;