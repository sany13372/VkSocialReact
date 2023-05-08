import {FC} from 'react';
import styles from './UserInfo.module.scss'
import {IUser} from "@context/user/user.types";

const UserInfo: FC<{ user: IUser }> = ({user}) => {
    return (
        <div className={styles.info}>
            <div>Родной город: {user?.city ? user?.city : 'не указано'}</div>
            <div>День рождения: {user?.birthday ? user?.birthday : 'не указано'}</div>
        </div>
    );
}

export default UserInfo;