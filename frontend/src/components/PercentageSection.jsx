import React, { memo, useCallback, useContext } from 'react'
import red from "../assets/pictures/red-icon.png"
import blue from "../assets/pictures/blueIcon.png"
import yellow from "../assets/pictures/yellowIcon.png"
import pink from "../assets/pictures/pinkicon.png"
import white from "../assets/pictures/orangeIcon.png"
import casinoStotsenbergLogoWhite from "../assets/pictures/casinoLogoWhite.png"
import casinoStotsenbergLogoBlack from "../assets/pictures/casinoLogoBlack.png"
import { MoneyWheelContext } from '../App'

function PercentageSection() {
    const { percentage, tableInfo } = useContext(MoneyWheelContext)

    const initResultCount = useCallback((num) => {
        const percentageData = percentage.find((p, index) => p?.resultName == num)
        return percentageData ? percentageData?.calc : '0'
    }, [percentage])

    function customizeRemovePercentage(func) {
        return String(func).replace("%", '')
    }


    return (
        <>
            <div className='text-4xl font-bold grid gap-3 p-4 lilita-one-regular'>
                <div className='flex items-center'>
                    <div className='relative flex items-center text-center border-6 border-black w-[50%] h-[85px] m-auto bg-white  rounded-full'>
                        <div className='flex items-center justify-evenly w-full'>
                            <span className=' h-[55px] w-[55px] bg-black text-white flex justify-center items-center rounded-full'>50</span>
                            <span>
                                <img
                                    className='h-[40px] drop-shadow-sm drop-shadow-gray-500'
                                    src={casinoStotsenbergLogoBlack}
                                    alt="casino-plus-white" />
                            </span>
                            <span className='text-[44px] text-black drop-shadow-sm drop-shadow-black z-30 flex items-center'>
                                {initResultCount(51)}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" color="#000000" fill="none">
                                    <path d="M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6" stroke="black" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </span>
                        </div>
                        <div className='absolute w-full -top-9 flex items-center text-white'>
                            <div className='w-[50%] text-[24px] flex flex-col text-center items-center'>
                                <span className='relative top-1 text-[14px] w-[35px] text-white texts-shadow text-shadow-black rounded-tl-md rounded-tr-md'>MIN</span>
                                <span className='w-[120px] bg-black/20 shadow shadow-gray-700 rounded-full text-shadow-md text-shadow-black'>₱ {Number(tableInfo[0]?.fiftywhite_min).toLocaleString()}</span>
                            </div>
                            <div className='w-[50%] text-[24px] flex flex-col text-center items-center'>
                                <span className='relative top-1 text-[14px] w-[35px] text-white  texts-shadow text-shadow-black rounded-tl-md rounded-tr-md'>MAX</span>
                                <span className='w-[120px] bg-black/20 shadow shadow-gray-700 rounded-full text-shadow-md text-shadow-black'>₱ {Number(tableInfo[0]?.fiftywhite_max).toLocaleString()}</span>
                            </div>
                        </div>
                    </div>
                    <div className='relative flex items-center text-center border-6 border-white w-[50%] h-[85px]  m-auto bg-black text-white  rounded-full'>
                        <div className='flex items-center justify-evenly w-full'>
                            <span className='h-[55px] w-[55px] bg-white text-black flex justify-center items-center rounded-full'>50</span>
                            <span>
                                <img
                                    className='h-[40px]'
                                    src={casinoStotsenbergLogoWhite}
                                    alt="casino-plus-white" />
                            </span>
                            <span className='text-[44px] text-shadow z-30 flex items-center'>
                                {initResultCount(52)}
                                <svg
                                    className='drop-shadow-md drop-shadow-gray-700'
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" color="#000000" fill="none">
                                    <path d="M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6" stroke="white" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </span>
                        </div>
                        <div className='absolute text-white w-full -top-9 flex items-center'>
                            <div className='w-[50%] text-[24px] flex flex-col text-center items-center'>
                                <span className='relative top-1 text-[14px] w-[35px] text-white texts-shadow text-shadow-black'>MIN</span>
                                <span className='w-[120px] bg-black/20 shadow shadow-gray-700 rounded-full text-shadow-md text-shadow-black'>₱ {Number(tableInfo[0]?.fiftywhite_min).toLocaleString()}</span>
                            </div>
                            <div className='w-[50%]  text-[24px] flex flex-col text-center items-center'>
                                <span className='relative top-1 text-[14px] w-[35px] text-white texts-shadow text-shadow-black'>MAX</span>
                                <span className='w-[120px] bg-black/20 shadow shadow-gray-700 rounded-full text-shadow-md text-shadow-black'>₱ {Number(tableInfo[0]?.fiftywhite_max).toLocaleString()}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' text-center flex items-center border-6 border-red-200 h-[85px] w-[100%] m-auto bg-red-500 text-white  rounded-full overflow-hidden relative'>
                    <div className='flex items-center justify-between px-6 w-[50%]'>
                        <span className='z-30 text-shadow h-[55px] w-[55px] bg-red-600 shadow-md shadow-black text-white flex justify-center items-center rounded-full'>25</span>
                        <span className='z-30'>
                            <img
                                className={`h-[65px] ${customizeRemovePercentage(initResultCount(25)) >= 50 ? 'animate-bounce' : null}`}
                                src={red}
                                alt="rednbata" />
                        </span>
                        <span className='text-[44px] text-shadow z-30 flex items-center'>
                            {initResultCount(25)}
                            <svg
                                className='drop-shadow-md drop-shadow-gray-700'
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" color="#000000" fill="none">
                                <path d="M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6" stroke="white" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </span>
                        <span
                            className={`animate-pulse transition-all left-0 absolute z-10 h-[85px] bg-gradient-to-r from-red-900 via-red-800 to-red-700  overflow-hidden`}
                            style={{
                                width: `${initResultCount(25)}`
                            }}
                        >
                            <div className='absolute z-20 flex opacity-50 justify-evenly items-center h-full w-[950px]'>
                                <img
                                    className='h-[30%]'
                                    src={casinoStotsenbergLogoWhite} alt="casino-plus" />
                                <img
                                    className='h-[30%]'
                                    src={casinoStotsenbergLogoWhite} alt="casino-plus" />

                                <img
                                    className='h-[30%]'
                                    src={casinoStotsenbergLogoWhite} alt="casino-plus" />
                                <img
                                    className='h-[30%]'
                                    src={casinoStotsenbergLogoWhite} alt="casino-plus" />
                            </div>
                        </span>

                    </div>
                    <div className='w-[50%] flex items-center drop-shadow-md drop-shadow-black text-white'>
                        <div className='w-full text-[24px] flex flex-col justify-evenly items-center'>
                            <span className='border-b-2'>MIN:</span>
                            <span>MAX:</span>
                        </div>
                        <div className='w-full text-[28px] flex flex-col text-left'>
                            <span>₱ {Number(tableInfo[0]?.twentyFive_min).toLocaleString()}</span>
                            <span>₱ {Number(tableInfo[0]?.twentyFive_max).toLocaleString()}</span>
                        </div>
                    </div>
                </div>
                <div className='text-center flex items-center border-6 border-yellow-200 h-[85px] w-[100%] m-auto bg-yellow-500 text-white  rounded-full overflow-hidden relative'>
                    <div className='flex items-center justify-between px-6 w-[50%]'>
                        <span className='z-20 text-shadow h-[55px] w-[55px] bg-yellow-400 shadow-md shadow-black text-white flex justify-center items-center rounded-full'>10</span>
                        <span className='z-20'>
                            <img
                                className={`h-[65px] ${customizeRemovePercentage(initResultCount(10)) >= 50 ? 'animate-bounce' : null}`}
                                src={yellow}
                                alt="blue" />
                        </span>
                        <span className='text-[44px] text-shadow z-20 flex items-center'>
                            {initResultCount(10)}
                            <svg
                                className='drop-shadow-md drop-shadow-gray-700'
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" color="#000000" fill="none">
                                <path d="M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6" stroke="white" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </span>
                        <span
                            className={`animate-pulse transition-all left-0 absolute z-10 h-[85px] bg-gradient-to-r from-yellow-800 via-yellow-700 to-yellow-600  overflow-hidden`}
                            style={{
                                width: `${initResultCount(10)}`
                            }}
                        >
                            <div className='absolute z-20 flex opacity-50 justify-evenly items-center h-full w-[950px]'>
                                <img
                                    className='h-[30%]'
                                    src={casinoStotsenbergLogoWhite} alt="casino-plus" />
                                <img
                                    className='h-[30%]'
                                    src={casinoStotsenbergLogoWhite} alt="casino-plus" />

                                <img
                                    className='h-[30%]'
                                    src={casinoStotsenbergLogoWhite} alt="casino-plus" />
                                <img
                                    className='h-[30%]'
                                    src={casinoStotsenbergLogoWhite} alt="casino-plus" />
                            </div>
                        </span>
                    </div>
                    <div className='w-[50%] flex items-center drop-shadow-md drop-shadow-black text-white'>
                        <div className='w-full text-[24px] flex flex-col justify-evenly items-center'>
                            <span className='border-b-2'>MIN:</span>
                            <span>MAX:</span>
                        </div>
                        <div className='w-full text-[28px] flex flex-col text-left'>
                            <span>₱ {Number(tableInfo[0]?.ten_min).toLocaleString()}</span>
                            <span>₱ {Number(tableInfo[0]?.ten_max).toLocaleString()}</span>
                        </div>
                    </div>
                </div>
                <div className='text-center flex items-center border-6 border-blue-200 h-[85px] w-[100%] m-auto bg-blue-500 text-white  rounded-full overflow-hidden relative'>
                    <div className='flex items-center justify-between px-6 w-[50%]'>
                        <span className='z-20 text-shadow h-[55px] w-[55px] bg-blue-600 shadow-md shadow-black text-white flex justify-center items-center rounded-full'>5</span>
                        <span className='z-20'>
                            <img
                                className={`h-[65px] ${customizeRemovePercentage(initResultCount(5)) >= 50 ? 'animate-bounce' : null}`}
                                src={blue}
                                alt="blue" />
                        </span>
                        <span className='text-[44px] text-shadow z-20 flex items-center'>
                            {initResultCount(5)}
                            <svg
                                className='drop-shadow-md drop-shadow-gray-700'
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" color="#000000" fill="none">
                                <path d="M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6" stroke="white" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </span>
                        <span
                            className={`animate-pulse transition-all left-0 absolute z-10 h-[85px] bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700  overflow-hidden`}
                            style={{
                                width: `${initResultCount(5)}`
                            }}
                        >
                            <div className='absolute z-20 flex opacity-50 justify-evenly items-center h-full w-[950px]'>
                                <img
                                    className='h-[30%]'
                                    src={casinoStotsenbergLogoWhite} alt="casino-plus" />
                                <img
                                    className='h-[30%]'
                                    src={casinoStotsenbergLogoWhite} alt="casino-plus" />

                                <img
                                    className='h-[30%]'
                                    src={casinoStotsenbergLogoWhite} alt="casino-plus" />
                                <img
                                    className='h-[30%]'
                                    src={casinoStotsenbergLogoWhite} alt="casino-plus" />
                            </div>
                        </span>
                    </div>
                    <div className='w-[50%] flex items-center drop-shadow-md drop-shadow-black text-white'>
                        <div className='w-full text-[24px] flex flex-col justify-evenly items-center'>
                            <span className='border-b-2'>MIN:</span>
                            <span>MAX:</span>
                        </div>
                        <div className='w-full text-[28px] flex flex-col text-left'>
                            <span>₱ {Number(tableInfo[0]?.five_min).toLocaleString()}</span>
                            <span>₱ {Number(tableInfo[0]?.five_max).toLocaleString()}</span>
                        </div>
                    </div>
                </div>
                <div className='text-center flex items-center border-6 border-pink-200 h-[85px] w-[100%] m-auto bg-pink-500 text-white  rounded-full overflow-hidden relative'>
                    <div className='flex items-center justify-between px-6 w-[50%]'>
                        <span className='z-20 text-shadow h-[55px] w-[55px] bg-pink-600 shadow-md shadow-black text-white flex justify-center items-center rounded-full'>3</span>
                        <span className='z-20'>
                            <img
                                className={`h-[65px] ${customizeRemovePercentage(initResultCount(3)) >= 50 ? 'animate-bounce' : null}`}
                                src={pink}
                                alt="pink" />
                        </span>
                        <span className='text-shadow z-20 text-[44px] flex items-center'>
                            {initResultCount(3)}
                            <svg
                                className='drop-shadow-md drop-shadow-gray-700'
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" color="#000000" fill="none">
                                <path d="M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6" stroke="white" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </span>
                        <span
                            className={` animate-pulse transition-all left-0 absolute z-10 h-[85px] bg-gradient-to-r from-pink-900 via-pink-800 to-pink-700 overflow-hidden`}
                            style={{
                                width: `${initResultCount(3)}`
                            }}
                        >
                            <div className='absolute z-20 flex opacity-50 justify-evenly items-center h-full w-[950px]'>
                                <img
                                    className='h-[30%]'
                                    src={casinoStotsenbergLogoWhite} alt="casino-plus" />
                                <img
                                    className='h-[30%]'
                                    src={casinoStotsenbergLogoWhite} alt="casino-plus" />

                                <img
                                    className='h-[30%]'
                                    src={casinoStotsenbergLogoWhite} alt="casino-plus" />
                                <img
                                    className='h-[30%]'
                                    src={casinoStotsenbergLogoWhite} alt="casino-plus" />
                            </div>
                        </span>
                    </div>
                    <div className='w-[50%] flex items-center drop-shadow-md drop-shadow-black text-white'>
                        <div className='w-full text-[24px] flex flex-col justify-evenly items-center'>
                            <span className='border-b-2'>MIN:</span>
                            <span>MAX:</span>
                        </div>
                        <div className='w-full text-[28px] flex flex-col text-left'>
                            <span>₱ {Number(tableInfo[0]?.three_min).toLocaleString()}</span>
                            <span>₱ {Number(tableInfo[0]?.three_max).toLocaleString()}</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='text-center flex items-center border-6 border-orange-200 h-[85px] w-[100%] m-auto bg-orange-500 text-white rounded-full overflow-hidden relative'>
                        <div className='flex items-center justify-between px-6 w-[50%]'>
                            <span className='z-20 text-shadow h-[55px] w-[55px] bg-orange-600 shadow-md shadow-black text-white flex justify-center items-center rounded-full'>1</span>
                            <span className='z-20'>
                                <img
                                    className={`h-[65px] ${customizeRemovePercentage(initResultCount(1)) >= 50 ? 'animate-bounce' : null}`}
                                    src={white}
                                    alt="white" />
                            </span>
                            <span className='text-shadow z-20 flex items-center text-[44px]'>
                                {initResultCount(1)}
                                <svg
                                    className='drop-shadow-md drop-shadow-gray-700'
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" color="#000000" fill="none">
                                    <path d="M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6" stroke="white" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </span>
                            <span
                                className={`animate-pulse transition-all left-0 absolute z-10 h-[85px] bg-gradient-to-r from-orange-900 via-orange-800 to-orange-700 overflow-hidden`}
                                style={{
                                    width: `${initResultCount(1)}`
                                }}
                            >
                                <div className='absolute z-20 flex opacity-50 justify-evenly items-center h-full w-[950px]'>
                                    <img
                                        className='h-[30%]'
                                        src={casinoStotsenbergLogoWhite} alt="casino-plus" />
                                    <img
                                        className='h-[30%]'
                                        src={casinoStotsenbergLogoWhite} alt="casino-plus" />

                                    <img
                                        className='h-[30%]'
                                        src={casinoStotsenbergLogoWhite} alt="casino-plus" />
                                    <img
                                        className='h-[30%]'
                                        src={casinoStotsenbergLogoWhite} alt="casino-plus" />
                                </div>
                            </span>
                        </div>
                        <div className='w-[50%] flex items-center drop-shadow-md drop-shadow-black text-white'>
                            <div className='w-full text-[24px] flex flex-col justify-evenly items-center'>
                                <span className='border-b-2'>MIN:</span>
                                <span>MAX:</span>
                            </div>
                            <div className='w-full text-[28px] flex flex-col text-left'>
                                <span>₱ {Number(tableInfo[0]?.one_min).toLocaleString()}</span>
                                <span>₱ {Number(tableInfo[0]?.one_max).toLocaleString()}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(PercentageSection)