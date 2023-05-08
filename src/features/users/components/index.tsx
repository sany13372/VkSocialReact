import {FC, useEffect, useState} from 'react';
import {useTypedSelector} from "@hooks/useTypedSelector";
import {useAuth} from "@providers/AuthProvider";
import {useActions} from "@hooks/useActions";
import {UserService} from "@services/user.service";
import SearchLine from "@components/UI/SearchLine/SearchLine";
import styles from './Users.module.scss'
import {useDebounce} from "@hooks/useDebounce";
import {IUser} from "@context/user/user.types";
import UserItem from "@features/users/components/UserItem/UserItem";
import {filterUsers} from "@utils/filtredUsers";

const Users: FC = () => {
    const {user} = useAuth()
    const {setUsers} = useActions()
    const [nameUser, setNameUser] = useState<string>('')
    const {users} = useTypedSelector((store) => store.users)
    const debounceSearch = useDebounce(nameUser, 500)
    useEffect(() => {
        if (user) {
            UserService.getAll()
                .then((data) => {
                    setUsers(filterUsers(data.data, user.friends))
                })
        }
    }, [user])

    useEffect(() => {
        if (user) {
            const usersFilters = [...users]?.filter((userItem: IUser) => userItem.name.toLowerCase().includes(debounceSearch.toLowerCase()))
            if (nameUser === '') {
                UserService.getAll()
                    .then((data) => setUsers(filterUsers(data.data, user.friends)))
            } else {
                setUsers(usersFilters)
            }
        }
    }, [debounceSearch])

    return (
        <div className={styles.block}>
            <SearchLine value={nameUser} setValue={setNameUser} placeholder={'Введите имя'}/>
            {users.map((usere) => <UserItem key={usere._id} user={usere}/>)}
        </div>
    );
}

export default Users;