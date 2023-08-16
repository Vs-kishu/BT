const { createSlice } = require("@reduxjs/toolkit");

const toggleSlice = createSlice({
  name: "toggle",
  initialState: {
    isOpen: false,
  },
  reducers: {
    toggle: (state) => {
      state.isOpen = !state.isOpen;
    },
    closeSideBar: (state) => {
      state.isOpen = false;
    },
  },
});
export const { toggle, closeSideBar } = toggleSlice.actions;
export default toggleSlice.reducer;
