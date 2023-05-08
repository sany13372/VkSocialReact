import {axiosClassic} from "@api/interceptor";
import {getLikeUrl} from "@utils/api/api.configs";

export interface ILikeDto {
    userId: string,
    postId: string
}

export const LikeService = {
    async create(dto: ILikeDto) {
        return axiosClassic.post(getLikeUrl('/create'), dto)
    },
    async count(id:string) {
        return axiosClassic.get(getLikeUrl(`/count/${id}`))
    },
    async check(dto: ILikeDto) {
        return axiosClassic.post(getLikeUrl(`/check`), dto)
    },
    async deleted(dto: ILikeDto) {
        return axiosClassic.post(getLikeUrl('/deleted'), dto)
    },

}