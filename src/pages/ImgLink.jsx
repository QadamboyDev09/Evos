import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBitbucket } from "react-icons/fa6";
import { FaHamburger } from "react-icons/fa";
import { FaHotdog } from "react-icons/fa6";
import { PiHamburgerFill } from "react-icons/pi";
import { PiWaveformBold } from "react-icons/pi";
const ImgLink = () => {
  const [data, setData] = useState([]);
  const url = 'https://ce1a1e26cf80d56c.mokky.dev/corusel1'

  useEffect(() => {
    axios.get(url).then((res) => setData(res.data));
  }, []);
  return (
    <div className="grid gap-[40px] container mx-auto px-14 ">
      {data.map((product) => (
        <div key={product.id}>
         
          <div className='flex gap-9 justify-between'>
            <div>
            <Link to={'/'}>
              <div className="w-[600px] py-[50px] h-[700px]">
                <img src={product.img} alt={product.img} />
              </div>

            </Link>
            </div>
            < div className='w-full h-full leading-[40px]'>
              <h1 className='text-black text-[40px] font-bold w-[650px] pt-[40px]'>{product.title}</h1>
              <div>
                <h2 className='text-black text-[23px] w-[600px] '> {product.text}</h2>
              </div>
           
            </div>
          </div>
          <Link className='' to={'/yangiliklar'}>
            <button className='border flex justify-center items-center mx-auto border-green-300 w-[200px] bg-[#259b07] text-white p-2 text-[18px] rounded-xl font-bold drop-shadow-md hover:drop-shadow-2xl'>O'tish</button>
          </Link>
        </div>
      ))}
    </div>

  )
}

export default ImgLink