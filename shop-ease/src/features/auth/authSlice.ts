import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { LoginResponse } from "../../types/userTypes";
import AuthService from "../../services/authService";

interface AuthState{
    user: LoginResponse | null
}
const initialState: AuthState ={
    user: AuthService.getUser(),
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<LoginResponse>){
            state.user = action.payload
            AuthService.saveUser(action.payload)
        },
        logout(state){
            state.user = null
            AuthService.logout()
        },
        
    },
})
export const {setUser,logout} = authSlice.actions
export default authSlice.reducer