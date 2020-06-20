import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import searchReducer from "../features/search/searchSlice"
// import locationReducer from "../features/search/locationSlice"
const reducer = {
  search: searchReducer
  // location: locationReducer
}
export default configureStore({
  reducer,
  middleware: [...getDefaultMiddleware()]

});

