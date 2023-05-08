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
    const {setPosts, setLoadingProfile, setRefetchProfile} = useActions()
    const {posts, loadingProfile, refetchProfile} = useTypedSelector((store) => store.profile)
    const {user: userAuth} = useAuth()
    useEffect(() => {
        if (user) {
            PostService.getUserId(user?._id || '')
                .then((data) => setPosts(data.data))
                .finally(() => setLoadingProfile(false))
        }
    }, [user, refetchProfile])

    return (
        <div className={styles.block}>
            <LoadingOrItems title={'Постов нет'} length={posts.length} loading={loadingProfile}>
                {posts.map((post) => <PostItem refetch={refetchProfile} setRefetch={setRefetchProfile}
                                               userId={userAuth?._id || ''} post={post} key={post.createdAt}/>)}
            </LoadingOrItems>
        </div>
    );
}

export default PostTape;