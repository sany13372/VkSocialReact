import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath:'api',
    tagTypes:['Dialogs','User'],
    baseQuery:fetchBaseQuery({
        baseUrl:`${import.meta.env.VITE_REACT_API_URL}`
    }),
    endpoints:() => ({})
})


