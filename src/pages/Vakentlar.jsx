import React from "react";
import Vakent from "../backend/VakentlarCorusel/VakentCo";
import { Link } from "react-router-dom";

const Vakentlar = () => {
  return (
    <div className="bg-[#fbf9f9]">
      <div className="container mx-auto px-14">
        {/* Malumot */}
        <div className="flex py-[50px] justify-between flex-col lg:flex-row  ">
          <div>
            <h1 className="text-[40px] font-bold">Vakentlar</h1>
          </div>
          <div>
            <h1 className="w-[300px] text-[#6E7C87] text-[17px] sm:w-[500px]">
              Xodimlarimizga yaratib berayotgan sharoitimiz tufayli bugungi
              kunda kompaniyamiz O‘zbekistondagi talaba va yoshlar uchun eng
              yirik ish beruvchilardan biri ekanligidan haqli ravishda
              faxrlanamiz.
            </h1>
          </div>
        </div>
        {/* Card name */}
        <div className=" grid gap-[30px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3   ">
          {/* 1 */}
          <div className="bg-white p-10 flex flex-col justify-between hover:shadow-xl">
            <div>
              <div>
                <h1 className="text-[22px] font-bold">Call Centre operatori</h1>
              </div>
              <div>
                <ul className="list-disc text-[#309B42] leading-[40px]">
                  <li className="">
                    <span className="text-[#6E7C87] text-[17px]">
                      tajriba shart emas, biz sizga hamma narsani o'rgatamiz;
                    </span>
                  </li>
                  <li className="">
                    <span className="text-[#6E7C87] text-[17px]">
                      fikrni yaxshi ifoda etish qobiliyati;
                    </span>
                  </li>
                  <li className="">
                    <span className="text-[#6E7C87] text-[17px]">
                      nutq madaniyati va savodxonligi (o‘zbek va rus tillarini
                      hamda muloqot odob-axloq qoidalarini bilish);
                    </span>
                  </li>
                  <li className="">
                    <span className="text-[#6E7C87] text-[17px]">
                      yaxshi muloqot qobiliyatlari (aniqlik, bayonotlarning
                      mantiqiyligi, suhbatdoshga e'tiborlilik);
                    </span>
                  </li>
                  <li className="">
                    <span className="text-[#6E7C87] text-[17px]">
                      ziddiyatli vaziyatlarda shaxsning sheriklik harakati;
                    </span>
                  </li>
                  <li className="">
                    <span className="text-[#6E7C87] text-[17px]">
                      stressga chidamlilik
                    </span>
                  </li>
                  <li className="">
                    <span className="text-[#6E7C87] text-[17px]">
                      Xush kelibsiz:
                    </span>
                  </li>
                  <li className="">
                    <span className="text-[#6E7C87] text-[17px]">
                      - qo'llab-quvvatlash xizmati yoki qo'ng'iroq markazida ish
                      tajribasi;
                    </span>
                  </li>
                  <li className="">
                    <span className="text-[#6E7C87] text-[17px]">
                      -tarmoq qurilmalarining ishlash tamoyillarini tushunish
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex gap-7 flex-col lg:flex-row">
              <button className="border px-[55px] bg-[#f6f6f6] text-black border-[#f6f6f6] rounded-[6px] hover:bg-[#e3e3e3] py-[5px]">
                Batafsil
              </button>
              <button className="border px-[60px] bg-[#309B42] text-white border-[#f6f6f6] rounded-[6px] hover:bg-[#2d7138] py-[5px]">
                Topshiriq
              </button>
            </div>
          </div>
          {/* 2 */}
          <div className="bg-white flex flex-col justify-between p-10 hover:shadow-xl">
            <div>
              <div>
                <h1 className="text-[22px] font-bold">Yetkazib beruvchi</h1>
              </div>
              <div>
                <ul className="list-disc text-[#309B42] leading-[40px]">
                  <li className="">
                    <span className="text-[#6E7C87] text-[17px]">
                      Piyoda, velosipedda / avtotransportda, mashinada
                    </span>
                  </li>
                  <li className="">
                    <span className="text-[#6E7C87] text-[17px]">
                      Toshkent shahrini yaxshi bilish
                    </span>
                  </li>
                  <li className="">
                    <span className="text-[#6E7C87] text-[17px]">
                      Android smartfoniga ega bo'lish
                    </span>
                  </li>
                  <li className="">
                    <span className="text-[#6E7C87] text-[17px]">
                      Aniqlik va mas'uliyat
                    </span>
                  </li>
                  <li className="">
                    <span className="text-[#6E7C87] text-[17px]">
                      Buyurtmani o'z vaqtida yetkazib berish
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex gap-7 flex-col lg:flex-row ">
              <button className="border px-[55px] bg-[#f6f6f6] text-black border-[#f6f6f6] rounded-[6px] hover:bg-[#e3e3e3] py-[5px]">
                Batafsil
              </button>
              <button className="border px-[60px] bg-[#309B42] text-white border-[#f6f6f6] rounded-[6px] hover:bg-[#2d7138] py-[5px]">
                Topshiriq
              </button>
            </div>
          </div>
          {/* 3 */}
          <div className="bg-white p-10 flex flex-col justify-between hover:shadow-xl">
            <div>
              <div>
                <h1 className="text-[22px] font-bold">
                  Restoran ishchisi/universal xodim
                </h1>
              </div>
              <div>
                <ul className="list-disc text-[#309B42] leading-[40px]">
                  <li className="">
                    <span className="text-[#6E7C87] text-[17px]">
                      Tajriba shart emas, biz sizga o'rgatamiz
                    </span>
                  </li>
                  <li className="">
                    <span className="text-[#6E7C87] text-[17px]">
                      faoliyat;
                    </span>
                  </li>
                  <li className="">
                    <span className="text-[#6E7C87] text-[17px]">
                      javobgarlik;
                    </span>
                  </li>
                  <li className="">
                    <span className="text-[#6E7C87] text-[17px]">aniqlik;</span>
                  </li>
                  <li className="">
                    <span className="text-[#6E7C87] text-[17px]">
                      tabassum va ijobiylik;
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex gap-7  flex-col lg:flex-row">
              <button className="border px-[55px] bg-[#f6f6f6] text-black border-[#f6f6f6] rounded-[6px] hover:bg-[#e3e3e3] py-[5px]">
                Batafsil
              </button>
              <button className="border px-[60px] bg-[#309B42] text-white border-[#f6f6f6] rounded-[6px] hover:bg-[#2d7138] py-[5px]">
                Topshiriq
              </button>
            </div>
          </div>
        </div>
        {/* Asosiy profillar */}
        <div>
          <div>
            <h1 className="text-[40px] font-bold py-[70px]">
              Asosiy profillar
            </h1>
          </div>
          <div className="grid gap-[30px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
            {/* 1 */}
            <div className="bg-white p-[20px] ">
              <div className="bg-[#309B42] w-[60px] h-[60px] flex align-center items-center justify-center rounded-md relative bottom-[50px]">
                <svg
                  className=""
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <path
                    d="M30 9H25.5V6C25.5 4.3455 24.1545 3 22.5 3H13.5C11.8455 3 10.5 4.3455 10.5 6V9H6C4.3455 9 3 10.3455 3 12V27C3 28.6545 4.3455 30 6 30H30C31.6545 30 33 28.6545 33 27V12C33 10.3455 31.6545 9 30 9ZM13.5 6H22.5V9H13.5V6ZM6 27V12H12H24H30L30.0015 27H6Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div>
                <div>
                  <h1 className="text-[22px] font-bold py-[10px]">
                    Restoran direktori
                  </h1>
                </div>
                <div className="py-[10px] text-[#6E7C87]">
                  <h1>
                    Restoran direktori - bu restoranda samarali ish qura
                    oladigan, o'z jamoasining har bir xodimini oson, tez va
                    to'g'ri ishlashga o'rgatadigan, jamoada yoqimli,
                    rag'batlantiruvchi muhitni yaratadigan, barcha biznesda
                    ishlarni tartibga sola oladigan tashabbuskor rahbar.{" "}
                  </h1>
                </div>
                <div>
                  <h1 className="text-[#6E7C87] py-[10px]">
                    Restoran direktori kompaniya standartlari va qoidalariga
                    muvofiq ishlaydi, lekin har doim o'z filialini
                    takomillashtirish va targ'ib qilish uchun o'z g'oyalarini
                    taklif qilishga tayyor.
                  </h1>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className="bg-white p-[20px] ">
              <div className="bg-[#309B42] w-[60px] h-[60px] flex align-center items-center justify-center rounded-md relative bottom-[50px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <path
                    d="M30 9H25.5V6C25.5 4.3455 24.1545 3 22.5 3H13.5C11.8455 3 10.5 4.3455 10.5 6V9H6C4.3455 9 3 10.3455 3 12V28.5C3 30.1545 4.3455 31.5 6 31.5H30C31.6545 31.5 33 30.1545 33 28.5V12C33 10.3455 31.6545 9 30 9ZM22.5 6V9H13.5V6H22.5ZM12 12H24H30V16.5H6V12H12ZM6 28.5V19.5H15V22.5H21V19.5H30L30.0015 28.5H6Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div>
                <div>
                  <h1 className="text-[22px] font-bold py-[10px]">
                    Umumiy restoran ishchisi
                  </h1>
                </div>
                <div className="py-[10px] text-[#6E7C87]">
                  <h1>
                    Bizning muassasamizning yuzi. Mehmonlarni iliq kutib
                    oladigan odam. O'zbekistonda siz hamma joyda
                    ovqatlanishingiz mumkin, ammo tanlov qalb tanlagan joyga
                    tushadi.{" "}
                  </h1>
                </div>
                <div>
                  <h1 className="text-[#6E7C87] py-[10px]">
                    Sharqona mehmondo'stlik bilan u mehmonga taomlarni tanlashda
                    yordam beradi, uning afzalliklariga e'tibor beradi,
                    pishirish vaqti haqida ogohlantiradi, to'lovni qabul qiladi,
                    assortimentdagi har bir taomni qanday pishirishni biladi,
                    tayyor buyurtma beradi.
                  </h1>
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className="bg-white p-[20px] ">
              <div className="bg-[#309B42] w-[60px] h-[60px] flex align-center items-center justify-center rounded-md relative bottom-[50px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <path
                    d="M31.158 15.234L29.106 9.0765C28.4925 7.236 26.778 6 24.8385 6H11.1615C9.222 6 7.5075 7.236 6.894 9.0765L4.842 15.234C3.762 15.6885 3 16.7565 3 18V25.5C3 26.6295 3.6345 27.603 4.5585 28.1145C4.539 28.2135 4.5 28.3035 4.5 28.407V31.5C4.5 32.3295 5.1705 33 6 33H7.5C8.3295 33 9 32.3295 9 31.5V28.5H27V31.5C27 32.3295 27.6705 33 28.5 33H30C30.8295 33 31.5 32.3295 31.5 31.5V28.407C31.5 28.3035 31.461 28.212 31.4415 28.1145C32.3655 27.603 33 26.6295 33 25.5V18C33 16.7565 32.238 15.6885 31.158 15.234ZM6 25.5V18H30L30.003 25.5H6ZM11.1615 9H24.837C25.4835 9 26.0565 9.411 26.2605 10.026L27.9195 15H8.0805L9.738 10.026C9.9435 9.411 10.5165 9 11.1615 9Z"
                    fill="white"
                  />
                  <path
                    d="M9.75 24C10.9926 24 12 22.9926 12 21.75C12 20.5074 10.9926 19.5 9.75 19.5C8.50736 19.5 7.5 20.5074 7.5 21.75C7.5 22.9926 8.50736 24 9.75 24Z"
                    fill="white"
                  />
                  <path
                    d="M26.25 24C27.4926 24 28.5 22.9926 28.5 21.75C28.5 20.5074 27.4926 19.5 26.25 19.5C25.0074 19.5 24 20.5074 24 21.75C24 22.9926 25.0074 24 26.25 24Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div>
                <div>
                  <h1 className="text-[22px] font-bold py-[10px]">
                    Yetkazib beruvchi/kuryer
                  </h1>
                </div>
                <div className="py-[10px] text-[#6E7C87]">
                  <h1>
                    EVOSdagi kuryer - bu buyurtmalar bilan shug'ullanadigan va
                    ularni o'z vaqtida kerakli manzilga etkazib beradigan
                    g'amxo'r va samarali xodim.
                  </h1>
                </div>
                <div>
                  <h1 className="text-[#6E7C87] py-[10px]">
                    Biz oilaga o'zlariga qulay vaqtda va qulay yo'l bilan -
                    avtomobilda, velosipedda, mopedda, skuterda yoki piyoda pul
                    ishlash istagida bo'lgan mas'uliyatli shaxslarni qabul
                    qilishdan doimo mamnunmiz.
                  </h1>
                </div>
                <div>
                  <h1 className="text-[#6E7C87] py-[10px]">
                    Bizning kuryerlarimiz doimo intiqlik bilan kutiladi - axir,
                    ular odamlarga mazali, issiq, sevimli taomlarni olib
                    kelishadi!
                  </h1>
                </div>
              </div>
            </div>
            {/* 4 */}
            <div className="bg-white p-[20px] ">
              <div className="bg-[#309B42] w-[60px] h-[60px] flex align-center items-center justify-center rounded-md relative bottom-[50px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <path
                    d="M24.8493 32.9985C24.8568 32.9985 24.8838 32.9985 24.8913 32.9985C25.6833 32.9985 26.4318 32.6865 26.9988 32.1195L31.0668 28.0515C31.6533 27.465 31.6533 26.517 31.0668 25.9305L25.0668 19.9305C24.4803 19.344 23.5323 19.344 22.9458 19.9305L20.5548 22.3215C19.4463 21.9915 17.3778 21.2415 16.0668 19.9305C14.7558 18.6195 14.0058 16.551 13.6758 15.4425L16.0668 13.0515C16.6533 12.465 16.6533 11.517 16.0668 10.9305L10.0668 4.9305C9.50433 4.368 8.50833 4.368 7.94583 4.9305L3.87932 8.9985C3.30932 9.5685 2.98832 10.3515 3.00032 11.151C3.03482 13.287 3.60032 20.706 9.44733 26.553C15.2943 32.4 22.7133 32.964 24.8493 32.9985ZM9.00783 8.112L12.8868 11.991L10.9473 13.9305C10.5888 14.2875 10.4358 14.8035 10.5408 15.2985C10.5768 15.471 11.4573 19.5615 13.9473 22.0515C16.4373 24.5415 20.5278 25.422 20.7003 25.458C21.1998 25.563 21.7113 25.41 22.0683 25.0515L24.0078 23.112L27.8868 26.991L24.8778 29.9985C23.0058 29.967 16.6008 29.4645 11.5683 24.4305C6.51933 19.3815 6.03032 12.954 6.00032 11.1195L9.00783 8.112ZM29.9988 16.4985H32.9988C32.9988 8.8035 27.1893 3 19.4838 3V6C25.5768 6 29.9988 10.4145 29.9988 16.4985Z"
                    fill="white"
                  />
                  <path
                    d="M19.498 12C22.6525 12 23.998 13.3455 23.998 16.5H26.998C26.998 11.6625 24.3355 9 19.498 9V12Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div>
                <div>
                  <h1 className="text-[22px] font-bold py-[10px]">
                    Call-center operatori
                  </h1>
                </div>
                <div className="py-[10px] text-[#6E7C87]">
                  <h1>
                    Mijozlarni qo'llab-quvvatlash xizmatida ishlash boshqalarga
                    yordam berish va buni professional, tez va samarali bajarish
                    uchun samimiy istakni anglatadi.
                  </h1>
                </div>
                <div>
                  <h1 className="text-[#6E7C87] py-[10px]">
                    Call-centre operatori biz uchun haqiqatan ham muhim xodim
                    bo‘lib, u buyurtmalarni qabul qiladi, har qanday savollarga
                    xushmuomalalik bilan javob beradi, potentsial va doimiy
                    mijozlarimizga mahsulotlar, takliflar, yetkazib berish va
                    to‘lov shartlari haqida maslahat beradi.
                  </h1>
                </div>
                <div>
                  <h1 className="text-[#6E7C87] py-[10px]">
                    Ushbu xodimning asosiy vazifalari orasida turli kanallar
                    orqali olingan so'rovlarni qayta ishlash, xizmatlarimizni
                    rivojlantirishda faol ishtirok etish va murojaat qilganlar
                    uchun yuzaga keladigan muammolarni hal qilish kiradi.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Karyera hikoyasi */}
        <div>
          <div>
            <h1 className="text-[40px] font-bold py-[70px]">
              Karyera hikoyalari
            </h1>
          </div>
          <Vakent />
        </div>
      </div>
      {/* Biz bilan ishlashning afzalliklari */}
      <div className="bg-[#32724E] py-[70px] px-[20px] rounded-t-[60px] rounded-b-[120px] mt-[70px] mb-[50px]  ">
        <div className="container mx-auto px-14">
          <div className="flex flex-col sm:flex-row ">
            <div className="w-1/2  border-white ">
              <h1 className="text-white text-[36px] w-[300px] sm:w-[400px]">
                Biz bilan ishlashning afzalliklari
              </h1>
              <h2 className="text-white w-[260px] sm:w-[500px] ">
                Uzoq tarix davomida EVOS HR brendi bir necha bor turli
                mukofotlarda ishtirok etib, “Yil brendi”, “O‘zbekistonning eng
                yaxshi ish beruvchisi” kabi nominatsiyalar bo‘yicha sovrinlarni
                qo‘lga kiritgan. Ushbu mukofotlarga mutlaqo munosibmiz va biz
                EVOS hozir faoliyat yuritayotgan biznesni rivojlantirish
                darajasidan faxrlanamiz
              </h2>
            </div>
            <div className="grid gap-[10px]  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto align-center justify-center items-center ">
              {/* 1 */}
              <div className="bg-white h-[120px] w-[250px] rounded-lg  ">
                <div className="flex align-center items-center gap-5">
                  <div className="bg-[#efefef] p-[7px] m-[7px] rounded-md">
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
                    <h1 className="text-[18px] font-bold ">Barqarorlik</h1>
                  </div>
                </div>
                <div>
                  <Link to={"/"}>
                    <h1 className="text-[#367250] p-[20px] cursor-pointer">
                      {" "}
                      Ko'proq →
                    </h1>
                  </Link>
                </div>
              </div>
              {/* 2 */}
              <div className="bg-white h-[120px] w-[250px] rounded-lg  ">
                <div className="flex align-center items-center gap-5">
                  <div className="bg-[#efefef] p-[7px] m-[7px] rounded-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M14.844 20H6.5C5.121 20 4 18.879 4 17.5C4 16.121 5.121 15 6.5 15H13.5C15.43 15 17 13.43 17 11.5C17 9.57 15.43 8 13.5 8H8.639C8.248 8.771 7.771 9.443 7.285 10H13.5C14.327 10 15 10.673 15 11.5C15 12.327 14.327 13 13.5 13H6.5C4.019 13 2 15.019 2 17.5C2 19.981 4.019 22 6.5 22H16.093C15.636 21.422 15.2 20.753 14.844 20ZM5 2C3.346 2 2 3.346 2 5C2 8.188 5 10 5 10C5 10 8 8.187 8 5C8 3.346 6.654 2 5 2ZM5 6.5C4.172 6.5 3.5 5.828 3.5 5C3.5 4.172 4.172 3.5 5 3.5C5.828 3.5 6.5 4.172 6.5 5C6.5 5.828 5.828 6.5 5 6.5Z"
                        fill="#32724E"
                      />
                      <path
                        d="M19 14C17.346 14 16 15.346 16 17C16 20.188 19 22 19 22C19 22 22 20.187 22 17C22 15.346 20.654 14 19 14ZM19 18.5C18.172 18.5 17.5 17.828 17.5 17C17.5 16.172 18.172 15.5 19 15.5C19.828 15.5 20.5 16.172 20.5 17C20.5 17.828 19.828 18.5 19 18.5Z"
                        fill="#32724E"
                      />
                    </svg>
                  </div>
                  <div>
                    <h1 className="text-[18px] font-bold ">Uyga yaqin ish</h1>
                  </div>
                </div>
                <div>
                  <Link to={"/"}>
                    <h1 className="text-[#367250] p-[20px] cursor-pointer">
                      {" "}
                      Ko'proq →
                    </h1>
                  </Link>
                </div>
              </div>
              {/* 3 */}
              <div className="bg-white h-[120px] w-[250px] rounded-lg  ">
                <div className="flex align-center items-center gap-5">
                  <div className="bg-[#efefef] p-[7px] m-[7px] rounded-md">
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
                    <h1 className="text-[18px] font-bold ">Karyera</h1>
                  </div>
                </div>
                <div>
                  <Link to={"/"}>
                    <h1 className="text-[#367250] p-[20px] cursor-pointer">
                      {" "}
                      Ko'proq →
                    </h1>
                  </Link>
                </div>
              </div>
              {/* 4 */}
              <div className="bg-white h-[120px] w-[250px] rounded-lg  ">
                <div className="flex align-center items-center gap-5">
                  <div className="bg-[#efefef] p-[7px] m-[7px] rounded-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z"
                        fill="#32724E"
                      />
                      <path
                        d="M14.8284 14.8281C14.6434 15.0121 14.4444 15.1771 14.2364 15.3171C14.0194 15.4631 13.7914 15.5871 13.5564 15.6861C13.3124 15.7891 13.0604 15.8671 12.8074 15.9191C12.2764 16.0271 11.7204 16.0271 11.1914 15.9191C10.9374 15.8671 10.6854 15.7891 10.4414 15.6861C10.2074 15.5871 9.97844 15.4631 9.76244 15.3171C9.55344 15.1761 9.35444 15.0121 9.16944 14.8281C8.98844 14.6471 8.82344 14.4481 8.68144 14.2361L7.02344 15.3551C7.23844 15.6731 7.48544 15.9721 7.75744 16.2441C8.03044 16.5171 8.32944 16.7641 8.64444 16.9751C8.96744 17.1931 9.31044 17.3791 9.66444 17.5281C10.0294 17.6821 10.4084 17.8001 10.7924 17.8781C11.1884 17.9591 11.5954 18.0001 11.9994 18.0001C12.4034 18.0001 12.8104 17.9591 13.2074 17.8781C13.5904 17.8001 13.9694 17.6821 14.3344 17.5281C14.6884 17.3791 15.0304 17.1931 15.3554 16.9751C15.6684 16.7631 15.9674 16.5171 16.2414 16.2441C16.5134 15.9731 16.7614 15.6731 16.9754 15.3551L15.3174 14.2361C15.1744 14.4481 15.0094 14.6471 14.8284 14.8281Z"
                        fill="#32724E"
                      />
                      <path
                        d="M8.5 12C9.32843 12 10 11.3284 10 10.5C10 9.67157 9.32843 9 8.5 9C7.67157 9 7 9.67157 7 10.5C7 11.3284 7.67157 12 8.5 12Z"
                        fill="#32724E"
                      />
                      <path
                        d="M15.493 11.986C16.3176 11.986 16.986 11.3176 16.986 10.493C16.986 9.66844 16.3176 9 15.493 9C14.6684 9 14 9.66844 14 10.493C14 11.3176 14.6684 11.986 15.493 11.986Z"
                        fill="#32724E"
                      />
                    </svg>
                  </div>
                  <div>
                    <h1 className="text-[18px] font-bold ">Do`stona jamoa</h1>
                  </div>
                </div>
                <div>
                  <Link to={"/"}>
                    <h1 className="text-[#367250] p-[20px] cursor-pointer">
                      {" "}
                      Ko'proq →
                    </h1>
                  </Link>
                </div>
              </div>
              {/* 5 */}
              <div className="bg-white h-[120px] w-[250px] rounded-lg  ">
                <div className="flex align-center items-center gap-5">
                  <div className="bg-[#efefef] p-[7px] m-[7px] rounded-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 2C8.691 2 6 4.691 6 8C6 10.967 8.167 13.432 11 13.91V17H8V19H11V21.988H13V19H16V17H13V13.91C15.833 13.431 18 10.967 18 8C18 4.691 15.309 2 12 2ZM12 12C9.794 12 8 10.206 8 8C8 5.794 9.794 4 12 4C14.206 4 16 5.794 16 8C16 10.206 14.206 12 12 12Z"
                        fill="#32724E"
                      />
                    </svg>
                  </div>
                  <div>
                    <h1 className="text-[18px] font-bold ">
                      Xodimlarga g'amxo'rlik qilish
                    </h1>
                  </div>
                </div>
                <div>
                  <Link to={"/"}>
                    <h1 className="text-[#367250] p-[20px] cursor-pointer">
                      {" "}
                      Ko'proq →
                    </h1>
                  </Link>
                </div>
              </div>
              {/* 6 */}
              <div className="bg-white h-[120px] w-[250px] rounded-lg  ">
                <div className="flex align-center items-center gap-5">
                  <div className="bg-[#efefef] p-[7px] m-[7px] rounded-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 18C16 18 17 14 17 14H7C7 14 8 18 12 18Z"
                        fill="#32724E"
                      />
                      <path
                        d="M12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22ZM12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4Z"
                        fill="#32724E"
                      />
                      <path
                        d="M8.53455 12.6341L10.5846 10.5511C11.1716 9.95408 11.1636 9.02508 10.5666 8.43308C10.2786 8.15008 9.89955 7.99608 9.50355 8.00008C9.13055 8.00308 8.77555 8.14508 8.50155 8.39908C8.22255 8.14808 7.86455 8.01208 7.49155 8.01508C7.09555 8.01908 6.71955 8.17908 6.43455 8.46708C5.84855 9.06708 5.85555 9.99708 6.45355 10.5841L8.53455 12.6341ZM15.5346 12.6341L17.5846 10.5511C18.1716 9.95408 18.1636 9.02508 17.5666 8.43308C17.2786 8.15008 16.8996 7.99608 16.5036 8.00008C16.1306 8.00308 15.7756 8.14508 15.5016 8.39908C15.2226 8.14808 14.8646 8.01208 14.4916 8.01508C14.0956 8.01808 13.7196 8.17808 13.4336 8.46608C12.8476 9.06608 12.8546 9.99608 13.4526 10.5831L15.5346 12.6341Z"
                        fill="#32724E"
                      />
                    </svg>
                  </div>
                  <div>
                    <h1 className="text-[18px] font-bold ">
                      Xodimlarni tayyorlash
                    </h1>
                  </div>
                </div>
                <div>
                  <Link to={"/"}>
                    <h1 className="text-[#367250] p-[20px] cursor-pointer">
                      {" "}
                      Ko'proq →
                    </h1>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vakentlar;
