import { Link, Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import Asosiy from "../pages/Asosiy";
import Portfolio from "../pages/Portfolio";
import Bizhaqimizda from "../pages/Bizhaqimizda";
import Layout from "../Layout";
import { BiSolidMessageError } from "react-icons/bi";
import Filiallar from "../pages/Filiallar";
import Vakentlar from "../pages/Vakentlar";
import Yangiliklar from "../pages/yangiliklar";
import ImgLink from "../pages/ImgLink";
import { ToastContainer } from "react-toastify";
import DynamikPage from "../pages/dyamicpage/DynamikPage";
import Lavash from "../pages/dyamicpage/Lavash";
import CoruselImg1 from "../pages/dyamicpage/coruselimg1";
import CoruselImg2 from "../pages/dyamicpage/coruselimg2";
import CoruselImg3 from "../pages/dyamicpage/coruselimg3";
import CoruselImg4 from "../pages/dyamicpage/coruselimg4";
import CoruselImg5 from "../pages/dyamicpage/coruselimg5";
import Trinvich from "../pages/dyamicpage/Trinvich";
import Shoerma from "../pages/dyamicpage/Shoerma";
import Burgerlar from "../pages/dyamicpage/Burgerlar";
import Kartoshka from "../pages/dyamicpage/Kartoshka";
import XotDog from "../pages/dyamicpage/XotDog";
import Filiallar2 from "../pages/dyamicpage/Filialklar2";
import Auth from "../pages/Auth";
import Login from "../companents/AuthForm/Login";
import Register from "../companents/AuthForm/Register";
import { AuthContext } from "../context/AuthContext";
import EvosHaqidaU from "../pages/dyamicpage/EvosHaqidaU";
import GaleriyaRoyhat from "../pages/dyamicpage/GaleriyaRoyhat";
import Konmtaktlar from "../pages/Konmtaktlar";


const privateRoute =createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Asosiy />,
      },
      {
        path: "/products",
        element: <Filiallar />,
      },
      {
        path: "/products/:id",
        element: <DynamikPage />,
      },
      {
        path: "/lavash/:id",
        element: <Lavash />,
      },
      {
        path: "/trinvich/:id",
        element: <Trinvich />,
      },
      {
        path: "/shoerma/:id",
        element: <Shoerma />,
      },
      {
        path: "/burgerlar/:id",
        element: <Burgerlar />,
      },
      {
        path: "/xotdog/:id",
        element: <XotDog />,
      },
      {
        path: "/kartoshka/:id",
        element: <Kartoshka />,
      },
      {
        path: "/filiallar/:id",
        element: <Filiallar2 />,
      },
      {
        path: "/Corusel1img/:id",
        element: <CoruselImg1 />,
      },
      {
        path: "/Corusel2img/:id",
        element: <CoruselImg2 />,
      },
      {
        path: "*",
        element: 
          <div className="text-center ">
            <span className="text-center text-[25px]">
              <BiSolidMessageError className="ml-[690px] text-[200px]" /> Not
              found Hey developer
            </span>
            <div>
              <Link>
                <button
                  className="border p-2 b-2 bg-black text-white rounded-2xl"
                  to="/"
                >
                  Back
                </button>
              </Link>
            </div>
          </div>
      },
      {
        path: "/Corusel3img/:id",
        element: <CoruselImg3 />,
      },
      {
        path: "/Corusel4img/:id",
        element: <CoruselImg4 />,
      },
      {
        path: "/Corusel5img/:id",
        element: <CoruselImg5 />,
      },
      {
        path: "/evoshaqida/:id",
        element: <EvosHaqidaU />,
      },
      {
        path: "/galeriya/:id",
        element: <GaleriyaRoyhat />,
      },
      {
        path: "/vakentlar",
        element: <Vakentlar />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },

      {
        path: "/yangiliklar",
        element: <Yangiliklar />,
      },
      {
        path: "/bizhaqimizda",
        element: <Bizhaqimizda />,
      },
      {
        path: "/kontaktlar",
        element: <Konmtaktlar />,
      },
      {
        path: "imglink",
        element: <ImgLink />,
      },
    ],
  },
])

const publucRout = createBrowserRouter([
  {
    path:'*',
    element: localStorage.getItem("token") ? <Navigate to={'/'}/> : <Auth/>,
    children:[
     {
      path:'*',
      element:<Login/>,
     },
     {
      path:'register',
      element:<Register/>,
     }
    ]
  }
])

const Routers = () => {
  const {isAuth} = useContext(AuthContext)

  return <RouterProvider router={isAuth ? privateRoute : publucRout} />;
};

export default Routers;
