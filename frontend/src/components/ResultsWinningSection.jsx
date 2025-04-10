import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react'

import red from "../assets/pictures/red-icon.png"
import blue from "../assets/pictures/blueIcon.png"
import yellow from "../assets/pictures/yellowIcon.png"
import pink from "../assets/pictures/pinkicon.png"
import white from "../assets/pictures/orangeIcon.png"



function ResultsWinningSection({ resultNumber, percentage }) {
    const [countNum, setCountNum] = useState(0)
    function findWinningNumPercentage() {
        const percentageData = percentage.find((p, index) => p?.resultName == resultNumber);
        const percentageNumToString = String(percentageData?.calc).replace("%", "")
        return percentageData ? percentageNumToString : null
    }


    const [numData, setNumData] = useState([
        {
            numberId: 0,
            number: 1,
            numCustomizeBackgroundColor: "bg-gradient-to-r from-orange-500 via-orange-600 to-orange-900 text-white text-shadow-side-section border-8 border-orange-200 shadow-xl shadow-orange-700",
            numImage: white,
            numFormat: 1,
        },
        {
            numberId: 1,
            number: 3,
            numCustomizeBackgroundColor: "bg-gradient-to-r from-pink-500 via-pink-700 to-pink-900 text-white text-shadow-side-section border-8 border-pink-200 shadow-xl shadow-pink-700",
            numImage: pink,
            numFormat: 3,
        },
        {
            numberId: 2,
            number: 5,
            numCustomizeBackgroundColor: "bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 bg-blue-600 text-white text-shadow-side-section border-8 border-blue-200 shadow-xl shadow-blue-700",
            numImage: blue,
            numFormat: 5,
        },
        {
            numberId: 3,
            number: 10,
            numCustomizeBackgroundColor: "bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-800 text-white text-shadow-side-section border-8 border-yellow-200 shadow-xl shadow-yellow-700",
            numImage: yellow,
            numFormat: 10,
        },
        {
            numberId: 4,
            number: 25,
            numCustomizeBackgroundColor: "bg-gradient-to-r from-red-500 via-red-700 to-red-900 text-white text-shadow-side-section border-8 border-red-200 shadow-xl shadow-red-700",
            numImage: red,
            numFormat: 25,
        },
        {
            numberId: 5,
            number: 51,
            numCustomizeBackgroundColor: "text-shadow-side-section bg-white border-8 border-black ring-2 ring-white text-shadow-side-section",
            numImage: null,
            numFormat: 50,
        },
        {
            numberId: 6,
            number: 52,
            numCustomizeBackgroundColor: "text-shadow-side-section bg-black border-8 border-black ring-2 ring-white text-shadow-side-section",
            numImage: null,
            numFormat: 50,
        },
    ])

    useEffect(() => {
        let intervalId;

        intervalId = setInterval(() => {
            setCountNum(prevCountNum => prevCountNum + 1)
        }, 1);

        if (countNum >= findWinningNumPercentage()) {
            clearInterval(intervalId)
        }

        return () => {
            clearInterval(intervalId)
        }
    }, [countNum]);

    function customizeImageBasedOnNum(num) {
        return numData.find(n => n.number == num)?.numImage
    }

    function customizeColorBasedOnNum(num) {
        return numData.find(n => n.number == num)?.numCustomizeBackgroundColor
    }


    function customizeFormatBasedOnNum(num) {
        if (num == 51 || num == 52) return 50
        if (num == 25) return 25
        if (num == 10) return 10
        if (num == 5) return 5
        if (num == 3) return 3
        if (num == 1) return 1
    }



    return (
        <div className='text-center '>
            <motion.div
                transition={{
                    delay: 4,
                    duration: 2,
                }}
                animate={{
                    x: -700,
                    y: -1900,
                    scale: 0.2,
                }}
                className={`${customizeColorBasedOnNum(resultNumber)}
                 rounded-3xl flex justify-evenly items-center text-white text-[300px] poppins-black text-shadow h-[500px] w-[800px] overflow-hidden
                 `}>
                {resultNumber == 51 || resultNumber == 52 ? null : <>
                    <img
                        className='h-[60%] z-20'
                        src={customizeImageBasedOnNum(resultNumber)}
                        alt="image_character"
                    />
                </>}

                <p className={`
                    ${resultNumber == 51 && "bg-black rounded-full"}
                    ${resultNumber == 52 && "text-black bg-white rounded-full"}
                    z-20 px-6`}>
                    {customizeFormatBasedOnNum(resultNumber)}
                </p>
            </motion.div>
        </div>
    )
}

export default ResultsWinningSection