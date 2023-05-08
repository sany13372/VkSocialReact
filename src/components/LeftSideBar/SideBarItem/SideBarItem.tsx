import {FC} from 'react';
import {ISideBarItem} from "../LeftSideBar";
import {useLocation, useNavigate} from "react-router-dom";
import styles from './SideBarItem.module.scss'
import cn from 'clsx'

const SideBarItem: FC<{ item: ISideBarItem }> = ({item}) => {
    const nav = useNavigate()
    const location = useLocation()
    return (
        <div onClick={() => nav(item.path)} className={cn(styles.item, {
            [styles.active]: item.path === location.pathname
        })}>
            {item.icon}
            <div>{item.title}</div>
        </div>
    );
}

export default SideBarItem;