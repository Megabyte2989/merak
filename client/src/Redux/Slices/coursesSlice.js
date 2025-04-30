import { createSlice } from "@reduxjs/toolkit";
import courses from "../../mocks/courses";

const coursesSlice = createSlice({
    name: 'courses',
    initialState: {
        coursesData: courses,
        status: 'Fulfilled',
        error: null
    },
    reducers: {}
});

export default coursesSlice.reducer;
