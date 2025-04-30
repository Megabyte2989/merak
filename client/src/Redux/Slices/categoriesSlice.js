import { createSlice } from "@reduxjs/toolkit";
import categories from "../../mocks/categories";

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        categoriesData: categories,
        status: 'Fulfilled',
        error: null
    },
    reducers: {}
});

export default categoriesSlice.reducer;
