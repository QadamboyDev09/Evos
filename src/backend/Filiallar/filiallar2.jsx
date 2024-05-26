import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { BasketContext } from '../../basketContext';

const Filiallar2 = () => {

    const [data, setData] = useState([]);
    const { addBasket } = useContext(BasketContext);
    const navigate = useNavigate();
    const url = "https://ce1a1e26cf80d56c.mokky.dev/faillarim";
  
    useEffect(() => {
      axios.get(url).then((res) => setData(res.data));
    }, []);
  
    const onAdd = (product) => {
      addBasket(product);
      toast.success("qadamboy");
    };
  return (
    <div>
           <div className="bg-[#F6F8F9]">
      <div className="container mx-auto ">
        <h1 className="text-[40px] font-bold m-[40px] ">Filiallar</h1>
        <div className="m-[40px] ">
          {data.map((product) => (
            <div
              className=" m-3 transition ease-in-out border-black rounded-md flex flex-col justify-end bg-white hover:shadow-xl
          "
              key={product.id}
            >
              <div className='flex p-[20px] ' onClick={() => navigate(`/filiallar/${product.id}`)}>
               <div>
               <img
                  className=" w-[800px] h-[100px] sm:w-[100px] h-[100px] "
                  src={product.img}
                  alt={product.title}
                />
               </div>
                <h1 id="lavashsh" className="font-bold px-7 py-4 text-[18px]">
                  {product.title}
                </h1>
               <div className='flex flex-col justify-center items-center'>
               <h2
                  className="px-7 font-normal text-[17px] text-[#9AA6AC]"
                  id="textsizer"
                >
                  {product.text}
                </h2>
                <h1 className="text-[#5e5e5e] font-bold px-7 py-4 ">
                  {product.price}
                </h1>
               </div>
              </div>
              <div className="flex">
              </div>
            </div>
          ))}
 

        </div>
        
      </div>
    </div>
    </div>
  )
}

export default Filiallar2