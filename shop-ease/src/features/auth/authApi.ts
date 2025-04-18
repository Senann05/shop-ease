import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LoginResponse,LoginRequest,RegisterRequest,RegisterResponse} from "../../types/userTypes";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://dummyjson.com"}),
    endpoints: (builder)=>({

        login: builder.mutation<LoginResponse,LoginRequest>({
            query: (credentials)=>({
                url: "auth/login",
                method: "POST",
                body: credentials,
            })
        }),
        register: builder.mutation<RegisterResponse,RegisterRequest>({
            query: (userInfo)=>({
                url: "/auth/register",
                method: "POST",
                body: userInfo,
            })
        })

    })
})
export const {useLoginMutation,useRegisterMutation} = authApi