import React from 'react'

export default function EachAlbum({album}) {
    
    const handleFav = () => {
        console.log('album1', album)
        album.fav = !album.fav
        console.log('album', album)
    }
  return (
    <div className='each-album-ctn'>
        <div className="each-album">
            <div>
            <div className="each-album-img">
                <img src={"../../assets/images/" + album.image} alt="" />
            </div>
            <div className="fav-ctn" onClick={handleFav}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill={album.fav ? '#E5524A': 'transparent'} xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M2.15388 8.69874C1.34913 6.18624 2.28963 3.31449 4.92738 2.46474C6.31488 2.01699 7.84638 2.28099 8.99988 3.14874C10.0911 2.30499 11.6789 2.01999 13.0649 2.46474C15.7026 3.31449 16.6491 6.18624 15.8451 8.69874C14.5926 12.6812 8.99988 15.7487 8.99988 15.7487C8.99988 15.7487 3.44838 12.7277 2.15388 8.69874Z" stroke={album.fav ? '': '#ffffff'} strokeWidth="0.5625" strokeLinecap="round" strokeLinejoin="round"/>
                <path opacity="0.4" d="M12 5.02501C12.8025 5.28451 13.3695 6.00076 13.4377 6.84151" stroke="#ffffff" strokeWidth="0.5625" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            </div>
            <div className="album-first-text">
                {album.name + " " + album.artiste}
            </div>
            <div className="album-sec-text">{album.single}</div>
            <div className="album-duration">{album.duration}</div>
            <div className="expand-more">
                <span className="material-icons-outlined">more_vert</span>
            </div>
        </div>
    </div>
  )
}
