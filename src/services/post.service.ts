import {axiosClassic} from "@api/interceptor";
import {getPostUrl} from "@utils/api/api.configs";

export interface PostDto{
    user:any
    description:string
    image?:string
}
export const PostService = {
    async create(dto:PostDto) {
        return axiosClassic.post(getPostUrl(''),dto)
    },
    async getById(id: string) {
        return axiosClassic.get(getPostUrl(`/${id}`))
    },
    async getUserId(id: string) {
        return axiosClassic.get(getPostUrl(`/user/${id}`))
    },
    async getAll() {
        return axiosClassic.get(getPostUrl(``))
    }
}