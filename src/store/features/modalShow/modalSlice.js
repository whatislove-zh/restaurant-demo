import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  display: "none",
};

const modalSlice = createSlice({
  name: "@@modal",
  initialState,
  reducers: {
    setModal: (state, action) => {
      state.display = action.payload;
    },
  },
});

export const { setModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
