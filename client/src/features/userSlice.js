import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  name: "",
  username: "",
  email: "",
  password: "",
  confPassword: "",
};

export const userSlice = createSlice({
  name: "userInfo",
  initialState: {
    value: initialStateValue,
  },
  reducers: {
    signIn: (state, action) => {
      state.value = action.payload;
    },
    signOut: (state) => {
      state.value = initialStateValue;
    },
    signUp: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { signIn, signOut, signUp } = userSlice.actions;
export default userSlice.reducer;
