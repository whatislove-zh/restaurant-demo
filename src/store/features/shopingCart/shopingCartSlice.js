import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: [],
};

const shopingCartSlice = createSlice({
  name: "@@shoping-cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const newItemId = action.payload.id;
      const existingItem = state.cartList.find((item) => item.id === newItemId);

      if (!existingItem) {
        state.cartList.push(action.payload);
      }
    },

    removeItem(state, action) {
        state.cartList = state.cartList.filter(item => item.id !== action.payload);
    },
  },
});

export const { addProduct, removeItem } = shopingCartSlice.actions;
export const shopingCartReducer = shopingCartSlice.reducer;
