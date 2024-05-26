import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';
import Corusel1 from '../backend/corusel/corusel1';
import Corusel2 from '../backend/corusel/corusel2';
import Corusel3 from '../backend/corusel/corusel3';
import Corusel4 from '../backend/corusel/corusel4';
import Corusel5 from '../backend/corusel/corusel5';

export default function Corusel() {
  return (
    <div className='container mx-auto px-14'>
      <>
        <Swiper style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-navigation-bottom': '100px',
          '--swiper-navigation-size': '14px'
        }} loop={true} navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <Corusel1/>
          </SwiperSlide>
          <SwiperSlide>
            <Corusel2/>
          </SwiperSlide>
          <SwiperSlide>
            <Corusel3/>
          </SwiperSlide>
          <SwiperSlide>
            <Corusel4/>
          </SwiperSlide>
          <SwiperSlide>
            <Corusel5/>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
}