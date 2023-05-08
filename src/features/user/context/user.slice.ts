import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IPost} from "@features/profile/context/types";

interface IUserSliceState {
    posts: IPost[],
    refetchUser:boolean,
    loadingUser:boolean
}

const initialState:IUserSliceState  = {
    posts: [],
    refetchUser:false,
    loadingUser:true
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setPostsUser(state, action: PayloadAction<IPost[]>) {
            state.posts = action.payload;
        },
        setRefetchUser(state, action: PayloadAction<boolean>) {
            state.refetchUser = action.payload;
        },
        setLoadingUser(state, action: PayloadAction<boolean>) {
            state.loadingUser = action.payload;
        },
    },
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;

