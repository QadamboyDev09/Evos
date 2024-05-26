import React, { useState, useContext } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BasketContext } from "../../basketContext";
import SectionNavs from "../sectionNav/sectionNavs";
const EvosHaqidaMakumotlar = () => {
  const [data, setData] = useState([]);
  const { addBasket } = useContext(BasketContext);
  const navigate = useNavigate();
  const url = "https://ce1a1e26cf80d56c.mokky.dev/EvosHaqidaMalumot";

  useEffect(() => {
    axios.get(url).then((res) => setData(res.data));
  }, []);

  const onAdd = (product) => {
    addBasket(product);
    toast.success("qadamboy");
  };

  return (
    <div>
      <div className="container mx-auto ">
        <div className="w-full h-[100px]flex justify-center items-center rounded-xl px-4 bg-white"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2   ">
          {data.map((product) => (
            <div
              className=" m-3 transition ease-in-out border-black rounded-md flex flex-col justify-end bg-white hover:shadow-xl
          "
              key={product.id}
            >
              
                <h1 id="lavashsh" className="font-bold px-7 py-10 text-[20px]">
                  {product.title}
                </h1>
                <h2 className="px-7 font-normal text-[17px] text-[#9AA6AC]">
                  {product.text}
                </h2>
                <img
                  className="w-[500px] p-7 h-[300px]"
                  src={product.img}
                  alt={product.title}
                />
                <div onClick={() => navigate(`/evoshaqida/${product.id}`)}>
                <h1 className="text-green-700 p-7 cursor-pointer  ">Batafsil→ </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EvosHaqidaMakumotlar;
