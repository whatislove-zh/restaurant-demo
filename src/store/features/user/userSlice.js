import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email:null,
    token:null,
    id:null
}

const userSlice = createSlice({
    name:"@@user",
    initialState,
    reducers:{
        setUser:(state, action) => {
            state.email = action.payload.email
            state.token = action.payload.token
            state.id = action.payload.id
        },
        removeUser:(state) => {state = initialState}
    }
})

export const {setUser, removeUser} = userSlice.actions
export const userReduser = userSlice.reducer