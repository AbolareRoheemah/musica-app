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
            desc: 'Mishary Rashid Al-Afasy',
            name: 'An-Naba',
            url: '../../assets/audio/naba.mp3',
            playing: false,
            paused: true
        },
        {
            image: 'slide6.png',
            desc: 'Noreen Muhammad Siddiq',
            name: 'The letter Saad',
            url: '../../assets/audio/saad.mp3',
            playing: false,
            paused: true
        },
        {
            image: 'slide2.png',
            desc: 'Mishary Rashid Al-Afasy',
            name: 'Al-\'Alaa',
            url: "../../assets/audio/a'la.mp3",
            playing: false,
            paused: true
        },
        {
            image: 'slide5.png',
            desc: 'Noreen Muhammad Siddiq',
            name: 'Al-Israa',
            url: '../../assets/audio/israa.mp3',
            playing: false,
            paused: true
        },
        {
            image: 'slide3.png',
            desc: 'Mishary Rashid Al-Afasy',
            name: 'Al-Abasa',
            url: '../../assets/audio/abasa.mp3',
            playing: false,
            paused: true
        },
        {
            image: 'slide4.png',
            desc: 'Mishary Rashid Al-Afasy',
            name: 'Al-Fajr',
            url: '../../assets/audio/fajr.mp3',
            playing: false,
            paused: true
        },
        {
            image: 'slide1.png',
            desc: 'Noreen Muhammad Siddiq',
            name: 'Az-Zumar',
            url: '../../assets/audio/zumar.mp3',
            playing: false,
            paused: true
        }
    ]
}

export const trackSlice = createSlice({
    name: 'track',
    initialState,
    reducers: {
        player: (state, action) => {
            // state.play = action.payload
            state.songs.map(song => {
                // return song.name === action.payload.name ? song.play = true : song.play = false && song.pause = true
                if(song.name === action.payload.name && !song.playing) {
                    song.playing = true
                    song.paused = false
                    // state.details = song
                    new Audio(song.url).play()
                    console.log('playme', song)
                } else {
                    song.playing = false
                    song.paused = true
                    new Audio(song.url).pause()
                    console.log('pauseme', song)
                }
                
            })
        },
        pauser: (state, action) => {
            state.pause = action.payload
        },
        setDetails: (state, action) => {
            console.log('song', action.payload)
            state.details = action.payload
            state.songs.forEach((song, index) => {
                if(song.name === action.payload.name) {
                    console.log('song inde', song)
                    state.songs[index] = action.payload
                }
            })
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