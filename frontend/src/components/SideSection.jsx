import React, { memo, useCallback, useContext, useEffect } from 'react'
import { motion } from "motion/react"

import red from "../assets/pictures/red-icon.png"
import blue from "../assets/pictures/blueIcon.png"
import yellow from "../assets/pictures/yellowIcon.png"
import pink from "../assets/pictures/pinkicon.png"
import white from "../assets/pictures/orangeIcon.png"
import casinoLogoWhite from "../assets/pictures/casinoLogoWhite.png"
import casinoLogoBlack from "../assets/pictures/casinoLogoBlack.png"
import { MoneyWheelContext } from '../App'


function SideSection() {

    const {
        resultPulse,
        setResultsPulse,
        results,
        isResultsHide,
        setIsResultsHide
    } = useContext(MoneyWheelContext);
    // drop-shadow-2xl drop-shadow-black
    const customizeColorBasedOnNum = useCallback((num) => {
        if (num == 52) return "bg-black border-6 border-black ring-2 ring-white"
        if (num == 51) return "bg-white border-6 border-black ring-2 ring-white text-shadow-side-section"
        if (num == 25) return "bg-gradient-to-r from-red-500 via-red-700 to-red-900 text-white text-shadow-side-section border-4 border-red-200 shadow-xl shadow-red-700"
        if (num == 10) return "bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-800 text-white text-shadow-side-section border-4 border-yellow-200 shadow-xl shadow-yellow-700"
        if (num == 5) return " bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 bg-blue-600 text-white text-shadow-side-section border-4 border-blue-200 shadow-xl shadow-blue-700"
        if (num == 3) return "bg-gradient-to-r from-pink-500 via-pink-700 to-pink-900 text-white text-shadow-side-section border-4 border-pink-200 shadow-xl shadow-pink-700"
        if (num == 1) return "bg-gradient-to-r from-orange-500 via-orange-600 to-orange-900 text-white text-shadow-side-section border-4 border-orange-200 shadow-xl shadow-orange-700"
    }, [])

    const customizeImageByNum = useCallback((num) => {
        if (num == 52) return casinoLogoWhite
        if (num == 51) return casinoLogoBlack
        if (num == 25) return red
        if (num == 10) return yellow
        if (num == 5) return blue
        if (num == 3) return pink
        if (num == 1) return white
    }, [])

    const customizeFormatResultNumber = useCallback((num) => {
        if (num == 52) return 50
        if (num == 51) return 50
        if (num == 25) return 25
        if (num == 10) return 10
        if (num == 5) return 5
        if (num == 3) return 3
        if (num == 1) return 1
    }, [])

    const customizeImageSizeByNum = useCallback((num) => {
        if (num == 51) return "opacity-70 h-[50px] w-[150px]"
        if (num == 25) return "opacity-70 h-[130px]"
        if (num == 10) return "opacity-70 h-[130px]"
        if (num == 5) return "opacity-70 h-[130px]"
        if (num == 3) return "opacity-70 h-[130px]"
        if (num == 1) return "opacity-70 h-[130px]"
    }, [])

    const customizeFontSizeByNum = useCallback((num) => {
        if (num == 51) return "text-[142px]"
        if (num == 25) return "text-[95px]"
        if (num == 10) return "text-[95px]"
        if (num == 5) return "text-[142px]"
        if (num == 3) return "text-[142px]"
        if (num == 1) return "text-[142px]"
    }, [])



    useEffect(() => {
        const timeout = setTimeout(() => {
            setResultsPulse(false)
        }, 12000);

        return () => {
            clearTimeout(timeout)
        }
    }, [resultPulse, isResultsHide])

    useEffect(() => {
        const secondaryTimeout = setTimeout(() => {
            setIsResultsHide(false)
        }, 4950);

        return () => {
            clearTimeout(secondaryTimeout)
        }
    }, [isResultsHide])

    return (
        <div className='text-4xl font-bold'>
            {results.map((r, index) => {
                return (
                    <div key={index}>
                        {index == 0 ?
                            <motion.div
                                className={` 
                                    ${isResultsHide ? "opacity-0" : "opacity-100"}
                                    ${resultPulse ? "neonText" : ""}
                                ${customizeColorBasedOnNum(r.results_num)}
                                ${customizeFontSizeByNum(r.results_num)}
                                 relative overflow-hidden text-black h-[170px] justify-center flex items-center m-6 rounded-2xl`}>
                                {r.results_num == 51 || r.results_num == 52 ? null : <>
                                    <div className='absolute -top-[100px] -bottom-[40px]'>
                                        <img
                                            className={`opacity-5 h-[300px]`}
                                            src={customizeImageByNum(r.results_num)} alt="character" />
                                    </div>
                                    <div className='absolute left-[10px]'>
                                        <img
                                            className={customizeImageSizeByNum(r.results_num)}
                                            src={customizeImageByNum(r.results_num)} alt="character" />
                                    </div>
                                </>}
                                <div className={`
                                    ${r.results_num == 51 && "text-white p-6 text-[80px] bg-black rounded-full"}
                                    ${r.results_num == 52 && "text-black p-6 text-[80px] bg-white rounded-full"}
                                       ${r.results_num == 52 || r.results_num == 51 ? "" : "left-14 -top-1"}
                                    z-20 relative -top-1 
                                     `}>
                                    <p>{customizeFormatResultNumber(r.results_num)}</p>
                                </div>
                            </motion.div> :
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    x: -100
                                }}
                                transition={{
                                    delay: index / 5,
                                }}
                                animate={{
                                    opacity: 1,
                                    x: 0
                                }}
                                className={`relative overflow-hidden text-[68px] ${customizeColorBasedOnNum(r.results_num)} text-black h-[110px] flex justify-center items-center mx-6 my-4 rounded-2xl`}>
                                {r.results_num == 51 || r.results_num == 52 ?
                                    <img
                                        className=' h-[36px] w-[100px] relative right-3'
                                        src={customizeImageByNum(r.results_num)} alt="character" /> :
                                    <>
                                        <div className='absolute -top-[150px] -bottom-[40px]'>
                                            <img
                                                className=' opacity-7 h-[300px]'
                                                src={customizeImageByNum(r.results_num)} alt="character" />
                                        </div>
                                        <div className='absolute -left-[5px] -bottom-[40px]'>
                                            <img
                                                className=' opacity-70 h-[160px]'
                                                src={customizeImageByNum(r.results_num)} alt="character" />
                                        </div>
                                    </>}
                                <div className={`
                                    ${r.results_num == 52 && " bg-white rounded-full p-3 text-[40px] left-2  "}
                                    ${r.results_num == 51 && "bg-black rounded-full p-3 text-[40px] left-2 text-white"} 
                                     ${r.results_num == 52 || r.results_num == 51 ? "" : "left-15 -top-1"}
                                    z-20 relative`}>
                                    <p>{customizeFormatResultNumber(r.results_num)}</p>
                                </div>
                            </motion.div>
                        }
                    </div>
                )
            })}
        </div>
    )
}

export default memo(SideSection)