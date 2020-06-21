import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import searchReducer from "../features/search/searchSlice";
import modalReducer from "../features/modal/modalSlice";
const reducer = {
  search: searchReducer,
  modalReducer,
};
export default configureStore({
  reducer,
  middleware: [...getDefaultMiddleware()],
});
