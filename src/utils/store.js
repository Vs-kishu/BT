import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./toggleSlice";
import searchSlice from "./searchCache";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: {
    toggle: toggleSlice,
    search: searchSlice,
    chat: chatSlice,
  },
});

export default store;
