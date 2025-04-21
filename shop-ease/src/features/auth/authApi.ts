import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "../../app/store";

export interface User{
    id:number
    username:string
    email:string
}
export interface LoginRequest{
    username:string
    password:string
}
export interface Authresponse{
    token: string
    user: User
}
export interface RegisterRequest{
    username:string
    email: string
    password:string
}

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://dummyjson.com",
        prepareHeaders:(headers,{getState})=>{
            const token = (getState()as RootState).auth.token
            if(token){
                headers.set("Authorization", `Bearer ${token}`)
            }
            return headers
        },
    }),

    endpoints: (builder)=>({

        login: builder.mutation<Authresponse,LoginRequest>({
            query: (credentials)=>({
                url: "auth/login",
                method: "POST",
                body: credentials,
            })
        }),
        register: builder.mutation<Authresponse,RegisterRequest>({
            query: (newUser)=>({
                url: "/auth/register",
                method: "POST",
                body: newUser,
            })
        })

    })
})
export const {useLoginMutation,useRegisterMutation} = authApi