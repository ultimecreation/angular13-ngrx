import { Action, ActionReducer, createReducer, MetaReducer, on } from "@ngrx/store";
import { loadUsers, loadUsersFailure, loadUsersSuccess, RootActions } from "./actions";
import { User } from "../models/User";
import { HttpErrorResponse } from "@angular/common/http";

export const ROOT_FEATURE_KEY = 'root2'
export interface RootState {
    appName: string,
    user: User,
    users: User[],
    isLoading: boolean,
    error?: HttpErrorResponse | Error | string
}
export interface State {
    readonly [ROOT_FEATURE_KEY]: RootState
}

function log(reducer: ActionReducer<State>): ActionReducer<State> {
    return (state, action) => {
        const currentState = reducer(state, action)
        // console.groupCollapsed(action.type)
        // console.log("Etat precedent:", state)
        // console.log("Etat suivant:", currentState)
        // console.groupEnd()
        return currentState
    }
}
export const metaReducers: MetaReducer[] = [log]


const initialState: RootState = {
    appName: 'ngrx',
    user: {
        username: '',
        isAdmin: false
    },
    users: [],
    isLoading: false,
    error: ''
}
export const rootReducer = createReducer<RootState, Action>(
    initialState,
    on(RootActions.initApp, (state: RootState) => {
        return {
            ...state,
            user: {
                ...state.user,
                isAdmin: true
            }
        }
    }),
    on(RootActions.changeusername, (state: RootState, props) => {
        return {
            ...state,
            user: {
                ...state.user,
                username: props.username
            }
        }
    }),
    on(loadUsers, (state: RootState) => {
        return {
            ...state,
            isLoading: true

        }
    })
    ,
    on(loadUsersSuccess, (state: RootState, props) => {
        return {
            ...state,
            users: props.users,
            isLoading: false
        }
    })
    ,
    on(loadUsersFailure, (state: RootState, props) => {
        return {
            ...state,
            users: [],
            isLoading: false,
            error: props.error
        }
    })
)