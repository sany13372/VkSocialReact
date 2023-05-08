import {IPost} from "@features/profile/context/types";

export interface IUser {
    _id: string,
    createdAt: string,
    updatedAt: string,
    email: string,
    avatar: string
    password: string,
    name: string ,
    lastName: string,
    city:string
    birthday:string
    posts:IPost[]
    friends:string[]
}

export interface IUserState {
    email: string
    isAdmin: boolean
}

export interface ITokens {
    accessToken: string
    refreshToken: string
}

export interface IUserInitialState {
    user: IUserState | null
    isLoading: boolean
}

export interface IInterfaceEmailPassword {
    email: string
    password: string
}

export interface IAuthResponse extends ITokens {
    user: IUser
}

export interface IDataAuth {
    user: IUser,
    accessToken: string,
    refreshToken: string
}

export interface IDataDto{
    name:string
    lastName:string
    email:string
    password:string
}