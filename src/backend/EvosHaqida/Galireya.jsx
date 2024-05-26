import React, { useState, useContext } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BasketContext } from "../../basketContext";
import SectionNavs from "../sectionNav/sectionNavs";
const Galireya = () => {
  const [data, setData] = useState([]);
  const { addBasket } = useContext(BasketContext);
  const navigate = useNavigate();
  const url = "https://ce1a1e26cf80d56c.mokky.dev/Galireya";

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  ">
          {data.map((product) => (
            <div
              className=" m-3 transition ease-in-out border-black rounded-md flex flex-col justify-end bg-white hover:shadow-xl
          "
              key={product.id}
            >
              <img
                className="w-[500px]  h-[300px]"
                src={product.img}
                alt={product.title}
              />
              <h1 id="lavashsh" className="font-bold px-7 py-24 text-[20px]">
                {product.title}
              </h1>

              <div className="flex gap-6 flex-col lg:flex-row p-[40px]">
                <div onClick={() => navigate(`/galeriya/${product.id}`)}>
                  <button className=" bg-[#edecec] p-4 cursor-pointer w-full ">
                    Batafsil→{" "}
                  </button>
                </div>
                <div>
                  <button className="bg-green-700 text-white p-4 cursor-pointer w-full ">
                    Ulashish
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Galireya;
