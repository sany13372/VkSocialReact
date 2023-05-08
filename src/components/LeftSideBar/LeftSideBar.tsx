import {FC, useMemo} from 'react';
import {BiUserCircle,BiNews} from 'react-icons/bi'
import {FiUsers} from 'react-icons/fi'
import {GiThreeFriends} from 'react-icons/gi'
import {TiMessages} from 'react-icons/ti'
import SideBarItem from "@components/LeftSideBar/SideBarItem/SideBarItem";
import styles from './LeftSideBar.module.scss'
import {useAuth} from "@providers/AuthProvider";
import * as process from "process";
export interface ISideBarItem {
    title:string
    icon:any
    path:string
}

const LeftSideBar: FC = () => {
    const {logout} = useAuth()
    const menus:ISideBarItem[] = useMemo(() => ([
        {
            title:'Профиль',
            icon:<BiUserCircle size={20}/>,
            path:'/profile'
        },
        {
            title:'Пользователи',
            icon:<FiUsers size={20}/>,
            path:'/users'
        },
        {
            title:'Друзья',
            icon:<GiThreeFriends size={20}/>,
            path:'/friends'
        },
        {
            title:'Новости',
            icon:<BiNews size={20}/>,
            path:'/'
        },
        {
            title:'Сообщения',
            icon:<TiMessages size={20}/>,
            path:'/messages'
        },

    ]),[])
    console.log('ss',)
    return (
        <div className={styles.sideBar}>
                {menus.map((item) => <SideBarItem key={item.title} item={item}/>)}
            <div className={styles.title} onClick={() => logout()}>
                Выйти
            </div>
        </div>
    );
}

export default LeftSideBar;