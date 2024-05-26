import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import BizHaqim from './BizHaqBek/BizHaqim';


export default function BizHaqimiz() {
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
        <SwiperSlide><BizHaqim/></SwiperSlide>
        <SwiperSlide><BizHaqim/></SwiperSlide>
        <SwiperSlide><BizHaqim/></SwiperSlide>
        <SwiperSlide><BizHaqim/></SwiperSlide>
      </Swiper>
    </>
  );
}