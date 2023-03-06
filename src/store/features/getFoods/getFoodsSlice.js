import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadFood = createAsyncThunk(
  "@@food/best",
  (food, { extra: { client, api } }) => {
    return client.get(api[food]);
  }
);

const initialState = {
  status: "idle",
  list: [],
  error: "null",
};

const getFoodSlice = createSlice({
  name: "@@food",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadFood.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loadFood.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error || action.meta.error;
      })
      .addCase(loadFood.fulfilled, (state, action) => {
        state.status = "received";
        state.list = action.payload.data;
        state.error = null;
      });
  },
});

export const bestFoodReduser = getFoodSlice.reducer;

//selectors
export const selectBestFoodInfo = (state) => ({
  status: state.bestFood.status,
  error: state.bestFood.error,
});

export const sortFood = (state, { sortRules = null, search = "" }) => {
  if (!sortRules || sortRules === "review") {
    return state.bestFood.list.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  } else if (sortRules === "low") {
    return state.bestFood.list
      .slice()
      .sort((a, b) => a.price - b.price)
      .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
  } else if (sortRules === "hight") {
    return state.bestFood.list
      .slice()
      .sort((a, b) => b.price - a.price)
      .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
  }
};
