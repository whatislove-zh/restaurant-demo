import { createSlice } from "@reduxjs/toolkit";


const cart = localStorage.getItem("cart");

const initialState = () => {
  if (cart) {
    return JSON.parse(cart);
  } else {
    return {
      cartList: [],
    };
  }
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
      localStorage.setItem("cart", JSON.stringify(state));
    },

    removeItem(state, action) {
        state.cartList = state.cartList.filter(item => item.id !== action.payload);
        localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addProduct, removeItem } = shopingCartSlice.actions;
export const shopingCartReducer = shopingCartSlice.reducer;
