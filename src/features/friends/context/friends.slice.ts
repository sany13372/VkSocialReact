import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IUsersSliceState} from "@features/users/context/types";
import {IUser} from "@context/user/user.types";

const initialState:IUsersSliceState  = {
    users: [],
    refetch:false,
    loading:true
};

const friendsSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setFriends(state, action: PayloadAction<IUser[]>) {
            state.users = action.payload;
        },
    },
});

export const usersReducer = friendsSlice.reducer;
export const usersActions = friendsSlice.actions;

