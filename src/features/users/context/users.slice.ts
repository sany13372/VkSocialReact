import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IUsersSliceState} from "@features/users/context/types";
import {IUser} from "@context/user/user.types";

const initialState:IUsersSliceState  = {
    users: [],
    refetch:false,
    loading:true
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers(state, action: PayloadAction<IUser[]>) {
            state.users = action.payload;
        },
        setRefetch(state, action: PayloadAction<boolean>) {
            state.refetch = action.payload;
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
    },
});

export const usersReducer = usersSlice.reducer;
export const usersActions = usersSlice.actions;

