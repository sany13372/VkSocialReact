import {FC} from 'react';
import NotImg from '@assets/noAvatar.png'
import styles from './Avatar.module.scss'
import {IUser} from "@context/user/user.types";

const Avatar: FC<{user:IUser}> = ({user}) => {

    return (
        <div className={styles.avatar}>
            <img src={user?.avatar ? user?.avatar : NotImg} alt="Картинка"/>
        </div>
    );
}

export default Avatar;