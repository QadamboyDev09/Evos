import React, { useContext } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


export default (props) => {
    const {setIsAuth}=useContext(AuthContext)

    const chiqish =()=>{
   setIsAuth(false)
    }
  return (
    <Menu {...props}>
      <div className="flex border text-center">
        <div className="w-[30px]  h-[30px] text-center mx-auto  ">
          <svg
            class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="HomeOutlinedIcon"
          >
            <path d="m12 5.69 5 4.5V18h-2v-6H9v6H7v-7.81zM12 3 2 12h3v8h6v-6h2v6h6v-8h3z"></path>
          </svg>
        </div>
        <Link id="activer" to={"/"}>
          Asosiy
        </Link>
      </div>
      <div className="flex border text-center">
        <div className="w-[30px] f h-[30px] text-center mx-auto ">
          <svg
            class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="StoreOutlinedIcon"
          >
            <path d="m18.36 9 .6 3H5.04l.6-3zM20 4H4v2h16zm0 3H4l-1 5v2h1v6h10v-6h4v6h2v-6h1v-2zM6 18v-4h6v4z"></path>
          </svg>
        </div>
        <Link id="activer" to={"/products"}>
          Filiallar
        </Link>
      </div>
      <div className="flex border text-center">
        <div className="w-[30px] f h-[30px] text-center mx-auto ">
          <svg
            class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="PersonAddOutlinedIcon"
          >
            <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4m-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2zm-3-3v-3h3v-2H6V7H4v3H1v2h3v3z"></path>
          </svg>
        </div>

        <div>
          <Link id="activer" to={"/vakentlar"}>
            Vakantlar
          </Link>
        </div>
      </div>
      <div className="flex border text-center">
      <div className="w-[30px] f h-[30px] text-center mx-auto ">
      <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArticleOutlinedIcon"><path d="M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"></path><path d="M14 17H7v-2h7zm3-4H7v-2h10zm0-4H7V7h10z"></path></svg>
        </div>
      <Link id="activer" to={"/yangiliklar"}>
        Yangiliklar
      </Link>
      </div>
     <div className="flex border text-center">
     <div className="w-[30px] f h-[30px] text-center mx-auto ">
     <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArticleOutlinedIcon"><path d="M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"></path><path d="M14 17H7v-2h7zm3-4H7v-2h10zm0-4H7V7h10z"></path></svg>
        </div>
     <Link id="activer" to={"/bizhaqimizda"}>
        Biz haqimizda
      </Link>
     </div>
     <div className="flex border text-center">
   <div className="w-[30px] f h-[30px] text-center mx-auto ">
     <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CallOutlinedIcon"><path d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79zm9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75zM7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1"></path></svg>
     </div>
      <Link id="activer" to={"/kontaktlar"}>
        Kontaktlar
      </Link>
     </div>
     <div className="flex border text-center">
        <div className="w-[30px] f h-[30px] text-center mx-auto ">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 7L9.6 8.4L12.2 11H2V13H12.2L9.6 15.6L11 17L16 12L11 7ZM20 19H12V21H20C21.1 21 22 20.1 22 19V5C22 3.9 21.1 3 20 3H12V5H20V19Z" fill="#323232"></path></svg>
        </div>
     <button onClick={chiqish} className=" ">
            Chiqish

       
          </button>
     </div>
    </Menu>
  );
};
