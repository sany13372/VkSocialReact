import { FieldErrors, UseFormRegister } from 'react-hook-form'

export interface IInputs {
    name: string
    lastName: string
    email: string
    password: string
}

export interface IAuthPageInput {
    register: UseFormRegister<IInputs>
    errors: FieldErrors<IInputs>
    placeholder?:string
    title?:string
}

export interface ISignUpFx {
    url: string
    username: string
    password: string
    email: string
}

export interface ISignInFx {
    url: string
    username: string
    password: string
}

export interface IUser {
    username: string
    userId: number | string
    email: string
}