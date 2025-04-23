import { useState } from "react";
import { useRegisterMutation } from "../features/auth/authApi";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { setCrenditials } from "../features/auth/authSlice";
import "../styles/regist.css"

const Regiter = ()=>{
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [register,{isLoading,error}]= useRegisterMutation()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

   const handleSubmit = async (e: React.FormEvent)=>{
    e.preventDefault()
    try{
        const userData = await register({username, email, password}).unwrap()
        dispatch(setCrenditials(userData))
        navigate("/login")
    }catch(err){
        console.log("Error:" , err)
    }
   }
    return(
        <div className="auth-form">
            <h2>Register</h2>
            {isLoading && <p>Göndərilir...</p>}
            {error && <p style={{ color: 'red' }}>Xəta baş verdi!</p>}

            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="UserName" value={username} onChange={(e)=> setUsername(e.target.value)} required></input>
                <input type="email" name="email" placeholder="E-Mail" value={email} onChange={(e)=> setEmail(e.target.value)} required></input>
                <input type="password" name="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)} required></input>
                <button type="submit" disabled={isLoading}>Register</button>
            </form>
        </div>
    )
}
export default Regiter;