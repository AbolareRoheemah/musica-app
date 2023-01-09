import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './footer.css'
import { player } from '../../features/tracks/trackSlice'

export default function Index() {
  const dispatch = useDispatch()
  const prevTrack = useSelector(state => state.tracks.details)
  const sudoTrack = useSelector(state => state.tracks.songs[0])
  return (
    <>
    { sudoTrack.name !== undefined &&
      <div className='footer-ctn'>
       <div className="footer-avatar-ctn">
            <div className="imgery">
            <img src={"../../assets/images/" + sudoTrack.image} alt="" className="foot-avatar" />
            </div>
            <div className="foot-avatar-text">
                <p>{ sudoTrack.desc }</p>
                <p>{ sudoTrack.name }</p>
            </div>
        </div>
        <div className="footer-controls-ctn">
            <div className="footer-controls">
            <img src="../../assets/images/shuffle.svg" alt="" />
            <img src="../../assets/images/previous.svg" alt="" />
            {/* <img src="../../assets/images/play-btn.svg" alt="" /> */}
            <div className='play-btn' onClick={() => dispatch(player(prevTrack))}>
            {sudoTrack.paused ? <img src="../../assets/images/play-icon.svg" alt="" /> : <img src="../../assets/images/pause.svg" alt="" />}
            </div>

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
