import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product, ProductResponse } from"./productType";

export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://dummyjson.com/"}),
    endpoints: (builder)=>({

        getAllProducts:builder.query<ProductResponse, void>({
            query: ()=>"products"
        }),

        getProductById:builder.query<Product, string>({
            query: (id)=> `products/${id}`
        }),
    }),

})
export const {useGetAllProductsQuery,useGetProductByIdQuery}=productApi