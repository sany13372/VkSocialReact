import {FC, useEffect} from 'react';
import {PostService} from "@services/post.service";
import {useActions} from "@hooks/useActions";
import {useTypedSelector} from "@hooks/useTypedSelector";
import LoadingOrItems from "@components/UI/LoadingOrItems/LoadingOrItems";
import PostItem from "@components/UI/PostItem/PostItem";
import {IUser} from "@context/user/user.types";
import {useAuth} from "@providers/AuthProvider";
import styles from './PostTape.module.scss'

const PostTape: FC<{ user: IUser }> = ({user}) => {
    const {setPostsUser, setLoadingUser,setRefetchUser} = useActions()
    const {posts, loadingUser,refetchUser} = useTypedSelector((store) => store.user)
    const {user:userAuth} = useAuth()
    useEffect(() => {
        if (user._id) {
            console.log('US', user)
            PostService.getUserId(user?._id || '')
                .then((data) => setPostsUser(data.data))
                .finally(() => setLoadingUser(false))
        }
    }, [user,refetchUser])

    return (
        <div className={styles.block}>
            <LoadingOrItems title={'Постов нет'} length={posts.length} loading={loadingUser}>
                {posts.map((post) => <PostItem userId={userAuth?._id || ''} setRefetch={setRefetchUser} refetch={refetchUser} post={post} key={post.createdAt}/>)}
            </LoadingOrItems>
        </div>
    );
}

export default PostTape;