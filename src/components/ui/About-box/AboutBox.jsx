import React from 'react'
import "./AboutBox.css"
function AboutBox() {
    return (
        <div className='AboutBox-container'>
            <div className='AboutBox-top'>
                <h1 className='subpixel-antialiased font-bold text-8xl'>99<sup className='text-6xl'>%</sup></h1>
                <h2 className='text-3xl subpixel-antialiased font-bold'><span></span>Lorem ipsum</h2>
            </div>
            <div className='AboutBox-bottom'>
                <p className='text-xl text-gray-500'>99% Lorem ipsum dolor sit
                    amet consectetur adipisicing.
                </p>
            </div>
        </div>
    )
}

export default AboutBox