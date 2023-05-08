import {FC} from 'react';
import styles from './Button.module.scss'
const Button: FC<{title:string,onClick:any}> = ({onClick,title}) => {
    return (
        <div className={styles.button} onClick={onClick}>
            {title}
        </div>
    );
}

export default Button;