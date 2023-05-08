import {FC} from 'react';
import Avatar from './Avatar/Avatar'
import UserName from "@features/profile/components/UserName/UserName";
import styles from './Profile.module.scss'
import UserInfo from "@features/profile/components/UserInfo/UserInfo";
import CreatePostLine from './CreatePostLine/CreatePostLine'
import PostTape from './PostTape/PostTape'
import {useAuth} from "@providers/AuthProvider";

const Profile: FC = () => {
    const {user} = useAuth()
    return (
        <div className={styles.blockHeader}>
            {user && <>
                <Avatar user={user}/>
                <UserName user={user}/>
                <UserInfo user={user}/>
                <CreatePostLine />
                <PostTape user={user}/>
            </>}
        </div>
    );
}

export default Profile;