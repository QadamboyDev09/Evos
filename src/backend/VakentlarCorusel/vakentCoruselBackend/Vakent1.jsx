import React, { useState, useContext } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BasketContext } from "../../../basketContext";
const Vakent1 = () => {
  const [data, setData] = useState([]);
  const { addBasket } = useContext(BasketContext);
  const navigate = useNavigate();
  const url = "https://ce1a1e26cf80d56c.mokky.dev/Vakent1";

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
        <div className="w-full h-[100px]flex justify-center items-center rounded-xl px-4 bg-white"></div>
        <div className=" ">
          {data.map((product) => (
            <div
              className=" m-3 transition ease-in-out border-black rounded-md flex gap-10 justify-center align-center items-center flex-col sm:flex-row"
              key={product.id}
            >
              <img
                className="w-[500px] h-[500px]"
                src={product.img}
                alt={product.title}
              />
              <div>
                <div className="bg-white p-[40px]">
                  <h1 className="font-bold px-7 py-4 text-[22px] text-[#585C7B]">
                    {product.title}
                  </h1>
                  <h2 className="px-7 font-normal text-[19px] text-[#585C7B]">
                    {product.text}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vakent1;
