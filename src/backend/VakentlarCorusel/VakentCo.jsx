import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import Vakent1 from './vakentCoruselBackend/Vakent1';
import Vakent2 from './vakentCoruselBackend/Vakent2';
import Vakent3 from './vakentCoruselBackend/Vakent3';

export default function Vakent() {
  return (
    
    <>
    
      <Swiper
          style={{
            '--swiper-navigation-color': '#209B42',
            '--swiper-pagination-color': '#209B42'
    
          }}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><Vakent1/></SwiperSlide>
        <SwiperSlide><Vakent2/></SwiperSlide>
        <SwiperSlide><Vakent3/></SwiperSlide>
      </Swiper>
    </>
  );
}