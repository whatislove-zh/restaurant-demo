import { createSlice } from "@reduxjs/toolkit";

const user = localStorage.getItem("user");

const initialState = () => {
  if (user) {
    return JSON.parse(user);
  } else {
    return {
      email: null,
      token: null,
      id: null,
    };
  }
};

const userSlice = createSlice({
  name: "@@user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    removeUser: (state) => {
      state.email = null;
      state.token = null;
      state.id = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export const userReducer = userSlice.reducer;

//selectors

export const userInfo = (state) => ({
  email: state.user.email,
  isAuth: !!state.user.email,
});
