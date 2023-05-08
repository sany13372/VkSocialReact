import {IUser} from "@context/user/user.types";

export interface IDialogSliceState {
    dialogActive:IDialog | null
    dialog: string
    dialogs: IDialog[]
    refetch:boolean
}

export interface IDialog {
    "id": number,
    "createdAt": string,
    "updatedAt": string,
    "messages": IMessage[],
    "isRead": false,
    "user": IUser
}

export interface IMessage{
    "message": string,
    "userId": string,
    "isRead": boolean,
    "id": number,
    "createdAt": string,
    "updatedAt": string
}