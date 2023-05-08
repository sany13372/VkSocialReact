import {IAuthPageInput} from '@features/auth/types/types'
import styles from '@features/auth/Auth.module.scss'
import {FC} from "react";

const EmailInput: FC<IAuthPageInput> = ({register, errors}) => (
    <label className={styles.form__label}>
        <input
            {...register('email', {
                required: 'Введите Email!',
                // pattern: {
                //     // value: /\S+@\S+\.\S+/,
                //     message: 'Неправильный Email!',
                // },
            })}
            className={styles.form__input}
            type="email"
            placeholder="Почта"
        />
        {errors.email && (
            <span className={styles.error_alert}>{errors.email?.message}</span>
        )}
    </label>
)

export default EmailInput