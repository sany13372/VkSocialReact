import {useForm} from 'react-hook-form'
import {FC, useState} from 'react'
import {IInputs} from '@features/auth/types/types'
import styles from '@features/auth/Auth.module.scss'
import NameInput from "../NameInput/NameInput";
import PasswordInput from "../PasswordInput/PasswordInput";
import EmailInput from "../EmailInput/EmailInput";
import Spinner from "@components/UI/Spinner/Spinner";
import {useRegisterMutation} from "@context/user/user.actions";
import {useNavigate} from "react-router-dom";
import {saveToStorage} from "@utils/authHelper";
import {IDataAuth} from "@context/user/user.types";

const SignUpForm: FC<{ switchForm: () => void }> = ({switchForm}) => {
    const [spinner, setSpinner] = useState<boolean>(false)
    const [registerMutate] = useRegisterMutation()
    const nav = useNavigate()

    const {
        register,
        formState: {errors},
        handleSubmit,
        resetField,
    } = useForm<IInputs>()

    const onSubmit = async (data: IInputs) => {
        setSpinner(true)
        await registerMutate(data)
            .then((request: IDataAuth | any) => {
                if (request.data) {
                    saveToStorage(request.data)
                    resetField('email')
                    resetField('name')
                    resetField('password')
                    resetField('lastName')
                    switchForm()
                    nav('/')
                }
            })
            .catch((err) => console.log(err.message))
            .finally(() => setSpinner(false))
    }

    return (
        <form
            className={`${styles.form}`}
            onSubmit={handleSubmit(onSubmit)}
        >
            <h2 className={`${styles.form__title} ${styles.title}`}>
                Создать аккаунт
            </h2>
            <NameInput register={register} errors={errors} placeholder={'Имя'}/>
            <NameInput register={register} errors={errors} title={'lastName'} placeholder={'Фамилия'}/>
            <EmailInput register={register} errors={errors}/>
            <PasswordInput register={register} errors={errors}/>
            <button
                className={`${styles.form__button} ${styles.button} ${styles.submit}`}
            >
                {spinner ? <Spinner/> : 'Регистрация'}
            </button>
        </form>
    )
}

export default SignUpForm