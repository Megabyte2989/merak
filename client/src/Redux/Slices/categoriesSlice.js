import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchCategories = createAsyncThunk('categories/fetchCategories',async(_,thunkAPI)=>{
    try {
        const response = await axios.get('/api/categories');
        return response.data
    } catch (error) {
        const message = error.response?.data?.message || error.message || 'Failed to fetch categories';
        return thunkAPI.rejectWithValue(message);
        }
})

const categoriesSlice = createSlice({
    name:'categories',
    initialState:{
        categoriesData:[],
        status : 'idle',
        error:null
    },
    reducers:{},
    extraReducers:builder=>{
        builder
        .addCase(fetchCategories.fulfilled, (state,action)=>{
            state.status = 'Fulfilled'
            state.categoriesData = action.payload
            state.error = null
        })
        .addCase(fetchCategories.pending, (state)=>{
            state.status = 'Loading'
            state.error = null
        })
        .addCase(fetchCategories.rejected, (state,action)=>{
            state.status='Failed'
            state.error = action.payload
        })
    }
})

export default categoriesSlice.reducer