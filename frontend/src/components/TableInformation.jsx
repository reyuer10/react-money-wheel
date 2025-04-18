import React, { memo, useCallback, useContext, useEffect, useMemo, useState } from 'react'

import red from "../assets/pictures/red-icon.png"
import blue from "../assets/pictures/blueIcon.png"
import yellow from "../assets/pictures/yellowIcon.png"
import pink from "../assets/pictures/pinkicon.png"
import white from "../assets/pictures/orangeIcon.png"
import casinoPlusBlack from "../assets/pictures/casino-logo.png"
import casinoPlusWhite from "../assets/pictures/casinoPlusWhite.png"
import { MoneyWheelContext } from '../App'

function TableInformation() {
    const {
        fastNumInterval,
        count,
        setCount
    } = useContext(MoneyWheelContext)

    const num = useMemo(() => [
        {
            idNum: 1,
            num: 25,
            inputNum: 25,
        },
        {
            idNum: 2,
            num: 10,
            inputNum: 10,
        },
        {
            idNum: 3,
            num: 5,
            inputNum: 5,
        },
        {
            idNum: 4,
            num: 3,
            inputNum: 3,
        },
        {
            idNum: 5,
            num: 1,
            inputNum: 1,
        },
        {
            idNum: 6,
            num: 25,
            inputNum: 25,
        },

        {
            idNum: 7,
            num: 10,
            inputNum: 10,
        },
        {
            idNum: 8,
            num: 5,
            inputNum: 5,
        },
        {
            idNum: 9,
            num: 3,
            inputNum: 3,
        },
        {
            idNum: 10,
            num: 1,
            inputNum: 1,
        },
        {
            idNum: 11,
            num: 50,
            inputNum: 52,
        },
        {
            idNum: 12,
            num: 25,
            inputNum: 25,
        },
        {
            idNum: 13,
            num: 10,
            inputNum: 10,
        },
        {
            idNum: 14,
            num: 5,
            inputNum: 5,
        },
        {
            idNum: 15,
            num: 3,
            inputNum: 3,
        },
        {
            idNum: 16,
            num: 1,
            inputNum: 1,
        },
        {
            idNum: 17,
            num: 25,
            inputNum: 25,
        },
        {
            idNum: 18,
            num: 10,
            inputNum: 10,
        },
        {
            idNum: 19,
            num: 5,
            inputNum: 5,
        },
        {
            idNum: 20,
            num: 3,
            inputNum: 3,
        },
        {
            idNum: 21,
            num: 1,
            inputNum: 1,
        },
        {
            idNum: 22,
            num: 50,
            inputNum: 51,
        },
    ], [])

    const numColor = useMemo(() => [
        {
            numberId: 0,
            number: 1,
            numberColorBackground: "bg-orange-500",
            numberImage: white,
            numBorderStyle: "bg-orange-600 rounded-full h-[80px] w-[80px] shadow-md shadow-black flex justify-center items-center",
        },
        {
            numberId: 1,
            number: 3,
            numberColorBackground: "bg-pink-500",
            numberImage: pink,
            numBorderStyle: "bg-pink-600 rounded-full h-[80px] w-[80px] shadow-md shadow-black flex justify-center items-center",
        },
        {
            numberId: 2,
            number: 5,
            numberColorBackground: "bg-blue-500",
            numberImage: blue,
            numBorderStyle: "bg-blue-600 rounded-full h-[80px] w-[80px] shadow-md shadow-black flex justify-center items-center",
        },
        {
            numberId: 3,
            number: 10,
            numberColorBackground: "bg-yellow-500",
            numberImage: yellow,
            numBorderStyle: "bg-yellow-600 rounded-full h-[80px] w-[80px] shadow-md shadow-black flex justify-center items-center",
        },
        {
            numberId: 4,
            number: 25,
            numberColorBackground: "bg-red-500",
            numberImage: red,
            numBorderStyle: "bg-red-600 rounded-full h-[80px] w-[80px] shadow-md shadow-black flex justify-center items-center",
        },
        {
            numberId: 5,
            number: 51,
            numberColorBackground: "bg-black",
            numberImage: null,
            numBorderStyle: "text-black bg-white rounded-full h-[80px] w-[80px] shadow-md shadow-black flex justify-center items-center",
        },
        {
            numberId: 6,
            number: 52,
            numberColorBackground: "bg-white",
            numberImage: null,
            numBorderStyle: "bg-black rounded-full h-[80px] w-[80px] shadow-md shadow-black flex justify-center items-center",
        },

    ]
        , [])




    const initializeColorBasedOnNum = useCallback((num) => {
        return numColor.find(n => n.number == num)?.numberColorBackground
    }, [])

    const CustomizeColorBorderBasedOnNum = useCallback((num) => {
        return numColor.find(n => n.number == num)?.numBorderStyle
    }, [])


    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => prevCount + fastNumInterval);
        }, 100);


        return () => {
            clearTimeout(interval)
        }
    }, [fastNumInterval]);

    return (
        <div className='text-[45px] font-bold'>
            <div className='bg-pink-500 shadow-md shadow-black w-[80px] h-[80px] z-30 absolute left-[450px] wheel-pointer'>
            </div>

            {/*  */}
            <div
                className={` transition-all h-[920px] w-[920px] overflow-hidden shadow-sm shadow-pink-500 rounded-full bg-black border-10 border-pink-500 relative`}
                style={{
                    transform: `rotate(${count}deg)`
                }}
            >
                <div className='bg-white w-[150px] h-[150px] shadow-lg shadow-black  -rotate-27 p-4 border-6 border-pink-500 ring-4 ring-pink-700 rounded-full z-30 absolute left-[42%] top-[42%] flex justify-center items-center'>
                    <img src={casinoPlusBlack} alt="casinoPlusBlack" />
                </div>
                {num.map((n, index) => {
                    return (
                        <div
                            className={`
                        wheel-clip-path absolute  left-[315px] bottom-[50%] flex border-white justify-center text-white h-[470px] w-[135px] origin-bottom-right 
                        ${initializeColorBasedOnNum(n.inputNum)}
                        `}
                            style={{ transform: `rotate(calc(16.2deg * ${index}))` }}
                            key={index}>
                            <li className={`list-none absolute top-8 left-8 z-30 w-[15px] h-[15px] bg-[#ffffff] shadow-2xl shadow-yellow-300 light-drop-shadow animate-pulse rounded-full`}></li>
                            <li className={`
                                ${n.inputNum == 51 ? "right-2" : "right-8 "}
                                list-none absolute top-6 z-30 w-[15px] h-[15px] bg-[#ffffff] shadow-2xl shadow-yellow-300 light-drop-shadow animate-pulse rounded-full`}></li>
                            <div className="relative top-10 left-2">
                                <p className={`-rotate-10 text-shadow
                                    ${n.inputNum == 51 ? "relative left-3" : ""}
                                    ${CustomizeColorBorderBasedOnNum(n.inputNum)}`}>
                                    {n.num}
                                </p>
                                {n.inputNum == 51 ?
                                    <div className='relative -rotate-10 left-6 top-5'>
                                        <img
                                            className='h-[25px]'
                                            src={casinoPlusWhite}
                                            alt="casinoPlusBg"
                                        />
                                    </div>
                                    : null}
                                {n.inputNum == 52 ?
                                    <div className='relative -rotate-10 left-4 top-5 '>
                                        <img
                                            className='h-[25px]'
                                            src={casinoPlusBlack}
                                            alt="casinoPlusBg"
                                        />
                                    </div>
                                    : null}
                            </div>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default memo(TableInformation)