import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IPost, IProfileSliceState} from "@features/profile/context/types";

const initialState:IProfileSliceState  = {
    posts: [],
    refetchProfile:false,
    loadingProfile:true
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setPosts(state, action: PayloadAction<IPost[]>) {
            state.posts = action.payload;
        },
        setRefetchProfile(state, action: PayloadAction<boolean>) {
            state.refetchProfile = action.payload;
        },
        setLoadingProfile(state, action: PayloadAction<boolean>) {
            state.loadingProfile = action.payload;
        },
    },
});

export const profileReducer = profileSlice.reducer;
export const profileActions = profileSlice.actions;

