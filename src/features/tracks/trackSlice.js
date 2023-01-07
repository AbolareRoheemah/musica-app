import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    play: false,
    pause: true,
    details: {},
    name: '',
    image: '',
    duration: '',
    songs: [
        {
            image: 'slide1.png',
            desc: 'Life in a bubble',
            name: 'The van',
            url: '../../assets/audio/naba.mp3'
        },
        {
            image: 'slide2.png',
            desc: 'Mountain',
            name: 'Krisk'
        },
        {
            image: 'slide3.png',
            desc: 'Limits',
            name: 'John Dillion'
        },
        {
            image: 'slide4.png',
            desc: 'Everything\'s black',
            name: 'Ahmeed'
        },
        {
            image: 'slide5.png',
            desc: 'Cancelled',
            name: 'Eminem'
        },
        {
            image: 'slide6.png',
            desc: 'Nomad',
            name: 'Makrat eli'
        },
        {
            image: 'slide1.png',
            desc: 'Blind',
            name: 'Wiz Khalifa'
        }
    ]
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
        setDetails: (state, action) => {
            state.details = action.payload
        },
        imager: (state, action) => {
            state.image = action.payload
        },
        durationer: (state, action) => {
            state.duration = action.payload
        },
    }
})

export const { player, pauser, setDetails, imager, durationer } = trackSlice.actions

export default trackSlice.reducer