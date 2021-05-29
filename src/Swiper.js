import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination]);

export const SwiperComponent = () => {
  return (
    <Swiper pagination={true} className="mySwiper">
      <SwiperSlide>
        <img alt="swiper-pic" src="https://via.placeholder.com/600/f66b97" />
      </SwiperSlide>
      <SwiperSlide>
        <img alt="swiper-pic" src="https://via.placeholder.com/600/f66b97" />
      </SwiperSlide>
      <SwiperSlide>
        <img alt="swiper-pic" src="https://via.placeholder.com/150/92c952" />
      </SwiperSlide>
      <SwiperSlide>
        <img alt="swiper-pic" src="https://via.placeholder.com/600/f66b97" />
      </SwiperSlide>
      <SwiperSlide>
        <img alt="swiper-pic" src="https://via.placeholder.com/150/92c952" />
      </SwiperSlide>
      <SwiperSlide>
        <img alt="swiper-pic" src="https://via.placeholder.com/600/f66b97" />
      </SwiperSlide>
      <SwiperSlide>
        <img alt="swiper-pic" src="https://via.placeholder.com/600/f66b97" />
      </SwiperSlide>
      <SwiperSlide>
        <img alt="swiper-pic" src="https://via.placeholder.com/600/f66b97" />
      </SwiperSlide>
      <SwiperSlide>
        <img alt="swiper-pic" src="https://via.placeholder.com/600/f66b97" />
      </SwiperSlide>
    </Swiper>
  );
};
