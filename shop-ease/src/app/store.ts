// import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from '../features/cart/cartSlice'
// import { productApi } from '../features/products/productApi.ts'


// export const store = configureStore({
//     reducer:{
//         [productApi.reducerPath]: productApi.reducer,
//         cart: cartReducer
//     },
//     middleware: (getDefaultMiddleware)=>
//         getDefaultMiddleware().concat(productApi.middleware)
// })

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch



import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/cart/cartSlice'
import authReducer from '../features/auth/authSlice'
import { productApi } from '../features/products/productApi'
import { authApi } from '../features/auth/authApi'

export const store = configureStore({
  reducer: {
    cart: cartReducer,                   
    auth: authReducer,                   
    [productApi.reducerPath]: productApi.reducer,  
    [authApi.reducerPath]: authApi.reducer,        
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productApi.middleware,
      authApi.middleware
    ),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
