import { useAppDispatch } from "../app/hooks";
import { logout } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const LogoutButton = () =>{
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(logout())
        navigate("/")
    }
    return <button onClick={handleLogout}>Logout</button>
}
export default LogoutButton