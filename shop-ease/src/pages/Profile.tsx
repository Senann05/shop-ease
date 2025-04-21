import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { logout } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Profile=()=>{
    const user=useSelector((state: RootState)=>state.auth.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout= ()=>{
        dispatch(logout())
        navigate("/")
    }
    if(!user) return null

    return(
        <div className="profile-page">
            <h2>Wellcome, {user.username}!</h2>
            <p>Email: {user.email}</p>
            <button onClick={handleLogout}>LogOut</button>

        </div>
    )
}
export default Profile;