import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import searchReducer from "../features/search/searchSlice";
import modal from "../features/modal/modalSlice";
import loading from "../features/isLoading/loadingSlice";
import logger from "redux-logger";

const reducer = {
  search: searchReducer,
  modal,
  loading,
};

export default configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), logger],
});
