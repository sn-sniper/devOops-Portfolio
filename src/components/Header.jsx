import React from 'react'
import Navbar from '../components/Navbar'
import "../styles/Header.css"
export default function Header() {
    return (
        <div className='header-container'>
            {/* <div className='Overlay'></div> */}
            <Navbar />
        </div>
    )
}
