import { createSlice } from "@reduxjs/toolkit";
export const boolSlice = createSlice({
    initialState: "true",
    name: "bool",
    reducers: {
        change: (state)=> state==="true"? "false" : "true"  // actions
    }
});
export const { change } = boolSlice.actions;
export default boolSlice.reducer;