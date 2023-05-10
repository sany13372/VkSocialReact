export interface IProfileSliceState {
    posts: IPost[],
    refetchProfile: boolean,
    loadingProfile:boolean
}

export interface IPost {
    _id:string
    user: any
    description: string
    image?: string
    createdAt: string,
    updatedAt: string,
}