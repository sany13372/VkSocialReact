import {combineReducers} from "redux";
import {api} from "@context/api/api";
import {dialogReducer} from "@features/dialogs/context/dialog/dialog.slice";
import {profileReducer} from "@features/profile/context/profile.slice";
import {usersReducer} from "@features/users/context/users.slice";
import {userReducer} from "@features/user/context/user.slice";


export const reducers = combineReducers({
    dialog: dialogReducer,
    profile:profileReducer,
    users:usersReducer,
    user:userReducer,
    [api.reducerPath]:api.reducer
})
