import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import './header.css';

export default function Header() {
    const isMobile = useState(false)
    const navigate = useNavigate()
  return (
    <div className='header-ctn'>
        <div className="logo-ctn">
            {isMobile && <div className="mobile-ham-icon"></div>}
            <div className="logo-div" onClick={() => navigate('/')}>
                <img src="../../assets/images/musica-logo.png" alt="" />
            </div>
        </div>
        <div className="search-ctn">
            <div className="header-search-ctn">
                <label htmlFor="search">
                <span className="material-icons-outlined">search</span>
                </label>
                <input
                id="search"
                type="search"
                className="header-input"
                placeholder="Search artist"
                />
            </div>
        </div>
    </div>
  )
}
