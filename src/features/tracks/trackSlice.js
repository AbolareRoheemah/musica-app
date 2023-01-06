import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    play: false,
    pause: true,
    name: '',
    image: '',
    duration: ''
}

export const trackSlice = createSlice({
    name: 'track',
    initialState,
    reducers: {
        player: (state, action) => {
            state.play = action.payload
        },
        pauser: (state, action) => {
            state.pause = action.payload
        },
        namer: (state, action) => {
            state.name = action.payload
        },
        imager: (state, action) => {
            state.image = action.payload
        },
        durationer: (state, action) => {
            state.duration = action.payload
        },
    }
})

export const { player, pauser, namer, imager, durationer } = trackSlice.actions

export default trackSlice.reducer