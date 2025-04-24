import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import type { User } from "./authApi";

interface AuthState {
    token: string | null
    user:User| null
  }
  const savedToken = localStorage.getItem("token")
  const savedUser = localStorage.getItem("user")
const initialState: AuthState ={
    token:savedToken ? JSON.parse(savedToken): null,
    user:savedUser? JSON.parse(savedUser):null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCrenditials: (state, action: PayloadAction<{token: string; user:User}>)=>{
            state.token =action.payload.token
            state.user = action.payload.user
            localStorage.setItem("token", JSON.stringify(action.payload.token))
            localStorage.setItem("user", JSON.stringify(action.payload.user))
        },
        logout:(state)=>{
            state.token =null
            state.user =null
            localStorage.removeItem("token")
            localStorage.removeItem("user")
        }
    }
})
export const {setCrenditials,logout} = authSlice.actions
export default authSlice.reducer