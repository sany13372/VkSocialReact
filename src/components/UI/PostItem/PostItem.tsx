import {FC, useEffect, useState} from 'react';
import {IPost} from "@features/profile/context/types";
import {convertMongoDate} from "@utils/api/converDate";
import styles from './PostItem.module.scss'
import {BiLike} from 'react-icons/bi'
import {LikeService} from "@services/like.service";
import notImg from '@assets/noAvatar.jpg'
import {IUser} from "@context/user/user.types";
import {UserService} from "@services/user.service";

interface IPostItem {
    post: IPost,
    setRefetch: any,
    refetch: boolean,
    userId: string
}

const PostItem: FC<IPostItem> = ({post, refetch, setRefetch, userId}) => {
    const [isLike, setIsLike] = useState<boolean>(false)
    const [countLike, setCountLike] = useState<number>(0)
    const dtoLike = {postId: post._id, userId: userId ? userId : ''}
    const [user, setUser] = useState<IUser>({} as IUser)
    const handleLike = () => {
        if (isLike) {
            LikeService.deleted(dtoLike)
                .then(() => setRefetch(!refetch))
        } else {
            LikeService.create(dtoLike)
                .then(() => setRefetch(!refetch))
        }
    }
    console.log(post)

    useEffect(() => {
        UserService.getById(post.user)
            .then((data) => setUser(data.data))
        LikeService.count(post._id)
            .then((data) => setCountLike(data.data))
        LikeService.check(dtoLike)
            .then((data) => setIsLike(data.data))
    }, [post])

    return (
        <div className={styles.item}>
            <div className={styles.avatar}>
                <img src={user.avatar || notImg} alt="Картинка"/>
                <div>{user?.name} {user?.lastName}</div>
                <div>{convertMongoDate(post.createdAt)}</div>
            </div>
            {post.image &&
                <div className={styles.img}>
                    <img className={styles.img} src={post.image}/>
                </div>
            }
            <p>
                {post.description}
            </p>
            <div>
                <BiLike onClick={() => handleLike()} size={20} color={isLike ? 'red' : ''} className={styles.like}/>
                {countLike}
            </div>
        </div>
    );
}

export default PostItem;