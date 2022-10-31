import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import menuReducer from "../features/menuSlice";
import logoReducer from "../features/logoSlice";

const store = configureStore({
  reducer: {
    userInfo: userReducer,
    menu: menuReducer,
    logo: logoReducer,
  },
});

export default store;
