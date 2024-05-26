import React from "react";
import EvosHaqidaMakumotlar from "../backend/EvosHaqida/EvosHqidaMlumot";
import Galireya from "../backend/EvosHaqida/Galireya";
import BizHaqimiz from "../backend/BizHaqimizda/BizhaqimizdaCorusel";
import Accodions from "./Accardion/Accardion";




const Bizhaqimizda = () => {
  return (
    <div className="bg-[#f9f8f8]">
      <img
        className="w-full"
        src="https://admin.evos.uz/uploads/banner1_6f89341462.png"
        alt=""
      />
      <div className="container mx-auto px-14">
        {/* 1 */}
        <div className="bg-white relative bottom-14 flex flex-col justify-center align-center w-full items-center rounded-lg border p-0 sm:p-[20px]">
          <h1 className="text-[30px] py-[30px] sm:text-[50px]">Biz haqimizda</h1>
          <div>
            <h1 className="text-center w-full text-[#585C7B] text-[20px] lg:w-[900px] sm:w-[500px] p-[30px]  ">
              Kompaniyamizning birinchi filiali 2006 yilda ochilgan bo’lib, shu
              kungacha muvaffaqiyatli faoliyat yuritib kelmoqdaligini
         bilarmidingiz? 15 yil davomida kompaniya avtobus bekatidagi kichik
         <span className="hidden  sm:flex">
              ovqatlanish joyidan zamonaviy, kengaytirilgan tarmoqqa aylandi, u
              bugungi kunda O‘zbekiston bo‘ylab 65 dan ortiq restoranlarni,
              o‘zining eng tezkor yetkazib berish xizmatini, zamonaviy
              IT-infratuzilmasini va 2000 dan ortiq xodimlarni o‘z ichiga oladi.
         </span>
            </h1>
          </div>
        </div>
        {/* 2 */}
        <div className="flex justify-evenly p-[50px] gap-11 flex-col lg:flex-row align-center items-center  ">
          {/* 1 */}
          <div className="flex align-center justify-center items-center gap-10 w-[200px] ">
            <div className="bg-[#F5FFF3] p-[20px] rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="35"
                viewBox="0 0 34 35"
                fill="none"
              >
                <path
                  d="M4.25 4.75V28.8333C4.25 29.6167 4.88325 30.25 5.66667 30.25H29.75V27.4167H7.08333V4.75H4.25Z"
                  fill="#309B42"
                />
                <path
                  d="M21.6654 21.335C22.2193 21.889 23.1146 21.889 23.6685 21.335L30.7519 14.2517L28.7487 12.2485L22.6669 18.3303L19.4185 15.0819C18.8646 14.528 17.9693 14.528 17.4154 15.0819L10.332 22.1652L12.3352 24.1684L18.4169 18.0866L21.6654 21.335Z"
                  fill="#309B42"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-[30px] font-bold ">15</h1>
              <h2 className="text-[#585C7B]">yillik buyuk tarix</h2>
            </div>
          </div>
          {/* 2 */}
          <div className="flex align-center justify-center items-center gap-10 w-[200px]">
            <div className="bg-[#F5FFF3] p-[20px] rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="35"
                viewBox="0 0 34 35"
                fill="none"
              >
                <path
                  d="M17.0007 24.5835L18.4173 21.7502V14.4657C20.8554 13.8324 22.6673 11.6323 22.6673 9.00016C22.6673 5.875 20.1258 3.3335 17.0007 3.3335C13.8755 3.3335 11.334 5.875 11.334 9.00016C11.334 11.6323 13.1459 13.8324 15.584 14.4657V21.7502L17.0007 24.5835ZM14.1673 9.00016C14.1673 7.43758 15.4381 6.16683 17.0007 6.16683C18.5632 6.16683 19.834 7.43758 19.834 9.00016C19.834 10.5627 18.5632 11.8335 17.0007 11.8335C15.4381 11.8335 14.1673 10.5627 14.1673 9.00016Z"
                  fill="#309B42"
                />
                <path
                  d="M23.0456 15.4643L22.2905 18.1956C25.9611 19.21 28.334 21.1607 28.334 23.1667C28.334 25.8471 23.6802 28.8334 17.0007 28.8334C10.3211 28.8334 5.66732 25.8471 5.66732 23.1667C5.66732 21.1607 8.04024 19.21 11.7122 18.1942L10.9572 15.4629C5.9464 16.8484 2.83398 19.7993 2.83398 23.1667C2.83398 27.9324 9.0574 31.6667 17.0007 31.6667C24.9439 31.6667 31.1673 27.9324 31.1673 23.1667C31.1673 19.7993 28.0549 16.8484 23.0456 15.4643Z"
                  fill="#309B42"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-[30px] font-bold">71</h1>
              <h2 className="text-[#585C7B]">
                restoran O‘zbekiston <br /> bo‘ylab
              </h2>
            </div>
          </div>
          {/* 3 */}
          <div className="flex align-center justify-center items-center gap-5 w-[250px]">
            <div className="bg-[#F5FFF3] p-[20px] rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="41"
                height="41"
                viewBox="0 0 41 41"
                fill="none"
              >
                <g clip-path="url(#clip0_10_7264)">
                  <path
                    d="M39.1056 34.5354C39.9686 34.5354 40.6681 33.8359 40.6681 32.9732C40.6681 32.1102 39.9686 31.4107 39.1056 31.4107H34.8093V27.1144C34.8093 26.2517 34.1099 25.5522 33.2471 25.5522C32.3841 25.5522 31.6846 26.2517 31.6846 27.1144V31.4107H27.3884C26.5256 31.4107 25.8262 32.1102 25.8262 32.9732C25.8262 33.8359 26.5256 34.5354 27.3884 34.5354H31.6846V38.8317C31.6846 39.6947 32.3841 40.3942 33.2471 40.3942C34.1099 40.3942 34.8093 39.6947 34.8093 38.8317V34.5354H39.1056Z"
                    fill="#009C37"
                  />
                  <path
                    d="M23.8292 26.6175C22.8511 25.9351 21.8059 25.3791 20.7127 24.9543C22.1669 23.6326 23.1316 21.7811 23.2994 19.7083C25.5046 17.5596 28.3952 16.3816 31.494 16.3816C33.9131 16.3816 36.2358 17.1101 38.2115 18.4879C38.9195 18.9817 39.893 18.8084 40.3868 18.1003C40.8803 17.3926 40.7069 16.4188 39.9992 15.9254C39.0212 15.243 37.9756 14.6873 36.8825 14.2621C38.4871 12.8037 39.496 10.7007 39.496 8.36676C39.496 3.97315 35.9218 0.398926 31.5282 0.398926C27.1349 0.398926 23.5606 3.97315 23.5606 8.36676C23.5606 10.6913 24.5613 12.7866 26.1549 14.2444C25.9367 14.3284 25.7198 14.4172 25.5049 14.5118C24.5271 14.9421 23.6079 15.4713 22.7531 16.0926C21.5742 13.1638 18.7041 11.0911 15.3584 11.0911C10.9651 11.0911 7.39058 14.6653 7.39058 19.0586C7.39058 21.3767 8.38576 23.4663 9.97084 24.9235C5.73287 26.5113 2.29658 29.9216 0.897658 34.271C0.433791 35.7133 0.679458 37.2428 1.57179 38.4675C2.46413 39.6918 3.84474 40.3941 5.35964 40.3941H18.9519C19.8146 40.3941 20.5141 39.6946 20.5141 38.8316C20.5141 37.9688 19.8146 37.2694 18.9519 37.2694H5.35964C4.85457 37.2694 4.39436 37.0353 4.09682 36.627C3.79927 36.2186 3.71748 35.7087 3.8719 35.2277C5.41609 30.4267 10.1256 27.0737 15.3242 27.0737C17.7431 27.0737 20.0661 27.8022 22.0418 29.1801C22.7495 29.6738 23.7233 29.5002 24.2171 28.7925C24.7105 28.0848 24.5372 27.111 23.8292 26.6175ZM31.5282 3.52362C34.1988 3.52362 36.3713 5.69617 36.3713 8.36676C36.3713 11.0371 34.1988 13.2099 31.5282 13.2099C28.8579 13.2099 26.685 11.0371 26.685 8.36676C26.685 5.69617 28.8579 3.52362 31.5282 3.52362ZM15.3584 14.2155C18.029 14.2155 20.2016 16.3883 20.2016 19.0586C20.2016 21.7292 18.029 23.9017 15.3584 23.9017C12.6878 23.9017 10.5153 21.7292 10.5153 19.0586C10.5153 16.3883 12.6878 14.2155 15.3584 14.2155Z"
                    fill="#009C37"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_10_7264">
                    <rect
                      width="40"
                      height="40"
                      fill="white"
                      transform="translate(0.667969 0.398926)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>
              <h1 className="text-[30px] font-bold">3 000 +</h1>
              <h2 className="text-[#585C7B]">Xodimlar</h2>
            </div>
          </div>
        </div>
        {/* 3 */}
        <EvosHaqidaMakumotlar />
        {/* 4 galereyasi */}
        <div>
          <h1 className="text-[40px] py-[30px] font-bold  ">Galereya</h1>
          <Galireya />
        </div>
        {/* email 5 */}
        <div className="mt-[180px] mb-[80px]">
          <div className="flex align-center items-center bg-[#32724E] p-[50px] justify-betweenb rounded-lg gap-[30px]  flex-col lg:flex-row ">
            {/* 1 */}
            <div className="w-[100px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="78"
                height="78"
                viewBox="0 0 78 78"
                fill="none"
              >
                <g clip-path="url(#clip0_27_7487)">
                  <path
                    d="M47.176 65.0002C47.176 72.18 41.3554 78 34.1756 78C26.9958 78 21.1758 72.18 21.1758 65.0002C21.1758 57.8204 26.9958 51.9998 34.1756 51.9998C41.3554 51.9998 47.176 57.8204 47.176 65.0002Z"
                    fill="#FFBA08"
                  />
                  <path
                    opacity="0.3"
                    d="M47.176 65.0004C47.176 72.1802 41.3554 78.0002 34.1756 78.0002C26.9958 78.0002 21.1758 72.1802 21.1758 65.0004C21.1758 57.8206 26.9958 52 34.1756 52C41.3554 52 47.176 57.8206 47.176 65.0004Z"
                    fill="#EF4444"
                  />
                  <path
                    d="M56.9516 38.7436C45.934 37.1701 37.426 27.6963 37.426 16.2502C37.426 12.9998 38.121 9.91608 39.3529 7.11736C37.689 6.72757 35.9603 6.50024 34.1756 6.50024C21.631 6.50024 11.4258 16.7049 11.4258 29.25V38.3109C11.4258 44.7427 8.60802 50.8138 3.66458 54.9932C2.4006 56.0721 1.67578 57.6485 1.67578 59.3123C1.67578 62.4491 4.22694 65.0002 7.36308 65.0002H60.9881C64.1248 65.0002 66.676 62.4491 66.676 59.3123C66.676 57.6485 65.9512 56.0721 64.6544 54.964C59.8574 50.9049 57.0753 45.0123 56.9516 38.7436Z"
                    fill="url(#paint0_linear_27_7487)"
                  />
                  <path
                    d="M76.4262 16.2502C76.4262 25.2248 69.1506 32.4998 60.176 32.4998C51.2014 32.4998 43.9258 25.2248 43.9258 16.2502C43.9258 7.2756 51.2014 0 60.176 0C69.1506 0 76.4262 7.2756 76.4262 16.2502Z"
                    fill="url(#paint1_linear_27_7487)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_27_7487"
                    x1="-2.5"
                    y1="54.0002"
                    x2="59.5"
                    y2="19.0002"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FFBA08" />
                    <stop offset="1" stop-color="#FFDB7E" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_27_7487"
                    x1="42.5"
                    y1="37.5"
                    x2="60"
                    y2="-1.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#7A1CD0" />
                    <stop offset="1" stop-color="#6366F1" />
                  </linearGradient>
                  <clipPath id="clip0_27_7487">
                    <rect width="78" height="78" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>
              <h1 className="text-[19px] text-white w-[100%] sm:text-[24px] ">
                Yangi mahsulotlar, aktsiyalar, maxsus takliflar haqidagi so'nggi
                yangiliklarni olishni xohlaysizmi?
              </h1>
            </div>
            {/* 2 */}
            <div className="flex w-[100%] flex-col sm:flex-row">
              <div>
                <input
                  className="w-[170px] h-[40px] p-[5px] rounded-l outline-none sm:w-[200px]"
                  type="text"
                  placeholder="✉︎  Your Email"
                />
              </div>
              <div>
                <button className="h-[40px] bg-[#309B42] text-white px-[30px] text-[15px] rounded-r mx-auto ">
                  Yuborish
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* 6 */}
        <div className="flex flex-col lg:flex-row ">
          {/* 1 */}
          <div className="bg-white p-[50px] leading-[60px] w-[400px] ">
            <h1 className="text-[45px] font-bold text-[#309B42]">2 000 +</h1>
            <h2 className="text-[20px] text-[#5b6871]">Har kuni baxtli mijozlardan ijobiy fikrlar</h2>
            <div className="flex">
              <div>
              <img src="user1.svg" alt="" />
              </div>
              <div>
              <img className="relative right-5" src="user3.svg" alt="" />
              </div> 
              <div>
                <img className="relative right-10" src="user2.svg" alt="" />
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="w-[75%]">
           <BizHaqimiz/>
          </div>
        </div>
        {/* 7 Ko'p So'raladigan savollar */}
        <div className="bg-[#32724E]">
          <h1 className="flex justify-center items-center py-[50px] text-[30px] text-white mt-[50px] sm:text-[50px]">Ko'p so'raladigan savollar</h1>
          <div className="mb-[50px]">
          <Accodions/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bizhaqimizda;
