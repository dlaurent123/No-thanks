import {createSlice} from '@reduxjs/toolkit'


export const searchSlice = createSlice({
    name: "search",
    initialState:[],
    reducers: {
        recieveSearch: (state, action)=>{
            return action.payload
        }
    }
})




export const {recieveSearch} = searchSlice.actions
export default searchSlice.reducer