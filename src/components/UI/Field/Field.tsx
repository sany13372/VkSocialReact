import cn from 'clsx'
import {forwardRef, InputHTMLAttributes} from 'react'
import styles from './Field.module.scss'

export interface IFieldProps {
    placeholder: string
    error?: any
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps

export interface IField extends TypeInputPropsField {}

const Field = forwardRef<HTMLInputElement, IField>(
    ({ placeholder, error, type = 'text', style, ...rest }, ref) => {
        return (
            <div className={cn(styles.common)} style={style}>
                <label>
                    <input className={styles.auth} ref={ref} type={type} {...rest} placeholder={placeholder} />
                </label>
                {error && <div className={styles.error}>{error.message}</div>}
            </div>
        )
    }
)

Field.displayName = 'Field'

export default Field