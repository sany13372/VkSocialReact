import {FC, useEffect, useState} from 'react';
import {IUser} from "@context/user/user.types";
import notImg from '@assets/noAvatar.jpg'
import styles from './UserItem.module.scss'
import {UserService} from "@services/user.service";
import {useAuth} from "@providers/AuthProvider";
import {useNavigate} from "react-router-dom";

const UserItem: FC<{ id: string }> = ({id}) => {
    const {user: userAuth, setUser: setUserAuth} = useAuth()
    const [user, setUser] = useState<IUser>({} as IUser)
    const nav = useNavigate()
    const deletedFriend = async () => {
        await UserService.toggleFriend({userId: userAuth?._id || '', friendId: user._id})
        await UserService.getById(userAuth?._id || '')
            .then((data) => setUserAuth(data.data))
    }
    useEffect(() => {
        if (id) {
            UserService.getById(id)
                .then((data) => setUser(data.data))
        }
    }, [id])

    return (
        <div className={styles.item}>
            <div className={styles.avatar} onClick={() => nav(`/user/${user._id}`)}>
                <img src={user.avatar ? user.avatar : notImg} alt="Картинка"/>
            </div>
            <div className={styles.block}>
                <div>{user.name} {user.lastName}</div>
                {user.city && <div>{user.city}</div>}
                <div className={styles.button} onClick={() => deletedFriend()}>
                    Удалить из друзей
                </div>
            </div>
        </div>
    );
}

export default UserItem;