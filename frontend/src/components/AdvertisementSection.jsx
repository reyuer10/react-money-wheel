import React, { memo, useEffect, useState } from 'react'
import { motion } from 'motion/react'

import ads1 from "../assets/pictures/ads_1.jpg";
import ads2 from "../assets/pictures/ads_2.jpg";
import ads3 from "../assets/pictures/ads_3.jpg";
import ads4 from "../assets/pictures/ads_4.jpg";

function AdvertisementSection() {
    const [count, setCount] = useState(0)
    const [imageIndex, setImageIndex] = useState(1);
    const [isImageTransition, setIsImageTransition] = useState(false)

    const [slider, setSlider] = useState([
        {
            sliderId: 0,
            sliderNum: 1,
            sliderImage: ads1
        },
        {
            sliderId: 1,
            sliderNum: 2,
            sliderImage: ads2
        },
        {
            sliderId: 2,
            sliderNum: 3,
            sliderImage: ads3
        },
        {
            sliderId: 3,
            sliderNum: 4,
            sliderImage: ads1
        },
        {
            sliderId: 4,
            sliderNum: 5,
            sliderImage: ads4
        },
    ])


    useEffect(() => {
        const interval = setInterval(() => {
            setIsImageTransition(true)
            setImageIndex(prevImageIndex => prevImageIndex + 1)
            if (imageIndex == 4) {
                setImageIndex(0)
            }
        }, 5000);
        return () => {
            clearInterval(interval)
        }
    }, [imageIndex])


    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsImageTransition(false)
        }, 300);

        return () => {
            clearTimeout(timeout)
        }
    }, [isImageTransition])



    return (
        <div className='flex space-x-4 relative'>
            <motion.div
                initial={{
                    opacity: 0
                }}
                transition={{
                    duration: 0.5,
                    ease: "easeInOut"
                }}

                animate={{
                    opacity: isImageTransition ? 0 : 1,

                }}
                className='text-black flex justify-center items-center font-bold text-4xl'>
                <img
                    className='h-[80%] shadow-2xl shadow-white'
                    src={slider[imageIndex]?.sliderImage}
                    alt="ads_cur" />

            </motion.div>
            {/* <div className=''>
            </div>
            <div>

            </div>
            <div>

            </div> */}
        </div>
    )
}

export default memo(AdvertisementSection)