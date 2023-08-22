import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./toggleSlice";
import searchSlice from "./searchCache";
import chatSlice from "./chatSlice";
import searchReducer from "./searchSlice";

const store = configureStore({
  reducer: {
    toggle: toggleSlice,
    search: searchSlice,
    chat: chatSlice,
    searchword: searchReducer,
  },
});

export default store;
