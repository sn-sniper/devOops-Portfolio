import React from 'react';
import "./AboutBox.css";

function AboutBox({ data , index }) {
    return (
        <div className={'AboutBox-container item item-'+(index+1)}>
            <div className='AboutBox-top'>
                <h1 className='subpixel-antialiased font-bold text-8xl'>
                    {data.Number}<sup className='text-6xl'>{data.Sign}</sup>
                </h1>
                <h2 className='text-3xl subpixel-antialiased font-bold'>
                    {data.h2}
                </h2>
            </div>
            <div className='AboutBox-bottom'>
                <p className='text-xl text-gray-500'>
                    {data.Number}{data.Sign}{data.p}
                </p>
            </div>
        </div>
    );
}

export default AboutBox;