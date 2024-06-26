import { useContext, useState } from "react";
import { UserContext } from "../context/userContext";
import { Link, NavLink } from "react-router-dom";
import { AiFillShopping } from "react-icons/ai";
import { BasketContext } from "../basketContext";
import { TbUserCircle } from "react-icons/tb";
import { AuthContext } from "../context/AuthContext";
import menuClick from "../Menu/menuClick";
import MenuClick from "../Menu/menuClick";

const Header = () => {
  const { data } = useContext(UserContext);
  const { basketData } = useContext(BasketContext);
 const {setIsAuth}=useContext(AuthContext)

  const chiqish =()=>{
 setIsAuth(false)
 localStorage.removeItem('token')
  }

  return (
    <div className="border-b-[2px] bg-white sticky top-0 z-10 sm:w-full ">
      <div className="container mx-auto  items-center p-[10px]  justify-between flex ">
        <div className="flex items-center gap-4 ">
          <Link to={"/"}>
            <div>
              <svg
                width="129"
                height="48"
                viewBox="0 0 129 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 24V48H66.4867H129V24V-3.8147e-06H66.4867H0V24ZM82.115 7.97333C86.8035 9.43999 90.1411 12.8 91.8099 17.7333C92.737 20.48 92.9754 25.2 92.3396 28.2667C90.5384 36.96 82.4858 42.0267 73.5062 40.1333C65.5066 38.4267 60.7121 30.9067 61.7452 21.68C62.169 17.6533 63.4405 14.6667 65.745 12.1333C67.97 9.68 70.8838 8.08 74.3008 7.46666C76.261 7.12 80.1548 7.36 82.115 7.97333ZM112.921 7.86666C115.703 8.58667 117.848 10.0267 119.067 12.0267C119.808 13.1733 120.524 15.4933 120.524 16.72V17.6H117.08H113.637V16.9333C113.637 15.4933 112.365 13.92 110.749 13.36C109.637 12.9867 107.2 12.9867 105.928 13.3333C103.279 14.08 102.75 17.5467 105.107 18.7733C105.505 18.96 107.862 19.7067 110.325 20.4C112.815 21.0667 115.703 22.08 116.762 22.5867C121.159 24.7467 122.775 28.6133 121.318 33.4133C119.888 38.1067 114.59 40.8533 107.809 40.4533C101.743 40.08 97.5314 37.36 96.154 32.9067C95.8626 31.9467 95.6242 30.6667 95.6242 30.1067V29.0667H99.2002H102.776V29.92C102.776 30.96 103.571 32.7467 104.26 33.3867C105.319 34.32 106.829 34.7467 109.133 34.7733C112.815 34.8267 114.696 33.4933 114.696 30.88C114.696 28.9067 113.769 28.32 108.127 26.6933C101.902 24.88 100.737 24.3467 99.0148 22.6667C97.1606 20.8533 96.5513 19.0933 96.7368 16.24C97.0281 12.16 99.783 9.06667 104.18 7.86666C106.061 7.36 110.988 7.36 112.921 7.86666ZM29.9322 10.9333V13.8667H22.6478H15.6283V17.2V20.5333H22.1181H28.6078V23.3333V26.1333H22.1181H15.6283V29.8667V33.6H22.7803H29.9322V39.7333H19.2043H8.47639V23.8667V8H19.0719H29.9322V10.9333ZM43.5739 18.9867C45.4546 24.9333 47.0439 29.7333 47.0704 29.6533C47.0969 29.5467 48.6862 24.64 50.5934 18.72L54.0634 8H57.7984C60.6591 8 61.4008 8 61.4008 8C61.3214 8.18666 58.9639 15.6533 56.1296 24.1867L50.9908 39.7333H46.9645H42.9382L38.1437 24.9867C35.4949 16.9067 33.1639 8.56 32.952 8C32.952 8 34.2764 7.97333 36.3425 8H40.1304L43.5739 18.9867Z"
                  fill="#309B42"
                ></path>
                <path
                  d="M123.543 8.10672C122.802 8.85338 122.643 9.20005 122.643 10.1601C122.643 12.6401 124.55 14.0534 126.881 13.3601C128.391 12.9067 129.079 11.7867 128.92 10.0267C128.761 8.16005 127.702 7.20005 125.795 7.20005C124.603 7.20005 124.338 7.30672 123.543 8.10672ZM127.543 8.56005C127.967 9.01338 127.993 9.22672 127.755 9.86672C127.569 10.3467 127.569 10.7201 127.728 10.8801C127.861 11.0134 127.94 11.4667 127.887 11.8934C127.781 12.8267 126.828 13.0134 126.669 12.1334C126.404 10.7467 125.371 10.5067 125.238 11.7867C125.185 12.4534 125.027 12.6934 124.576 12.7467C123.994 12.8267 123.967 12.7734 123.967 10.4267V8.00005H125.503C126.748 8.00005 127.172 8.10672 127.543 8.56005Z"
                  fill="#309B42"
                ></path>
                <path
                  d="M125.291 9.46621C125.291 9.70621 125.529 9.86621 125.953 9.86621C126.695 9.86621 126.854 9.46621 126.192 9.22621C125.529 8.95954 125.291 9.03954 125.291 9.46621Z"
                  fill="#309B42"
                ></path>
                <path
                  d="M74.327 13.7071C71.1748 14.8804 69.2147 18.1871 68.9498 22.6938C68.6849 26.7204 69.559 29.9204 71.4132 32.0004C72.8966 33.6271 74.168 34.2138 76.7639 34.3471C79.4128 34.4804 80.8697 34.0271 82.5385 32.4804C86.2469 29.0404 86.5383 19.9204 83.0683 15.7871C81.6908 14.1604 80.181 13.4938 77.6381 13.4138C76.1282 13.3604 75.0157 13.4671 74.327 13.7071Z"
                  fill="#309B42"
                ></path>
              </svg>
            </div>
          </Link>
          <nav className="items-center gap-[20px] font-normal font-sans text-[19px] hidden xl:flex">
            <Link id="activer" to={"/"} className="active:">
              Asosiy
            </Link>
            <Link id="activer" to={"/products"}>
              Filiallar
            </Link>
            <Link id="activer" to={"/vakentlar"}>
              Vakantlar
            </Link>
            <Link id="activer" to={"/yangiliklar"}>
              Yangiliklar
            </Link>
            <Link id="activer" to={"/bizhaqimizda"}>
              Biz haqimizda
            </Link>
            <Link id="activer" to={"/kontaktlar"}>
              Kontaktlar
            </Link>
          </nav>
        </div>
        <div className="flex gap-[10px]">
          <div className="flex items-center">
          <div className="hidden sm:flex">
          <select
              className="text-[19px] border p-3 ml-2 font-bold rounded-[5px] bg-[#F6F8F9] border-[#F6F8F9] "
              name=""
              id=""
            >
              Adresni kiri...
              <option value=""> 💻 Adresni kiri...</option>
            

            </select>
          </div>
            <button className="text-[19px] flex border items-center p-2 ml-2 font-bold rounded-[5px] text-[#2b2a2a] bg-[#F6F8F9] mr-[60px] border-none sm:mr-0 ">
              <Link className="flex gap-2 items-center" to={"/portfolio"}>
                <AiFillShopping className="text-[32px]" />
                Savat
                {basketData.length > 0 ? (
                  <div>
                    <span className="bg-red-700 text-white text-[15px] rounded-full px-1">
                      {" "}
                      {basketData.length}
                    </span>
                  </div>
                ) : (
                  ""
                )}
              </Link>
            </button>
          </div>

          <div className="items-center hidden  lg:flex ">
            <select
              className="bg-[#F6F8F9] border-[#F6F8F9] rounded-[5px] h-[50px] "
              name=""
              id=""
            >
              <option value="">🇺🇿  Uzbekcha</option>
              <option value="">🇷🇺  Русский</option>
              <option value="">🇳🇿  English </option>
            </select>
          </div>
          <button onClick={chiqish} className=" hidden  border bg-[#F6F8F9] border-[#F6F8F9] rounded-[5px] w-[70px] h-[50px]  px-[20px] py-[10px] active:bg-slate-300 ease-out duration-300 sm:flex ">
            <TbUserCircle className="text-[32px]" />

       
          </button>
          <div>
              {/* <div  id="hovarr" className=" relative top-[30px] bg-[#F6F8F9] border-[#F6F8F9] w-[180px] ">
              <div className="flex items-center gap-2">
                <MdFastfood className="text-[30px]" />
                <h1>Buyurtmalar</h1>
              </div>
              <div className="flex items-center gap-2">
                <PiSignIn className="text-[30px]" />
                <h1>Kirish</h1>
              </div>
            </div> */}
            </div>
        </div>
      </div>
      <MenuClick/>
    </div>
  );
};

export default Header;
