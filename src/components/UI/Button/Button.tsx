import {FC} from 'react';
import styles from './Button.module.scss'
import cn from 'clsx'

interface IButton {
    title: string,
    onClick: any
    isLoading?:boolean
}

const Button: FC<IButton> = ({onClick, title, isLoading}) => {
    return (
        <div className={cn({
            [styles.disable]:isLoading,
            [styles.button]:!isLoading
        })} onClick={onClick} aria-disabled={true}>
            {title}
        </div>
    );
}

export default Button;