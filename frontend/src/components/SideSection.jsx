import React from 'react'
import { motion } from "motion/react"

import red from "../assets/pictures/red-icon.png"
import blue from "../assets/pictures/blueIcon.png"
import yellow from "../assets/pictures/yellowIcon.png"
import pink from "../assets/pictures/pinkicon.png"
import white from "../assets/pictures/orangeIcon.png"


function SideSection({ results }) {
    console.log(results)

    function customizeColorBasedOnNum(num) {
        if (num == 25) return "bg-gradient-to-r from-red-500 via-red-700 to-red-900 text-white text-shadow-side-section border-4 border-red-200 shadow-xl shadow-red-700"
        if (num == 10) return "bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-800 text-white text-shadow-side-section border-4 border-yellow-200 shadow-xl shadow-yellow-700"
        if (num == 5) return " bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 bg-blue-600 text-white text-shadow-side-section border-4 border-blue-200 shadow-xl shadow-blue-700"
        if (num == 3) return "bg-gradient-to-r from-pink-500 via-pink-700 to-pink-900 text-white text-shadow-side-section border-4 border-pink-200 shadow-xl shadow-pink-700"
        if (num == 1) return "bg-gradient-to-r from-orange-500 via-orange-600 to-orange-900 text-white text-shadow-side-section border-4 border-orange-200 shadow-xl shadow-orange-700"
    }


    function customizeImageByNum(num) {
        if (num == 25) return red
        if (num == 10) return yellow
        if (num == 5) return blue
        if (num == 3) return pink
        if (num == 1) return white
    }

    return (
        <div className='text-4xl font-bold'>
            {results.map((r, index) => {
                return (
                    <motion.div
                        key={index}>
                        {index == 0 ? <motion.div
                            initial={{
                                opacity: 0,
                                x: index == 0 ? -500 : 0,
                            }}
                            transition={{
                                duration: 1,
                            }}
                            animate={{
                                opacity: 1,
                                x: index == 0 ? 0 : 1,
                            }}
                            className={` relative overflow-hidden text-[72px] ${customizeColorBasedOnNum(r.results_num)} text-black h-[240px] flex justify-center items-center m-6 rounded-2xl`}>
                            <div className='absolute -top-[250px] -bottom-[40px]'>
                                <img
                                    className=' opacity-5 h-[500px]'
                                    src={customizeImageByNum(r.results_num)} alt="character" />
                            </div>
                            <div className='absolute left-[10px]'>
                                <img
                                    className=' opacity-70 h-[200px]'
                                    src={customizeImageByNum(r.results_num)} alt="character" />
                            </div>
                            <div className='z-20 relative left-20 -top-1'>
                                <p >{r.results_num}</p>
                            </div>
                        </motion.div> : <div
                            className={`relative overflow-hidden text-[72px] ${customizeColorBasedOnNum(r.results_num)} text-black h-[120px] flex justify-center items-center m-6 rounded-2xl`}>
                            <div className='absolute -top-[250px] -bottom-[40px]'>
                                <img
                                    className=' opacity-5 h-[500px]'
                                    src={customizeImageByNum(r.results_num)} alt="character" />
                            </div>
                            <div className='absolute -left-[5px] -bottom-[40px]'>
                                <img
                                    className=' opacity-70 h-[200px]'
                                    src={customizeImageByNum(r.results_num)} alt="character" />
                            </div>
                            <div className='z-20 relative left-20 -top-1'>
                                <p >{r.results_num}</p>
                            </div>
                        </div>}
                    </motion.div>
                )
            })}
        </div>
    )
}

export default SideSection