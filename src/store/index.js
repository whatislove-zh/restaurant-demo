import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import * as api from "./apiConfig";
import { bestFoodReducer } from "./features/getFoods/getFoodsSlice";
import { modalReducer } from "./features/modalShow/modalSlice";
import { shoppingCartReducer } from "./features/shopingCart/shopingCartSlice";
import { controlsReducer } from "./features/sortingRules/rulesSlice";
import { userReducer } from "./features/user/userSlice";

export const store = configureStore({
  reducer: {
    bestFood: bestFoodReducer,
    shoppingCart: shoppingCartReducer,
    controls: controlsReducer,
    user: userReducer,
    modal: modalReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
      serializableCheck: false,
    }),
});
