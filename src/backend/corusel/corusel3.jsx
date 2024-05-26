import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaBitbucket } from "react-icons/fa6";
import { FaHamburger } from "react-icons/fa";
import { FaHotdog } from "react-icons/fa6";
import { PiHamburgerFill } from "react-icons/pi";
import { PiWaveformBold } from "react-icons/pi";
import { Link } from "react-router-dom";
const Corusel3 = () => {
  const [data, setData] = useState([]);
  const url ='https://ce1a1e26cf80d56c.mokky.dev/corusel3'

  useEffect(() => {
    axios.get(url).then((res) => setData(res.data));
  }, []);
  return (
    <div className="grid gap-[40px] ">
    {data.map((product) => (
      <div key={product.id}>
        <div className='flex gap-10 flex-col lg:flex-row'>
          < div className='w-full h-full leading-[40px] py-[100px]'>
          <h1 className='text-white  font-bold w-[350px] pt-[40px] text-[20px] lg:text-[40px] sm:text-[30px] lg:w-[650px]  '>{product.title}</h1>
            <div className='flex gap-4 py-[40px] '>
              <button className='text-white text-[32px]' ><FaBitbucket /></button>
              <button className='text-white text-[32px]'><FaHamburger /></button>
              <button className='text-white text-[32px]'><FaHotdog /></button>
              <button className='text-white text-[32px]'><PiHamburgerFill /></button>
              <button className='text-white text-[32px]'><PiWaveformBold /></button>
            </div>
            <div>
            <h2 className='text-white text-[15px] w-[290px] lg:text-[23px] sm:text-[20px] sm:w-[500px]  '> {product.text}</h2>

            </div>
            <div className='grid grid-cols-1 w-1/2 gap-10 py-[40px] lg:gap-4 sm:grid-cols-2 sm:gap-40  '>
                <button className='border border-green-300 w-[200px] bg-[#259b07] text-white p-2 text-[18px] rounded-xl font-bold drop-shadow-md hover:drop-shadow-2xl hidden lg:flex'>Bizning menyu</button>
                <Link to={'https://app.evos.uz/'}> <button className='border border-green-300 w-[130px] bg-[#259b07] text-white p-2 text-[14px] rounded-xl font-bold drop-shadow-md hover:drop-shadow-2xl lg:text-[18px] lg:w-[200px]'>App Evos →</button></Link>
                <button className='border border-green-300 w-[200px] bg-[#259b07] text-white p-2 text-[18px] rounded-xl font-bold drop-shadow-md hover:drop-shadow-2xl hidden lg:flex'>Mahsulot tarkibi</button>
                <button className='border border-green-200 w-[130px] bg-[#32724e] text-white p-2 text-[14px] rounded-xl font-bold drop-shadow-md hover:bg-[#259b07] lg:text-[18px] lg:w-[200px]'>Партнерам</button>

              </div>
          </div>
              <div  className="w-[700px] py-[100px] h-[600px] hidden lg:flex">
                <img className="rounded-2xl" src={product.img} alt={product.img} />  
              </div>
        </div>
      </div>
    ))}
  </div>
  );
};

export default Corusel3;