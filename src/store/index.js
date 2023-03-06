import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import * as api from "./apiConfig";
import { bestFoodReduser } from "./features/getFoods/getFoodsSlice";

export const store = configureStore({
  reducer: {
    bestFood: bestFoodReduser,
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
