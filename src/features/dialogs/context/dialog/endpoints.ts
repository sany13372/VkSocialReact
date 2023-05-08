import {api} from "@context/api/api";
import {IDialog} from "@features/dialogs/context/dialog/types";

export const dialogApi = api.injectEndpoints({
    endpoints: builder => ({
        getDialogs: builder.query<IDialog[], void>({
            query: () => `/dialog`,
            providesTags: () => [{
                type: 'Dialogs'
            }]
        }),
        createDialog: builder.mutation<any, { message: string, userId: string }>({
            query: (data) => ({
                body: {message: data.message},
                url: `/dialog/${data.userId}`,
                method: 'POST',
                invalidatesTags: () => [{
                    type: 'Dialogs'
                }]
            })
        }),
        sendMessage: builder.mutation<any, { message: string, dialogId: string, userId: string }>({
            query: (data) => ({
                body: {message: data.message, userId: data.userId, dialogId: data.dialogId},
                url: `/dialog/message/${data.dialogId}`,
                method: 'PATCH',
                invalidatesTags: () => [{
                    type: 'Dialogs'
                }]
            })
        }),
    })
})

export const {useCreateDialogMutation, useGetDialogsQuery, useSendMessageMutation} = dialogApi