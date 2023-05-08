import {Dispatch, FC, SetStateAction} from 'react';
import styles from './SearchLine.module.scss'

interface ISearchLine {
    value: string
    setValue: Dispatch<SetStateAction<string>>
    placeholder: string
}

const SearchLine: FC<ISearchLine> = ({placeholder, setValue, value}) => {
    return (
        <div className={styles.line}>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder={placeholder}/>
        </div>
    );
}

export default SearchLine;