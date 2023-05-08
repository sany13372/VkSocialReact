import {axiosClassic} from "@api/interceptor";

export const DialogService = {
    async checkMessage(id:number){
        return axiosClassic.get(`/dialog/check/${id}`)
    }
}