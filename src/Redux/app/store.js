import { configureStore } from "@reduxjs/toolkit";
import { ApiSlice } from "../Api/ApiSlice";
import AuthReducer from "../Auth/AuthSlice";

export const store = configureStore({
  reducer: {
    [ApiSlice.reducerPath]: ApiSlice.reducer,
    Auth: AuthReducer,
  },
  
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(ApiSlice.middleware),
});

