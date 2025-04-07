import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react'

function ResultsWinningSection({ resultNumber, percentage }) {
    const [countNum, setCountNum] = useState(0)
    function findWinningNumPercentage() {
        const percentageData = percentage.find((p, index) => p?.resultName == resultNumber);
        const percentageNumToString = String(percentageData?.calc).replace("%", "")
        return percentageData ? percentageNumToString : null
    }

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

    // console.log(countNum)
    function customizePercentageBarColor(num) {
        if (num == 25) return "border-6 border-red-200 bg-red-500";
        if (num == 10) return "border-6 border-yellow-200 bg-yellow-500";
        if (num == 5) return "border-6 border-pink-20 bg-blue-500";
        if (num == 3) return "border-6 border-pink-200 bg-pink-500";
        if (num == 1) return "border-6 border-orange-200 bg-orange-500";
    }

    function customizePercentageBarProgressColor(num) {
        if (num == 25) return "bg-red-700";
        if (num == 10) return "bg-yellow-700";
        if (num == 5) return "bg-blue-700";
        if (num == 3) return "bg-pink-700";
        if (num == 1) return "bg-orange-700";
    }


    return (
        <div className='w-[800px] text-center'>
            <motion.div
                transition={{
                    delay: 4,
                    duration: 2,
                }}
                animate={{
                    x: -650,
                    y: -2000,
                    scale: 0,
                    opacity: 0,
                }}
                className='text-white text-[300px] poppins-black'>
                {resultNumber}
            </motion.div>
            <motion.div
                transition={{
                    delay: 4,
                    duration: 2,
                }}
                animate={{
                    x: 300,
                    y: -400,
                    scale: 0,
                    opacity: 0,
                }}
                className='text-white text-[52px] poppins-black flex items-center space-x-2'>
                <div className={`${customizePercentageBarColor(resultNumber)} w-full h-[80px] rounded-full overflow-hidden`}>
                    <div
                        className={` transition-all h-[80px] ${customizePercentageBarProgressColor(resultNumber)} p-4`}
                        style={{
                            width: `${countNum}%`
                        }}
                    >
                    </div>
                </div>
                <div className='text-white'>
                    <p>{countNum}%</p>
                </div>
            </motion.div>
        </div>
    )
}

export default ResultsWinningSection