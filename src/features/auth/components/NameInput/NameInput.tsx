import { IAuthPageInput } from '@features/auth/types/types'
import styles from '@features/auth/Auth.module.scss'
import {FC} from "react";

const NameInput:FC<IAuthPageInput> = ({ register, errors,placeholder,title }) => (
    <label className={styles.form__label}>
        <input
            {...register(title ? 'lastName' : 'name', {
                required: 'Заполните поле!',
                minLength: 2,
                maxLength: 15,
                pattern: {
                    value: /^[а-яА-Яa-zA-ZёЁ]*$/,
                    message: 'Недопустимое значение!',
                },
            })}
            className={styles.form__input}
            type="text"
            placeholder={placeholder}
        />
        {errors.name && (
            <span className={styles.error_alert}>{errors.name?.message}</span>
        )}
        {errors.name && errors.name.type === 'minLength' && (
            <span className={styles.error_alert}>Минимум 2 символа!</span>
        )}
        {errors.name && errors.name.type === 'maxLength' && (
            <span className={styles.error_alert}>Не более 15 символов!</span>
        )}
    </label>
)

export default NameInput