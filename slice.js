import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    counter: 0
}

const sliceName = createSlice({
    name: 'sliceName',
    initialState,
    reducers: {
        counterIncrement: (state, action)=> {
            state.counter += action.payload
        }
    }
})


export const {counterIncrement} = sliceName.actions

export const counterSelect = (state) => state.counter

export default sliceName