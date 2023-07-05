import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: [],
};

const shoppingCartSlice = createSlice({
  name: "@@shopping-cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.cartList.push(action.payload);
    },

    removeItem: (state, action) => {
      state.cartList = state.cartList.filter(
        (item) => item.id !== action.payload
      );
    },
    clearCart: (state) => {
      state.cartList = [];
    },
  },
});

export const { addProduct, removeItem, clearCart } = shoppingCartSlice.actions;
export const shoppingCartReducer = shoppingCartSlice.reducer;
