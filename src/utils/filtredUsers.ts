import {IUser} from "@context/user/user.types";

export const filterUsers = (arr1: IUser[], arr2: string[]) => {

    const s = new Set(arr2);
    const newArr = arr1.filter(e => !s.has(e._id))

    return newArr
}