import { createFeatureSelector } from "@ngrx/store";
import { ROOT_FEATURE_KEY, RootState } from "./reducer";



const selectRoot = createFeatureSelector<RootState>(ROOT_FEATURE_KEY)