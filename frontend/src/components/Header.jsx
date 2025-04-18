import React, { memo, useContext } from 'react'
import moneyWheelLogo from "../assets/pictures/money_wheel_logo.png"
import { MoneyWheelContext } from '../App';


function Header() {
    const { tableInfo } = useContext(MoneyWheelContext);

    return (
        <div className='flex items-center justify-evenly h-full text-[32px] text-white poppins-bold w-full px-4 '>
            <div className='flex items-center flex-col w-[35%] bg-white/30 rounded-2xl'>
                <p className='tracking-widest text-green-500 neonText'>MIN</p>
                <p className='text-[56px]'>₱ {Number(tableInfo[0]?.table_min).toLocaleString()}</p>
            </div>
            <div className='relative w-[30%] '>
                <p className=' text-center'>{tableInfo[0]?.table_name}</p>
                <img
                    className='h-[100%] w-[330px] mx-auto'
                    src={moneyWheelLogo}
                    alt="money-wheel-logo" />
                {/* <p className='neonText tracking-[20px] absolute mx-auto ml-[135px] -bottom-3'>WHEEL</p> */}
            </div>
            <div className='flex items-center flex-col w-[35%] bg-white/30 rounded-2xl px-4'>
                <p className='tracking-widest text-red-500 neonText'>MAX</p>
                <p className='text-[56px]'>₱ {Number(tableInfo[0]?.table_max).toLocaleString()}</p>
            </div>
        </div>
    )
}

export default memo(Header)