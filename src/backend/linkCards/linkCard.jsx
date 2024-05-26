import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import JumpCorusel from "../jumpCardsCorusel/jumpCorusel";
import JumpCard2 from "../jumpCardsCorusel/jumpCard2";
import JumpCard3 from "../jumpCardsCorusel/jumpCard3";
import JumpCard4 from "../jumpCardsCorusel/jumpCard4";
import JumpCard5 from "../jumpCardsCorusel/jumpCard5";

export default function LinkCard() {
  return (
    <>
      <Swiper
         slidesPerView={5}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
         navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
       
      >        
       <SwiperSlide><JumpCorusel/></SwiperSlide>
        <SwiperSlide><JumpCard2/></SwiperSlide>
        <SwiperSlide><JumpCard3/></SwiperSlide>
        <SwiperSlide><JumpCard4/></SwiperSlide>
        <SwiperSlide><JumpCard5/></SwiperSlide>
      </Swiper>
    </>
  );
}
