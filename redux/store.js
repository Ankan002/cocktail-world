import { configureStore } from "@reduxjs/toolkit";
import drinksReducer from './drinks'
import globalLoadingReducer from "./globalLoading";

export const store = configureStore({
    reducer: {
        drinks: drinksReducer,
        globalLoading: globalLoadingReducer
    }
})