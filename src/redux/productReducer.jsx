import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: "product",
    initialState :{
        products : []
    }
})

export default productSlice.reducer