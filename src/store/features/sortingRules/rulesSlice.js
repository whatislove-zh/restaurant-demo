import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    rules:"",
    search:""
}

const controlsSlice = createSlice({
    name:"rules",
    initialState,
    reducers:{
        setRules: (state, action) => {state.rules = action.payload},
        changeSearch: (state, action) => {state.search = action.payload}
    }
})

export const {setRules, changeSearch} = controlsSlice.actions
export const controlsReducer = controlsSlice.reducer