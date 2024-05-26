import React, { useState, useContext } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BasketContext } from "../../basketContext";
import SectionNavs from "../sectionNav/sectionNavs";
const Trinwich = () => {
  const [data, setData] = useState([]);
  const { addBasket } = useContext(BasketContext);
  const navigate = useNavigate();
  const url = "https://ce1a1e26cf80d56c.mokky.dev/cardstrinwich";

  useEffect(() => {
    axios.get(url).then((res) => setData(res.data));
  }, []);

  const onAdd = (product) => {
    addBasket(product);
    toast.success("qadamboy");
  };

  return (
    <div id="trinwich" className="bg-[#F6F8F9]">
      <div className="container mx-auto ">
        <h1 className="text-[40px] font-bold ">Trinwich</h1>
        <div className="w-full h-[100px]flex justify-center items-center rounded-xl px-4 bg-white sticky top-0 "></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {data.map((product) => (
            <div
              className=" m-3 transition ease-in-out border-black rounded-md flex flex-col justify-end bg-white hover:shadow-xl
          "
              key={product.id}
            >
              <div onClick={() => navigate(`/trinvich/${product.id}`)}>
                <img
                  className="object-contain"
                  src={product.img}
                  alt={product.title}
                />
                <h1 className="font-bold px-7 py-4 text-[18px]">
                  {product.title}
                </h1>
                <h2
                  className="px-7 font-normal text-[17px] text-[#9AA6AC]"
                  id="textsizer"
                >
                  {product.text}
                </h2>
                <h1 className="text-[#209B42] font-bold px-7 py-4 ">
                  {parseInt(product.price).toLocaleString("ru")}so'm
                </h1>
              </div>
              <div className="flex">
                <button
                  onClick={() => onAdd(product)}
                  className=" flex justify-center items-center w-full bg-blur-700 bg-[#F6F8F9] text-black text-bold font-medium  px-2 py-2 m-4 rounded-sm active:text-green-500 ease-in duration-70 "
                >
                  Savatga qoshish
                </button>
              </div>
            </div>
          ))}
 

        </div>
        
      </div>
    </div>
  );
};

export default Trinwich;
