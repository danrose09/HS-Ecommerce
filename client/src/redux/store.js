import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import menuReducer from "../features/menuSlice";

const store = configureStore({
  reducer: {
    userInfo: userReducer,
    menu: menuReducer,
  },
});

export default store;
