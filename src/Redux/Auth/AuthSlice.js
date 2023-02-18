import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: undefined,
};

const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      
      state.token = action?.payload;
    },
    userLoggedOut: (state, action) => {
      state.token = undefined;
    },
  },
});


export const { userLoggedIn, userLoggedOut } = AuthSlice.actions;
export default AuthSlice.reducer;
