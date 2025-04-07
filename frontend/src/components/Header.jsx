import React from 'react'
import casinoPlusWhite from "../assets/pictures/casinoPlusWhite.png"


function Header() {
    return (
        <div className='flex items-center justify-evenly h-full text-[32px] text-white poppins-bold '>
            <div className='flex items-center flex-col  '>
                <p className='tracking-widest text-green-500 neonText'>MIN</p>
                <p className='text-[56px]'>10, 000, 000</p>
            </div>
            <div className='relative'>
                <img
                    className='h-[100%] w-[250px] '
                    src={casinoPlusWhite}
                    alt="casino-bg" />
                <p className='neonText tracking-[20px] absolute mx-auto ml-13 -bottom-3'>PLUS</p>
            </div>
            <div className='flex items-center flex-col '>
                <p className='tracking-widest text-red-500 neonText'>MAX</p>
                <p className='text-[56px]'>10, 000, 000, 000</p>
            </div>
        </div>
    )
}

export default Header