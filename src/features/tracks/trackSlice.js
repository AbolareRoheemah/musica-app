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
            album_img: 'chart1.png',
            desc: 'Mishary Rashid Al-Afasy',
            name: 'An-Naba',
            url: '../../assets/audio/naba.mp3',
            playing: false,
            paused: true,
            favorite: false
        },
        {
            image: 'slide6.png',
            album_img: 'chart2.png',
            desc: 'Noreen Muhammad Siddiq',
            name: 'The letter Saad',
            url: '../../assets/audio/saad.mp3',
            playing: false,
            paused: true,
            favorite: false
        },
        {
            image: 'slide2.png',
            album_img: 'chart3.png',
            desc: 'Mishary Rashid Al-Afasy',
            name: 'Al-\'Alaa',
            url: "../../assets/audio/a'la.mp3",
            playing: false,
            paused: true,
            favorite: false
        },
        {
            image: 'slide5.png',
            desc: 'Noreen Muhammad Siddiq',
            name: 'Al-Israa',
            url: '../../assets/audio/israa.mp3',
            playing: false,
            paused: true,
            favorite: false
        },
        {
            image: 'slide3.png',
            desc: 'Mishary Rashid Al-Afasy',
            name: 'Al-Abasa',
            url: '../../assets/audio/abasa.mp3',
            playing: false,
            paused: true,
            favorite: false
        },
        {
            image: 'slide4.png',
            desc: 'Mishary Rashid Al-Afasy',
            name: 'Al-Fajr',
            url: '../../assets/audio/fajr.mp3',
            playing: false,
            paused: true,
            favorite: false
        },
        {
            image: 'slide1.png',
            desc: 'Noreen Muhammad Siddiq',
            name: 'Az-Zumar',
            url: '../../assets/audio/zumar.mp3',
            playing: false,
            paused: true,
            favorite: false
        }
    ],
    favorites: []
}

export const trackSlice = createSlice({
    name: 'track',
    initialState,
    reducers: {
        player: (state, action) => {
            // state.play = action.payload
            state.songs.map(song => {
                // return song.name === action.payload.name ? song.play = true : song.play = false && song.pause = true
                const audioSong = new Audio(song.url)
                if(song.name === action.payload.name && !song.playing) {

                    console.log('playmegtr', song.playing)
                    song.playing = true
                    song.paused = false
                    audioSong.play()
                    console.log('playme', song)
                } else if(song.name === action.payload.name && song.playing) {
                    song.playing = false
                    song.paused = true
                    audioSong.pause()
                    console.log('pauseme', song)
                }
                
            })
        },
        pauser: (state, action) => {
            state.pause = action.payload
        },
        setDetails: (state, action) => {
            state.details = action.payload
            state.songs.forEach((song, index) => {
                if(song.name === action.payload.name) {
                    state.songs[index] = action.payload
                }
            })
        },
        setFavourite: (state, action) => {
            state.songs.forEach((song, index) => {
                if(song.name === action.payload.name && !song.favorite) {
                    song.favorite = true
                    state.favorites.push(song)
                } else if(song.name === action.payload.name && song.favorite) {
                    console.log('song', song)
                    song.favorite = false
                    state.favorites.splice(index, 1)
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

export const { player, pauser, setDetails, setFavourite, imager, durationer } = trackSlice.actions

export default trackSlice.reducer