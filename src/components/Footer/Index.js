import React from 'react';
import './footer.css'

export default function Index() {
  return (
    <div className='footer-ctn'>
       <div className="footer-avatar-ctn">
            <img src="../../assets/images/footer-img.png" alt="" className="foot-avatar" />
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
  )
}
