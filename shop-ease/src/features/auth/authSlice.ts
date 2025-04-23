import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import type { User } from "./authApi";
interface AuthState{
    token: string | null
    user: User | null
}
const initialState: AuthState ={
    token:null,
    user:null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCrenditials: (state, action: PayloadAction<{token:string; user:User}>)=>{
            state.token =action.payload.token
            state.user = action.payload.user
        },
        logout:(state)=>{
            state.token =null
            state.user =null
        }
    }
})
export const {setCrenditials,logout} = authSlice.actions
export default authSlice.reducer

export const selectCurrentUser = (state: RootState) => state.auth.user
export const selectCurrentToken = (state: RootState) => state.auth.token
