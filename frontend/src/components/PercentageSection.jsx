import React from 'react'
import red from "../assets/pictures/red-icon.png"
import blue from "../assets/pictures/blueIcon.png"
import yellow from "../assets/pictures/yellowIcon.png"
import pink from "../assets/pictures/pinkicon.png"
import green from "../assets/pictures/greenIcon.png"
import casinoPlusWhite from "../assets/pictures/casinoPlusWhite.png"
import casinoPlusBlack from "../assets/pictures/casino-logo.png"

function PercentageSection() {
    // h-[100px] w-[100px] 
    return (
        <div className='text-4xl font-bold grid gap-5 p-4 poppins-extrabold'>
            <div className='flex gap-x-4'>

                <div className='flex items-center justify-evenly text-center border-6 border-black w-[48%]  h-[125px]  m-auto bg-white  rounded-full'>
                    <span className=' h-[75px] w-[75px] bg-black text-white flex justify-center items-center rounded-full'>50</span>
                    <span>
                        <img
                            className='h-[50px]'
                            src={casinoPlusBlack}
                            alt="casino-plus-white" />
                    </span>
                    <span>0%</span>
                </div>
                <div className=' flex items-center justify-evenly text-center border-6 border-white w-[48%] h-[125px]  m-auto bg-black text-white  rounded-full'>
                    <span className='h-[75px] w-[75px] bg-white text-black flex justify-center items-center rounded-full'>50</span>
                    <span>
                        <img
                            className='h-[50px]'
                            src={casinoPlusWhite}
                            alt="casino-plus-white" />
                    </span>
                    <span>0%</span>
                </div>

            </div>
            <div className=' text-center flex items-center justify-evenly border-6 border-red-200 h-[125px] w-[100%] m-auto bg-red-500 text-white  rounded-full'>
                <span className='text-shadow h-[75px] w-[75px] bg-red-600 shadow-md shadow-black text-white flex justify-center items-center rounded-full'>25</span>
                <span>
                    <img
                        className='h-[90px]'
                        src={red}
                        alt="rednbata" />
                </span>
                <span className='text-shadow'>0%</span>
            </div>
            <div className='text-center flex items-center justify-evenly border-6 border-yellow-200 h-[125px] w-[100%] m-auto bg-yellow-500 text-white  rounded-full'>
                <span className='text-shadow h-[75px] w-[75px] bg-yellow-400 shadow-md shadow-black text-white flex justify-center items-center rounded-full'>10</span>
                <span>
                    <img
                        className='h-[90px]'
                        src={yellow}
                        alt="blue" />
                </span>
                <span className='text-shadow'>0%</span>
            </div>
            <div className='text-center flex items-center justify-evenly border-6 border-blue-200 h-[125px] w-[100%] m-auto bg-blue-500 text-white  rounded-full'>
                <span className='text-shadow h-[75px] w-[75px] bg-blue-600 shadow-md shadow-black text-white flex justify-center items-center rounded-full'>5</span>
                <span>
                    <img
                        className='h-[90px]'
                        src={blue}
                        alt="blue" />
                </span>
                <span className='text-shadow'>0%</span>
            </div>
            <div className='text-center flex items-center justify-evenly border-6 border-pink-200 h-[125px] w-[100%] m-auto bg-pink-500 text-white  rounded-full'>
                <span className='text-shadow h-[75px] w-[75px] bg-pink-600 shadow-md shadow-black text-white flex justify-center items-center rounded-full'>3</span>
                <span>
                    <img
                        className='h-[90px]'
                        src={pink}
                        alt="pink" />
                </span>
                <span className='text-shadow'>0%</span>
            </div>
            <div>
                <div className='text-center flex items-center justify-evenly border-6 border-orange-200 h-[125px] w-[100%] m-auto bg-orange-500 text-white  rounded-full'>
                    <span className='text-shadow h-[75px] w-[75px] bg-orange-600 shadow-md shadow-black text-white flex justify-center items-center rounded-full'>1</span>
                    <span>
                        <img
                            className='h-[90px]'
                            src={green}
                            alt="green" />
                    </span>
                    <span className='text-shadow'>0%</span>
                </div>
            </div>
        </div>
    )
}

export default PercentageSection