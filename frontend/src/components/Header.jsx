import React from 'react'
import casinoPlusWhite from "../assets/pictures/casinoPlusWhite.png"
import moneyWheelLogo from "../assets/pictures/money_wheel_logo.png"


function Header() {
    return (
        <div className='flex items-center justify-evenly h-full text-[32px] text-white poppins-bold w-full'>
            <div className='flex items-center flex-col w-[35%] '>
                <p className='tracking-widest text-green-500 neonText'>MIN</p>
                <p className='text-[56px]'>10, 000, 000</p>
            </div>
            <div className='relative w-[30%]  '>
                <img
                    className='h-[100%] w-[330px] mx-auto'
                    src={moneyWheelLogo}
                    alt="money-wheel-logo" />
                {/* <p className='neonText tracking-[20px] absolute mx-auto ml-[135px] -bottom-3'>WHEEL</p> */}
            </div>
            <div className='flex items-center flex-col w-[35%]'>
                <p className='tracking-widest text-red-500 neonText'>MAX</p>
                <p className='text-[56px]'>10, 000, 000, 000</p>
            </div>
        </div>
    )
}

export default Header