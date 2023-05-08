import {axiosClassic} from "@api/interceptor";
import {getUsersUrl} from "@utils/api/api.configs";

export interface IToggleFriend{
    userId:string,
    friendId:string
}
export const UserService = {

    async getById(id: string) {
        return axiosClassic.get(getUsersUrl(`/${id}`))
    },
    async getFriends(id: string) {
        return axiosClassic.get(getUsersUrl(`/user/${id}`))
    },
    async getAll() {
        return axiosClassic.get(getUsersUrl(``))
    },
    async toggleFriend(dto:IToggleFriend){
        return axiosClassic.post(getUsersUrl('/friend'),dto)
    }
}