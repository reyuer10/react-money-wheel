import React, { useState } from 'react'

function AdvertisementSection() {
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
            num: 25,
        },
        {
            idNum: 23,
            num: 10,
        },
        {
            idNum: 24,
            num: 5,
        },
        {
            idNum: 25,
            num: 3,
        },
        {
            idNum: 26,
            num: 1,
        },
        {
            idNum: 27,
            num: 50,
        },
    ])
    return (
        <div className='text-4xl font-bold'>
            <div className='h-[800px] w-[800px] overflow-hidden rounded-full bg-black flex border border-white relative'>
                {num.map((n, index) => {
                    return (
                        <div
                            className={`
                            wheel-clip-path absolute  left-[310px]  flex border-x-5 border-white justify-center text-white h-[400px] w-[90px] origin-bottom-right 
                             ${n.num == 50 && 'bg-black'}
                             ${n.num == 25 && 'bg-red-500'}
                             ${n.num == 10 && 'bg-yellow-500'}
                             ${n.num == 5 && 'bg-blue-500'}
                             ${n.num == 3 && 'bg-pink-500'}
                             ${n.num == 1 && 'bg-orange-500'}
                            `}
                            style={{ transform: `rotate(calc(13.3deg * ${index}))` }}
                            key={index}>
                            <div className="relative top-10 ">
                                {n.num}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AdvertisementSection