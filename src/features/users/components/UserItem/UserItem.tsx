import {FC} from 'react';
import {IUser} from "@context/user/user.types";
import notImg from '@assets/noAvatar.jpg'
import styles from './UserItem.module.scss'
import {useAuth} from "@providers/AuthProvider";
import {useNavigate} from "react-router-dom";

const UserItem: FC<{ user: IUser }> = ({user}) => {
    const {user: userAuth} = useAuth()
    const showConsist = userAuth?._id !== user._id
    const nav = useNavigate()

    return (
        <>
            {showConsist && <div className={styles.item} onClick={() => nav(`/user/${user._id}`)}>
                <div className={styles.avatar}>
                    <img src={user.avatar ? user.avatar : notImg} alt="Картинка"/>
                </div>
                <div className={styles.block}>
                    <div>{user.name} {user.lastName}</div>
                    {user.city && <div>{user.city}</div>}
                </div>
            </div>}
        </>
    );
}

export default UserItem;