import {dialogActions} from '@features/dialogs/context/dialog/dialog.slice'
import {profileActions} from "@features/profile/context/profile.slice";
import {usersActions} from "@features/users/context/users.slice";
import {userActions} from "@features/user/context/user.slice";
export const allActions = {
    ...dialogActions,
    ...profileActions,
    ...usersActions,
    ...userActions,
}