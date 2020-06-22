import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../features/search/searchSlice";
import modal from "../features/modal/modalSlice";
import loading from "../features/isLoading/loadingSlice";
import bussines from "../features/bussines/bussinesSlice";
// import logger from "redux-logger";

const reducer = {
  search: searchReducer,
  modal,
  loading,
  bussines,
};

export default configureStore({
  reducer,
  // middleware: [...getDefaultMiddleware(), logger],
});
