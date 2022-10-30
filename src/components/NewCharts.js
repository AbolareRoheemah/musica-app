import React from 'react';
import { useNavigate } from "react-router-dom";

export default function NewCharts({info}) {
    const navigate = useNavigate()

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
        <div className="chart-fav-ctn">
            <img src="../../assets/images/Heart.svg" alt="" />
        </div>
    </div>
  )
}
