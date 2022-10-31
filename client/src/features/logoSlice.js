import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  showLogo: true,
};

export const logoSlice = createSlice({
  name: "logo",
  initialState: { value: initialStateValue },
  reducers: {
    toggleLogo: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { toggleLogo } = logoSlice.actions;
export const getLogoState = (state) => state.logo.value.showLogo;
export default logoSlice.reducer;
