import { useAppDispatch } from "../app/hooks";
import { useLoginMutation } from "../features/auth/authApi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { setCredentials } from "../features/auth/authSlice";
import "../styles/login.css"

const Login = ()=>{
    const[username, setUsername]= useState("")
    const [password, setPassword]= useState("")

    const dispatch =useAppDispatch()
    const navigate = useNavigate()

    const [login, {isLoading, error}]=useLoginMutation()

    const handleSubmit = async(e: React.FormEvent)=>{
        e.preventDefault()
        try{
            const data = await login({username,password}).unwrap()
            dispatch(setCredentials({user: data.user,token: data.token}))
            navigate("/")
        }catch(err){
            console.error("Giris Melumatlari Yanlisdir", err)
        }
    }
    return(
        <div className="auth-form">
            <p>Login to see products.</p>
            <h2>Login</h2>
            {isLoading && <p>Loading...</p>}
            {error &&<p style={{color: "red"}}>error: User not found</p>}
            <form onSubmit={handleSubmit}>
               <div><label>User Name:</label><input type="text" placeholder="UserName" value={username} onChange={(e)=>setUsername(e.target.value)} required/></div>
               <div><label>Password:</label><input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required/></div>
                <button type="submit" disabled={isLoading}>{isLoading? "Loading": "Login"}</button>
                
            </form>

        </div>
    )
}
export default Login;