import {FC, useEffect, useState} from 'react';
import PostItem from "@components/UI/PostItem/PostItem";
import {IPost} from "@features/profile/context/types";
import {useAuth} from "@providers/AuthProvider";
import {PostService} from "@services/post.service";

const PostsBlock: FC<{ userId: string }> = ({userId}) => {
    const {user} = useAuth()
    const [posts, setPosts] = useState<IPost[]>([])
    const [refetch, setRefetch] = useState<boolean>(false)
    useEffect(() => {
        if (userId) {
            PostService.getUserId(userId)
                .then((data) => setPosts(data.data))
                //.finally(() => setisLoading(false))
        }
    }, [userId, refetch])

    return (
        <>
            {posts?.map((post) => <PostItem post={post} key={post._id} setRefetch={setRefetch} refetch={refetch}
                                            userId={user?._id || ''}/>)}
        </>
    );
}

export default PostsBlock;