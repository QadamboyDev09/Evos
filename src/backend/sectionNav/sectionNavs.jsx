
import { Link } from "react-scroll";
import "swiper/css";


// import required modules





import React from 'react'

const sectionNavs = () => {
  return (
    <div className="">
      
      <div className="flex gap-[50px] overflow-x-auto w-[1100px] container mx-auto p-[30px]  ">
          <Link
            to={"yangiliklar"}
            spy={true}
            smooth={true}
            offset={-100}
            duration={150}
          >
            <h1 className="text-center cursor-pointer p-[5px]">Yangiliklar</h1>
          </Link>
    
          <Link
            to={"lavash"}
            spy={true}
            smooth={true}
            offset={-100}
            duration={150}
          >
            <h1 className="text-center cursor-pointer    p-[5px]">Lavash</h1>
          </Link>

          <Link
            to="trinwich"
            spy={true}
            smooth={true}
            offset={-100}
            duration={150}
          >
            <h1 className="text-center cursor-pointer   p-[5px]  ">Trinwich</h1>
          </Link>

          {" "}
          <Link
            to="shaurma"
            spy={true}
            smooth={true}
            offset={-100}
            duration={150}
          >
            <h1 className="text-center cursor-pointer    p-[5px]  ">Shaurma</h1>
          </Link>

          {" "}
          <Link
            to="burgerlar"
            spy={true}
            smooth={true}
            offset={-100}
            duration={150}
          >
            <h1 className="text-center cursor-pointer  p-[5px]  ">Burgerlar</h1>
          </Link>

          <Link
            to="xotdog"
            spy={true}
            smooth={true}
            offset={-100}
            duration={150}
          >
            <h1 className="text-center cursor-pointer   p-[5px] ">XodDog</h1>
          </Link>

          {" "}
          <Link
            to="kartoshka"
            spy={true}
            smooth={true}
            offset={-100}
            duration={150}
          >
            <h1 className="text-center cursor-pointer   p-[5px]  ">Kartoshka</h1>
          </Link>

          <Link
            to="sneklar"
            spy={true}
            smooth={true}
            offset={-100}
            duration={150}
          >
            <h1 className="text-center cursor-pointer   p-[5px]  ">Sneklar</h1>
          </Link>

          <Link to="taom" spy={true} smooth={true} offset={-100} duration={150}>
            <h1 className="text-center cursor-pointer   p-[5px]  ">Taom</h1>
          </Link>

          <Link
            to="combo"
            spy={true}
            smooth={true}
            offset={-100}
            duration={150}
          >
            <h1 className="text-center cursor-pointer   p-[5px]  ">COMBO</h1>
          </Link>
  
          {" "}
          <Link
            to="desertlar"
            spy={true}
            smooth={true}
            offset={-100}
            duration={150}
          >
            <h1 className="text-center cursor-pointer    p-[5px] ">Desertlar</h1>
          </Link>
     
          <Link
            to="souslar"
            spy={true}
            smooth={true}
            offset={-100}
            duration={150}
          >
            <h1 className="text-center cursor-pointer   p-[5px]  ">Souslar</h1>
          </Link>
    
          <Link
            to="boshqalar"
            spy={true}
            smooth={true}
            offset={-100}
            duration={150}
          >
            <h1 className="text-center cursor-pointer   p-[5px]  ">Boshqalar</h1>
          </Link>
      
          <Link
            to="sharbatlar"
            spy={true}
            smooth={true}
            offset={-100}
            duration={150}
          >
            <h1 className="text-center cursor-pointer   p-[5px]  ">Sharbatlar</h1>
          </Link>
      
          <Link
            to="ichimliklar"
            spy={true}
            smooth={true}
            offset={-100}
            duration={150}
          >
            <h1 className="text-center cursor-pointer    p-[5px] ">Ichimliklar</h1>
          </Link>

          <Link to="choy" spy={true} smooth={true} offset={-100} duration={150}>
            <h1 className="text-center cursor-pointer   p-[5px]  ">Choy</h1>
          </Link>
      
  
          <Link
            to="qahva"
            spy={true}
            smooth={true}
            offset={-100}
            duration={150}
          >
            <h1 className="text-center cursor-pointer    p-[5px] ">Qahva</h1>
          </Link>
      
   
      </div>

    </div>
  )
}

export default sectionNavs
