import {IUser} from "@context/user/user.types";

export interface IUsersSliceState {
    users: IUser[],
    refetch: boolean,
    loading:boolean
}
