import {FC} from 'react';
import styles from './UserName.module.scss'
import {IUser} from "@context/user/user.types";

const UserName: FC<{user:IUser}> = ({user}) => {

    return (
        <div className={styles.titles}>
            <div>{user?.name} {user?.lastName}</div>
        </div>
    );
}

export default UserName;