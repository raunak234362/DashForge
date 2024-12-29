import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: false,
  userData: {},
};

const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    login: (state, action) => {
      // state.token = action.payload.token;
      state.userData = action.payload;
      sessionStorage.setItem("token", action.payload.token);
    },
    setUserData: (state, action) => {
      state.token = action.payload.token;
      state.userData = action.payload;
    },
    logout(state) {
      state.token = false;
      state.userData = {};
    },
    // register(state, action) {
    //     state.token = action.payload.token;
    //     state.userData = action.payload.userData;
    // },
  },
});

export const { login, logout, setUserData } = userSlice.actions;
export default userSlice.reducer;
