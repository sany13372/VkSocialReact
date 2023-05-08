import {FC, useEffect} from 'react';
import {Outlet, useNavigate} from "react-router-dom";
import styles from './MainLayout.module.scss'
import MainProvider from "@providers/MainProvider";
import LeftSideBar from "@components/LeftSideBar/LeftSideBar";

const MainLayout: FC = () => {
    const nav = useNavigate()
    const user = localStorage.getItem('user')

    useEffect(() => {
        if (!user) {
            nav('/auth')
        }
    }, [location.pathname])

    return (
        <MainProvider>
            <div className={styles.layout}>
                {user && location.pathname !== '/auth' && <LeftSideBar/>}
                <Outlet/>
            </div>
        </MainProvider>
    );
}

export default MainLayout;