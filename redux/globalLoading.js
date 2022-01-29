import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false
}

export const globalLoadingSlice = createSlice({
    name: 'globalLoading',
    initialState,
    reducers: {
        changeState: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {changeState} = globalLoadingSlice.actions

export default globalLoadingSlice.reducer