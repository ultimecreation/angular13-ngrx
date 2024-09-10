import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ROOT_FEATURE_KEY, RootState, State } from "./reducer";

// const selectRoot = (state: State) => state.root
const selectRoot = createFeatureSelector<RootState>(ROOT_FEATURE_KEY)

export const getUser = createSelector(
    selectRoot,
    (state: RootState) => state.user
)

export const getUsers = createSelector(
    selectRoot,
    (state: RootState) => state.users
)

export const getIsLoaded = createSelector(
    selectRoot,
    (state: RootState) => state.isLoading
)
export const getError = createSelector(
    selectRoot,
    (state: RootState) => state.error
)