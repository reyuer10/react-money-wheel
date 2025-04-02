import React from 'react'
import casinoPlusPng from "../assets/pictures/casino-logo.png"

function Header() {
    return (
        <div className='flex items-center justify-evenly h-full'>
            <div className='flex items-center flex-col'>
                <p>MIN</p>
                <p>0</p>
            </div>
            <div>
                <img
                    className='h-[100%] w-[250px]'
                    src={casinoPlusPng}
                    alt="casino-bg" />
            </div>
            <div className='flex items-center flex-col'>
                <p>MAX</p>
                <p>0</p>
            </div>
        </div>
    )
}

export default Header