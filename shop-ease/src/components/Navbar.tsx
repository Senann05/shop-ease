import { Link } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import LogoutButton from "./LogoutButton";

const Navbar= ()=>{
    const {user} = useAppSelector((state)=> state.auth)
    return(
        <nav className="navbar">
            <Link to= "/">Home</Link>
            <Link to="/products">Products</Link>
            {!user ? (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Regist</Link>
        </>
      ) : (
        <>
          <span> {user.username}</span>
          <LogoutButton />
        </>)}
        </nav>
    )
}
export default Navbar;