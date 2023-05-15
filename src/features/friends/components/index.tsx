import {FC, useEffect, useState} from 'react';
import {useAuth} from "@providers/AuthProvider";
import styles from './Users.module.scss'
import UserItem from "@features/friends/components/UserItem/UserItem";
import LoadingOrItems from "@components/UI/LoadingOrItems/LoadingOrItems";

const Friends: FC = () => {
    const [friends, setFriends] = useState<string[]>([])
    const [load,setload] = useState(true)
    const {user} = useAuth()
    useEffect(() => {
        if (user) {
            setFriends(user.friends)
            setload(false)
        }
    }, [user])

    return (
        <div className={styles.block}>
            <LoadingOrItems title={'Друзей нет'} length={friends.length} loading={load}>
                {friends && friends?.map((friend) => <UserItem key={friend} id={friend}/>)}
            </LoadingOrItems>
        </div>
    );
}

export default Friends;