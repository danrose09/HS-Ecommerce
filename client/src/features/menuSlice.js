import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  showMenu: false,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState: { value: initialStateValue },
  reducers: {
    toggleMenu: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { toggleMenu } = menuSlice.actions;
export const getMenuState = (state) => state.menu.value.showMenu;
export default menuSlice.reducer;
