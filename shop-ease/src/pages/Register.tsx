import { useState } from "react";
import { useRegisterMutation } from "../features/auth/authApi";
import { useNavigate } from "react-router-dom";

const Regiter = ()=>{
    const[form, setForm] = useState({
         username: "",
         email: "",
         password: ""
    })
    const[errorMsg, setErrorMsg] =useState("")
    const[register, {isLoading}] = useRegisterMutation()
    const navigate = useNavigate()

    const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = async(e: React.FormEvent)=> {
        e.preventDefault()
        try{
            await register(form).unwrap()
            navigate("/login")
        }catch(err){
            setErrorMsg("Ugursuz Giris Emeliyyati")
        }
    }

    return(
        <div className="auth-form">
            <h2>Register</h2>
            {errorMsg &&  <p className="error">{errorMsg}</p>}
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="UserName" value={form.username} onChange={handleChange} required></input>
                <input type="email" name="email" placeholder="E-Mail" value={form.email} onChange={handleChange} required></input>
                <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required></input>
                <button type="submit" disabled={isLoading}>{isLoading? "Loading" : "Register"}</button>
            </form>
        </div>
    )
}
export default Regiter;