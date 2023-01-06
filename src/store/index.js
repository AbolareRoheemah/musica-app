import { configureStore } from "@reduxjs/toolkit";
import trackReducer from '../features/tracks/trackSlice'

export const store = configureStore({
    reducer: {
        tracks: trackReducer
    }
})