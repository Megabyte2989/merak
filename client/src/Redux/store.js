import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from './Slices/categroiesSlice'
import coursesReducer from './Slices/coursesSlice'
import sectorsReducer from './Slices/sectorsSlice'

export const store = configureStore({
    reducer:{
        categories:categoriesReducer,
        sectors:sectorsReducer,
        courses:coursesReducer,
    },
})