import {FC, useEffect, useState} from 'react';
import styles from "@features/profile/components/Profile.module.scss";
import Avatar from "@features/profile/components/Avatar/Avatar";
import UserName from "@features/profile/components/UserName/UserName";
import UserInfo from "@features/profile/components/UserInfo/UserInfo";
import {IUser} from "@context/user/user.types";
import {UserService} from "@services/user.service";
import {useParams} from "react-router-dom";
import PostTape from './PostTape/PostTape'
import Button from "@components/UI/Button/Button";
import {useAuth} from "@providers/AuthProvider";

const User: FC = () => {
    const [user, setUser] = useState<IUser>({} as IUser)
    const {user: userAuth, setUser: setAuthUser} = useAuth()
    const [isToggle, setIsToggle] = useState<boolean>(false)
    const param = useParams()

    useEffect(() => {
        if (param) {
            UserService.getById( param.id || '')
                .then((data) => setUser(data.data))
        }
    }, [])

    useEffect(() => {
        if (userAuth) {
            setIsToggle(userAuth?.friends.includes(param.id || ''))
        }
    }, [userAuth])

    const addFriend = async () => {
        await UserService.toggleFriend({userId: userAuth?._id || '', friendId: user._id})
        await UserService.getById(userAuth?._id || '')
            .then((data) => setAuthUser(data.data))
    }

    return (
        <div className={styles.blockHeader}>
            {user && <>
                <Avatar user={user}/>
                <UserName user={user}/>
                <UserInfo user={user}/>
                <Button title={isToggle ? 'Удалить из друзей' : 'Добавить в друзья'} onClick={() => addFriend()}/>
                <PostTape user={user}/>
            </>}
        </div>
    );
}

export default User;