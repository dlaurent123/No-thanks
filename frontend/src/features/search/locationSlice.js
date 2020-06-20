import {createSlice} from '@reduxjs/toolkit'

export const locationSlice = (createSlice({
    name: "location",
    initalState:"",
    reducers: {
        receiveLocation: (state, action)=> action.payload
    }
}))

export const {receiveLocation} = locationSlice.actions
export default locationSlice.reducer