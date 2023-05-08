import { IAuthPageInput } from '@features/auth/types/types'
import styles from '@features/auth/Auth.module.scss'
import {FC} from "react";

const PasswordInput:FC<IAuthPageInput> = ({ register, errors }) => (
    <label className={styles.form__label}>
        <input
            {...register('password', {
                required: 'Введите пароль!',
                minLength: 4,
                maxLength: 20,
            })}
            className={styles.form__input}
            type="password"
            placeholder="Пароль"
        />
        {errors.password && (
            <span className={styles.error_alert}>{errors.password?.message}</span>
        )}
        {errors.password && errors.password.type === 'minLength' && (
            <span className={styles.error_alert}>Минимум 4 символа!</span>
        )}
        {errors.password && errors.password.type === 'maxLength' && (
            <span className={styles.error_alert}>Не более 20 символов!</span>
        )}
    </label>
)

export default PasswordInput