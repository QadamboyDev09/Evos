import React, { useState, useEffect, useContext } from "react";
import { BasketContext } from "./basketContext";

const BasketCard = ({ item, onUpdateQuantity }) => {
  const { deletProduck } = useContext(BasketContext);
  const [counter, setCounter] = useState(item.quantity || 1);

  const decrement = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const increment = () => {
    if (counter < 10) {
      setCounter(counter + 1);
    }
  };

  useEffect(() => {
    if (onUpdateQuantity) {
      onUpdateQuantity(item.id, counter);
    }
  }, [counter, item.id, onUpdateQuantity]);

  const calculate = parseInt(item.price) * counter;

  return (
    <div className="flex items-center gap-9 px-[40px] py-[35px] mx-40 justify-between flex-col lg:flex-row" key={item.id}>
      <div className="flex flex-col lg:flex-row">
        <div>
          <img className="h-[300px] object-contain" src={item.img} alt={item.title} />
        </div>
        <div className="mt-8 p-4 leading-[20px] sm:leading-[30px]">
          <span className="font-black text-[#259B07]">{item.desc}</span>
          <h1 className="font-bold w-[300px] text-center sm:w-[300px]">{item.title}</h1>
          <h3 className="hidden sm:flex">Mahsulot haqida: {item.text}</h3>
        </div>
      </div>
      <div id="producInbasket" className="flex flex-col gap-4">
        <p className="text-center" id="price">
          {calculate.toLocaleString("ru")} so'm
        </p>
        <div className="flex items-center">
          <button
            onClick={decrement}
            className="border p-1 w-[40px] active:bg-slate-300 ease-in duration-300"
          >
            -
          </button>
          <span className="px-[7px]">{counter}</span>
          <button
            onClick={increment}
            className="border p-1 w-[40px] active:bg-slate-300 ease-in duration-300"
          >
            +
          </button>
        </div>
        <button
          onClick={() => deletProduck(item.id)}
          className="w-[100px] text-white bg-[#259B07] px-2 py-1 rounded-2xl active:bg-slate-600 ease-in duration-300"
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default BasketCard;
