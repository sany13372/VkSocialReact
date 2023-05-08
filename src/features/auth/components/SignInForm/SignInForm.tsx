import {useForm} from "react-hook-form";
import {useState} from "react";
import styles from '../../Auth.module.scss'
import {useNavigate} from "react-router-dom";
import {IInputs} from "@features/auth/types/types";
import PasswordInput from "@features/auth/components/PasswordInput/PasswordInput";
import Spinner from "@components/UI/Spinner/Spinner";
import {useLoginMutation} from "@context/user/user.actions";
import EmailInput from "@features/auth/components/EmailInput/EmailInput";
import {saveToStorage} from "@utils/authHelper";
import {IDataAuth} from "@context/user/user.types";

const SignInForm = () => {
    const [spinner, setSpinner] = useState<boolean>(false)
    const [login] = useLoginMutation()
    const nav = useNavigate()
    const {
        register,
        formState: {errors},
        handleSubmit,
        resetField,
    } = useForm<IInputs>()

    const onSubmit = async (data: IInputs) => {

        try {
            setSpinner(true)
            await login({email: data.email, password: data.password})
                .then((request: IDataAuth | any) => {
                    if (request.data) {
                        saveToStorage(request.data)
                        resetField('email')
                        resetField('name')
                        resetField('password')
                        resetField('lastName')
                        nav('/')
                    }
                })
            resetField('name')
            resetField('password')
            nav('/')
        } catch (error) {
            //showAuthError(error)
        } finally {
            setSpinner(false)
        }
    }

    return (
        <form
            className={`${styles.form}`}
            onSubmit={handleSubmit(onSubmit)}
        >
            <h2 className={`${styles.form__title} ${styles.title}`}>
                Войти на сайт
            </h2>
            <EmailInput register={register} errors={errors}/>
            <PasswordInput register={register} errors={errors}/>
            <button
                className={`${styles.form__button} ${styles.button} ${styles.submit}`}
            >
                {spinner ? <Spinner/> : 'Войти'}
            </button>
        </form>
    )
}

export default SignInForm