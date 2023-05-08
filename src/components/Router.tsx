import {useMemo} from "react";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import MainLayout from "@layouts/MainLayout";
import NotFoundPage from "@pages/notFoundPage/notFoundPage";
import AuthPage from "@pages/AuthPage/AuthPage";
import NewsPage from "@pages/NewsPage/NewsPage";
import ProfilePage from "@pages/ProfilePage/ProfilePage";
import UsersPage from "@pages/UsersPage/UsersPage";
import FriendsPage from "@pages/FriendsPage/FriendsPage";
import UserPage from "@pages/UserPage/UserPage";


function Router() {
    const rooter = useMemo(() => {
        return createBrowserRouter(
            createRoutesFromElements(
                <Route path="/" element={<MainLayout/>}>
                    <Route index element={<NewsPage/>}/>
                    {/* ========= home ========= */}
                    <Route path="*" element={<NotFoundPage/>}/>
                    <Route path={'/auth'} element={<AuthPage/>}/>
                    <Route path={'/profile'} element={<ProfilePage/>}/>
                    <Route path={'/users'} element={<UsersPage/>}/>
                    <Route path={'/friends'} element={<FriendsPage/>}/>
                    <Route path={'/user/:id'} element={<UserPage/>}/>
                </Route>
            )
        );
    }, []); // eslint-disable-line

    return <RouterProvider router={rooter}/>;
}

export default Router;
