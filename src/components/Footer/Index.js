import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import './footer.css'

export default function Index({ newImage}) {
  // const [image, setImage] = useState(newImage || 'footer-img.png');
  // if (newImage) {
  //   setImage(newImage)
  // }
  const image = newImage || 'slide1.png'
  const prevTrack = useSelector(state => state.tracks.details.name)
  return (
    <>
    { prevTrack !== undefined &&
      <div className='footer-ctn'>
       <div className="footer-avatar-ctn">
            <div className="imgery">
            <img src={"../../assets/images/" + image} alt="" className="foot-avatar" />
            </div>
            <div className="foot-avatar-text">
                <p>Season in</p>
                <p>James</p>
            </div>
        </div>
        <div className="footer-controls-ctn">
            <div className="footer-controls">
            <img src="../../assets/images/shuffle.svg" alt="" />
            <img src="../../assets/images/previous.svg" alt="" />
            <img src="../../assets/images/play-btn.svg" alt="" />
            <img src="../../assets/images/next.svg" alt="" />
            <img src="../../assets/images/repeate-one.svg" alt="" />
            </div>
            <div className="progress-ctn">
            <img src="../../assets/images/progress.svg" alt="" />
            </div>
        </div>
        <div className="volume-ctn">
            <img src="../../assets/images/volume-high.svg" alt="" />
            <img src="../../assets/images/vol-indicator.svg" alt="" />
        </div>
    </div>
  }
  </>
  )
}
