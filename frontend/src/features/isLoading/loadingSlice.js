import { createSlice } from "@reduxjs/toolkit";

export const loadingSlice = createSlice({
  name: "loading",
  initialState: false,
  reducers: {
    setIsLoading: (state, action) => action.payload,
  },
});

export const { setIsLoading } = loadingSlice.actions;
export const loadingState = (state) => state.loading;
export default loadingSlice.reducer;
