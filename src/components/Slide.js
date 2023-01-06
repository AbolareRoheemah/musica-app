import React from 'react'

export default function Slide({title, info, receiveFunc}) {
    const play = (data) => {
        new Audio(data.url).play()
        receiveFunc(data)
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
