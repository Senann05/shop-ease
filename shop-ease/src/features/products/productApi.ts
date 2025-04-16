import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "../../types/product";

export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://dummyjson.com/"}),
    endpoints: (builder)=>({

        getAllProducts:builder.query<{products: Product[]}, void>({
            query: ()=>"products"
        }),

        getSingleProduct:builder.query<Product, string>({
            query: (id)=> `products/${id}`
        }),
    }),

})
export const {useGetAllProductsQuery,useGetSingleProductQuery}=productApi