import React from 'react'
import { useDispatch } from 'react-redux'
import { setDetails, player } from '../features/tracks/trackSlice'

export default function Slide({title, info}) {
    const dispatch = useDispatch()
    const play = (data) => {
        dispatch(setDetails(data))
        dispatch(player(data))
        // if (data.playing) {
        //     // new Audio(data.url).pause()
        //     const sprd = {...data}
        //     // sprd.playing = true
        //     // sprd.paused = false
        //     dispatch(setDetails(sprd))
        //     dispatch(player(sprd))
        // } else {
        //     // new Audio(data.url).play()
        //     const sprd = {...data}
        //     // sprd.playing = true
        //     // sprd.paused = false
        //     dispatch(setDetails(sprd))
        //     dispatch(player(sprd))
        // }
        
    }
  return (
    <div className="slide-ctn">
        <p className="slide-title">{title}</p>
        <div className="sliding-tile-ctn">
            {info.map((el, index) => {
                return (
                    <div className="slide" key={index} onClick={() => play(el)}>
                        <div className="slide-img">
                            <img src={"../../assets/images/" + el.image} alt="" />
                        </div>
                        <p className="slide-img-label">{el.desc}</p>
                        <p className="slide-artiste">{el.name}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
