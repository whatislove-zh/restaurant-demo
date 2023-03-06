import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import * as api from "./apiConfig";
import { bestFoodReduser } from "./features/getFoods/getFoodsSlice";
import { modalReducer } from "./features/modalShow/modalSlice";
import { shopingCartReducer } from "./features/shopingCart/shopingCartSlice";
import { controlsReducer } from "./features/sortingRules/rulesSlice";
import { userReduser } from "./features/user/userSlice";

export const store = configureStore({
  reducer: {
    bestFood: bestFoodReduser,
    shopingCart: shopingCartReducer,
    controls: controlsReducer,
    user: userReduser,
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
