import React, { useState, useContext } from "react";
import axios from "axios";
import { useEffect } from "react";
import { BasketContext } from "../basketContext";
import { Link, useNavigate } from "react-router-dom";
import Corusel from "./coruse";
import SectionNavs from "../backend/sectionNav/sectionNavs";
import Yangiliklar from "../backend/sectionScroolCards/Yangiliklar";
import LinkCard from "../backend/linkCards/linkCard";
import Lavash from "../backend/sectionScroolCards/Lavash";
import Trinwich from "../backend/sectionScroolCards/Trinwich";
import Shoerma from "../backend/sectionScroolCards/Shaurma";
import Negaevos from "../backend/sectionScroolCards/Negaevos";
import Burgerlar from "../backend/sectionScroolCards/Burgerlar";
import XotDog from "../backend/sectionScroolCards/XotDog";
import Kartoshka from "../backend/sectionScroolCards/Kartoshka";
import { AiFillShopping } from "react-icons/ai";

const User = () => {
  const { basketData } = useContext(BasketContext);
  const [data, setData] = useState([]);
  const { addBasket } = useContext(BasketContext);
  const navigate = useNavigate();
  const url = "https://ce1a1e26cf80d56c.mokky.dev/cardsyangiliklar";

  useEffect(() => {
    axios.get(url).then((res) => setData(res.data));
  }, []);
  const onAdd = (product) => {
    addBasket(product);
  };

  // console.log(fixed);

  // console.log(scroll);

  // console.log(window.scrollY >= 500);
  return (
    <div className="bg-[#F6F8F9]">
      <div className="bg-[url(evosicons.png)]  w-full">.</div>
      <div className="bg-gradient-to-r from-[#32724e] to-[#32724e] h-[100%] w-full ">
        <Corusel />
      </div>

      <div className="w-full h-[100px] border flex justify-center items-center rounded-xl gap-[30px]   px-4 z-10 bg-white sticky top-0 ">
        <SectionNavs />
     
      </div>
      <h1 className="text-[50px] font-bold flex justify-center p-[40px]">
        Sotuv xitlari
      </h1>
      <div className="w-full py-[20px] h-[600px] flex ">
        <LinkCard />
      </div>
      <div   className="container mx-auto px-14 ">
        <Yangiliklar />
        <Lavash />
        <Trinwich />
        <Shoerma />
        <Burgerlar />
        <XotDog />
        <Kartoshka />
        <Negaevos />
      </div>
    </div>
  );
};

export default User;
