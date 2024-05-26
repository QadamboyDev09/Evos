import React, { useContext, useEffect, useState } from "react";
import { BasketContext } from "../../basketContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const JumpCard4 = () => {
  const [data, setData] = useState([]);
  const { addBasket } = useContext(BasketContext);
  const navigate = useNavigate();
  const url = "https://ce1a1e26cf80d56c.mokky.dev/jumpcard4";
  useEffect(() => {
    axios.get(url).then((res) => setData(res.data));
  }, []);

  const onAdd = (product) => {
    addBasket(product);
  };

  return (
    <div className=" ">
      {data.map((product) => (
        <div
          className=" m-3 transition ease-in-out border-black rounded-md  flex-col justify-end bg-white hover:shadow-xl w-[300px] hidden sm:flex
    "
          key={product.id}
        >
          <div onClick={() => navigate(`/Corusel4img/${product.id}`)}>
            <img
              className="object-contain"
              src={product.img}
              alt={product.title}
            />
            <h1 className="font-bold px-7 py-4 text-[18px]">{product.title}</h1>
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
  );
};
export default JumpCard4;
