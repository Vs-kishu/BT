import { createSlice } from "@reduxjs/toolkit";

const searchkeySlice = createSlice({
  name: "search",
  initialState: {
    searchKey: "",
  },
  reducers: {
    search: (state, action) => {
      console.log("here");
      console.log(action.payload);
      state.searchKey = action.payload;
    },
  },
});

export const { search } = searchkeySlice.actions;
export default searchkeySlice.reducer;
