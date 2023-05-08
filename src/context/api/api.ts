import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const API_URL = 'http://localhost:4200/api'
export const api = createApi({
    reducerPath:'api',
    tagTypes:['Dialogs','User'],
    baseQuery:fetchBaseQuery({
        baseUrl:API_URL,
    }),
    endpoints:() => ({})
})


