import {createSlice} from '@reduxjs/toolkit'

export const locationSlice = (createSlice({
    name: "location",
    initalState:"",
    reducers: {
        recieveLocation: (state, action)=> action.payload
    }
}))

export const {recieveLocation} = locationSlice.actions
export default locationSlice.reducer