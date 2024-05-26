import React, { useState, useContext } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BasketContext } from "../../../basketContext";
const BizHaqim = () => {
  const [data, setData] = useState([]);
  const { addBasket } = useContext(BasketContext);
  const navigate = useNavigate();
  const url = "https://ce1a1e26cf80d56c.mokky.dev/BizHaqimizdaCorusel1";

  useEffect(() => {
    axios.get(url).then((res) => setData(res.data));
  }, []);

  const onAdd = (product) => {
    addBasket(product);
    toast.success("qadamboy");
  };

  return (
    <div className="bg-[#F6F8F9] w-full">
      <div className="container mx-auto ">
        <div className="w-full h-full flex rounded-xl px-4 bg-white"></div>
        <div className=" ">
          {data.map((product) => (
            <div
              className=" m-3 transition ease-in-out border-black rounded-md flex gap-10 justify-center align-center items-center"
              key={product.id}
            >
              <div>
                <div className="bg-white p-[40px]">
                    <img className="relative bottom-[70px]" src="quotes.svg" alt="" />
                  <h1 className="font-bold px-7 py-4 text-[15px] text-[#585C7B]">
                    {product.title}
                  </h1>
                  <h2 className="px-7 text-[19px] text-black font-bold">
                    {product.text}
                  </h2>
                  <h1 className="px-7 text-[13px] text-[#585C7B]">Facebook</h1>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BizHaqim;
