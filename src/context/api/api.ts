import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

const API_URL = 'http://localhost:4200/api'
const cookies = Cookies.get('accessToken')
export const api = createApi({
    reducerPath:'api',
    tagTypes:['Dialogs','User'],
    baseQuery:fetchBaseQuery({
        baseUrl:API_URL,
    }),
    endpoints:() => ({})
})


