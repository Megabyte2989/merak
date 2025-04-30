import { createSlice } from "@reduxjs/toolkit";
import sectors from "../../mocks/sectors";

const sectorsSlice = createSlice({
    name: 'sectors',
    initialState: {
        sectorsData: sectors,
        status: 'Fulfilled',
        error: null
    },
    reducers: {}
});

export default sectorsSlice.reducer;
