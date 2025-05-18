import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchCourses = createAsyncThunk('courses/fetchCourses',async(_,thunkAPI)=>{
    try {
        const response = await axios.get('https://newhorizonbackend.vercel.app/api/courses');
        return response.data
    } catch (error) {
        const message = error.response?.data?.message || error.message || 'Failed to fetch courses';
        return thunkAPI.rejectWithValue(message);
        }
})

const coursesSlice = createSlice({
    name:'courses',
    initialState:{
        coursesData:[],
        status : 'idle',
        error:null
    },
    reducers:{},
    extraReducers:builder=>{
        builder
        .addCase(fetchCourses.fulfilled, (state,action)=>{
            state.status = 'Fulfilled'
            state.coursesData = action.payload
            state.error = null
        })
        .addCase(fetchCourses.pending, (state)=>{
            state.status = 'Loading'
            state.error = null
        })
        .addCase(fetchCourses.rejected, (state,action)=>{
            state.status='Failed'
            state.error = action.payload
        })
    }
})

export default coursesSlice.reducer