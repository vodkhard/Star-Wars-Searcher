import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./search";
import detailsReducer from "./details";
import thunkMiddleware from "redux-thunk";

const store = configureStore({
  reducer: {
    search: searchReducer,
    details: detailsReducer,
  },
  middleware: [thunkMiddleware],
});

export default store;
