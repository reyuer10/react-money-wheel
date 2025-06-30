import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import noSmokingImg from "../assets/ads/nosmoke.png";

// import ads1 from "../assets/pictures/ads_1.jpg";
// import ads2 from "../assets/pictures/ads_2.jpg";
// import ads3 from "../assets/pictures/ads_3.jpg";
// import ads4 from "../assets/pictures/ads_4.jpg";

import one from "../assets/adver/1.jpg";
import two from "../assets/adver/dailytreats.jpg";
import three from "../assets/adver/3.jpg";
import four from "../assets/adver/4.jpg";
import six from "../assets/adver/slotmaster.jpg";
import seven from "../assets/adver/7.jpg";
import eight from "../assets/adver/kioskbaccarat.jpg";
import nine from "../assets/adver/summerfiesta.jpg";

import "swiper/css";
import "swiper/css/effect-coverflow";
import { useLocation } from "react-router-dom";

const images = [one, two, three, four, six, seven, eight, nine];

const AdvertisementSection = () => {
  const location = useLocation();
  return (
    <div className="max-w-[30vh] text-center">
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
        // stretch: 100,
        // depth: 200,
        coverflowEffect={{
          rotate: 0,
          stretch: 100,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <img
              src={src}
              alt={`Flower ${i}`}
              className={`rounded-xl shadow-xl shadow-black w-[90%] mx-auto object-cover`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className=" ">
        <img className="w-[40%] mx-auto" src={noSmokingImg} alt="no_smoking" />
      </div>
    </div>
  );
};

export default AdvertisementSection;
