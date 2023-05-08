import {api} from "@context/api/api";
import {IDataAuth, IDataDto, IInterfaceEmailPassword} from "@context/user/user.types";

export const userApi = api.injectEndpoints({
    endpoints: builder => ({
        register: builder.mutation<IDataAuth,IDataDto>({
            query: (data) => ({
                body: data,
                url: '/auth/register',
                method: 'POST',
                invalidatesTags:() => [{
                    type:'User'
                }]
            })
        }),
        login: builder.mutation<IDataAuth,IInterfaceEmailPassword>({
            query: (data) => ({
                body: data,
                url: '/auth/login',
                method: 'POST',
                invalidatesTags:() => [{
                    type:'User'
                }]
            })
        }),
        checkAuth: builder.mutation<string,any>({
            query: (data) => ({
                body: data,
                url: '/auth/login/access-token',
                method: 'POST',
                invalidatesTags:() => [{
                    type:'User'
                }]
            })
        }),

    })
})

export const {useCheckAuthMutation,useLoginMutation,useRegisterMutation} = userApi