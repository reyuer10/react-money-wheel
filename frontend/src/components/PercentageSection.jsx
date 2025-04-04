import React from 'react'
import red from "../assets/pictures/red-icon.png"
import blue from "../assets/pictures/blueIcon.png"
import yellow from "../assets/pictures/yellowIcon.png"
import pink from "../assets/pictures/pinkicon.png"
import white from "../assets/pictures/orangeIcon.png"
import casinoPlusWhite from "../assets/pictures/casinoPlusWhite.png"
import casinoPlusBlack from "../assets/pictures/casino-logo.png"

function PercentageSection({ percentage }) {


    console.log(percentage)

    function initPercentage(num) {
        const percentageData = percentage.find((p, index) => p?.resultName == num)
        return percentageData ? percentageData?.calc : '0%'
    }

    function customizeRemovePercentage(func) {
        return String(func).replace("%", '')
    }


    // const redStyleWidth = customizeStringReplace(initPercentage(25))

    console.log()
    return (
        <>
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
                <div className=' text-center flex items-center justify-evenly border-6 border-red-200 h-[125px] w-[100%] m-auto bg-red-500 text-white  rounded-full overflow-hidden relative'>
                    <span className='z-30 text-shadow h-[75px] w-[75px] bg-red-600 shadow-md shadow-black text-white flex justify-center items-center rounded-full'>25</span>
                    <span className='z-30'>
                        <img
                            // 
                            className={`h-[90px] ${customizeRemovePercentage(initPercentage(25)) >= 50 ? 'animate-bounce' : null}`}
                            src={red}
                            alt="rednbata" />
                    </span>
                    <span className='text-shadow z-30'>{initPercentage(25)}</span>
                    <span
                        className={` transition-all left-0 absolute z-10 h-[125px] bg-gradient-to-r from-red-900 via-red-800 to-red-700  overflow-hidden`}
                        style={{
                            width: `${initPercentage(25)}`
                        }}
                    >
                        <div className='absolute z-20 flex opacity-50 justify-evenly items-center h-full w-[950px]'>
                            <img
                                className='h-[30%]'
                                src={casinoPlusWhite} alt="casino-plus" />
                            <img
                                className='h-[30%]'
                                src={casinoPlusWhite} alt="casino-plus" />

                            <img
                                className='h-[30%]'
                                src={casinoPlusWhite} alt="casino-plus" />
                            <img
                                className='h-[30%]'
                                src={casinoPlusWhite} alt="casino-plus" />
                        </div>
                    </span>

                </div>
                <div className='text-center flex items-center justify-evenly border-6 border-yellow-200 h-[125px] w-[100%] m-auto bg-yellow-500 text-white  rounded-full overflow-hidden relative'>
                    <span className='z-20 text-shadow h-[75px] w-[75px] bg-yellow-400 shadow-md shadow-black text-white flex justify-center items-center rounded-full'>10</span>
                    <span className='z-20'>
                        <img
                            className={`h-[90px] ${customizeRemovePercentage(initPercentage(10)) >= 50 ? 'animate-bounce' : null}`}
                            src={yellow}
                            alt="blue" />
                    </span>
                    <span className='text-shadow z-20'>{initPercentage(10)}</span>
                    <span
                        className={`transition-all left-0 absolute z-10 h-[125px] bg-gradient-to-r from-yellow-800 via-yellow-700 to-yellow-600  overflow-hidden`}
                        style={{
                            width: `${initPercentage(10)}`
                        }}
                    >
                        <div className='absolute z-20 flex opacity-50 justify-evenly items-center h-full w-[950px]'>
                            <img
                                className='h-[30%]'
                                src={casinoPlusWhite} alt="casino-plus" />
                            <img
                                className='h-[30%]'
                                src={casinoPlusWhite} alt="casino-plus" />

                            <img
                                className='h-[30%]'
                                src={casinoPlusWhite} alt="casino-plus" />
                            <img
                                className='h-[30%]'
                                src={casinoPlusWhite} alt="casino-plus" />
                        </div>
                    </span>
                </div>
                <div className='text-center flex items-center justify-evenly border-6 border-blue-200 h-[125px] w-[100%] m-auto bg-blue-500 text-white  rounded-full overflow-hidden relative'>
                    <span className='z-20 text-shadow h-[75px] w-[75px] bg-blue-600 shadow-md shadow-black text-white flex justify-center items-center rounded-full'>5</span>
                    <span className='z-20'>
                        <img
                            className={`h-[90px] ${customizeRemovePercentage(initPercentage(5)) >= 50 ? 'animate-bounce' : null}`}

                            src={blue}
                            alt="blue" />
                    </span>
                    <span className='text-shadow z-20'>{initPercentage(5)}</span>
                    <span
                        className={` transition-all left-0 absolute z-10 h-[125px] bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700  overflow-hidden`}
                        style={{
                            width: `${initPercentage(5)}`
                        }}
                    >
                        <div className='absolute z-20 flex opacity-50 justify-evenly items-center h-full w-[950px]'>
                            <img
                                className='h-[30%]'
                                src={casinoPlusWhite} alt="casino-plus" />
                            <img
                                className='h-[30%]'
                                src={casinoPlusWhite} alt="casino-plus" />

                            <img
                                className='h-[30%]'
                                src={casinoPlusWhite} alt="casino-plus" />
                            <img
                                className='h-[30%]'
                                src={casinoPlusWhite} alt="casino-plus" />
                        </div>
                    </span>
                </div>
                <div className='text-center flex items-center justify-evenly border-6 border-pink-200 h-[125px] w-[100%] m-auto bg-pink-500 text-white  rounded-full overflow-hidden relative'>
                    <span className='z-20 text-shadow h-[75px] w-[75px] bg-pink-600 shadow-md shadow-black text-white flex justify-center items-center rounded-full'>3</span>
                    <span className='z-20'>
                        <img
                            className={`h-[90px] ${customizeRemovePercentage(initPercentage(3)) >= 50 ? 'animate-bounce' : null}`}
                            src={pink}
                            alt="pink" />
                    </span>
                    <span className='text-shadow z-20'>{initPercentage(3)}</span>
                    <span
                        className={` transition-all left-0 absolute z-10 h-[125px] bg-gradient-to-r from-pink-900 via-pink-800 to-pink-700 overflow-hidden`}
                        style={{
                            width: `${initPercentage(3)}`
                        }}
                    >
                        <div className='absolute z-20 flex opacity-50 justify-evenly items-center h-full w-[950px]'>
                            <img
                                className='h-[30%]'
                                src={casinoPlusWhite} alt="casino-plus" />
                            <img
                                className='h-[30%]'
                                src={casinoPlusWhite} alt="casino-plus" />

                            <img
                                className='h-[30%]'
                                src={casinoPlusWhite} alt="casino-plus" />
                            <img
                                className='h-[30%]'
                                src={casinoPlusWhite} alt="casino-plus" />
                        </div>
                    </span>
                </div>
                <div>
                    <div className='text-center flex items-center justify-evenly border-6 border-orange-200 h-[125px] w-[100%] m-auto bg-orange-500 text-white rounded-full overflow-hidden relative'>
                        <span className='z-20 text-shadow h-[75px] w-[75px] bg-orange-600 shadow-md shadow-black text-white flex justify-center items-center rounded-full'>1</span>
                        <span className='z-20'>
                            <img
                                className={`h-[90px] ${customizeRemovePercentage(initPercentage(1)) >= 50 ? 'animate-bounce' : null}`}
                                src={white}
                                alt="white" />
                        </span>
                        <span className='text-shadow z-20'>{initPercentage(1)}</span>
                        <span
                            className={` transition-all left-0 absolute z-10 h-[125px] bg-gradient-to-r from-orange-900 via-orange-800 to-orange-700 overflow-hidden`}
                            style={{
                                width: `${initPercentage(1)}`
                            }}
                        >
                            <div className='absolute z-20 flex opacity-50 justify-evenly items-center h-full w-[950px]'>
                                <img
                                    className='h-[30%]'
                                    src={casinoPlusWhite} alt="casino-plus" />
                                <img
                                    className='h-[30%]'
                                    src={casinoPlusWhite} alt="casino-plus" />

                                <img
                                    className='h-[30%]'
                                    src={casinoPlusWhite} alt="casino-plus" />
                                <img
                                    className='h-[30%]'
                                    src={casinoPlusWhite} alt="casino-plus" />
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PercentageSection