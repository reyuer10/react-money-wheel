import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';


import ads1 from "../assets/pictures/ads_1.jpg";
import ads2 from "../assets/pictures/ads_2.jpg";
import ads3 from "../assets/pictures/ads_3.jpg";
import ads4 from "../assets/pictures/ads_4.jpg";



import 'swiper/css';
import 'swiper/css/effect-coverflow';

const images = [
    ads1,
    ads2,
    ads3,
    ads4,
];

const AdvertisementSection = () => {
    return (
        <div className="max-w-[450px] text-center">
            <Swiper
                modules={[Autoplay, EffectCoverflow]}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={2}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 60,
                    depth: 120,
                    modifier: 1,
                    slideShadows: false,
                }}
                className="w-full"
            >
                {images.map((src, i) => (
                    <SwiperSlide key={i}>
                        <img
                            src={src}
                            alt={`Flower ${i}`}
                            className={`rounded-xl h-full shadow-md shadow-white w-full object-cover`}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default AdvertisementSection;