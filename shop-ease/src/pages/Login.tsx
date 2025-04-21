// import { useDispatch } from "react-redux";
// import { useLoginMutation } from "../features/auth/authApi";
// import { useNavigate } from "react-router-dom";
// import { setUser } from "../features/auth/authSlice";
// import { useState } from "react";

// const Login = ()=>{
//     const[username, setUsername]= useState("")
//     const [password, setPassword]= useState("")
//     const[errorMsg, setErrorMsg] = useState("")

//     const dispatch =useDispatch()
//     const navigate = useNavigate()

//     const [login, {isLoading}]=useLoginMutation()

//     const handleSubmit = async (e: React.FormEvent)=>{
//         e.preventDefault()
//         try{
//             const user = await login({username,password}).unwrap()
//             dispatch(setUser(user))
//             navigate("/")
//         }catch(err){
//             setErrorMsg("Giris Melumatlari Yanlisdir")
//         }
//     }
//     return(
//         <div className="auth-form">
//             <h2>Login</h2>
//             {errorMsg && <p className="error">{errorMsg}</p>}
//             <form onSubmit={handleSubmit}>
//                 <input type="text" placeholder="UserName" value={username} onChange={(e)=>setUsername(e.target.value)} required/>
//                 <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
//                 <button type="submit" disabled={isLoading}>{isLoading? "Loading": "Login"}</button>
//             </form>

//         </div>
//     )
// }
// export default Login;