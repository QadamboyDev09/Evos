import React from "react";

const Konmtaktlar = () => {
  return (
    <div className="bg-[#e8e6e6] p-[30px]">
      <div className="container mx-auto px-14">
        <div className="bg-white  h-full w-full flex justify-around gap-7 p-[10px] flex-col lg:flex-row sm:p-[40px]">
          {/* 1 */}
          <div>
            <h1 className="text-[30px] font-bold">Kontaktlar</h1>
            <div className="flex justify-between align-center items-center leading-10 flex-col sm:flex-row">
              <div>
                <h1 className="text-[19px] font-bold">Call-центр</h1>
              </div>
              <div>
                <h1 className="text-[#5b6871] text-[15px]">+998 71-203-12-12</h1>
                <h1 className="text-[#5b6871] text-[15px]">+998 71-203-55-55</h1>
              </div>
            </div>
            <div className="flex justify-between align-center items-center leading-10 flex-col sm:flex-row">
              <div>
                <h1 className="text-[19px] font-bold pb-[20px] w-[200px]">Yetkazib berish telefon raqamlar:</h1>
              </div>
              <div>
                <h1 className="text-[#5b6871] text-[15px]">+998 71-203-12-12 </h1>
              </div>
            </div>
            <hr className="pt-[20px]" />
            <div className="flex justify-between align-center items-center leading-10 flex-col sm:flex-row">
              <div>
                <h1 className="text-[19px] font-bold">Ofis manzili:</h1>
              </div>
              <div>
                <h1 className="text-[#5b6871] text-[15px]">
                  Toshkent sh., 100066, Chilonzor <br /> tumani, Furqat boshi berk
                  ko‘chasi, 175-uy.
                </h1>
              </div>
            </div>
            <div className="flex justify-between align-center items-center leading-10 flex-col sm:flex-row">
              <div>
                <h1 className="text-[19px] font-bold">Ish vaqti:</h1>
              </div>
              <div>
                <h1 className="text-[#5b6871] text-[15px]">9:00 - 18:00, Dam olish kunlari: shanba, yakshanba</h1>
              </div>
            </div>
            <div className="flex justify-between align-center items-center leading-10 flex-col sm:flex-row">
              <div>
                <h1 className="text-[19px] font-bold">Email:</h1>
              </div>
              <div>
                <h1 className="text-[#5b6871] text-[15px]">HR – worka@evos.uz Marketing – marketing@evos.uz</h1>
              </div>
            </div>
            <div className="py-[30px]">
                <h1>Bizning bot orqali yetkazib berishga buyurtma berishingiz mumkin:</h1>
                <a className="text-green-700 " href="https://t.me/evosdeliverybot.">https://t.me/evosdeliverybot.</a>
            </div> 
          </div>
          {/* 2 */}
          <div className="hidden lg:flex">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3014178.960499233!2d54.72496032714847!3d42.45892719924497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dd9bcb9121a125%3A0xde18e47c5e1210f4!2zRVZPUyDQndGD0LrRg9GB!5e0!3m2!1sru!2s!4v1716112634094!5m2!1sru!2s"
              width="600"
              height="450"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Konmtaktlar;
