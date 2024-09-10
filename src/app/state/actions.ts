import { createAction, createActionGroup, emptyProps, props } from "@ngrx/store";
import { User } from "../models/User";
import { HttpErrorResponse } from '@angular/common/http'

// export const initAction = createAction('[ROOT] Init app')

// export const changeUsername = createAction('[ROOT] ChangeUsername', props<{ username: string }>())
// export const changeIsAdmin = createAction('[ROOT] ChangeIsAdmin', props<{ isAdmin: boolean }>())

export const RootActions = createActionGroup({
    source: 'ROOT',
    events: {
        'Init app': emptyProps(),
        'ChangeUsername': props<{ username: string }>(),
        'ChangeIsAdmin': props<{ isAdmin: boolean }>()
    }
})


export const loadUsers = createAction('[UsersApi] loadUsers')
export const loadUsersSuccess = createAction('[UsersApi] loadUsersSuccess', props<{ users: User[] }>())
export const loadUsersFailure = createAction('[UsersApi] loadUsersFailure', props<{ error: HttpErrorResponse }>())