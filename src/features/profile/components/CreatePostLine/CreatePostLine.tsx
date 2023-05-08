import {FC, useState} from 'react';
import {BiFile} from 'react-icons/bi'
import styles from './CreatePostLine.module.scss'
import {PostService} from "@services/post.service";
import {useAuth} from "@providers/AuthProvider";
import {useActions} from "@hooks/useActions";
import {useTypedSelector} from "@hooks/useTypedSelector";
import {useUpload} from "@hooks/useUpload";

const CreatePostLine: FC = () => {
    const [description, setDescription] = useState<string>('')
    const [selectFile, setSelectFile] = useState<boolean>(false)
    const {user} = useAuth()
    const {setRefetchProfile} = useActions()
    const {refetchProfile} = useTypedSelector((store) => store.profile)
    const change = () => {

    }
    const {uploadImage} = useUpload(change, 'posts', selectFile)
    const creatPost = async () => {
        // await PostService.create({description: description, user: user?._id, image: ''})
        //     .then(() => setRefetchProfile(!refetchProfile))
        setSelectFile(!selectFile)
        setDescription('')
    }

    return (
        <div className={styles.item}>
            <input type="text" placeholder={'Название поста'} className={styles.field} value={description}
                   onChange={(e) => setDescription(e.target.value)}/>
            <BiFile size={20} className={styles.icon}/>
            <input type="file" className={styles.file} onChange={uploadImage}/>
            <div onClick={() => creatPost()} className={styles.button}>
                Опубликовать
            </div>
        </div>
    );
}

export default CreatePostLine;
