import {FC} from 'react';
import {useAuth} from "@providers/AuthProvider";
import PostsBlock from "@features/news/components/PostsBlock/PostsBlock";
import styles from './News.module.scss'

const News: FC = () => {
    const {user} = useAuth()
    return (
        <div className={styles.news}>
            {user?.friends.length ? user?.friends.map((friend) => <PostsBlock key={friend} userId={friend}/>) :
                <h4>Новостей нет</h4>}
        </div>
    );
}

export default News;