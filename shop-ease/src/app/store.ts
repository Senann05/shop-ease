import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../features/cart/cartSlice'
import { productApi } from '../features/products/productApi.ts'


export const store = configureStore({
    reducer:{
        [productApi.reducerPath]: productApi.reducer,
        cart: cartReducer
    },
    middleware: (getDefaultMiddleware)=>
        getDefaultMiddleware().concat(productApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch