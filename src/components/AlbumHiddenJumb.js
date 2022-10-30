import React from 'react'

export default function AlbumHiddenJumb() {
  return (
    <div className="album-jumbotron hidden-jumb">
        <div className="album-img-div">
        <img src="../../assets/images/album-img.png" alt="" />
        </div>
        <div className="jumbotron-text-ctn">
            <p className="hero-text">Tomorrow's tunes</p>
            <p className="subhero">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita illo delectus error voluptatem</p>
            <p>64 songs ~ 16hrs+</p>
        <div className="album-actions-ctn">
            <div className="action-ctn">
                <img src="../../assets/images/play-img.svg" alt="" />
                <p>Play all</p>
            </div>
            <div className="action-ctn">
            <img src="../../assets/images/add-icon.svg" alt="" />
            <p>Add to collection</p>
            </div>
            <div className="action-ctn">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="#E5524A" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M2.15388 8.69874C1.34913 6.18624 2.28963 3.31449 4.92738 2.46474C6.31488 2.01699 7.84638 2.28099 8.99988 3.14874C10.0911 2.30499 11.6789 2.01999 13.0649 2.46474C15.7026 3.31449 16.6491 6.18624 15.8451 8.69874C14.5926 12.6812 8.99988 15.7487 8.99988 15.7487C8.99988 15.7487 3.44838 12.7277 2.15388 8.69874Z" stroke="" strokeWidth="0.5625" strokeLinecap="round" strokeLinejoin="round"/>
            <path opacity="0.4" d="M12 5.02501C12.8025 5.28451 13.3695 6.00076 13.4377 6.84151" stroke="#1D2123" strokeWidth="0.5625" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            </div>
        </div>
        </div>
    </div>
  )
}
