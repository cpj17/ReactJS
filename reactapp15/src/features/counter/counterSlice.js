import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 1,
    modiCount: 5,
    arr: {
        arrVal1: "arr value 11",
        arrVal2: "arr value 2"
    }
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increament: state => {
            state.count += 1
            state.modiCount += state.count
        },
        decreament: state => {
            state.count -= 1
            state.modiCount -= state.count
        },
        increamentByValue: (state, actions) => {
            state.count += actions.payload
            state.modiCount += actions.payload
        }
    }
})

export const {increament, decreament, increamentByValue} = counterSlice.actions

export default counterSlice.reducer