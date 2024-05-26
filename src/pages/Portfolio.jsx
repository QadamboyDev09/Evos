import React, { useContext, useState, useEffect } from "react";
import { BasketContext } from "../basketContext";
import BasketCard from "../BasketCard";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const { basketData } = useContext(BasketContext);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const initialQuantities = basketData.reduce((acc, item) => {
      acc[item.id] = item.quantity || 1;
      return acc;
    }, {});
    setQuantities(initialQuantities);
  }, [basketData]);

  const handleUpdateQuantity = (id, quantity) => {
    setQuantities(prev => ({
      ...prev,
      [id]: quantity
    }));
  };

  const subtotal = basketData.reduce((a, b) => a + (b.price * (quantities[b.id] || 1)), 0);

  return (
    <div>
      <div>
        {basketData.length !== 0 ? (
          basketData.map((item) => (
            <BasketCard
              key={item.id}
              item={item}
              onUpdateQuantity={handleUpdateQuantity}
            />
          ))
        ) : (
          <div className="flex flex-col justify-center items-center text-center m-[30px]">
            <div className="m-[40px]">
              <svg
                width="252"
                height="260"
                viewBox="0 0 252 260"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.6864 113.676C26.6864 113.676 70.996 111.902 80.5713 39.0665C89.0745 -25.6185 163.792 3.82378 185.39 29.6087C213.369 63.011 198.454 120.47 234.648 127.729C270.841 134.987 247.206 215.691 192.267 207.967C123.923 198.357 140.459 238.293 119.942 255.197C105.218 267.328 44.8445 255.65 42.8323 211.612C41.139 174.554 25.5073 174.671 14.4275 170.47C-1.55218 164.409 -11.6211 120.52 26.6864 113.676Z"
                  fill="#309B42"
                  fill-opacity="0.1"
                ></path>
                <path
                  d="M177.314 194.565L133.781 151.549L125.161 160.272L168.694 203.289L177.314 194.565Z"
                  fill="#007749"
                ></path>
                <path
                  d="M193.944 206.123L160.075 172.656C159.887 172.47 159.583 172.472 159.396 172.661L146.577 185.634C146.391 185.822 146.393 186.126 146.581 186.312L180.45 219.779C180.639 219.965 180.942 219.964 181.129 219.775L193.948 206.802C194.134 206.614 194.132 206.31 193.944 206.123Z"
                  fill="#309B42"
                ></path>
                <path
                  d="M95.198 173.183C125.147 173.183 149.426 148.904 149.426 118.955C149.426 89.0053 125.147 64.7266 95.198 64.7266C65.2487 64.7266 40.97 89.0053 40.97 118.955C40.97 148.904 65.2487 173.183 95.198 173.183Z"
                  fill="#309B42"
                ></path>
                <path
                  d="M95.198 164.335C120.261 164.335 140.578 144.017 140.578 118.955C140.578 93.8924 120.261 73.5752 95.198 73.5752C70.1355 73.5752 49.8184 93.8924 49.8184 118.955C49.8184 144.017 70.1355 164.335 95.198 164.335Z"
                  fill="#D4E5FF"
                ></path>
              </svg>
            </div>
            <div>
              <h1 className="text-[30px]">
                Hmm...hech narsa topilmadi! Savatingiz bo'sh, «Menu» ni oching <br />
                va yoqtirgan mahsulotingizni tanlang!
              </h1>
            </div>
            <div>
              <Link to={"/"}>
                <button className="w-[300px] border m-[70px] bg-[#209B42] text-white p-5 rounded-xl ">
                  Savatga Qo'shish
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
      {basketData.length > 0 && (
        <div className="text-center w-[400px] flex justify-center bg-white items-center mx-auto p-4">
          <h2 className="text-2xl font-bold border-t-2 p-[20px] border-green-600">Umumiy narx : <span className="text-green-600">{subtotal.toLocaleString("ru")}</span> so'm</h2>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
