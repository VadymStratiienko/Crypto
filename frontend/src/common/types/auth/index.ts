import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

export interface IPropsLogin<
    TFieldValues extends FieldValues = FieldValues,
> {
    navigate: (to: string) => void
    register: UseFormRegister<TFieldValues>
    errors: FieldErrors<TFieldValues>
    loading: boolean
}

export interface IPropsRegister<
    TFieldValues extends FieldValues = FieldValues,
> {
    navigate: (to: string) => void
    register: UseFormRegister<TFieldValues>
    errors: FieldErrors<TFieldValues>
    loading: boolean
}

export interface IAuthState {
    user: any
    isLogged: boolean
    isLoading: boolean
}
export interface ILoginData {
    email: string
    password: string
}

export interface IRegisterData {
    email: string
    password: string
    firstName: string
    username: string
}
