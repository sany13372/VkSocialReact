import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IDialogSliceState, IDialog} from './types';

const initialState: IDialogSliceState = {
    dialogActive:null,
    dialog:'',
    dialogs: [],
    refetch:false,
};

const dialogSlice = createSlice({
    name: 'dialog',
    initialState,
    reducers: {
        setDialog(state, action: PayloadAction<string>) {
            state.dialog = action.payload;
        },
        setDialogActive(state, action: PayloadAction<IDialog | null>) {
            state.dialogActive = action.payload;
        },
        setDialogs(state, action: PayloadAction<IDialog[]>) {
            state.dialogs = action.payload;
        },
        setRefetch(state, action: PayloadAction<boolean>) {
            state.refetch = action.payload;
        },
    },
});

export const dialogReducer = dialogSlice.reducer;
export const dialogActions = dialogSlice.actions;

