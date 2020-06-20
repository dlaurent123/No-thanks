import {createSlice} from '@reduxjs/toolkit'


export const searchSlice = createSlice({
    name: "search",
    initialState:[],
    reducers: {
        receiveSearch: (state, action)=>{
            return action.payload
        }
    }
})




export const {receiveSearch} = searchSlice.actions
export default searchSlice.reducer