export interface IProfileSliceState {
    posts: IPost[],
    refetchProfile: boolean,
    loadingProfile:boolean
}

export interface IPost {
    _id:string
    user: any
    description: string
    images?: string[]
    createdAt: string,
    updatedAt: string,
}