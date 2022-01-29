import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    value: []
}

export const drinksSlice = createSlice({
    name: 'drinks',
    initialState,
    reducers: {
        updateDrinks: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {updateDrinks} = drinksSlice.actions

export default drinksSlice.reducer