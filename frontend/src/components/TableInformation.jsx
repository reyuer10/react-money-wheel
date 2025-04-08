import React, { useEffect, useState } from 'react'
import casinoPlusWhite from "../assets/pictures/casinoPlusWhite.png"
import red from "../assets/pictures/red-icon.png"
import blue from "../assets/pictures/blueIcon.png"
import yellow from "../assets/pictures/yellowIcon.png"
import pink from "../assets/pictures/pinkicon.png"
import white from "../assets/pictures/orangeIcon.png"
import casinoPlusBlack from "../assets/pictures/casino-logo.png"

function TableInformation({ fastNumInterval, count, setCount }) {


    const [num, setNum] = useState([
        {
            idNum: 1,
            num: 25,
        },
        {
            idNum: 2,
            num: 10,
        },
        {
            idNum: 3,
            num: 5,
        },
        {
            idNum: 4,
            num: 3,
        },
        {
            idNum: 5,
            num: 1,
        },
        {
            idNum: 6,
            num: 25,
        },

        {
            idNum: 7,
            num: 10,
        },
        {
            idNum: 8,
            num: 5,
        },
        {
            idNum: 9,
            num: 3,
        },
        {
            idNum: 10,
            num: 1,
        },
        {
            idNum: 11,
            num: 50,
        },
        {
            idNum: 12,
            num: 25,
        },
        {
            idNum: 13,
            num: 10,
        },
        {
            idNum: 14,
            num: 5,
        },
        {
            idNum: 15,
            num: 3,
        },
        {
            idNum: 16,
            num: 1,
        },
        {
            idNum: 17,
            num: 25,
        },
        {
            idNum: 18,
            num: 10,
        },
        {
            idNum: 19,
            num: 5,
        },
        {
            idNum: 20,
            num: 3,
        },
        {
            idNum: 21,
            num: 1,
        },
        {
            idNum: 22,
            num: 50,
        },
    ])


    function initializeColorBasedOnNum(num) {
        if (num == 50) return "bg-black"
        if (num == 25) return "bg-red-500"
        if (num == 10) return "bg-yellow-500"
        if (num == 5) return "bg-blue-500"
        if (num == 3) return "bg-pink-500"
        if (num == 1) return "bg-orange-500"
    }

    function initializeImageBasedOnNum(num) {
        if (num == 25) return red
        if (num == 10) return yellow
        if (num == 5) return blue
        if (num == 3) return pink
        if (num == 1) return white
    }




    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => prevCount + fastNumInterval);
        }, 100);


        return () => {
            clearTimeout(interval)
        }
    }, [fastNumInterval]);

    return (
        <div className='text-[60px] font-bold'>
            <div className=''>
                <div className='bg-black w-[50px] h-[50px] z-30 absolute left-[440px] wheel-pointer'>
                </div>
            </div>
            <div
                className={`z-10 transition-all h-[920px] w-[920px] overflow-hidden rounded-full bg-black flex border-10 border-black relative`}
                style={{
                    transform: `rotate(${count}deg)`
                }}
            >
                <div className=''>
                    <div className='bg-white w-[150px] h-[150px] p-4 border-6 border-black rounded-full z-30 absolute left-[43%] top-[44%] flex justify-center items-center'>
                        <img src={casinoPlusBlack} alt="casinoPlusBlack" />
                    </div>
                </div>
                {num.map((n, index) => {
                    return (
                        <div
                            // border-x-5
                            className={`
                        wheel-clip-path absolute left-[315px] flex shadow-inner shadow-black  border-white justify-center text-white h-[450px] w-[135px] origin-bottom-right 
                        ${initializeColorBasedOnNum(n.num)}
                        `}
                            style={{ transform: `rotate(calc(16.2deg * ${index}))` }}
                            key={index}>
                            <li className=' list-none absolute top-10 z-30 w-[20px] h-[20px] bg-[#ffffff] shadow-2xl shadow-yellow-300 light-drop-shadow animate-pulse rounded-full'></li>
                            <div className="relative top-10 left-3">
                                <p className=' -rotate-10 text-shadow'>
                                    {n.num}
                                </p>
                                {/* {n.num == 50 ? null : <img
                                    className=''
                                    src={initializeImageBasedOnNum(n.num)}
                                    alt="image-character"
                                />} */}
                                {n.num == 50 ?
                                    <div className='relative -rotate-10 left-10'>
                                        <img
                                            className='h-[30px]'
                                            src={casinoPlusWhite}
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

export default TableInformation