// src/features/auth/authSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { User } from "./authApi" // ✅ API-dən gələn user məlumatı tipi

// 🔐 Auth üçün state interfeysi
interface AuthState {
  token: string | null       // İstifadəçinin JWT tokeni
  user: User | null          // İstifadəçi məlumatları
}

// 🧠 localStorage-dan auth məlumatlarını götürən funksiya
const getInitialAuthState = (): AuthState => {
  const token = localStorage.getItem("token")
  const user = localStorage.getItem("user")
  return {
    user: user ? JSON.parse(user) : null,
    token: token || null,
  }
}

// 🔰 Başlanğıc vəziyyət
const initialState: AuthState = getInitialAuthState()

// 🧩 auth slice yaradılır
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // ✅ Login və ya register zamanı istifadə olunur
    setCredentials: (
      state,
      action: PayloadAction<{ user: User; token: string }>
    ) => {
      state.user = action.payload.user           // state-ə user yazılır
      state.token = action.payload.token         // state-ə token yazılır

      // 🔐 localStorage-a da yazılır ki, refresh olsa belə məlumat qalır
      localStorage.setItem("user", JSON.stringify(action.payload.user))
      localStorage.setItem("token", action.payload.token)
    },

    // 🚪 Logout zamanı istifadə olunur
    logout: (state) => {
      state.user = null
      state.token = null

      // 🧹 localStorage təmizlənir
      localStorage.removeItem("user")
      localStorage.removeItem("token")
    },
  },
})

// 🎯 Action-lar export olunur
export const { setCredentials, logout } = authSlice.actions

// 🎯 Reducer export olunur
export default authSlice.reducer
