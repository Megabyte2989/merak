import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchSectors = createAsyncThunk('sectors/fetchSectors',async(_,thunkAPI)=>{
    try {
        const response = await axios.get('/api/sectors');
        return response.data
    } catch (error) {
        const message = error.response?.data?.message || error.message || 'Failed to fetch sectors';
        return thunkAPI.rejectWithValue(message);
        }
})

const sectorsSlice = createSlice({
    name:'sectors',
    initialState:{
        sectorsData:[],
        status : 'idle',
        error:null
    },
    reducers:{},
    extraReducers:builder=>{
        builder
        .addCase(fetchSectors.fulfilled, (state,action)=>{
            state.status = 'Fulfilled'
            state.sectorsData = action.payload
            state.error = null
        })
        .addCase(fetchSectors.pending, (state)=>{
            state.status = 'Loading'
            state.error = null
        })
        .addCase(fetchSectors.rejected, (state,action)=>{
            state.status='Failed'
            state.error = action.payload
        })
    }
})

export default sectorsSlice.reducer