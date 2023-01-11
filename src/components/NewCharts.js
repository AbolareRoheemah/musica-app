import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function NewCharts({info}) {
    const navigate = useNavigate()
    const [fav, setFav] = useState(false)
    const handleFavourite = (e) => {
        e.stopPropagation()
        e.nativeEvent.stopImmediatePropagation()
        setFav(!fav)
    }

  return (
    <div className="charts" onClick={() => {navigate("/album")}}>
        <div className="chart-img">
            <img src={"../../assets/images/" + info.image} alt="" />
        </div>
        <div className="chart-text-ctn">
            <p className="chart-song-name">{info.songName}</p>
            <p className="chart-artiste">{info.artiste}</p>
            <p className="chart-duration">{info.duration}</p>
        </div>
        <div className="chart-fav-ctn" onClick={(e) => handleFavourite(e)}>
        <svg width="18" height="18" viewBox="0 0 18 18" fill={fav ? '#E5524A': 'none'} xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M2.15388 8.69874C1.34913 6.18624 2.28963 3.31449 4.92738 2.46474C6.31488 2.01699 7.84638 2.28099 8.99988 3.14874C10.0911 2.30499 11.6789 2.01999 13.0649 2.46474C15.7026 3.31449 16.6491 6.18624 15.8451 8.69874C14.5926 12.6812 8.99988 15.7487 8.99988 15.7487C8.99988 15.7487 3.44838 12.7277 2.15388 8.69874Z" stroke="#FACD66" strokeWidth="0.5625" strokeLinecap="round" strokeLinejoin="round"/>
            <path opacity="0.4" d="M12 5.02501C12.8025 5.28451 13.3695 6.00076 13.4377 6.84151" stroke="#FACD66" strokeWidth="0.5625" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        </div>
    </div>
  )
}
