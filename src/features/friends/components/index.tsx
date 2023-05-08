import {FC, useEffect, useState} from 'react';
import {useAuth} from "@providers/AuthProvider";
import styles from './Users.module.scss'
import UserItem from "@features/friends/components/UserItem/UserItem";

const Friends: FC = () => {
    const [friends, setFriends] = useState<string[]>([])
    const {user} = useAuth()
    useEffect(() => {
        if (user) {
            setFriends(user.friends)
        }
    }, [user])

    return (
        <div className={styles.block}>
            {friends.length ? friends.map((friend) => <UserItem key={friend} id={friend}/>) : <h4>Друзей нет</h4>}
        </div>
    );
}

export default Friends;